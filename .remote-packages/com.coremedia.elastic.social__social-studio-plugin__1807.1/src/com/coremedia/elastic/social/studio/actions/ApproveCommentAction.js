Ext.define("com.coremedia.elastic.social.studio.actions.ApproveCommentAction", function(ApproveCommentAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class ApproveCommentAction extends ApproveCommentActionBase{

    public*/function ApproveCommentAction$(config/*:ApproveCommentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase,{});
    var defaults_$1/*:ApproveCommentAction*/ =AS3.cast(ApproveCommentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$D6MV(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase",
      constructor: ApproveCommentAction$,
      super$D6MV: function() {
        com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.elastic.social.studio.actions.ApproveCommentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
