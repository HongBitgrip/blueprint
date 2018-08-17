Ext.define("com.coremedia.cms.editor.sdk.actions.PublishActionBase", function(PublishActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.desktop.ActionsToolbar;
import com.coremedia.cms.editor.sdk.editorContext;

[PublicApi]
public class PublishActionBase extends AbstractPublishAction {
  /**
   * An ext.Action that publishes the content indicated by the given expression.
   *
   * @param config the config object
   * /
  public*/ function PublishActionBase$(config/*:PublishAction = null*/) {if(arguments.length<=0)config=null;
    this.super$9S_B(AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'publish')), com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.OPERATION_PUBLISH, com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.PUBLISH_BUTTON_ITEM_ID);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var needsPublication/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.isCheckedOutByOther() || !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.PUBLISH)) {
        return true;
      }

      var lifecycleStatus/*:String*/ = content.getLifecycleStatus();
      if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.APPROVED) {
        needsPublication = true;
      } else if (lifecycleStatus !== com.coremedia.cap.content.LifecycleStatus.PUBLISHED) {
        return true;
      }
    }
    return !needsPublication;
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return !AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).isStateBasedPublicationEnabled() || com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.prototype.calculateHidden.call(this);
  }/*

  override protected*/ function doPublish(contents/*:Array*/, publicationService/*:PublicationService*/, callback/*:Function*/)/*:void*/ {
    publicationService.publishAll(contents, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction",
      metadata: {"": ["PublicApi"]},
      constructor: PublishActionBase$,
      super$9S_B: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractPublishAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      calculateHidden: calculateHidden,
      doPublish: doPublish,
      requires: [
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.AbstractPublishAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
