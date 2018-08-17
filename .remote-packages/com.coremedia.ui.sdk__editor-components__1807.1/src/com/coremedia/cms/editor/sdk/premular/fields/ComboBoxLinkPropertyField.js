Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField", function(ComboBoxLinkPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import ext.view.DataView;
import ext.layout.container.VBoxLayout;
public class ComboBoxLinkPropertyField extends ComboBoxLinkPropertyFieldBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.util.createComponentSelector;

    import ext.Ext;

    import ext.data.field.DataField;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.comboBoxLinkPropertyField";

    /**
     * The name of the data field in the combo box store that contains the Bean.
     * /
    public static const BEAN_FIELD_NAME:String = "bean";

    /**
     * The itemId of the actual combo box child component.
     * /
    public static const COMBO_BOX_ITEM_ID:String = "combobox";

    /**
     * The itemId of the component that renders the selected value using the same template as the combo box.
     * Note that Ext JS always uses a text field for the selected value and thus only displays text content.
     * /
    public static const SELECTION_ITEM_ID:String = "selection";
    private var linkValueExpression:ValueExpression;
    private var linkArrayValueExpression:ValueExpression;

    private var myFields:Array;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ComboBoxLinkPropertyField*/)/*:void*/ {
      this.linkValueExpression$UCbR = this.getLinkValueExpression(config);
      this.linkArrayValueExpression$UCbR = com.coremedia.ui.data.ValueExpressionFactory.convertToSingletonArray(this.linkValueExpression$UCbR);
      var firstField/*:DataField*/ = Ext.create(Ext.data.field.Field, {name: ComboBoxLinkPropertyField.BEAN_FIELD_NAME, mapping: ""});
      this.myFields$UCbR = [firstField].concat(AS3.getBindable(config,"fields") || []);
    }/*

    public*/function ComboBoxLinkPropertyField$(config/*:ComboBoxLinkPropertyField = null*/){if(arguments.length<=0)config=null;this.__initialize__$UCbR(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase,{});
    var defaults_$1/*:ComboBoxLinkPropertyField*/ =AS3.cast(ComboBoxLinkPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(ComboBoxLinkPropertyField.COMBO_BOX_ITEM_ID).build()));
    var editor_SetPropertyLabelPlugin_165_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_165_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_165_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var editor_PropertyFieldPlugin_167_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_167_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var ui_VerticalSpacingPlugin_168_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [editor_SetPropertyLabelPlugin_165_5_$1, editor_PropertyFieldPlugin_167_5_$1, ui_VerticalSpacingPlugin_168_5_$1];
    var ui_LocalComboBox_171_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_171_5_$1.itemId =net.jangaroo.ext.Exml.asString( ComboBoxLinkPropertyField.COMBO_BOX_ITEM_ID);
    ui_LocalComboBox_171_5_$1.valueField =net.jangaroo.ext.Exml.asString( ComboBoxLinkPropertyField.BEAN_FIELD_NAME);
    AS3.setBindable(ui_LocalComboBox_171_5_$1,"displayField" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"displayField")));
    AS3.setBindable(ui_LocalComboBox_171_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyText")));
    ui_LocalComboBox_171_5_$1.emptyCls =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyCls"));
    AS3.setBindable(ui_LocalComboBox_171_5_$1,"valueNotFoundText" , "");
    ui_LocalComboBox_171_5_$1.tpl = AS3.getBindable(config,"comboBoxTemplate");
    var object_179_9_$1/*:Object*/ = {};
    object_179_9_$1.itemCls = com.coremedia.ui.components.LocalComboBox.COMBO_BOX_TPL_ITEM_CLASS;
    ui_LocalComboBox_171_5_$1.listConfig = object_179_9_$1;
    var ui_AddQuickTipPlugin_182_9_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_182_9_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"qtip")));
    var ui_BindListPlugin_183_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_183_9_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createUnion(AS3.getBindable(config,"offeredContentsValueExpression"), this.linkArrayValueExpression$UCbR, false));
    AS3.setBindable(ui_BindListPlugin_183_9_$1,"fields" , this.myFields$UCbR);
    AS3.setBindable(ui_BindListPlugin_183_9_$1,"sortField" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"sortField")));
    var editor_BindDisablePlugin_187_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_187_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_187_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var ui_BindPropertyPlugin_189_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_189_9_$1.bindTo = this.linkValueExpression$UCbR;
    ui_BindPropertyPlugin_189_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_189_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_189_9_$1.skipIfUndefined = true;
    ui_BindPropertyPlugin_189_9_$1.componentEvent = "change";
    var editor_ShowIssuesPlugin_194_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_194_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_194_9_$1,"ifUndefined" , AS3.getBindable(config,"fallbackForNullValueExpression") ? function()/*:**/ {return AS3.getBindable(config,"fallbackForNullValueExpression").getValue();} : undefined);
    AS3.setBindable(editor_ShowIssuesPlugin_194_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_194_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    ui_LocalComboBox_171_5_$1.plugins = [ui_AddQuickTipPlugin_182_9_$1, ui_BindListPlugin_183_9_$1, editor_BindDisablePlugin_187_9_$1, ui_BindPropertyPlugin_189_9_$1, editor_ShowIssuesPlugin_194_9_$1];
    ui_LocalComboBox_171_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var dataView_200_5_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    dataView_200_5_$1.itemId =net.jangaroo.ext.Exml.asString( ComboBoxLinkPropertyField.SELECTION_ITEM_ID);
    dataView_200_5_$1.tpl = AS3.getBindable(config,"displayTemplate") || com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.getDefaultDisplayTpl(AS3.getBindable(config,"displayField"));
    dataView_200_5_$1.itemSelector =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.LIST_ELEMENT_ITEM.getCSSSelector());
    AS3.setBindable(dataView_200_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyText")));
    var ui_BindListPlugin_205_9_$1/*: com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_205_9_$1,"bindTo" , this.linkArrayValueExpression$UCbR);
    AS3.setBindable(ui_BindListPlugin_205_9_$1,"fields" , this.myFields$UCbR);
    dataView_200_5_$1.plugins = [ui_BindListPlugin_205_9_$1];
    config_$1.items = [ui_LocalComboBox_171_5_$1, dataView_200_5_$1];
    var layout_VBox_212_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_212_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_212_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$UCbR(config_$1);
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * A property path expression leading to the Array of Beans shown in the combo box.
     * /
    [Bindable]
    public var offeredContentsValueExpression:ValueExpression;

    /**
     * An optional value expression that evaluates to a fallback value to show in the combo box
     * when the current property value is null.
     * /
    [Bindable]
    public var fallbackForNullValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;


    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     The link type is usually derived from the property descriptor, but to override this or
     provide an initial value for link properties in Structs that are created by this property field,
     you may specify a custom link type by name.
     * /
    [Bindable]
    public var linkTypeName:String;


    /**
     The empty text to show for the value null (only possible to occur when the list
     offeredContentsValueExpression evaluates to contains a null element).

     @see ext.form.field.ComboBox#emptyText
     @see ext.view.DataView#emptyText
     * /
    [Bindable]
    public var emptyText:String;


    /**
     The CSS class to apply to an empty field to style the "emptyText".
     This class is automatically added and removed as needed depending on the current field value.

     @see ext.form.field.ComboBox#emptyCls
     * /
    [Bindable]
    public var emptyCls:String;


    /**
     The name of the displayField to use for the combo box.

     @see ext.form.field.ComboBox#displayField
     * /
    [Bindable]
    public var displayField:String;


    /**
     The field to use for sorting.
     Default is undefined, which means to keep the order returned by offeredContentsValueExpression.

     @see com.coremedia.ui.plugins.BindListPlugin#sortField
     * /
    [Bindable]
    public var sortField:String;


    /**
     The data fields to be added to the store underlying the combo box.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;


    /**
     A custom combo box template that can use the built-in field {@link #BEAN_FIELD_NAME} and all configured additional fields.

     Make sure the rendered items have the required combo box item class, otherwise they cannot be selected.

     @see com.coremedia.ui.components.LocalComboBox#COMBO_BOX_TPL_ITEM_CLASS
     @see ext.form.field.ComboBox#tpl
     * /
    [Bindable]
    public var comboBoxTemplate:Object;


    /**
     A custom display template that can use the built-in field {@link #BEAN_FIELD_NAME} and all configured additional fields.

     @see ext.view.DataView#tpl
     * /
    [Bindable]
    public var displayTemplate:Object;


    /**
     Add a quick tip to the actual editing component (a combo box) of the property field.
     * /
    [Bindable]
    public var qtip:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase",
      metadata: {disableStrictConsistency: ["Config"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.comboBoxLinkPropertyField",
      linkValueExpression$UCbR: null,
      linkArrayValueExpression$UCbR: null,
      myFields$UCbR: null,
      __initialize__$UCbR: __initialize__,
      constructor: ComboBoxLinkPropertyField$,
      super$UCbR: function() {
        com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        offeredContentsValueExpression: null,
        fallbackForNullValueExpression: null,
        propertyName: null,
        hideIssues: false,
        linkTypeName: null,
        emptyText: null,
        emptyCls: null,
        displayField: null,
        sortField: null,
        fields: null,
        comboBoxTemplate: null,
        displayTemplate: null,
        qtip: null
      },
      statics: {
        BEAN_FIELD_NAME: "bean",
        COMBO_BOX_ITEM_ID: "combobox",
        SELECTION_ITEM_ID: "selection"
      },
      requires: [
        "Ext",
        "Ext.data.field.Field",
        "Ext.layout.container.VBox",
        "Ext.view.View",
        "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
