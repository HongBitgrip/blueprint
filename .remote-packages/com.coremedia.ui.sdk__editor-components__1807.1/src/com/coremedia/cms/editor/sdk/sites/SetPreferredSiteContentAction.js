Ext.define("com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction", function(SetPreferredSiteContentAction) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that sets the preferred site to the
 site having the selected content as its base folder.

 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class SetPreferredSiteContentAction extends SetPreferredSiteContentActionBase{

    public*/function SetPreferredSiteContentAction$(config/*:SetPreferredSiteContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase,{});
    var defaults_$1/*:SetPreferredSiteContentAction*/ =AS3.cast(SetPreferredSiteContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mq5D(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: SetPreferredSiteContentAction$,
      super$mq5D: function() {
        com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
