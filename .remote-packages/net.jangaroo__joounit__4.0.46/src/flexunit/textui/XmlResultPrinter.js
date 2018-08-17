Ext.define("flexunit.textui.XmlResultPrinter", function(XmlResultPrinter) {/*package flexunit.textui {
import flexunit.framework.AssertionFailedError;
import flexunit.framework.Test;
import flexunit.framework.TestCase;
import flexunit.framework.TestFailure;
import flexunit.framework.TestListener;
import flexunit.framework.TestResult;
import flexunit.framework.TestSuite;
import flexunit.textui.Printer;
import flexunit.utils.ArrayList;

public class XmlResultPrinter implements TestListener, Printer{

  private var resultXml:Array = null;
  private var mTests:Array =*/function mTests_(){this.mTests$1G9Y=( new Array());}/*;
  private var mCurrentTest = null;
  private var mSuite:String = null;


  private var successfullTests:Array = null;

  public*/ function XmlResultPrinter$(suitName/*:String = null*/) {mTests_.call(this);if(arguments.length<=0)suitName=null;
    this.resultXml$1G9Y = new Array();
    this.successfullTests$1G9Y = new Array();
    this.mTests$1G9Y = new Array();
    this.mSuite$1G9Y = suitName;
  }/*

  public*/ function addError(test/* : Test*/, error/* : Error*/)/*:void*/ {
    if (!this.mCurrentTest$1G9Y.mError) {
      this.mCurrentTest$1G9Y.mError = error;
    }
  }/*

  public*/ function addFailure(test/* : Test*/, error/* : AssertionFailedError*/)/*:void*/ {
    if (!this.mCurrentTest$1G9Y.mFailure) {
      this.mCurrentTest$1G9Y.mFailure = error;
    }
  }/*

  public*/ function endTest(test/* : Test*/)/*:void*/ {
    if( this.mCurrentTest$1G9Y != null ) {
        var endTime = new Date();
        this.mCurrentTest$1G9Y.mTime = endTime - this.mCurrentTest$1G9Y.mTime ;
        this.mTests$1G9Y.push( this.mCurrentTest$1G9Y );
        this.mCurrentTest$1G9Y = null;
    }

    this.successfullTests$1G9Y.push(test);
  }/*

  public*/ function startTest(test/* : Test*/)/*:void*/ {
    if( this.mSuite$1G9Y == null )
            this.mSuite$1G9Y = test.className;
        this.mCurrentTest$1G9Y = new Object();
        this.mCurrentTest$1G9Y.mName = test.className + " " + (AS3.as(test,  flexunit.framework.TestCase)).methodName;
        this.mCurrentTest$1G9Y.mTime = new Date();

  }/*
  public*/ function print(result/*:TestResult*/, runTime/*:Number*/)/*:void*/ {
    this.resultXml$1G9Y.push( '<?xml version="1.0" encoding="ISO-8859-1" ?>\n' );
        this.resultXml$1G9Y.push( '<testsuite errors="' );
        this.resultXml$1G9Y.push( result.errorCount());
        this.resultXml$1G9Y.push( '" failures="' );
        this.resultXml$1G9Y.push( result.failureCount());
        this.resultXml$1G9Y.push( '" name="' );
        this.resultXml$1G9Y.push( this.mSuite$1G9Y );
        this.resultXml$1G9Y.push( '" tests="' );
        this.resultXml$1G9Y.push( result.runCount());
        this.resultXml$1G9Y.push( '" time="' );
        this.resultXml$1G9Y.push( runTime / 1000);
        this.resultXml$1G9Y.push( '">\n' );
        for( var i = 0; i < this.mTests$1G9Y.length; ++i )
        {
            var test = this.mTests$1G9Y[i];
            this.resultXml$1G9Y.push( '    <testcase name="' );
            this.resultXml$1G9Y.push( test.mName );
            this.resultXml$1G9Y.push( '" time="' );
            this.resultXml$1G9Y.push( test.mTime / 1000 );
            this.resultXml$1G9Y.push( '"' );
            if( test.mError || test.mFailure )
            {
                this.resultXml$1G9Y.push( '>\n' );
                this.resultXml$1G9Y.push( '        <' );
                var defect;
                var tag;
                if( test.mError )
                {
                    defect = test.mError;
                    tag = "error";
                }
                else
                {
                    defect = test.mFailure;
                    tag = "failure";
                }
                this.resultXml$1G9Y.push( tag );
                this.resultXml$1G9Y.push( ' message="' );
                this.resultXml$1G9Y.push( this.escapeXml$1G9Y(defect.toString()) );
                this.resultXml$1G9Y.push( '" type=""' );

                this.resultXml$1G9Y.push( '/' );
                this.resultXml$1G9Y.push( '>\n' );
                this.resultXml$1G9Y.push( '    </testcase' );
            } else{
                this.resultXml$1G9Y.push( '/' );
            }
            this.resultXml$1G9Y.push( '>\n' );

        }
        this.resultXml$1G9Y.push( '</testsuite>' );

  }/*

  private*/ function escapeXml(str/*:String*/)/*:String*/ {
    var escAmpRegEx = /&/g;
    var escLtRegEx = /</g;
    var escGtRegEx = />/g;
    var quotRegEx = /"/g;
    var aposRegEx = /'/g;
    var result = str.replace(escAmpRegEx, "&amp;").
        replace(escLtRegEx, "&lt;").
        replace(escGtRegEx, "&gt;").
        replace(quotRegEx, "&quot;").
        replace(aposRegEx, "&apos;");

    return result;

  }/*
  
  public*/ function getXml()/*:String*/ {
    return this.resultXml$1G9Y.join("");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      resultXml$1G9Y: null,
      mCurrentTest$1G9Y: null,
      mSuite$1G9Y: null,
      successfullTests$1G9Y: null,
      constructor: XmlResultPrinter$,
      addError: addError,
      addFailure: addFailure,
      endTest: endTest,
      startTest: startTest,
      print: print,
      escapeXml$1G9Y: escapeXml,
      getXml: getXml,
      requires: [
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      uses: ["flexunit.framework.TestCase"]
    };
});
