Ext.define("com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsView", function(ArchivedItemsView) {/*package com.coremedia.elastic.social.studio.moderation.archive.archiveditems{
import com.coremedia.elastic.social.studio.moderation.archive.archiveditems.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin;
import com.coremedia.elastic.social.studio.moderation.ComplaintColumn;
import ext.grid.column.Column;
import com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn;
import ext.grid.column.DateColumn;
import ext.selection.RowSelectionModel;
import ext.view.TableView;
import ext.toolbar.Toolbar;
import ext.toolbar.TextItem;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ArchivedItemsView extends ArchivedItemsViewBase{

    import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
    import com.coremedia.ui.skins.TableViewSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.archivedItemsView";

    public static const COMPLAINT_ID:String = "complaint";

    public static const STATUS_ID:String = "status";

    public static const TYPE_ID:String = "type";

    public static const USER_ID:String = "user";

    public static const TEXT_ID:String = "text";

    public static const CREATION_DATE_ID:String = "creationDate";

    public static const LAST_COMPLAINT_DATE_ID:String = "lastComplaintDate";

    public*/function ArchivedItemsView$(config/*:ArchivedItemsView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase,{});
    var defaults_$1/*:ArchivedItemsView*/ =AS3.cast(ArchivedItemsView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.autoShow = true;
    var ui_BindListPlugin_41_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_41_5_$1,"bindTo" , this.getArchivedItemsValueExpression(AS3.getBindable(config,"archiveContributionAdministration")));
    AS3.setBindable(ui_BindListPlugin_41_5_$1,"initialViewLimit" , 100);
    AS3.setBindable(ui_BindListPlugin_41_5_$1,"viewLimitIncrement" , 100);
    AS3.setBindable(ui_BindListPlugin_41_5_$1,"lazy" , true);
    var data_AutoField_46_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_46_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.AUTHOR_NAME);
    var data_AutoField_47_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_47_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE);
    var data_AutoField_48_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_48_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    var data_AutoField_49_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_49_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.SUBJECT);
    var data_AutoField_50_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_50_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET);
    var data_AutoField_51_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_51_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.COLLECTION);
    var data_AutoField_52_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_52_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.STATE);
    data_AutoField_52_9_$1.mapping = com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET + '.' + com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.STATE;
    AS3.setBindable(ui_BindListPlugin_41_5_$1,"fields" , [data_AutoField_46_9_$1, data_AutoField_47_9_$1, data_AutoField_48_9_$1, data_AutoField_49_9_$1, data_AutoField_50_9_$1, data_AutoField_51_9_$1, data_AutoField_52_9_$1]);
    var ui_BindSelectionPlugin_56_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_56_5_$1,"selectedValues" , this.getSelectedItemsValueExpression(AS3.getBindable(config,"archiveContributionAdministration")));
    var ui_FlushBeforeSelectionChangePlugin_58_5_$1/*:com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin*/ =AS3.cast(com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin,{});
    config_$1.plugins = [ui_BindListPlugin_41_5_$1, ui_BindSelectionPlugin_56_5_$1, ui_FlushBeforeSelectionChangePlugin_58_5_$1];
    var es_ComplaintColumn_61_5_$1/*:com.coremedia.elastic.social.studio.moderation.ComplaintColumn*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ComplaintColumn,{});
    es_ComplaintColumn_61_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.COMPLAINT_ID);
    var gridColumn_62_5_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_62_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.STATUS_ID);
    gridColumn_62_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_status'));
    gridColumn_62_5_$1.sortable = false;
    gridColumn_62_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.STATE);
    gridColumn_62_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.statusRenderer;
    gridColumn_62_5_$1.groupable = false;
    gridColumn_62_5_$1.menuDisabled = true;
    AS3.setBindable(gridColumn_62_5_$1,"width" , 80);
    gridColumn_62_5_$1.tdCls =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.ITEM_ELEMENT_STATUS.getCSSClass());
    var es_ContributionTypeColumn_71_5_$1/*:com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn,{});
    es_ContributionTypeColumn_71_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.TYPE_ID);
    var gridColumn_72_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_72_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.USER_ID);
    gridColumn_72_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_name'));
    gridColumn_72_5_$1.sortable = false;
    gridColumn_72_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.AUTHOR_NAME);
    gridColumn_72_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.authorNameRenderer;
    gridColumn_72_5_$1.groupable = false;
    gridColumn_72_5_$1.menuDisabled = true;
    AS3.setBindable(gridColumn_72_5_$1,"width" , 80);
    var gridColumn_80_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_80_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.TEXT_ID);
    gridColumn_80_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_content'));
    gridColumn_80_5_$1.sortable = false;
    gridColumn_80_5_$1.groupable = false;
    gridColumn_80_5_$1.menuDisabled = true;
    gridColumn_80_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.SUBJECT);
    gridColumn_80_5_$1.flex = 1.0;
    var gridColumn_87_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_87_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.CREATION_DATE_ID);
    gridColumn_87_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_date'));
    gridColumn_87_5_$1.sortable = false;
    gridColumn_87_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE);
    gridColumn_87_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.dateRenderer;
    gridColumn_87_5_$1.menuDisabled = true;
    gridColumn_87_5_$1.groupable = false;
    AS3.setBindable(gridColumn_87_5_$1,"width" , 130);
    var dateColumn_95_5_$1/*:ext.grid.column.DateColumn*/ =AS3.cast(Ext.grid.column.Date,{});
    dateColumn_95_5_$1.stateId =net.jangaroo.ext.Exml.asString( ArchivedItemsView.LAST_COMPLAINT_DATE_ID);
    dateColumn_95_5_$1.header = "";
    dateColumn_95_5_$1.sortable = true;
    dateColumn_95_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.groupRenderer;
    dateColumn_95_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    AS3.setBindable(dateColumn_95_5_$1,"hidden" , true);
    AS3.setBindable(dateColumn_95_5_$1,"width" , 80);
    config_$1.columns = [es_ComplaintColumn_61_5_$1, gridColumn_62_5_$1, es_ContributionTypeColumn_71_5_$1, gridColumn_72_5_$1, gridColumn_80_5_$1, gridColumn_87_5_$1, dateColumn_95_5_$1];
    var selection_RowModel_104_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_104_5_$1.mode = "MULTI";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_104_5_$1);
    var gridView_107_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_107_5_$1.stripeRows = true;
    AS3.setBindable(gridView_107_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'archive_list_empty_text')));
    gridView_107_5_$1.deferEmptyText = false;
    gridView_107_5_$1.loadMask = true;
    gridView_107_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    gridView_107_5_$1["getRowClass"] = com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.handleRowStyle;
    config_$1["viewConfig"] = gridView_107_5_$1;
    var toolbar_115_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_115_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.ARCHIVE_STATUS_BAR_ID);
    AS3.setBindable(toolbar_115_5_$1,"dock" , "bottom");
    toolbar_115_5_$1["focusableContainer"] = false;
    toolbar_115_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FOOTER.getSkin());
    var tbText_120_9_$1/*:ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_120_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.ARCHIVE_STATUS_BAR_TEXT);
    var ui_BindPropertyPlugin_122_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_122_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_122_13_$1.componentProperty = "text";
    ui_BindPropertyPlugin_122_13_$1.bindTo = this.getTotalHitsExpression();
    tbText_120_9_$1.plugins = [ui_BindPropertyPlugin_122_13_$1];
    toolbar_115_5_$1.items = [tbText_120_9_$1];
    config_$1.dockedItems = [toolbar_115_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rPzb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.archivedItemsView",
      constructor: ArchivedItemsView$,
      super$rPzb: function() {
        com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COMPLAINT_ID: "complaint",
        STATUS_ID: "status",
        TYPE_ID: "type",
        USER_ID: "user",
        TEXT_ID: "text",
        CREATION_DATE_ID: "creationDate",
        LAST_COMPLAINT_DATE_ID: "lastComplaintDate"
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.grid.column.Column",
        "Ext.grid.column.Date",
        "Ext.selection.RowModel",
        "Ext.toolbar.TextItem",
        "Ext.toolbar.Toolbar",
        "Ext.view.Table",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.ComplaintColumn",
        "com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn"
      ]
    };
});
