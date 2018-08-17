Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.StructEditorContextMenu", function(StructEditorContextMenu) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
public class StructEditorContextMenu extends Menu{

    import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
    import com.coremedia.cms.editor.sdk.premular.Premular;
    import com.coremedia.ui.data.ValueExpression;

    [Bindable]
    public var selectedNodeExpression:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    public*/function StructEditorContextMenu$(config/*:StructEditorContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:StructEditorContextMenu*/ =AS3.cast(StructEditorContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_27_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_OpenInTabAction_29_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_29_9_$1,"contentVariableName" , "linkedContent");
    menuItem_27_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_29_9_$1);
    var menuItem_32_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_34_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_34_9_$1,"contentVariableName" , "linkedContent");
    menuItem_32_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_34_9_$1);
    var menuSeparator_37_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_38_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var local_CutStructNodeAction_40_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction,{});
    AS3.setBindable(local_CutStructNodeAction_40_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(local_CutStructNodeAction_40_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_CutStructNodeAction_40_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(local_CutStructNodeAction_40_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_38_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction(local_CutStructNodeAction_40_9_$1);
    var menuItem_46_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var local_CopyStructNodeAction_48_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction,{});
    AS3.setBindable(local_CopyStructNodeAction_48_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(local_CopyStructNodeAction_48_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_46_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction(local_CopyStructNodeAction_48_9_$1);
    var menuItem_52_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var local_PasteToStructNodeAction_54_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction,{});
    AS3.setBindable(local_PasteToStructNodeAction_54_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(local_PasteToStructNodeAction_54_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_PasteToStructNodeAction_54_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(local_PasteToStructNodeAction_54_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_52_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction(local_PasteToStructNodeAction_54_9_$1);
    var menuItem_60_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_DuplicateStructNodeAction_62_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction,{});
    AS3.setBindable(editor_DuplicateStructNodeAction_62_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_DuplicateStructNodeAction_62_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_DuplicateStructNodeAction_62_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_DuplicateStructNodeAction_62_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_60_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction(editor_DuplicateStructNodeAction_62_9_$1);
    var menuSeparator_68_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_69_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_MoveStructNodeAction_71_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,{});
    AS3.setBindable(editor_MoveStructNodeAction_71_9_$1,"direction" , "Up");
    AS3.setBindable(editor_MoveStructNodeAction_71_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_71_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_MoveStructNodeAction_71_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_71_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_69_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction(editor_MoveStructNodeAction_71_9_$1);
    var menuItem_78_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_MoveStructNodeAction_80_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction,{});
    AS3.setBindable(editor_MoveStructNodeAction_80_9_$1,"direction" , "Down");
    AS3.setBindable(editor_MoveStructNodeAction_80_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_80_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_MoveStructNodeAction_80_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_MoveStructNodeAction_80_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_78_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction(editor_MoveStructNodeAction_80_9_$1);
    var menuSeparator_87_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_88_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_DeleteStructNodeAction_90_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction,{});
    AS3.setBindable(editor_DeleteStructNodeAction_90_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.Premular.CONTENT_VARIABLE_NAME));
    AS3.setBindable(editor_DeleteStructNodeAction_90_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_DeleteStructNodeAction_90_9_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_DeleteStructNodeAction_90_9_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_88_5_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction(editor_DeleteStructNodeAction_90_9_$1);
    config_$1.items = [menuItem_27_5_$1, menuItem_32_5_$1, menuSeparator_37_5_$1, menuItem_38_5_$1, menuItem_46_5_$1, menuItem_52_5_$1, menuItem_60_5_$1, menuSeparator_68_5_$1, menuItem_69_5_$1, menuItem_78_5_$1, menuSeparator_87_5_$1, menuItem_88_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tAg6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: StructEditorContextMenu$,
      super$tAg6: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedNodeExpression: null,
        forceReadOnlyValueExpression: null
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.CutStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DeleteStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DuplicateStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.MoveStructNodeAction",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.PasteToStructNodeAction"
      ]
    };
});
