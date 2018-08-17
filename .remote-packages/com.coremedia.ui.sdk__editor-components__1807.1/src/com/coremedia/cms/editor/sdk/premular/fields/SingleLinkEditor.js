Ext.define("com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor", function(SingleLinkEditor) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class SingleLinkEditor extends SingleLinkEditorBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.singleLinkEditor";

    public*/function SingleLinkEditor$(config/*:SingleLinkEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase,{});
    var defaults_$1/*:SingleLinkEditor*/ =AS3.cast(SingleLinkEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkListLabel")));
    config_$1.labelAlign = "top";
    var layout_HBox_36_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_36_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_36_5_$1);
    var ui_HorizontalSpacingPlugin_39_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_39_5_$1];
    var editor_PropertyField_42_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_42_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_PropertyField_42_5_$1.labelSeparator = "";
    config_$1["defaultType"] = editor_PropertyField_42_5_$1['xtype'];
    delete editor_PropertyField_42_5_$1['xtype'];
    delete editor_PropertyField_42_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_42_5_$1;
    var editor_SingleLinkField_46_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField,{});
    editor_SingleLinkField_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase.LINK_FIELD_ITEM_ID);
    AS3.setBindable(editor_SingleLinkField_46_5_$1,"valueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_SingleLinkField_46_5_$1,"linkContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkContentType")));
    editor_SingleLinkField_46_5_$1.flex = 1.0;
    var ui_IconButton_50_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_50_5_$1.itemId = "removeLinkItemButton";
    AS3.setBindable(ui_IconButton_50_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteStructNode_text'));
    AS3.setBindable(ui_IconButton_50_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteStructNode_text')));
    AS3.setBindable(ui_IconButton_50_5_$1,"handler" , function()/*:void*/ {AS3.getBindable(config,"bindTo").setValue([]);});
    AS3.setBindable(ui_IconButton_50_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove')));
    var ui_BindPropertyPlugin_56_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_56_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_56_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_BindPropertyPlugin_56_9_$1.transformer = function(v/*:Array*/)/*:Boolean*/ {return !v || v.length == 0;};
    ui_BindPropertyPlugin_56_9_$1.ifUndefined = "true";
    var editor_BindDisablePlugin_60_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_60_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_60_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_IconButton_50_5_$1.plugins = [ui_BindPropertyPlugin_56_9_$1, editor_BindDisablePlugin_60_9_$1];
    config_$1.items = [editor_SingleLinkField_46_5_$1, ui_IconButton_50_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bWBY(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    [Bindable]
    public var linkListLabel:String;


    [Bindable]
    public var linkContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.singleLinkEditor",
      constructor: SingleLinkEditor$,
      super$bWBY: function() {
        com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        linkListLabel: null,
        linkContentType: null
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditorBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin"
      ]
    };
});
