Ext.define("com.coremedia.ui.ckeditor.RichTextActionBase", function(RichTextActionBase) {/*package com.coremedia.ui.ckeditor {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;

import ext.Action;
import ext.Component;
import ext.StringUtil;
import ext.ZIndexManager;
import ext.button.Button;
import ext.menu.CheckItem;

[PublicApi]
public class RichTextActionBase extends Action {
  private var commandName:String;
  private var commandParameter:Object;
  private var ckEditor:*;
  private var pressed:Boolean = false;
  private var syncStateEnabled:Boolean = true;

  //the toolbar window group
  private var windowGroup:ZIndexManager;

  private var disabledValueExpression:ValueExpression;

  /**
   * @param config the config object
   *
   * @see LinkAction
   * @see PasteAction
   * @see PasteTextAction
   * /
  public*/ function RichTextActionBase$(config/*:RichTextAction = null*/) {if(arguments.length<=0)config=null;
    this.disabledValueExpression$dtxb = AS3.getBindable(config,"forceDisabledValueExpression");
    if(this.disabledValueExpression$dtxb) {
      this.disabledValueExpression$dtxb.addChangeListener(AS3.bind(this,"syncState"));
    }

    this.commandName$dtxb = AS3.getBindable(config,"commandName");
    this.commandParameter$dtxb = AS3.getBindable(config,"commandParameter");
    delete config['commandName'];
    delete config['commandParameter'];
    this.super$dtxb(config);
  }/*


  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
  }/*

  internal*/ function clickHandler()/*:void*/ {
    if (this.windowGroup$dtxb) {
      this.windowGroup$dtxb.hideAll();
    }
    if (this.commandParameter$dtxb) {
      this.ckEditor$dtxb.execCommand(this.commandName$dtxb, this.commandParameter$dtxb);
    } else {
      this.ckEditor$dtxb.execCommand(this.commandName$dtxb);
    }
  }/*

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCKEditor(ckEditor/*:**/)/*:void*/ {
    this.ckEditor$dtxb = ckEditor;
    if (this.ckEditor$dtxb) {
      // Now, we can get the command instance and attach as state change listener:
      var command/*:**/ = ckEditor.getCommand(this.commandName$dtxb);
      if (!command) {
//        throw new Error(StringUtil.format("'{0}' is an unknown CKEditor command name.", commandName));
        com.coremedia.ui.logging.Logger.warn(Ext.String.format("'{0}' is an unknown CKEditor command name.", this.commandName$dtxb));
        return;
      }
      command.on('state',AS3.bind( this,"syncState"));
      this.syncState();
    }
  }/*

  /** @private * /
  [InjectFromExtParent(variable="richTextWindowGroup")]
  public*/ function setWindowGroup(grp/*:ZIndexManager*/)/*:void*/ {
    this.windowGroup$dtxb = grp;
  }/*

  private*/ function isPressed()/*:Boolean*/ {
    return this.pressed$dtxb;
  }/*

  private*/ function setPressed(pressed/*:Boolean*/)/*:void*/ {
    this.pressed$dtxb = pressed;
    this.each(AS3.bind(this,"syncPressed$dtxb"), this);
  }/*

  private*/ function syncPressed(component/*:Component*/)/*:void*/ {
    if (AS3.is(component,  Ext.button.Button)) {
      (AS3.as(component,  Ext.button.Button)).toggle(this.pressed$dtxb, true);
    } else if (AS3.is(component,  Ext.menu.CheckItem)) {
      (AS3.as(component,  Ext.menu.CheckItem)).setChecked(this.pressed$dtxb, true);
    }
  }/*

  internal*/ function syncState()/*:void*/ {
    if (this.syncStateEnabled$dtxb) {

      this.setDisabled(this.isDisabled());

      if(!this.ckEditor$dtxb) {
        return;
      }

      var command/*:**/ = this.ckEditor$dtxb.getCommand(this.commandName$dtxb);
      var state/*:**/ = command.state;

      var disabled/*:Boolean*/ = this.ckEditor$dtxb.readOnly || state === CKEDITOR.TRISTATE_DISABLED;
      if (disabled !== this.isDisabled()) {
        this.setDisabled(disabled);
      }

      var pressed/*:Boolean*/ = state === CKEDITOR.TRISTATE_ON;
      if (pressed !== this.isPressed$dtxb()) {
        this.setPressed$dtxb(pressed);
      }
    }
  }/*

  internal*/ function setSyncStateEnabled(value/*:Boolean*/)/*:void*/ {
    this.syncStateEnabled$dtxb = value;
  }/*

  override public*/ function isDisabled()/*:Boolean*/ {
    return this.disabledValueExpression$dtxb ? this.disabledValueExpression$dtxb.getValue() : Ext.Action.prototype.isDisabled.call(this);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {
        "": ["PublicApi"],
        setCKEditor: ["InjectFromExtParent"],
        setWindowGroup: [
          "InjectFromExtParent",
          [
            "variable",
            "richTextWindowGroup"
          ]
        ]
      },
      commandName$dtxb: null,
      commandParameter$dtxb: null,
      ckEditor$dtxb: undefined,
      pressed$dtxb: false,
      syncStateEnabled$dtxb: true,
      windowGroup$dtxb: null,
      disabledValueExpression$dtxb: null,
      constructor: RichTextActionBase$,
      super$dtxb: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      removeComponent: removeComponent,
      clickHandler: clickHandler,
      setCKEditor: setCKEditor,
      setWindowGroup: setWindowGroup,
      isPressed$dtxb: isPressed,
      setPressed$dtxb: setPressed,
      syncPressed$dtxb: syncPressed,
      syncState: syncState,
      setSyncStateEnabled: setSyncStateEnabled,
      isDisabled: isDisabled,
      requires: [
        "Ext.Action",
        "Ext.String",
        "Ext.button.Button",
        "Ext.menu.CheckItem",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
