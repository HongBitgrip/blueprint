Ext.define("net.jangaroo.joounit.runner.BrowserRunner", function(BrowserRunner) {/*package net.jangaroo.joounit.runner {

import flash.utils.getQualifiedClassName;
import flash.utils.getTimer;

import flexunit.framework.AssertionFailedError;
import flexunit.framework.Test;
import flexunit.framework.TestListener;
import flexunit.framework.TestResult;
import flexunit.framework.TestSuite;
import flexunit.runner.BaseTestRunner;
import flexunit.textui.XmlResultPrinter;

import js.Element;

/**
 * TestRunner implementation for browsers (incl. phantomjs).
 * <p>
 * The following example uses phantomjs-joo-runner.js to invoke
 * <code>main</code> launching
 * <code>flexunit.framework.AllFrameworkTests</code>
 * with 30 seconds timeout:
 * <code>
 *   phantomjs joo/phantomjs-joo-runner.js '{
 *      testSuiteName:"flexunit.framework.AllFrameworkTests",
 *      jooMainClass:"net.jangaroo.joounit.runner.BrowserRunner",
 *      timeout:30000
 *   }'
 *   </code>
 * </p>
 * /
public class BrowserRunner extends BaseTestRunner {

  private var testResult:TestResult;
  private var printer:XmlResultPrinter;
  private var startTime : int;
  private var totalTestCount : int;
  private var numTestsRun : int;

  private var outputTestResult:Function =*/function outputTestResult_(){this.outputTestResult$MK$s=( function(result/*:String*/)/*:void*/ {
    window["result"] = result;
    if (window["callPhantom"]) {
      window["callPhantom"](result);
    }
  });}/*;

  private var onComplete:Function =*/function onComplete_(){this.onComplete$MK$s=( function(testResult/*:TestResult*/, resultXml/*:String*/)/*:void*/{
    BrowserRunner.insertIntoDOM(resultXml);
  });}/*;

  private var testSuite:Function;

  /**
   * Config params are <code>testSuiteName:String</code>
   * <code>onComplete:function(TestResult,String)</code>
   * <code>outputTestResult:function(String)</code>
   * @param config
   * /
  public*/ function BrowserRunner$(config/*:Object*/) {this.super$MK$s();outputTestResult_.call(this);onComplete_.call(this);
    this.testSuite$MK$s = config['testSuite'];
    if(config.onComplete) {
      this.onComplete$MK$s = config.onComplete;
    }
    if(config.outputTestResult){
      this.outputTestResult$MK$s = config.outputTestResult;
    }
  }/*

  /**
   * Launch the tests.
   * @param testConfig
   * /
  public static*/ function main$static(config/*:Object*/)/*:void*/ {
    if(typeof config === "function") {
      config = {testSuite: config};
    }
    new BrowserRunner(config).run();
  }/*
  
  internal static*/ function suiteNotFound$static(msg/*:String*/) {
    window.classLoadingError = msg; // this property is read by jangaroo-maven-plugin
    AS3.trace("[ERROR]", window.classLoadingError);
    BrowserRunner.exit(false);
  }/*

  internal*/ function onSuiteLoaded()/* : void*/ {
    try {
      if (typeof this.testSuite$MK$s == 'function' && typeof this.testSuite$MK$s['suite'] == 'function') {
        AS3.trace("[INFO]","running test suite "+ flash.utils.getQualifiedClassName(this.testSuite$MK$s)); 
        this.startTime$MK$s = flash.utils.getTimer();
        this.numTestsRun$MK$s = 0;/*
        const*/var suite/*:TestSuite*/ = this.testSuite$MK$s['suite']();
        this.totalTestCount$MK$s = suite.countTestCases();
        suite.runWithResult( this.testResult$MK$s );
      } else {
        BrowserRunner.suiteNotFound(flash.utils.getQualifiedClassName(this.testSuite$MK$s) + " does not have a static method 'suite'.");
      }
    } catch(e){if(AS3.is(e,AS3.Error)){
      AS3.trace("[ERROR]",e);
      BrowserRunner.exit(false);
    }else throw e;}
  }/*

  public*/ function run()/*:void*/{
    this.printer$MK$s = new flexunit.textui.XmlResultPrinter(flash.utils.getQualifiedClassName(this.testSuite$MK$s).replace(/::/, "."));
    this.testResult$MK$s = new flexunit.framework.TestResult();
    this.testResult$MK$s.addListener(AS3.cast(flexunit.framework.TestListener, this.printer$MK$s ));
    this.testResult$MK$s.addListener(AS3.cast(flexunit.framework.TestListener, this ));
    this.onSuiteLoaded();
  }/*

  override public*/ function testError(test/*:Test*/, error/*:Error*/)/*:void*/ {
    AS3.trace("[ERROR]", "test in error", test, error, error["stack"]);
  }/*

  override public*/ function testFailure(test/*:Test*/, error/*:AssertionFailedError*/)/*:void*/ {
    AS3.trace("[ERROR]", "test failed", test, error, error["stack"]);
  }/*

  override public*/ function testEnded(test/*:Test*/)/*:void*/ {
    if (++this.numTestsRun$MK$s == this.totalTestCount$MK$s)
    {
      var endTime/*:Number*/ = flash.utils.getTimer();

      var runTime/*:Number*/ = endTime - this.startTime$MK$s;

      this.printer$MK$s.print( this.testResult$MK$s, runTime );
      AS3.trace('tests run: '+ this.testResult$MK$s.runCount() + " ("+
              'errors: '+ this.testResult$MK$s.errorCount() + ", " +
              'failures: '+ this.testResult$MK$s.failureCount() + ")");
      AS3.trace(this.printer$MK$s.getXml());/*

      const*/var resultXml/*:String*/ = this.printer$MK$s.getXml();
      this.outputTestResult$MK$s(resultXml);
      this.onComplete$MK$s(this.testResult$MK$s,resultXml);
      BrowserRunner.exit(this.testResult$MK$s.wasSuccessful());
    }
  }/*
  
  internal static*/ function exit$static(b/*:Boolean*/)/* : void*/ {/*
    const*/var exitFunc/*:Function*/ = window['joo'] && window['joo']._exit; // see phantomjs-joo-config.js
    if(exitFunc){
      exitFunc(b);
    }
  }/*

  public static*/ function insertIntoDOM$static(resultXml/*:String*/)/*:void*/ {/*
    const*/var pre/*:Element*/ = window.document.createElement('pre');
    pre.appendChild(window.document.createTextNode(resultXml));
    window.document.body.appendChild(pre);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.runner.BaseTestRunner",
      testResult$MK$s: null,
      printer$MK$s: null,
      startTime$MK$s: 0,
      totalTestCount$MK$s: 0,
      numTestsRun$MK$s: 0,
      testSuite$MK$s: null,
      constructor: BrowserRunner$,
      super$MK$s: function() {
        flexunit.runner.BaseTestRunner.prototype.constructor.apply(this, arguments);
      },
      onSuiteLoaded: onSuiteLoaded,
      run: run,
      testError: testError,
      testFailure: testFailure,
      testEnded: testEnded,
      statics: {
        main: main$static,
        suiteNotFound: suiteNotFound$static,
        exit: exit$static,
        insertIntoDOM: insertIntoDOM$static
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "flash.utils.getQualifiedClassName",
        "flash.utils.getTimer",
        "flexunit.runner.BaseTestRunner"
      ],
      uses: [
        "flexunit.framework.TestListener",
        "flexunit.framework.TestResult",
        "flexunit.textui.XmlResultPrinter"
      ]
    };
});
