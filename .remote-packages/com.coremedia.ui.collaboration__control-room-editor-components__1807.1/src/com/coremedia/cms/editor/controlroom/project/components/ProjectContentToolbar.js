Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentToolbar", function(ProjectContentToolbar) {/*package com.coremedia.cms.editor.controlroom.project.components{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.project.components.ProjectContentControlsToolbar;
import ext.toolbar.Fill;
import ext.container.Container;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProjectContentToolbar extends Toolbar{

    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentToolbar";

    public static const LIST_VIEW_ICON_BUTTON_ITEM_ID:String = "listViewIconButtonItemId";

    public static const THUMB_DATA_VIEW_ICON_BUTTON_ITEM_ID:String = "thumbDataViewIconButtonItemId";
    private var listView:Function;
    private var thumbDataView:Function;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ProjectContentToolbar*/)/*:void*/ {
      this.listView$mUKq = function ()/*:void*/ {
        AS3.getBindable(config,"listOrThumbsViewVE").setValue(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.LIST_VIEW_ITEM_ID);
      };
      this.thumbDataView$mUKq = function ()/*:void*/ {
        AS3.getBindable(config,"listOrThumbsViewVE").setValue(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.THUMB_VIEW_ITEM_ID);
      };
    }/*

    public*/function ProjectContentToolbar$(config/*:ProjectContentToolbar = null*/){if(arguments.length<=0)config=null;this.__initialize__$mUKq(config);
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:ProjectContentToolbar*/ =AS3.cast(ProjectContentToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "projectContentToolbar";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var collab_ProjectContentControlsToolbar_53_5_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectContentControlsToolbar*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentControlsToolbar,{});
    collab_ProjectContentControlsToolbar_53_5_$1.itemId = "projectContentControlsToolbar";
    AS3.setBindable(collab_ProjectContentControlsToolbar_53_5_$1,"project" , AS3.getBindable(config,"project"));
    AS3.setBindable(collab_ProjectContentControlsToolbar_53_5_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    var tbFill_56_5_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var container_57_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_57_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GROUP.getSkin());
    var ui_IconButton_59_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_59_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentToolbar.LIST_VIEW_ICON_BUTTON_ITEM_ID);
    ui_IconButton_59_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    ui_IconButton_59_9_$1.toggleGroup =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"project").getId() + '-toggle-group');
    ui_IconButton_59_9_$1.enableToggle = true;
    AS3.setBindable(ui_IconButton_59_9_$1,"pressed" , true);
    ui_IconButton_59_9_$1.allowDepress = false;
    AS3.setBindable(ui_IconButton_59_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'list_view')));
    AS3.setBindable(ui_IconButton_59_9_$1,"handler" , this.listView$mUKq);
    AS3.setBindable(ui_IconButton_59_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_listView_btn_tooltip')));
    AS3.setBindable(ui_IconButton_59_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_listView_btn_tooltip'));
    var ui_IconButton_70_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_70_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentToolbar.THUMB_DATA_VIEW_ICON_BUTTON_ITEM_ID);
    ui_IconButton_70_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_GROUPED.getSkin());
    ui_IconButton_70_9_$1.toggleGroup =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"project").getId() + '-toggle-group');
    ui_IconButton_70_9_$1.enableToggle = true;
    ui_IconButton_70_9_$1.allowDepress = false;
    AS3.setBindable(ui_IconButton_70_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'thumbnail_view')));
    AS3.setBindable(ui_IconButton_70_9_$1,"handler" , this.thumbDataView$mUKq);
    AS3.setBindable(ui_IconButton_70_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_thumbnailView_btn_tooltip')));
    AS3.setBindable(ui_IconButton_70_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SearchArea_thumbnailView_btn_tooltip'));
    container_57_5_$1.items = [ui_IconButton_59_9_$1, ui_IconButton_70_9_$1];
    var layout_HBox_82_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_57_5_$1,"layout" , layout_HBox_82_9_$1);
    config_$1.items = [collab_ProjectContentControlsToolbar_53_5_$1, tbFill_56_5_$1, container_57_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mUKq(config_$1);
  }/*

    [Bindable]
    public var project:Project;

    [Bindable]
    public var selectedItemsVE:ValueExpression;

    [Bindable]
    public var listOrThumbsViewVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentToolbar",
      listView$mUKq: null,
      thumbDataView$mUKq: null,
      __initialize__$mUKq: __initialize__,
      constructor: ProjectContentToolbar$,
      super$mUKq: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      config: {
        project: null,
        selectedItemsVE: null,
        listOrThumbsViewVE: null
      },
      statics: {
        LIST_VIEW_ICON_BUTTON_ITEM_ID: "listViewIconButtonItemId",
        THUMB_DATA_VIEW_ICON_BUTTON_ITEM_ID: "thumbDataViewIconButtonItemId"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentControlsToolbar"
      ]
    };
});
