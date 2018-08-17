Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer", function(ProjectContentContainer) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import ext.layout.container.CardLayout;
public class ProjectContentContainer extends ProjectContentContainerBase{

    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentContainer";

    public static const SWITCHING_CONTAINER_ITEM_ID:String = "switchingCtItemId";

    public static const THUMB_VIEW_ITEM_ID:String = "thumbViewItemId";

    public static const LIST_VIEW_ITEM_ID:String = "listViewItemId";

    public*/function ProjectContentContainer$(config/*:ProjectContentContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase,{});
    var defaults_$1/*:ProjectContentContainer*/ =AS3.cast(ProjectContentContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_SwitchingContainer_26_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_26_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContainer.SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(ui_SwitchingContainer_26_5_$1,"activeItemValueExpression" , AS3.getBindable(config,"listOrThumbsViewVE"));
    var collab_ProjectContentThumbView_29_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView,{});
    collab_ProjectContentThumbView_29_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContainer.THUMB_VIEW_ITEM_ID);
    AS3.setBindable(collab_ProjectContentThumbView_29_9_$1,"project" , AS3.getBindable(config,"project"));
    AS3.setBindable(collab_ProjectContentThumbView_29_9_$1,"selectedItemsValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    AS3.setBindable(collab_ProjectContentThumbView_29_9_$1,"contentsValueExpression" , this.getProjectContentVE(config));
    AS3.setBindable(collab_ProjectContentThumbView_29_9_$1,"dropAreaHandler" , com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase.dropAreaHandler);
    var collab_ProjectContentListView_34_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView,{});
    collab_ProjectContentListView_34_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectContentContainer.LIST_VIEW_ITEM_ID);
    AS3.setBindable(collab_ProjectContentListView_34_9_$1,"viewUi" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.DEFAULT.getSkin()));
    AS3.setBindable(collab_ProjectContentListView_34_9_$1,"project" , AS3.getBindable(config,"project"));
    collab_ProjectContentListView_34_9_$1.selectedItemsValueExpression = AS3.getBindable(config,"selectedItemsVE");
    AS3.setBindable(collab_ProjectContentListView_34_9_$1,"contentsValueExpression" , this.getProjectContentVE(config));
    AS3.setBindable(collab_ProjectContentListView_34_9_$1,"dropAreaHandler" , com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase.dropAreaHandler);
    ui_SwitchingContainer_26_5_$1.items = [collab_ProjectContentThumbView_29_9_$1, collab_ProjectContentListView_34_9_$1];
    var layout_Card_42_9_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_42_9_$1.deferredRender = true;
    AS3.setBindable(ui_SwitchingContainer_26_5_$1,"layout" , layout_Card_42_9_$1);
    config_$1.items = [ui_SwitchingContainer_26_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$21lw(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentContainer",
      constructor: ProjectContentContainer$,
      super$21lw: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SWITCHING_CONTAINER_ITEM_ID: "switchingCtItemId",
        THUMB_VIEW_ITEM_ID: "thumbViewItemId",
        LIST_VIEW_ITEM_ID: "listViewItemId"
      },
      requires: [
        "Ext.layout.container.Card",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainerBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.skins.TableViewSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentListView",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbView"
      ]
    };
});
