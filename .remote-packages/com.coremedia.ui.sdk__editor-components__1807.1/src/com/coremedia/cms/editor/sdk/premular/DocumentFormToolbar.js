Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar", function(DocumentFormToolbar) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Spacer;
import ext.container.Container;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.plugins.BindPlugin;
import com.coremedia.ui.components.ExtendedDisplayField;
import ext.form.field.DisplayField;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.IconButton;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class DocumentFormToolbar extends DocumentFormToolbarBase{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentFormToolbar";

    public static const COLLAPSE_BUTTON_ITEM_ID:String = "collapseButton";

    public static const LIFECYCLE_STATUS_ITEM_ID:String = "lifecycleStatus";

    public static const CHECKED_OUT_STATUS_ITEM_ID:String = "checkedOutStatus";

    public static const DOCUMENT_TYPE_ITEM_ID:String = "documentType";

    public static const OPEN_ISSUE_WINDOW_BUTTON_ITEM_ID:String = "openIssueWindowButton";

    public*/function DocumentFormToolbar$(config/*:DocumentFormToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase,{});
    var defaults_$1/*:DocumentFormToolbar*/ =AS3.cast(DocumentFormToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_label'));
    AS3.setBindable(config_$1,"height" , "40px");
    var tbSpacer_55_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_55_5_$1,"width" , 12);
    var container_59_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_59_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase.DOCUMENT_TOOLBAR_TEXT_CONTAINER_ITEM_ID);
    container_59_5_$1.flex = 1.0;
    var ui_IconDisplayField_62_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_62_9_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentFormToolbar.LIFECYCLE_STATUS_ITEM_ID);
    AS3.setBindable(ui_IconDisplayField_62_9_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    ui_IconDisplayField_62_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.WORKAREA.getSkin());
    var ui_BindPlugin_66_13_$1/*:com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_66_13_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('lifecycleStatus');
    ui_BindPlugin_66_13_$1.boundValueChanged = com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase.changeLifecycleStatus;
    ui_IconDisplayField_62_9_$1.plugins = [ui_BindPlugin_66_13_$1];
    var ui_IconDisplayField_70_9_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_70_9_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentFormToolbar.CHECKED_OUT_STATUS_ITEM_ID);
    ui_IconDisplayField_70_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconDisplayField_70_9_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    AS3.setBindable(ui_IconDisplayField_70_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconDisplayField_70_9_$1,"iconPosition" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.IconDisplayField.ICON_POSITION_AFTER_VALUE));
    var ui_BindPlugin_76_13_$1/*: com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_76_13_$1.bindTo = this.getCheckedOutValueExpression();
    ui_BindPlugin_76_13_$1.boundValueChanged =AS3.bind( this,"changeCheckedOutStatus");
    ui_IconDisplayField_70_9_$1.plugins = [ui_BindPlugin_76_13_$1];
    var ui_ExtendedDisplayField_81_9_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_81_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase.LOCALE_NAME_ITEM_ID);
    AS3.setBindable(ui_ExtendedDisplayField_81_9_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    ui_ExtendedDisplayField_81_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.WORKAREA.getSkin());
    var ui_BindPlugin_85_13_$1/*: com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_85_13_$1.bindTo = this.getLocaleValueExpression();
    ui_BindPlugin_85_13_$1.boundValueChanged =AS3.bind( this,"changeLocale");
    ui_ExtendedDisplayField_81_9_$1.plugins = [ui_BindPlugin_85_13_$1];
    container_59_5_$1.items = [ui_IconDisplayField_62_9_$1, ui_IconDisplayField_70_9_$1, ui_ExtendedDisplayField_81_9_$1];
    var displayField_92_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_92_9_$1,"margin" , "0 6 0 0");
    container_59_5_$1["defaultType"] = displayField_92_9_$1['xtype'];
    delete displayField_92_9_$1['xtype'];
    delete displayField_92_9_$1['xclass'];
    container_59_5_$1.defaults = displayField_92_9_$1;
    var layout_HBox_96_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_59_5_$1,"layout" , layout_HBox_96_9_$1);
    var ui_IconDisplayField_101_5_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_101_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentFormToolbar.DOCUMENT_TYPE_ITEM_ID);
    ui_IconDisplayField_101_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconDisplayField_101_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    ui_IconDisplayField_101_5_$1.tooltipOnValue = true;
    var ui_BindPlugin_106_9_$1/*: com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_106_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('type');
    ui_BindPlugin_106_9_$1.boundValueChanged = com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase.changeType;
    ui_IconDisplayField_101_5_$1.plugins = [ui_BindPlugin_106_9_$1];
    var tbSpacer_110_5_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_110_5_$1,"width" , "6px");
    var editor_OpenIssuesWindowButton_112_5_$1/*: com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton,{});
    editor_OpenIssuesWindowButton_112_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentFormToolbar.OPEN_ISSUE_WINDOW_BUTTON_ITEM_ID);
    editor_OpenIssuesWindowButton_112_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_OpenIssuesWindowButton_112_5_$1,"premular" , AS3.getBindable(config,"premular"));
    AS3.setBindable(editor_OpenIssuesWindowButton_112_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'validator_check')));
    AS3.setBindable(editor_OpenIssuesWindowButton_112_5_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    var ui_IconButton_118_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_118_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentFormToolbar.COLLAPSE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_118_5_$1,"scale" , "medium");
    ui_IconButton_118_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconButton_118_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Document_panel_btn_tooltip')));
    AS3.setBindable(ui_IconButton_118_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Document_panel_btn_tooltip'));
    AS3.setBindable(ui_IconButton_118_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'collapsing_arrow_left')));
    AS3.setBindable(ui_IconButton_118_5_$1,"handler" , AS3.getBindable(config,"collapseHandler"));
    config_$1.items = [tbSpacer_55_5_$1, container_59_5_$1, ui_IconDisplayField_101_5_$1, tbSpacer_110_5_$1, editor_OpenIssuesWindowButton_112_5_$1, ui_IconButton_118_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fY2Q(config_$1);
  }/*

    /**
     * the property field registry for locating fields
     * /
    [Bindable]
    public var propertyFieldRegistry:PropertyFieldRegistry;

    /** The function that will be called on collapse * /
    [Bindable]
    public var collapseHandler:Function;


    /**
     The manager for focusing a given property field.
     This is the premular containing this toolbar.
     * /
    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.Premular;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentFormToolbar",
      constructor: DocumentFormToolbar$,
      super$fY2Q: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        propertyFieldRegistry: null,
        collapseHandler: null,
        premular: null
      },
      statics: {
        COLLAPSE_BUTTON_ITEM_ID: "collapseButton",
        LIFECYCLE_STATUS_ITEM_ID: "lifecycleStatus",
        CHECKED_OUT_STATUS_ITEM_ID: "checkedOutStatus",
        DOCUMENT_TYPE_ITEM_ID: "documentType",
        OPEN_ISSUE_WINDOW_BUTTON_ITEM_ID: "openIssueWindowButton"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton"]
    };
});
