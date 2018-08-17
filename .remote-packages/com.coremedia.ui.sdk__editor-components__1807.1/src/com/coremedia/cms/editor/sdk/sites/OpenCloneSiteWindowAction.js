Ext.define("com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction", function(OpenCloneSiteWindowAction) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class OpenCloneSiteWindowAction extends OpenCloneSiteWindowActionBase{

    import mx.resources.ResourceManager;

    public*/function OpenCloneSiteWindowAction$(config/*:OpenCloneSiteWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase,{});
    var defaults_$1/*:OpenCloneSiteWindowAction*/ =AS3.cast(OpenCloneSiteWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_cloneSite_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_cloneSite_icon')));
    var editor_CloneSiteWindow_26_5_$1/*: com.coremedia.cms.editor.sdk.sites.CloneSiteWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.CloneSiteWindow,{});
    AS3.setBindable(editor_CloneSiteWindow_26_5_$1,"sitesService" , AS3.getBindable(config,"sitesService"));
    AS3.setBindable(config_$1,"dialog" , editor_CloneSiteWindow_26_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zDP4(config_$1);
  }/*

    /** the sites service to use * /
    [Bindable]
    public var sitesService:com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase",
      constructor: OpenCloneSiteWindowAction$,
      super$zDP4: function() {
        com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {sitesService: null},
      requires: [
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.sites.CloneSiteWindow"]
    };
});
