/* globals CKEDITOR */

/**
 * pastefromword-extension plugin which replaces symbol font characters by their corresponding entities.
 * The plugin listens to event <code>afterPasteFromWord</code> with priority 10.
 * <p>
 * For more information read the description of the {@link CharacterFontFamilyMapper}.
 */
(function () {
  /*
   * Developer-Note: The plugin might be extended in the future so that it can do replacement of characters
   * for actually any font. It is assumed that only minor adjustments are required.
   */

  "use strict";

  /**
   * Name of this plugin.
   * @type {string}
   */
  var PLUGIN_NAME = "cmsymbolfontmapper";

  if (typeof CKEDITOR.coremedia === 'undefined') {
    // Create CoreMedia Namespace
    CKEDITOR.coremedia = {};
  }

  // If adapted, also change studio-developer-en/src/main/docbook/Section_Customizing_RichTextPropertyField.xml
  /**
   * Priority to use for the listener.
   * @type {number}
   */
  var EVENT_LISTENER_PRIORITY = 10;
  /**
   * Helper element for decoding HTML entities like &amp;quot; which are contained in the MS Word clipboard
   * content. For processing in here we require the real characters instead of their HTML entities.
   * @type {Element}
   */
  var DECODE_ELEMENT_HELP = document.createElement("div");
  /**
   * Font name in lower case whose characters shall be mapped. Might be a configurable option in the future.
   * @type {string}
   */
  var FONT_NAME = 'symbol';

  /**
   * Minimum replacement map for custom mapping. As we decode the HTML prior to replacement we need to ensure
   * also for custom mappings, that the encoded characters are restored.
   * @type {Object}
   */
  var HTML_ENCODING_MAP = {
    38: '&amp;',
    60: '&lt;',
    62: '&gt;'
  };

  /**
   * Maps characters to their corresponding entity. Missing characters will be kept as is. Also includes
   * HTML_ENCODING_MAP automatically.
   *
   * @see <a href="http://www.alanwood.net/demos/symbol.html">Symbol font – Unicode alternatives for Greek and special characters in HTML</a>
   * @see <a href="https://en.wikipedia.org/wiki/Symbol_(typeface)">Symbol (typeface) - Wikipedia</a>
   * @see <a href="http://www.fileformat.info/info/unicode/char/search.htm">Unicode Character Search</a>
   * @type {Object}
   */
  var SYMBOL_FONT_CHARACTER_TO_REPLACEMENT_MAP = {
    // Punctuation
    34: '&forall;', // " = ∀
    36: '&exist;', // $ = ∃
    38: '&amp;', // & = & ... just required to do HTML encoding on the fly, see CMS-4983
    39: '&#x220d;', // ' = ∍
    45: '&minus;', // - = −
    60: '&lt;', // < = < ... just required to do HTML encoding on the fly, see CMS-4983
    62: '&gt;', // > = > ... just required to do HTML encoding on the fly, see CMS-4983
    64: '&cong;', // @ = ≅

    // Alphabetic (Uppercase)
    65: '&Alpha;', // A = Α
    66: '&Beta;', // B = Β
    67: '&Chi;', // C = Χ
    68: '&Delta;', // D = Δ
    69: '&Epsilon;', // E = Ε
    70: '&Phi;', // F = Φ
    71: '&Gamma;', // G = Γ
    72: '&Eta;', // H = Η
    73: '&Iota;', // I = Ι
    74: '&thetasym;', // J = ϑ
    75: '&Kappa;', // K = Κ
    76: '&Lambda;', // L = Λ
    77: '&Mu;', // M = Μ
    78: '&Nu;', // N = Ν
    79: '&Omicron;', // O = Ο
    80: '&Pi;', // P = Π
    81: '&Theta;', // Q = Θ
    82: '&Rho;', // R = Ρ
    83: '&Sigma;', // S = Σ
    84: '&Tau;', // T = Τ
    85: '&Upsilon;', // U = Υ
    86: '&sigmaf;', // V = ς
    87: '&Omega;', // W = Ω
    88: '&Xi;', // X = Ξ
    89: '&Psi;', // Y = Ψ
    90: '&Zeta;', // Z = Ζ

    // Extended punctuation
    92: '&there4;', // \ = ∴
    94: '&perp;', // ^ = ⊥
    96: '&#xF8E5;', // ` = ... see explanation at Wikipedia, special use character

    // Alphabetic (Lowercase)
    97: '&alpha;', // a = α
    98: '&beta;', // b = β
    99: '&chi;', // c = χ
    100: '&delta;', // d = δ
    101: '&epsilon;', // e = ε
    102: '&phi;', // f = φ
    103: '&gamma;', // g = γ
    104: '&eta;', // h = η
    105: '&iota;', // i = ι
    106: '&#x3d5;', // j = ϕ
    107: '&kappa;', // k = κ
    108: '&lambda;', // l = λ
    109: '&mu;', // m = μ
    110: '&nu;', // n = ν
    111: '&omicron;', // o = ο
    112: '&pi;', // p = π
    113: '&theta;', // q = θ
    114: '&rho;', // r = ρ
    115: '&sigma;', // s = σ
    116: '&tau;', // t = τ
    117: '&upsilon;', // u = υ
    118: '&piv;', // v = ϖ
    119: '&omega;', // w = ω
    120: '&xi;', // x = ξ
    121: '&psi;', // y = ψ
    122: '&zeta;', // z = ζ

    // Extended punctuation
    160: '&euro;', // = €

    // International
    161: '&upsih;', // ¡ = ϒ

    // Extended punctuation
    162: '&prime;', // ¢ = ʹ
    163: '&le;', // £ = ≤
    164: '&frasl;', // ¤ = ⁄
    165: '&infin;', // ¥ = ∞

    // International
    166: '&fnof;', // ¦ = ƒ

    // Extended punctuation
    167: '&clubs;', // § = ♣
    168: '&diams;', // ¨ = ♦
    169: '&hearts;', // © = ♥
    170: '&spades;', // ª = ♠
    171: '&harr;', // « = ↔
    172: '&larr;', // ¬ = ←
    173: '&uarr;', // ­ = ↑
    174: '&rarr;', // ® = →
    175: '&darr;', // ¯ = ↓
    178: '&Prime;', // ² = ʺ
    179: '&ge;', // ³ = ≥
    180: '&times;', // ´ = ≥
    181: '&prop;', // µ = ∝
    182: '&part;', // ¶ = ∂
    183: '&bull;', // · = •
    184: '&divide;', // ¸ = ÷
    185: '&ne;', // ¹ = ≠
    186: '&equiv;', // º = ≠
    187: '&asymp;', // » = ≈
    188: '&hellip;', // ¼ = …
    189: '&#x23d0;', // ½ = ⏐
    190: '&#x23af;', // ¾ = ⎯
    191: '&#x21b2;', // ¿ = ↵

    // International
    192: '&alefsym;', // À = ℵ
    193: '&image;', // Á = ℑ
    194: '&real;', // Â = ℜ
    195: '&weierp;', // Ã = ℘

    // Extended punctuation
    196: '&otimes;', // Ä = ⊗
    197: '&oplus;', // Å = ⊕
    198: '&empty;', // Æ = ∅
    199: '&cap;', // Ç = ∩
    200: '&cup;', // È = ∪
    201: '&sup;', // ╔ = ⊃
    202: '&supe;', // ╩ = ⊇
    203: '&nsub;', // Ë = ⊄
    204: '&sub;', // Ì = ⊂
    205: '&sube;', // Í = ⊆
    206: '&isin;', // Î = ∈
    207: '&notin;', // Ï = ∉
    208: '&ang;', // Ð = ∠
    209: '&nabla;', // Ñ = ∇
    210: '&reg;', // Ò = ®, see also 226 (duplicate by intention)
    211: '&copy;', // Ó = ©, see also 227 (duplicate by intention)
    212: '&trade;', // Ô = ™, see also 228 (duplicate by intention)
    213: '&prod;', // Õ = ∏
    214: '&radic;', // Ö = √
    215: '&sdot;', // × = ⋅
    216: '&not;', // Ø = ¬
    217: '&and;', // Ù = ∧
    218: '&or;', // Ú = ∨
    219: '&hArr;', // Û = ⇔
    220: '&lArr;', // Ü = ⇐
    221: '&uArr;', // Ý = ⇑
    222: '&rArr;', // Þ = ⇒
    223: '&dArr;', // ß = ⇓
    224: '&loz;', // à = ◊
    225: '&#x3008;', // á = 〈
    226: '&reg;', // Ò = ®, see also 210 (duplicate by intention)
    227: '&copy;', // Ó = ©, see also 211 (duplicate by intention)
    228: '&trade;', // Ô = ™, see also 212 (duplicate by intention)
    229: '&sum;', // å = ∑
    230: '&#x239b;', // æ = ⎛
    231: '&#x239c;', // ç = ⎜
    232: '&#x239d;', // è = ⎝
    233: '&#x23a1;', // é = ⎡
    234: '&#x23a2;', // ê = ⎢
    235: '&#x23a3;', // ë = ⎣
    236: '&#x23a7;', // ì = ⎧
    237: '&#x23a8;', // í = ⎨
    238: '&#x23a9;', // î = ⎩
    239: '&#x23aa;', // ï = ⎪
    241: '&#x3009;', // ñ = 〉
    242: '&int;', // ò = ∫
    243: '&#x2320;', // ó = ⌠
    244: '&#x23ae;', // ô = ⎮
    245: '&#x2321;', // õ = ⌡
    246: '&#x239e;', // ö = ⎞
    247: '&#x239f;', // ÷ = ⎟
    248: '&#x23a0;', // ø = ⎠
    249: '&#x23a4;', // ù = ⎤
    250: '&#x23a5;', // ú = ⎥
    251: '&#x23a6;', // û = ⎦
    252: '&#x23ab;', // ü = ⎫
    253: '&#x23ac;', // ý = ⎬
    254: '&#x23ad;' // þ = ⎭
  };

  /**
   * <p>
   * This class will map characters of a given font-family to their alternative representation. For example
   * for the Symbol font characters might be replaced by their Unicode equivalents.
   * <p>
   * When detecting a given font in the font-family style attribute the replacement for all characters inside
   * the element will be performed recursively &mdash; until a nested element is found which overrides the
   * font-family.
   * <p>
   * Upon processing font-family style settings will be removed from the element, if it matches the given
   * font-family.
   * <p>
   * <b>Configuration:</b>
   * <p>
   * The font-name will be a full match (i. e. not partial), ignoring the case. It is also located within a
   * set of alternative font-families &mdash; and again, on match, the complete font-family setting will
   * be removed.
   * <p>
   * The replacement map has keys denoting the character code and contains the corresponding HTML replacement
   * to use instead. Mind that the HTML replacement (typically entities) must be already encoded. The replacement
   * will be taken as is.
   * <p>
   * In addition to this the custom replacement map might denote how to combine with the default setting by
   * specifying an attribute <code>mode</code> which defaults to add/override but might be set to
   * <code>replace</code> in order to specify a completely different mapping.
   * <p>
   * Special care has been taken for the characters ampersand (&amp;), less-than (&lt;) and greater-than (&gt;):
   * Unless you explicitly override the replacement it is ensured that they are also encoded after the mapping
   * has been applied.
   */
  CKEDITOR.coremedia.CharacterFontFamilyMapper = CKEDITOR.tools.createClass({
    /**
     * Constructor.
     *
     * @param {CKEDITOR} editor instance
     * @param {string} fontName the font-name to replace
     */
    $: function (editor, fontName) {
      this.editor = editor;
      this.logger = new CKEDITOR.coremedia.Logger(editor, PLUGIN_NAME);
      /**
       * Font name escaped for usage in regular expression.
       * @type {string}
       * @see <a href="https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript">regex - Is there a RegExp.escape function in Javascript? - Stack Overflow</a>
       */
      var fontNameRegExp = fontName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      /**
       * Pattern for an initial check if this plugin has to do anything. Mind that the pattern also applies
       * to font-names just starting with the given font-name. This is ok, as this pattern is just the
       * admission ticket to the wonderful world of character replacement. So a more thorough check is done
       * later on.
       * @type {RegExp}
       */
      this.fontFamilyAdmissionPattern = new RegExp("font-family\\s*:(?:[^,;>]*,)*\\s*" + fontNameRegExp + "\\b", 'i');
      /**
       * Pattern to match the actual font-family in style setting. This check is more thorough than
       * <code>fontFamilyAdmissionPattern</code> as it ensures, that it is really only the exactly given
       * font-name which matches.
       * @type {RegExp}
       */
      this.fontFamilyPattern = new RegExp("^(?:[^,;]*,)*\\s*" + fontNameRegExp + "\\s*(?:,.*|)$", 'i');
      /**
       * The mapping object used to map characters to another representation. Keys: character codes, values:
       * HTML code to replace with, most likely an entity. By default a reference to the default character
       * mapping.
       * @type {Object}
       */
      this.character2ReplacementMap = SYMBOL_FONT_CHARACTER_TO_REPLACEMENT_MAP;
      var customCharacter2ReplacementMap = editor.config.symbolCharacterReplacementMap;
      if (customCharacter2ReplacementMap) {
        var modeAppend = true;
        var customMapping = CKEDITOR.tools.copy(customCharacter2ReplacementMap);
        if (customMapping.hasOwnProperty('mode')) {
          modeAppend = customMapping.mode.toLowerCase() !== 'replace';
          delete customMapping.mode;
        }
        if (modeAppend) {
          if (Object.keys(customMapping).length !== 0) {
            // Clone default mapping
            this.character2ReplacementMap = CKEDITOR.tools.copy(SYMBOL_FONT_CHARACTER_TO_REPLACEMENT_MAP);
            for (var charCode in customMapping) {
              this.character2ReplacementMap[charCode] = customMapping[charCode];
            }
          }
        } else {
          // Enforce the ampersand, greater-than and less-than are encoded.
          for (var defaultCharCode in HTML_ENCODING_MAP) {
            if (!customMapping.hasOwnProperty(defaultCharCode)) {
              customMapping[defaultCharCode] = HTML_ENCODING_MAP[defaultCharCode];
            }
          }
          this.character2ReplacementMap = customMapping;
        }
      }
      this.logger.info("Initialized replacement map with", this.character2ReplacementMap);
    },

    proto: {
      /**
       * Replaces characters by the result of the given function.
       * @param str text, without HTML entities
       * @param fn function to transform character codes to characters or a corresponding HTML entity;
       * the result must be HTML encoded
       * @returns {string} new string with replaced characters
       */
      replaceCharactersBy: function (str, fn) {
        var result = '';
        for (var i = 0; i < str.length; i++) {
          result += fn(str.charCodeAt(i));
        }
        return result;
      },

      /**
       * Decodes all HTML entities of the content of a text node.
       * @param str text node content
       * @see <a href="https://stackoverflow.com/questions/5796718/html-entity-decode">javascript - HTML Entity Decode - Stack Overflow</a>
       */
      decodeHtmlEntities: function (str) {
        DECODE_ELEMENT_HELP.innerHTML = str;
        return DECODE_ELEMENT_HELP.textContent;
      },

      /**
       * Replaces characters by their corresponding replacement. Encoding of &amp;, &lt; and &gt; is done
       * on the fly.
       *
       * @param str String which contains characters which were formatted with font-family Symbol. The String must
       * be encoded.
       * @returns {string} the String with symbol characters replaced by HTML entities where applicable
       */
      replaceCharactersInText: function (str) {
        // CMS-4983: Some characters like ", ' and non-breakable-space will be encoded when Word places the HTML
        // into the clipboard. Thus to prevent for example &nbsp; to be transformed to &&nu;&beta;&sigma;&pi;; we
        // need to first decode the HTML.
        var self = this;
        return this.replaceCharactersBy(this.decodeHtmlEntities(str), function (code) {
          return self.character2ReplacementMap.hasOwnProperty(code) ? self.character2ReplacementMap[code] : String.fromCharCode(code);
        });
      },

      /**
       * Applies the mapper to the given HTML text. Either returns the text unmodified if no mapping is necessary or
       * returns the text with the mappings applied. A quick-path exists if the mapping is not applicable at all.
       *
       * @param {string} mswordHtml HTML to perform replacement on
       * @returns {string} the HTML with possibly mapped characters
       */
      replaceCharactersInHtml: function (mswordHtml) {
        if (!mswordHtml.match(this.fontFamilyAdmissionPattern)) {
          // Rough check: Nothing to do. No Symbol-Font ahead.
          this.logger.debug('Pasted MSWord HTML contains no symbol font-family. Skipping further processing.');
          return mswordHtml;
        }

        var fragment = CKEDITOR.htmlParser.fragment.fromHtml(mswordHtml);

        this.logger.debug('MSWord HTML Fragment to process:', fragment);

        var filterState = {
          /**
           * Keeps track of the element path, assumes that the filter is applied sequentially to the DOM.
           * @type {Array}
           */
          elementPath: [],
          /**
           * Keeps track of the font-family styles, which correspond to the elementPath-array. Initial font-family
           * will be either the font-family of the parent or undefined. Thus the array always tells which is the
           * currently set font-family.
           * @type {Array}
           */
          fontFamilyPath: []
        };
        // see https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
        var self = this;
        var filter = new CKEDITOR.htmlParser.filter({
          elements: {
            /**
             * Matches any element.
             * @param element current element this filter, used to track state
             */
            $: function (element) {
              var parent = element.parent;
              // expected: if element has no parent, parentPosition === -1 is the expected state
              var parentPosition = filterState['elementPath'].indexOf(parent);
              if (parentPosition === -1) {
                filterState['elementPath'] = [element];
                filterState['fontFamilyPath'] = [undefined];
              } else {
                // truncate path, see https://dvolvr.davidwaterston.com/2013/06/09/restating-the-obvious-the-fastest-way-to-truncate-an-array-in-javascript/
                filterState['elementPath'].length = parentPosition + 1;
                filterState['fontFamilyPath'].length = parentPosition + 1;
                filterState['elementPath'].push(element);
                // first assumption: inherit font-family from parent
                filterState['fontFamilyPath'].push(filterState['fontFamilyPath'][parentPosition]);
              }
            }
          },
          /**
           * Matches text nodes.
           * @param value Current text node value text node this filter, used to track state
           * @returns {string} possibly new text
           */
          text: function (value) {
            var fontFamilyPathLength = filterState['fontFamilyPath'].length;
            // Instead we could search for the text node parent. But it seems to be reasonable that the text node's parent
            // is the last one in the path.
            if (
                    fontFamilyPathLength > 0
                    && !!filterState['fontFamilyPath'][fontFamilyPathLength - 1]
                    && filterState['fontFamilyPath'][fontFamilyPathLength - 1].match(self.fontFamilyPattern)
            ) {
              return self.replaceCharactersInText(value);
            }
            return value;
          },
          attributes: {
            /**
             * Matches style attributes.
             * @param style applied style
             * @param element element which carries the style
             * @returns {*}
             */
            'style': function (style, element) {
              var newStyle = style;
              var styles = CKEDITOR.tools.parseCssText(style);
              var fontFamily = styles['font-family'];
              if (fontFamily) {
                var elementPosition = filterState['elementPath'].indexOf(element);
                var lcFontFamily = fontFamily.toLowerCase();
                // -1: Only robustness; expectation is, that we always find our element, as elements.$ should have
                // been called before.
                if (elementPosition !== -1) {
                  filterState['fontFamilyPath'][elementPosition] = lcFontFamily;
                }
                if (lcFontFamily.match(self.fontFamilyPattern)) {
                  delete styles['font-family'];
                  newStyle = CKEDITOR.tools.writeCssText(styles);
                }
              }
              return newStyle;
            }
          }
        });

        filter.applyTo(fragment);

        this.logger.debug('Processed MSWord HTML:', fragment);

        var writer = new CKEDITOR.htmlParser.basicWriter();
        fragment.writeHtml(writer);
        return writer.getHtml();
      }
    }
  });

  function initPasteFromWordLogging(mapper) {
    var editor = mapper.editor;
    mapper.logger.info('CKEditor-Plugin enabled and listening to \'afterPasteFromWord\' events with priority ' + EVENT_LISTENER_PRIORITY + '.');
    if (editor.config.ckeDebug === 'verbose') {
      var priority;
      editor.on('pasteFromWord', function (pfwEvtData) {
        mapper.logger.info('pasteFromWord/1: Original HTML received by pastefromword plugin:', pfwEvtData.data);
      }, null, null, 1);
      priority = EVENT_LISTENER_PRIORITY - 1;
      editor.on('afterPasteFromWord', function (pfwEvtData) {
        mapper.logger.info('afterPasteFromWord/' + priority + ': HTML before character mapping:', pfwEvtData.data);
      }, null, null, priority);
      priority = EVENT_LISTENER_PRIORITY;
      editor.on('afterPasteFromWord', function (pfwEvtData) {
        mapper.logger.info('afterPasteFromWord/' + priority + ': HTML  after character mapping:', pfwEvtData.data);
      }, null, null, priority);
    }
  }

  CKEDITOR.plugins.add(PLUGIN_NAME, {
    requires: ['cmbase', 'pastefromword'],
    init: function (editor) {
      var mapper = new CKEDITOR.coremedia.CharacterFontFamilyMapper(
              editor,
              FONT_NAME
      );
      editor.on(
              'afterPasteFromWord',
              function (pfwEvt) {
                pfwEvt.data.dataValue = mapper.replaceCharactersInHtml(pfwEvt.data.dataValue);
              },
              null, null,
              EVENT_LISTENER_PRIORITY
      );
      initPasteFromWordLogging(mapper);
    }
  });

})();
