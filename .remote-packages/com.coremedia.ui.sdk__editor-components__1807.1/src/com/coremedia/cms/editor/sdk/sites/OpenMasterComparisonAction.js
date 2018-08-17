Ext.define("com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction", function(OpenMasterComparisonAction) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that opens the configured content in a tab.
 If the content is a derived content whose master is more up-to-date,
 open the content in the master comparision view.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class OpenMasterComparisonAction extends OpenMasterComparisonActionBase{

    public*/function OpenMasterComparisonAction$(config/*:OpenMasterComparisonAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase,{});
    var defaults_$1/*:OpenMasterComparisonAction*/ =AS3.cast(OpenMasterComparisonAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$D4t7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenMasterComparisonAction$,
      super$D4t7: function() {
        com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
