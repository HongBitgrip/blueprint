Ext.define("com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin", function(AddLibraryStartWorkflowMenuItemsPlugin) {/*package com.coremedia.cms.editor.controlroom.plugins{
import com.coremedia.ui.plugins.AddItemsPlugin;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
import ext.menu.Separator;
public class AddLibraryStartWorkflowMenuItemsPlugin extends AddItemsPlugin{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AddLibraryStartWorkflowMenuItemsPlugin$(config/*:AddLibraryStartWorkflowMenuItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var defaults_$1/*:AddLibraryStartWorkflowMenuItemsPlugin*/ =AS3.cast(AddLibraryStartWorkflowMenuItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var menuItem_23_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var collab_ShowStartPublicationWorkflowWindowAction_25_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_25_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_23_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_25_9_$1);
    var menuItem_30_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var collab_ShowStartTranslationWorkflowWindowAction_32_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_32_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_30_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_32_9_$1);
    var menuItem_37_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var collab_StartPullTranslationWorkflowAction_39_9_$1/*:com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,{});
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_39_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    menuItem_37_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction(collab_StartPullTranslationWorkflowAction_39_9_$1);
    var menuSeparator_43_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    AS3.setBindable(config_$1,"items" , [menuItem_23_5_$1, menuItem_30_5_$1, menuItem_37_5_$1, menuSeparator_43_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HCYN(config_$1);
  }/*

    /**
     * The value expression to retrieve the selected items.
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      constructor: AddLibraryStartWorkflowMenuItemsPlugin$,
      super$HCYN: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {selectedItemsValueExpression: null},
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Separator",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction"
      ]
    };
});
