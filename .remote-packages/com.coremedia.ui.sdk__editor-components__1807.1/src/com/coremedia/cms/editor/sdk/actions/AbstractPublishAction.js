Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractPublishAction", function(AbstractPublishAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cap.content.results.PublicationResult;
import com.coremedia.cms.editor.sdk.publication.PublisherState;

/**
 * An ext.Action that publishes or withdraws the content indicated
 * by the given expression.
 * /
[PublicApi]
public class AbstractPublishAction extends ContentAction {
  private var publishOperation:String;
  private var targetButton:String;

  /**
   * An identifier to indicate publish operations.
   * /
  public static const OPERATION_PUBLISH:String = "publish";

  /**
   * An identifier to indicate combined approve and publish operations.
   * /
  public static const OPERATION_APPROVE_PUBLISH:String = "approvePublish";

  /**
   * An identifier to indicate withdraw operations.
   * /
  public static const OPERATION_WITHDRAW:String = "withdraw";

  /**
   * Create an ext.Action that publishes or withdraws the content indicated
   * by the given expression.
   *
   * @param config the action configuration object
   * @param publishOperation the identifier for locally identifying the running publish operation;
   *   either OPERATION_PUBLISH or OPERATION_APPROVE_PUBLISH or OPERATION_WITHDRAW
   * @param targetButton the itemId of the button to display the notification at
   * /
  public*/ function AbstractPublishAction$(config/*:ContentAction*/, publishOperation/*:String*/, targetButton/*:String = null*/) {if(arguments.length<=2)targetButton=null;
    this.super$WdEO(AS3.cast(com.coremedia.cms.editor.sdk.actions.ContentAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, publishOperation, {handler:AS3.bind( this,"startPublication")})));

    this.publishOperation$WdEO = publishOperation;
    this.targetButton$WdEO = targetButton;
  }/*

  /**
   * @private
   * /
  public*/ function startPublication()/*:void*/ {var this$=this;
    var contents/*:Array*/ = this.getContents();
    if (contents && contents.length) {
      com.coremedia.cms.editor.sdk.publication.PublisherState.publicationStarted(this.publishOperation$WdEO);

      var publicationService/*:PublicationService*/ = AS3.cast(com.coremedia.cap.content.Content,contents[0]).getRepository().getPublicationService();
      this.doPublish(contents, publicationService, function (result/*:PublicationResult*/)/*:void*/ {
        this$.completed$WdEO(contents, result);
      });
    }
  }/*

  /**
   * Execute the publication, then invoke the callback with the publication result object.
   * If the publication is aborted by the user, pass null to the callback.
   *
   * @param contents
   * @param publicationService
   * @param callback the callback function
   * /
  protected*/ function doPublish(contents/*:Array*/, publicationService/*:PublicationService*/, callback/*:Function*/)/*:void*/ {
    throw new AS3.Error("please override in subclass");
  }/*

  private*/ function completed(contents/*:Array*/, result/*:PublicationResult*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.publication.PublisherState.publicationFinished(contents, result, this.publishOperation$WdEO, this.targetButton$WdEO);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      publishOperation$WdEO: null,
      targetButton$WdEO: null,
      constructor: AbstractPublishAction$,
      super$WdEO: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      startPublication: startPublication,
      doPublish: doPublish,
      completed$WdEO: completed,
      statics: {
        OPERATION_PUBLISH: "publish",
        OPERATION_APPROVE_PUBLISH: "approvePublish",
        OPERATION_WITHDRAW: "withdraw"
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.publication.PublisherState"
      ]
    };
});
