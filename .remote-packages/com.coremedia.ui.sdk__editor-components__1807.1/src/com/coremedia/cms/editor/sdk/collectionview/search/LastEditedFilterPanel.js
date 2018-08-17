Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanel", function(LastEditedFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.data.JsonStore;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class LastEditedFilterPanel extends LastEditedFilterPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.lastEditedFilterPanel";

    /**
     * The filter ID for this filter. It is used as itemId and identifier in saved searches.
     * /
    public static const FILTER_ID:String = "lastEdited";

    public*/function LastEditedFilterPanel$(config/*:LastEditedFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase,{});
    var defaults_$1/*:LastEditedFilterPanel*/ =AS3.cast(LastEditedFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( LastEditedFilterPanel.FILTER_ID);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_lastEditedBy_text'));
    var container_28_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var editor_ComboBoxAutoWidth_30_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth,{});
    editor_ComboBoxAutoWidth_30_9_$1.itemId = "lastEditedByFilter";
    AS3.setBindable(editor_ComboBoxAutoWidth_30_9_$1,"displayField" , "value");
    editor_ComboBoxAutoWidth_30_9_$1.hideLabel = true;
    editor_ComboBoxAutoWidth_30_9_$1.valueField = "id";
    AS3.setBindable(editor_ComboBoxAutoWidth_30_9_$1,"encodeItems" , true);
    AS3.setBindable(editor_ComboBoxAutoWidth_30_9_$1,"width" , 100);
    var ui_BindPropertyPlugin_37_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_37_13_$1.bidirectional = true;
    var ui_ValueExpression_39_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_39_17_$1,"expression" , "lastEditedBy");
    AS3.setBindable(ui_ValueExpression_39_17_$1,"context" , this.getStateBean());
    ui_BindPropertyPlugin_37_13_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_39_17_$1);
    editor_ComboBoxAutoWidth_30_9_$1.plugins = [ui_BindPropertyPlugin_37_13_$1];
    editor_ComboBoxAutoWidth_30_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var store_Json_45_13_$1/*:ext.data.JsonStore*/ =AS3.cast(Ext.data.JsonStore,{});
    AS3.setBindable(store_Json_45_13_$1,"fields" , ['id', 'value']);
    AS3.setBindable(store_Json_45_13_$1,"data" , [
                               { id : com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase.LAST_EDITED_BY_ANYONE, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_lastEditedByAnyone_text') },
                               { id : com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase.LAST_EDITED_BY_ME, value: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_lastEditedByMe_text') }
                              ]);
    AS3.setBindable(editor_ComboBoxAutoWidth_30_9_$1,"store" , new Ext.data.JsonStore(store_Json_45_13_$1));
    container_28_5_$1.items = [editor_ComboBoxAutoWidth_30_9_$1];
    var layout_VBox_55_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_55_9_$1,"align" , "stretch");
    AS3.setBindable(container_28_5_$1,"layout" , layout_VBox_55_9_$1);
    config_$1.items = [container_28_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$0Ssu(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.lastEditedFilterPanel",
      constructor: LastEditedFilterPanel$,
      super$0Ssu: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {FILTER_ID: "lastEdited"},
      requires: [
        "Ext.container.Container",
        "Ext.data.JsonStore",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.LastEditedFilterPanelBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth"]
    };
});
