Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyField", function(PropertyField) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Use this class only for setting a typed default in a container containing real property fields.
 * /
public class PropertyField extends PropertyFieldBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.propertyField";

    public*/function PropertyField$(config/*:PropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldBase,{});
    var defaults_$1/*:PropertyField*/ =AS3.cast(PropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.labelPad = null;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jOL3(config_$1);
  }/*

    /**
     * ]
     * A property path expression leading to the Content to use for property fields like &lt;code>StringPropertyField&lt;/code>
     * or &lt;code>IntegerPropertyField&lt;/code>.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The premular configuration that contains all prefetched data.
     * /
    [Bindable]
    public var premularConfigurationVE:ValueExpression;

    /**
     Don't show any validation issues on this property field.
     * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.propertyField",
      constructor: PropertyField$,
      super$jOL3: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationVE: null,
        hideIssues: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
