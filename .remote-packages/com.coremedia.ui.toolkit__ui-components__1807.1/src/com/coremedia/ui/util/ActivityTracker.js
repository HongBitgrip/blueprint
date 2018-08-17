Ext.define("com.coremedia.ui.util.ActivityTracker", function(ActivityTracker) {/*package com.coremedia.ui.util {
import ext.Ajax;
import ext.Ext;
import ext.dom.Element;
import ext.util.Observable;

import js.Document;

/**
 * Fires when user activity was detected.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>tracker:ActivityTracker</code> this tracker
 *   </li>
 * </ul>
 * /
[Event(name = "activityDetected")] // NOSONAR - no type

/**
 * A singleton that tracks user activity in the form of
 * mouse moves and PUT requests. Clients may also call
 * activityDetected() to indicate that the user is known to
 * be active in some other way.
 * /
public class ActivityTracker extends Observable {
  /**
   * The name of the event that is thrown when user activity has been detected.
   * /
  public static const ACTIVITY_DETECTED_EVENT:String = "activityDetected";

  /**
   * The singleton activity tracker.
   * /
  private static*/ var activityTracker$static/*:ActivityTracker*/=null;/*

  /**
   * The date and time of the last observed activity.
   * /
  private var lastActive:Date;

  /**
   * Return the activity tracker.
   *
   * @return the activity tracker
   * /
  public static*/ function getInstance$static()/*:ActivityTracker*/ {
    if (!activityTracker$static) {
      new ActivityTracker();
    }
    return activityTracker$static;
  }/*

  /**
   * Do not call. Call ActivityTracker.getInstance() instead.
   * @private
   * /
  // Create the singleton activity tracker and register it in the
  // instance field. Register listeners for all relevant events.
  public*/ function ActivityTracker$() {var this$=this;this.super$Uyd1();
    if (activityTracker$static !== null) {
      throw new AS3.Error("Only one ActivityTracker may be created");
    }
    activityTracker$static = this;

    // Every mouse move is a sign of activity.
    this.addBodyListeners$Uyd1(window.document);

    // So is every PUT request. (Event polling, reloads and periodic queries
    // are expected to use GET and POST, only.)
    //TODO: EXT6_API
    var originalFn/*:Function*/ = Ext.Ajax['request'];  // Trick Jangaroo into not binding this function
    Ext.Ajax.request = function (options/*:Object*/)/*:void*/ {
      if (options) {
        var method/*:String*/ = options.method;
        if (method && method.toUpperCase() === "PUT") {
          this$.activityDetected();
        }
      }
      originalFn.call(Ext.Ajax, options); // Have to provide scope
    };

    // Avoid special cases. We are active now.
    this.activityDetected();
  }/*

  private*/ function addBodyListeners(document/*:Document*/)/*:void*/ {
    var body/*:Element*/ = Ext.get(document.body);
    body.addListener("mousemove",AS3.bind( this,"activityDetected"));
    body.addListener("mousedown",AS3.bind( this,"activityDetected"));
    body.addListener("keydown",AS3.bind( this,"activityDetected"));
  }/*

  private*/ function removeBodyListeners(document/*:Document*/)/*:void*/ {
    var body/*:Element*/ = Ext.get(document.body);
    body.removeListener("mousemove",AS3.bind( this,"activityDetected"));
    body.removeListener("mousedown",AS3.bind( this,"activityDetected"));
    body.removeListener("keydown",AS3.bind( this,"activityDetected"));
  }/*

  /**
   * Inform the activity tracker that user activity was detected.
   * /
  public*/ function activityDetected()/*:void*/ {
    this.lastActive$Uyd1 = new Date();
    if (this.hasListener(ActivityTracker.ACTIVITY_DETECTED_EVENT)) {
      this.fireEvent(ActivityTracker.ACTIVITY_DETECTED_EVENT, this);
    }
  }/*

  /**
   * Register an iframe with the activity tracker.
   *
   * @param document the iframe
   * /
  public*/ function addIframe(document/*:Document*/)/*:void*/ {
    this.addBodyListeners$Uyd1(document);
  }/*

  /**
   * Unregister an iframe from the activity tracker.
   *
   * @param document the iframe
   * /
  public*/ function removeIframe(document/*:Document*/)/*:void*/ {
    this.removeBodyListeners$Uyd1(document);
  }/*

  /**
   * Return the time of the last observed activity.
   *
   * @return the time
   * /
  public*/ function getLastActive()/*:Date*/ {
    return this.lastActive$Uyd1;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": [
        "Event",
        [
          "name",
          "activityDetected"
        ]
      ]},
      lastActive$Uyd1: null,
      constructor: ActivityTracker$,
      super$Uyd1: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      addBodyListeners$Uyd1: addBodyListeners,
      removeBodyListeners$Uyd1: removeBodyListeners,
      activityDetected: activityDetected,
      addIframe: addIframe,
      removeIframe: removeIframe,
      getLastActive: getLastActive,
      statics: {
        ACTIVITY_DETECTED_EVENT: "activityDetected",
        getInstance: getInstance$static
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Ajax",
        "Ext.util.Observable"
      ]
    };
});
