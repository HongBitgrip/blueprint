Ext.define("com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindowBase", function(InternalLinkWindowBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.ckeditor.*;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.StringUtil;
import ext.ZIndexManager;
import ext.util.TextMetrics;
import ext.window.Window;

/**
 * A window implementation that updates internal link property form fields with data of
 * the currently selected internal link of the associated CKEditor instance.
 * /
[ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class InternalLinkWindowBase extends Window {

  private static const*/var DEFAULT_INTERNAL_LINK_TYPE$static/*:String*/ = 'replace';/*
  private static const*/var PREFERENCE_INTERNAL_LINK_TYPE$static/*:String*/ = "ckeditor.internalLinkDialog.targetType";/*
  /*
   * Be careful with this value: Texts are displayed broader on mac than on windows systems. Always check
   * the width of the surrounding container on all systems and browsers if set hard
   * /
  private static const*/var COMBO_WINDOW_OFFSET$static/*:Number*/ = 122;/*

  /**
   * The CKEditor that interacts with this menu.
   * /
  private var ckEditor:*;

  /**
   * The UI model for rendering this component.
   * /
  private var model:Bean;

  private var dirty:Boolean;
  private var updateInProgress:Number = 0;
  private var linkTypePreferenceValueExpression:ValueExpression;
  private var contentVE:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function InternalLinkWindowBase$(config/*:InternalLinkWindow = null*/) {if(arguments.length<=0)config=null;
    // model needs to be reset before the constructor, otherwise bindTo may return undefined
    this.resetModel(true);
    this.super$iDxB(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.window.Window.prototype.afterRender.call(this);
    var s/*:String*/ = Ext.String.format(this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuDragText'));
    var width/*:Number*/ = new Ext.util.TextMetrics(this.getEl()).getWidth(s) + COMBO_WINDOW_OFFSET$static;
    this.setWidth(width);
  }/*

  public*/ function getModel()/*:Bean*/ {
    if (!this.model$iDxB) {
      this.model$iDxB = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.model$iDxB;
  }/*

  public*/ function getLinkTypePreferenceValueExpression()/*:ValueExpression*/ {
    if (!this.linkTypePreferenceValueExpression$iDxB) {
      var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
      this.linkTypePreferenceValueExpression$iDxB = com.coremedia.ui.data.ValueExpressionFactory.create(PREFERENCE_INTERNAL_LINK_TYPE$static, preferences);
    }
    return this.linkTypePreferenceValueExpression$iDxB;
  }/*

  [InjectFromExtParent]
  public*/ function setRichTextWindowGroup(grp/*:ZIndexManager*/)/*:void*/ {
    grp.register(this);
  }/*

  /**
   * Handle model updates, as a consequence, update the anchor element.
   * /
  private*/ function onValueChange()/*:void*/ {var this$=this;
    if (!this.isVisible(true)) {
      return;
    }

    this.updateInProgress$iDxB++;
    try {
      var linkElement/*:**/ = this.getSelectedInternalLink$iDxB();

      //just update existing link
      if (linkElement !== null && this.isValidLink$iDxB()) {
        this.updateLinkElement$iDxB();
        this.setDirty$iDxB();
      }
      //it's a new link, but not valid yet
      else if (linkElement === null && !this.isValidLink$iDxB() && this.getContent$iDxB() === null) {
        //do nothing...
      }
      //create new link element
      else if (linkElement === null && this.getContent$iDxB() !== null) {
        this.createNewLink$iDxB();
        this.setDirty$iDxB();
      }
      //link exists but is not valid because link list has been resetted, but link item has been added
      else if (linkElement !== null && !this.isValidLink$iDxB() && this.getContent$iDxB() !== null) {
        this.updateLinkElement$iDxB();
        this.setDirty$iDxB();
      }
      //delete new link element
      else if (linkElement !== null && !this.isValidLink$iDxB()) {
        this.resetModel(false);
        this.setDirty$iDxB();
      }
    } finally {
      // Try do acknowledge the end of the update
      // after all setTimeout calls possibly made by the CKEditor
      // during the updates.
      window.setTimeout(function()/*:void*/ {
        this$.updateInProgress$iDxB--;
        this$.focus();
      }, 0);
    }

    this.save();
  }/*

  /**
   * Write link type to preferences
   * @param pce change event
   * /
  private*/ function onLinkTypeChange(pce/*:PropertyChangeEvent*/)/*:void*/ {
    if (pce.oldValue !== pce.newValue) {
      this.getLinkTypePreferenceValueExpression().setValue(pce.newValue);
    }
  }/*

  protected*/ function getContentVE()/*:ValueExpression*/ {
    if (!this.contentVE$iDxB) {
      this.contentVE$iDxB = com.coremedia.ui.data.ValueExpressionFactory.create("content", this.getModel());
    }
    return this.contentVE$iDxB;
  }/*

  /**
   * Returns the content object from the bean
   * or null if not set yet.
   * /
  private*/ function getContent()/*:Content*/ {
    var content/*:Content*/ = null;
    var contentArray/*:Array*/ =AS3.as( this.getContentVE().getValue(),  Array);
    if (contentArray && contentArray.length === 1) {
      content = contentArray[0];
    }
    return content;
  }/*

  /**
   * Remember this menu in the global list of currently shown internal
   * link menus. Unless a menu is entered into that list, no effort is
   * made to keep it open.
   * /
  override public*/ function show(animateTarget/*:* = null*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(arguments.length){case 0:animateTarget=null;case 1:callback=null;case 2:scope=null;}
    this.resetModel(true);
    var modelBean/*:Bean*/ = this.getModel();
    modelBean.addValueChangeListener(AS3.bind(this,"onValueChange$iDxB"));
    modelBean.addPropertyChangeListener('type',AS3.bind( this,"onLinkTypeChange$iDxB"));
    var element/*:**/ = this.getSelectedInternalLink$iDxB();
    var selection/*:**/ = this.ckEditor$iDxB.getSelection();

    // Fill in all the relevant fields if there's already one link selected.
    if (element) {
      selection['selectElement'](element);

      var url/*:String*/ = element.getAttribute('_xlink:href') || 'http://';
      var content/*:Content*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContent(url);

      var linkType/*:String*/ = element.getAttribute('_xlink:show');
      // TODO: use this (later)
      //var name:String = element.getAttribute('_xlink:role');

      modelBean.set('href', url);
      modelBean.set('content', content ? [content] : []);
      modelBean.set('type', linkType);
    }

    this.onValueChange$iDxB();
    Ext.window.Window.prototype.show.call(this,animateTarget, callback, scope);
  }/*


  override protected*/ function onHide(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    Ext.window.Window.prototype.onHide.call(this,animateTarget, callback, scope);
    this.model$iDxB.removeValueChangeListener(AS3.bind(this,"onValueChange$iDxB"));
    this.model$iDxB.removePropertyChangeListener('type',AS3.bind( this,"onLinkTypeChange$iDxB"));
  }/*

  /**
   * Returns the selected text of the RTE.
   * @return
   * /
  private*/ function getSelectedText()/*:String*/ {
    var selection/*:**/ = this.ckEditor$iDxB.getSelection();

    if (selection === null) {
      return null;
    }

    var text/*:String*/ = "" + selection.getSelectedText();
    if (text.length > 0) {
      return text;
    }

    return null;
  }/*

  private*/ function executeWithoutFocus(operation/*:Function*/)/*:void*/ {
    this.updateInProgress$iDxB++;
    try {
      this.ckEditor$iDxB.focusManager.lock();
      operation();
    } finally {
      this.ckEditor$iDxB.focusManager.unlock();
      this.updateInProgress$iDxB--;
    }
  }/*

  public*/ function save()/*:void*/ {
    if (this.dirty$iDxB) { //check if the dialog is dirty, fire dirty command for put request
      this.ckEditor$iDxB['fire']('save');
      this.dirty$iDxB = false;
    }

  }/*

  public*/ function unlink()/*:void*/ {
    // hot fixed for now...
    // not using resetModel here as it triggers 3 change events at once, we just want to achieve the same behaviour
    // as when the content is changed via the link list field.
    this.getContentVE().setValue([]);
  }/*

  /**
   * Deletes the selected link.
   * Called via update model, or from the remove link button.
   * /
  public*/ function resetModel(force/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)force=false;
    if (this.isVisible(true) || force) {
      var modelBean/*:Bean*/ = this.getModel();
      modelBean.set('href', '');
      modelBean.set('content', []);
      modelBean.set('type', this.getTargetType$iDxB());
    }
  }/*

  /**
   * Creates a new anchor element and
   * applies the url and target attributes from
   * this bean.
   * /
  private*/ function createNewLink()/*:void*/ {var this$=this;
    if (this.getContent$iDxB() !== null) {
      var droppedContent/*:Content*/ = this.getContent$iDxB();
      var url/*:String*/ = droppedContent.getUriPath();

      //update the model, but don't recursively call #onValueChange
      var modelBean/*:Bean*/ = this.getModel();
      modelBean.removeValueChangeListener(AS3.bind(this,"onValueChange$iDxB"));
      try {
        modelBean.set('href', url);
        modelBean.set('content', [droppedContent]);
        if (!modelBean.get('type')) {
          modelBean.set('type', this.getTargetType$iDxB());
        }
      } finally {
        modelBean.addValueChangeListener(AS3.bind(this,"onValueChange$iDxB"));
      }

      //declare attributes for element creation/update
      var attributes/*:Object*/ = {'href' : '#', '_xlink:href' : modelBean.get('href'), '_xlink:show' : modelBean.get('type')};

      this.executeWithoutFocus$iDxB(function ()/*:void*/ {
        var selection/*:String*/ = this$.getSelectedText$iDxB();
        //insert (=no text selected) or replace (=use selected text)
        //replace
        if (selection !== null) {
          // Apply style/the attributes
          var style/*:**/ = new CKEDITOR['style']({ element : 'a', attributes : attributes });
          style.type = CKEDITOR['STYLE_INLINE'];//TODO add to jangaroo CKEditor API // need to override... dunno why. => check cmlink.js for details
          this$.ckEditor$iDxB.applyStyle(style);
        }
        //insert new element using the content name
        else {
          var linkElement/*:**/ = this$.ckEditor$iDxB.document.createElement('a', {attributes: attributes});

          //check if image is selected
          if(this$.ckEditor$iDxB.getSelection().getStartElement()['is']('img')){
            var image/*:**/ = this$.ckEditor$iDxB.getSelection().getStartElement();
            linkElement.append(image);
          }
          //if no image selected, create text link
          else{
            var text/*:**/ = this$.ckEditor$iDxB.document.createText(droppedContent.getName());
            linkElement.append(text);
          }

          //select the new link string

          // TODO: This is just a temporary fix
          // In IE the getSelection() function returns null if the selection is empty and the
          // editor does not have the focus.
          if (this$.ckEditor$iDxB.getSelection() === null && Ext.isIE) {
            this$.ckEditor$iDxB.focus();
          }
          var ranges/*:**/ = this$.ckEditor$iDxB.getSelection().getRanges();
          ranges[0].insertNode(linkElement);
          ranges[0].selectNodeContents(linkElement);
          this$.ckEditor$iDxB.getSelection().selectRanges(ranges);
        }
      });
    }
  }/*

  private*/ function getTargetType()/*:String*/ {
    return this.getLinkTypePreferenceValueExpression().getValue() || DEFAULT_INTERNAL_LINK_TYPE$static;
  }/*

  /**
   * A link is valid when there is an url and the target
   * window is set.
   * @return
   * /
  private*/ function isValidLink()/*:Boolean*/ {
    var modelBean/*:Bean*/ = this.getModel();
    return modelBean.get('href') !== null && (AS3.as(modelBean.get('href'),  String)).length > 0;
  }/*

  /**
   * Checks if the selected text is an internal link
   * and updates the attributes using the model properties
   * of this bean.
   * /
  private*/ function updateLinkElement()/*:void*/ {var this$=this;
    var linkElement/*:**/ = this.getSelectedInternalLink$iDxB();

    if (linkElement !== null) {
      if (this.getContent$iDxB() !== null) {
        var url/*:String*/ = this.getContent$iDxB().getUriPath();
        linkElement.setAttribute('_xlink:href', url);
        linkElement.setAttribute('_xlink:show', this.getModel().get('type'));
      } else {
        this.executeWithoutFocus$iDxB(function ()/*:void*/ {
          this$.ckEditor$iDxB.execCommand('unlink');
        });
      }
    }
  }/*

  /**
   * Marks the dialog dirty.
   * /
  private*/ function setDirty()/*:void*/ {
    this.dirty$iDxB = true;
  }/*

  /**
   * Set the CKEditor on which this link menu operates.
   * @param ckEditor the CKEditor
   * /
  public*/ function setCKEditor(ckEditor/*:**/)/*:void*/ {
    this.ckEditor$iDxB = ckEditor;
    ckEditor.on("focus",AS3.bind( this,"maybeHide$iDxB"));
  }/*

  private*/ function maybeHide()/*:void*/ {
    if (!this.updateInProgress$iDxB) {
      this.hide();
    }
  }/*

  /**
   * Return the currently selected internal link element, or null, if no internal link is selected.
   * If ckEditor.getSelection() returns null the ckEditor gets the focus as a workaround
   * @return the currently selected internal link element
   * /
  private*/ function getSelectedInternalLink()/*:**/ {var this$=this;
    // TODO: This is just a temporary fix... Once selections are locked properly for
    // internal links in IE, this should be removed
    if (Ext.isIE && this.ckEditor$iDxB !== null && this.ckEditor$iDxB.getSelection() === null) {
      this.updateInProgress$iDxB++;
      this.ckEditor$iDxB.focus(true);
      com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
        this$.updateInProgress$iDxB--;
      });
    }
    try {
      var selection/*:**/ = this.ckEditor$iDxB.getSelection();
      var ascendant/*:**/ = com.coremedia.ui.ckeditor.AnchorUtil.getSelectedAnchor(selection);
      return com.coremedia.ui.ckeditor.AnchorUtil.isLinkWithoutUrlScheme(ascendant) ? ascendant : null;
    }
    catch(e/*:**/) {
      return null;
    }
  }/*

  /**
   * The transformer function for the bind plugin
   * that enabled/disabled the components depending
   * on the content object.
   * @return
   * /
  internal*/ function enabledTransformer()/*:Boolean*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var contentList/*:Array*/ = this.getModel().get('content');
    return (!contentList || contentList.length === 0);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.window.Window",
      metadata: {setRichTextWindowGroup: ["InjectFromExtParent"]},
      ckEditor$iDxB: undefined,
      model$iDxB: null,
      dirty$iDxB: false,
      updateInProgress$iDxB: 0,
      linkTypePreferenceValueExpression$iDxB: null,
      contentVE$iDxB: null,
      constructor: InternalLinkWindowBase$,
      super$iDxB: function() {
        Ext.window.Window.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getModel: getModel,
      getLinkTypePreferenceValueExpression: getLinkTypePreferenceValueExpression,
      setRichTextWindowGroup: setRichTextWindowGroup,
      onValueChange$iDxB: onValueChange,
      onLinkTypeChange$iDxB: onLinkTypeChange,
      getContentVE: getContentVE,
      getContent$iDxB: getContent,
      show: show,
      onHide: onHide,
      getSelectedText$iDxB: getSelectedText,
      executeWithoutFocus$iDxB: executeWithoutFocus,
      save: save,
      unlink: unlink,
      resetModel: resetModel,
      createNewLink$iDxB: createNewLink,
      getTargetType$iDxB: getTargetType,
      isValidLink$iDxB: isValidLink,
      updateLinkElement$iDxB: updateLinkElement,
      setDirty$iDxB: setDirty,
      setCKEditor: setCKEditor,
      maybeHide$iDxB: maybeHide,
      getSelectedInternalLink$iDxB: getSelectedInternalLink,
      enabledTransformer: enabledTransformer,
      requires: [
        "Ext",
        "Ext.String",
        "Ext.util.TextMetrics",
        "Ext.window.Window",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.ckeditor.AnchorUtil",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
