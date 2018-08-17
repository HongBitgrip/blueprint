Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView", function(ProjectContentListView) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn;
import com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn;
import com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn;
import com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectContentListView extends ProjectContentListViewBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cap.content.ContentType;
    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils;
    import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.cms.editor.sdk.util.SiteUtil;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.data.ValueExpression;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentListView";

    public static const GRID_ITEM_ID:String = "gridItemId";

    public static const PROJECT_CONTENTS_LIST_VIEW_CONTEXT_MENU:String = "projectContentsListViewContextMenu";

    public*/function ProjectContentListView$(config/*:ProjectContentListView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase,{});
    var defaults_$1/*:ProjectContentListView*/ =AS3.cast(ProjectContentListView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentListView.GRID_ITEM_ID);
    AS3.setBindable(config_$1,"ddGroup" , "ContentLinkDD");
    AS3.setBindable(config_$1,"maxHeight" , 340.0);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_content_title') + ' ' + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix'));
    config_$1.emptyText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_content_empty_text'));
    var ui_BindListPlugin_53_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_53_5_$1,"lazy" , false);
    AS3.setBindable(ui_BindListPlugin_53_5_$1,"bindTo" , AS3.getBindable(config,"contentsValueExpression"));
    var ui_DataField_56_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_56_9_$1.name = "siteName";
    ui_DataField_56_9_$1.mapping = "";
    ui_DataField_56_9_$1.ifUnreadable = "";
    ui_DataField_56_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteNameFor;
    var ui_DataField_60_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_60_9_$1.name = "siteLocale";
    ui_DataField_60_9_$1.mapping = "";
    ui_DataField_60_9_$1.ifUnreadable = "";
    ui_DataField_60_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteLocaleNameFor;
    var ui_DataField_64_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_64_9_$1.name = "typeCls";
    ui_DataField_64_9_$1.mapping = "type";
    ui_DataField_64_9_$1.sortType = function(ct/*:**/)/*:String*/{
                        if (AS3.is(ct,  com.coremedia.cap.content.ContentType)) {
                          return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(ct.getName());
                        } else {
                          return ct;
                        }
                      };
    ui_DataField_64_9_$1.ifError = "";
    ui_DataField_64_9_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    var ui_DataField_75_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_75_9_$1.name = "type";
    ui_DataField_75_9_$1.mapping = "type.name";
    ui_DataField_75_9_$1.ifError = "";
    ui_DataField_75_9_$1.ifUnreadable = "";
    ui_DataField_75_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    var ui_DataField_80_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_80_9_$1.name = "name";
    ui_DataField_80_9_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    ui_DataField_80_9_$1.encode = true;
    ui_DataField_80_9_$1.ifError = "";
    ui_DataField_80_9_$1.sortType = function(s/*:String*/)/*:String*/{return s?s.toLowerCase():s;};
    var ui_DataField_85_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_85_9_$1.name = "nameClass";
    ui_DataField_85_9_$1.ifUnreadable = "";
    ui_DataField_85_9_$1.ifError = "";
    ui_DataField_85_9_$1.mapping = "";
    ui_DataField_85_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.AccessControlUtil.calculateCSSClasses;
    var ui_DataField_90_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_90_9_$1.name = "creationDate";
    ui_DataField_90_9_$1.ifUnreadable = "";
    ui_DataField_90_9_$1.ifError = "";
    var ui_DataField_93_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_93_9_$1.name = "status";
    ui_DataField_93_9_$1.ifUnreadable = "";
    ui_DataField_93_9_$1.ifError = "";
    ui_DataField_93_9_$1.mapping = "";
    ui_DataField_93_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus;
    var ui_DataField_98_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_98_9_$1.name = "editor";
    ui_DataField_98_9_$1.ifUnreadable = "";
    ui_DataField_98_9_$1.ifError = "";
    ui_DataField_98_9_$1.mapping = "editor.name";
    var ui_DataField_102_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_102_9_$1.name = "freshness";
    ui_DataField_102_9_$1.ifUnreadable = "";
    ui_DataField_102_9_$1.ifError = "";
    ui_DataField_102_9_$1.mapping = "modificationDate";
    AS3.setBindable(ui_BindListPlugin_53_5_$1,"fields" , [ui_DataField_56_9_$1, ui_DataField_60_9_$1, ui_DataField_64_9_$1, ui_DataField_75_9_$1, ui_DataField_80_9_$1, ui_DataField_85_9_$1, ui_DataField_90_9_$1, ui_DataField_93_9_$1, ui_DataField_98_9_$1, ui_DataField_102_9_$1]);
    var ui_ContextMenuPlugin_108_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var collab_ProjectContentContextMenu_110_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu,{});
    AS3.setBindable(collab_ProjectContentContextMenu_110_9_$1,"project" , AS3.getBindable(config,"project"));
    collab_ProjectContentContextMenu_110_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentListView.PROJECT_CONTENTS_LIST_VIEW_CONTEXT_MENU);
    AS3.setBindable(collab_ProjectContentContextMenu_110_9_$1,"selectedItemsValueExpression" , config.selectedItemsValueExpression);
    AS3.setBindable(ui_ContextMenuPlugin_108_5_$1,"contextMenu" , collab_ProjectContentContextMenu_110_9_$1);
    var editor_PersistColumnConfigurationPlugin_115_5_$1/*:com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin,{});
    AS3.setBindable(editor_PersistColumnConfigurationPlugin_115_5_$1,"storeId" , "project-content-list");
    var ui_BEMPlugin_116_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_116_5_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_116_5_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_116_5_$1,"modifier" , com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_NO_VALIDATION);
    config_$1.plugins = [ui_BindListPlugin_53_5_$1, ui_ContextMenuPlugin_108_5_$1, editor_PersistColumnConfigurationPlugin_115_5_$1, ui_BEMPlugin_116_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.PREPEND;
    var collab_ProjectListViewTypeIconColumn_121_5_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectListViewTypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectListViewTypeIconColumn,{});
    AS3.setBindable(collab_ProjectListViewTypeIconColumn_121_5_$1,"showTypeName" , true);
    collab_ProjectListViewTypeIconColumn_121_5_$1.sortable = true;
    var editor_ListViewNameColumn_123_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn,{});
    editor_ListViewNameColumn_123_5_$1.sortable = true;
    editor_ListViewNameColumn_123_5_$1.flex = 1.0;
    var editor_ListViewCreationDateColumn_125_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn,{});
    editor_ListViewCreationDateColumn_125_5_$1.sortable = true;
    var editor_FreshnessColumn_126_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn,{});
    AS3.setBindable(editor_FreshnessColumn_126_5_$1,"hidden" , true);
    editor_FreshnessColumn_126_5_$1.sortable = true;
    var editor_ListViewStatusColumn_128_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn,{});
    editor_ListViewStatusColumn_128_5_$1.sortable = true;
    AS3.setBindable(config_$1,"defaultColumns" , [collab_ProjectListViewTypeIconColumn_121_5_$1, editor_ListViewNameColumn_123_5_$1, editor_ListViewCreationDateColumn_125_5_$1, editor_FreshnessColumn_126_5_$1, editor_ListViewStatusColumn_128_5_$1]);
    var editor_LinkListDropAreaWithSuggestions_131_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions,{});
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"dock" , "bottom");
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    editor_LinkListDropAreaWithSuggestions_131_5_$1.suggestionsTemplate = com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils.getProjectContentSuggestionsTemplate();
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"ddGroups" , ['ContentDD', 'ContentLinkDD']);
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"handler" , AS3.getBindable(config,"dropAreaHandler"));
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"appendOnDrop" , false);
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"dropHandler" ,AS3.bind( this,"handleDropAreaDrop"));
    var ui_DataField_139_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_139_9_$1.name = "path";
    ui_DataField_139_9_$1.mapping = "";
    ui_DataField_139_9_$1["convert"] = function(c/*:Content*/)/*:String*/{return c.getPath();};
    ui_DataField_139_9_$1.encode = false;
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"extraFields" , [ui_DataField_139_9_$1]);
    var ui_BEMMixin_145_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_145_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_145_9_$1['xtype'];
    delete ui_BEMMixin_145_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_LinkListDropAreaWithSuggestions_131_5_$1, ui_BEMMixin_145_9_$1);
    var editor_SearchContentLinkSuggester_148_9_$1/*:com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester,{});
    AS3.setBindable(editor_SearchContentLinkSuggester_148_9_$1,"linkTypeName" , "Document_");
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_131_5_$1,"linkSuggester" , new com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester(editor_SearchContentLinkSuggester_148_9_$1));
    config_$1.dockedItems = [editor_LinkListDropAreaWithSuggestions_131_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IhtA(config_$1);
  }/*

    [Bindable]
    public var project:Project;

    [Bindable]
    public var contentsValueExpression:ValueExpression;

    [Bindable]
    public var dropAreaHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentListView",
      constructor: ProjectContentListView$,
      super$IhtA: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        project: null,
        contentsValueExpression: null,
        dropAreaHandler: null
      },
      statics: {
        GRID_ITEM_ID: "gridItemId",
        PROJECT_CONTENTS_LIST_VIEW_CONTEXT_MENU: "projectContentsListViewContextMenu"
      },
      requires: [
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentListViewBase",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewCreationDateColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn",
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewStatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.FreshnessColumn",
        "com.coremedia.cms.editor.sdk.plugins.PersistColumnConfigurationPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester",
        "com.coremedia.cms.editor.sdk.util.SiteUtil",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectListViewTypeIconColumn"
      ]
    };
});
