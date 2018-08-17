Ext.define("com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField", function(NavigationLinkField) {/*package com.coremedia.blueprint.base.components.navigationlink{
import com.coremedia.blueprint.base.components.navigationlink.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import ext.toolbar.Separator;
import ext.ActionRef;

    [ResourceBundle('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
/**
 A field containing a link (or nothing). The value expression
 associated with this field should result in an array containing
 zero or one contents.
 * /
public class NavigationLinkField extends NavigationLinkFieldBase{

    import com.coremedia.cms.editor.sdk.actions.LinkListCopyAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListPasteAction;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.navigationLinkField";

    public*/function NavigationLinkField$(config/*:NavigationLinkField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase*/ =AS3.cast(com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase,{});
    var defaults_$1/*:NavigationLinkField*/ =AS3.cast(NavigationLinkField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"dropAreaHandler" ,AS3.bind( this,"openCollectionView"));
    AS3.setBindable(config_$1,"selectedValuesExpression" , this.getSelectedVE());
    AS3.setBindable(config_$1,"replaceOnDrop" , true);
    AS3.setBindable(config_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    var ui_ContextMenuPlugin_34_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_PropertyFieldContextMenu_36_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu,{});
    AS3.setBindable(editor_PropertyFieldContextMenu_36_9_$1,"selectedItemsVE" , this.getSelectedVE());
    AS3.setBindable(ui_ContextMenuPlugin_34_5_$1,"contextMenu" , editor_PropertyFieldContextMenu_36_9_$1);
    config_$1.plugins = [ui_ContextMenuPlugin_34_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var toolbar_41_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD);
    var ui_IconButton_43_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_43_9_$1.itemId = "clearParentList";
    AS3.setBindable(ui_IconButton_43_9_$1,"handler" ,AS3.bind( this,"clearList"));
    AS3.setBindable(ui_IconButton_43_9_$1,"disabled" , true);
    AS3.setBindable(ui_IconButton_43_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_icon')));
    AS3.setBindable(ui_IconButton_43_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'delete_link_btn_tooltip_text')));
    AS3.setBindable(ui_IconButton_43_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'delete_link_btn_tooltip_text'));
    var ui_IconButton_49_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_49_9_$1.itemId = "editParent";
    var editor_OpenInTabAction_51_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_51_13_$1,"contentValueExpression" , this.getListExpression(AS3.getBindable(config,"valueExpression")));
    ui_IconButton_49_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_51_13_$1);
    var tbSeparator_54_9_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_55_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_55_9_$1.itemId = "copy";
    var actionRef_57_13_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_57_13_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListCopyAction.ACTION_ID);
    ui_IconButton_55_9_$1.baseAction = actionRef_57_13_$1;
    var ui_IconButton_60_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_60_9_$1.itemId = "paste";
    var actionRef_62_13_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_62_13_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListPasteAction.ACTION_ID);
    ui_IconButton_60_9_$1.baseAction = actionRef_62_13_$1;
    toolbar_41_5_$1.items = [ui_IconButton_43_9_$1, ui_IconButton_49_9_$1, tbSeparator_54_9_$1, ui_IconButton_55_9_$1, ui_IconButton_60_9_$1];
    config_$1.tbar = toolbar_41_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SahO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.navigationLinkField",
      constructor: NavigationLinkField$,
      super$SahO: function() {
        com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase",
        "com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField_properties",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.LinkListCopyAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ]
    };
});
