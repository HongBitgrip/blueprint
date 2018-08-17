Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserInternalNotesContainer", function(UserInternalNotesContainer) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.HBoxLayout;
import ext.form.field.TextArea;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserInternalNotesContainer extends Container{

    import com.coremedia.elastic.social.studio.model.UserAdministration;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userInternalNotesContainer";

    public static const TEXTAREA_ITEM_ID:String = "textArea";

    public*/function UserInternalNotesContainer$(config/*:UserInternalNotesContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:UserInternalNotesContainer*/ =AS3.cast(UserInternalNotesContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_VBox_27_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_27_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_27_5_$1);
    var container_30_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_32_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_32_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_title'));
    displayField_32_9_$1.flex = 1.0;
    displayField_32_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var ui_IconDisplayField_35_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_35_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconDisplayField_35_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_tooltip'));
    container_30_5_$1.items = [displayField_32_9_$1, ui_IconDisplayField_35_9_$1];
    var layout_HBox_39_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_39_9_$1,"align" , "stretch");
    AS3.setBindable(container_30_5_$1,"layout" , layout_HBox_39_9_$1);
    var textArea_42_5_$1/*:ext.form.field.TextArea*/ =AS3.cast(Ext.form.field.TextArea,{});
    textArea_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( UserInternalNotesContainer.TEXTAREA_ITEM_ID);
    AS3.setBindable(textArea_42_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_empty_text')));
    textArea_42_5_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_46_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_46_9_$1.bidirectional = true;
    var ui_ValueExpression_48_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_48_13_$1,"context" , AS3.getBindable(config,"userAdministration"));
    AS3.setBindable(ui_ValueExpression_48_13_$1,"expression" , "notes.text");
    ui_BindPropertyPlugin_46_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_48_13_$1);
    textArea_42_5_$1.plugins = [ui_BindPropertyPlugin_46_9_$1];
    config_$1.items = [container_30_5_$1, textArea_42_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EPKk(config_$1);
  }/*

    [Bindable]
    public var userAdministration:UserAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.elastic.social.studio.config.userInternalNotesContainer",
      constructor: UserInternalNotesContainer$,
      super$EPKk: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {userAdministration: null},
      statics: {TEXTAREA_ITEM_ID: "textArea"},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.TextArea",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
