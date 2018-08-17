Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyButton", function(AddStructPropertyButton) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.ui.components.ActionSplitButton;
import net.jangaroo.ext.Exml;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction;
import ext.menu.Separator;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class AddStructPropertyButton extends ActionSplitButton{

    import com.coremedia.cap.common.CapPropertyDescriptorType;
    import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.addStructPropertyButton";

    public static const TEXT_ITEM_ID:String = "text";

    public static const NUMBER_ITEM_ID:String = "number";

    public static const CHECKBOX_ITEM_ID:String = "checkbox";

    public static const OBJECT_ITEM_ID:String = "object";

    public static const LINK_ITEM_ID:String = "link";

    public static const DATE_ITEM_ID:String = "date";

    public static const TEXTS_ITEM_ID:String = "texts";

    public static const NUMBERS_ITEM_ID:String = "numbers";

    public static const CHECKBOXES_ITEM_ID:String = "checkboxes";

    public static const OBJECTS_ITEM_ID:String = "objects";

    public static const LINKS_ITEM_ID:String = "links";

    public static const DATES_ITEM_ID:String = "dates";

    public*/function AddStructPropertyButton$(config/*:AddStructPropertyButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.ActionSplitButton*/ =AS3.cast(com.coremedia.ui.components.ActionSplitButton,{});
    var defaults_$1/*:AddStructPropertyButton*/ =AS3.cast(AddStructPropertyButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'add')));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var menu_63_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_65_9_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_65_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.TEXT_ITEM_ID);
    var editor_AddStructPropertyAction_67_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_67_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.STRING));
    AS3.setBindable(editor_AddStructPropertyAction_67_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_67_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_67_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_67_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_65_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_67_13_$1);
    var menuItem_74_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_74_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.NUMBER_ITEM_ID);
    var editor_AddStructPropertyAction_76_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_76_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER));
    AS3.setBindable(editor_AddStructPropertyAction_76_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_76_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_76_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_76_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_74_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_76_13_$1);
    var menuItem_83_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_83_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.CHECKBOX_ITEM_ID);
    var editor_AddStructPropertyAction_85_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_85_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN));
    AS3.setBindable(editor_AddStructPropertyAction_85_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_85_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_85_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_85_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_83_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_85_13_$1);
    var menuItem_92_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_92_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.LINK_ITEM_ID);
    var editor_AddStructPropertyAction_94_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_94_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.LINK));
    AS3.setBindable(editor_AddStructPropertyAction_94_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_94_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_94_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_94_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_92_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_94_13_$1);
    var menuItem_101_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_101_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.DATE_ITEM_ID);
    var editor_AddStructPropertyAction_103_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_103_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.DATE));
    AS3.setBindable(editor_AddStructPropertyAction_103_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_103_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_103_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_103_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_101_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_103_13_$1);
    var menuItem_110_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_110_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.OBJECT_ITEM_ID);
    var editor_AddStructPropertyAction_112_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_112_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT));
    AS3.setBindable(editor_AddStructPropertyAction_112_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_112_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_112_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_112_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_110_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_112_13_$1);
    var menuSeparator_119_9_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_120_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_120_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.TEXTS_ITEM_ID);
    var editor_AddStructPropertyAction_122_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.STRING));
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_122_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_120_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_122_13_$1);
    var menuItem_130_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_130_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.NUMBERS_ITEM_ID);
    var editor_AddStructPropertyAction_132_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER));
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_132_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_130_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_132_13_$1);
    var menuItem_140_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_140_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.CHECKBOXES_ITEM_ID);
    var editor_AddStructPropertyAction_142_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN));
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_142_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_140_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_142_13_$1);
    var menuItem_150_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_150_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.LINKS_ITEM_ID);
    var editor_AddStructPropertyAction_152_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.LINK));
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_152_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_150_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_152_13_$1);
    var menuItem_160_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_160_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.DATES_ITEM_ID);
    var editor_AddStructPropertyAction_162_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.DATE));
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_162_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_160_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_162_13_$1);
    var menuItem_170_9_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_170_9_$1.itemId =net.jangaroo.ext.Exml.asString( AddStructPropertyButton.OBJECTS_ITEM_ID);
    var editor_AddStructPropertyAction_172_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction,{});
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"propertyType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT));
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"isCollection" , true);
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"forceReadOnlyVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME));
    AS3.setBindable(editor_AddStructPropertyAction_172_13_$1,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    menuItem_170_9_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction(editor_AddStructPropertyAction_172_13_$1);
    menu_63_5_$1.items = [menuItem_65_9_$1, menuItem_74_9_$1, menuItem_83_9_$1, menuItem_92_9_$1, menuItem_101_9_$1, menuItem_110_9_$1, menuSeparator_119_9_$1, menuItem_120_9_$1, menuItem_130_9_$1, menuItem_140_9_$1, menuItem_150_9_$1, menuItem_160_9_$1, menuItem_170_9_$1];
    config_$1.menu = menu_63_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$g_2t(config_$1);
  }/*

    [Bindable]
    public var contentValueExpression:ValueExpression;

    [Bindable]
    public var selectedNodeExpression:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ActionSplitButton",
      alias: "widget.com.coremedia.cms.editor.sdk.config.addStructPropertyButton",
      constructor: AddStructPropertyButton$,
      super$g_2t: function() {
        com.coremedia.ui.components.ActionSplitButton.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        selectedNodeExpression: null,
        forceReadOnlyValueExpression: null
      },
      statics: {
        TEXT_ITEM_ID: "text",
        NUMBER_ITEM_ID: "number",
        CHECKBOX_ITEM_ID: "checkbox",
        OBJECT_ITEM_ID: "object",
        LINK_ITEM_ID: "link",
        DATE_ITEM_ID: "date",
        TEXTS_ITEM_ID: "texts",
        NUMBERS_ITEM_ID: "numbers",
        CHECKBOXES_ITEM_ID: "checkboxes",
        OBJECTS_ITEM_ID: "objects",
        LINKS_ITEM_ID: "links",
        DATES_ITEM_ID: "dates"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.ActionSplitButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.AddStructPropertyAction"
      ]
    };
});
