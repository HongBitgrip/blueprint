Ext.define("com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase", function(CreateSpinnerActionBase) {/*package com.coremedia.blueprint.base.components.pictures.spinner {

import com.coremedia.blueprint.base.components.pictures.CreateFromPicturesAction;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResult;
import com.coremedia.cms.editor.sdk.util.ContentCreationUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.MessageBox;
import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * Creates a new spinner.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.pictures.spinner.Spinner')]
public class CreateSpinnerActionBase extends CreateFromPicturesAction {

  private static const*/var SPINNER_CONTENT_TYPE$static/*:ContentType*/;/* =*/function SPINNER_CONTENT_TYPE$static_(){SPINNER_CONTENT_TYPE$static=( com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'spinner_action_target_content_type')));};/*

  public*/ function CreateSpinnerActionBase$(config/*:CreateSpinnerAction = null*/) {if(arguments.length<=0)config=null;
    this.super$Zx92(config);
  }/*

  /**
   * Create a new spinner.
   * /
  override protected*/ function executePicturesAction(selectedName/*:String*/, selectedFolder/*:String*/, selectedPictures/*:Array*/,
                                                    callback/*:Function*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.ContentCreationUtil.createRequiredSubfolders(selectedFolder, function (result/*:FolderCreationResult*/)/*:void*/ {
      if (result.success) {
        result.baseFolder.getChild(selectedName, function (doc/*:Content*/, path/*:String*/)/*:void*/ {
          if (doc) {
            var msg/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_failure_exists'), selectedName);
            Ext.MessageBox.alert(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_failure_text'), msg);
          }
          else {/*
            const*/var properties/*:Object*/ = {};
            properties[mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'spinner_action_target_property')] = selectedPictures;
            properties[mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'spinner_action_target_title_property')] = selectedName;
            properties[mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'spinner_action_target_title_teaser_property')] = selectedName;

            com.coremedia.cms.editor.sdk.util.ContentCreationUtil.createContent(result.baseFolder, true, false, selectedName, SPINNER_CONTENT_TYPE$static, callback, null, properties);
          }
        });
      }
      else {
        if (result.remoteError) {
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_failure_text'),
                          mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_failure_msg') + " " + result.remoteError.errorName);
        }
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesAction",
      constructor: CreateSpinnerActionBase$,
      super$Zx92: function() {
        com.coremedia.blueprint.base.components.pictures.CreateFromPicturesAction.prototype.constructor.apply(this, arguments);
      },
      executePicturesAction: executePicturesAction,
      statics: {
        SPINNER_CONTENT_TYPE: undefined,
        __initStatics__: function() {
          SPINNER_CONTENT_TYPE$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.blueprint.base.components.pictures.CreateFromPicturesAction",
        "com.coremedia.blueprint.base.components.pictures.spinner.Spinner_properties",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.util.ContentCreationUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
