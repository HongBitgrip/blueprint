Ext.define("com.coremedia.personalization.ui.plugin.DateTimeContainer", function(DateTimeContainer) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.components.StatefulTimeField;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
public class DateTimeContainer extends DateTimeContainerBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import ext.DateUtil;

    public static const xtype:String = "com.coremedia.personalization.ui.config.dateTimeContainer";

    public*/function DateTimeContainer$(config/*:DateTimeContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.plugin.DateTimeContainerBase*/ =AS3.cast(com.coremedia.personalization.ui.plugin.DateTimeContainerBase,{});
    var defaults_$1/*:DateTimeContainer*/ =AS3.cast(DateTimeContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_StatefulDateField_34_5_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_34_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.plugin.DateTimeContainerBase.dateFieldItemId);
    ui_StatefulDateField_34_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    ui_StatefulDateField_34_5_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_format'));
    ui_StatefulDateField_34_5_$1.validator =AS3.bind( this,"validateDate");
    ui_StatefulDateField_34_5_$1.allowBlank = true;
    AS3.setBindable(ui_StatefulDateField_34_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_emptyDate')));
    var editor_ShowIssuesPlugin_41_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_41_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_41_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    ui_StatefulDateField_34_5_$1.plugins = [editor_ShowIssuesPlugin_41_9_$1];
    var ui_StatefulTimeField_46_5_$1/*:com.coremedia.ui.components.StatefulTimeField*/ =AS3.cast(com.coremedia.ui.components.StatefulTimeField,{});
    ui_StatefulTimeField_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.personalization.ui.plugin.DateTimeContainerBase.timeFieldItemId);
    AS3.setBindable(ui_StatefulTimeField_46_5_$1,"minValue" , Ext.Date.parse('0:00 AM', 'g:i A'));
    AS3.setBindable(ui_StatefulTimeField_46_5_$1,"maxValue" , Ext.Date.parse('11:59 PM', 'g:i A'));
    ui_StatefulTimeField_46_5_$1.increment = 30.0;
    ui_StatefulTimeField_46_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Time_property_field'));
    ui_StatefulTimeField_46_5_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_time_format'));
    ui_StatefulTimeField_46_5_$1.validator =AS3.bind( this,"validateTime");
    ui_StatefulTimeField_46_5_$1.enableKeyEvents = true;
    ui_StatefulTimeField_46_5_$1.allowBlank = true;
    AS3.setBindable(ui_StatefulTimeField_46_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_emptyTime')));
    var editor_ShowIssuesPlugin_57_9_$1/*: com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_57_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_57_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    ui_StatefulTimeField_46_5_$1.plugins = [editor_ShowIssuesPlugin_57_9_$1];
    config_$1.items = [ui_StatefulDateField_34_5_$1, ui_StatefulTimeField_46_5_$1];
    var ui_HorizontalSpacingPlugin_63_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_63_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_HorizontalSpacingPlugin_63_5_$1];
    var layout_HBox_66_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_66_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dhJb(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    /**
     the Context of the property
     * /
    [Bindable]
    public var propertyContext:String;


    /**
     the Name of the property
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.DateTimeContainerBase",
      alias: "widget.com.coremedia.personalization.ui.config.dateTimeContainer",
      constructor: DateTimeContainer$,
      super$dhJb: function() {
        com.coremedia.personalization.ui.plugin.DateTimeContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyContext: null,
        propertyName: null
      },
      requires: [
        "Ext.Date",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.personalization.ui.plugin.DateTimeContainerBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.components.StatefulTimeField",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
