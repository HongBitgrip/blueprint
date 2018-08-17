Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.UserList", function(UserList) {/*package com.coremedia.elastic.social.studio.usermanagement.list{
import com.coremedia.elastic.social.studio.usermanagement.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPlugin;
import ext.grid.column.Column;
import ext.selection.RowSelectionModel;
import ext.view.TableView;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserList extends UserListBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.UserPropertyNames;
    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userList";

    public*/function UserList$(config/*:UserList = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.list.UserListBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.list.UserListBase,{});
    var defaults_$1/*:UserList*/ =AS3.cast(UserList,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.autoShow = true;
    var ui_BindListPlugin_32_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_34_9_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_34_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    var data_AutoField_35_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_35_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.GIVENNAME);
    var data_AutoField_36_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_36_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE);
    var data_AutoField_37_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_37_9_$1.name = "imageUrl";
    data_AutoField_37_9_$1.mapping = "image.uri";
    var data_AutoField_39_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_39_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.SURNAME);
    var data_AutoField_40_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_40_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    var data_AutoField_41_9_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_41_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    AS3.setBindable(ui_BindListPlugin_32_5_$1,"fields" , [data_AutoField_34_9_$1, data_AutoField_35_9_$1, data_AutoField_36_9_$1, data_AutoField_37_9_$1, data_AutoField_39_9_$1, data_AutoField_40_9_$1, data_AutoField_41_9_$1]);
    var ui_ValueExpression_44_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_44_9_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_RESULT));
    AS3.setBindable(ui_ValueExpression_44_9_$1,"context" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(ui_BindListPlugin_32_5_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_44_9_$1));
    var es_AnonymousUserFilterPlugin_49_5_$1/*:com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPlugin*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPlugin,{});
    AS3.setBindable(es_AnonymousUserFilterPlugin_49_5_$1,"valueExpression" , this.getSearchResultValueExpression(AS3.getBindable(config,"moderation")));
    config_$1.plugins = [ui_BindListPlugin_32_5_$1, es_AnonymousUserFilterPlugin_49_5_$1];
    var gridColumn_52_5_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_52_5_$1.stateId = "image";
    gridColumn_52_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_grid_column_image'));
    gridColumn_52_5_$1.sortable = false;
    gridColumn_52_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE);
    gridColumn_52_5_$1.menuDisabled = true;
    gridColumn_52_5_$1.renderer = com.coremedia.elastic.social.studio.usermanagement.list.UserListBase.imageRenderer;
    AS3.setBindable(gridColumn_52_5_$1,"width" , 55);
    var gridColumn_59_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_59_5_$1.stateId = "username";
    gridColumn_59_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_grid_column_username'));
    gridColumn_59_5_$1.sortable = false;
    gridColumn_59_5_$1.menuDisabled = true;
    gridColumn_59_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    var gridColumn_64_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_64_5_$1.stateId = "name";
    gridColumn_64_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_grid_column_name'));
    gridColumn_64_5_$1.sortable = false;
    gridColumn_64_5_$1.menuDisabled = true;
    gridColumn_64_5_$1.renderer = com.coremedia.elastic.social.studio.usermanagement.list.UserListBase.nameRenderer;
    AS3.setBindable(gridColumn_64_5_$1,"width" , 150);
    var gridColumn_69_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_69_5_$1.stateId = "email";
    gridColumn_69_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_grid_column_email'));
    gridColumn_69_5_$1.sortable = false;
    gridColumn_69_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    gridColumn_69_5_$1.menuDisabled = true;
    gridColumn_69_5_$1.flex = 1.0;
    var gridColumn_75_5_$1/*: ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_75_5_$1.stateId = "state";
    gridColumn_75_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_grid_column_state'));
    gridColumn_75_5_$1.sortable = false;
    gridColumn_75_5_$1.dataIndex =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    gridColumn_75_5_$1.menuDisabled = true;
    gridColumn_75_5_$1.renderer = com.coremedia.elastic.social.studio.usermanagement.list.UserListBase.stateRenderer;
    AS3.setBindable(gridColumn_75_5_$1,"width" , 95);
    config_$1.columns = [gridColumn_52_5_$1, gridColumn_59_5_$1, gridColumn_64_5_$1, gridColumn_69_5_$1, gridColumn_75_5_$1];
    var selection_RowModel_84_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_84_5_$1.mode = "MULTI";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_84_5_$1);
    var gridView_87_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_87_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    AS3.setBindable(gridView_87_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userlist_empty')));
    gridView_87_5_$1.deferEmptyText = false;
    gridView_87_5_$1.loadMask = true;
    gridView_87_5_$1.stripeRows = true;
    config_$1["viewConfig"] = gridView_87_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$78pV(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var openUserDetailView:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.list.UserListBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userList",
      constructor: UserList$,
      super$78pV: function() {
        com.coremedia.elastic.social.studio.usermanagement.list.UserListBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        openUserDetailView: null
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.grid.column.Column",
        "Ext.selection.RowModel",
        "Ext.view.Table",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.list.UserListBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPlugin"
      ]
    };
});
