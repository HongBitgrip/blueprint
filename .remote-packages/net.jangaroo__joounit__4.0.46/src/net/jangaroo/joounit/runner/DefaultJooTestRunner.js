Ext.define("net.jangaroo.joounit.runner.DefaultJooTestRunner", function(DefaultJooTestRunner) {/*package net.jangaroo.joounit.runner {

import flexunit.framework.AssertionFailedError;
import flexunit.framework.Test;
import flexunit.framework.TestListener;
import flexunit.framework.TestResult;
import flexunit.framework.TestSuite;
import flexunit.runner.BaseTestRunner;
import flexunit.textui.XmlResultPrinter;

import joo.getQualifiedObject;
import joo.require;

/**
 * A test runner that can be instantiated with several test class names and that will invoke a callback
 * when finished
 * /
public class DefaultJooTestRunner extends BaseTestRunner {

  private var testClassNames:Array;

  // names of the test classes the couldn't be found
  private var testClassLoadErrors:Vector.<String>;

  private var testName:String;
  private var testSuite:TestSuite;
  private var testResult:TestResult;
  private var printer:XmlResultPrinter;
  private var startTime : int;
  private var totalTestCount : int;
  private var numTestsRun : int;
  private var onComplete:Function;

  /**
   * Launch the tests.
   * @param config The test configuration like
   * <code>
   *  {
   *    "tests": ["com.mycompany.Test1", "com.mycompany.Test2"],
   *    "onComplete" : function(testSuite:TestSuite, testResult:TestResult, testResultXml:String) {...}
   *  }
   * </code>
   * /
  public static*/ function main$static(config/*:Object*/)/*:void*/ {

    var name/*:String*/ = "DefaultJooTestRunner";
    var onComplete/*:Function*/;
    var testClassNames/*:Array*/ = null;
    if(AS3.is(config,  String)){
      testClassNames = [AS3.as(config,  String)];
    }
    else if(AS3.is( config['tests'],  Array) ) {
      testClassNames =AS3.as( config['tests'],  Array);
    }

    if(AS3.is( config['onComplete'],  Function) ) {
      onComplete =AS3.as( config['onComplete'],  Function);
    }
    if(AS3.is( config['name'],  String) ) {
      name = config['name'];
    }

    if( testClassNames == null ) {
      throw new AS3.Error("No test classes specified");
    }

    new DefaultJooTestRunner(name, testClassNames, onComplete).run();
  }/*



  public*/ function DefaultJooTestRunner$(name/*:String*/, testClassNames/*:Array*/, onComplete/*:Function = null*/) {this.super$TSVD();if(arguments.length<=2)onComplete=null;
    this.testName$TSVD = name;
    this.testClassNames$TSVD = testClassNames;
    this.onComplete$TSVD = onComplete;
  }/*

  public*/ function run()/*:void*/ {

    AS3.trace("[INFO]", "Running tests: "+this.testClassNames$TSVD);

    this.printer$TSVD = new flexunit.textui.XmlResultPrinter(this.testName$TSVD);
    this.testResult$TSVD = new flexunit.framework.TestResult();
    this.testResult$TSVD.addListener(AS3.cast(flexunit.framework.TestListener, this.printer$TSVD ));
    this.testResult$TSVD.addListener(AS3.cast(flexunit.framework.TestListener, this ));

    // load all test classes
    this.testClassLoadErrors$TSVD = new Vector$object/*.<String>*/();
    joo.require(this.testClassNames$TSVD,AS3.bind( this,"onSuiteLoaded"));
  }/*

  // =================


  internal*/ function onSuiteLoaded()/* : void*/ {

    // check whether a class loading problem has occurred
    if( this.testClassLoadErrors$TSVD.length > 0 ) {
      AS3.trace("[ERROR]", "Couldn't load test classes: "+this.testClassLoadErrors$TSVD);
      DefaultJooTestRunner.exit(false);
      return;
    }

    // build a test suite from all test classes
    this.testSuite$TSVD = new flexunit.framework.TestSuite();
    for( var i/*:int*/ = 0; i<this.testClassNames$TSVD.length; i++ ) {

      var qualifiedTestClassName/*:String*/ = this.testClassNames$TSVD[i];
      var testClass/*:**/ = joo.getQualifiedObject(qualifiedTestClassName);
      if( typeof testClass['suite'] == 'function') {

        // there is a static function 'suite'
        // assuming that this returns a test suite instance
        this.testSuite$TSVD.addTest(testClass['suite']());
      }
      else if(AS3.is( testClass,  Class) ) {

        // it's a test class
        this.testSuite$TSVD.addTestSuite(testClass);
//      var test:Test = new testClass();
//      if( !(test is Test) ) {
//        throw new Error("Class "+testClassName+" is not a test implementation");
//      }
//      testSuite.addTest(test);
      }
      else {
        throw new AS3.Error("Not a valid test class: "+qualifiedTestClassName);
      }
    }

    // run test suite
    try {

      this.startTime$TSVD = new Date().getTime();
      this.numTestsRun$TSVD = 0;
      this.totalTestCount$TSVD = this.testSuite$TSVD.countTestCases();
      AS3.trace("[INFO]","Running "+this.totalTestCount$TSVD+" tests");
      this.testSuite$TSVD.runWithResult( this.testResult$TSVD );
    }
    catch(e){if(AS3.is(e,AS3.Error)){
      AS3.trace("[ERROR]",e);
      DefaultJooTestRunner.exit(false);
    }else throw e;}
  }/*

  override public*/ function testError(test/*:Test*/, error/*:Error*/)/*:void*/ {
    AS3.trace("[ERROR]", "test in error", test, error);
  }/*

  override public*/ function testFailure(test/*:Test*/, error/*:AssertionFailedError*/)/*:void*/ {
    AS3.trace("[ERROR]", "test failed", test, error);
  }/*

  override public*/ function testEnded(test/*:Test*/)/*:void*/ {

    if (++this.numTestsRun$TSVD == this.totalTestCount$TSVD)
    {
      var endTime/*:Number*/ = new Date().getTime();
      var runTime/*:Number*/ = endTime - this.startTime$TSVD;

      this.printer$TSVD.print( this.testResult$TSVD, runTime );/*


      const*/var testResultXml/*:String*/ = this.printer$TSVD.getXml();
      if( this.onComplete$TSVD != null ) {
        this.onComplete$TSVD(this.testSuite$TSVD, this.testResult$TSVD, testResultXml);
      }
      else {
        AS3.trace('Tests: '+ this.testResult$TSVD.runCount() + " ("+
                'Errors: '+ this.testResult$TSVD.errorCount() + ", " +
                'Failures: '+ this.testResult$TSVD.failureCount() + ")");
        AS3.trace(this.printer$TSVD.getXml());
      }
      DefaultJooTestRunner.exit(this.testResult$TSVD.wasSuccessful());
    }
  }/*

  internal static*/ function exit$static(success/*:Boolean*/)/*:void*/ {
    if( success ) {
      AS3.trace("[INFO]", "Finished test execution successfully");
    }
    else {
      AS3.trace("[ERROR]", "Finished test execution with error(s)");
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.runner.BaseTestRunner",
      testClassNames$TSVD: null,
      testClassLoadErrors$TSVD: null,
      testName$TSVD: null,
      testSuite$TSVD: null,
      testResult$TSVD: null,
      printer$TSVD: null,
      startTime$TSVD: 0,
      totalTestCount$TSVD: 0,
      numTestsRun$TSVD: 0,
      onComplete$TSVD: null,
      constructor: DefaultJooTestRunner$,
      super$TSVD: function() {
        flexunit.runner.BaseTestRunner.prototype.constructor.apply(this, arguments);
      },
      run: run,
      onSuiteLoaded: onSuiteLoaded,
      testError: testError,
      testFailure: testFailure,
      testEnded: testEnded,
      statics: {
        main: main$static,
        exit: exit$static
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "flexunit.runner.BaseTestRunner"
      ],
      uses: [
        "flexunit.framework.TestListener",
        "flexunit.framework.TestResult",
        "flexunit.framework.TestSuite",
        "flexunit.textui.XmlResultPrinter"
      ]
    };
});
