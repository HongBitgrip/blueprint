Ext.define("com.coremedia.blueprint.base.components.timeline.SequencePanel", function(SequencePanel) {/*package com.coremedia.blueprint.base.components.timeline{
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.toolbar.Fill;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField;
import com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.form.Label;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.HBoxLayout;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.blueprint.base.components.timeline.Timeline')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class SequencePanel extends Panel{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.sequencePanel";

    public static const SEQUENCE_LINK_LIST_ITEM_ID:String = "sequenceLinkList";

    public*/function SequencePanel$(config/*:SequencePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var defaults_$1/*:SequencePanel*/ =AS3.cast(SequencePanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(SequencePanel.SEQUENCE_LINK_LIST_ITEM_ID).build());
    var ui_NestedRulesPlugin_65_5_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var editor_LinkListPropertyFieldToolbar_67_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar,{});
    var ui_AddItemsPlugin_69_13_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var tbFill_71_17_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var ui_IconButton_72_17_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_72_17_$1.itemId = "removeIntervalButton";
    ui_IconButton_72_17_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_HIGHLIGHT.getSkin());
    AS3.setBindable(ui_IconButton_72_17_$1,"handler" ,AS3.bind( this,"removePanel"));
    AS3.setBindable(ui_IconButton_72_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove_small')));
    AS3.setBindable(ui_IconButton_72_17_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_sequence_remove_tooltip')));
    AS3.setBindable(ui_IconButton_72_17_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_sequence_remove_tooltip'));
    var editor_BindDisablePlugin_79_21_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_79_21_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_79_21_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_IconButton_72_17_$1.plugins = [editor_BindDisablePlugin_79_21_$1];
    AS3.setBindable(ui_AddItemsPlugin_69_13_$1,"items" , [tbFill_71_17_$1, ui_IconButton_72_17_$1]);
    editor_LinkListPropertyFieldToolbar_67_9_$1.plugins = [ui_AddItemsPlugin_69_13_$1];
    ui_NestedRulesPlugin_65_5_$1.rules = [editor_LinkListPropertyFieldToolbar_67_9_$1];
    config_$1.plugins = [ui_NestedRulesPlugin_65_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var panel_91_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var ui_VerticalSpacingPlugin_93_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_93_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    panel_91_5_$1.plugins = [ui_VerticalSpacingPlugin_93_9_$1];
    var editor_LinkListPropertyField_96_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField,{});
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType") || 'CMTeasable'));
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"openCollectionViewHandler" , AS3.getBindable(config,"openCollectionViewHandler"));
    editor_LinkListPropertyField_96_9_$1.itemId =net.jangaroo.ext.Exml.asString( SequencePanel.SEQUENCE_LINK_LIST_ITEM_ID);
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"maxCardinality" , 1);
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"sequence").getLinkContentPropertyName()));
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"bindTo" , AS3.getBindable(config,"sequence").getLinkedContentExpression());
    editor_LinkListPropertyField_96_9_$1.hideLabel = true;
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"showThumbnails" , true);
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_SearchContentLinkSuggester_106_13_$1/*:com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester,{});
    AS3.setBindable(editor_SearchContentLinkSuggester_106_13_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_SearchContentLinkSuggester_106_13_$1,"linkTypeName" , "CMProductTeaser");
    AS3.setBindable(editor_LinkListPropertyField_96_9_$1,"linkSuggester" , new com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester(editor_SearchContentLinkSuggester_106_13_$1));
    var panel_110_9_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var ui_HorizontalSpacingPlugin_112_13_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_112_13_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    panel_110_9_$1.plugins = [ui_HorizontalSpacingPlugin_112_13_$1];
    var label_115_13_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_115_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_sequence_starttime')));
    var ui_StatefulNumberField_116_13_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    AS3.setBindable(ui_StatefulNumberField_116_13_$1,"width" , 50);
    AS3.setBindable(ui_StatefulNumberField_116_13_$1,"minValue" , 0.0);
    ui_StatefulNumberField_116_13_$1.allowBlank = false;
    ui_StatefulNumberField_116_13_$1.itemId = "startTimeNumberField";
    var ui_BindPropertyPlugin_121_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_121_17_$1.reverseTransformer = function(v/*:Number*/)/*:Number*/ {return v*1000;};
    ui_BindPropertyPlugin_121_17_$1.transformer = function(v/*:Number*/)/*:Number*/ {return v/1000;};
    ui_BindPropertyPlugin_121_17_$1.ifUndefined = "0";
    ui_BindPropertyPlugin_121_17_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_121_17_$1.bindTo = AS3.getBindable(config,"sequence").getStartTimeExpression();
    ui_BindPropertyPlugin_121_17_$1.bidirectional = true;
    var editor_BindDisablePlugin_127_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_127_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_127_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_StatefulNumberField_116_13_$1.plugins = [ui_BindPropertyPlugin_121_17_$1, editor_BindDisablePlugin_127_17_$1];
    var label_131_13_$1/*: ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_131_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_sequence_units')));
    panel_110_9_$1.items = [label_115_13_$1, ui_StatefulNumberField_116_13_$1, label_131_13_$1];
    var layout_HBox_134_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(panel_110_9_$1,"layout" , layout_HBox_134_13_$1);
    panel_91_5_$1.items = [editor_LinkListPropertyField_96_9_$1, panel_110_9_$1];
    var layout_VBox_139_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_139_9_$1,"align" , "stretch");
    AS3.setBindable(panel_91_5_$1,"layout" , layout_VBox_139_9_$1);
    config_$1.items = [panel_91_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$spKY(config_$1);
  }/*

    /**
     * The sequence model for this sequence panel.
     * /
    [Bindable]
    public var sequence:Sequence;

    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    protected*/ function removePanel()/*:void*/ {
      this.getTimelineEditor$spKY().removeSequence(AS3.getBindable(this,"sequence"));
    }/*

    private*/ function getTimelineEditor()/*:TimelineEditor*/ {
      return AS3.as( this.findParentByType(com.coremedia.blueprint.base.components.timeline.TimelineEditor.xtype),  com.coremedia.blueprint.base.components.timeline.TimelineEditor);
    }/*

    /** The link type of the linklist, defaults to CMTeasable * /
    [Bindable]
    public var linkType:String;


    /** The max cardinality of the linklist, defaults to 1 * /
    [Bindable]
    public var maxCardinality:Number;


    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** The function to call when the search is triggered. * /
    [Bindable]
    public var openCollectionViewHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      alias: "widget.com.coremedia.blueprint.base.components.config.sequencePanel",
      constructor: SequencePanel$,
      super$spKY: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      removePanel: removePanel,
      getTimelineEditor$spKY: getTimelineEditor,
      config: {
        sequence: null,
        bindTo: null,
        forceReadOnlyValueExpression: null,
        linkType: null,
        maxCardinality: NaN,
        propertyName: null,
        openCollectionViewHandler: null
      },
      statics: {SEQUENCE_LINK_LIST_ITEM_ID: "sequenceLinkList"},
      requires: [
        "Ext.form.Label",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.toolbar.Fill",
        "com.coremedia.blueprint.base.components.timeline.Timeline_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.timeline.TimelineEditor"]
    };
});
