Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel", function(LinkListGridPanel) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import com.coremedia.ui.store.DataField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.cms.editor.sdk.actions.LinkListCopyAction;
import com.coremedia.cms.editor.sdk.actions.LinkListCutAction;
import com.coremedia.cms.editor.sdk.actions.LinkListPasteAction;
import com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction;
import com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn;
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import ext.selection.RowSelectionModel;
import com.coremedia.ui.components.StatefulTableView;
import com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.LinkListViewDragDropPlugin;
import com.coremedia.ui.plugins.BEMMixin;
/**
 Grid component of link list editor
 * /
public class LinkListGridPanel extends LinkListGridPanelBase{

    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.plugins.AnnotatedLinkListPlugin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TableViewSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListGridPanel";

    protected static const DD_GROUPS:Array =*/function DD_GROUPS$static_(){LinkListGridPanel.DD_GROUPS=( ['ContentDD', 'ContentLinkDD']);}/*;
    protected static const DRAG_GROUPS:Array =*/function DRAG_GROUPS$static_(){LinkListGridPanel.DRAG_GROUPS=( ['ContentLinkDD']);}/*;

    public*/function LinkListGridPanel$(config/*:LinkListGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase,{});
    var defaults_$1/*:LinkListGridPanel*/ =AS3.cast(LinkListGridPanel,{});
    var ui_DataField_96_7_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_96_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase.DATA_FIELD_IS_ANNOTATED);
    ui_DataField_96_7_$1.mapping = "";
    ui_DataField_96_7_$1["convert"] =AS3.bind( this,"isAnnotated");
    ui_DataField_96_7_$1.ifUnreadable = "";
    var ui_DataField_100_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_100_7_$1.name = "thumbnailImage";
    ui_DataField_100_7_$1.mapping = "";
    ui_DataField_100_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer.convertThumbnail;
    ui_DataField_100_7_$1.ifUnreadable = "";
    var ui_DataField_104_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_104_7_$1.name = "type";
    ui_DataField_104_7_$1.mapping = "type.name";
    ui_DataField_104_7_$1.ifError = "";
    ui_DataField_104_7_$1.ifUnreadable = "";
    ui_DataField_104_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    var ui_DataField_109_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_109_7_$1.name = "typeCls";
    ui_DataField_109_7_$1.mapping = "type";
    ui_DataField_109_7_$1.ifError = "";
    ui_DataField_109_7_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    ui_DataField_109_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    var ui_DataField_114_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_114_7_$1.name = "name";
    ui_DataField_114_7_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    ui_DataField_114_7_$1.ifError = "";
    ui_DataField_114_7_$1.sortType = function(s/*:String*/)/*:String*/{return s.toLowerCase();};
    var ui_DataField_118_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_118_7_$1.name = "status";
    ui_DataField_118_7_$1.ifUnreadable = "";
    ui_DataField_118_7_$1.ifError = "";
    ui_DataField_118_7_$1.mapping = "";
    ui_DataField_118_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus;
    var ui_DataField_123_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_123_7_$1.name = "editor";
    ui_DataField_123_7_$1.ifUnreadable = "";
    ui_DataField_123_7_$1.ifError = "";
    ui_DataField_123_7_$1.mapping = "editor.name";
    AS3.setBindable(defaults_$1,"fields" , [ui_DataField_96_7_$1, ui_DataField_100_7_$1, ui_DataField_104_7_$1, ui_DataField_109_7_$1, ui_DataField_114_7_$1, ui_DataField_118_7_$1, ui_DataField_123_7_$1]);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hideHeaders" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.NO_VALIDATION.getSkin());
    config_$1.forceFit = true;
    var ui_BEMPlugin_131_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_131_5_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_131_5_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_131_5_$1,"modifier" , this.getModifierVE());
    var editor_LinkListBindListPlugin_136_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin,{});
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"bindTo" , AS3.getBindable(config,"linkListWrapper").getVE());
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"fields" , AS3.getBindable(config,"fields"));
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"additionalFields" , AS3.getBindable(config,"additionalFields"));
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"lazy" , AS3.getBindable(config,"lazy"));
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"preventIncrementalUpdate" , true);
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"initialViewLimit" , AS3.getBindable(config,"lazy") ? (AS3.getBindable(config,"initialViewLimit") || 50) : undefined);
    AS3.setBindable(editor_LinkListBindListPlugin_136_5_$1,"viewLimitIncrement" , AS3.getBindable(config,"lazy") ? (AS3.getBindable(config,"viewLimitIncrement") || 50) : undefined);
    var ui_BindSelectionPlugin_143_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_143_5_$1,"selectedPositions" , AS3.getBindable(config,"selectedPositionsExpression"));
    AS3.setBindable(ui_BindSelectionPlugin_143_5_$1,"selectedValues" , AS3.getBindable(config,"selectedValuesExpression"));
    config_$1.plugins = [ui_BEMPlugin_131_5_$1, editor_LinkListBindListPlugin_136_5_$1, ui_BindSelectionPlugin_143_5_$1];
    var editor_LinkListCopyAction_147_5_$1/*:com.coremedia.cms.editor.sdk.actions.LinkListCopyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.LinkListCopyAction,{});
    AS3.setBindable(editor_LinkListCopyAction_147_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_copyToClipboard_text')));
    AS3.setBindable(editor_LinkListCopyAction_147_5_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_copyToClipboard_tooltip'));
    editor_LinkListCopyAction_147_5_$1.linkListWrapper = AS3.getBindable(config,"linkListWrapper");
    editor_LinkListCopyAction_147_5_$1.selectedValuesExpression = AS3.getBindable(config,"selectedValuesExpression");
    var editor_LinkListCutAction_151_5_$1/*:com.coremedia.cms.editor.sdk.actions.LinkListCutAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.LinkListCutAction,{});
    AS3.setBindable(editor_LinkListCutAction_151_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_cutToClipboard_text')));
    AS3.setBindable(editor_LinkListCutAction_151_5_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_cutToClipboard_tooltip'));
    editor_LinkListCutAction_151_5_$1.linkListWrapper = AS3.getBindable(config,"linkListWrapper");
    editor_LinkListCutAction_151_5_$1.selectedValuesExpression = AS3.getBindable(config,"selectedValuesExpression");
    editor_LinkListCutAction_151_5_$1.selectedPositionsExpression = AS3.getBindable(config,"selectedPositionsExpression");
    var editor_LinkListPasteAction_156_5_$1/*:com.coremedia.cms.editor.sdk.actions.LinkListPasteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.LinkListPasteAction,{});
    AS3.setBindable(editor_LinkListPasteAction_156_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_text')));
    AS3.setBindable(editor_LinkListPasteAction_156_5_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_pasteFromClipboard_tooltip'));
    editor_LinkListPasteAction_156_5_$1.linkListWrapper = AS3.getBindable(config,"linkListWrapper");
    editor_LinkListPasteAction_156_5_$1.selectedValuesExpression = AS3.getBindable(config,"selectedValuesExpression");
    editor_LinkListPasteAction_156_5_$1.replace = AS3.getBindable(config,"replaceOnDrop");
    var editor_LinkListRemoveAction_161_5_$1/*:com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction,{});
    AS3.setBindable(editor_LinkListRemoveAction_161_5_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_text')));
    AS3.setBindable(editor_LinkListRemoveAction_161_5_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_deleteSelectedLinks_tooltip'));
    editor_LinkListRemoveAction_161_5_$1.linkListWrapper = AS3.getBindable(config,"linkListWrapper");
    editor_LinkListRemoveAction_161_5_$1.selectedValuesExpression = AS3.getBindable(config,"selectedValuesExpression");
    editor_LinkListRemoveAction_161_5_$1.selectedPositionsExpression = AS3.getBindable(config,"selectedPositionsExpression");
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.actions.LinkListCopyAction(editor_LinkListCopyAction_147_5_$1), new com.coremedia.cms.editor.sdk.actions.LinkListCutAction(editor_LinkListCutAction_151_5_$1), new com.coremedia.cms.editor.sdk.actions.LinkListPasteAction(editor_LinkListPasteAction_156_5_$1), new com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction(editor_LinkListRemoveAction_161_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_ThumbnailColumn_168_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn,{});
    AS3.setBindable(editor_ThumbnailColumn_168_5_$1,"hidden" , !AS3.getBindable(config,"showThumbnails"));
    var editor_TypeIconColumn_169_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn,{});
    var editor_NameColumn_170_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.NameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.NameColumn,{});
    editor_NameColumn_170_5_$1.flex = 1.0;
    var editor_StatusColumn_171_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    config_$1.columns = [editor_ThumbnailColumn_168_5_$1, editor_TypeIconColumn_169_5_$1, editor_NameColumn_170_5_$1, editor_StatusColumn_171_5_$1];
    var selection_RowModel_174_5_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_174_5_$1.mode = "MULTI";
    config_$1.selModel = new Ext.selection.RowModel(selection_RowModel_174_5_$1);
    var ui_StatefulTableView_177_5_$1/*:com.coremedia.ui.components.StatefulTableView*/ =AS3.cast(com.coremedia.ui.components.StatefulTableView,{});
    ui_StatefulTableView_177_5_$1.deferEmptyText = false;
    ui_StatefulTableView_177_5_$1.stripeRows =AS3.is( AS3.getBindable(config,"viewStripeRows"),  Boolean) ? AS3.getBindable(config,"viewStripeRows") : false;
    ui_StatefulTableView_177_5_$1.ui =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"viewUi") || com.coremedia.ui.skins.TableViewSkin.DEFAULT.getSkin());
    ui_StatefulTableView_177_5_$1.trackOver = true;
    var editor_AriaVisibilityPlugin_182_9_$1/*:com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPlugin,{});
    AS3.setBindable(editor_AriaVisibilityPlugin_182_9_$1,"bindTo" , AS3.getBindable(config,"linkListWrapper").getVE());
    var ui_BindPropertyPlugin_183_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_183_9_$1.componentProperty = "readOnly";
    ui_BindPropertyPlugin_183_9_$1.bindTo = AS3.getBindable(config,"readOnlyValueExpression") || com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    var editor_LinkListViewDragDropPlugin_185_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.LinkListViewDragDropPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.LinkListViewDragDropPlugin,{});
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"linkListWrapper" , AS3.getBindable(config,"linkListWrapper"));
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"dragGroups" , LinkListGridPanel.DRAG_GROUPS);
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"dropGroups" , LinkListGridPanel.DD_GROUPS);
    editor_LinkListViewDragDropPlugin_185_9_$1.enableDrag = AS3.getBindable(config,"viewEnableDrag") !== false;
    editor_LinkListViewDragDropPlugin_185_9_$1.enableDrop = AS3.getBindable(config,"viewEnableDrop") !== false;
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"htmlFeedback" , AS3.getBindable(config,"htmlFeedback"));
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"replaceOnDrop" , AS3.getBindable(config,"replaceOnDrop"));
    AS3.setBindable(editor_LinkListViewDragDropPlugin_185_9_$1,"readOnlyValueExpression" , AS3.getBindable(config,"readOnlyValueExpression"));
    ui_StatefulTableView_177_5_$1.plugins = [editor_AriaVisibilityPlugin_182_9_$1, ui_BindPropertyPlugin_183_9_$1, editor_LinkListViewDragDropPlugin_185_9_$1];
    config_$1.viewConfig = ui_StatefulTableView_177_5_$1;
    var local_LinkListDropArea_197_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea,{});
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"linkListWrapper" , AS3.getBindable(config,"linkListWrapper"));
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"ddGroups" , LinkListGridPanel.DD_GROUPS);
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"handler" , AS3.getBindable(config,"dropAreaHandler"));
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"readOnlyValueExpression" , AS3.getBindable(config,"readOnlyValueExpression"));
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dropAreaIconCls")));
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dropAreaText")));
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"appendOnDrop" , false);
    AS3.setBindable(local_LinkListDropArea_197_5_$1,"dropHandler" ,AS3.bind( this,"handleDropAreaDrop"));
    var ui_BEMMixin_206_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_206_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_206_9_$1['xtype'];
    delete ui_BEMMixin_206_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(local_LinkListDropArea_197_5_$1, ui_BEMMixin_206_9_$1);
    config_$1.dropArea = local_LinkListDropArea_197_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4$rp(config_$1);
  }/*


    /**
     * Determines whether the items of this grid panel should be loaded lazily.
     * /
    [Bindable]
    public var lazy:Boolean;

    /**
     * The initial limit for the number of Contents for which to create records in the store.
     * This avoids big and sluggish DOM rendering.
     *  When the user scrolls to the end of the list, the view limit is automatically incremented by the
     * value given in config option &lt;code>viewLimitIncrement&lt;/code>.
     * /
    [Bindable]
    public var initialViewLimit:Number;

    /**
     * The maximum number of additional records to create every time the user scrolls to the end of
     * the list. Default is 50.
     * /
    [Bindable]
    public var viewLimitIncrement:Number;

    [Bindable]
    public var dropAreaHandler:Function;

    [Bindable]
    public var dropAreaIconCls:String;

    [Bindable]
    public var dropAreaText:String;

    /**
     * The data fields to be added to the store underlying the link list grid view..
     * Elements of the array are instances of datafield.
     * /
    [Bindable]
    public var additionalFields:Array;

    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    [Bindable]
    public var viewStripeRows:Boolean;

    [Bindable]
    public var viewUi:String;

    [Bindable]
    public var viewEnableDrag:Boolean;

    [Bindable]
    public var viewEnableDrop:Boolean;

    [Bindable]
    public var htmlFeedback:Function;

    [Bindable]
    public var fields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListGridPanel",
      constructor: LinkListGridPanel$,
      super$4$rp: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        lazy: false,
        initialViewLimit: NaN,
        viewLimitIncrement: NaN,
        dropAreaHandler: null,
        dropAreaIconCls: null,
        dropAreaText: null,
        additionalFields: null,
        showThumbnails: false,
        viewStripeRows: false,
        viewUi: null,
        viewEnableDrag: false,
        viewEnableDrop: false,
        htmlFeedback: null,
        fields: null
      },
      statics: {
        DD_GROUPS: undefined,
        DRAG_GROUPS: undefined,
        __initStatics__: function() {
          DD_GROUPS$static_();
          DRAG_GROUPS$static_();
        }
      },
      requires: [
        "Ext.selection.RowModel",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanelBase",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.components.StatefulTableView",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.LinkListCopyAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListCutAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction",
        "com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "com.coremedia.cms.editor.sdk.plugins.AriaVisibilityPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.LinkListViewDragDropPlugin",
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer"
      ]
    };
});
