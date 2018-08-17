Ext.define("com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase", function(PasteLinkActionBase) {/*package com.coremedia.blueprint.base.components.navigationlink {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Action;
import ext.Component;

[Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListPasteAction")]
public class PasteLinkActionBase extends Action {

  private var listExpression:ValueExpression;
  private var disabledExpression:ValueExpression;

  private var allowedDocTypes:String;
  internal native function get items():Array;

  public*/ function PasteLinkActionBase$(config/*:PasteLinkAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"pasteFromClipboard$oUYW"));
    this.allowedDocTypes$oUYW = AS3.getBindable(config,"allowedDocTypes");
    this.super$oUYW(config);
    this.listExpression$oUYW = AS3.getBindable(config,"contentValueExpression");
    this.disabledExpression$oUYW = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateDisabled$oUYW"));
    this.disabledExpression$oUYW.addChangeListener(AS3.bind(this,"updateDisabledStatus$oUYW"));
    com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().addValueChangeListener(AS3.bind(this,"updateDisabledStatus$oUYW"));
    this.updateDisabledStatus$oUYW();
  }/*

  private*/ function calculateDisabled()/*:Boolean*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contents/*:Array*/ = clipboard.getContents();
    return !contents || contents.length === 0 || this.isDisabledFor$oUYW(contents);
  }/*

  /**
   * Return the contents on which this action operates.
   * /
  protected*/ function getContents()/*:Array*/ {
    var value/*:**/ = this.listExpression$oUYW.getValue();
    return AS3.is( value,  com.coremedia.cap.content.Content) ? [AS3.as(value,  com.coremedia.cap.content.Content)] :AS3.is( value,  Array) ?AS3.as( value,  Array) : [];
  }/*

  private*/ function updateDisabledStatus()/*:void*/ {
    var value/*:**/ = this.disabledExpression$oUYW.getValue();
    this.setDisabled(value === undefined || value);
  }/*

  private*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    for(var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if(content.getType().isSubtypeOf(this.allowedDocTypes$oUYW) && !content.isDeleted()) {
        return false;
      }
    }
    return true;
  }/*

  private*/ function pasteFromClipboard()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    this.listExpression$oUYW.setValue([contentsToPaste[0]]);
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().removeValueChangeListener(AS3.bind(this,"updateDisabledStatus$oUYW"));
      this.disabledExpression$oUYW && this.disabledExpression$oUYW.removeChangeListener(AS3.bind(this,"updateDisabledStatus$oUYW"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": [
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction"
        ]
      ]},
      listExpression$oUYW: null,
      disabledExpression$oUYW: null,
      allowedDocTypes$oUYW: null,
      constructor: PasteLinkActionBase$,
      super$oUYW: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled$oUYW: calculateDisabled,
      getContents: getContents,
      updateDisabledStatus$oUYW: updateDisabledStatus,
      isDisabledFor$oUYW: isDisabledFor,
      pasteFromClipboard$oUYW: pasteFromClipboard,
      removeComponent: removeComponent,
      requires: [
        "Ext.Action",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
