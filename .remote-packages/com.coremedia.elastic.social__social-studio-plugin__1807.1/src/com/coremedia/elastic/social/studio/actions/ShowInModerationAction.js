Ext.define("com.coremedia.elastic.social.studio.actions.ShowInModerationAction", function(ShowInModerationAction) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
public class ShowInModerationAction extends ShowInModerationActionBase{

    public*/function ShowInModerationAction$(config/*:ShowInModerationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase,{});
    var defaults_$1/*:ShowInModerationAction*/ =AS3.cast(ShowInModerationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$993L(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase",
      constructor: ShowInModerationAction$,
      super$993L: function() {
        com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.elastic.social.studio.actions.ShowInModerationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
