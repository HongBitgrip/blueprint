Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.SimpleSearchWidgetEditor", function(SimpleSearchWidgetEditor) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.ui.components.StatefulContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector;
import com.coremedia.ui.exml.ValueExpression;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import com.coremedia.ui.components.BoundRadioGroup;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class SimpleSearchWidgetEditor extends StatefulContainer{

    import com.coremedia.cap.content.ContentTypeNames;
    import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.simpleSearchWidgetEditor";

    public static const CONTENT_TYPE_SELECTOR_ITEM_ID:String = "contentTypeSelector";

    public static const SEARCH_TEXT_ITEM_ID:String = "searchField";

    public static const PREFERRED_SITE_ITEM_ID:String = "preferredSite";

    public*/function SimpleSearchWidgetEditor$(config/*:SimpleSearchWidgetEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.StatefulContainer*/ =AS3.cast(com.coremedia.ui.components.StatefulContainer,{});
    var defaults_$1/*:SimpleSearchWidgetEditor*/ =AS3.cast(SimpleSearchWidgetEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"properties" , "searchText,contentType,preferredSite");
    var editor_ContentTypeSelector_29_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector,{});
    AS3.setBindable(editor_ContentTypeSelector_29_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_contentType_text')));
    AS3.setBindable(editor_ContentTypeSelector_29_5_$1,"entries" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getAvailableContentTypeEntries());
    editor_ContentTypeSelector_29_5_$1.anchor = "100%";
    editor_ContentTypeSelector_29_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleSearchWidgetEditor.CONTENT_TYPE_SELECTOR_ITEM_ID);
    var ui_ValueExpression_35_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_35_9_$1,"expression" , "contentType");
    AS3.setBindable(ui_ValueExpression_35_9_$1,"context" , this.getModel());
    AS3.setBindable(editor_ContentTypeSelector_29_5_$1,"contentTypeValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_35_9_$1));
    var textField_39_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    AS3.setBindable(textField_39_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_searchText_text')));
    textField_39_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleSearchWidgetEditor.SEARCH_TEXT_ITEM_ID);
    textField_39_5_$1.anchor = "100%";
    var ui_BindPropertyPlugin_44_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_44_9_$1.bidirectional = true;
    var ui_ValueExpression_46_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_46_13_$1,"expression" , "searchText");
    AS3.setBindable(ui_ValueExpression_46_13_$1,"context" , this.getModel());
    ui_BindPropertyPlugin_44_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_46_13_$1);
    var ui_BlockEnterPlugin_50_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    textField_39_5_$1.plugins = [ui_BindPropertyPlugin_44_9_$1, ui_BlockEnterPlugin_50_9_$1];
    var ui_BoundRadioGroup_54_5_$1/*:com.coremedia.ui.components.BoundRadioGroup*/ =AS3.cast(com.coremedia.ui.components.BoundRadioGroup,{});
    AS3.setBindable(ui_BoundRadioGroup_54_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_site_text')));
    ui_BoundRadioGroup_54_5_$1.labelWidth = 90.0;
    ui_BoundRadioGroup_54_5_$1.columns = 2;
    ui_BoundRadioGroup_54_5_$1.toValue = function(value/*:String*/)/*:Boolean*/ { return value === undefined || (value !== null && value === 'preferred');};
    ui_BoundRadioGroup_54_5_$1.defaultValue = "preferred";
    ui_BoundRadioGroup_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleSearchWidgetEditor.PREFERRED_SITE_ITEM_ID);
    var radio_62_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_62_9_$1.itemId = "preferred";
    AS3.setBindable(radio_62_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_site_preferredSite_text')));
    AS3.setBindable(radio_62_9_$1,"margin" , "0 0 0 6");
    var radio_65_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_65_9_$1.itemId = "all";
    AS3.setBindable(radio_65_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_SimpleSearch_site_allContent_text')));
    ui_BoundRadioGroup_54_5_$1.items = [radio_62_9_$1, radio_65_9_$1];
    var ui_ValueExpression_69_9_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_69_9_$1,"expression" , "preferredSite");
    AS3.setBindable(ui_ValueExpression_69_9_$1,"context" , this.getModel());
    AS3.setBindable(ui_BoundRadioGroup_54_5_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_69_9_$1));
    config_$1.items = [editor_ContentTypeSelector_29_5_$1, textField_39_5_$1, ui_BoundRadioGroup_54_5_$1];
    var ui_VerticalSpacingPlugin_75_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_75_5_$1];
    var object_78_5_$1/*:Object*/ = {};
    object_78_5_$1.contentType = com.coremedia.cap.content.ContentTypeNames.DOCUMENT;
    object_78_5_$1.searchText = "";
    object_78_5_$1.preferredSite = true;
    AS3.setBindable(config_$1,"propertyDefaults" , object_78_5_$1);
    var layout_Anchor_83_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_83_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qNo_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulContainer",
      alias: "widget.com.coremedia.cms.editor.sdk.config.simpleSearchWidgetEditor",
      constructor: SimpleSearchWidgetEditor$,
      super$qNo_: function() {
        com.coremedia.ui.components.StatefulContainer.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTENT_TYPE_SELECTOR_ITEM_ID: "contentTypeSelector",
        SEARCH_TEXT_ITEM_ID: "searchField",
        PREFERRED_SITE_ITEM_ID: "preferredSite"
      },
      requires: [
        "Ext.form.field.Radio",
        "Ext.form.field.Text",
        "Ext.layout.container.Anchor",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.ui.components.BoundRadioGroup",
        "com.coremedia.ui.components.StatefulContainer",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase"
      ]
    };
});
