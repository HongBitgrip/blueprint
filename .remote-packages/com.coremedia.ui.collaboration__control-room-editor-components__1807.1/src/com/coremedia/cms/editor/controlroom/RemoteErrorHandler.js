Ext.define("com.coremedia.cms.editor.controlroom.RemoteErrorHandler", function(RemoteErrorHandler) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.error.RemoteError;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors')]
public class RemoteErrorHandler {

  public static*/ function handleError$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    if (!error.isHandled()) {
      switch (error.errorCode) {
        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_CREATE_CAP_LIST :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotCreateContentSet_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotCreateContentSet_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_CREATE_CAP_LIST_DUPLICATE_ID :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotCreateContentSetDuplicateId_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotCreateContentSetDuplicateId_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_RENAME_CAP_LIST :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotRenameContentSet_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotRenameContentSet_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_CHANGE_CAP_LIST_ELEMENTS :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotEditContentSet_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotEditContentSet_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_DESTROY_CAP_LIST :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotDeleteContentSet_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotDeleteContentSet_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_READ_CAP_LIST :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotOpenContentSet_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotOpenContentSet_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_READ_CAP_LISTS :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotOpenContentSets_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotOpenContentSets_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_READ_CAP_LIST_TIMESTAMP :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotReadContentSetTimestamp_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotReadContentSetTimestamp_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_READ_CAP_LIST_REFERRERS :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotReadContentSetReferrers_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotReadContentSetReferrers_message'));
          doHandleError$static(error, source);
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_ACCESS_CAP_LIST_NOT_AUTHORIZED :
          // do not show an error popup
          // do not handle this error
          break;

        case com.coremedia.cms.editor.controlroom.ContentSetErrorCodes.CANNOT_SET_CAP_LIST_PERMISSIONS :
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotSetContentSetPermissions_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', 'contentSet_cannotSetContentSetPermissions_message'));
          doHandleError$static(error, source);
          break;
      }
    }
  }/*

  private static*/ function doHandleError$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    error.setHandled(true);
    AS3.trace('[DEBUG]', 'Handled control room error ' + error + ' raised by ' + source);
  }/*

  private static*/ function showError$static(title/*:String*/, message/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(title, message, callback);
  }/*
}*/function RemoteErrorHandler$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RemoteErrorHandler$,
      statics: {handleError: handleError$static},
      requires: [
        "AS3.trace",
        "com.coremedia.cms.editor.controlroom.actions.ContentSetErrors_properties",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.ContentSetErrorCodes"]
    };
});
