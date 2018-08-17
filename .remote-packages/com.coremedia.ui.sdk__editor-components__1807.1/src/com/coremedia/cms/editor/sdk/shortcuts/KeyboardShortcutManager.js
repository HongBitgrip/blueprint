Ext.define("com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager", function(KeyboardShortcutManager) {/*package com.coremedia.cms.editor.sdk.shortcuts {
import ext.Action;
import ext.ActionRef;
import ext.Component;
import ext.Ext;
import ext.WindowManager;
import ext.app.Application;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.mixin.Keyboard;
import ext.window.Window;

[PublicApi]
/**
 * A Keyboard subclass attaching to the root DOM element and providing a utility function to handle
 * key events by executing an Action (<code>addKeyboardShortcut()</code>).
 * /
public class KeyboardShortcutManager extends Keyboard {
  /**
   * The top-level DOM element to whose keyboard events to listen to.
   * /
  internal var el:Element =*/function el_(){this.el=( Ext.getDoc());}/*;

  public*/ function KeyboardShortcutManager$(config/*:KeyboardShortcutManager = null*/) {this.super$Y6T5();el_.call(this);if(arguments.length<=0)config=null;
    this.initConfig(config || {});
    this.initKeyMap();
  }/*

  /**
   * Add a keyboard shortcut, assigning a key name to an action.
   * @param keyDescriptor a key event descriptor like the keyMap keys documented in
   *   mixin <code>ext.mixin.IKeyboard</code>.
   * @param action The action to execute when the shortcut occurs.
   *   If an ActionRef is given, the action with that ID is searched
   *   in the actions of all containers starting from the currently
   *   focused element.
   * @param description A human-readable description of the action that can be used to generate a keyboard shortcut
   *   overview.
   * @param defaultEventAction A default action to apply to the event when the action returns not `true`.
   *   Possible values are: stopPropagation, preventDefault, stopEvent (i.e. stopPropagation and preventDefault).
   *   If no value is set no action is performed and the default browser event handling is applied.
   *
   *  @see ext.mixin.IKeyboard
   * /
  public*/ function addKeyboardShortcut(keyDescriptor/*:String*/, action/*:Action*/, description/*:String = null*/, defaultEventAction/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:description=null;case 3:defaultEventAction=null;}
    var newEntry/*:Object*/ = {};
    newEntry[keyDescriptor] = {
      handler: createExecuteActionHandler$static(action, defaultEventAction),
      description: description
    };
    AS3.setBindable(this,"keyMap" , newEntry); // does not overwrite, but complement old value thanks to magic Ext JS setter semantics!
  }/*

  /**
   * Removes an existing shortcut for the given key descriptor
   * @param keyDescriptor the shortcut to remove from the list of shortcuts.
   * /
  public*/ function removeKeyboardShortcut(keyDescriptor/*:String*/)/*:void*/ {
    var key/*:String*/ = getKey$static(keyDescriptor);
    if(AS3.getBindable(this,"keyMap","DUMMY")[key]) {
      var bindings/*:Array*/ = AS3.getBindable(this,"keyMap","DUMMY")[key];
      for(var i/*:int*/ = 0; i<bindings.length; i++) {
        if(matchesBinding$static(keyDescriptor, bindings[i])) {
          bindings.splice(i, 1);

          //no more bindings available, so remove the entry entirely
          if(bindings.length === 0) {
            delete AS3.getBindable(this,"keyMap","DUMMY")[key];
          }
          return;
        }
      }
    }

    AS3.trace('[WARN]', 'No shortcut found for key descriptor "' + keyDescriptor +  '" that could be removed');
  }/*

  private static*/ function findActionById$static(actionId/*:String*/)/*:Action*/ {
    var action/*:Action*/;
    var focusedElement/*:Element*/ = AS3.cast(Ext.dom.Element,Ext.dom.Element.getActiveElement(true));
    var cmp/*:Component*/ = findNearestComponent$static(focusedElement);
    if (cmp) {
      var container/*:Container*/ = cmp.findParentByType(Ext.container.Container);
      if (container) {
        action = container.getAction(actionId);
      }
    }
    if (!action) {
      // Dispatch to top-level floating window. We cannot use WindowManager.getActve(), since it also returns ToolTips.
      var topLevelWindow/*:Window*/ = null;
      Ext.WindowManager.eachTopDown(function(component/*:Component*/)/*:Boolean*/ {
        topLevelWindow =AS3.as( component,  Ext.window.Window);
        return !topLevelWindow;
      });
      if (topLevelWindow) {
        action = topLevelWindow.getAction(actionId);
      }
      if (!action) {
        // Only look for global actions when top-level window is not modal:
        if (!topLevelWindow || !topLevelWindow.modal) {
          action = Ext.app.Application.instance.getMainView().getAction(actionId);
        }
      }
    }
    return action;
  }/*

  /**
   * Return the Component the focused element belongs to.
   * @param element the focused element
   * @return the owner component or null if no such component could be resolved.
   * /
  private static*/ function findNearestComponent$static(element/*:Element*/)/*:Component*/ {
    while (element) {
      if (element.component) {
        return element.component;
      }
      element = element.parent();
    }
    return null;
  }/*

  private static*/ function createExecuteActionHandler$static(action/*:Action*/, defaultEventAction/*:String = null*/)/*:Function*/ {if(arguments.length<=1)defaultEventAction=null;
    return function(event/*:Event*/)/*:**/ {
      var localAction/*:Action*/;
      var result/*:**/ = true;
      if (AS3.is(action,  ext.ActionRef)) {
        localAction = findActionById$static(action.actionId);
      } else if (action && !action.isInstance) {
        localAction = action = Ext.create(action);
      } else {
        localAction = action;
      }
      if (localAction && !localAction.isHidden() && !localAction.isDisabled()) {
        result = localAction.execute();
      }
      if (defaultEventAction && Ext.isFunction(event[defaultEventAction])) {
        event[defaultEventAction]();
      }
      return result;
    };
  }/*

  /**
   * Returns the key for a shortcuts without additional keys, assumes the key at the last position.
   * @param keyDescriptor the descriptor that contains the key
   * /
  private static*/ function getKey$static(keyDescriptor/*:String*/)/*:String*/ {
    var items/*:Array*/ = keyDescriptor.split("+");
    return items[items.length-1].toUpperCase();
  }/*

  /**
   * Checks if the additional control key configured for the shortcut
   * matches the given 'keyDescriptor' string.
   * e.g. if the string 'ctrl+alt+h' matches the given binding.
   * @param keyDescriptor the shortcut descriptor that should be compared
   * @param binding one shortcut binding that is bound to the key
   * /
  private static*/ function matchesBinding$static(keyDescriptor/*:String*/, binding/*:Object*/)/*:Boolean*/ {
    var items/*:Array*/ = keyDescriptor.split("+");
    var key/*:String*/ = getKey$static(keyDescriptor);
    if(binding['name'] !== key) {
      return false;
    }

    if(binding['altKey'] && items.indexOf('alt') === -1) {
      return false;
    }
    if(binding['ctrlKey'] && items.indexOf('ctrl') === -1) {
      return false;
    }
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.mixin.Keyboard",
      metadata: {"": ["PublicApi"]},
      constructor: KeyboardShortcutManager$,
      super$Y6T5: function() {
        Ext.mixin.Keyboard.prototype.constructor.apply(this, arguments);
      },
      addKeyboardShortcut: addKeyboardShortcut,
      removeKeyboardShortcut: removeKeyboardShortcut,
      requires: [
        "AS3.trace",
        "Ext",
        "Ext.ZIndexManager",
        "Ext.app.Application",
        "Ext.container.Container",
        "Ext.dom.Element",
        "Ext.mixin.Keyboard",
        "Ext.window.Window",
        "ext.ActionRef"
      ]
    };
});
