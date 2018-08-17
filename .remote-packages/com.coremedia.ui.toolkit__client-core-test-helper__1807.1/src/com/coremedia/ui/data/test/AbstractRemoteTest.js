Ext.define("com.coremedia.ui.data.test.AbstractRemoteTest", function(AbstractRemoteTest) {/*package com.coremedia.ui.data.test {

import flexunit.framework.Assert;
import flexunit.framework.TestCase;

public class AbstractRemoteTest extends TestCase {

  private var sleepTime:uint = 500;
  public*/ function waitUntil(msg/*: String*/, condition/* :Function*/, callback/* :Function = undefined*/, passThrough/*:* =undefined*/)/* :void*/ {
    window.console['info'](msg);
    if (!callback) {
      callback = function()/*:void*/{};
    }
    if (condition()) {
      callback(passThrough);
      return;
    }
    var timer/* :Object*/;/*
    const*/var checkpoint/* :Function*/ = this.addAsync(callback, 5000, passThrough, function()/*:void*/ {
      window.clearInterval(timer);
      flexunit.framework.Assert.fail("timeout: " + msg);
    });/*
    const*/var timerFun/* :Function*/ = function()/*:void*/ {
      if (condition()) {
        window.clearInterval(timer);
        checkpoint();
      }
    };
    timer = window.setInterval(timerFun, this.sleepTime$j1SM);
  }/*

  /**
   * Returns a function that expects to be called within the given timeout with the given argument.
   *
   * @param timeout the timeout
   * @param expected the expected argument
   * @return the function
   * /
  public*/ function addAsyncAssertParameterEquals(timeout/*:int*/, expected/*:**/)/*:Function*/ {
    return this.addAsync(function(value/*:**/)/*:void*/ {
      flexunit.framework.Assert.assertEquals(expected, value);
    }, timeout);
  }/*

  public*/ function chain(/*...steps*/)/*:void*/ {var steps=Array.prototype.slice.call(arguments);
    this.chainOnArray$j1SM(steps);
  }/*

  private*/ function chainOnArray(steps/*:Array*/)/*:void*/ {var this$=this;
    var mySteps/*:Array*/ = steps.slice();
    var step/*:Step*/ = mySteps.shift();
    if (step) {
      var callback/*:Function*/ = function ()/*:void*/ {
        step.callback(step.passThrough);
        this$.chainOnArray$j1SM(mySteps);
      };
      this.waitUntil(step.msg, step.condition, callback, step.passThrough);
    }
  }/*

  protected*/ function getMockCalls()/*:Array*/ {
    return [];
  }/*

  override public*/ function setUp()/*:void*/ {
    flexunit.framework.TestCase.prototype.setUp.call(this);
    var mockCalls/*:Array*/ = this.getMockCalls();
    if(mockCalls && mockCalls.length > 0) {
      com.coremedia.ui.data.test.MockAjax.mockAjax(mockCalls);
    }
  }/*

  override public*/ function tearDown()/*:void*/ {
    com.coremedia.ui.data.test.MockAjax.destroyMock();
    flexunit.framework.TestCase.prototype.tearDown.call(this);
  }/*

  /**
   * Assert that the mock ajax framework served a response for the given URI
   * and the given method, optionally asserting that the response was
   * tagged with the given description.
   *
   * @param uriPath the URI
   * @param method the method
   * @param expectedDescription the description
   * /
  protected static*/ function assertAjaxResponseServed$static(uriPath/*:String*/, method/*:String*/, expectedDescription/*:String = null*/)/*:void*/ {if(arguments.length<=2)expectedDescription=null;
    var servedResponses/*:Array*/ = com.coremedia.ui.data.test.MockAjax.instance.getServedResponses(uriPath, method);
    flexunit.framework.Assert.assertEquals(1, servedResponses.length);
    if (expectedDescription) {
      flexunit.framework.Assert.assertEquals(expectedDescription, servedResponses[0].response.description);
    }
  }/*

  protected*/ function setSleepTime(sleepTime/*:uint*/) {
    this.sleepTime$j1SM = sleepTime;
  }/*
}*/function AbstractRemoteTest$() {this.super$j1SM();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.framework.TestCase",
      sleepTime$j1SM: 500,
      waitUntil: waitUntil,
      addAsyncAssertParameterEquals: addAsyncAssertParameterEquals,
      chain: chain,
      chainOnArray$j1SM: chainOnArray,
      getMockCalls: getMockCalls,
      setUp: setUp,
      tearDown: tearDown,
      setSleepTime: setSleepTime,
      super$j1SM: function() {
        flexunit.framework.TestCase.prototype.constructor.apply(this, arguments);
      },
      constructor: AbstractRemoteTest$,
      statics: {assertAjaxResponseServed: assertAjaxResponseServed$static},
      requires: [
        "flexunit.framework.Assert",
        "flexunit.framework.TestCase"
      ],
      uses: ["com.coremedia.ui.data.test.MockAjax"]
    };
});
