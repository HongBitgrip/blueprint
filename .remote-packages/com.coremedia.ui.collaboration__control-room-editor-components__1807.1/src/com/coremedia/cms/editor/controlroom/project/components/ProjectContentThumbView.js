Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView", function(ProjectContentThumbView) {/*package com.coremedia.cms.editor.controlroom.project.components{
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataView;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions;
import com.coremedia.ui.store.DataField;
import com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectContentThumbView extends Panel{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils;
    import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentThumbView";

    public static const THUMB_DATA_VIEW_ITEM_ID:String = "thumbDataViewItemId";

    public static const PROJECT_CONTENTS_THUMB_VIEW_CONTEXT_MENU:String = "projectContentsThumbViewContextMenu";
    private var emptyText:String;

    // called by generated constructor code
    private*/ function __initialize__()/*:void*/ {
      this.emptyText$obKK = "<div class=\"collection-view-empty-text\">" + this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_content_empty_text') + "</div>";
    }/*

    public*/function ProjectContentThumbView$(config/*:ProjectContentThumbView = null*/){if(arguments.length<=0)config=null;this.__initialize__$obKK();
    var config_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var defaults_$1/*:ProjectContentThumbView*/ =AS3.cast(ProjectContentThumbView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    AS3.setBindable(config_$1,"maxHeight" , 340.0);
    var ui_BEMPlugin_66_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_66_5_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_66_5_$1,"modifier" , com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_NO_VALIDATION);
    config_$1.plugins = [ui_BEMPlugin_66_5_$1];
    var collab_ProjectContentThumbDataView_70_5_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataView*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataView,{});
    collab_ProjectContentThumbDataView_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentThumbView.THUMB_DATA_VIEW_ITEM_ID);
    collab_ProjectContentThumbDataView_70_5_$1.dragDDGroup = "ContentLinkDD";
    AS3.setBindable(collab_ProjectContentThumbDataView_70_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.emptyText$obKK));
    AS3.setBindable(collab_ProjectContentThumbDataView_70_5_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    AS3.setBindable(collab_ProjectContentThumbDataView_70_5_$1,"bindTo" , AS3.getBindable(config,"contentsValueExpression"));
    var ui_BEMMixin_76_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_76_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);

    delete ui_BEMMixin_76_9_$1['xtype'];
    delete ui_BEMMixin_76_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(collab_ProjectContentThumbDataView_70_5_$1, ui_BEMMixin_76_9_$1);
    var ui_ContextMenuPlugin_79_9_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var collab_ProjectContentContextMenu_81_13_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu,{});
    AS3.setBindable(collab_ProjectContentContextMenu_81_13_$1,"project" , AS3.getBindable(config,"project"));
    collab_ProjectContentContextMenu_81_13_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentThumbView.PROJECT_CONTENTS_THUMB_VIEW_CONTEXT_MENU);
    AS3.setBindable(collab_ProjectContentContextMenu_81_13_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    AS3.setBindable(ui_ContextMenuPlugin_79_9_$1,"contextMenu" , collab_ProjectContentContextMenu_81_13_$1);
    collab_ProjectContentThumbDataView_70_5_$1.plugins = [ui_ContextMenuPlugin_79_9_$1];
    collab_ProjectContentThumbDataView_70_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [collab_ProjectContentThumbDataView_70_5_$1];
    var editor_LinkListDropAreaWithSuggestions_90_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions,{});
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"dock" , "bottom");
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    editor_LinkListDropAreaWithSuggestions_90_5_$1.suggestionsTemplate = com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils.getProjectContentSuggestionsTemplate();
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"ddGroups" , ['ContentDD', 'ContentLinkDD']);
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"handler" , AS3.getBindable(config,"dropAreaHandler"));
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"appendOnDrop" , false);
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"dropHandler" ,AS3.bind( this,"handleDropAreaDrop"));
    var ui_DataField_98_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_98_9_$1.name = "path";
    ui_DataField_98_9_$1.mapping = "";
    ui_DataField_98_9_$1["convert"] = function(c/*:Content*/){return c.getPath();};
    ui_DataField_98_9_$1.encode = false;
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"extraFields" , [ui_DataField_98_9_$1]);
    var ui_BEMMixin_104_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_104_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_104_9_$1['xtype'];
    delete ui_BEMMixin_104_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_LinkListDropAreaWithSuggestions_90_5_$1, ui_BEMMixin_104_9_$1);
    var editor_SearchContentLinkSuggester_107_9_$1/*:com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester,{});
    AS3.setBindable(editor_SearchContentLinkSuggester_107_9_$1,"linkTypeName" , "Document_");
    AS3.setBindable(editor_LinkListDropAreaWithSuggestions_90_5_$1,"linkSuggester" , new com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester(editor_SearchContentLinkSuggester_107_9_$1));
    config_$1.dockedItems = [editor_LinkListDropAreaWithSuggestions_90_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$obKK(config_$1);
  }/*

    [Bindable]
    public var project:Project;

    [Bindable]
    public var contentsValueExpression:ValueExpression;

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    [Bindable]
    public var dropAreaHandler:Function;

    private var _linkListWrapper:MemoryLinkListWrapper;

    protected*/ function handleDropAreaDrop(contents/*:Array*/)/*:void*/ {
      AS3.getBindable(this,"selectedItemsValueExpression").setValue(contents);
    }/*

    protected*/ function getLinkListWrapper(config/*:ProjectContentThumbView*/)/*:MemoryLinkListWrapper*/ {
      if (!this._linkListWrapper$obKK) {
        var linkListWrapperCfg/*:MemoryLinkListWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
        AS3.setBindable(linkListWrapperCfg,"linksVE" , AS3.getBindable(config,"contentsValueExpression"));
        this._linkListWrapper$obKK = new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(linkListWrapperCfg);
      }
      return this._linkListWrapper$obKK;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentThumbView",
      emptyText$obKK: null,
      __initialize__$obKK: __initialize__,
      constructor: ProjectContentThumbView$,
      super$obKK: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      _linkListWrapper$obKK: null,
      handleDropAreaDrop: handleDropAreaDrop,
      getLinkListWrapper: getLinkListWrapper,
      config: {
        project: null,
        contentsValueExpression: null,
        selectedItemsValueExpression: null,
        dropAreaHandler: null
      },
      statics: {
        THUMB_DATA_VIEW_ITEM_ID: "thumbDataViewItemId",
        PROJECT_CONTENTS_THUMB_VIEW_CONTEXT_MENU: "projectContentsThumbViewContextMenu"
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper",
        "com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContextMenu",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataView"
      ]
    };
});
