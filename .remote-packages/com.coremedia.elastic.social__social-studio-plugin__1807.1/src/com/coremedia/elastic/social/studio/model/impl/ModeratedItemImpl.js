Ext.define("com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl", function(ModeratedItemImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl;

[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/moderation/{type:[A-Za-z0-9-]+}/{id:[A-Za-z0-9-]+}")]
public class ModeratedItemImpl extends RemoteBeanImpl implements ModeratedItem {*/function static$0(){

  // static initializer
  {
    com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl
        .initRemoteErrorHandlerRegistry()
        .registerErrorHandler(remoteErrorHandler$static);
  }}/*

  public*/ function ModeratedItemImpl$(path/*:String*/) {
    this.super$KRYn(path);
  }/*

  public*/ function getLastComplaintDate()/*:Date*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
  }/*

  public*/ function getTarget()/*:Contribution*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET);
  }/*

  public*/ function getPriorityId()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.PRIORITY_ID);
  }/*

  public*/ function getTargetId()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET_ID);
  }/*

  private static*/ function remoteErrorHandler$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    var item/*:ModeratedItemImpl*/ =AS3.as( source,  ModeratedItemImpl);
    if (item && error.status === 404) {
      error.setHandled(true);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.ModeratedItem"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/moderation/{type:[A-Za-z0-9-]+}/{id:[A-Za-z0-9-]+}"
        ]
      ]},
      constructor: ModeratedItemImpl$,
      super$KRYn: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getLastComplaintDate: getLastComplaintDate,
      getTarget: getTarget,
      getPriorityId: getPriorityId,
      getTargetId: getTargetId,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames"]
    };
});
