Ext.define("com.coremedia.cms.editor.sdk.premular.fields.DatePropertyField", function(DatePropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.StatefulDateField;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A date field that binds to a date property being edited inside
 of a document form. Specify the propertyName property for selecting
 the correct date property.
 * /
public class DatePropertyField extends StatefulDateField{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.cap.content.impl.ContentRepositoryImpl;
    import com.coremedia.ui.data.Calendar;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.datePropertyField";

    public*/function DatePropertyField$(config/*:DatePropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    var defaults_$1/*:DatePropertyField*/ =AS3.cast(DatePropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    config_$1.anchor = "98%";
    config_$1.allowBlank = true;
    config_$1.formatText = "";
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    config_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DatePropertyField_dateFormat') || 'm/d/Y H:i');
    config_$1.checkChangeBuffer = 100.0;
    var editor_SetPropertyLabelPlugin_69_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_69_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_69_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var editor_SetPropertyEmptyTextPlugin_71_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_71_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_71_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindDisablePlugin_73_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_73_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_73_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_75_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_75_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_76_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_76_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_76_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_76_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindPropertyPlugin_79_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_79_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_79_5_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_79_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_79_5_$1.ifUndefined = null;
    ui_BindPropertyPlugin_79_5_$1.transformer = function(value/*:Object*/)/*:Date*/ {
                if(AS3.is(value,  com.coremedia.ui.data.Calendar)) {
                  return value.getDate();
                }
                return AS3.as( value,  Date);
              };
    ui_BindPropertyPlugin_79_5_$1.reverseTransformer = function(value/*:Object*/)/*:**/ {
                if (!config.writeCalendar) {
                  return value;
                }
                var date/*:Date*/ =AS3.as( value,  Date);
                if(date) {
                  return new com.coremedia.ui.data.Calendar({
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    hour: 0,
                    minute: 0,
                    second: 0,
                    offset: -date.getTimezoneOffset() * (60*1000), // copied from DateTimePropertyFieldBase#getModelCalendar()
                    timeZone: (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getDefaultTimeZone(),
                    normalized: false});
                }
                return AS3.as( value,  com.coremedia.ui.data.Calendar);
              };
    config_$1.plugins = [editor_SetPropertyLabelPlugin_69_5_$1, editor_SetPropertyEmptyTextPlugin_71_5_$1, editor_BindDisablePlugin_73_5_$1, editor_PropertyFieldPlugin_75_5_$1, editor_ShowIssuesPlugin_76_5_$1, ui_BindPropertyPlugin_79_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$y2S4(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * If set, convert the value to a Calendar object before writing to the bindTo expression. Defaults to false.
     * /
    public var writeCalendar:Boolean;

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


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulDateField",
      metadata: {disableStrictConsistency: ["Config"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.datePropertyField",
      constructor: DatePropertyField$,
      super$y2S4: function() {
        com.coremedia.ui.components.StatefulDateField.prototype.constructor.apply(this, arguments);
      },
      writeCalendar: false,
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
