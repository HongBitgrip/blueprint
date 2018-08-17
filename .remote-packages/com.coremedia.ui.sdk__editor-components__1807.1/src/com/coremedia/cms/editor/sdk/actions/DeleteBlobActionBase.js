Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteBlobActionBase", function(DeleteBlobActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;

public class DeleteBlobActionBase extends ContentUpdateAction {
  /**
   * Value expression pointing to the BLOB property to delete.
   * /
  [Bindable]
  public var blobValueExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function DeleteBlobActionBase$(config/*:DeleteBlobAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"blobValueExpression" , AS3.getBindable(config,"blobValueExpression"));
    this.super$kDKQ(AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteBlobAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "deleteBlob", {handler:AS3.bind( this,"deleteBlob$kDKQ")})));
  }/*

  private*/ function deleteBlob()/*:void*/ {
    AS3.getBindable(this,"blobValueExpression").setValue(null);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var newValue/*:Blob*/ = AS3.getBindable(this,"blobValueExpression").getValue();

    return !newValue || newValue.getSize() === undefined;
  }/*

  //don't inject
  override public*/ function setContents(contents/*:**/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.setContents.call(this,contents);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction",
      constructor: DeleteBlobActionBase$,
      super$kDKQ: function() {
        com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.constructor.apply(this, arguments);
      },
      deleteBlob$kDKQ: deleteBlob,
      isDisabledFor: isDisabledFor,
      setContents: setContents,
      config: {blobValueExpression: null},
      requires: ["com.coremedia.cms.editor.sdk.actions.ContentUpdateAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DeleteBlobAction"
      ]
    };
});
