Ext.define("com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField", function(DateTimePropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.ExtendedTimeField;
import com.coremedia.ui.components.LocalComboBox;
import ext.view.BoundListView;
import ext.container.Container;
import ext.button.Button;
import ext.layout.container.HBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A complex property editor that binds to a date (calendar) property in a document form.
 Specify the propertyName property for selecting the property.
 The optional time zone picker can be disabled or hidden using the timeZoneHidden and
 timeZoneDisabled configuration options.
 The time zone IDs in the time zone picker can be localized by overriding the properties
 of the TimeZone resource bundle.
 Supported and default time zones are configured in the application.properties file.
 * /
public class DateTimePropertyField extends DateTimePropertyFieldBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.dateTimePropertyField";

    public*/function DateTimePropertyField$(config/*:DateTimePropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase,{});
    var defaults_$1/*:DateTimePropertyField*/ =AS3.cast(DateTimePropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.fieldGroup = true;
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.DATE_ITEM_ID).build()));
    config_$1.delegateLabelClickOnly = true;
    AS3.setBindable(config_$1,"isLoadedPropertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_PropertyFieldPlugin_88_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_88_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_SetPropertyLabelPlugin_89_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_89_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_89_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var ui_HorizontalSpacingPlugin_91_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_91_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    config_$1.plugins = [editor_PropertyFieldPlugin_88_5_$1, editor_SetPropertyLabelPlugin_89_5_$1, ui_HorizontalSpacingPlugin_91_5_$1];
    var ui_StatefulDateField_94_5_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_94_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.DATE_ITEM_ID);
    ui_StatefulDateField_94_5_$1.allowBlank = true;
    ui_StatefulDateField_94_5_$1.format =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.getDateFormat());
    ui_StatefulDateField_94_5_$1.formatText = "";
    ui_StatefulDateField_94_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    AS3.setBindable(ui_StatefulDateField_94_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_emptyDate')));
    AS3.setBindable(ui_StatefulDateField_94_5_$1,"minWidth" , 100.0);
    ui_StatefulDateField_94_5_$1.checkChangeBuffer = 100.0;
    var ui_BindPropertyPlugin_103_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_103_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_103_9_$1.componentEvent = "blur";
    ui_BindPropertyPlugin_103_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create('date', this.getModel(config));
    ui_BindPropertyPlugin_103_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    var editor_ShowIssuesPlugin_107_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_107_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_107_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_107_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_BindDisablePlugin_110_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_110_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_110_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_StatefulDateField_94_5_$1.plugins = [ui_BindPropertyPlugin_103_9_$1, editor_ShowIssuesPlugin_107_9_$1, editor_BindDisablePlugin_110_9_$1];
    var displayField_114_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_114_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeSeparator'));
    var ui_ExtendedTimeField_116_5_$1/*:com.coremedia.ui.components.ExtendedTimeField*/ =AS3.cast(com.coremedia.ui.components.ExtendedTimeField,{});
    ui_ExtendedTimeField_116_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.TIME_ITEM_ID);
    ui_ExtendedTimeField_116_5_$1.increment = 15.0;
    AS3.setBindable(ui_ExtendedTimeField_116_5_$1,"width" , 85);
    ui_ExtendedTimeField_116_5_$1.allowBlank = true;
    ui_ExtendedTimeField_116_5_$1.format =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.getTimeFormat());
    ui_ExtendedTimeField_116_5_$1.formatText = "";
    ui_ExtendedTimeField_116_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Time_property_field'));
    AS3.setBindable(ui_ExtendedTimeField_116_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_emptyTime')));
    ui_ExtendedTimeField_116_5_$1.validator =AS3.bind( this,"validateTime");
    ui_ExtendedTimeField_116_5_$1.checkChangeBuffer = 100.0;
    var editor_ShowIssuesPlugin_127_9_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_127_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_127_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    AS3.setBindable(editor_ShowIssuesPlugin_127_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var ui_BindPropertyPlugin_130_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_130_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_130_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create('time', this.getModel(config));
    ui_BindPropertyPlugin_130_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    var editor_BindDisablePlugin_133_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_133_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_133_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_ExtendedTimeField_116_5_$1.plugins = [editor_ShowIssuesPlugin_127_9_$1, ui_BindPropertyPlugin_130_9_$1, editor_BindDisablePlugin_133_9_$1];
    var ui_LocalComboBox_137_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_137_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.TIME_ZONE_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"width" , 110);
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"disabled" , AS3.getBindable(config,"timeZoneDisabled"));
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"hidden" , AS3.getBindable(config,"timeZoneHidden"));
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"store" , com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.getTimeZoneIdsWithLocalizedNames());
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"displayField" , "localizedName");
    ui_LocalComboBox_137_5_$1.valueField = "id";
    ui_LocalComboBox_137_5_$1.forceSelection = false;
    AS3.setBindable(ui_LocalComboBox_137_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_emptyTimeZone')));
    ui_LocalComboBox_137_5_$1.validator =AS3.bind( this,"validateTimeZone");
    ui_LocalComboBox_137_5_$1.checkChangeBuffer = 100.0;
    var ui_BindPropertyPlugin_150_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_150_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_150_9_$1.componentEvent = "select";
    ui_BindPropertyPlugin_150_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create('timeZone', this.getModel(config));
    ui_BindPropertyPlugin_150_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    var editor_ShowIssuesPlugin_154_9_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_154_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_154_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    AS3.setBindable(editor_ShowIssuesPlugin_154_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindDisablePlugin_157_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_157_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_157_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_LocalComboBox_137_5_$1.plugins = [ui_BindPropertyPlugin_150_9_$1, editor_ShowIssuesPlugin_154_9_$1, editor_BindDisablePlugin_157_9_$1];
    var boundList_161_9_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_161_9_$1,"minWidth" , com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.measureString());
    ui_LocalComboBox_137_5_$1.listConfig = boundList_161_9_$1;
    var container_164_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var button_166_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_166_9_$1.itemId = "reset";
    button_166_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_166_9_$1,"handler" ,AS3.bind( this,"resetAllModelValues"));
    AS3.setBindable(button_166_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateReset_text')));
    var editor_BindDisablePlugin_171_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_171_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_171_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    button_166_9_$1.plugins = [editor_BindDisablePlugin_171_13_$1];
    container_164_5_$1.items = [button_166_9_$1];
    config_$1.items = [ui_StatefulDateField_94_5_$1, displayField_114_5_$1, ui_ExtendedTimeField_116_5_$1, ui_LocalComboBox_137_5_$1, container_164_5_$1];
    var layout_HBox_179_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_179_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_179_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$f36t(config_$1);
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Optional model for the date, time and timezone. If not specified a local bean is created for it
     * /
    [Bindable]
    public var model:Bean;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /**
     Whether the time zone picker should be displayed or not. When the time zone picker is
     hidden, the date is shown and edited in the client's time zone but it is saved in a formerly
     selected time zone (if available) or the Studio's default time zone. Default value is false.
     * /
    [Bindable]
    public var timeZoneHidden:Boolean;


    /**
     Whether the time zone picker should be disabled or not. When the time zone picker is
     disabled, the value is shown but can not be changed. Default value is false.
     * /
    [Bindable]
    public var timeZoneDisabled:Boolean;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.dateTimePropertyField",
      constructor: DateTimePropertyField$,
      super$f36t: function() {
        com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        model: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        timeZoneHidden: false,
        timeZoneDisabled: false,
        hideIssues: false
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.ExtendedTimeField",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
