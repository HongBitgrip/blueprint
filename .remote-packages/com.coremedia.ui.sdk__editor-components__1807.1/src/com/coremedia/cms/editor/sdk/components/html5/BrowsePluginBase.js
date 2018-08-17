Ext.define("com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase", function(BrowsePluginBase) {/*package com.coremedia.cms.editor.sdk.components.html5 {
import com.coremedia.ui.components.StatefulQuickTip;

import ext.Component;
import ext.Ext;
import ext.FunctionUtil;
import ext.Plugin;
import ext.button.Button;
import ext.dom.Element;
import ext.event.Event;
import ext.tip.QuickTipManager;

import js.KeyEvent;

//TODO: EXT6_API This class uses loads of private EXT& APIs

public class BrowsePluginBase implements Plugin, FileSelector {

  /**
   * My initial config.
   * /
  private var initialConfig:BrowsePlugin;
  /**
   * Element for the hidden file input.
   * /
  private var input_file:Element = null;
  /**
   * Element for the surrounding form element.
   * /
  private var input_form:Element = null;
  /**
   * The handler originally defined for the Ext.Button during construction using the "handler" config option.
   * We need to null out the "handler" property so that it is only called when a file is selected.
   * /
  private var originalHandler:Function = null;
  /**
   * The scope originally defined for the Ext.Button during construction using the "scope" config option.
   * While the "scope" property doesn't need to be nulled, to be consistent with originalHandler, we do.
   * /
  private var originalScope:Function = null;

  private var component:Component = null;
  private var files:Array = null;

  public*/ function BrowsePluginBase$(config/*:BrowsePlugin = null*/) {if(arguments.length<=0)config=null;
    this.initialConfig$SZGG = config;
  }/*

  public*/ function init(cmp/*:Component*/)/*:void*/ {var this$=this;
    this.originalHandler$SZGG = cmp['handler'] || null;
    this.originalScope$SZGG = cmp['scope'] || window;
    cmp['handler'] = null;
    cmp['scope'] = null;

    this.component$SZGG = cmp;

    cmp.addListener('render',AS3.bind( this,"onRender"));

    // chain fns
    if (typeof cmp.setDisabled == 'function') {
      cmp.setDisabled = Ext.Function.createSequence(AS3.bind(cmp,"setDisabled"), (function(disabled/*:Boolean*/)/*:void*/ {
        if (this$.input_file$SZGG) {
          this$.input_file$SZGG.dom['disabled'] = disabled;
        }
      }));
    }

    if (typeof cmp.enable == 'function') {
      cmp.enable = Ext.Function.createSequence(AS3.bind(cmp,"enable"), (function()/*:void*/ {
        if (this$.input_file$SZGG) {
          this$.input_file$SZGG.dom['disabled'] = false;
        }
      }));
    }

    if (typeof cmp.disable == 'function') {
      cmp.disable = Ext.Function.createSequence(AS3.bind(cmp,"disable"), (function()/*:void*/ {
        if (this$.input_file$SZGG) {
          this$.input_file$SZGG.dom['disabled'] = true;
        }
      }));
    }

    if (typeof cmp.destroy == 'function') {
      cmp.destroy = Ext.Function.createSequence(AS3.bind(cmp,"destroy"), (function()/*:void*/ {
        var input_file/*:Element*/ = this$.detachInputFile(true);
        if (input_file) {
          input_file.destroy();
        }
        input_file = null;
      }));
    }
  }/*

  /**
   * @see Ext.Button.onRender
   * /
  public*/ function onRender()/*:void*/ {var this$=this;
    this.createInputFile();

    if (AS3.getBindable(this.initialConfig$SZGG,"enableFileDrop")) {
      var dropEl/*:Element*/ = AS3.getBindable(this.initialConfig$SZGG,"dropEl");
      if (!dropEl) {
        dropEl = this.component$SZGG.el;
        if (AS3.getBindable(this.initialConfig$SZGG,"dropElSelector")) {
          dropEl = dropEl.up(AS3.getBindable(this.initialConfig$SZGG,"dropElSelector"));
        }
      }

      //see http://dev.w3.org/html5/spec/Overview.html#the-dragevent-and-datatransfer-interfaces
      dropEl.addListener('dragover', function(e/*:Event*/)/*:void*/ {
        e.stopPropagation();
        e.preventDefault();

        // prevents drop in FF ;-(
        if (! Ext.isGecko) {
          e.browserEvent['dataTransfer'].dropEffect = 'copy';
        }
      });

      dropEl.addListener('drop', function(e/*:Event*/)/*:void*/ {
        e.stopPropagation();
        e.preventDefault();

        if (AS3.getBindable(this$.initialConfig$SZGG,"onBrowseButtonClick")) {
          // Idea complains if parenthesis are missing
          (AS3.getBindable(this$.initialConfig$SZGG,"onBrowseButtonClick"))();
        }

        var dt/*:**/ = e.browserEvent['dataTransfer'];
        var files/*:Array*/ = dt.files;

        this$.onInputFileChange$SZGG(null, null, null, files);
      });
    }
  }/*

  public*/ function createInputFile()/*:void*/ {
    this.input_form$SZGG = this.component$SZGG.el.createChild({
      tag: 'form',
      action: '#',
      style: "position: absolute; display: block; border: none; z-index: 1;"
    }, (AS3.as(this.component$SZGG,  Ext.button.Button))['btnEl'].dom);
    this.input_file$SZGG = this.input_form$SZGG.createChild(Ext.apply({
      tag: 'input',
      type: 'file',
      size: 6,
      name: AS3.getBindable(this.initialConfig$SZGG,"inputFileName") || Ext.id(this.component$SZGG.el),
//      cls: 'x-file-upload',
      // CMS-2247: in IE9 textfield functionality prevents clicking the button
      // if font size is big enough and space limited, textfield won't be rendered
      style: "position: absolute; display: block; border: none; top: 32px;"
    }, AS3.getBindable(this.initialConfig$SZGG,"multiple") ? {multiple: true} : {}));


    this.input_file$SZGG.setOpacity(0.0);
    this.input_file$SZGG.dom.setAttribute("tabIndex", "-1");

    if (this.component$SZGG['tooltip']) {
      if (typeof this.component$SZGG['tooltip'] == 'object') {
        Ext.tip.QuickTipManager.register(AS3.cast(com.coremedia.ui.components.StatefulQuickTip,Ext.apply({target: this.input_file$SZGG}, this.component$SZGG['tooltip'])));
      }
      else {
       this.input_file$SZGG.dom[this.component$SZGG['tooltipType']] = this.component$SZGG['tooltip'];
      }
    }

    this.input_file$SZGG.addListener('change',AS3.bind( this,"onInputFileChange$SZGG"), this);
    this.input_file$SZGG.addListener('click',AS3.bind( this,"handleFormClick$SZGG"));

    //key listener has to be added to the button component
    this.component$SZGG.addListener('click',AS3.bind( this,"clickInputFile$SZGG"));
    this.component$SZGG.el.addListener('keydown',AS3.bind( this,"handleKeyEvent$SZGG"));
  }/*

  private*/ function clickInputFile()/*:void*/ {
    this.input_file$SZGG.dom['click']();
  }/*

  /**
   * The key handler for the upload button
   * @param e the key event to check the keyCode for
   * /
  private*/ function handleKeyEvent(e/*:KeyEvent*/)/*:void*/ {
    //ignore key events other than space or enter
    if (e.keyCode === KeyEvent.DOM_VK_SPACE || e.keyCode === KeyEvent.DOM_VK_RETURN || e.keyCode === KeyEvent.DOM_VK_ENTER) {
      this.clickInputFile$SZGG();
    }
  }/*

  /**
   * Handles the click event or key event for the file browser button
   * @param e the trigger event
   * /
  private*/ function handleFormClick(e/*:Event*/)/*:void*/ {
      // Reset file input every time the user starts a new selection.
      if (window.document.forms[this.input_form$SZGG.id]) {
        window.document.forms[this.input_form$SZGG.id].reset();
      }
      if (AS3.getBindable(this.initialConfig$SZGG,"onBrowseButtonClick")) {
        // Idea complains if parenthesis are missing
        (AS3.getBindable(this.initialConfig$SZGG,"onBrowseButtonClick"))();
      }
      e.stopPropagation();
  }/*

  /**
   * Handler when inputFileEl changes value (i.e. a new file is selected).
   * @param e unused parameter for signature matching
   * @param target unused parameter for signature matching
   * @param options unused parameter for signature matching
   * @param fileList files when input comes from drop...
   * /
  private*/ function onInputFileChange(e/*:**/, target/*:**/, options/*:**/, fileList/*:Array*/)/*:void*/ {
    if (window.FileList) { // HTML5 FileList support
      this.files$SZGG = fileList ? fileList : this.input_file$SZGG.dom['files'];
    } else {
      this.files$SZGG = [
        {
          name : this.input_file$SZGG.getValue(false).split(/[\/\\]/).pop()
        }
      ];
      this.files$SZGG[0].type = this.getFileCls();
    }

    if (this.originalHandler$SZGG && this.files$SZGG.length > 0) {
      this.originalHandler$SZGG.call(this.originalScope$SZGG, this);
    }
  }/*

  public*/ function detachInputFile(no_create/*:Boolean = false*/)/*:Element*/ {if(arguments.length<=0)no_create=false;
    var result/*:Element*/ = this.input_file$SZGG;

    no_create = no_create || false;

    if (this.input_file$SZGG) {
      if (typeof this.component$SZGG['tooltip'] == 'object') {
        Ext.tip.QuickTipManager.unregister(this.input_file$SZGG);
      }
      else {
        this.input_file$SZGG.dom[this.component$SZGG['tooltipType']] = null;
      }
      this.input_file$SZGG.clearListeners();
    }
    this.input_file$SZGG = null;
    this.input_form$SZGG = null;

    if (!no_create) {
      this.createInputFile();
    }
    return result;
  }/*

  public*/ function getFileList()/*:Array*/ {
    return this.files$SZGG;
  }/*

  public*/ function getInputFile()/*:Element*/ {
    return this.input_file$SZGG;
  }/*

  public*/ function getFileName()/*:String*/ {
    var file/*:**/ = this.getFileList()[0];
    return file.name ? file.name : file.fileName;
  }/*

  public*/ function getFileCls()/*:String*/ {
    var fparts/*:Array*/ = this.getFileName().split('.');
    if (fparts.length === 1) {
      return '';
    }
    else {
      return fparts.pop().toLowerCase();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "ext.Plugin",
        "com.coremedia.cms.editor.sdk.components.html5.FileSelector"
      ],
      initialConfig$SZGG: null,
      input_file$SZGG: null,
      input_form$SZGG: null,
      originalHandler$SZGG: null,
      originalScope$SZGG: null,
      component$SZGG: null,
      files$SZGG: null,
      constructor: BrowsePluginBase$,
      init: init,
      onRender: onRender,
      createInputFile: createInputFile,
      clickInputFile$SZGG: clickInputFile,
      handleKeyEvent$SZGG: handleKeyEvent,
      handleFormClick$SZGG: handleFormClick,
      onInputFileChange$SZGG: onInputFileChange,
      detachInputFile: detachInputFile,
      getFileList: getFileList,
      getInputFile: getInputFile,
      getFileName: getFileName,
      getFileCls: getFileCls,
      requires: [
        "Ext",
        "Ext.Function",
        "Ext.button.Button",
        "Ext.tip.QuickTipManager",
        "com.coremedia.cms.editor.sdk.components.html5.FileSelector",
        "com.coremedia.ui.components.StatefulQuickTip",
        "ext.Plugin"
      ]
    };
});
