Ext.define("com.coremedia.cms.editor.sdk.sites.TargetSitesTree", function(TargetSitesTree) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindTreePlugin;
public class TargetSitesTree extends TargetSitesTreeBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.targetSitesTree";

    public*/function TargetSitesTree$(config/*:TargetSitesTree = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase,{});
    var defaults_$1/*:TargetSitesTree*/ =AS3.cast(TargetSitesTree,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.useArrows = true;
    config_$1.rootVisible = false;
    var ui_BindTreePlugin_19_5_$1/*:com.coremedia.ui.plugins.BindTreePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreePlugin,{});
    AS3.setBindable(ui_BindTreePlugin_19_5_$1,"treeModel" , this.getSitesTreeModel(config));
    config_$1.plugins = [ui_BindTreePlugin_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Pp7z(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.targetSitesTree",
      constructor: TargetSitesTree$,
      super$Pp7z: function() {
        com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase",
        "com.coremedia.ui.plugins.BindTreePlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
