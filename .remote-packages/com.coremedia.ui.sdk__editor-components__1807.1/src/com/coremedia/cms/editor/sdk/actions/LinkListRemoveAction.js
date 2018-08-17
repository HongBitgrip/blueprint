Ext.define("com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction", function(LinkListRemoveAction) {/*package com.coremedia.cms.editor.sdk.actions {

import mx.resources.ResourceManager;

[PublicApi]
public class LinkListRemoveAction extends AbstractLinkListAction {

  public static const ACTION_ID:String =*/function ACTION_ID$static_(){LinkListRemoveAction.ACTION_ID=( com.coremedia.cms.editor.sdk.actions.DeleteAction.ACTION_ID);}/*;

  public*/ function LinkListRemoveAction$(config/*:LinkListRemoveAction = null*/) {if(arguments.length<=0)config=null;
    this.super$I2YT(config);
  }/*

  override protected*/ function defaultHandler()/*:void*/ {
    var positionsToCut/*:Array*/ = this.getSelectedPositions();
    this.linkListWrapper.removeLinksAtIndexes(positionsToCut);
  }/*

  override protected*/ function createIconCls()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_icon');
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
      constructor: LinkListRemoveAction$,
      super$I2YT: function() {
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
      uses: ["com.coremedia.cms.editor.sdk.actions.DeleteAction"]
    };
});
