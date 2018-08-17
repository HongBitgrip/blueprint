Ext.define("com.coremedia.cms.editor.sdk.clipboard.Clipboard", function(Clipboard) {/*package com.coremedia.cms.editor.sdk.clipboard {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ArrayUtils;

/**
 * Global Clipboard
 * /
public class Clipboard {

  private static*/ var instance$static/*:Clipboard*/;/* =*/function instance$static_(){instance$static=( new Clipboard());};/*

  public static const COPY:String = "copy";
  public static const CUTLINK:String = "cutLink";
  public static const MOVE:String = "move";

  private static const*/var VALUES_PROPERTY$static/*:String*/ = "values";/*
  private static const*/var OPERATION_PROPERTY$static/*:String*/ = "operation";/*

  /**
   * A clipboard flavor for an array of contents.
   *
   * @see com.coremedia.cap.content.Content
   * /
  public static const CONTENTS_FLAVOR:String = "contents";

  private var bean:Bean =*/function bean_(){this.bean$kM5a=( com.coremedia.ui.data.beanFactory.createLocalBean());}/*;*/

  function Clipboard$() {/*
    super()*/bean_.call(this);;
    this.emptyClipboard();
  }/*

  /**
   * Set the clipboard to a new value.
   *
   * @param value new value to store in clipboard
   * @param operation the operation that caused the clipboard to be updated
   * @param flavor the data flavor for the given value; default 'contents'
   * /
  public*/ function setValue(value/*:**/, operation/*:String*/, flavor/*:String = null*/)/*:void*/ {if(arguments.length<=2)flavor=null;
    var values/*:Object*/ = {};
    values[flavor || Clipboard.CONTENTS_FLAVOR] = value;
    this.setValues(values, operation);
  }/*

  /**
   * Set the clipboard to values of multiple flavors.
   *
   * @param values a map from flavors to values
   * @param operation the operation that caused the clipboard to be updated
   * /
  public*/ function setValues(values/*:Object*/, operation/*:String*/)/*:void*/ {
    this.bean$kM5a.updateProperties({
      values: values,
      operation: operation
    });
  }/*

  /**
   * Empty the clipboard.
   * /
  public*/ function emptyClipboard()/*:void*/ {
    this.setValues({}, Clipboard.COPY);
  }/*

  /**
   * Return the available flavor that matches one of the given
   * acceptable flavors. Return undefined if no acceptable flavor
   * matches the available flavors.
   *
   * @param acceptableFlavors acceptable flavors as Strings
   * /
  public*/ function getFlavor(/*... acceptableFlavors*/)/*:String*/ {var acceptableFlavors=Array.prototype.slice.call(arguments);
    var values/*:**/ = this.bean$kM5a.get(VALUES_PROPERTY$static);
    acceptableFlavors = com.coremedia.ui.util.ArrayUtils.flatten(acceptableFlavors);
    for (var i/*:int*/ = 0; i < acceptableFlavors.length; i++) {
      var flavor/*:String*/ = acceptableFlavors[i];
      if (values.hasOwnProperty(flavor)) {
        return flavor;
      }
    }
    return undefined;
  }/*

  /**
   * Return the current value. Any number of acceptable flavors may be passed
   * as argument in order of decreasing precedence.
   * If no value for any of the given flavors is available, return undefined.
   *
   * @param acceptableFlavors acceptable flavors as Strings
   * /
  public*/ function getValue(/*... acceptableFlavors*/)/*:**/ {var acceptableFlavors=Array.prototype.slice.call(arguments);
    var flavor/*:String*/ = this.getFlavor(acceptableFlavors);
    if (flavor === undefined) {
      return undefined;
    }

    var values/*:**/ = this.bean$kM5a.get(VALUES_PROPERTY$static);
    return values[flavor];
  }/*

  /**
   * Return the clipboard content for the 'contents' flavor.
   * /
  public*/ function getContents()/*:Array*/ {
    return this.getValue(Clipboard.CONTENTS_FLAVOR) || [];
  }/*

  /**
   * Return the current operation.
   * /
  public*/ function getOperation()/*:String*/ {
    return AS3.as( this.bean$kM5a.get(OPERATION_PROPERTY$static),  String);
  }/*

  /**
   * Register for a change event.
   *
   * @param onChange the callback function for the change event
   * /
  public*/ function addValueChangeListener(onChange/*: Function*/)/*:void*/ {
    this.bean$kM5a.addValueChangeListener(onChange);
  }/*

  /**
   * Remove the value change listener from the list of listeners.
   *
   * @param onChange the callback function
   * /
  public*/ function removeValueChangeListener(onChange/*:Function*/)/*:void*/ {
    this.bean$kM5a.removeValueChangeListener(onChange);
  }/*


  /**
   * Return the singleton clipboard instance.
   *
   * @return the clipboard
   * /
  public static*/ function getInstance$static()/*:Clipboard*/ {
    return instance$static;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Clipboard$,
      setValue: setValue,
      setValues: setValues,
      emptyClipboard: emptyClipboard,
      getFlavor: getFlavor,
      getValue: getValue,
      getContents: getContents,
      getOperation: getOperation,
      addValueChangeListener: addValueChangeListener,
      removeValueChangeListener: removeValueChangeListener,
      statics: {
        instance: undefined,
        COPY: "copy",
        CUTLINK: "cutLink",
        MOVE: "move",
        CONTENTS_FLAVOR: "contents",
        getInstance: getInstance$static,
        __initStatics__: function() {
          instance$static_();
        }
      },
      requires: [
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
