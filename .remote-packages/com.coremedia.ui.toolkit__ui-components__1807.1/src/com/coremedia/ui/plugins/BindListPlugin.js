Ext.define("com.coremedia.ui.plugins.BindListPlugin", function(BindListPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A plugin to let an ext.grid.GridPanel or an ext.DataView fetch its data from an array-valued Bean from the
 BeanFactory and inform of row selections by setting a configured property path to the Bean corresponding
 to the selected row.

 * /
public class BindListPlugin extends BindListPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function BindListPlugin$(config/*:BindListPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindListPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindListPluginBase,{});
    var defaults_$1/*:BindListPlugin*/ =AS3.cast(BindListPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EHzW(config_$1);
  }/*

    /**
     * The ValueExpression evaluating to the Array value that feeds the JsonStore.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**

     &lt;p>
     The fields to hand on to the &lt;code>JsonStore&lt;/code> that is automatically created by this plugin.
     Each member of the array must be an instance of &lt;code>com.coremedia.ui.config.dataField&lt;/code>.
     &lt;/p>
     &lt;p>
     The value of each field for a given bean is determined by reading the property
     specified by the &lt;code>mapping&lt;/code> option from the bean.
     If a dot-separated property path is given, the entire chain of properties is traversed.
     If no &lt;code>mapping&lt;/code> is given, the &lt;code>fieldName&lt;/code> option will be used instead.
     If a &lt;code>convert&lt;/code> function is specified,
     this function is called with the mapped value as its first argument and
     original bean as its second argument. The result replaces the mapped value.
     The &lt;code>convert&lt;/code> function is not called for undefined values.
     Both the processing of the &lt;code>mapping&lt;/code> and the &lt;code>convert&lt;/code> function
     are dependency-tracked. Changes to accessed beans cause the field to be re-evaluated.
     &lt;/p>

     @see com.coremedia.ui.config.dataField
     @see com.coremedia.ui.config.dataField#mapping
     @see com.coremedia.ui.config.dataField#convert
     @see com.coremedia.ui.data.dependencies.DependencyTracker

     * /
    [Bindable]
    public var fields:Array;


    /**
     The field to use for sorting the values in the list (defaults to undefined which performs no sorting).
     * /
    [Bindable]
    public var sortField:String;


    /**
     'ASC' or 'DESC' (case sensitive), ignored if sortField is not given. Defaults to 'ASC'.
     * /
    [Bindable]
    public var sortDirection:String;


    /**

     A function that transforms the expression value before it is used to update the component's store.
     Example function:
     &lt;code>function (array) { return array.concat().reverse(); }&lt;/code>

     * /
    [Bindable]
    public var transformer:Function;


    /**
     The value to bind if the expression value is undefined.
     * /
    [Bindable]
    public var ifUndefined:Array;


    /**

     If &lt;code>true&lt;/code>, load only Beans for visible rows. Leads to faster initial display, at the price of on-demand
     loading when scrolling / resizing. Default &lt;code>false&lt;/code>.

     * /
    [Bindable]
    public var lazy:Boolean;


    /**

     The initial limit for the number of Beans for which to create (initially empty) records in the store.
     This avoids big and sluggish DOM rendering of empty rows or divs.
     When the user scrolls to the end of the list, the view limit is automatically incremented by the
     value given in config option &lt;code>viewLimitIncrement&lt;/code>.
     Default is to not limit the view.

     * /
    [Bindable]
    public var initialViewLimit:int;


    /**

     The maximum number of additional records to create every time the user scrolls to the end of
     the list. Default is 100.
     @see #initialViewLimit

     * /
    [Bindable]
    public var viewLimitIncrement:int;


    /**

     The id property of the related record.

     * /
    [Bindable]
    public var idProperty:String;


    /**
    If set to TRUE disables a performance optimization if only a few items are being updated.
     * /
    [Bindable]
    public var preventIncrementalUpdate:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindListPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindListPlugin$,
      super$EHzW: function() {
        com.coremedia.ui.plugins.BindListPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        fields: null,
        sortField: null,
        sortDirection: null,
        transformer: null,
        ifUndefined: null,
        lazy: false,
        initialViewLimit: 0,
        viewLimitIncrement: 0,
        idProperty: null,
        preventIncrementalUpdate: false
      },
      requires: [
        "com.coremedia.ui.plugins.BindListPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
