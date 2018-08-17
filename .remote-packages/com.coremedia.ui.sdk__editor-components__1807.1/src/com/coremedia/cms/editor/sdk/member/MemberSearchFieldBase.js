Ext.define("com.coremedia.cms.editor.sdk.member.MemberSearchFieldBase", function(MemberSearchFieldBase) {/*package com.coremedia.cms.editor.sdk.member {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.form.field.ComboBox;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class MemberSearchFieldBase extends ComboBox implements IValidationStateMixin {

  public*/ function MemberSearchFieldBase$(config/*:MemberSearchField = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$AXWl(config);

    this.on("blur", function ()/*:void*/ {
      this$.setValue("");
      this.blur();
    });
    this.mon(this.getStore(), "load",AS3.bind( this,"validateField$AXWl"));
    this.mon(this.getStore(), "datachanged",AS3.bind( this,"validateField$AXWl"));
    this.initValidationStateMixin();
  }/*

  protected static*/ function computeUrl$static()/*:String*/ {
    return com.coremedia.ui.data.impl.RemoteService.REMOTE_SERVICE_URI
            + (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getSession().getConnection().getUserRepository(),  com.coremedia.ui.data.RemoteBean)).getUriPath()
            + "/suggestions";
  }/*

  private*/ function validateField()/*:void*/ {
    var result/*:Boolean*/ = this.inputValidator(AS3.as(AS3.getBindable(this,"value","DUMMY"),  String));
    var errorMsg/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MemberSearchField_qtip_no_member_found');
    this.applyValidationResult(result, errorMsg);

  }/*

  public*/ function applyValidationResult(result/*:Boolean*/, errorMsg/*:String=""*/)/*:void*/ {if(arguments.length<=1)errorMsg="";
      if (!result) {
        // don't show an empty drop down list
        this.collapse();
        AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
        AS3.setBindable(this,"validationMessage" , errorMsg);
      } else {
        AS3.setBindable(this,"validationState" , null);
        AS3.setBindable(this,"validationMessage" , null);
      }
  }/*

  protected*/ function inputValidator(value/*:String*/)/*:Boolean*/ {
    return !(value.length > 0 && value.length >= this.minChars && this.getStore().getCount() === 0);
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  [Bindable]
  /** @inheritDoc * /
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.ComboBox",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      constructor: MemberSearchFieldBase$,
      super$AXWl: function() {
        Ext.form.field.ComboBox.prototype.constructor.apply(this, arguments);
      },
      validateField$AXWl: validateField,
      applyValidationResult: applyValidationResult,
      inputValidator: inputValidator,
      statics: {computeUrl: computeUrl$static},
      requires: [
        "Ext.form.field.ComboBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
