Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanel", function(SiteFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.RadioGroup;
import ext.form.field.Radio;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A filter for the collection view that allows to select the site to be included in the search result.
 * /
public class SiteFilterPanel extends SiteFilterPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.siteFilterPanel";

    /**
     * The filter ID for this filter. It is used as itemId and identifier in saved searches.
     * /
    public static const FILTER_ID:String = "site";

    // Enable getId() method used in getRadioGroupName()
    private*/ function __initialize__(config/*:SiteFilterPanel*/)/*:void*/ {
      this['initialConfig'] = config || {};
    }/*

    public*/function SiteFilterPanel$(config/*:SiteFilterPanel = null*/){if(arguments.length<=0)config=null;this.__initialize__$bk0G(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase,{});
    var defaults_$1/*:SiteFilterPanel*/ =AS3.cast(SiteFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( SiteFilterPanel.FILTER_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_Site_text'));
    var container_35_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var radioGroup_37_9_$1/*:ext.form.RadioGroup*/ =AS3.cast(Ext.form.RadioGroup,{});
    radioGroup_37_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.RADIO_GROUP_ITEM_ID);
    radioGroup_37_9_$1.columns = 1;
    var radio_40_13_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_40_13_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.NO_FILTER_VALUE);
    radio_40_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.NO_FILTER_VALUE);
    radio_40_13_$1.name =net.jangaroo.ext.Exml.asString( this.getRadioGroupName());
    radio_40_13_$1["inGroup"] = true;
    radio_40_13_$1.checked = true;
    radio_40_13_$1.hideLabel = true;
    AS3.setBindable(radio_40_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_Site_all_content_button')));
    var radio_47_13_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_47_13_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.PREFERRED_SITE_VALUE);
    radio_47_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.PREFERRED_SITE_VALUE);
    radio_47_13_$1.name =net.jangaroo.ext.Exml.asString( this.getRadioGroupName());
    radio_47_13_$1["inGroup"] = true;
    radio_47_13_$1.hideLabel = true;
    AS3.setBindable(radio_47_13_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_Site_preferred_site_button')));
    radioGroup_37_9_$1.items = [radio_40_13_$1, radio_47_13_$1];
    container_35_5_$1.items = [radioGroup_37_9_$1];
    var layout_VBox_57_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_57_9_$1,"align" , "stretch");
    AS3.setBindable(container_35_5_$1,"layout" , layout_VBox_57_9_$1);
    config_$1.items = [container_35_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bk0G(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.siteFilterPanel",
      __initialize__$bk0G: __initialize__,
      constructor: SiteFilterPanel$,
      super$bk0G: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {FILTER_ID: "site"},
      requires: [
        "Ext.container.Container",
        "Ext.form.RadioGroup",
        "Ext.form.field.Radio",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
