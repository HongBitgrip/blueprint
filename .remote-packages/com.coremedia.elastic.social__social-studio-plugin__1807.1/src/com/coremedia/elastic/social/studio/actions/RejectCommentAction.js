Ext.define("com.coremedia.elastic.social.studio.actions.RejectCommentAction", function(RejectCommentAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class RejectCommentAction extends RejectCommentActionBase{

    public*/function RejectCommentAction$(config/*:RejectCommentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.RejectCommentActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.RejectCommentActionBase,{});
    var defaults_$1/*:RejectCommentAction*/ =AS3.cast(RejectCommentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2QA$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.RejectCommentActionBase",
      constructor: RejectCommentAction$,
      super$2QA$: function() {
        com.coremedia.elastic.social.studio.actions.RejectCommentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.elastic.social.studio.actions.RejectCommentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
