Ext.define("com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase", function(InternalLinkButtonBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.ckeditor.AnchorUtil;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;
import ext.ZIndexManager;
import ext.button.Button;
import ext.container.Container;

/**
 * A Button that enables itself when it would be appropriate
 * to open an internal link editing dialog.
 * /
public class InternalLinkButtonBase extends IconButton {


  private var ckEditor:*;
  //the toolbar window group
  private var richTextWindowGroup:ZIndexManager;

  private var internalLinkWindow:InternalLinkWindow;
  private var effectiveReadOnlyExpression:ValueExpression;

  /**
   * Create a button that enables itself when it would be appropriate
   * to open an internal link editing dialog.
   *
   * @param config the config object
   * /
  public*/ function InternalLinkButtonBase$(config/*:InternalLinkButton = null*/) {if(arguments.length<=0)config=null;
    this.super$2xaD(config);

    this.effectiveReadOnlyExpression$2xaD = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(
            AS3.getBindable(config,"bindTo"),
            AS3.getBindable(config,"forceReadOnlyValueExpression"));

    this.selectionChange$2xaD();
  }/*

  internal*/ function onToggle(button/*:Button*/, pressed/*:Boolean*/)/*:**/ {
    if (!pressed && this.internalLinkWindow$2xaD) {
      this.internalLinkWindow$2xaD.hide();
    } else {
      this.openWindow$2xaD();
    }
  }/*

  internal*/ function getWindow()/*:InternalLinkWindow*/ {
    if (!this.internalLinkWindow$2xaD) {
      var windowParent/*:Container*/ = this.getRenderToContainer$2xaD();

      var internalLinkWindowConfig/*:InternalLinkWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindow,{});
      internalLinkWindowConfig.renderTo = windowParent.el;
      com.coremedia.ui.context.ComponentContextManager.configOwnerCt(internalLinkWindowConfig, windowParent);

      this.internalLinkWindow$2xaD = new com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindow(internalLinkWindowConfig);
      this.internalLinkWindow$2xaD.addListener('beforedestroy',AS3.bind( this,"windowDestroyed$2xaD"));
      this.internalLinkWindow$2xaD.addListener('hide',AS3.bind( this,"windowHide$2xaD"));
      this.richTextWindowGroup$2xaD.register(this.internalLinkWindow$2xaD);
      this.internalLinkWindow$2xaD.setCKEditor(this.ckEditor$2xaD);
    }

    return this.internalLinkWindow$2xaD;
  }/*

  private*/ function getRenderToContainer()/*:Container*/ {
    return this.findParentByType(com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField.xtype);
  }/*

  private*/ function windowHide()/*:void*/ {
    this.toggle(false);
  }/*

  private*/ function openWindow()/*:void*/ {
    this.getWindow().showBy(this, "tl-bl?");
    this.toggle(true);
  }/*

  private*/ function windowDestroyed()/*:void*/ {
    this.internalLinkWindow$2xaD = null;
  }/*

  [InjectFromExtParent]
  public*/ function setRichTextWindowGroup(grp/*:ZIndexManager*/)/*:void*/ {
    this.richTextWindowGroup$2xaD = grp;
  }/*

  [InjectFromExtParent]
  public*/ function setCKEditor(ckEditor/*:**/)/*:void*/ {
    this.ckEditor$2xaD = ckEditor;
    if (this.ckEditor$2xaD) {
      this.ckEditor$2xaD.on("selectionChange",AS3.bind( this,"selectionChange$2xaD"));
      this.getWindow().setCKEditor(ckEditor);
    }
  }/*

  private*/ function selectionChange()/*:void*/ {
    var selection/*:**/ = this.ckEditor$2xaD && this.ckEditor$2xaD.getSelection();
    var ascendant/*:**/ = selection && com.coremedia.ui.ckeditor.AnchorUtil.getSelectedAnchor(selection);

    this.setDisabled(this.effectiveReadOnlyExpression$2xaD.getValue() ||
                com.coremedia.ui.ckeditor.AnchorUtil.isLinkWithUrlScheme(ascendant) ||
                com.coremedia.ui.ckeditor.AnchorUtil.isLinkAnchorReference(ascendant));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.destroy(this.internalLinkWindow$2xaD);
    com.coremedia.ui.components.IconButton.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      metadata: {
        setRichTextWindowGroup: ["InjectFromExtParent"],
        setCKEditor: ["InjectFromExtParent"]
      },
      ckEditor$2xaD: undefined,
      richTextWindowGroup$2xaD: null,
      internalLinkWindow$2xaD: null,
      effectiveReadOnlyExpression$2xaD: null,
      constructor: InternalLinkButtonBase$,
      super$2xaD: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      onToggle: onToggle,
      getWindow: getWindow,
      getRenderToContainer$2xaD: getRenderToContainer,
      windowHide$2xaD: windowHide,
      openWindow$2xaD: openWindow,
      windowDestroyed$2xaD: windowDestroyed,
      setRichTextWindowGroup: setRichTextWindowGroup,
      setCKEditor: setCKEditor,
      selectionChange$2xaD: selectionChange,
      onDestroy: onDestroy,
      requires: [
        "Ext",
        "com.coremedia.ui.ckeditor.AnchorUtil",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.context.ComponentContextManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkWindow",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
