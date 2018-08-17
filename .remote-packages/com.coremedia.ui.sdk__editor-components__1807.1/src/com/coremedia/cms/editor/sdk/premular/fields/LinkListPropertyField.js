Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField", function(LinkListPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.upload.FileDropPlugin;
import com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import ext.menu.Menu;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import ext.ActionRef;
import com.coremedia.cms.editor.sdk.actions.UndeleteAction;
import ext.layout.container.VBoxLayout;
[PublicApi]
/**

 A link list property editor. Specify the propertyName property for selecting the link list property.
 In order to change the columns that are displayed for this link list, you can configure properties fields and columns.
 If fields are given, they are added to the default fields name, status, type, and typeCls
 (representing  the name, the lifecycle status, the document type name and a style class for a document type icon, respectively).
 If columns are given, they replace the default columns. The default columns are instances of typeIconColumn, nameColumn, and
 statusColumn.
 A <code>LinkListPropertyField</code> is a context provider defining the following context variables:
 <ul>
 <li><code>SELECTED_ITEMS_VARIABLE_NAME</code></li>
 <li><code>SELECTED_POSITIONS_VARIABLE_NAME</code></li>
 </ul>

 @see typeIconColumn
 @see nameColumn
 @see statusColumn

 * /
public class LinkListPropertyField extends LinkListPropertyFieldBase{

    import com.coremedia.cms.editor.sdk.actions.LinkListCopyAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListCutAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListPasteAction;
    import com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction;
    import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
    import com.coremedia.cms.editor.sdk.util.ILinkSuggester;
    import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
    import com.coremedia.ui.data.ValueExpression;

    import ext.XTemplate;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListPropertyField";

    /**
     * The itemId of the grid
     * /
    public static const GRID_ITEM_ID:String = "linkGrid";

    /**
     * The itemId of the drop area
     * /
    public static const DROPAREA_ITEM_ID:String = "dropArea";

    /**
     * The itemId of the delete button in the toolbar
     * /
    public static const DELETE_BUTTON_ITEM_ID:String = "delete";

    /**
     * The itemId of the open in tab button in the toolbar
     * /
    public static const OPEN_BUTTON_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the cut button in the toolbar
     * /
    public static const CUT_BUTTON_ITEM_ID:String = "cut";

    /**
     * The itemId of the copy button in the toolbar
     * /
    public static const COPY_BUTTON_ITEM_ID:String = "copy";

    /**
     * The itemId of the paste button in the toolbar
     * /
    public static const PASTE_BUTTON_ITEM_ID:String = "paste";

    /**
     * The itemId of the open in tab menu item in the context menu
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the show in library item in the context menu
     * /
    public static const SHOW_IN_LIBRARY_MENU_ITEM_ID:String = "showInLibrary";

    /**
     * The itemId of the copy button in the context menu
     * /
    public static const COPY_BUTTON_MENU_ITEM_ID:String = "copy";

    /**
     * The itemId of the paste button in the context menu
     * /
    public static const PASTE_BUTTON_MENU_ITEM_ID:String = "paste";

    /**
     * The itemId of the restore from trash button in the toolbar
     * /
    public static const UNDELETE_MENU_ITEM_ID:String = "undelete";

    /**
     * The itemId of the remove from list button in the context menu
     * /
    public static const REMOVE_FROM_LIST_MENU_ITEM_ID:String = "delete";

    /**
     * The context property name for the selected items.
     * The context value is an array of contents.
     * /
    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    /**
     * The context property name for the selected positions.
     * The context value is an array of numbers.
     * /
    public static const SELECTED_POSITIONS_VARIABLE_NAME:String = "selectedPositions";

    /**
     * The context property name for the content that the linklist is bound to.
     * The context value is the content from the bindTo value expression.
     * /
    public static const BOUND_CONTENT_VARIABLE_NAME:String = "linkListStoringContent";

    /**
     * The context property name for the force read only property.
     * The context value is the boolean value from the force read only value expression.
     * /
    public static const FORCE_READ_ONLY_VARIABLE_NAME:String = "linkListForceReadOnly";

    /**
     * The itemId of the link list toolbar
     * /
    public static const TOOLBAR_ITEM_ID:String = "linkListPropertyFieldToolbar";

    /**
     * Optional custom template to display link suggestions in the drop area. Use the default data fields 'name', 'typeCls',
     * 'typeName', 'lifecycleStatus', 'lifecycleStatusCls', 'siteName', and 'siteLocale' to render
     * suggestions and search results differently or add custom data fields.
     * @see linkSuggesterTemplateExtraFields linkSuggesterTemplateExtraFields to add custom data fields
     * /
    [Bindable]
    public var linkSuggesterTemplate:XTemplate;

    /**
     * Additional data fields for the custom template to display link suggestions in the drop area.
     * @see linkSuggesterTemplate linkSuggesterTemplate for available default fields
     * /
    [Bindable]
    public var linkSuggesterTemplateExtraFields:Array;

    /**
     * Custom strategy to compute link suggestions in the drop area
     * /
    [Bindable]
    public var linkSuggester:ILinkSuggester;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The Linklist Wrapper
     * /
    [Bindable]
    public var linkListWrapper:ILinkListWrapper;

    /**
     * The row widget
     * /
    [Bindable]
    public var rowWidget:Object;

    public*/function LinkListPropertyField$(config/*:LinkListPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase,{});
    var defaults_$1/*:LinkListPropertyField*/ =AS3.cast(LinkListPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( '#' + LinkListPropertyField.GRID_ITEM_ID + ' gridview'));
    var editor_SetPropertyLabelPlugin_243_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_243_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_243_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName") || AS3.getBindable(config,"propertyName"));
    var editor_FileDropPlugin_245_5_$1/*:com.coremedia.cms.editor.sdk.upload.FileDropPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.FileDropPlugin,{});
    AS3.setBindable(editor_FileDropPlugin_245_5_$1,"folderValueExpression" , this.getUploadFolderExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"uploadFolderValueExpression")));
    AS3.setBindable(editor_FileDropPlugin_245_5_$1,"onDragEndHandler" ,AS3.bind( this,"onFileDragEnd"));
    AS3.setBindable(editor_FileDropPlugin_245_5_$1,"onDragOverHandler" ,AS3.bind( this,"onFileDragOver"));
    AS3.setBindable(editor_FileDropPlugin_245_5_$1,"dropHandler" ,AS3.bind( this,"linkListFileDropHandler"));
    AS3.setBindable(editor_FileDropPlugin_245_5_$1,"uploadDisabledExpression" , this.getUploadDisabledValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"uploadFolderValueExpression")));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_243_5_$1, editor_FileDropPlugin_245_5_$1];
    var editor_LinkListPropertyFieldGridPanel_252_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel,{});
    editor_LinkListPropertyFieldGridPanel_252_5_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.GRID_ITEM_ID);
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"dropAreaText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions_text')));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"linkSuggesterTemplateExtraFields" , AS3.getBindable(config,"linkSuggesterTemplateExtraFields"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"linkSuggesterTemplate" , AS3.getBindable(config,"linkSuggesterTemplate"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"linkSuggester" , AS3.getBindable(config,"linkSuggester"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"propertyFieldName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName")));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"showThumbnails" , AS3.getBindable(config,"showThumbnails"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"selectedPositionsExpression" , this.getSelectedPositionsExpression());
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"selectedValuesExpression" , this.getSelectedValuesExpression());
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"maxCardinality" , AS3.getBindable(config,"maxCardinality"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"additionalFields" , AS3.getBindable(config,"fields"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    editor_LinkListPropertyFieldGridPanel_252_5_$1.columns = AS3.getBindable(config,"columns");
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"rowWidget" , AS3.getBindable(config,"rowWidget"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"rowWidgetsAnnotatedPredicates" , AS3.getBindable(config,"rowWidgetsAnnotatedPredicates"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"linkListWrapper" , AS3.getBindable(config,"linkListWrapper"));
    AS3.setBindable(editor_LinkListPropertyFieldGridPanel_252_5_$1,"openCollectionViewHandler" , AS3.getBindable(config,"openCollectionViewHandler"));
    var editor_LinkListPropertyFieldToolbar_274_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar,{});
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_LinkListPropertyFieldToolbar_274_9_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.TOOLBAR_ITEM_ID);
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"maxCardinality" , AS3.getBindable(config,"maxCardinality"));
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"additionalToolbarItems" , AS3.getBindable(config,"additionalToolbarItems"));
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"selectedPositionsExpression" , this.getSelectedPositionsExpression());
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"selectedValuesExpression" , this.getSelectedValuesExpression());
    AS3.setBindable(editor_LinkListPropertyFieldToolbar_274_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_LinkListPropertyFieldGridPanel_252_5_$1.tbar = editor_LinkListPropertyFieldToolbar_274_9_$1;
    var editor_AriaLabelPlugin_285_9_$1/*:com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin,{});
    AS3.setBindable(editor_AriaLabelPlugin_285_9_$1,"parent" , com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.xtype);
    AS3.setBindable(editor_AriaLabelPlugin_285_9_$1,"suffix" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_suffix')));
    var editor_SetPropertyEmptyTextPlugin_287_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_287_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_287_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName") || AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_289_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_289_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_289_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName") || AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_289_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_PropertyFieldPlugin_293_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_293_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyFieldName") || AS3.getBindable(config,"propertyName")));
    var ui_ContextMenuPlugin_294_9_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var menu_296_13_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_296_13_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_298_17_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    menu_296_13_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_298_17_$1];
    var menuItem_301_17_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_301_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_303_21_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_303_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_301_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_303_21_$1);
    var menuItem_306_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_306_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.SHOW_IN_LIBRARY_MENU_ITEM_ID);
    var editor_ShowInRepositoryAction_308_21_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_308_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_306_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_308_21_$1);
    var menuSeparator_312_17_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_313_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_313_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.CUT_BUTTON_ITEM_ID);
    var actionRef_315_21_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_315_21_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListCutAction.ACTION_ID);
    menuItem_313_17_$1.baseAction = actionRef_315_21_$1;
    var menuItem_318_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_318_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.COPY_BUTTON_ITEM_ID);
    var actionRef_320_21_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_320_21_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListCopyAction.ACTION_ID);
    menuItem_318_17_$1.baseAction = actionRef_320_21_$1;
    var menuItem_323_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_323_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.PASTE_BUTTON_ITEM_ID);
    var actionRef_325_21_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_325_21_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListPasteAction.ACTION_ID);
    menuItem_323_17_$1.baseAction = actionRef_325_21_$1;
    var menuSeparator_328_17_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_329_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_329_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.UNDELETE_MENU_ITEM_ID);
    var editor_UndeleteAction_331_21_$1/*:com.coremedia.cms.editor.sdk.actions.UndeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteAction,{});
    AS3.setBindable(editor_UndeleteAction_331_21_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_329_17_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.UndeleteAction(editor_UndeleteAction_331_21_$1);
    var menuSeparator_334_17_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_335_17_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_335_17_$1.itemId =net.jangaroo.ext.Exml.asString( LinkListPropertyField.REMOVE_FROM_LIST_MENU_ITEM_ID);
    var actionRef_337_21_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_337_21_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction.ACTION_ID);
    menuItem_335_17_$1.baseAction = actionRef_337_21_$1;
    menu_296_13_$1.items = [menuItem_301_17_$1, menuItem_306_17_$1, menuSeparator_312_17_$1, menuItem_313_17_$1, menuItem_318_17_$1, menuItem_323_17_$1, menuSeparator_328_17_$1, menuItem_329_17_$1, menuSeparator_334_17_$1, menuItem_335_17_$1];
    AS3.setBindable(ui_ContextMenuPlugin_294_9_$1,"contextMenu" , menu_296_13_$1);
    editor_LinkListPropertyFieldGridPanel_252_5_$1.plugins = [editor_AriaLabelPlugin_285_9_$1, editor_SetPropertyEmptyTextPlugin_287_9_$1, editor_ShowIssuesPlugin_289_9_$1, editor_PropertyFieldPlugin_293_9_$1, ui_ContextMenuPlugin_294_9_$1];
    editor_LinkListPropertyFieldGridPanel_252_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [editor_LinkListPropertyFieldGridPanel_252_5_$1];
    var layout_VBox_348_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_348_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_348_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$k$2w(config_$1);
  }/*

    /**
     The name under which to register this property field.
     Defaults to propertyName.
     * /
    [Bindable]
    public var propertyFieldName:String;


    /** Optional. The maximum cardinality that the link list property should hold.
   If not specified the maximum cardinality of the property descriptor of the link list property will be applied.
     * /
    [Bindable]
    public var maxCardinality:int;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     The data fields to be added to the store underlying the link list grid view.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;


    /**
     The columns shown in the link list grid view. Elements of the
     array are instances of Column. Unless additional fields are defined
     in the fields property, the columns may only refer to the data fields
     name, status, type, and typeCls.

     @see ext.grid.column.Column
     * /
    [Bindable]
    public var columns:Array;


    /**
     The menu items of the context menu in the link list

     @see ext.menu.Item
     * /
    [Bindable]
    public var contextMenuItems:Array;


    /**
     An optional extra CSS class that will be added to the link list grid
     * /
    [Bindable]
    public var gridCtCls:String;


    /**
     A handler, to open the collection view in a different state. If not set, the collection view
     opens per default in search mode for the corresponding content type.
     Signature: function(linkListTargetType:ContentType, sourceContent:Content):void
     * /
    [Bindable]
    public var openCollectionViewHandler:Function;


    /* Additional items that are appended to the toolbar * /
    [Bindable]
    public var additionalToolbarItems:Array;


    /* Set to true to enable the thumbnail preview column * /
    [Bindable]
    public var showThumbnails:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListPropertyField",
      constructor: LinkListPropertyField$,
      super$k$2w: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        linkSuggesterTemplate: null,
        linkSuggesterTemplateExtraFields: null,
        linkSuggester: null,
        forceReadOnlyValueExpression: null,
        linkListWrapper: null,
        rowWidget: null,
        propertyFieldName: null,
        maxCardinality: 0,
        hideIssues: false,
        fields: null,
        columns: null,
        contextMenuItems: null,
        gridCtCls: null,
        openCollectionViewHandler: null,
        additionalToolbarItems: null,
        showThumbnails: false
      },
      statics: {
        GRID_ITEM_ID: "linkGrid",
        DROPAREA_ITEM_ID: "dropArea",
        DELETE_BUTTON_ITEM_ID: "delete",
        OPEN_BUTTON_ITEM_ID: "openInTab",
        CUT_BUTTON_ITEM_ID: "cut",
        COPY_BUTTON_ITEM_ID: "copy",
        PASTE_BUTTON_ITEM_ID: "paste",
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        SHOW_IN_LIBRARY_MENU_ITEM_ID: "showInLibrary",
        COPY_BUTTON_MENU_ITEM_ID: "copy",
        PASTE_BUTTON_MENU_ITEM_ID: "paste",
        UNDELETE_MENU_ITEM_ID: "undelete",
        REMOVE_FROM_LIST_MENU_ITEM_ID: "delete",
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems",
        SELECTED_POSITIONS_VARIABLE_NAME: "selectedPositions",
        BOUND_CONTENT_VARIABLE_NAME: "linkListStoringContent",
        FORCE_READ_ONLY_VARIABLE_NAME: "linkListForceReadOnly",
        TOOLBAR_ITEM_ID: "linkListPropertyFieldToolbar"
      },
      requires: [
        "Ext.layout.container.VBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.LinkListCopyAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListCutAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.plugins.AriaLabelPlugin",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldToolbar",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.upload.FileDropPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
