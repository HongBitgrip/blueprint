Ext.define("com.coremedia.ui.data.BeanState", function(BeanState) {/*package com.coremedia.ui.data {
import com.coremedia.ui.util.Enum;

/**
 * This class defines constants for all four possible states of a (Remote)Bean.
 * While even a (local) Bean can be queried for its state, it will always return READABLE.
 * Only RemoteBeans use all four states.
 *
 * @see Bean#getState()
 * @see #UNKNOWN
 * @see #READABLE
 * @see #UNREADABLE
 * @see #NON_EXISTENT
 * /
[PublicApi]
public class BeanState extends Enum {
  /**
   * The name of the <code>state</code> property of a Bean to use for
   * event listeners and generic access.
   * <p>The name is not simply 'state', but '_state', so it does
   * not clash with custom Bean properties.</p>
   * 
   * @eventType _state
   *
   * @see Bean#getState()
   * /
  public static const PROPERTY_NAME:String = "_state";

  /**
   * A RemoteBean is not yet loaded, thus its state is unknown.
   * /
  public static const UNKNOWN:BeanState =*/function UNKNOWN$static_(){BeanState.UNKNOWN=( new BeanState(undefined, undefined));}/*;
  /**
   * The normal state of all Beans. A RemoteBean reaches this state after successful loading.
   * /
  public static const READABLE:BeanState =*/function READABLE$static_(){BeanState.READABLE=( new BeanState(true, true));}/*;
  /**
   * A RemoteBean that exists, but is not readable for this client.
   * /
  public static const UNREADABLE:BeanState =*/function UNREADABLE$static_(){BeanState.UNREADABLE=( new BeanState(false, true));}/*;
  /**
   * A RemoteBean that does not exist or no longer exists.
   * /
  public static const NON_EXISTENT:BeanState =*/function NON_EXISTENT$static_(){BeanState.NON_EXISTENT=( new BeanState(false, false));}/*;

  /**
   * @private
   * /
  public*/ function BeanState$(readable/*:Boolean*/, exists/*:Boolean*/) {this.super$h7i1();
    this['readable'] = readable;
    this['exists'] = exists;
  }/*

  /**
   * Return whether this BeanState means that the RemoteBean is readable.
   * Returns true for READABLE, undefined for UNKNOWN, and false for all other states.
   * @return whether this BeanState means that the RemoteBean is readable
   *
   * @see #READABLE
   * /
  public native function get readable():Boolean;

  /**
   * Return whether this BeanState means that the RemoteBean exists.
   * Returns false for NON_EXISTENT, undefined for UNKNOWN, and true for all other states.
   * @return whether this BeanState means that the RemoteBean exists
   *
   * @see #NON_EXISTENT
   * /
  public native function get exists():Boolean;

  /**
   * An array containing all bean states.
   * /
  [ArrayElementType("com.coremedia.ui.data.BeanState")]
  public static const values:Array =*/function values$static_(){BeanState.values=( com.coremedia.ui.util.Enum.collectValues(BeanState));}/*;

  /**
   * Return the bean state with the given name.
   *
   * @param name the name of the bean state
   * @return the bean state
   * /
  public static*/ function named$static(name/*:String*/)/*:BeanState*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, BeanState);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      constructor: BeanState$,
      super$h7i1: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROPERTY_NAME: "_state",
        UNKNOWN: undefined,
        READABLE: undefined,
        UNREADABLE: undefined,
        NON_EXISTENT: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          UNKNOWN$static_();
          READABLE$static_();
          UNREADABLE$static_();
          NON_EXISTENT$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
