Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelStudioPlugin", function(SidePanelStudioPlugin) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer;
/**
 Registers side panel components for the studio core.
 If you want to register a component at the side panel manager yourself, use the SidePanelPlugin.
 @see SidePanelPlugin
 * /
public class SidePanelStudioPlugin extends StudioPlugin{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer;

    public*/function SidePanelStudioPlugin$(config/*:SidePanelStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:SidePanelStudioPlugin*/ =AS3.cast(SidePanelStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SidePanelPlugin_22_5_$1/*:com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin,{});
    var editor_CollectionViewContainer_24_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer,{});
    editor_CollectionViewContainer_24_9_$1["id"] = com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer.ID;
    editor_SidePanelPlugin_22_5_$1.components = [editor_CollectionViewContainer_24_9_$1];
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin(editor_SidePanelPlugin_22_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Zzrf(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      constructor: SidePanelStudioPlugin$,
      super$Zzrf: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelPlugin"
      ]
    };
});
