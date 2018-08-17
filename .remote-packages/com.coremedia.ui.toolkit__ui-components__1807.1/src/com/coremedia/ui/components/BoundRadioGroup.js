Ext.define("com.coremedia.ui.components.BoundRadioGroup", function(BoundRadioGroup) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
/**
 A radio group that is bound to a value expression.
 For convenience, a unique name is set for the group and all radio objects
 in the items property.
 For each radio element, the inputValue defaults to the itemId.
 * /
public class BoundRadioGroup extends BoundRadioGroupBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.ui.config.boundRadioGroup";

    public*/function BoundRadioGroup$(config/*:BoundRadioGroup = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.BoundRadioGroupBase*/ =AS3.cast(com.coremedia.ui.components.BoundRadioGroupBase,{});
    var defaults_$1/*:BoundRadioGroup*/ =AS3.cast(BoundRadioGroup,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindPropertyPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_30_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_30_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_BindPropertyPlugin_30_5_$1.reverseTransformer =AS3.bind( this,"toExpressionValue");
    ui_BindPropertyPlugin_30_5_$1.ifUndefined = this.toExpressionValue(this.defaultValue);
    ui_BindPropertyPlugin_30_5_$1.transformer =AS3.bind( this,"toInputValue");
    ui_BindPropertyPlugin_30_5_$1.bidirectional = true;
    config_$1.plugins = [ui_BindPropertyPlugin_30_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zNGE(config_$1);
  }/*

    /**
     * The value expression to bind to.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.BoundRadioGroupBase",
      alias: "widget.com.coremedia.ui.config.boundRadioGroup",
      constructor: BoundRadioGroup$,
      super$zNGE: function() {
        com.coremedia.ui.components.BoundRadioGroupBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.ui.components.BoundRadioGroupBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.plugins.BindPropertyPlugin"]
    };
});
