Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanel", function(RelativeDateFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.data.JsonStore;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A filter for the collection view that allows filtering for relative dates (e.g. document was modified during
 the last n days)
 * /
public class RelativeDateFilterPanel extends RelativeDateFilterPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.relativeDateFilterPanel";

    public*/function RelativeDateFilterPanel$(config/*:RelativeDateFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase,{});
    var defaults_$1/*:RelativeDateFilterPanel*/ =AS3.cast(RelativeDateFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( 'datefilter-panel-'+AS3.getBindable(config,"dateFieldName"));
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_'+AS3.getBindable(config,"dateFieldName")+'_text'));
    var container_39_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var editor_ComboBoxAutoWidth_41_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth,{});
    editor_ComboBoxAutoWidth_41_9_$1.itemId =net.jangaroo.ext.Exml.asString( 'datefilter-'+AS3.getBindable(config,"dateFieldName"));
    AS3.setBindable(editor_ComboBoxAutoWidth_41_9_$1,"displayField" , "value");
    editor_ComboBoxAutoWidth_41_9_$1.hideLabel = true;
    AS3.setBindable(editor_ComboBoxAutoWidth_41_9_$1,"encodeItems" , true);
    editor_ComboBoxAutoWidth_41_9_$1.valueField = "id";
    AS3.setBindable(editor_ComboBoxAutoWidth_41_9_$1,"width" , 100);
    var ui_BindPropertyPlugin_48_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_48_13_$1.bidirectional = true;
    var ui_ValueExpression_50_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_50_17_$1,"expression" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dateFieldName")));
    AS3.setBindable(ui_ValueExpression_50_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_48_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_50_17_$1);
    editor_ComboBoxAutoWidth_41_9_$1.plugins = [ui_BindPropertyPlugin_48_13_$1];
    editor_ComboBoxAutoWidth_41_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var store_Json_56_13_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_56_13_$1,"fields" , ['id', 'value']);
    AS3.setBindable(store_Json_56_13_$1,"data" , [
                       {id: com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase.ANY_DATE, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_any_text')},
                       {id: 1, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_1_text')},
                       {id: 7, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_7_text')},
                       {id: 14, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_14_text')},
                       {id: 30, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_30_text')},
                       {id: 365, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_date_days_365_text')}
                     ]);
    AS3.setBindable(editor_ComboBoxAutoWidth_41_9_$1,"store" , new Ext.data.JsonStore(store_Json_56_13_$1));
    container_39_5_$1.items = [editor_ComboBoxAutoWidth_41_9_$1];
    var layout_VBox_70_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_70_9_$1,"align" , "stretch");
    AS3.setBindable(container_39_5_$1,"layout" , layout_VBox_70_9_$1);
    config_$1.items = [container_39_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$i0dT(config_$1);
  }/*

    /** The name of the Solr (date) field that the filter should apply to, e.g. modificationdate. Default: modificationdate * /
    [Bindable]
    public var dateFieldName:String;


    /**
    The query template that is used to restrict the results to a relative time range.
    Two placeholders are getting dynamically replaced at runtime: dateFieldName (@see #dateFieldName) and freshness (from selection)

    default: ({0}:[NOW/HOUR-{1}DAYS TO NOW/HOUR+1HOUR] AND isdeleted:false)
     * /
    [Bindable]
    public var queryTemplate:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.relativeDateFilterPanel",
      constructor: RelativeDateFilterPanel$,
      super$i0dT: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dateFieldName: null,
        queryTemplate: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.data.JsonStore",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.RelativeDateFilterPanelBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth"]
    };
});
