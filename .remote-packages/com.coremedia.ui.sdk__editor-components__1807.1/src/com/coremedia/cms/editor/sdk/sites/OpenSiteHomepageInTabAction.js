Ext.define("com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction", function(OpenSiteHomepageInTabAction) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
/**

 A <code>contentAction</code> that opens the Homepage of the
 selected Site in a new tab.

 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class OpenSiteHomepageInTabAction extends OpenSiteHomepageInTabActionBase{

    public*/function OpenSiteHomepageInTabAction$(config/*:OpenSiteHomepageInTabAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase,{});
    var defaults_$1/*:OpenSiteHomepageInTabAction*/ =AS3.cast(OpenSiteHomepageInTabAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fIGB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase",
      constructor: OpenSiteHomepageInTabAction$,
      super$fIGB: function() {
        com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
