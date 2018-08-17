Ext.define("com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut", function(AddKeyboardShortcut) {/*package com.coremedia.cms.editor.sdk.shortcuts {

import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.ui.logging.Logger;

import ext.Action;
import ext.ActionRef;

[PublicApi]
/**
 * Assigns a global keyboard shortcut to the current HTML document.
 * This class is meant to be used in the <code>&lt;configuration&gt;</code> section of a Studio plugin MXML.
 * It uses <code>editorContext.getKeyboardShortcutManager().addKeyboardShortcut(...)</code> to register the specified
 * keyboard shortcuts for the given action.
 * 
 * @see com.coremedia.cms.editor.sdk.IEditorContext#getKeyboardShortcutManager()
 * @see com.coremedia.cms.editor.sdk.shortcuts.KeyboardShortcutManager#addKeyboardShortcut()
 * /
public class AddKeyboardShortcut implements EditorPlugin {

  /**
   * A shortcut format string specifying an integer key code or symbolic name from <code>ext.event.Event</code>,
   * optionally prefixed with a combination of 'ctrl', 'shift' or 'alt' each followed by a '+' separator,
   * e.g. 'ctrl+shift+113' or 'shift+alt+F2'.
   * This is an alternative to explicitly specifying a key, shift, ctrl, and alt config parameter.
   * To allow localization, fetch the shortcut string from a resource bundle.
   *
   * @see ext.event.Event
   * @see ext.mixin.IKeyboard
   * /
  public var shortcut:String;

  /**
   * The action to execute when the shortcut occurs.
   * If an ActionRef is given, the action with that ID is searched
   * in the actions of all containers starting from the currently
   * focused element.
   * /
  public var action:Action;

  /**
   * The ID of the action to find and execute when the shortcut occurs.
   * Shorthand for setting an ActionRef as action.
   * /
  public var actionId:String;

  /*
   * A human-readable description of the action that is used to generate a keyboard shortcut overview.
   * /
  public var description:String;

  /**
   * A default action to apply to the event when the action returns not `true`.
   * Possible values are: stopPropagation, preventDefault, stopEvent (i.e. stopPropagation and preventDefault).
   * If no value is set no action is performed and the default browser event handling is applied.
   * /
  public var defaultEventAction:String;

  public*/ function AddKeyboardShortcut$(config/*:AddKeyboardShortcut = null*/) {if(arguments.length<=0)config=null;
    if (config.shortcut && (config.action || config.actionId)) {
      this.shortcut = config.shortcut;
      this.defaultEventAction = config.defaultEventAction;
      if (config.action && config.actionId) {
        com.coremedia.ui.logging.Logger.warn("Only either action or actionId may be given; action will be ignored.");
      }
      this.action = config.actionId ? AS3.cast(ext.ActionRef,{ actionId: config.actionId}) : config.action;
      this.actionId = this.action.actionId;
      this.description = config.description;
    } else {
      com.coremedia.ui.logging.Logger.error("Missing shortcut or action or actionId.");
    }
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    if (this.shortcut && this.action) {
      editorContext.getKeyboardShortcutManager().addKeyboardShortcut(this.shortcut, this.action, this.description, this.defaultEventAction);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      shortcut: null,
      action: null,
      actionId: null,
      description: null,
      defaultEventAction: null,
      constructor: AddKeyboardShortcut$,
      init: init,
      requires: [
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.ui.logging.Logger",
        "ext.ActionRef"
      ]
    };
});
