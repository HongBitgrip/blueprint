Ext.define("com.coremedia.blueprint.base.components.timeline.TimelineEditor", function(TimelineEditor) {/*package com.coremedia.blueprint.base.components.timeline{
import com.coremedia.blueprint.base.components.timeline.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.components.DraggableItemsContainer;
import ext.layout.container.VBoxLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.blueprint.base.components.timeline.Timeline')]
public class TimelineEditor extends TimelineEditorBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.timelineEditor";

    public static const DRAGGABLE_ITEMS_CT_ITEM_ID:String = "draggableItemsContainer";

    public*/function TimelineEditor$(config/*:TimelineEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.timeline.TimelineEditorBase*/ =AS3.cast(com.coremedia.blueprint.base.components.timeline.TimelineEditorBase,{});
    var defaults_$1/*:TimelineEditor*/ =AS3.cast(TimelineEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "timelineEditor";
    AS3.setBindable(config_$1,"searchType" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline',
      'timeline_editor_default_linktype')));
    AS3.setBindable(config_$1,"linkType" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline',
      'timeline_editor_default_linktype')));
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_title')));
    config_$1.labelAlign = "top";
    config_$1.labelSeparator = "";
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(TimelineEditor.DRAGGABLE_ITEMS_CT_ITEM_ID).build()));
    config_$1.msgTarget = "qtip";
    var editor_SetPropertyLabelPlugin_40_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_40_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyLabelPlugin_40_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    var editor_PropertyFieldPlugin_42_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_42_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    var editor_ShowIssuesPlugin_43_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_43_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_43_5_$1,"ifUndefined" , "");
    AS3.setBindable(editor_ShowIssuesPlugin_43_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    AS3.setBindable(editor_ShowIssuesPlugin_43_5_$1,"hideIssues" , false);
    config_$1.plugins = [editor_SetPropertyLabelPlugin_40_5_$1, editor_PropertyFieldPlugin_42_5_$1, editor_ShowIssuesPlugin_43_5_$1];
    var ui_DraggableItemsContainer_49_5_$1/*:com.coremedia.ui.components.DraggableItemsContainer*/ =AS3.cast(com.coremedia.ui.components.DraggableItemsContainer,{});
    ui_DraggableItemsContainer_49_5_$1.itemId =net.jangaroo.ext.Exml.asString( TimelineEditor.DRAGGABLE_ITEMS_CT_ITEM_ID);
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"itemsVE" , this.getSequencesVE(AS3.getBindable(config,"bindTo"), config.propertyName));
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"itemsConfigBeanParameterName" , "sequence");
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"itemsGetKey" , com.coremedia.blueprint.base.components.timeline.TimelineEditorBase.getTemplateKey);
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"dropHandler" ,AS3.bind( this,"dropHandler"));
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"enabledVE" , this.getReorderEnabledVE(config));
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"margin" , "0 0 0 -12");
    var local_SequencePanel_57_9_$1/*: com.coremedia.blueprint.base.components.timeline.SequencePanel*/ =AS3.cast(com.coremedia.blueprint.base.components.timeline.SequencePanel,{});
    local_SequencePanel_57_9_$1.flex = 1.0;
    AS3.setBindable(local_SequencePanel_57_9_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(local_SequencePanel_57_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_SequencePanel_57_9_$1,"openCollectionViewHandler" ,AS3.bind( this,"openTimelineSearch"));
    AS3.setBindable(local_SequencePanel_57_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_SequencePanel_57_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"innerCtTemplate" , local_SequencePanel_57_9_$1);
    var layout_VBox_65_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_65_9_$1,"align" , "stretch");
    AS3.setBindable(ui_DraggableItemsContainer_49_5_$1,"layout" , layout_VBox_65_9_$1);
    var displayField_68_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_68_5_$1,"value" , this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_emptyText'));
    var ui_BindVisibilityPlugin_71_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_71_9_$1.bindTo = com.coremedia.blueprint.base.components.timeline.TimelineEditorBase.getShowEmptyTextExpression(AS3.getBindable(config,"bindTo"), config.propertyName);
    displayField_68_5_$1.plugins = [ui_BindVisibilityPlugin_71_9_$1];
    var toolbar_75_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_75_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER.getSkin());
    var layout_HBox_77_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_77_9_$1,"pack" , "end");
    AS3.setBindable(toolbar_75_5_$1,"layout" , layout_HBox_77_9_$1);
    var button_80_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_80_9_$1,"scale" , "medium");
    button_80_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(button_80_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_add_sequence')));
    button_80_9_$1.itemId = "addSequenceButton";
    AS3.setBindable(button_80_9_$1,"handler" ,AS3.bind( this,"addSequence"));
    var editor_BindDisablePlugin_86_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_86_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_86_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    button_80_9_$1.plugins = [editor_BindDisablePlugin_86_13_$1];
    toolbar_75_5_$1.items = [button_80_9_$1];
    config_$1.items = [ui_DraggableItemsContainer_49_5_$1, displayField_68_5_$1, toolbar_75_5_$1];
    var layout_Anchor_94_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_94_5_$1.anchor = "100%";
    AS3.setBindable(config_$1,"layout" , layout_Anchor_94_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7rQF(config_$1);
  }/*

    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.timeline.TimelineEditorBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.timelineEditor",
      constructor: TimelineEditor$,
      super$7rQF: function() {
        com.coremedia.blueprint.base.components.timeline.TimelineEditorBase.prototype.constructor.apply(this, arguments);
      },
      config: {hideIssues: false},
      statics: {DRAGGABLE_ITEMS_CT_ITEM_ID: "draggableItemsContainer"},
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.blueprint.base.components.timeline.TimelineEditorBase",
        "com.coremedia.blueprint.base.components.timeline.Timeline_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.ui.components.DraggableItemsContainer",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.timeline.SequencePanel"]
    };
});
