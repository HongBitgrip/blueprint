Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel", function(TranslationStatusFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.VBoxLayout;
import ext.form.FieldContainer;
import com.coremedia.ui.plugins.BindItemsPlugin;
import ext.form.Labelable;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusFilterPanel extends TranslationStatusFilterPanelBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusFilterPanel";

    /**
     * The filter ID for this filter. It is used as itemId and identifier in saved searches.
     * /
    public static const FILTER_ID:String = "translationStatus";

    public*/function TranslationStatusFilterPanel$(config/*:TranslationStatusFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase,{});
    var defaults_$1/*:TranslationStatusFilterPanel*/ =AS3.cast(TranslationStatusFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( TranslationStatusFilterPanel.FILTER_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_text'));
    var container_30_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var editor_TranslationStatusSiteSelector_32_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector,{});
    AS3.setBindable(editor_TranslationStatusSiteSelector_32_9_$1,"selectedSiteIdValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.SITE_PROPERTY, this.getStateBean()));
    container_30_5_$1.items = [editor_TranslationStatusSiteSelector_32_9_$1];
    var layout_VBox_36_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_36_9_$1,"align" , "stretch");
    AS3.setBindable(container_30_5_$1,"layout" , layout_VBox_36_9_$1);
    var fieldContainer_39_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    fieldContainer_39_5_$1.itemId = "checkboxContainer";
    AS3.setBindable(fieldContainer_39_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_status_text')));
    var ui_BindItemsPlugin_42_9_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_42_9_$1,"valueExpression" , this.getCheckboxConfigsValueExpression());
    AS3.setBindable(ui_BindItemsPlugin_42_9_$1,"reuseComponents" , true);
    fieldContainer_39_5_$1.plugins = [ui_BindItemsPlugin_42_9_$1];
    config_$1.items = [container_30_5_$1, fieldContainer_39_5_$1];
    var labelable_48_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_48_5_$1.labelSeparator = "";
    labelable_48_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_48_5_$1['xtype'];
    delete labelable_48_5_$1['xtype'];
    delete labelable_48_5_$1['xclass'];
    config_$1.defaults = labelable_48_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FT3U(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusFilterPanel",
      constructor: TranslationStatusFilterPanel$,
      super$FT3U: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {FILTER_ID: "translationStatus"},
      requires: [
        "Ext.container.Container",
        "Ext.form.FieldContainer",
        "Ext.form.Labelable",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector"]
    };
});
