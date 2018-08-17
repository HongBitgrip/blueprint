Ext.define("com.coremedia.cms.editor.sdk.publication.PublisherState", function(PublisherState) {/*package com.coremedia.cms.editor.sdk.publication {

import com.coremedia.cap.content.results.PublicationResult;
import com.coremedia.cms.editor.sdk.desktop.ActionsToolbar;
import com.coremedia.ui.data.applicationContext;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;

public class PublisherState {
  public static const CURRENT_OPERATION_BEAN_NAME:String = "publisherStateCurrentOperation";
  public static const ANIMATE_PROGRESS_ICON_BEAN_NAME:String = "publisherStateAnimateProgressIcon";

  private static*/ var unforgottenPublicationCount$static/*:Number*/ = 0;/*
  private static*/ var runningPublicationCount$static/*:Number*/ = 0;/*
  private static*/ var lastOperation$static/*:String*/ = undefined;/*

  private static*/ var currentNotification$static/*:PublicationSuccessNotification*/=null;/*
  private static*/ var publicationResultWindow$static/*:Component*/=null;/*

  private static*/ function updateShowProgress$static()/*:void*/ {
    com.coremedia.ui.data.applicationContext.set(PublisherState.CURRENT_OPERATION_BEAN_NAME, runningPublicationCount$static > 0 ? lastOperation$static : null);
  }/*

  private static*/ function showIcon$static(operation/*:String*/)/*:void*/ {
    runningPublicationCount$static++;
    lastOperation$static = operation;
    updateShowProgress$static();
  }/*

  private static*/ function hideIcon$static()/*:void*/ {
    runningPublicationCount$static--;
    updateShowProgress$static();
  }/*

  private static*/ function updateAnimateProgress$static()/*:void*/ {
    com.coremedia.ui.data.applicationContext.set(PublisherState.ANIMATE_PROGRESS_ICON_BEAN_NAME, unforgottenPublicationCount$static > 0);
  }/*

  private static*/ function startAnimation$static()/*:void*/ {
    unforgottenPublicationCount$static++;
    updateAnimateProgress$static();
  }/*

  private static*/ function stopAnimation$static()/*:void*/ {
    unforgottenPublicationCount$static--;
    updateAnimateProgress$static();
  }/*

  public static*/ function publicationStarted$static(publishOperation/*:String*/)/*:void*/ {
    startAnimation$static();
    showIcon$static(publishOperation);
  }/*

  /**
   * Opens the publication error dialog if the content could not be published
   * for some reason
   * @param contents
   * @param publicationResultItems
   * @param publishOperation
   * /
  private static*/ function showPublicationError$static(contents/*:Array*/, publicationResultItems/*:Array*/, publishOperation/*:String*/)/*:void*/ {
    //check if the window is already open, hide it then so it can be re-initialized.
    if (publicationResultWindow$static && publicationResultWindow$static.isVisible(true)) {
      publicationResultWindow$static.hide();
    }

    //rebuild and show publication window. The location will be the same
    //because of the internal static location bean.
    var publicationResultWindowCfg/*:PublicationResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationResultWindow,{});
    AS3.setBindable(publicationResultWindowCfg,"contents" , contents);
    AS3.setBindable(publicationResultWindowCfg,"publishOperation" , publishOperation);
    AS3.setBindable(publicationResultWindowCfg,"publicationResultItems" , publicationResultItems);
    publicationResultWindow$static = Ext.ComponentManager.create(publicationResultWindowCfg);

    publicationResultWindow$static.show();
  }/*

  public static*/ function publicationFinished$static(contents/*:Array*/, publicationResult/*:PublicationResult*/, publishOperation/*:String*/, targetButton/*:String = null*/)/*:void*/ {if(arguments.length<=3)targetButton=null;
    stopAnimation$static();

    // Close previous notification, if any.
    if (currentNotification$static) {
      currentNotification$static.goAway();
    }

    if (!publicationResult) {
      hideIcon$static();
      return;
    }

    if (!publicationResult.successful) {
      showPublicationError$static(contents, publicationResult.results, publishOperation);
      hideIcon$static();
    } else {
      showPublicationNotification$static(contents, publishOperation, targetButton);
    }
  }/*

  private static*/ function showPublicationNotification$static(contents/*:Array*/, publishOperation/*:String*/, targetButton/*:String*/)/*:void*/ {
    // Create a notification next to the finish toolbar.
    var publicationSuccessNotificationCfg/*:PublicationSuccessNotification*/ = AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationSuccessNotification,{});


    var targetID/*:String*/ = null;
    var toolbar/*:ActionsToolbar*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.ID),  com.coremedia.cms.editor.sdk.desktop.ActionsToolbar);

    if (toolbar) {
      targetID = toolbar.getId();
      if (targetButton) {
        targetID = toolbar.queryById(targetButton).getId();
      }
      else {
        var finishButton/*:Component*/ = toolbar.queryById(com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.FINISH_BUTTON_ITEM_ID);
        if (finishButton) {
          targetID = finishButton.getId();
        }
      }
    }

    AS3.setBindable(publicationSuccessNotificationCfg,"target" , targetID);

    AS3.setBindable(publicationSuccessNotificationCfg,"publishedItems" , contents);
    AS3.setBindable(publicationSuccessNotificationCfg,"publishOperation" , publishOperation);
    var newNotification/*:PublicationSuccessNotification*/ = new com.coremedia.cms.editor.sdk.publication.PublicationSuccessNotification(publicationSuccessNotificationCfg);

    // As soon as the notification disappears, make sure to get rid of the icon, too.
    newNotification.addListener("hiding", hideIcon$static);

    newNotification.show();

    // Remember the new notification so that it can be close when a new
    // notification arrives.
    currentNotification$static = newNotification;
  }/*
}*/function PublisherState$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PublisherState$,
      statics: {
        CURRENT_OPERATION_BEAN_NAME: "publisherStateCurrentOperation",
        ANIMATE_PROGRESS_ICON_BEAN_NAME: "publisherStateAnimateProgressIcon",
        publicationStarted: publicationStarted$static,
        publicationFinished: publicationFinished$static
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "com.coremedia.ui.data.applicationContext"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.publication.PublicationResultWindow",
        "com.coremedia.cms.editor.sdk.publication.PublicationSuccessNotification"
      ]
    };
});
