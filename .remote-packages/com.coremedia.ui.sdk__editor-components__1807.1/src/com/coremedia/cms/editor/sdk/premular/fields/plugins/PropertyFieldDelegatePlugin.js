Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin", function(PropertyFieldDelegatePlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Uses the value from a rich text field to display as converted default if
 the field itself does not contain a value.
 * /
public class PropertyFieldDelegatePlugin extends PropertyFieldDelegatePluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function PropertyFieldDelegatePlugin$(config/*:PropertyFieldDelegatePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase,{});
    var defaults_$1/*:PropertyFieldDelegatePlugin*/ =AS3.cast(PropertyFieldDelegatePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$v9ty(config_$1);
  }/*

    /**
     * Expression to which the applied field should be delegated
     * /
    [Bindable]
    public var delegateExpression:ValueExpression;

    /**
     If applied, the delegation is made to the master document.
     * /
    [Bindable]
    public var masterPropertyName:String;


    /**
     The name of the property that this plugin works on.
     * /
    [Bindable]
    public var delegatePropertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: PropertyFieldDelegatePlugin$,
      super$v9ty: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        delegateExpression: null,
        masterPropertyName: null,
        delegatePropertyName: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
