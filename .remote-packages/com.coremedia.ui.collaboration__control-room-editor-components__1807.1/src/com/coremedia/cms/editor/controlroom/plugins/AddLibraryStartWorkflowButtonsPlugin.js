Ext.define("com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin", function(AddLibraryStartWorkflowButtonsPlugin) {/*package com.coremedia.cms.editor.controlroom.plugins{
import com.coremedia.ui.plugins.AddItemsPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction;
import com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton;
import ext.toolbar.Separator;
public class AddLibraryStartWorkflowButtonsPlugin extends AddItemsPlugin{

    import com.coremedia.ui.data.ValueExpression;

    public static const SHOW_START_TRANSLATION_WORKFLOW_WINDOW_ITEM_ID:String = "showStartTranslationWorkflowWindow";

    public static const START_PULL_TRANSLATION_WORKFLOW_ITEM_ID:String = "startPullTranslationWorkflow";

    public static const SHOW_START_PUBLICATION_WORKFLOW_WINDOW_ITEM_ID:String = "showStartPublicationWorkflowWindow";

    public*/function AddLibraryStartWorkflowButtonsPlugin$(config/*:AddLibraryStartWorkflowButtonsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var defaults_$1/*:AddLibraryStartWorkflowButtonsPlugin*/ =AS3.cast(AddLibraryStartWorkflowButtonsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_IconButton_29_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_29_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddLibraryStartWorkflowButtonsPlugin.SHOW_START_PUBLICATION_WORKFLOW_WINDOW_ITEM_ID);
    var collab_ShowStartPublicationWorkflowWindowAction_31_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartPublicationWorkflowWindowAction_31_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_29_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction(collab_ShowStartPublicationWorkflowWindowAction_31_9_$1);
    var ui_IconButton_36_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_36_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddLibraryStartWorkflowButtonsPlugin.SHOW_START_TRANSLATION_WORKFLOW_WINDOW_ITEM_ID);
    var collab_ShowStartTranslationWorkflowWindowAction_38_9_$1/*:com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction,{});
    AS3.setBindable(collab_ShowStartTranslationWorkflowWindowAction_38_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    ui_IconButton_36_5_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction(collab_ShowStartTranslationWorkflowWindowAction_38_9_$1);
    var collab_StartPullTranslationButton_43_5_$1/*:com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton,{});
    collab_StartPullTranslationButton_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( AddLibraryStartWorkflowButtonsPlugin.START_PULL_TRANSLATION_WORKFLOW_ITEM_ID);
    AS3.setBindable(collab_StartPullTranslationButton_43_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var tbSeparator_46_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_46_5_$1.itemId = "workflowSeparator";
    AS3.setBindable(config_$1,"items" , [ui_IconButton_29_5_$1, ui_IconButton_36_5_$1, collab_StartPullTranslationButton_43_5_$1, tbSeparator_46_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zlSt(config_$1);
  }/*

    /**
     * The value expression to retrieve the selected items.
     * /
    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      constructor: AddLibraryStartWorkflowButtonsPlugin$,
      super$zlSt: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      config: {selectedItemsValueExpression: null},
      statics: {
        SHOW_START_TRANSLATION_WORKFLOW_WINDOW_ITEM_ID: "showStartTranslationWorkflowWindow",
        START_PULL_TRANSLATION_WORKFLOW_ITEM_ID: "startPullTranslationWorkflow",
        SHOW_START_PUBLICATION_WORKFLOW_WINDOW_ITEM_ID: "showStartPublicationWorkflowWindow"
      },
      requires: [
        "Ext.toolbar.Separator",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction",
        "com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton"
      ]
    };
});
