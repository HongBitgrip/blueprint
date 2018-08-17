Ext.define("com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyField", function(StringListPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import ext.grid.GridPanel;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import ext.grid.column.Column;
import ext.form.field.TextField;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.selection.RowSelectionModel;
import com.coremedia.ui.components.StatefulTableView;
import ext.container.Container;
import com.coremedia.ui.plugins.BEMMixin;
import ext.layout.container.FitLayout;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
[PublicApi]
/**
 Property editor for a list of strings based on editorgrid to show the elements of the list and a textfield below
 to add elements to the list. Elements are added on clicking enter button or on blur.
 Property
 Duplicate entries are allowed in the list.
 * /
public class StringListPropertyField extends StringListPropertyFieldBase{

    import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
    import com.coremedia.cms.editor.sdk.premular.Premular;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.TextfieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.stringListPropertyField";

    public static const DELETE_BUTTON_ITEM_ID:String = "delete";

    public static const MOVE_UP_BUTTON_ITEM_ID:String = "moveUp";

    public static const MOVE_DOWN_BUTTON_ITEM_ID:String = "moveDown";
    private var selectedPositions:ValueExpression;

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:StringListPropertyField*/)/*:void*/ {
      this.selectedPositions$VEf3 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }/*

    public*/function StringListPropertyField$(config/*:StringListPropertyField = null*/){if(arguments.length<=0)config=null;this.__initialize__$VEf3(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase,{});
    var defaults_$1/*:StringListPropertyField*/ =AS3.cast(StringListPropertyField,{});
    AS3.setBindable(defaults_$1,"textFieldEmptyText" , 'Enter ' + AS3.getBindable(config,"propertyName") + '.');
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_ShowIssuesPlugin_64_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_64_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_64_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_64_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_PropertyFieldPlugin_67_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_67_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_SetPropertyLabelPlugin_68_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_68_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_68_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_ShowIssuesPlugin_64_5_$1, editor_PropertyFieldPlugin_67_5_$1, editor_SetPropertyLabelPlugin_68_5_$1];
    var gridPanel_72_5_$1/*:ext.grid.GridPanel*/ =AS3.cast(Ext.grid.Panel,{});
    gridPanel_72_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase.GRID_ITEM_ID);
    gridPanel_72_5_$1.enableColumnMove = false;
    AS3.setBindable(gridPanel_72_5_$1,"hideHeaders" , true);
    gridPanel_72_5_$1.anchor = "100%";
    var ui_BEMPlugin_77_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_77_9_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_77_9_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_77_9_$1,"modifier" , this.getModifierVE(config));
    var ui_BindListPlugin_80_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_80_9_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName")));
    AS3.setBindable(ui_BindListPlugin_80_9_$1,"transformer" ,AS3.bind( this,"stringListToObjectTransformer"));
    AS3.setBindable(ui_BindListPlugin_80_9_$1,"ifUndefined" , []);
    AS3.setBindable(ui_BindListPlugin_80_9_$1,"idProperty" , "value");
    var ui_DataField_85_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_85_13_$1.name = "colName";
    ui_DataField_85_13_$1.mapping = "value";
    ui_DataField_85_13_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_80_9_$1,"fields" , [ui_DataField_85_13_$1]);
    var ui_BindSelectionPlugin_90_9_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_90_9_$1,"selectedPositions" , this.selectedPositions$VEf3);
    AS3.setBindable(ui_BindSelectionPlugin_90_9_$1,"selectedValues" , this.getSelectedValuesVE());
    AS3.setBindable(ui_BindSelectionPlugin_90_9_$1,"equalsStrategy" , com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase.entriesEquals);
    gridPanel_72_5_$1.plugins = [ui_BEMPlugin_77_9_$1, ui_BindListPlugin_80_9_$1, ui_BindSelectionPlugin_90_9_$1];
    var toolbar_95_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_95_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_97_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_97_13_$1.itemId =net.jangaroo.ext.Exml.asString( StringListPropertyField.DELETE_BUTTON_ITEM_ID);
    var editor_DeleteStringListEntryAction_99_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.DeleteStringListEntryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.DeleteStringListEntryAction,{});
    AS3.setBindable(editor_DeleteStringListEntryAction_99_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_DeleteStringListEntryAction_99_17_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    editor_DeleteStringListEntryAction_99_17_$1.selectedPositions = this.selectedPositions$VEf3;
    editor_DeleteStringListEntryAction_99_17_$1.selectedValues = this.getSelectedValuesVE();
    editor_DeleteStringListEntryAction_99_17_$1.stringListEntriesValueExpression = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_IconButton_97_13_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.DeleteStringListEntryAction(editor_DeleteStringListEntryAction_99_17_$1);
    var ui_IconButton_106_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_106_13_$1.itemId =net.jangaroo.ext.Exml.asString( StringListPropertyField.MOVE_UP_BUTTON_ITEM_ID);
    var editor_MoveStringListEntryAction_108_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction,{});
    AS3.setBindable(editor_MoveStringListEntryAction_108_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStringListEntryAction_108_17_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    editor_MoveStringListEntryAction_108_17_$1.selectedPositions = this.selectedPositions$VEf3;
    editor_MoveStringListEntryAction_108_17_$1.selectedValues = this.getSelectedValuesVE();
    editor_MoveStringListEntryAction_108_17_$1.stringListEntriesValueExpression = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    editor_MoveStringListEntryAction_108_17_$1.direction = "Up";
    ui_IconButton_106_13_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction(editor_MoveStringListEntryAction_108_17_$1);
    var ui_IconButton_116_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_116_13_$1.itemId =net.jangaroo.ext.Exml.asString( StringListPropertyField.MOVE_DOWN_BUTTON_ITEM_ID);
    var editor_MoveStringListEntryAction_118_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction,{});
    AS3.setBindable(editor_MoveStringListEntryAction_118_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStringListEntryAction_118_17_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    editor_MoveStringListEntryAction_118_17_$1.selectedPositions = this.selectedPositions$VEf3;
    editor_MoveStringListEntryAction_118_17_$1.selectedValues = this.getSelectedValuesVE();
    editor_MoveStringListEntryAction_118_17_$1.stringListEntriesValueExpression = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    editor_MoveStringListEntryAction_118_17_$1.direction = "Down";
    ui_IconButton_116_13_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction(editor_MoveStringListEntryAction_118_17_$1);
    toolbar_95_9_$1.items = [ui_IconButton_97_13_$1, ui_IconButton_106_13_$1, ui_IconButton_116_13_$1];
    gridPanel_72_5_$1.tbar = toolbar_95_9_$1;
    var gridColumn_130_9_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_130_9_$1.stateId = "colName";
    gridColumn_130_9_$1.dataIndex = 'colName';
    gridColumn_130_9_$1.flex = 1.0;
    gridColumn_130_9_$1.renderer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var textField_135_13_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_135_13_$1.selectOnFocus = true;
    var editor_BindReadOnlyPlugin_137_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_137_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_137_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    textField_135_13_$1.plugins = [editor_BindReadOnlyPlugin_137_17_$1];
    AS3.setBindable(gridColumn_130_9_$1,"editor" , textField_135_13_$1);
    gridPanel_72_5_$1.columns = [gridColumn_130_9_$1];
    var selection_RowModel_145_9_$1/*:ext.selection.RowSelectionModel*/ =AS3.cast(Ext.selection.RowModel,{});
    selection_RowModel_145_9_$1.mode = "MULTI";
    selection_RowModel_145_9_$1.enableKeyNav = false;
    gridPanel_72_5_$1.selModel = new Ext.selection.RowModel(selection_RowModel_145_9_$1);
    var ui_StatefulTableView_148_9_$1/*:com.coremedia.ui.components.StatefulTableView*/ =AS3.cast(com.coremedia.ui.components.StatefulTableView,{});
    ui_StatefulTableView_148_9_$1.deferEmptyText = false;
    ui_StatefulTableView_148_9_$1.stripeRows = false;
    var editor_BindReadOnlyPlugin_151_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_151_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindReadOnlyPlugin_151_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    ui_StatefulTableView_148_9_$1.plugins = [editor_BindReadOnlyPlugin_151_13_$1];
    gridPanel_72_5_$1.viewConfig = ui_StatefulTableView_148_9_$1;
    var container_157_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_157_9_$1,"dock" , "bottom");
    container_157_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    var ui_BEMMixin_160_13_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_160_13_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_160_13_$1['xtype'];
    delete ui_BEMMixin_160_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_157_9_$1, ui_BEMMixin_160_13_$1);
    var layout_Fit_163_13_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(container_157_9_$1,"layout" , layout_Fit_163_13_$1);
    var textField_166_13_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_166_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase.TEXT_FIELD_ITEM_ID);
    AS3.setBindable(textField_166_13_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"textFieldEmptyText")));
    textField_166_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TextfieldSkin.EMBEDDED.getSkin());
    var editor_BindDisablePlugin_170_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_170_17_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_170_17_$1.bindTo = AS3.getBindable(config,"bindTo");
    textField_166_13_$1.plugins = [editor_BindDisablePlugin_170_17_$1];
    container_157_9_$1.items = [textField_166_13_$1];
    gridPanel_72_5_$1.dockedItems = [container_157_9_$1];
    config_$1.items = [gridPanel_72_5_$1];
    var layout_Fit_180_5_$1/*: ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_180_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VEf3(config_$1);
  }/*

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     The text displayed in the empty textfield below the list grid
     inviting the user to start entering values
     * /
    [Bindable]
    public var textFieldEmptyText:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.stringListPropertyField",
      selectedPositions$VEf3: null,
      __initialize__$VEf3: __initialize__,
      constructor: StringListPropertyField$,
      super$VEf3: function() {
        com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceReadOnlyValueExpression: null,
        textFieldEmptyText: null,
        hideIssues: false
      },
      statics: {
        DELETE_BUTTON_ITEM_ID: "delete",
        MOVE_UP_BUTTON_ITEM_ID: "moveUp",
        MOVE_DOWN_BUTTON_ITEM_ID: "moveDown"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Text",
        "Ext.grid.Panel",
        "Ext.grid.column.Column",
        "Ext.layout.container.Fit",
        "Ext.selection.RowModel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.premular.fields.StringListPropertyFieldBase",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.StatefulTableView",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.TextfieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.DeleteStringListEntryAction",
        "com.coremedia.cms.editor.sdk.premular.fields.MoveStringListEntryAction",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
