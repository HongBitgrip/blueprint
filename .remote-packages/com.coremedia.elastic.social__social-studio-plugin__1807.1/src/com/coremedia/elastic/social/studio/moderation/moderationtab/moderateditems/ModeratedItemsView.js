Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsView", function(ModeratedItemsView) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems{
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin;
import com.coremedia.elastic.social.studio.moderation.ComplaintColumn;
import com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn;
import ext.grid.column.Column;
import ext.grid.column.ActionColumn;
import ext.grid.column.DateColumn;
import ext.selection.RowSelectionModel;
import ext.view.TableView;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModeratedItemsView extends ModeratedItemsViewBase{

    import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderatedItemsView";

    public static const COMPLAINT_ID:String = "complaint";

    public static const TYPE_ID:String = "type";

    public static const USER_ID:String = "user";

    public static const TEXT_ID:String = "text";

    public static const PRIORITIZED_ID:String = "prioritized";

    public static const CREATION_DATE_ID:String = "creationDate";

    public static const LAST_COMPLAINT_DATE_ID:String = "lastComplaintDate";

    public*/function ModeratedItemsView$(config/*:ModeratedItemsView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase,{});
    var defaults_$1/*:ModeratedItemsView*/ =AS3.cast(ModeratedItemsView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.autoShow = true;
    config_$1.forceFit = true;
    var ui_BindListPlugin_45_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_45_5_$1,"bindTo" , this.getModeratedItemsValueExpression(AS3.getBindable(config,"moderationContributionAdministration")));
    var data_AutoField_47_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_47_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.AUTHOR_NAME);
    var data_AutoField_48_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_48_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE);
    var data_AutoField_49_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_49_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    var data_AutoField_50_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_50_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.SUBJECT);
    var data_AutoField_51_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_51_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.TARGET);
    var data_AutoField_52_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_52_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.COLLECTION);
    AS3.setBindable(ui_BindListPlugin_45_5_$1,"fields" , [data_AutoField_47_9_$1, data_AutoField_48_9_$1, data_AutoField_49_9_$1, data_AutoField_50_9_$1, data_AutoField_51_9_$1, data_AutoField_52_9_$1]);
    var ui_BindSelectionPlugin_55_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_55_5_$1,"selectedValues" , this.getSelectedItemsValueExpression(AS3.getBindable(config,"moderationContributionAdministration")));
    AS3.setBindable(ui_BindSelectionPlugin_55_5_$1,"preventFocus" , true);
    var ui_FlushBeforeSelectionChangePlugin_58_5_$1/*:com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin*/ =AS3.cast(com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin,{});
    config_$1.plugins = [ui_BindListPlugin_45_5_$1, ui_BindSelectionPlugin_55_5_$1, ui_FlushBeforeSelectionChangePlugin_58_5_$1];
    var es_ComplaintColumn_61_5_$1/*:com.coremedia.elastic.social.studio.moderation.ComplaintColumn*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ComplaintColumn,{});
    es_ComplaintColumn_61_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.COMPLAINT_ID);
    var es_ContributionTypeColumn_62_5_$1/*:com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn,{});
    es_ContributionTypeColumn_62_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.TYPE_ID);
    var gridColumn_63_5_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_63_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.USER_ID);
    gridColumn_63_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_name'));
    gridColumn_63_5_$1.sortable = false;
    gridColumn_63_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.AUTHOR_NAME);
    gridColumn_63_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.authorNameRenderer;
    gridColumn_63_5_$1.groupable = false;
    gridColumn_63_5_$1.menuDisabled = true;
    AS3.setBindable(gridColumn_63_5_$1,"width" , 120);
    var gridColumn_71_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_71_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.TEXT_ID);
    gridColumn_71_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_content'));
    gridColumn_71_5_$1.sortable = false;
    gridColumn_71_5_$1.groupable = false;
    gridColumn_71_5_$1.menuDisabled = true;
    gridColumn_71_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.SUBJECT);
    gridColumn_71_5_$1.flex = 1.0;
    var actionColumn_78_5_$1/*:ext.grid.column.ActionColumn*/ =AS3.cast(Ext.grid.column.Action,{});
    actionColumn_78_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.PRIORITIZED_ID);
    actionColumn_78_5_$1.header = "";
    actionColumn_78_5_$1.sortable = false;
    actionColumn_78_5_$1.menuDisabled = true;
    actionColumn_78_5_$1.getClass =AS3.bind( this,"getPrioritizeIconCls");
    actionColumn_78_5_$1.handler =AS3.bind( this,"prioritizeHandler");
    actionColumn_78_5_$1["isDisabled"] = com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.isPrioritizeDisabled;
    actionColumn_78_5_$1.getTip =AS3.bind( this,"getPrioritizeToolTip");
    actionColumn_78_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.PRIORITY_ID);
    AS3.setBindable(actionColumn_78_5_$1,"width" , 35);
    AS3.setBindable(actionColumn_78_5_$1,"align" , "center");
    actionColumn_78_5_$1.resizable = false;
    actionColumn_78_5_$1.fixed = true;
    var gridColumn_91_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_91_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.CREATION_DATE_ID);
    gridColumn_91_5_$1["id"] = com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.DATE_SORT_HEADER_ID;
    gridColumn_91_5_$1.sortable = false;
    gridColumn_91_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_date'));
    gridColumn_91_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE);
    gridColumn_91_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.dateRenderer;
    gridColumn_91_5_$1.menuDisabled = true;
    gridColumn_91_5_$1.groupable = false;
    AS3.setBindable(gridColumn_91_5_$1,"width" , 130);
    var dateColumn_100_5_$1/*:ext.grid.column.DateColumn*/ =AS3.cast(Ext.grid.column.Date,{});
    dateColumn_100_5_$1.stateId =net.jangaroo.ext.Exml.asString( ModeratedItemsView.LAST_COMPLAINT_DATE_ID);
    dateColumn_100_5_$1.header = "";
    dateColumn_100_5_$1.sortable = true;
    dateColumn_100_5_$1.renderer = com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.groupRenderer;
    dateColumn_100_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    AS3.setBindable(dateColumn_100_5_$1,"hidden" , true);
    AS3.setBindable(dateColumn_100_5_$1,"width" , 80);
    config_$1.columns = [es_ComplaintColumn_61_5_$1, es_ContributionTypeColumn_62_5_$1, gridColumn_63_5_$1, gridColumn_71_5_$1, actionColumn_78_5_$1, gridColumn_91_5_$1, dateColumn_100_5_$1];
    var selection_RowModel_109_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_109_5_$1.mode = "SINGLE";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_109_5_$1);
    var gridView_112_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_112_5_$1.stripeRows = true;
    AS3.setBindable(gridView_112_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_empty')));
    gridView_112_5_$1.loadMask = true;
    gridView_112_5_$1.deferEmptyText = false;
    gridView_112_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    gridView_112_5_$1["getRowClass"] =AS3.bind( this,"handleRowStyle");
    config_$1["viewConfig"] = gridView_112_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$H1hI(config_$1);
  }/*

    [Bindable]
    public var moderationContributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderatedItemsView",
      constructor: ModeratedItemsView$,
      super$H1hI: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderationContributionAdministration: null},
      statics: {
        COMPLAINT_ID: "complaint",
        TYPE_ID: "type",
        USER_ID: "user",
        TEXT_ID: "text",
        PRIORITIZED_ID: "prioritized",
        CREATION_DATE_ID: "creationDate",
        LAST_COMPLAINT_DATE_ID: "lastComplaintDate"
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.grid.column.Action",
        "Ext.grid.column.Column",
        "Ext.grid.column.Date",
        "Ext.selection.RowModel",
        "Ext.view.Table",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.FlushBeforeSelectionChangePlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.ComplaintColumn",
        "com.coremedia.elastic.social.studio.moderation.ContributionTypeColumn"
      ]
    };
});
