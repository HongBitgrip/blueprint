Ext.define("com.coremedia.cms.editor.sdk.actions.RestoreVersionActionBase", function(RestoreVersionActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class RestoreVersionActionBase extends ParameterizedBeanAction {
  private var versionValueExpression:ValueExpression;
  private var readOnlyValueExpression:ValueExpression;
  private var forceReadOnlyValueExpression:ValueExpression;

  public*/ function RestoreVersionActionBase$(config/*:RestoreVersionAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"valueExpression" , AS3.getBindable(config,"valueExpression"));
    this.versionValueExpression$UjUS = AS3.getBindable(config,"versionValueExpression");

    if (AS3.getBindable(config,"forceReadOnlyValueExpression")) {
      this.forceReadOnlyValueExpression$UjUS = AS3.getBindable(config,"forceReadOnlyValueExpression");
    } else {
      this.forceReadOnlyValueExpression$UjUS = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }

    this.readOnlyValueExpression$UjUS = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"valueExpression"),
            this.forceReadOnlyValueExpression$UjUS);

    this.super$UjUS(AS3.cast(com.coremedia.cms.editor.sdk.actions.RestoreVersionAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'restoreVersion', {restMethod: "copyProperties"})));
  }/*


  override protected*/ function executeAction()/*:void*/ {
    var content/*:Content*/ = AS3.getBindable(this,"valueExpression")?AS3.as( AS3.getBindable(this,"valueExpression").getValue(),  com.coremedia.cap.content.Content) : null;
    if (content) {
      if (content.isCheckedOut()) {
        this.confirm$UjUS();
      } else {
        com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction.prototype.executeAction.call(this);
      }
    }
  }/*

  override protected*/ function makeRequestParameters(bean/*:RemoteBean*/)/*:Object*/ {
    var version/*:Version*/ =AS3.as( this.versionValueExpression$UjUS.getValue(),  com.coremedia.cap.content.Version);
    if (bean &&AS3.is( bean,  com.coremedia.cap.content.Content) && version) {
      return {
        source: version
      };
    } else {
        return undefined;
    }
  }/*

  private*/ function confirm()/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_restoreVersion_verifyMessage_title'),
                              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_restoreVersion_verifyMessage_text'),
                              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_restoreVersion_buttonText'),AS3.bind(
                              this,"callback$UjUS"));
  }/*
  
  private*/ function callback(buttonId/*:String*/)/*:void*/ {
    if (buttonId === "ok") {
      com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction.prototype.executeAction.call(this);
    }
  }/*

  override protected*/ function handleResult(methodResponse/*:RemoteServiceMethodResponse*/, bean/*:RemoteBean*/)/*:void*/ {
    if (!methodResponse.success) {
      this.failure$UjUS(methodResponse.getError());
    }
  }/*

  private*/ function failure(error/*:RemoteError*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'copy_failedMessage_title'),
      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'copy_failedMessage_text'));
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (this.readOnlyValueExpression$UjUS.getValue()) {
      return true;
    }
    var content/*:Content*/ = AS3.getBindable(this,"valueExpression")?AS3.as( AS3.getBindable(this,"valueExpression").getValue(),  com.coremedia.cap.content.Content) : null;
    var version/*:Version*/ = this.versionValueExpression$UjUS ?AS3.as( this.versionValueExpression$UjUS.getValue(),  com.coremedia.cap.content.Version): null;
    return !(content && version && content.getCheckedInVersion() !== version);
  }/*

  [InjectFromExtParent(variableNameConfig='forceReadOnlyVariableName')]
  public*/ function setForceReadOnly(readOnly/*:Boolean*/)/*:void*/ {
    this.forceReadOnlyValueExpression$UjUS.setValue(readOnly);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction",
      metadata: {setForceReadOnly: [
        "InjectFromExtParent",
        [
          "variableNameConfig",
          "forceReadOnlyVariableName"
        ]
      ]},
      versionValueExpression$UjUS: null,
      readOnlyValueExpression$UjUS: null,
      forceReadOnlyValueExpression$UjUS: null,
      constructor: RestoreVersionActionBase$,
      super$UjUS: function() {
        com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction.prototype.constructor.apply(this, arguments);
      },
      executeAction: executeAction,
      makeRequestParameters: makeRequestParameters,
      confirm$UjUS: confirm,
      callback$UjUS: callback,
      handleResult: handleResult,
      failure$UjUS: failure,
      calculateDisabled: calculateDisabled,
      setForceReadOnly: setForceReadOnly,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.RestoreVersionAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
