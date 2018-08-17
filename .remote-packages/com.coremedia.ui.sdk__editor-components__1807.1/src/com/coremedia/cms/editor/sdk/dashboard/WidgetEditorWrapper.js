Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapper", function(WidgetEditorWrapper) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.view.BoundListView;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.toolbar.Toolbar;
import ext.layout.container.HBoxLayout;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class WidgetEditorWrapper extends WidgetEditorWrapperBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.widgetEditorWrapper";

    /**
     * The id of the widget type selector.
     * /
    public static const WIDGET_TYPE_SELECTOR:String = "widgetTypeSelector";

    /**
     * The id of the widget remove button.
     * /
    public static const REMOVE_BUTTON:String = "removeButton";

    /**
     * The id of the widget save button.
     * /
    public static const SAVE_BUTTON:String = "saveButton";

    public*/function WidgetEditorWrapper$(config/*:WidgetEditorWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase,{});
    var defaults_$1/*:WidgetEditorWrapper*/ =AS3.cast(WidgetEditorWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "fit");
    AS3.setBindable(config_$1,"height" , 1);
    var container_43_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( this.EDITOR_WRAPPER_MAIN_BODY);
    AS3.setBindable(container_43_5_$1,"scrollable" , true);
    var container_46_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_46_9_$1,"region" , "north");
    var ui_LocalComboBox_48_13_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    AS3.setBindable(ui_LocalComboBox_48_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'WidgetType_text')));
    ui_LocalComboBox_48_13_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetEditorWrapper.WIDGET_TYPE_SELECTOR);
    AS3.setBindable(ui_LocalComboBox_48_13_$1,"encodeItems" , true);
    ui_LocalComboBox_48_13_$1.anchor = "100%";
    AS3.setBindable(ui_LocalComboBox_48_13_$1,"store" , com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase.getWidgetTypesStore());
    var ui_BindPropertyPlugin_55_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_55_17_$1.bidirectional = true;
    var ui_ValueExpression_57_21_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_57_21_$1,"context" , AS3.getBindable(config,"model"));
    AS3.setBindable(ui_ValueExpression_57_21_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY));
    ui_BindPropertyPlugin_55_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_57_21_$1);
    var ui_BindVisibilityPlugin_65_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    var ui_ValueExpression_67_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_67_21_$1,"context" , AS3.getBindable(config,"model"));
    AS3.setBindable(ui_ValueExpression_67_21_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.MANUALLY_CREATABLE_PROPERTY));
    ui_BindVisibilityPlugin_65_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_67_21_$1);
    ui_LocalComboBox_48_13_$1.plugins = [ui_BindPropertyPlugin_55_17_$1, ui_BindVisibilityPlugin_65_17_$1];
    ui_LocalComboBox_48_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var boundList_73_17_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_73_17_$1,"minWidth" , this.getMaxWidgetTypeWidth() + 26);
    ui_LocalComboBox_48_13_$1.listConfig = boundList_73_17_$1;
    container_46_9_$1.items = [ui_LocalComboBox_48_13_$1];
    var layout_Anchor_78_13_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(container_46_9_$1,"layout" , layout_Anchor_78_13_$1);
    var container_81_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_81_9_$1,"region" , "center");
    container_81_9_$1.itemId =net.jangaroo.ext.Exml.asString( this.EDITOR_CONTAINER);
    container_43_5_$1.items = [container_46_9_$1, container_81_9_$1];
    var ui_VerticalSpacingPlugin_85_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_43_5_$1.plugins = [ui_VerticalSpacingPlugin_85_9_$1];
    config_$1.items = [container_43_5_$1];
    var toolbar_90_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    AS3.setBindable(toolbar_90_5_$1,"dock" , "bottom");
    toolbar_90_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER_GRID_100.getSkin());
    var layout_HBox_93_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_93_9_$1,"pack" , "end");
    AS3.setBindable(toolbar_90_5_$1,"layout" , layout_HBox_93_9_$1);
    var button_96_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_96_9_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetEditorWrapper.SAVE_BUTTON);
    button_96_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_96_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Action_saveWidget_text')));
    AS3.setBindable(button_96_9_$1,"handler" ,AS3.bind( this,"saveWidget"));
    var button_101_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_101_9_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetEditorWrapper.REMOVE_BUTTON);
    button_101_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_101_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Action_removeWidget_text')));
    AS3.setBindable(button_101_9_$1,"handler" ,AS3.bind( this,"removeWidget"));
    toolbar_90_5_$1.items = [button_96_9_$1, button_101_9_$1];
    config_$1.dockedItems = [toolbar_90_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HDRE(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.widgetEditorWrapper",
      constructor: WidgetEditorWrapper$,
      super$HDRE: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        WIDGET_TYPE_SELECTOR: "widgetTypeSelector",
        REMOVE_BUTTON: "removeButton",
        SAVE_BUTTON: "saveButton"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Toolbar",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase"]
    };
});
