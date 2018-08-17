Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase", function(OpenInTabActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.editorContext;

[PublicApi]
public class OpenInTabActionBase extends ContentAction {
  private var background:Boolean = false;

  public*/ function OpenInTabActionBase$(config/*:OpenInTabAction = null*/) {if(arguments.length<=0)config=null;
    this.background$z7I2 = ! !AS3.getBindable(config,"background");

    var actionName/*:String*/ = this.background$z7I2 ? 'openInBackgroundTab' : 'openInTab';
    this.super$z7I2(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, actionName, {handler:AS3.bind( this,"openInTab$z7I2")})));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var notAvailable/*:Boolean*/ = !contents.every(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.canBeOpenedInTab);

    //If only one content is to be opened and this is the active content anyway...
    //...then disable the action
    return notAvailable || (contents.length === 1 && contents[0] === com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.getValue());
  }/*

  override protected*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    var notAvailable/*:Boolean*/ = !contents.every(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.canBeOpenedInTab);
    return notAvailable;
  }/*

  private*/ function openInTab(contents/*:**/)/*:void*/ {
    var myContents/*:Array*/ = (AS3.is(contents,  Array) && contents) || this.getContents();
    if (!this.isDisabledFor(myContents)) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabsForEntities(myContents, this.background$z7I2);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      background$z7I2: false,
      constructor: OpenInTabActionBase$,
      super$z7I2: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      isHiddenFor: isHiddenFor,
      openInTab$z7I2: openInTab,
      requires: ["com.coremedia.cms.editor.sdk.actions.ContentAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
