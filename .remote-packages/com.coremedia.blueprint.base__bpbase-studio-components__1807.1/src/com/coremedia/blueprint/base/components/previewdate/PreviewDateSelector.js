Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelector", function(PreviewDateSelector) {/*package com.coremedia.blueprint.base.components.previewdate{
import com.coremedia.blueprint.base.components.previewdate.*;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
public class PreviewDateSelector extends PreviewDateSelectorBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.beanFactory;

    import ext.form.Labelable;

    import ext.tip.ToolTip;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.previewDateSelector";

    public static const DATE_TIME_FIELD_ITEM_ID:String = "dateTimeFieldItemId";
    private var model:Bean;

    // called by generated constructor code
    private*/ function __initialize__(config/*:PreviewDateSelector*/)/*:void*/ {
      this.model$briH = com.coremedia.ui.data.beanFactory.createLocalBean();
    }/*

    public*/ function getModel()/*:Bean*/ {
      return this.model$briH;
    }/*

    public*/function PreviewDateSelector$(config/*:PreviewDateSelector = null*/){var this$=this;if(arguments.length<=0)config=null;this.__initialize__$briH(config);
    var config_$1/*: com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase*/ =AS3.cast(com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase,{});
    var defaults_$1/*:PreviewDateSelector*/ =AS3.cast(PreviewDateSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var fx_Object_51_5_$1/*:Object*/ =Object({});
    fx_Object_51_5_$1.model = this.model$briH;
    fx_Object_51_5_$1.previewPanel = AS3.getBindable(config,"previewPanel");
    config_$1["defaultType"] = fx_Object_51_5_$1['xtype'];
    delete fx_Object_51_5_$1['xtype'];
    delete fx_Object_51_5_$1['xclass'];
    config_$1.defaults = fx_Object_51_5_$1;
    var editor_DateTimePropertyField_55_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField,{});
    editor_DateTimePropertyField_55_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewDateSelector.DATE_TIME_FIELD_ITEM_ID);
    AS3.setBindable(editor_DateTimePropertyField_55_5_$1,"bindTo" , AS3.getBindable(config,"dummyValueExpression"));
    AS3.setBindable(editor_DateTimePropertyField_55_5_$1,"propertyName" , "previewDate");
    editor_DateTimePropertyField_55_5_$1.expectNormalization = false;
    AS3.setBindable(editor_DateTimePropertyField_55_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.previewdate.PreviewDate', 'DateTimeSelector_description')));
    editor_DateTimePropertyField_55_5_$1.labelAlign = "top";
    editor_DateTimePropertyField_55_5_$1.labelSeparator = "";
    AS3.setBindable(editor_DateTimePropertyField_55_5_$1,"validValueExpression" , AS3.getBindable(config,"dateTimePropertyFieldValidValueExpression"));
    var ui_HorizontalSpacingPlugin_68_9_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_68_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    editor_DateTimePropertyField_55_5_$1.plugins = [ui_HorizontalSpacingPlugin_68_9_$1];
    var object_71_9_$1/*:Object*/ = {};
    object_71_9_$1.afterrender = function(labelable/*:Labelable*/)/*:void*/ {
                var toolTipConfig/*:ToolTip*/ = AS3.cast(Ext.tip.ToolTip,{});
                var toolTip/*:ToolTip*/ = new Ext.tip.ToolTip(toolTipConfig);
                var toolTipText/*:String*/ = this$.resourceManager.getString('com.coremedia.blueprint.base.components.previewdate.PreviewDate', 'DateTimeSelector_label_tooltip');
                toolTip.setTarget(labelable.labelEl);
                toolTip.mon(toolTip, 'afterrender', function ()/*:void*/ {
                toolTip.update(toolTipText);});
              };
    AS3.setBindable(editor_DateTimePropertyField_55_5_$1,"listeners" , object_71_9_$1);
    config_$1.items = [editor_DateTimePropertyField_55_5_$1];
    var layout_HBox_83_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_83_5_$1,"align" , "start");
    AS3.setBindable(config_$1,"layout" , layout_HBox_83_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$briH(config_$1);
  }/*

    [Bindable]
    public var dateValueExpression:ValueExpression;

    [Bindable]
    public var dummyValueExpression:ValueExpression;

    [Bindable]
    public var dateTimePropertyFieldValidValueExpression:ValueExpression;

    [Bindable]
    public var previewPanel:com.coremedia.cms.editor.sdk.preview.PreviewPanel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.previewDateSelector",
      model$briH: null,
      __initialize__$briH: __initialize__,
      getModel: getModel,
      constructor: PreviewDateSelector$,
      super$briH: function() {
        com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dateValueExpression: null,
        dummyValueExpression: null,
        dateTimePropertyFieldValidValueExpression: null,
        previewPanel: null
      },
      statics: {DATE_TIME_FIELD_ITEM_ID: "dateTimeFieldItemId"},
      requires: [
        "Ext.layout.container.HBox",
        "Ext.tip.ToolTip",
        "com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase",
        "com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyField",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
