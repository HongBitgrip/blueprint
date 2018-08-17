Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomButtonBase", function(ControlRoomButtonBase) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ControlRoomButtonBase extends IconButton {
  private var tooltipExpression:ValueExpression;

  public*/ function ControlRoomButtonBase$(config/*:ControlRoomButton = null*/) {if(arguments.length<=0)config=null;
    this.tooltipExpression$oTw$ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.ControlRoomButton.CONTROL_ROOM_VISIBLE, this);

    this.super$oTw$(config);
  }/*

  protected*/ function getTooltipValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var isVisible/*:Boolean*/ = this$.tooltipExpression$oTw$.getValue();
      if (isVisible) {
        return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_hide_tooltip');
      } else {
        return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'ControlRoomPlugin_btn_show_tooltip');
      }
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      tooltipExpression$oTw$: null,
      constructor: ControlRoomButtonBase$,
      super$oTw$: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      getTooltipValueExpression: getTooltipValueExpression,
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.ControlRoomButton"]
    };
});
