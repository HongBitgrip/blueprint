Ext.define("com.coremedia.cms.editor.sdk.actions.LinkListCutAction", function(LinkListCutAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;

import mx.resources.ResourceManager;

[PublicApi]
public class LinkListCutAction extends AbstractLinkListAction {

  public static const ACTION_ID:String =*/function ACTION_ID$static_(){LinkListCutAction.ACTION_ID=( com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction.ACTION_ID);}/*;

  public*/ function LinkListCutAction$(config/*:LinkListCutAction = null*/) {if(arguments.length<=0)config=null;
    this.super$zEar(config);
  }/*

  override protected*/ function defaultHandler()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();

    var valuesToCut/*:Array*/ = this.getSelectedValues();
    if (valuesToCut.length > 0) {
      clipboard.setValue(valuesToCut, com.coremedia.cms.editor.sdk.clipboard.Clipboard.CUTLINK);
    }

    var positionsToCut/*:Array*/ = this.getSelectedPositions();
    this.linkListWrapper.removeLinksAtIndexes(positionsToCut);
  }/*

  override protected*/ function createIconCls()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_cutToClipboard_icon');
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return this.isNothingSelected() || com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction.prototype.calculateDisabled.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
      metadata: {"": ["PublicApi"]},
      constructor: LinkListCutAction$,
      super$zEar: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction.prototype.constructor.apply(this, arguments);
      },
      defaultHandler: defaultHandler,
      createIconCls: createIconCls,
      calculateDisabled: calculateDisabled,
      statics: {
        ACTION_ID: undefined,
        __initStatics__: function() {
          ACTION_ID$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction"
      ]
    };
});
