Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapper", function(ProcessDetailPanelWrapper) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.toolbar.Spacer;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import ext.form.Label;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.menu.Menu;
import ext.menu.Item;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A wrapper for a publication or translation process detail panel with a
 back-to-process-list toolbar button at the top. The detail panel is inserted in the base class.
 * /
public class ProcessDetailPanelWrapper extends ProcessDetailPanelWrapperBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;

    import ext.util.Format;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.processDetailPanelWrapper";

    public static const PROPERTY_FIELD_CONTAINER_ITEM_ID:String = "propertyFieldContainer";

    public static const BACK_BUTTON_ITEM_ID:String = "backButtonItemId";

    public static const SUBJECT_LABEL_ITEM_ID:String = "subjectLabelItemId";

    public static const TYPE_PROPERTY_PATH:String = "definition.name";

    public static const SUBJECT_PROPERTY_PATH:String = "properties.subject";

    public*/function ProcessDetailPanelWrapper$(config/*:ProcessDetailPanelWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase,{});
    var defaults_$1/*:ProcessDetailPanelWrapper*/ =AS3.cast(ProcessDetailPanelWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var ui_SwitchingContainer_49_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_49_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProcessDetailPanelWrapper.PROPERTY_FIELD_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_49_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"processValueExpression").extendBy(ProcessDetailPanelWrapper.TYPE_PROPERTY_PATH));
    var editor_PropertyField_52_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_52_9_$1,"bindTo" , AS3.getBindable(config,"processValueExpression"));
    AS3.setBindable(editor_PropertyField_52_9_$1,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.TRUE_VALUE_EXPRESSION);
    ui_SwitchingContainer_49_5_$1["defaultType"] = editor_PropertyField_52_9_$1['xtype'];
    delete editor_PropertyField_52_9_$1['xtype'];
    delete editor_PropertyField_52_9_$1['xclass'];
    ui_SwitchingContainer_49_5_$1.defaults = editor_PropertyField_52_9_$1;
    config_$1.items = [ui_SwitchingContainer_49_5_$1];
    var tbSpacer_59_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_59_5_$1,"height" , 26);
    AS3.setBindable(tbSpacer_59_5_$1,"width" , 0);
    config_$1.buttons = [tbSpacer_59_5_$1];
    var toolbar_63_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    AS3.setBindable(toolbar_63_5_$1,"height" , 29);
    var ui_IconButton_65_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_65_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProcessDetailPanelWrapper.BACK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_65_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'collapsing_arrow_left')));
    AS3.setBindable(ui_IconButton_65_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_back_to_list_tooltip')));
    AS3.setBindable(ui_IconButton_65_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_back_to_list_tooltip'));
    AS3.setBindable(ui_IconButton_65_9_$1,"handler" , AS3.getBindable(config,"backToListHandler"));
    var label_70_9_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    label_70_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProcessDetailPanelWrapper.SUBJECT_LABEL_ITEM_ID);
    var ui_BindPropertyPlugin_72_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_72_13_$1.transformer = function(value){return Ext.util.Format.ellipsis(value, 45, false);};
    ui_BindPropertyPlugin_72_13_$1.bindTo = AS3.getBindable(config,"processValueExpression").extendBy(ProcessDetailPanelWrapper.SUBJECT_PROPERTY_PATH);
    label_70_9_$1.plugins = [ui_BindPropertyPlugin_72_13_$1];
    var tbSpacer_78_9_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    tbSpacer_78_9_$1.flex = 1.0;
    var ui_MenuIconButton_80_9_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_80_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ui_MenuIconButton_80_9_$1,"arrowVisible" , false);
    AS3.setBindable(ui_MenuIconButton_80_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_filter_options_tooltip')));
    AS3.setBindable(ui_MenuIconButton_80_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_filter_options_tooltip'));
    AS3.setBindable(ui_MenuIconButton_80_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons','arrow_down')));
    var ui_BindVisibilityPlugin_86_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_86_13_$1.bindTo = this.getMayAbortValueExpression();
    ui_MenuIconButton_80_9_$1.plugins = [ui_BindVisibilityPlugin_86_13_$1];
    var menu_89_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_91_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    AS3.setBindable(menuItem_91_17_$1,"handler" ,AS3.bind( this,"abortWorkflow"));
    AS3.setBindable(menuItem_91_17_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowInfoWindow_abortButton_label')));
    AS3.setBindable(menuItem_91_17_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'abort_workflow')));
    menu_89_13_$1.items = [menuItem_91_17_$1];
    ui_MenuIconButton_80_9_$1.menu = menu_89_13_$1;
    toolbar_63_5_$1.items = [ui_IconButton_65_9_$1, label_70_9_$1, tbSpacer_78_9_$1, ui_MenuIconButton_80_9_$1];
    config_$1.tbar = toolbar_63_5_$1;
    var layout_Fit_102_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_102_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$B5xS(config_$1);
  }/*

    [Bindable]
    public var processValueExpression:ValueExpression;

    [Bindable]
    public var backToListHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.processDetailPanelWrapper",
      constructor: ProcessDetailPanelWrapper$,
      super$B5xS: function() {
        com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        processValueExpression: null,
        backToListHandler: null
      },
      statics: {
        PROPERTY_FIELD_CONTAINER_ITEM_ID: "propertyFieldContainer",
        BACK_BUTTON_ITEM_ID: "backButtonItemId",
        SUBJECT_LABEL_ITEM_ID: "subjectLabelItemId",
        TYPE_PROPERTY_PATH: "definition.name",
        SUBJECT_PROPERTY_PATH: "properties.subject"
      },
      requires: [
        "Ext.form.Label",
        "Ext.layout.container.Fit",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "Ext.util.Format",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
