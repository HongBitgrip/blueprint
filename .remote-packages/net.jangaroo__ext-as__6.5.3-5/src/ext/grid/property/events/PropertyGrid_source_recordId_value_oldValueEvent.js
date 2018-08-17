Ext.define("ext.grid.property.events.PropertyGrid_source_recordId_value_oldValueEvent", function(PropertyGrid_source_recordId_value_oldValueEvent) {/*package ext.grid.property.events {
import net.jangaroo.ext.FlExtEvent;

public class PropertyGrid_source_recordId_value_oldValueEvent extends FlExtEvent {
  /**
   * Fires before a property value changes. Handlers can return false to cancel the property change
   * (this will internally call →<code>ext.data.Model.reject()</code> on the property's record).
   * @see ext.data.Model#reject()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.property.Grid.html#event-beforepropertychange Original Ext JS documentation of 'beforepropertychange'
   * @see ext.grid.property.PropertyGrid
   * @eventType onBeforePropertyChange
   * /
  public static const BEFORE_PROPERTY_CHANGE:String = "onBeforePropertyChange";
  /**
   * Fires after a property value has changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.property.Grid.html#event-propertychange Original Ext JS documentation of 'propertychange'
   * @see ext.grid.property.PropertyGrid
   * @eventType onPropertyChange
   * /
  public static const PROPERTY_CHANGE:String = "onPropertyChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PropertyGrid_source_recordId_value_oldValueEvent.__PARAMETER_SEQUENCE__=( ["source", "recordId", "value", "oldValue", "eOpts"]);}/*;

  public*/ function PropertyGrid_source_recordId_value_oldValueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Twnc(type, arguments);
  }/*

  /**
   * The original property value prior to editing
   * /
  public native function get oldValue():Object;

  /**
   * The record's id in the data store
   * /
  public native function get recordId():String;

  /**
   * The source data object for the grid (corresponds to the same object passed in
   * as the →<code>source</code> config property).
   * @see ext.grid.property.PropertyGrid#source
   * /
  public native function get source():Object;

  /**
   * The current edited property value
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PropertyGrid_source_recordId_value_oldValueEvent$,
      super$Twnc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_PROPERTY_CHANGE: "onBeforePropertyChange",
        PROPERTY_CHANGE: "onPropertyChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
