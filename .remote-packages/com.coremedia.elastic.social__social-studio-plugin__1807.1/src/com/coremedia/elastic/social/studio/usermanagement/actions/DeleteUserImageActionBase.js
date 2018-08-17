Ext.define("com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase", function(DeleteUserImageActionBase) {/*package com.coremedia.elastic.social.studio.usermanagement.actions {

import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Component;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class DeleteUserImageActionBase extends Action {
  private var userImageValueExpression:ValueExpression;
  private var success:Function;

  public*/ function DeleteUserImageActionBase$(config/*:DeleteUserImageAction = null*/) {if(arguments.length<=0)config=null;
    this.userImageValueExpression$vKY1 = AS3.getBindable(config,"userValueExpression");
    this.success$vKY1 = AS3.getBindable(config,"success");
    this.super$vKY1(config);

    this.setHandler(AS3.bind(this,"askForDeletion$vKY1"), this);
    this.userImageValueExpression$vKY1.addChangeListener(AS3.bind(this,"updateDisabled$vKY1"));
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {var this$=this;
    Ext.Action.prototype.addComponent.call(this,comp);
    comp.addListener('destroy', function ()/*:void*/ {
      this$.userImageValueExpression$vKY1.removeChangeListener(AS3.bind(this$,"updateDisabled$vKY1"));
    });
    this.updateDisabled$vKY1();
  }/*

  private*/ function updateDisabled()/*:void*/ {
    var newValue/*:Object*/ = this.userImageValueExpression$vKY1.getValue();
    this.setDisabled(!newValue || newValue.length === 0);
  }/*

  private*/ function askForDeletion()/*:void*/ {var this$=this;
    //noinspection JSUnusedGlobalSymbols
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message_title'),
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message'),
            null,
            {
              yes:mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_confirm'),
              no:mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_cancel')
            },
            function (btn/*:String*/)/*:void*/ {
              if (btn === "yes") {
                this$.deleteImageBlob$vKY1();
              }
            }
    );
  }/*

  private*/ function deleteImageBlob()/*:void*/ {
    var author/*:User*/ =AS3.as( this.userImageValueExpression$vKY1.getValue(),  com.coremedia.elastic.social.studio.model.User);

    if (author) {
      author.removeImage();
    }

    this.userImageValueExpression$vKY1.setValue(null);
    if (this.success$vKY1) {
      this.success$vKY1();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      userImageValueExpression$vKY1: null,
      success$vKY1: null,
      constructor: DeleteUserImageActionBase$,
      super$vKY1: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      updateDisabled$vKY1: updateDisabled,
      askForDeletion$vKY1: askForDeletion,
      deleteImageBlob$vKY1: deleteImageBlob,
      requires: [
        "Ext.Action",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.User"]
    };
});
