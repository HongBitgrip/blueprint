Ext.define("com.coremedia.ui.plugins.BindSelectionPlugin", function(BindSelectionPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 <p>A plugin to bind the selection in a list-like component to value expressions.
 Currently, grid panel and data view are supported.</p>

 <p>The plugin supports multiple selection per default.
 When you want to use the grid panel or data view in a single-select mode you have to configure the component accordingly.
 The bound value will be then a array of a single item.</p>

 <p>The change of the value of <code>selectedValues</code> updates the selection.
 Note that even in the single-select mode the value must be set to an array (of a single item).</p>

 <p>If you need a value expression of a single-selected item (not an array of it) you may want to use the method:
 <code>ValueExpressionFactory#createSingleItemValueExpression</code></p>

 <p><code>selectedPositions</code> is ready-only:
 </p>

 <p>This class serves as a typed config object for the constructor of the plugin class <code>BindSelectionPlugin</code>.
 Instantiating this class for the first time also registers the corresponding plugin class under the ptype
 "com.coremedia.ui.config.bindSelectionPlugin" with ExtJS.
 </p>

 @see ext.grid.GridPanel
 @see ext.view.DataView
 @see com.coremedia.ui.data.ValueExpressionFactory

 * /
public class BindSelectionPlugin extends BindSelectionPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function BindSelectionPlugin$(config/*:BindSelectionPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindSelectionPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPluginBase,{});
    var defaults_$1/*:BindSelectionPlugin*/ =AS3.cast(BindSelectionPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZSzG(config_$1);
  }/*

    /**
     * A ValueExpression whose value is set to the array of indexes of selected items (this is currently supported for grids, only)
     * The array is empty if nothing is selected. The change of the value doesn't update the selection of the component.
     * /
    [Bindable]
    public var selectedPositions:ValueExpression;

    /**
     * A ValueExpression whose value is set to the array of selected items.
     * The array is empty if nothing is selected.
     * The selection is updated by changing the value of this expression.
     * /
    [Bindable]
    public var selectedValues:ValueExpression;

    /**
     If set to true, switching to an empty selection will not set the valueExpression to undefined. Default is false.
     * /
    [Bindable]
    public var ignoreEmptySelection:Boolean;


    /**
     A strategy for comparing bean records in store
     * /
    [Bindable]
    public var equalsStrategy:Function;


    /**
     A strategy to avoid focus on select/update
     * /
    [Bindable]
    public var preventFocus:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindSelectionPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindSelectionPlugin$,
      super$ZSzG: function() {
        com.coremedia.ui.plugins.BindSelectionPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedPositions: null,
        selectedValues: null,
        ignoreEmptySelection: false,
        equalsStrategy: null,
        preventFocus: false
      },
      requires: [
        "com.coremedia.ui.plugins.BindSelectionPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
