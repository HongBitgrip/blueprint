Ext.define("com.coremedia.ui.ckeditor.RichTextArea", function(RichTextArea) {/*package com.coremedia.ui.ckeditor {

import com.coremedia.ui.BrowserContextMenuManager;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.event.Event;

import joo.localeSupport;

import js.HTMLElement;

/**
 * A text area allowing WYSIWYG editing of text with markup.
 * This component represents the actual editing area, excluding toolbar and other UI.
 *
 * @see com.coremedia.ui.config.addCKEditorPluginsPlugin
 * @see com.coremedia.ui.config.removeCKEditorPluginsPlugin
 * @see com.coremedia.ui.config.customizeCKEditorPlugin
 * /
[PublicApi]
public class RichTextArea extends Component implements IValidationStateMixin, IHighlightableMixin {
  public static const xtype:String = "com.coremedia.ui.config.richTextArea";

  /**
   * @private
   * /
  public static const CKREADY_EVENT:String = 'ckready';

  /**
   * @private
   * /
  public static const CKRESIZE_EVENT:String = "ckresize";
  private static const*/var XLINK_HREF_EVENT$static/*:String*/ = "xlinkHref";/*

  private static const*/var EMPTY_VALUE$static/*:String*/ = '<div xmlns="http://www.coremedia.com/2003/richtext-1.0" xmlns:xlink="http://www.w3.org/1999/xlink"><p></p></div>';/*
  private static const*/var EMPTY_VALUE_WITH_BREAK$static/*:String*/ = '<div xmlns="http://www.coremedia.com/2003/richtext-1.0" xmlns:xlink="http://www.w3.org/1999/xlink"><p><br /></p></div>';/*
  private static const*/var EMPTY_VALUE_WITH_ENCODED_VALUE$static/*:String*/ = '<div xmlns="http://www.coremedia.com/2003/richtext-1.0" xmlns:xlink="http://www.w3.org/1999/xlink"><p>&#160;</p></div>';/*

  /**
   * Additional mapping for symbol font characters. Extends or overrides existing default configuration
   * of cmsymbolfontmapper-plugin. Entry-Format: <Character>: <Replacement>.
   * /
  [Deprecated]
  private static const*/var symbolMapping$static/*:Object*/;/* =*/function symbolMapping$static_(){symbolMapping$static=( {});};/*
  private static*/ var ckUndoManagerPatched$static/*:Boolean*/ = false;/*

  /**
   * <p>List of additional CKEditor plugins, which are loaded by default.
   * These are currently:</p>
   * <p>
   * <code>['cmbase', 'cmmagicline', 'cmsymbolfontmapper','cmrichtextdataprocessor','classstyles','cmstyles','divarea']</code>
   * </p>
   * /
  public static const defaultCKEditorExtraPlugins:Array =*/function defaultCKEditorExtraPlugins$static_(){RichTextArea.defaultCKEditorExtraPlugins=( ['cmbase','cmmagicline', 'cmsymbolfontmapper', 'cmrichtextdataprocessor', 'classstyles', 'cmstyles', 'divarea']);}/*;

  /**
   * <p>List of CKEditor plugins, which must not be loaded by default.
   * These are currently:</p>
   * <p>
   * <code>['find','contextmenu']</code>
   * </p>
   * /
  public static const defaultCKEditorRemovePlugins:Array =*/function defaultCKEditorRemovePlugins$static_(){RichTextArea.defaultCKEditorRemovePlugins=( ['find', 'contextmenu']);}/*;

  private var extraPlugins:Array;
  private var removePlugins:Array;
  private var ckEditorConfig:Object;
  internal var ckEditor:Object;

  [Bindable]
  public var value:*;

  [Bindable]
  public var readOnly:Boolean = false;

  /**
   * Defines whether the editor is reset when a new value is set.
   * Resetting the editor includes the editor's undo history.
   * Default value is &lt;code>true&lt;/code>
   * /
  [Bindable]
  public var resetOnValueSet:Boolean = true;

  /**
   * Defines a timeout in milliseconds for buffering change events. Defaults to 50.
   * /
  [Bindable]
  public var changeBuffer:Number = 50;

  /**
   * Set this value to true if the the editor should only be used for displaying a delegating value.
   * Note that his flag is only used as marker and the actual writing has to be prohibited in the components using
   * this editor.
   * /
  [Bindable]
  public var delegating:Boolean = false;

  private var nextValue:String = undefined; // the value that is currently being set in the CK editor

  private var ckEditorReady:Boolean = false; // the status of the wrapped CK editor

  private var dirty:Boolean = false; // remember if the richtext has ever been changed

  private var xlinkHref:String;

  private var timer:*;

  private var focused:Boolean= false; // remember if we got the focus

  /**
   * @param config the config object
   * /
  public*/ function RichTextArea$(config/*:RichTextArea = null*/) {if(arguments.length<=0)config=null;
    if (AS3.getBindable(config,"height","DUMMY") === undefined) {
      AS3.setBindable(config,"height" , 200);
    }

    if (config && AS3.getBindable(config,"resetOnValueSet") === false) {
      AS3.setBindable(this,"resetOnValueSet" , AS3.getBindable(config,"resetOnValueSet"));
    }

    config.renderTpl = ['<tpl>',
      '<div id="cke_{id}" contenteditable="true" style="height: 100%; overflow: auto;">',
      '</tpl>',
      '</div>'];

    // Initialize standard CK configuration.
    // Clone default config array to avoid side effects (STUDIO-679)
    this.extraPlugins$vqVB = RichTextArea.defaultCKEditorExtraPlugins.concat();
    this.removePlugins$vqVB = RichTextArea.defaultCKEditorRemovePlugins.concat();
    this.ckEditorConfig$vqVB = {
      // allowedContent/CMS-10456: We should better not disable ACF... but for now we have to many issues when
      // enabling it, like for example stripped styling information, disabled buttons, and so on.
      allowedContent: true,
      language: joo.localeSupport.getLocale(),
      title: "",
      forcePasteAsPlainText: false,
      disableNativeTableHandles: true,
      disableObjectResizing: true,
      fullPage: false,
      entities: false,
      entities_additional: '',
      disableNativeSpellChecker: false, //enable native spellckecking for all browsers
      menu_groups: '',                         //disable default context menu items
      // Additional Symbol Mapping for cmsymbolfontmapper plugin.
      symbolCharacterReplacementMap: {
        // Supported modes: add (or actually anything) or replace
        // add (default): adds (and possibly overrides) mappings to default mappings
        // replace: replaces default mappings
        mode: 'add'
        // entries: char-code (int): replacement (string)
      },
      // Configures CoreMedia classstyles plugin.
      classGroups: {
        //command name: style_p_<styleClassName>
        'p': {
          blockElements:'p',
          styleClasses: [
             'p--heading-1',
             'p--heading-2',
             'p--heading-3',
             'p--heading-4',
             'p--heading-5',
             'p--heading-6'
          ]
        },
        //command name: style_align_<styleClassName>
        'align' : {
          blockElements:'p',
          styleClasses: [
             'align--left',
             'align--right',
             'align--center',
             'align--justify'
          ]
        }
      },
      keystrokes: [[ CKEDITOR['CTRL']+ 76, null ]]  //disable link command on CTRL+L (default behaviour of link plugin)
    };

    applyDeprecatedSymbolMapping$static(this.ckEditorConfig$vqVB.symbolFontMapping);

    this.super$vqVB(config);
    this.initValidationStateMixin();

    this.on("beforedestroy",AS3.bind( this,"onBeforeDestroy$vqVB"));
    this.on("resize",AS3.bind( this,"onResize$vqVB"));
  }/*

  private*/ function onResize()/*:void*/ {
    this.fireEvent(RichTextArea.CKRESIZE_EVENT);
  }/*

  /**
   * Applies symbolMapping in a format as required by the cmsymbolfontmapper plugin. I. e. instead of character
   * keys we now use their characters codes. The replacement stays the same.
   * /
  [Deprecated]
  private static*/ function applyDeprecatedSymbolMapping$static(originalMapping/*:Object*/)/*:void*/ {
    for (var key/*:String*/ in symbolMapping$static) {
      originalMapping[key.charCodeAt()] = symbolMapping$static[key];
    }
  }/*

  private static*/ function postProcessPastedWordMsHtml$static(pfwEvt/*:Object*/)/*:void*/ {
    // This method is a left over of CKEditor 4.5.7 to 4.7.2 migration (CMS-7530). It might be obsolete or
    // should better be replaced with Advanced Content Filtering (ACF). But for now we keep the code.
    var pfwEvtData/*:Object*/ = pfwEvt.data;
    var mswordHtml/*:String*/ = pfwEvtData.dataValue;

    // Remove the dummy spans and divs ( having no inline style ).
    // do this before the original function removes only the start dummy span tags (and leaves the end ones)
    //
    // CMS-11930: This regular expression is also possibly risky. But without knowing the exact use cases
    // it is dangerous to fix this. We should better skip this filtering completely and, as stated above,
    // enable ACF: CMS-10456.
    mswordHtml = mswordHtml.replace(/<span>(.*?)<\/span>/g, '$1');
    mswordHtml = mswordHtml.replace(/<div>(.*?)<\/div>/g, '$1');

    // Handle justification information.
    mswordHtml = mswordHtml.replace(/(style="[^"]*?text-align:justify[^"]*?")/g, '$1 align="justify"');

    // Clean up empty spaces in list element
    mswordHtml = mswordHtml.replace(/<li(?:\s|&nbsp;)+>(?:\s|&nbsp;)*(.*?)<\/li>/g, '<li>$1</li>');

    // Replace the heading h1-h6 with specific heading format
    mswordHtml = mswordHtml.replace(/<h([1-6])(.*?)<\/h[1-6]>/g, '<p class="p--heading-$1"$2</p>');

    // Replace word's align attribute with cm class for alignment (see CMS-2045)
    mswordHtml = mswordHtml.replace(/(<.*?)align="([^"]*?)"(.*?>)/g, '$1class="align--$2"$3');

    // Replace word's margin-left attribute in lists
    mswordHtml = mswordHtml.replace(/<p([^>]*?)style="margin-left:([^">]*?)">(.*?)<\/p>/g, '<p>$3</p>');

    pfwEvtData.dataValue = mswordHtml;
  }/*

  // After switching from iframe to div, it happens that a bookmark points to an element outside the editable div.
  // When undo/redo then try to select the invalid bookmark things go wrong.
  // Best known reproducer: drop an image from the library and then click undo/redo.
  // To fix this, test the image's bookmarks and delete them from the image if they are invalid
  // before passing the image to the original method.
  private static*/ function patchUndoManager$static()/*:void*/ {
    if (!ckUndoManagerPatched$static) {
      var origRestoreImage/*:Function*/ = CKEDITOR['plugins'].undo.UndoManager.prototype.restoreImage;

      CKEDITOR['plugins'].undo.UndoManager.prototype.restoreImage = function (image/*:**/)/*:void*/ {
        var editor/*:**/ = this.editor;
        if (image.bookmarks) {
          editor.focus();
          var sel/*:**/ = editor.getSelection();
          var root/*:**/ = sel.root;

          var invalidBookmarks/*:Boolean*/ = false;
          for (var i/*:int*/ = 0; i < image.bookmarks.length; i++) {
            var bookmark/*:**/ = image.bookmarks[i];
            if (bookmark) {
              if (bookmark.start) {
                var startContainer/*:**/ = editor.document['getByAddress'](bookmark.start, bookmark.normalized);
                if (startContainer && !(root['equals'](startContainer) || root.contains(startContainer))) {
                  invalidBookmarks = true;
                  break;
                }
              }
              if (bookmark.end) {
                var endContainer/*:**/ = editor.document['getByAddress'](bookmark.end, bookmark.normalized);
                if (endContainer && !(root['equals'](endContainer) || root.contains(endContainer))) {
                  invalidBookmarks = true;
                  break;
                }
              }
            }
          }

          if (invalidBookmarks) {
            delete image.bookmarks;
          }
        }

        origRestoreImage.call(this, image);
      };

      ckUndoManagerPatched$static = true;
    }
  }/*

  private*/ function destroyCkEditor()/*:void*/ {
    if (this.ckEditor) {
      // destroy the CKEditor to avoid memory leaks
      this.ckEditor.destroy(true);
      this.ckEditor = null;
    }
  }/*

  /**
   * Return the CkEditorConfig object.
   *
   * @private
   * /
  public*/ function getCkEditorConfig()/*:Object*/ {
    return this.ckEditorConfig$vqVB;
  }/*

  /**
   * @private
   * @deprecated set <code>symbolFontMapping</code> in CKEditor-Config via <code>customizeCKEditorPlugin<code> instead
   * /
  [Deprecated]
  public static*/ function addSymbolMapping$static(mapping/*:Object*/)/*:void*/ {
    Ext.apply(symbolMapping$static,  mapping);
  }/*

  /**
   * @private
   * /
  public*/ function addCKEditorPlugin(pluginName/*:String*/)/*:void*/ {
    if (this.extraPlugins$vqVB.indexOf(pluginName) === -1) {
      this.extraPlugins$vqVB.push(pluginName);
    }
    var indexRemove/*:int*/ = this.removePlugins$vqVB.indexOf(pluginName);
    if (indexRemove != -1) {
      this.removePlugins$vqVB.splice(indexRemove, 1);
    }
  }/*

  /**
   * @private
   * /
  public*/ function removeCKEditorPlugin(pluginName/*:String*/)/*:void*/ {
    if (this.removePlugins$vqVB.indexOf(pluginName) === -1) {
      this.removePlugins$vqVB.push(pluginName);
    }
    var indexAdd/*:int*/ = this.extraPlugins$vqVB.indexOf(pluginName);
    if (indexAdd != -1) {
      this.extraPlugins$vqVB.splice(indexAdd, 1);
    }
  }/*

  /**
   * @private
   * /
  public*/ function customizeCKEditorConfig(config/*:Object*/)/*:void*/ {
    Ext.apply(this.ckEditorConfig$vqVB, config);
  }/*

  private*/ function preventClipboardOperationsWhenNotFocusedListener(e/*:Event*/)/*:void*/ {
    if (!this.focused$vqVB) {
      // prevent browser default (ckeditor does the same)
      e.preventDefault();
      // do not notify the ck editor
      e.stopPropagation();
    }
  }/*

  override protected*/ function initEvents()/*:void*/ {var this$=this;
    var self/*:RichTextArea*/ = AS3.cast(RichTextArea,this);

    // Do some more cleanup of pasted MSWord HTML with low priority.
    this.ckEditor.on(
            'afterPasteFromWord',
            postProcessPastedWordMsHtml$static,
            null, null,
            100
    );

    this.ckEditor.on('focus', function(e/*:Event*/)/*:void*/ {
      this$.focused$vqVB = true;
      AS3.setBindable(self,"highlighted" , true);
      this$.ckEditor.resetDirty();
      this$.onFocusEnter(e);
    });

    this.ckEditor.on('blur', function(e/*:Event*/)/*:void*/ {
      this$.focused$vqVB = false;
      AS3.setBindable(self,"highlighted" , false);
      this$.ckEditor.resetDirty();
      this$.onFocusLeave(e);
      if (!this$.disabled && !this$.ckEditor.readOnly && this$.isDirty()) {
        this$.fireChange$vqVB();
      }
    });

    this.ckEditor.on('change', function()/*:void*/ {
      this$.dirty$vqVB = true;
      this$.bufferChange$vqVB();
    });

    this.ckEditor.on('save', function()/*:void*/ {
      this$.dirty$vqVB = true;
      this$.fireChange$vqVB(); // missing arguments: newValue, oldValue
    });

    // Handle context clicks in rta.
    this.ckEditor.on('contentDom', function ()/*:void*/ {
      this$.ckEditor.document.getDocumentElement().on('contextmenu', function (event/*:**/)/*:void*/ {
        var extEvent/*:Event*/ = new Ext.event.Event(event.data.$);
        var target/*:HTMLElement*/ = extEvent.getTarget();
        if (target.nodeName === 'XDIFF:SPAN' && target.parentNode.nodeName === 'A') {
          target = target['parentNode'];
        }
        if (target && (target.nodeName === 'A' || target.nodeName === 'IMG')) {
          var editable/*:**/ = this$.ckEditor && this$.ckEditor.editable() && this$.ckEditor.editable().$;
          if (editable && editable.contains(target)) {
            this$.ckEditor.getSelection().selectElement(new CKEDITOR['dom'].element(target));
            this$.updateXlinkHref$vqVB(target);
            this$.fireEvent("contextmenu", self, extEvent);
          }
        }
      });

      // re-enable drag'n'drop for the editable element after it has been disabled for editor-main-view
      // in EditorMain#afterStartupComponentPluginInitialized()
      this$.ckEditor.editable().$.addEventListener("dragover", onEditableDragOver$static);
    });

    // Stop propagation of doubleclick event for links, to prevent ckEditor.link plugin from opening edit link dialog
    this.ckEditor.on('doubleclick', onCkeditorDoubleClick$static);
  }/*

  private*/ function fireChange()/*:void*/ {
    this.fireEvent('change');
  }/*

  private*/ function bufferChange()/*:void*/ {var this$=this;
    if (this.timer$vqVB) {
      window.clearTimeout(this.timer$vqVB);
    }
    this.timer$vqVB = window.setTimeout(function()/*:void*/ {
      this$.timer$vqVB = undefined;
      this$.fireChange$vqVB();
    }, AS3.getBindable(this,"changeBuffer"));
  }/*

  private static*/ function onEditableDragOver$static(e/*:**/)/*:Boolean*/ {
    e.stopPropagation();
    return true;
  }/*

  private static*/ function onCkeditorDoubleClick$static(event/*:**/)/*:Boolean*/ {
    if (event.data.element.$.nodeName === 'A' || event.data.element.$.nodeName === 'IMG'
            || event.data.element.$.nodeName === 'TABLE'){
      event.stop();
    }
  }/*

  private*/ function updateXlinkHref(ascendant/*:**/)/*:void*/ {
    var oldXlinkHref/*:String*/ = this.xlinkHref$vqVB;
    this.xlinkHref$vqVB = com.coremedia.ui.ckeditor.AnchorUtil.getHref(ascendant);
    if (this.xlinkHref$vqVB !== oldXlinkHref) {
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, XLINK_HREF_EVENT$static, oldXlinkHref, this.xlinkHref$vqVB);
    }
  }/*

  /**
   * @private
   * /
  public*/ function getXlinkHref()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, XLINK_HREF_EVENT$static);
    return this.xlinkHref$vqVB;
  }/*

  /**
   * @private
   * /
  public*/ function isDirty()/*:Boolean*/ {
    return this.dirty$vqVB;
  }/*

  override protected*/ function onRender(parentNode/*:Element*/, containerIdx/*:Number*/)/*:void*/ {
    Ext.Component.prototype.onRender.call(this,parentNode, containerIdx);

    // show standard browser context menu
    com.coremedia.ui.BrowserContextMenuManager.getInstance().registerDefaultFilter(this);

    // identify non-core plugins by looking up their names in the globalResources manifest entry
    for/* each*/ (var $1=0;$1</* in*/ this.extraPlugins$vqVB.length;++$1) {var pluginName/*:String*/ =this.extraPlugins$vqVB[$1];
      var pluginPath/*:String*/ = Ext.manifest.globalResources['ckeditor.plugin.' + pluginName];
      if (pluginPath) {
        CKEDITOR['plugins']['addExternal'](pluginName, pluginPath, '');
      }
    }

    // check if skin resources are defined externally, i.e. outside of the ckeditor4 packages. This is already the
    // case for the default "coremedia" skin.
    var skinResourcePath/*:String*/ = Ext.manifest.globalResources['ckeditor.skin.' + this.ckEditorConfig$vqVB.skin];
    if (skinResourcePath) {
      this.ckEditorConfig$vqVB.skin = this.ckEditorConfig$vqVB.skin + ',' + skinResourcePath;
    }

    Ext.apply(this.ckEditorConfig$vqVB, {
      removePlugins: this.removePlugins$vqVB.toString(),
      extraPlugins: this.extraPlugins$vqVB.toString(),
      height: AS3.getBindable(this,"height","DUMMY")
    });

    var ckTargetElement/*:Element*/ = this.el.down('#cke_' + this.getId());
    this.ckEditor = CKEDITOR['inline'](ckTargetElement.dom, this.ckEditorConfig$vqVB);
    this.ckEditor.on('instanceReady',AS3.bind( this,"handleCkEditorReady$vqVB"));

    // Fix Ext 6.2:
    // In Ext 6.2 line 206 "el.addCls(Ext.baseCSSPrefix + 'unselectable');" has been added to DragTracker.js.
    // This makes the RichTextArea unselectable.
    // As only the RichTextArea seems to be affected, set it's el explicitly selectable again right after rendering.
    this.el.selectable();
  }/*

  override public*/ function isVisible(deep/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<=0)deep=false;
    return !this.hidden;
  }/*

  protected*/ function updateReadOnly(readOnly/*:Boolean*/)/*:void*/ {
    // do not set data before the ckeditor is ready
    if (this.ckEditorReady$vqVB) {
      this.doSetReadOnly$vqVB();
    }
  }/*

  private*/ function doSetReadOnly()/*:void*/ {
    var isDirty/*:Boolean*/ = this.ckEditor.checkDirty();
    this.ckEditor.setReadOnly(AS3.getBindable(this,"readOnly"));
    if (!isDirty) {
      this.ckEditor.resetDirty();
    }
  }/*

  private*/ function onBeforeDestroy()/*:Boolean*/ {
    try {
      this.destroyCkEditor$vqVB();
    } catch(e){if(AS3.is (e,AS3.Error)) {
      com.coremedia.ui.logging.Logger.debug("Could not destroy RichTextArea: " + e.message);
    }else throw e;}

    return true;
  }/*

  private*/ function handleCkEditorReady(editor/*:Object*/)/*:void*/ {
    if (!this.ckEditor) {
      this.ckEditor = editor;
    }
    if (!this.ckEditor || !this.ckEditor.editable()) {
      return;
    }

    patchUndoManager$static();

    var ckEditorElement/*:Object*/ = this.ckEditor.editable().$;

    // Remember that the embedded CK editor is ready
    this.ckEditorReady$vqVB = true;

    if (AS3.getBindable(this,"readOnly")) {
      this.doSetReadOnly$vqVB();
    }

    if (this.nextValue$vqVB !== undefined) {
      this.doSetValue$vqVB(this.nextValue$vqVB);
    }

    this.fireEvent(RichTextArea.CKREADY_EVENT, this);

    // CMS-9363: CKEditor: Cut/Copy/Paste events are triggered although the editor no longer has the focus
    // If we are not focused we should not receive any clipboard events.
    // using capture here to be able to stop the events before ckeditor can handle them
    ckEditorElement.addEventListener('copy',AS3.bind( this,"preventClipboardOperationsWhenNotFocusedListener$vqVB"), true);
    ckEditorElement.addEventListener('cut',AS3.bind( this,"preventClipboardOperationsWhenNotFocusedListener$vqVB"), true);
    ckEditorElement.addEventListener('paste',AS3.bind( this,"preventClipboardOperationsWhenNotFocusedListener$vqVB"), true);


    var ckEditorExtEl/*:Element*/ =AS3.as( Ext.fly(ckEditorElement),  Ext.dom.Element);
    if (Ext.isWebKit) {
      ckEditorExtEl.set({tabindex: this.tabIndex});
    }

    // activate ext aria support in ck editor: link a given aria-labelledby and aria-describedby to the ck editor
    if (this.el) {
      var ariaAttributes/*:Object*/ = {
        "aria-labelledby":AS3.as( this.el.getAttribute("aria-labelledby"),  String) || null,
        "aria-describedby":AS3.as( this.el.getAttribute("aria-describedby"),  String) || null
      };
      ckEditorExtEl.set(ariaAttributes);
    }
  }/*

  /**
   * @private
   * /
  public*/ function getCKEditor()/*:**/ {
    return this.ckEditor;
  }/*

  /**
   * Reset the dirty state and if resetUndo is true the undo/redo stack of the field.
   *
   * @private
   * /
  public*/ function resetDirty(resetUndo/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)resetUndo=false;
    if(this.ckEditor) {
      this.ckEditor.resetDirty();
      resetUndo && this.ckEditor['resetUndo'] && this.ckEditor.resetUndo();
    }

    this.dirty$vqVB = false;
  }/*

  /**
   * @private
   * /
  public*/ function setValue(value/*:**/)/*:void*/ {
    // do not set data before the ckeditor is ready
    if (this.ckEditorReady$vqVB) {
      this.doSetValue$vqVB(value);
    } else {
      this.nextValue$vqVB = value;
    }
  }/*

  private*/ function doSetValue(value/*:**/)/*:void*/ {var this$=this;
    //ckeditor does not like null. so we change it to the empty string.
    if (value === null) {
      value = "";
    }

    // Determine whether the CKEditor exists, but is not up-to-date.
    // In some situations, the CKEditor reads the value stored in
    // the backing text area and uses it as its current value.
    // The text area is going to change when calling super.setValue,
    // so that we must determine whether the CK assumes an outdated value now.
    var ckeditor/*:**/ = this.getCKEditor();
    var ckEditorNeedsUpdate/*:Boolean*/ = ! !ckeditor && ckeditor.getData() !== value;

    if (ckEditorNeedsUpdate) {
      this.nextValue$vqVB = value;
      ckeditor.setData(value, {
        callback: function ()/*:void*/ {
          if (this$.nextValue$vqVB === value) {
            // Forget that we are setting a value.
            this$.nextValue$vqVB = undefined;
          }

          AS3.getBindable(this$,"resetOnValueSet") && this$.resetDirty(true);
        },
        noSnapshot: true
      });
    } else {
      // The CKEditor is already up to date.
      this.nextValue$vqVB = undefined;
    }
  }/*

  /**
   * Return the CKEditor's current value or null if it is the empty RT or the valueBackup if the editor is collapsed.
   *
   * @private
   * /
  public*/ function getValue()/*:**/ {
    if (this.nextValue$vqVB !== undefined) {
      // We are in the process of updating the CK editor. That might take some time
      // and the CK editor is known to report spurious empty texts during this time.
      return this.nextValue$vqVB === null ? "" : this.nextValue$vqVB;
    } else {
      var value/*:**/;
      value = this.ckEditor && this.ckEditor.getData();
      if (Ext.isIE) {
        if (value === EMPTY_VALUE_WITH_ENCODED_VALUE$static) {
          value = null;
        } else if (value === EMPTY_VALUE_WITH_BREAK$static) {
          value = null;
        }
      } else {
        if (value === EMPTY_VALUE$static) {
          value = null;
        }
      }
    }

    return value;
  }/*

  private*/ function focusOnInstanceReady()/*:void*/ {
    var editor/*:**/ = this.getCKEditor();
    editor.focus();
    editor.removeListener('instanceReady',AS3.bind( this,"focusOnInstanceReady$vqVB"));
  }/*

  override public*/ function focus(selectText/*:* = undefined*/, delay/*:* = undefined*/, callback/*:Function = null*/, scope/*:Function = null*/)/*:Component*/ {var this$=this;switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:scope=null;}
    if (!this.isCKEditorReady()) {
      this.on(RichTextArea.CKREADY_EVENT, function ()/*:void*/ {
        this$.focus(selectText, delay, callback, scope);
      });
    }

    var editor/*:**/ = this.getCKEditor();
    if (editor) {
      Ext.Component.prototype.focus.call(this,false, delay);
      if(editor.focus) {
        editor.focus();
      } else {
        editor.on('instanceReady',AS3.bind( this,"focusOnInstanceReady$vqVB"));
      }
      return this;
    } else {
      //ignore the focus event if the ckeditor is not ready
      return null;
    }
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Used by WATF Tests.
   * See com/coremedia/uitesting/ui/ckeditor/RichTextArea.java
   *
   * @private
   * /
  public*/ function selectAll(editor/*:* = null*/)/*:void*/ {if(arguments.length<=0)editor=null;
    var cked/*:**/ = editor || this.getCKEditor();
    if (cked) {
      var range/*:**/ = cked.createRange();
      range.selectNodeContents(cked.editable());
      cked.getSelection().selectRanges([range]);
    }
  }/*

  /**
   * Force a save of the current state of the ckeditor
   *
   * @private
   * /
  public*/ function forceSave()/*:void*/ {
    this.ckEditor && this.ckEditor.fire('save');
  }/*

  /**
   * Triggers underlying ckeditor to save undo/redo snapshot
   *
   * @private
   * /
  public*/ function saveSnapshot()/*:void*/ {
    this.ckEditor && this.ckEditor.fire('saveSnapshot');
  }/*

  /**
   * @private
   * /
  public*/ function isCKEditorReady()/*:Boolean*/ {
    return this.ckEditorReady$vqVB;
  }/*

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.HighlightableMixin"
      ],
      metadata: {
        "": ["PublicApi"],
        applyDeprecatedSymbolMapping: ["Deprecated"],
        addSymbolMapping: ["Deprecated"]
      },
      alias: "widget.com.coremedia.ui.config.richTextArea",
      extraPlugins$vqVB: null,
      removePlugins$vqVB: null,
      ckEditorConfig$vqVB: null,
      ckEditor: null,
      nextValue$vqVB: undefined,
      ckEditorReady$vqVB: false,
      dirty$vqVB: false,
      xlinkHref$vqVB: null,
      timer$vqVB: undefined,
      focused$vqVB: false,
      constructor: RichTextArea$,
      super$vqVB: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      onResize$vqVB: onResize,
      destroyCkEditor$vqVB: destroyCkEditor,
      getCkEditorConfig: getCkEditorConfig,
      addCKEditorPlugin: addCKEditorPlugin,
      removeCKEditorPlugin: removeCKEditorPlugin,
      customizeCKEditorConfig: customizeCKEditorConfig,
      preventClipboardOperationsWhenNotFocusedListener$vqVB: preventClipboardOperationsWhenNotFocusedListener,
      initEvents: initEvents,
      fireChange$vqVB: fireChange,
      bufferChange$vqVB: bufferChange,
      updateXlinkHref$vqVB: updateXlinkHref,
      getXlinkHref: getXlinkHref,
      isDirty: isDirty,
      onRender: onRender,
      isVisible: isVisible,
      updateReadOnly: updateReadOnly,
      doSetReadOnly$vqVB: doSetReadOnly,
      onBeforeDestroy$vqVB: onBeforeDestroy,
      handleCkEditorReady$vqVB: handleCkEditorReady,
      getCKEditor: getCKEditor,
      resetDirty: resetDirty,
      setValue: setValue,
      doSetValue$vqVB: doSetValue,
      getValue: getValue,
      focusOnInstanceReady$vqVB: focusOnInstanceReady,
      focus: focus,
      selectAll: selectAll,
      forceSave: forceSave,
      saveSnapshot: saveSnapshot,
      isCKEditorReady: isCKEditorReady,
      config: {
        value: undefined,
        readOnly: false,
        resetOnValueSet: true,
        changeBuffer: 50,
        delegating: false
      },
      statics: {
        CKREADY_EVENT: 'ckready',
        CKRESIZE_EVENT: "ckresize",
        symbolMapping: undefined,
        defaultCKEditorExtraPlugins: undefined,
        defaultCKEditorRemovePlugins: undefined,
        addSymbolMapping: addSymbolMapping$static,
        __initStatics__: function() {
          symbolMapping$static_();
          defaultCKEditorExtraPlugins$static_();
          defaultCKEditorRemovePlugins$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Component",
        "Ext.dom.Element",
        "Ext.event.Event",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: [
        "com.coremedia.ui.BrowserContextMenuManager",
        "com.coremedia.ui.ckeditor.AnchorUtil"
      ]
    };
});
