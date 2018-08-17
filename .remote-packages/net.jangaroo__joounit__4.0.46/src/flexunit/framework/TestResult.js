Ext.define("flexunit.framework.TestResult", function(TestResult) {/* /*
   Copyright (c) 2008. Adobe Systems Incorporated.
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

     * Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
     * Neither the name of Adobe Systems Incorporated nor the names of its
       contributors may be used to endorse or promote products derived from this
       software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
   LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   POSSIBILITY OF SUCH DAMAGE.
* /

package flexunit.framework
{

   import flexunit.utils.*;

   /**
    * A <code>TestResult</code> collects the results of an executing
    * Test. It is an instance of the Collecting Parameter pattern.
    * The test framework distinguishes between <i>failures</i> and <i>errors</i>.
    * A failure is anticipated and checked for with assertions. Errors are
    * unanticipated problems.
    *
    * @see flexunit.framework.Test
    * /
   public class TestResult
   {
      public var syncToFrame : Boolean = false;

      public*/ function TestResult$()
      {
         this.failures$gncm = AS3.cast(flexunit.utils.Collection, new flexunit.utils.ArrayList() );
         this.errors$gncm = AS3.cast(flexunit.utils.Collection, new flexunit.utils.ArrayList() );
         this.listeners$gncm = AS3.cast(flexunit.utils.Collection, new flexunit.utils.ArrayList() );

         this.runTests$gncm = 0;
      }/*

   //------------------------------------------------------------------------------

      public*/ function run( testCase/* : TestCase*/ )/* : void*/
      {
         /*if ( syncToFrame )
            FunctionCallQueue.getInstance().call( this, doRun, [ testCase ] );
         else
         */
            this.doRun$gncm( testCase );
      }/*

   //------------------------------------------------------------------------------

       //called by the AsyncTestHelper when it has either failed or received the callback
      public*/ function continueRun( testCase/* : TestCase*/ )/* : void*/
      {
           this.doContinue$gncm( testCase );
      }/*

   //------------------------------------------------------------------------------

      private*/ function doRun( testCase/* : TestCase*/ )/* : void*/
      {
         this.startTest( testCase );

         testCase.setTestResult( this );

         var protectedTestCase/* : Protectable*/ = AS3.cast(flexunit.framework.Protectable, new flexunit.framework.ProtectedStartTestCase( testCase ) );

         var startOK/* : Boolean*/ = this.doProtected$gncm( testCase, protectedTestCase );

         if ( startOK )
         {
              this.doContinue$gncm( testCase );
         }
         else
         {
             this.endTest( testCase );             
         }
         
         testCase.assertionsMade = this.assertionsMade;
      }/*

   //------------------------------------------------------------------------------
      private*/ function doContinue( testCase/* : TestCase*/ )/* : void*/
      {
           var protectedTestCase/* : Protectable*/ = AS3.cast(flexunit.framework.Protectable, new flexunit.framework.ProtectedMiddleTestCase ( testCase ) );
           this.doProtected$gncm( testCase, protectedTestCase );
           if ( testCase.hasAsync() )
           {
               testCase.startAsync();
           }
           else
           {
               this.doFinish$gncm( testCase );
           }
      }/*

   //------------------------------------------------------------------------------

      private*/ function doFinish( testCase/* : TestCase*/ )/* : void*/
      {
         var protectedTestCase/* : Protectable*/ = AS3.cast(flexunit.framework.Protectable, new flexunit.framework.ProtectedFinishTestCase( testCase ) );

         this.doProtected$gncm( testCase, protectedTestCase );
         this.endTest( testCase );
      }/*

   //------------------------------------------------------------------------------

      public*/ function addError( test/* : Test*/, error/* : Error*/ )/* : void*/
      {
         this.errors$gncm.addItem( new flexunit.framework.TestFailure( test, error ) );

         var iter/* : Iterator*/ = this.listeners$gncm.iterator();
         while ( iter.hasNext() )
         {
            var listener/* : TestListener*/ = AS3.cast(flexunit.framework.TestListener, iter.next() );
            listener.addError( test, error );
         }
      }/*

   //------------------------------------------------------------------------------

      public*/ function addFailure( test/* : Test*/, error/* : AssertionFailedError*/ )/* : void*/
      {
         this.failures$gncm.addItem( new flexunit.framework.TestFailure( test, error ) );

         var iter/* : Iterator*/ = this.listeners$gncm.iterator();
         while ( iter.hasNext() )
         {
            var listener/* : TestListener*/ = AS3.cast(flexunit.framework.TestListener, iter.next() );
            listener.addFailure( test, error );
         }
      }/*

   //------------------------------------------------------------------------------

      public*/ function errorCount()/* : Number*/
      {
         return this.errors$gncm.length();
      }/*

   //------------------------------------------------------------------------------

      public*/ function errorsIterator()/* : Iterator*/
      {
         return this.errors$gncm.iterator();
      }/*

   //------------------------------------------------------------------------------

      public*/ function failureCount()/* : Number*/
      {
         return this.failures$gncm.length();
      }/*

   //------------------------------------------------------------------------------

      public*/ function failuresIterator()/* : Iterator*/
      {
         return this.failures$gncm.iterator();
      }/*

   //------------------------------------------------------------------------------

      public*/ function shouldStop()/* : Boolean*/
      {
         return this.stopTests$gncm;
      }/*

   //------------------------------------------------------------------------------

      public*/ function stop( stopTests/* : Boolean*/ )/* : void*/
      {
         this.stopTests$gncm = stopTests;
      }/*

   //------------------------------------------------------------------------------

      public*/ function wasSuccessful()/* : Boolean*/
      {
         return this.failureCount() == 0 && this.errorCount() == 0;
      }/*

   //------------------------------------------------------------------------------

      public*/ function addListener( listener/* : TestListener*/ )/* : void*/
      {
         if ( this.listeners$gncm.contains( listener ) == false )
            this.listeners$gncm.addItem( listener );
      }/*

   //------------------------------------------------------------------------------

      public*/ function removeListener( listener/* : TestListener*/ )/* : void*/
      {
         if ( this.listeners$gncm.contains( listener ) )
            this.listeners$gncm.removeItem( listener );
      }/*

   //------------------------------------------------------------------------------

      public*/ function runCount()/* : Number*/
      {
         return this.runTests$gncm;
      }/*

   //------------------------------------------------------------------------------

      private*/ function doProtected( 
                  testCase/* : Test*/, 
                  protectable/* : Protectable*/ )/* : Boolean*/
      {
         var success/* : Boolean*/ = false;

         try
         {
            if(AS3.is( protectable,  flexunit.framework.ProtectedMiddleTestCase) )
            {
               flexunit.framework.Assert.resetAssertionsMade();
            }
            protectable.protect();
            success = true;
         }
         catch(error){if(AS3.is ( error , AS3.Error ))
         {
            if (AS3.is( error,  flexunit.framework.AssertionFailedError) )
            {
               this.addFailure( testCase, AS3.cast(flexunit.framework.AssertionFailedError, error ) );
            }
            else
            {
               this.addError( testCase, error );
            }
         }else throw error;}
         
         if (AS3.is( protectable,  flexunit.framework.ProtectedMiddleTestCase) )
         {
            this._localAssertionsMade$gncm = flexunit.framework.Assert.assetionsMade;            
         }
         
         return success;
      }/*

   //------------------------------------------------------------------------------

      public*/ function startTest( test/* : Test*/ )/* : void*/
      {
         var count/* : Number*/ = test.countTestCases();
         this.runTests$gncm = this.runTests$gncm + count;

         var iter/* : Iterator*/ = this.listeners$gncm.iterator();
         var listener/* : TestListener*/;
         while ( iter.hasNext() )
         {
            listener = AS3.cast(flexunit.framework.TestListener, iter.next() );
            listener.startTest( test );
         }
      }/*

   //------------------------------------------------------------------------------

      public*/ function endTest( test/* : Test*/ )/* : void*/
      {
         var iter/* : Iterator*/ = this.listeners$gncm.iterator();
         var listener/* : TestListener*/;
         while ( iter.hasNext() )
         {
            listener = AS3.cast(flexunit.framework.TestListener, iter.next() );
            listener.endTest( test );
         }
      }/*

   //------------------------------------------------------------------------------
   
      public*/ function  get$assertionsMade()/* : Number*/
      {
         return this._localAssertionsMade$gncm;
      }/*
      
      private var stopTests : Boolean;
      private var failures : Collection;
      private var errors : Collection;
      private var listeners : Collection;
      private var runTests : Number;
      private var _localAssertionsMade : Number;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      syncToFrame: false,
      constructor: TestResult$,
      run: run,
      continueRun: continueRun,
      doRun$gncm: doRun,
      doContinue$gncm: doContinue,
      doFinish$gncm: doFinish,
      addError: addError,
      addFailure: addFailure,
      errorCount: errorCount,
      errorsIterator: errorsIterator,
      failureCount: failureCount,
      failuresIterator: failuresIterator,
      shouldStop: shouldStop,
      stop: stop,
      wasSuccessful: wasSuccessful,
      addListener: addListener,
      removeListener: removeListener,
      runCount: runCount,
      doProtected$gncm: doProtected,
      startTest: startTest,
      endTest: endTest,
      stopTests$gncm: false,
      failures$gncm: null,
      errors$gncm: null,
      listeners$gncm: null,
      runTests$gncm: NaN,
      _localAssertionsMade$gncm: NaN,
      __accessors__: {assertionsMade: {get: get$assertionsMade}},
      requires: ["AS3.Error"],
      uses: [
        "flexunit.framework.Assert",
        "flexunit.framework.AssertionFailedError",
        "flexunit.framework.Protectable",
        "flexunit.framework.ProtectedFinishTestCase",
        "flexunit.framework.ProtectedMiddleTestCase",
        "flexunit.framework.ProtectedStartTestCase",
        "flexunit.framework.TestFailure",
        "flexunit.framework.TestListener",
        "flexunit.utils.ArrayList",
        "flexunit.utils.Collection"
      ]
    };
});
