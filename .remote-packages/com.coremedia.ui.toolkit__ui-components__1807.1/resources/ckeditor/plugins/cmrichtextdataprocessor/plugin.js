(function () {

  /**
   * Configuration for data processing from CKEditor HTML to CoreMedia Richtext and vice versa.
   */

  var PLUGIN_NAME = 'cmrichtextdataprocessor';
  var ONLY_NBSP_PATTERN = /^(?:&nbsp;|&#160;|&#xa0;|\xa0)$/i;

  var attrs = {'class': true, 'lang': true, 'xml:lang': true, 'dir': true};

  var COREMEDIA_RICHTEXT_NAMESPACE = 'http://www.coremedia.com/2003/richtext-1.0';
  var XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

  var LOGGER;

  /**
   * Helper element for decoding HTML entities.
   * @type {Element}
   */
  var DECODE_ELEMENT_HELP = document.createElement("div");

  var allowedAttributes = { // for elements not listed no attributes are allowed
    'div': {
      'xmlns': true,
      'xmlns:xlink': true
    },
    'p': attrs,
    'ul': attrs,
    'ol': attrs,
    'li': attrs,
    'pre': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'xml:space': true
    },
    'blockquote': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'cite': true
    },
    'a': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'xlink:type': true,
      'xlink:href': true,
      'xlink:role': true,
      'xlink:title': true,
      'xlink:show': true,
      'xlink:actuate': true
    },
    'span': attrs,
    'br': {'class': true},
    'em': attrs,
    'strong': attrs,
    'sub': attrs,
    'sup': attrs,
    'img': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'alt': true,
      'height': true,
      'width': true,
      'xlink:type': true,
      'xlink:href': true,
      'xlink:role': true,
      'xlink:title': true,
      'xlink:show': true,
      'xlink:actuate': true
    },
    'table': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'summary': true
    }
    ,
    'tbody': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'align': true,
      'valign': true
    },
    'tr': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'align': true,
      'valign': true
    },
    'td': {
      'class': true, 'lang': true, 'xml:lang': true, 'dir': true,
      'abbr': true,
      'rowspan': true,
      'colspan': true,
      'align': true,
      'valign': true
    },

    'link': {'href': true, 'rel': true, 'type': true}
  };

  //elements that are allowed to have no text node
  var allowedEmptyElements = {
    link: true,
    img: true,
    br: true,
    p: true,
    li: true,
    td: true
  };

  var defaultInlineElements = ['a', 'br', 'span', 'img', 'em', 'strong', 'sup', 'sub'];
  var defaultBlockElements = ['p', 'ul', 'ol', 'pre', 'blockquote', 'table'];
  var defaultAllElements = defaultBlockElements.concat(defaultInlineElements);

  /**
   * List of all elements which might contain text nodes.
   * @type {Array}
   */
  var allowedTextContainers = ['p', 'li', 'pre', 'a', 'span', 'em', 'strong', 'sub', 'sup', 'td'];

  /**
   * Represents the structure of coremedia-richtext-1.0.xsd.
   * @type {Object}
   */
  var allowedElementNamesAtNode = {
    div: defaultBlockElements,
    p: defaultInlineElements,
    ul: ['li'],
    ol: ['li'],
    li: defaultAllElements,
    pre: defaultInlineElements.filter(excludingElements(['img'])),
    blockquote: defaultBlockElements,
    a: defaultInlineElements.filter(excludingElements(['a'])),
    span: defaultInlineElements,
    br: [],
    em: defaultInlineElements,
    strong: defaultInlineElements,
    sub: defaultInlineElements,
    sup: defaultInlineElements,
    img: [],
    table: ['tbody', 'tr'],
    tbody: ['tr'],
    tr: ['td'],
    td: defaultAllElements
  };

  /**
   * Required attributes according to coremedia-richtext.
   * @type {Object}
   */
  var requiredAttributes = {
    'a': [
      'xlink:href'
    ],
    'img': [
      'alt',
      'xlink:href'
    ]
  };

  /**
   * Provides filter for array elements which excludes any of the given elements.
   * @param {Array} excludedElements elements to exclude
   * @returns {Function} function to use in <code>filter</code> method
   */
  function excludingElements(excludedElements) {
    return function(e) {
      return excludedElements.indexOf(e) === -1;
    }
  }

  /**
   * Decodes all HTML entities of the content of a text node.
   * @param {string} str text node content
   * @return {string} str text node without entities
   * @see <a href="https://stackoverflow.com/questions/5796718/html-entity-decode">javascript - HTML Entity Decode - Stack Overflow</a>
   */
  function decodeHtmlEntities(str) {
    DECODE_ELEMENT_HELP.innerHTML = str;
    return DECODE_ELEMENT_HELP.textContent;
  }

  /**
   * Detect if the given element is the CoreMedia Richtext Root Div Element.
   * @param element element to validate; element might be null/undefined (and then evaluate to false)
   * @return {boolean} if the element is the CoreMedia RichText Root Div
   */
  function isCoreMediaRichTextRoot(element) {
    return element.name === 'div'
            && element.attributes['xmlns'] === COREMEDIA_RICHTEXT_NAMESPACE
            && element.attributes['xmlns:xlink'] === XLINK_NAMESPACE;

  }

  /**
   * Coremedia Richtext Filter, that are applied before writing it back to the server. Some details about filter
   * execution: (see especially <code>core/htmlparser/element.js</code>)
   *
   * <ul>
   * <li>If an element name changes, filtering will be restarted at that node.</li>
   * <li>If a new element is returned, it will replace the current one and processing will be restarted for that node.</li>
   * <li>If false is returned, the element and all its children will be removed.</li>
   * <li>If element name changes to empty, only the element itself will be removed and the children appended to the parent</li>
   * <li>An element is processed first, then its attributes and afterwards its children (if any)</li>
   * <li>Text nodes only support to be changed or removed... but not to be wrapped into some other element.</li>
   * <li><code>$</code> is a so called generic element rule which is applied after element processing.
   * The opposite handler is <code>'^'</code> which would be applied before all other element handlers.</li>
   * </ul>
   * @type {Object}
   */
  var htmlFilterRules = {
    elements: {
      /**
       * Generic filter '$' to be applied after any matched name. So this is the last element-filter to apply before
       * the data are send to the server and thus the last chance to straighten invalid data.
       *
       * @param {CKEDITOR.htmlParser.element} element
       * @returns {*}
       */
      $: function (element) {
        // remove all not allowed attributes in children of root div
        var currentAllowedAttributes = allowedAttributes[element.name] || {};
        for (var k in element.attributes) {
          if (!(k in currentAllowedAttributes)) {
            delete element.attributes[k];
          }
        }

        if (element.name && element.parent) {
          // Remove elements which are empty but must not be empty.
          if (!allowedEmptyElements[element.name] && element.children.length === 0) {
            return false;
          }
          var allowedParentsChildNames = allowedElementNamesAtNode[element.parent.name] || [];
          if (allowedParentsChildNames.indexOf(element.name) === -1) {
            // Element is not allowed in CoreMedia Richtext or at least not attached to the given parent:
            // Remove it and attach its children to the parent.
            element.name = '';
          }
        }

        if (element.name) {
          var currentRequiredAttributes = requiredAttributes[element.name];
          if (currentRequiredAttributes) {
            // If an element misses required attributes we will delete the element itself (but not its children).
            currentRequiredAttributes.forEach(function (r) {
              if (!element.attributes || !(r in element.attributes)) {
                if (LOGGER.isInfoEnabled()) {
                  LOGGER.info('Element', element.name, 'misses required attribute ' + r + '. Element will be removed:', element);
                }
                element.name = '';
              }
            });
          }
        }

        return element;
      },
      ol: function (element) {
        // Workaround/Fix for CMS-10539 (Error while Saving when deleting in Lists, MSIE11)
        if (element.children.length === 0 || !element.getFirst('li')) {
          return false;
        }
        return element;
      },
      ul: function (element) {
        // Workaround/Fix for CMS-10539 (Error while Saving when deleting in Lists, MSIE11)
        if (element.children.length === 0 || !element.getFirst('li')) {
          return false;
        }
        return element;
      },
      h1: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-1";
      },
      h2: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-2";
      },
      h3: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-3";
      },
      h4: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-4";
      },
      h5: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-5";
      },
      h6: function (element) {
        element.name = "p";
        element.attributes['class'] = "p--heading-6";
      },
      b: function (element) {
        element.name = "strong";
      },
      i: function (element) {
        element.name = "em";
      },
      u: function (element) {
        element.name = "span";
        element.attributes['class'] = "underline";
      },
      br: function (element) {
        if (CKEDITOR.env.gecko
                && element.parent
                && !isEmptyArray(element.parent.children)
                && (element.parent.name === 'td' || element.parent.name === 'p')) {
          var siblings = element.parent.children;
          if (element === siblings[siblings.length - 1]) {
            // The element is the last child of its parent. Remove it, FF does not display it.
            return false;
          }
        }
        if (element.parent && element.parent.name === 'div') {
          // somehow, a top-level <br> has been introduced, which is not valid:
          return false;
        }
      },
      strike: function (element) {
        element.name = "span";
        element.attributes['class'] = "strike";
      },
      div: function (element) {
        if (isCoreMediaRichTextRoot(element)) {
          // When deleting a table, some &#8203; (zero width space) characters are inserted and must be filtered out
          // as coremedia-richtext doesn't allow text nodes inside div elements.
          for (var i = 0; i < element.children.length; i++) {
            var childNode = element.children[i];
            if (childNode.type === CKEDITOR.NODE_TEXT) {
              childNode.remove();
            }
          }
        } else {
          // CoreMedia Richtext DTD only allows one div, which must be the root div. Thus we must fix a broken
          // structure here. Might be obsolete in the long run if we active ACF (CMS-10456).
          element.name = "p";
        }
      },
      th: function (element) {
        element.name = "td";
      },
      tr: function (element) {
        // coremedia-richtext-1.0.dtd does not allow empty table rows (<tr/> elements):
        if (isEmptyTr(element)) {
          return false;
        }
      },
      table: function (element) {
        // coremedia-richtext-1.0.dtd does not allow empty table or tbody elements:
        if (element.children.every(isEmptyTr) ||
                element.children.length === 1 && element.children[0].name === 'tbody' &&
                element.children[0].children.every(isEmptyTr)) {
          return false;
        }
      },
      img: function (element) {
        unescapeAttribute(element, 'xlink:href');
        unescapeAttribute(element, 'xlink:role');
        unescapeAttribute(element, 'xlink:title');

        delete element.attributes['src'];
      },
      a: function (element) {
        unescapeAttribute(element, 'xlink:href');
        unescapeAttribute(element, 'xlink:role');
        unescapeAttribute(element, 'xlink:title');
        unescapeAttribute(element, 'xlink:show');
        unescapeAttribute(element, 'xlink:actuate');

        delete element.attributes['href'];
      },
      span: function (element) {
        if (!element.attributes['class']) {
          // drop element, but not children
          element.name = '';
        }
      },
      "xdiff:span": function (element) {
        element.name = '';
      }
    },
    /**
     * Removes especially any named entities and replaces them by their character representation. Only characters
     * which must be escaped in XML will be returned encoded.
     *
     * @param {string} text
     * @param {CKEDITOR.htmlParser.text} textNode text node
     */
    text: function(text, textNode) {
      if (textNode.parent && textNode.parent.name && allowedTextContainers.indexOf(textNode.parent.name) === -1) {
        return false;
      }
      var textWithoutEntities = decodeHtmlEntities(text);
      return CKEDITOR.tools.htmlEncode(textWithoutEntities);
    }
  };

  /**
   * Checks if a given array is empty or null/undefined.
   *
   * @param {Array} object
   */
  function isEmptyArray(object) {
    return !object || object.length === 0;
  }

  function isEmptyTr(element) {
    // coremedia-richtext-1.0.dtd does not allow empty table rows.
    // In Firefox, an "empty" <tr> may contain a single <br/>!
    return element && element.name === 'tr' && (element.children.every(isBr));
  }

  function isBr(element) {
    return element && element.name === 'br';
  }

  function addBrInGecko(element) {
    if (CKEDITOR.env.gecko) {
      addBrInGeckoAndWebkit(element);
    }
  }

  function addBrInGeckoAndWebkit(element) {
    if (CKEDITOR.env.gecko || CKEDITOR.env.webkit) {
      if (element.children.length === 0) {
        element.add(new CKEDITOR.htmlParser.element('br'));
      }
    }
  }

  // prepends a "_" to the attribute name
  function escapeAttribute(element, attributeName) {
    var value = element.attributes[attributeName];
    if (value !== undefined && value !== null) {
      element.attributes['_' + attributeName] = value;
      delete element.attributes[attributeName];
    }
  }

  // removes the leading "_" from the attribute name
  function unescapeAttribute(element, attributeName) {
    var value = element.attributes['_' + attributeName];
    if (value !== undefined && value !== null) {
      element.attributes[attributeName] = value;
      delete element.attributes['_' + attributeName];
    }
  }

  // filter rules that are used to transform coremedia richtext to the ckeditor compatible html
  function createDataFilterRules(editor) {
    return {
      elements: {
        a: function (element) {

          if (element.attributes['href'] && element.attributes['href'].indexOf('#') !== element.attributes['href'].length - 1) { // a link was pasted from another html site
            element.attributes['xlink:href'] = element.attributes['href'];

            if (element.attributes['target'] === '_self') {
              element.attributes['xlink:show'] = 'replace';
            } else if (element.attributes['target'] === '_blank') {
              element.attributes['xlink:show'] = 'new';
            }
          }

          escapeAttribute(element, 'xlink:href');
          escapeAttribute(element, 'xlink:role');
          escapeAttribute(element, 'xlink:title');
          escapeAttribute(element, 'xlink:show');
          escapeAttribute(element, 'xlink:actuate');

          element.attributes['href'] = '#';
        },
        img: editor.config.imgRichTextToHtmlConverter || function (element) {
          if (element.attributes['xlink:href']) {
            var uriPath = element.attributes['xlink:href'];
            element.attributes['_xlink:href'] = uriPath;

            // convert the xlink:href URI into a valid image URI
            var hashPosition = uriPath.indexOf("#");
            if (hashPosition !== -1) {
              uriPath = uriPath.substring(0, hashPosition) + uriPath.substring(hashPosition).replace(/[#\.]/g, "/");
            }
            uriPath += com.coremedia.ui.util.UrlUtil.getImgFitInstruction(editor.config.embeddedImageMaxWidth);

            element.attributes['src'] = com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(uriPath);
            delete element.attributes['xlink:href'];
          }

          escapeAttribute(element, 'xlink:role');
          escapeAttribute(element, 'xlink:title');

          if (!element.attributes['_xlink:href']) { // an image was pasted from another html site
            element.name = "span";                  // make it a span, empty spans will be removed...
            delete element.attributes;
          }
        },
        // As FF tends to collapse empty table cells (sometimes), we put at least a br-tag into each cell.
        // Trailing br-tags are removed again before the richtext is sent to the server.
        td: addBrInGecko,
        p: addBrInGeckoAndWebkit,
        "xdiff:span": function (element) {
          if (!editor.config['com.coremedia.richtext.diff']) {
            element.name = '';
          }
        },
        span: function (element) {
          if (element.attributes['style']) {
            // style attributes are not permitted in richtext. Probably result of copy-paste. Remove.
            element.name = '';
          }
        }
      }
    };
  }

  /**
   * <p>
   * Early stage processing towards CoreMedia Richtext. Processing includes:
   * </p>
   * <ul>
   * <li>removal of linebreaks in lists at end-of-line</li>
   * <li>adding non-breaking-spaces in empty elements, if required</li>
   * </ul>
   * @param {String} fragment fragment of type String
   * @returns {String} modified fragment
   */
  function processHtmlToRichtextString(fragment) {
    fragment = fragment.replace(/<li>(.*?)<br><\/li>/g, '<li>$1</li>');
    fragment = fragment.replace(/<p class="p--heading-([1-6])"><\/p>/g, '<p class="p--heading-$1">&#160;</p>');
    return fragment;
  }

  /**
   * <p>
   * Intermediate stage processing towards CoreMedia Richtext. Processing includes:
   * </p>
   * <ul>
   * <li>adding required CoreMedia Richtext div with namespace declaration</li>
   * <li>add required elements for empty text</li>
   * </ul>
   * @param {CKEDITOR.htmlParser.fragment} fragment fragment of type CKEDITOR.htmlParser.fragment or CKEDITOR.htmlParser.element
   * @returns {CKEDITOR.htmlParser.fragment} modified fragment
   */
  function processHtmlToRichtextFragment(fragment) {
    var children = fragment.children;

    // add the coremedia richtext div if not there or if totally empty
    if (
            children
            && (
                    children.length === 0
                    || !isCoreMediaRichTextRoot(children[0])
            )
    ) {
      var rootDiv = new CKEDITOR.htmlParser.element('div', {
        'xmlns': COREMEDIA_RICHTEXT_NAMESPACE,
        'xmlns:xlink': XLINK_NAMESPACE
      });
      // add all child elements to the new div
      for (var i = 0; i < children.length; i++) {
        rootDiv.add(children[i]);
      }
      // add a p and a br tag if the content is totally empty
      if (children.length === 0) {
        //the filler p-tag that is used when text is empty
        var fillerP = new CKEDITOR.htmlParser.element('p');
        fillerP.add(new CKEDITOR.htmlParser.element('br'));
        rootDiv.add(fillerP);
      }
      // and replace the children with the new div
      fragment.children = [rootDiv];
    }
    return fragment;
  }

  /**
   * <p>
   * Intermediate stage processing towards CoreMedia Richtext. Processing includes:
   * </p>
   * <ul>
   * <li>replacing empty paragraphs only containing non-breakable-spaces with <code>&lt;p>&lt;br/>&lt;/p></code></li>
   * </ul>
   * @param {CKEDITOR.htmlParser.fragment} fragment fragment of type CKEDITOR.htmlParser.fragment or CKEDITOR.htmlParser.element
   * @returns {CKEDITOR.htmlParser.fragment} modified fragment
   */
  function processFilteredHtmlToRichtextFragment(fragment) {
    // CKEditor's htmldataprocessor insists on replacing <p><br/></p> with <p>&nbsp;</p> assuming that the final
    // BR in a block is "bogus". As at least our teaser delegate text field perceives the first one as empty, while
    // the second representation is assumed as not-empty and thus triggers another behavior, we need to ensure that
    // <p>&nbsp;</p> is replaced by <p><br/></p> eventually.
    fragment.forEach(function (node) {
      if (node.name === 'p' && node.getHtml && ONLY_NBSP_PATTERN.test(node.getHtml())) {
        node.setHtml("<br/>");
      }
    }, CKEDITOR.NODE_ELEMENT, true);
    return fragment;
  }

  /**
   * <p>
   * Early stage processing from CoreMedia Richtext towards CKEditor HTML. Processing includes:
   * </p>
   * <ul>
   * <li>removal of XML declaration</li>
   * <li>adjusting empty tags</li>
   * </ul>
   * @param {String} fragment fragment of type String
   * @returns {String} modified fragment
   */
  function processRichtextToHtmlString(fragment) {
    //remove <?xml head
    fragment = fragment.replace(/<\?xml\b([^>]*)>/gi, '');
    // make sure that the immediately closing tags like, e.g. <td/> will be parsed correctly
    fragment = fragment.replace(/<([a-z]+)\/>/g, "<$1 />");
    return fragment;
  }

  /**
   * <p>
   * Intermediate stage processing from CoreMedia Richtext towards CKEditor HTML. Processing includes:
   * </p>
   * <ul>
   * <li>Removing the top-level div required for CoreMedia Richtext only.</li>
   * </ul>
   *
   * @param {CKEDITOR.htmlParser.fragment} fragment fragment of type CKEDITOR.htmlParser.fragment or CKEDITOR.htmlParser.element
   * @returns {CKEDITOR.htmlParser.fragment} modified fragment
   */
  function processRichtextToHtmlFragment(fragment) {
    var children = fragment.children;

    //remove the coremedia richtext div - but only if we are CoreMedia Richtext...
    if (children
            && children.length === 1
            && isCoreMediaRichTextRoot(children[0])
    ) {
      var div = children[0];
      fragment.children = div.children;
    }
    return fragment;
  }

  /**
   * Logs event data on data processing.
   *
   * @param {CKEDITOR.coremedia.Logger} logger
   * @param {int} priority priority of the event listener
   * @param {CKEDITOR.eventInfo} evt the event
   * @param {string} label an optional label to be displayed
   */
  function logDebugEventData(logger, priority, evt, label) {
    if (logger.isInfoEnabled()) {
      var displayLabel = label ? " (" + label + ")" : "";
      // value: trick to provide a nicer expandable output
      var value = {value: evt.data.dataValue};
      if (evt.data.dataValue && evt.data.dataValue.getHtml) {
        value['asHtml'] = evt.data.dataValue.getHtml();
      }
      logger.info(evt.name + "/" + priority + displayLabel + ":", value);
    }
  }

  /**
   * Creates a logging function for data processing event listening.
   *
   * @param {CKEDITOR.coremedia.Logger} logger instance
   * @param {int} priority priority of the event listener
   * @param {string} label an optional label to be displayed
   */
  function createDebugLoggingFunction(logger, priority, label) {
    return function(evt) { logDebugEventData(logger, priority, evt, label)};
  }

  /**
   * Enable debug logging with location hash parameter "ckdebug". For more verbose logging use hash parameter
   * "ckdebug=verbose".
   *
   * @param {CKEDITOR.editor} editor to listen to for debugging purpose
   * @see <a href="http://docs.ckeditor.com/#!/api/CKEDITOR.editor-event-toDataFormat">CKEDITOR.editor#toDataFormat</a>
   * @see <a href="http://docs.ckeditor.com/#!/api/CKEDITOR.editor-event-toHtml">CKEDITOR.editor#toHtml</a>
   */
  function installDebugLogging(editor) {
    if (LOGGER.isInfoEnabled()) {
      if (LOGGER.isDebugEnabled()) {
        for (var priority = 1; priority < 16; priority++) {
          editor.on('toDataFormat', createDebugLoggingFunction(LOGGER, priority), null, null, priority);
          editor.on('toHtml', createDebugLoggingFunction(LOGGER, priority), null, null, priority);
        }
      } else {
        editor.on('toDataFormat', createDebugLoggingFunction(LOGGER, 1, "Input"), null, null, 1);
        editor.on('toDataFormat', createDebugLoggingFunction(LOGGER, 15, "Output"), null, null, 15);
        editor.on('toHtml', createDebugLoggingFunction(LOGGER, 1, "Input"), null, null, 1);
        editor.on('toHtml', createDebugLoggingFunction(LOGGER, 15, "Output"), null, null, 15);
      }
    }
  }

  /**
   * Install converters from CKEditor HTML towards CoreMedia Richtext.
   *
   * @param {CKEDITOR.editor} editor the editor to install conversion to
   */
  function installToRichtextConverter(editor) {
    // Transform HTML to CoreMedia Richtext: 1st Step - Work on String Representation
    editor.on('toDataFormat', function (evt) {
      evt.data.dataValue = processHtmlToRichtextString(evt.data.dataValue);
    }, null, null, 2);
    // Transform HTML to CoreMedia Richtext: 2nd Step - Work on Fragments
    editor.on('toDataFormat', function (evt) {
      evt.data.dataValue = processHtmlToRichtextFragment(evt.data.dataValue);
    }, null, null, 5);
    // Transform already filtered HTML to CoreMedia Richtext: 3rd Step - Work on Fragments
    // Could be priority 10 to 14. Choosing 10 which allows customers to add a later hook
    // like for example to add workarounds for bugs.
    editor.on('toDataFormat', function (evt) {
      evt.data.dataValue = processFilteredHtmlToRichtextFragment(evt.data.dataValue);
    }, null, null, 10);
  }

  /**
   * Install converters from CoreMedia Richtext towards CKEditor HTML.
   *
   * @param {CKEDITOR.editor} editor the editor to install conversion to
   */
  function installToHtmlConverter(editor) {
    // Transform CoreMedia Richtext to HTML: 1st Step: Work on String Format
    editor.on('toHtml', function (evt) {
      evt.data.dataValue = processRichtextToHtmlString(evt.data.dataValue);
    }, null, null, 2);
    // Transform CoreMedia Richtext to HTML: 2nd Step: Work on DOM
    editor.on('toHtml', function (evt) {
      evt.data.dataValue = processRichtextToHtmlFragment(evt.data.dataValue);
    }, null, null, 5);
  }

  CKEDITOR.plugins.add(PLUGIN_NAME,
          {
            requires: ['cmbase'],
            init: function (editor) {
              LOGGER = new CKEDITOR.coremedia.Logger(editor, PLUGIN_NAME);
              var dtd = CKEDITOR['dtd'];

              //init dataprocessor
              var dataProcessor = editor.dataProcessor;
              dataProcessor.writer.forceSimpleAmpersand = editor.config.forceSimpleAmpersand;
              // Filter rules transforming CKEditor HTML to CoreMedia Richtext.
              dataProcessor.htmlFilter.addRules(htmlFilterRules,
                      {
                        // Must be run after CKEditor-entities-plugin's text rule which uses default priority 10
                        // in CKEditor version 4.7.2. Our priority must be higher, so that we perform last.
                        priority: 100
                      }
              );
              // Filter rules transforming CoreMedia Richtext to CKEditor HTML.
              dataProcessor.dataFilter.addRules(createDataFilterRules(editor));

              installDebugLogging(editor);
              installToRichtextConverter(editor);
              installToHtmlConverter(editor);

              //remove all the breaks
              for (var e in CKEDITOR['tools'].extend({}, dtd['$nonBodyContent'], dtd['$block'], dtd['$listItem'], dtd['$tableContent'], dtd['$empty'])) {
                editor.dataProcessor.writer.setRules(e, {
                  indent: false,
                  breakBeforeOpen: false,
                  breakAfterOpen: false,
                  breakBeforeClose: false,
                  breakAfterClose: false
                });
              }
            }
          });

})();
