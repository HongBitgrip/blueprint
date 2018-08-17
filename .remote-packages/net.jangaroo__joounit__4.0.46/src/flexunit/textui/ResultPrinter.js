Ext.define("flexunit.textui.ResultPrinter", function(ResultPrinter) {/* /*	Copyright (c) 2008. Adobe Systems Incorporated.   All rights reserved.   Redistribution and use in source and binary forms, with or without   modification, are permitted provided that the following conditions are met:     * Redistributions of source code must retain the above copyright notice,       this list of conditions and the following disclaimer.     * Redistributions in binary form must reproduce the above copyright notice,       this list of conditions and the following disclaimer in the documentation       and/or other materials provided with the distribution.     * Neither the name of Adobe Systems Incorporated nor the names of its       contributors may be used to endorse or promote products derived from this       software without specific prior written permission.   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"   AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE   IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE   ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE   LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR   CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF   SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS   INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN   CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)   ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE   POSSIBILITY OF SUCH DAMAGE.* /package flexunit.textui{   import flash.utils.*;   import flexunit.framework.*;   import flexunit.utils.*;   public class ResultPrinter implements TestListener, Printer   {       public*/ function ResultPrinter$()       {/*           super()*/;           this._progress$BZR1 = "";       }/*   //------------------------------------------------------------------------------       public*/ function print( result/*:TestResult*/, runTime/*:Number*/ )/*:void*/       {           if ( this._progress$BZR1.length > 0 )               AS3.trace( this._progress$BZR1 );           this.printHeader(runTime);           this.printErrors(result);           this.printFailures(result);           this.printFooter$BZR1(result);       }/*   //------------------------------------------------------------------------------       public*/ function printHeader( runTime/*:Number*/ )/*:void*/       {           AS3.trace( "Time: " + ( runTime / 1000 ) + " seconds" );       }/*   //------------------------------------------------------------------------------       public*/ function printErrors( result/*:TestResult*/ )/*:void*/       {           this.printDefects( result.errorsIterator(), result.errorCount(), "error" );       }/*   //------------------------------------------------------------------------------       public*/ function printFailures( result/*:TestResult*/ )/*:void*/       {           this.printDefects( result.failuresIterator(), result.failureCount(), "failure" );       }/*   //------------------------------------------------------------------------------       public*/ function printDefects( defects/*:Iterator*/, count/*:Number*/, type/*:String*/ )/*:void*/       {           if ( count == 0 )               return;           if ( count == 1 )               AS3.trace( "There was " + count + " " + type + ":" );           else               AS3.trace( "There were " + count + " " + type + "s:");           for ( var i/*:Number*/ = 1; defects.hasNext(); i++)           {               this.printDefect$BZR1( AS3.cast(flexunit.framework.TestFailure, defects.next() ), i );           }       }/*   //------------------------------------------------------------------------------       private*/ function printDefect( defect/*:TestFailure*/, count/*:Number*/ )/*:void*/       {           this.printDefectHeader$BZR1( defect, count );           this.printDefectTrace$BZR1( defect );       }/*   //------------------------------------------------------------------------------       private*/ function printDefectHeader( defect/*:TestFailure*/, count/*:Number*/ )/*:void*/       {           AS3.trace( count + ") " + defect.failedTest().toString() );       }/*   //------------------------------------------------------------------------------       private*/ function printDefectTrace( defect/*:TestFailure*/ )/*:void*/       {           AS3.trace( "\t" + defect.exceptionMessage() );       }/*   //------------------------------------------------------------------------------       private*/ function printFooter( result/*:TestResult*/ )/*:void*/       {           if ( result.wasSuccessful() )           {               AS3.trace( "" );               AS3.trace( "OK (" + result.runCount() + " test" + ( result.runCount() == 1 ? "" : "s") + ")" );           }           else           {               AS3.trace( "" );               AS3.trace( "FAILURES!!!" );               AS3.trace( "Tests run: " + result.runCount() +                            ",  Failures: " + result.failureCount() +                            ",  Errors: " + result.errorCount() );           }          AS3.trace( "" );       }/*   //------------------------------------------------------------------------------       public*/ function addError( test/*:Test*/, error/*:Error*/ )/*:void*/       {           this.updateProgress$BZR1( "E" );       }/*   //------------------------------------------------------------------------------       public*/ function addFailure( test/*:Test*/, error/*:AssertionFailedError*/ )/*:void*/       {           this.updateProgress$BZR1( "F" );       }/*   //------------------------------------------------------------------------------       public*/ function endTest( test/*:Test*/ )/*:void*/       {       }/*   //------------------------------------------------------------------------------       public*/ function startTest( test/*:Test*/ )/*:void*/       {           this.updateProgress$BZR1( "." );       }/*   //------------------------------------------------------------------------------       private*/ function updateProgress( lr/*:String*/ )/*:void*/       {           this._progress$BZR1 = this._progress$BZR1 + lr;           if ( this._progress$BZR1.length > 40 )           {               AS3.trace( this._progress$BZR1 );               this._progress$BZR1 = "";           }       }/*   //------------------------------------------------------------------------------       private var _progress:String;   }}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      constructor: ResultPrinter$,
      print: print,
      printHeader: printHeader,
      printErrors: printErrors,
      printFailures: printFailures,
      printDefects: printDefects,
      printDefect$BZR1: printDefect,
      printDefectHeader$BZR1: printDefectHeader,
      printDefectTrace$BZR1: printDefectTrace,
      printFooter$BZR1: printFooter,
      addError: addError,
      addFailure: addFailure,
      endTest: endTest,
      startTest: startTest,
      updateProgress$BZR1: updateProgress,
      _progress$BZR1: null,
      requires: [
        "AS3.trace",
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      uses: ["flexunit.framework.TestFailure"]
    };
});
