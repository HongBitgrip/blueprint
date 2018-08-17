Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPlugin", function(AddTranslationWorkflowPlugin) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.Component;
import com.coremedia.ui.plugins.AddLazyItemsPlugin;
[PublicApi]
/**
 <p>
 A Studio plugin that registers panels for displaying translation processes and tasks.
 In addition to configuring the view in the control room, the process is included in
 the list of available translation processes for starting a translation.
 </p>
 <p>
 The process must define a string variable <code>subject</code>, which is shown in
 compact representations of the process and its tasks.
 </p>
 * /
public class AddTranslationWorkflowPlugin extends AddTranslationWorkflowPluginBase{

    import ext.Ext;

    public*/function AddTranslationWorkflowPlugin$(config/*:AddTranslationWorkflowPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase,{});
    var defaults_$1/*:AddTranslationWorkflowPlugin*/ =AS3.cast(AddTranslationWorkflowPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"processCategory" , "Translation");
    var collab_StartTranslationWorkflowWindow_38_5_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow,{});
    var ui_NestedRulesPlugin_40_9_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var component_42_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_42_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow.SWITCHING_CONTAINER_ITEM_ID);
    var ui_AddLazyItemsPlugin_44_17_$1/*:com.coremedia.ui.plugins.AddLazyItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddLazyItemsPlugin,{});
    AS3.setBindable(ui_AddLazyItemsPlugin_44_17_$1,"items" , [Ext.apply({'itemId': AS3.getBindable(config,"processDefinitionName")}, AS3.getBindable(config,"startPanel"))]);
    component_42_13_$1.plugins = [ui_AddLazyItemsPlugin_44_17_$1];
    ui_NestedRulesPlugin_40_9_$1.rules = [component_42_13_$1];
    collab_StartTranslationWorkflowWindow_38_5_$1.plugins = [ui_NestedRulesPlugin_40_9_$1];
    AS3.setBindable(config_$1,"rules" , [collab_StartTranslationWorkflowWindow_38_5_$1]);
    config_$1["rules$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cu2I(config_$1);
  }/*

    /**
     the panel used for editing process variables while the indicated process
     is being created
     * /
    [Bindable]
    public var startPanel:com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddTranslationWorkflowPlugin$,
      super$cu2I: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {startPanel: null},
      requires: [
        "Ext",
        "Ext.Component",
        "com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase",
        "com.coremedia.ui.plugins.AddLazyItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow"]
    };
});
