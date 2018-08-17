Ext.define("com.coremedia.cms.editor.sdk.validation.IssuesToolTip", function(IssuesToolTip) {/*package com.coremedia.cms.editor.sdk.validation{
import com.coremedia.cms.editor.sdk.validation.*;
import net.jangaroo.ext.Exml;
/**
 The tooltip that is used in property fields to show the validation issues.
 * /
public class IssuesToolTip extends IssuesToolTipBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.issuesToolTip";

    public*/function IssuesToolTip$(config/*:IssuesToolTip = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase,{});
    var defaults_$1/*:IssuesToolTip*/ =AS3.cast(IssuesToolTip,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.anchorToTarget = false;
    config_$1.hideDelay = 600.0;
    config_$1.autoHide = true;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8mXk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.issuesToolTip",
      constructor: IssuesToolTip$,
      super$8mXk: function() {
        com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.validation.IssuesToolTipBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
