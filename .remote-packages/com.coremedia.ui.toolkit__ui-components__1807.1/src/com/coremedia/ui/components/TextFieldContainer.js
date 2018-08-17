Ext.define("com.coremedia.ui.components.TextFieldContainer", function(TextFieldContainer) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.AdvancedFieldContainer;import com.coremedia.ui.mixins.IHighlightableMixin;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.NestedRulesPlugin;
import ext.form.field.BaseField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.StatefulTextField;
import com.coremedia.ui.plugins.BlockEnterPlugin;
import ext.layout.container.AnchorLayout;
[PublicApi]
/**
 A component to edit a string property value of a Bean.
 * /
public class TextFieldContainer extends AdvancedFieldContainer implements com.coremedia.ui.mixins.IHighlightableMixin{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.ui.config.textFieldContainer";

    public static const STRING_PROPERTY_FIELD_ITEM_ID:String = "stringPropertyField";
    private var _propertyValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:TextFieldContainer*/)/*:void*/ {
      this._propertyValueExpression$geS8 = AS3.getBindable(config,"propertyValueExpression") || AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyPath"));
    }/*

    public*/function TextFieldContainer$(config/*:TextFieldContainer = null*/){if(arguments.length<=0)config=null;this.__initialize__$geS8(config);
    var config_$1/*:com.coremedia.ui.components.AdvancedFieldContainer*/ =AS3.cast(com.coremedia.ui.components.AdvancedFieldContainer,{});
    var defaults_$1/*:TextFieldContainer*/ =AS3.cast(TextFieldContainer,{});
    AS3.setBindable(defaults_$1,"changeBuffer" , 50);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"defaultField" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(TextFieldContainer.STRING_PROPERTY_FIELD_ITEM_ID).build()));
    var ui_NestedRulesPlugin_91_5_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var field_93_9_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    var ui_BindPropertyPlugin_95_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_95_13_$1.bindTo = this._propertyValueExpression$geS8;
    ui_BindPropertyPlugin_95_13_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_95_13_$1.ifUndefined = AS3.getBindable(config,"ifUndefined");
    ui_BindPropertyPlugin_95_13_$1.bidirectional = !AS3.getBindable(config,"readOnly");
    field_93_9_$1.plugins = [ui_BindPropertyPlugin_95_13_$1];
    ui_NestedRulesPlugin_91_5_$1.rules = [field_93_9_$1];
    config_$1.plugins = [ui_NestedRulesPlugin_91_5_$1];
    var ui_StatefulTextField_105_5_$1/*:com.coremedia.ui.components.StatefulTextField*/ =AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    ui_StatefulTextField_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( TextFieldContainer.STRING_PROPERTY_FIELD_ITEM_ID);
    ui_StatefulTextField_105_5_$1.name =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyPath"));
    AS3.setBindable(ui_StatefulTextField_105_5_$1,"readOnly" , AS3.getBindable(config,"readOnly"));
    var ui_BlockEnterPlugin_109_9_$1/*:com.coremedia.ui.plugins.BlockEnterPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BlockEnterPlugin,{});
    ui_StatefulTextField_105_5_$1.plugins = [ui_BlockEnterPlugin_109_9_$1];
    config_$1.items = [ui_StatefulTextField_105_5_$1];
    var field_114_5_$1/*: ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    field_114_5_$1.anchor = "100%";
    field_114_5_$1.checkChangeBuffer = AS3.getBindable(config,"changeBuffer");
    config_$1["defaultType"] = field_114_5_$1['xtype'];
    delete field_114_5_$1['xtype'];
    delete field_114_5_$1['xclass'];
    config_$1.defaults = field_114_5_$1;
    var layout_Anchor_117_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_117_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$geS8(config_$1);
  }/*

    /**
     * A value expression evaluating to the Bean whose property (path) is edited.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * A value expression evaluating to the property that is edited.
     * If this config option is not given, the value expression
     * &lt;code>config.bindTo.extendBy(config.propertyPath)&lt;/code>
     * is used.
     * This value expression is also written (&lt;code>ValueExpression#setValue()&lt;/code>)
     * to update edited value. To prevent this, set &lt;code>readOnly="true"&lt;/code>.
     * /
    [Bindable]
    public var propertyValueExpression:ValueExpression;

    /** @private * /
    [Bindable]
    public native function set highlighted(newHighlighted:Boolean):void;

    /** @inheritDoc * /
    [Bindable]
    public native function get highlighted():Boolean;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /**
     the path (dot-separated property names) of the property of the Bean to bind in this field
     * /
    [Bindable]
    public var propertyPath:String;


    /**
     The value to bind if the expression value is undefined.
     * /
    [Bindable]
    public var ifUndefined:String;


    /**
     The number of milliseconds to wait for more changes to the field's
     value before sending the change event. The default value is 50.
     * /
    [Bindable]
    public var changeBuffer:Number;


    /**
     Set the &lt;code>readOnly&lt;/code> config option of the contained field.

     @see ext.config.field#readOnly
     * /
    [Bindable]
    public var readOnly:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      mixins: ["com.coremedia.ui.mixins.HighlightableMixin"],
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.ui.config.textFieldContainer",
      _propertyValueExpression$geS8: null,
      __initialize__$geS8: __initialize__,
      constructor: TextFieldContainer$,
      super$geS8: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        bindTo: null,
        propertyValueExpression: null,
        propertyPath: null,
        ifUndefined: null,
        changeBuffer: NaN,
        readOnly: false
      },
      statics: {STRING_PROPERTY_FIELD_ITEM_ID: "stringPropertyField"},
      requires: [
        "Ext.form.field.Base",
        "Ext.layout.container.Anchor",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BlockEnterPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "com.coremedia.ui.util.createComponentSelector"
      ]
    };
});
