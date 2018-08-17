Ext.define("com.coremedia.cms.editor.controlroom.workflow.AddInboxDetailPanelPlugin", function(AddInboxDetailPanelPlugin) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.plugins.AddLazyItemsPlugin;
public class AddInboxDetailPanelPlugin extends NestedRulesPlugin{

    import ext.Ext;

    public*/function AddInboxDetailPanelPlugin$(config/*:AddInboxDetailPanelPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var defaults_$1/*:AddInboxDetailPanelPlugin*/ =AS3.cast(AddInboxDetailPanelPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var container_22_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_22_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.SWITCHING_CONTAINER_ITEM_ID);
    var ui_AddLazyItemsPlugin_24_9_$1/*:com.coremedia.ui.plugins.AddLazyItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddLazyItemsPlugin,{});
    AS3.setBindable(ui_AddLazyItemsPlugin_24_9_$1,"items" , AS3.getBindable(config,"inboxPanel") ? [Ext.apply({
                                           'itemId': AS3.getBindable(config,"processDefinitionName"),
                                           'processDefinitionName': AS3.getBindable(config,"processDefinitionName")
                                         }, AS3.getBindable(config,"inboxPanel"))] : []);
    container_22_5_$1.plugins = [ui_AddLazyItemsPlugin_24_9_$1];
    config_$1.rules = [container_22_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mvQE(config_$1);
  }/*

    [Bindable]
    public var processDefinitionName:String;


    [Bindable]
    public var inboxPanel:com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.NestedRulesPlugin",
      constructor: AddInboxDetailPanelPlugin$,
      super$mvQE: function() {
        com.coremedia.ui.plugins.NestedRulesPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {
        processDefinitionName: null,
        inboxPanel: null
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.ui.plugins.AddLazyItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper"]
    };
});
