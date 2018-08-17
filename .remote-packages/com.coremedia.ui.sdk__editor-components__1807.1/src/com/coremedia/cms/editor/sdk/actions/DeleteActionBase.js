Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteActionBase", function(DeleteActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class DeleteActionBase extends ContentAction {

  /**
   * An ext.Action that deletes the content indicated
   * by the given expression.
   *
   * @param config the component configuration object
   * /
  public*/ function DeleteActionBase$(config/*:DeleteAction = null*/) {if(arguments.length<=0)config=null;
    this.super$gXIT(AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'delete', {handler:AS3.bind( this,"startDelete$gXIT")})));
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.isDeleteDisabledFor(contents);
  }/*

  override protected*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    var hasMultipleParents/*:Boolean*/ = com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.hasMultipleParentsFor(contents);
    if (hasMultipleParents === undefined) {
      return undefined;
    }
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.isHiddenFor.call(this,contents) || hasMultipleParents;
  }/*

  private*/ function startDelete()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.startDelete(contents);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: DeleteActionBase$,
      super$gXIT: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      isHiddenFor: isHiddenFor,
      startDelete$gXIT: startDelete,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteActionUtil"
      ]
    };
});
