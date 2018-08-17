Ext.define("com.coremedia.ui.plugins.AddQuickTipPlugin", function(AddQuickTipPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Add a quick tip to a component.
 When the component is a panel a help icon with the tooltip will be added to the panel's header
 * /
public class AddQuickTipPlugin extends AddQuickTipPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AddQuickTipPlugin$(config/*:AddQuickTipPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddQuickTipPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPluginBase,{});
    var defaults_$1/*:AddQuickTipPlugin*/ =AS3.cast(AddQuickTipPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$sLGm(config_$1);
  }/*

    /**
     * A value expression evaluating to a string to be added as a quick tip to the main DOM element rendered by the component.
     * If set the config option 'text' is ignored.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     A string to add as a quick tip to the main DOM element rendered by the component.
     Ignored if the config option 'bindTo' is set.
     * /
    [Bindable]
    public var text:String;


    /**
     A function that evaluates to the element that the quick tip should be attached to. (optional)
     Signature: function map(component:Component):Element
     * /
    [Bindable]
    public var elementMapping:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddQuickTipPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddQuickTipPlugin$,
      super$sLGm: function() {
        com.coremedia.ui.plugins.AddQuickTipPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        text: null,
        elementMapping: null
      },
      requires: [
        "com.coremedia.ui.plugins.AddQuickTipPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
