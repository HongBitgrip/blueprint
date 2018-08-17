Ext.define("com.coremedia.elastic.social.studio.actions.AbstractMultiAction", function(AbstractMultiAction) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Ajax;

public class AbstractMultiAction extends Action {
  public*/ function AbstractMultiAction$(config/*:AbstractMultiAction = undefined*/) {
    var superConfig/*:AbstractMultiAction*/ = AS3.cast(AbstractMultiAction,{});
    superConfig['config'] = config;
    AS3.setBindable(superConfig,"handler" ,AS3.bind( this,"doAction"));
    this.super$lLNs(superConfig);
  }/*

  // start of config parameters
  /**
   * The value expression.
   * /
  [ExtConfig]
  public var valueExpression:ValueExpression;

  /**
   * The handler that should be executed on success.
   * /
  [ExtConfig]
  public var success:Function;

  /**
   * The handler that should be executed on failure.
   * /
  [ExtConfig]
  public var failure:Function;

  /**
   * Additional parameters.
   * /
  [ExtConfig]
  public var params:Function;

  /**
   * A function which has to be called prior to executing the action. This function is called with the callback
   * to execute after successfully checked the validity.
   * /
  [ExtConfig]
  public var validationCheck:Function;

  // end of config parameters

  public*/ function doAction()/*:void*/ {
    if (this.validationCheck === undefined) {
      this.doRequest$lLNs();
    } else {
      this.validationCheck(AS3.bind(this,"doRequest$lLNs"));
    }
  }/*

  /**
   * It would be nice to use the RemoteServiceMethod instead of a manual Ajax request
   * but the RemoteServiceMethod does not support arbitrary parameters yet.
   * /
  private*/ function doRequest()/*:void*/ {
    var bean/*:RemoteBean*/ =AS3.as( this.valueExpression.getValue(),  com.coremedia.ui.data.RemoteBean);
    if (bean) {
      Ext.Ajax.request({
        url:this.getUrl(bean),
        method:'POST',

        success:function (response/*:Object*/, opts/*:**/)/*:void*/ {
          bean.invalidate();
          if (AS3.cast(AbstractMultiAction,this).success) {
            AS3.cast(AbstractMultiAction,this).success(response, bean);
          }
        },
        failure:function (response/*:Object*/, opts/*:**/)/*:void*/ {
          bean.invalidate();
          if (AS3.cast(AbstractMultiAction,this).failure) {
            AS3.cast(AbstractMultiAction,this).failure(response, bean);
          }
        },
        scope: this,
        params:{
          'params':this.params ? this.params() : ""
        }
      });
    }
  }/*

  protected*/ function getUrl(bean/*:RemoteBean*/)/*:String*/ {
    if (bean) {
      var url/*:String*/ = bean.getUri();
      if (url.lastIndexOf("/", 0) == url.length - 1) {
        url = url + AS3.cast(com.coremedia.elastic.social.studio.actions.MultiAction,this).getActionName();
      } else {
        url = url + "/" + AS3.cast(com.coremedia.elastic.social.studio.actions.MultiAction,this).getActionName();
      }

      return url;
    }

    return "";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      constructor: AbstractMultiAction$,
      super$lLNs: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      valueExpression: null,
      success: null,
      failure: null,
      params: null,
      validationCheck: null,
      doAction: doAction,
      doRequest$lLNs: doRequest,
      getUrl: getUrl,
      requires: [
        "Ext.Action",
        "Ext.Ajax",
        "com.coremedia.ui.data.RemoteBean"
      ],
      uses: ["com.coremedia.elastic.social.studio.actions.MultiAction"]
    };
});
