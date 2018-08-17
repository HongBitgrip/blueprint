Ext.define("com.coremedia.ui.plugins.BindTreeSelectionPlugin", function(BindTreeSelectionPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to bind the selection in a tree to a bean.

 * /
public class BindTreeSelectionPlugin extends BindTreeSelectionPluginBase{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.models.TreeModel;

    public*/function BindTreeSelectionPlugin$(config/*:BindTreeSelectionPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindTreeSelectionPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindTreeSelectionPluginBase,{});
    var defaults_$1/*:BindTreeSelectionPlugin*/ =AS3.cast(BindTreeSelectionPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xuDI(config_$1);
  }/*

    [Bindable]
    public var treeModel:TreeModel;

    /**
     * A ValueExpression whose value is set to the Bean corresponding to the currently selected tree node.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;

    /**
     * A ValueExpression whose value can be set to a Bean whose path should be opened in the tree.
     * /
    [Bindable]
    public var openPathValueExpression:ValueExpression;

    /**
     * The default value for the bean corresponding to the currently selected tree node. This value is taken on when an
     * invalid selection (e.g. selection of a non-existing tree node) is made.
     * /
    [Bindable]
    public var defaultValue:Bean;

    /**
     If set to true, switching to an empty selection will not set the valueExpression to undefined. Default is false.
     * /
    [Bindable]
    public var ignoreEmptySelection:Boolean;


    /**
     Whether to update the selection in the tree when the value
     expression changes. Defaults to true.
     * /
    [Bindable]
    public var updateSelection:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindTreeSelectionPluginBase",
      constructor: BindTreeSelectionPlugin$,
      super$xuDI: function() {
        com.coremedia.ui.plugins.BindTreeSelectionPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        treeModel: null,
        valueExpression: null,
        openPathValueExpression: null,
        defaultValue: null,
        ignoreEmptySelection: false,
        updateSelection: false
      },
      requires: [
        "com.coremedia.ui.plugins.BindTreeSelectionPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
