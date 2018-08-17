Ext.define("com.coremedia.cms.editor.sdk.actions.ParameterizedBeanActionBase", function(ParameterizedBeanActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.Ext;

public class ParameterizedBeanActionBase extends DependencyTrackedAction {
  /**
   * A value expression evaluating to the remote bean on which the action is executed.
   * /
  [Bindable]
  public var valueExpression:ValueExpression;

  private var restMethod:String;
  private var writeJson:Boolean;

  /**
   * @param config the config object
   * /
  public*/ function ParameterizedBeanActionBase$(config/*:ParameterizedBeanAction = null*/) {if(arguments.length<=0)config=null;
    this.super$Tf$5(AS3.cast(com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction,Ext.apply({'handler':AS3.bind( this,"executeAction")}, config)));
    AS3.setBindable(this,"valueExpression" , AS3.getBindable(config,"valueExpression"));
    this.restMethod$Tf$5 = AS3.getBindable(config,"restMethod");
    this.writeJson$Tf$5 = AS3.getBindable(config,"writeJson") ? AS3.getBindable(config,"writeJson") : false;
  }/*

  /**
   * Create an object containing the request parameters as properties.
   * Return the undefined value to indicate that no request should be performed.
   *
   * @param bean the remote bean on which the action is executed
   * @return the request parameters object
   * /
  protected*/ function makeRequestParameters(bean/*:RemoteBean*/)/*:Object*/ {
    throw new AS3.Error("to be implemented in subclasses");
  }/*

  /**
   * Process the result returned
   *
   * @param methodResponse
   * @param bean
   * /
  protected*/ function handleResult(methodResponse/*:RemoteServiceMethodResponse*/, bean/*:RemoteBean*/)/*:void*/ {
    throw new AS3.Error("to be implemented in subclasses");
  }/*

  protected*/ function executeAction()/*:void*/ {var this$=this;
    var bean/*:RemoteBean*/ = AS3.getBindable(this,"valueExpression").getValue();

    var requestParameters/*:Object*/ = this.makeRequestParameters(bean);

    if (requestParameters) {
      var requestPath/*:String*/ = bean.getUriPath() + (this.restMethod$Tf$5 ? "/" + this.restMethod$Tf$5 : "");
      var remoteServiceMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(requestPath, 'POST', this.writeJson$Tf$5);
      remoteServiceMethod.request(requestParameters, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
        this$.handleResult(response, bean);
      });
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      restMethod$Tf$5: null,
      writeJson$Tf$5: false,
      constructor: ParameterizedBeanActionBase$,
      super$Tf$5: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      makeRequestParameters: makeRequestParameters,
      handleResult: handleResult,
      executeAction: executeAction,
      config: {valueExpression: null},
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.ParameterizedBeanAction"]
    };
});
