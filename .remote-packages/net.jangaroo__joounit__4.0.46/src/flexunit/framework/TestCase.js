Ext.define("flexunit.framework.TestCase", function(TestCase) {/* /*
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

   import flash.utils.*;

   /**
    * The Base Class for test cases. A Test case defines the fixture in which to run multiple tests.
    * @description
    * Each test runs in its own fixture so there can be no side effects among test runs.
    * Here is an example:
    * <code>
    * import samples.com.iterationtwo.Money;
    * import flexunit.framework.TestCase;
    *
    * class samples.test.com.iterationtwo.TestMoney extends TestCase
    * {
    *     ...
    * }
    * </code>
    *
    * For each test, implement a method which interacts
    * with the fixture. Verify the expected results using the assertions
    * residing in the base class <code>Assert</code>.
    * <code>
    *  public function testAddMoney()
    *  {
    *     var dollars1 : Number = 3;
    *     var cents1 : Number = 50;
    *     var money1 : Money = new Money( dollars1, cents1 );
    *
    *     var dollars2 : Number = 3;
    *     var cents2 : Number = 20;
    *     var money2 : Money = new Money( dollars2, cents2 );
    *
    *     var money3 : Money = money1.addMoney( money2 )
    *
    *     assertNotNull( "money was null", money3 );
    *     assertNotUndefined( "money was undefined", money3 );
    *
    *     assertEquals( "Dollars should be 6", 6, money3.dollars );
    *     assertEquals( "Cents should be 70", 70, money3.cents );
    *  }
    * </code>
    * You can also specify <code>setUp()</code> and <code>tearDown()</code> methods
    * to initialize and clean-up tests.
    * <code>
    * import samples.com.iterationtwo.Money;
    * import flexunit.framework.TestCase;
    *
    * class samples.test.com.iterationtwo.TestMoneyWithSetUpTearDown extends TestCase
    * {
    *    public function setUp() : void
    *    {
    *       money = new Money( 3, 50 );
    *    }
    *
    *    public function tearDown() : void
    *    {
    *       money = null;
    *    }
    *
    *    private var money : Money;
    * }
    * </code>
    * The tests to be run can be collected into a <code>TestSuite</code> and run using a a <code>TestRunner</code>.
    *
    * The AS3 version has been extended to allow asynchronous tests.  This means that an individual test method
    * will not be considered complete until any subsequent asynchronous calls that have been specified have completed.
    * Adding an asynchronous callback is easy, simply call the addAsync method passing in the callback method and the
    * time in which it is expected to complete.  You can also pass any data you want carried through the call.  addAsync
    * will return a function capable of handling generic events which you can then set as the event listener on an object.
    * E.g.,
    * <code>
    *   public function testAsync() : void
    *   {
    *      var myDispatcher : ValueDispatcher = new ValueDispatcher();
    *      var helper : Function = addAsync(eventHandler, 200, "foo");
    *      myDispatcher.addEventListener("value", helper);
    *      myDispatcher.dispatchValue("foo", 100); //the dispatcher should send a value in 100 ms
    *   }
    *
    *   //the expected is the extra data that was passed in addAsync above
    *   public function eventHandler(event : ValueEvent, expected : String)
    *   {
    *      var actual : String = event.value;
    *      assertEquals(expected, actual);
    *   }
    * <code>
    *
    *
    * @see flexunit.framework.Assert
    * @see flexunit.framework.TestSuite
    * @see flexunit.framework.TestResult
    *
    * /
   public class TestCase extends Assert implements Test
   {

   //------------------------------------------------------------------------------

      /**
      * The TestCase constructor. If you provide a contstructor in a <code>TestCase</code> subclass,
      * you should ensure that this constructor is called.
      * @param methodName The name of the test method to be called in the test run.
      * /
      public*/ function TestCase$( methodName/* : String = null*/)
      {if(arguments.length<=0)methodName=null;
         this.super$oHM3();
         this.methodName = methodName;
         this.asyncMethods$oHM3 = new Array();
      }/*

   //------------------------------------------------------------------------------

      /**
      * Creates a new <code>TestResult</code> and runs the tests, populating that <code>TestResult</code>
      * with the results.
      * /
       public*/ function run()/* : TestResult*/
       {
           var result/* : TestResult*/ = new flexunit.framework.TestResult();
           
           this.runWithResult( result );

           return result;
       }/*

   //------------------------------------------------------------------------------

      /**
      * Runs the tests, populating the <code>result</code> parameter.
      * @param result The TestResult instance to be populated
      * /
       public*/ function runWithResult( result/* : TestResult*/ )/* : void*/
       {
           result.run( this );
       }/*


   //------------------------------------------------------------------------------

      /**
      * Runs <code>setUp()</code>
      * /
       public*/ function runStart()/* : void*/
       {
           this.setUp();
       }/*

   //------------------------------------------------------------------------------

      /**
       * Runs the normal test method or the next asynchronous method
       * /
       public*/ function runMiddle()/* : void*/
       {
           this.runTestOrAsync$oHM3();
       }/*

   //------------------------------------------------------------------------------

      /**
       * Runs <code>tearDown()</code>
       * /
       public*/ function runFinish()/* : void*/
       {
           this.asyncTestHelper$oHM3 = null;
           this.tearDown();
       }/*

   //------------------------------------------------------------------------------

      /**
       * Empty implementation of <code>setUp()</code>. Can be overridden in test class.
       * /
       public*/ function setUp()/* : void*/
       {
       }/*

   //------------------------------------------------------------------------------

      /**
       * Empty implementation of <code>tearDown()</code>. Can be overridden in test class.
       * /
       public*/ function tearDown()/* : void*/
       {
       }/*

   //------------------------------------------------------------------------------

      /**
       * The number of test cases in this test class.
       * @return A Number representation the count of test cases in this test class. Always returns 1 for <code>TestCase</code>
       * /
       public*/ function countTestCases()/* : Number*/
       {
           return 1;
       }/*

   //------------------------------------------------------------------------------

      /**
       * A string representation of the test case
       * @return A string representation of the test class name and the test method name.
       * /
       public*/ function toString()/* : String*/
       {
           return this.methodName + " (" + this.className + ")";
       }/*

   //------------------------------------------------------------------------------

      /**
       * Returns the the fully qualified class name
       * @return The fully qualified class name
       * /
       public*/ function  get$className()/* : String*/
       {
           return flash.utils.getQualifiedClassName(this).replace(/::/, ".");
       }/*
       
       public*/ function  get$assertionsMade()/* : Number*/
       {
          return this._assertionsMade$oHM3;
       }/*

   //------------------------------------------------------------------------------

      /**
       * Runs the test or if there is an AsynchronousTestHelper runs the next asynchronous method
       * /
       private*/ function runTestOrAsync()/* : void*/
       {
           if ( this.methodName == null || this.methodName == "" )
           {
               flexunit.framework.Assert.fail( "No test method to run" );
           }

           if ( this.asyncTestHelper$oHM3 != null )
           {
               this.asyncTestHelper$oHM3.runNext();
           }
           else
           {
               this[ this.methodName ]();
           }
       }/*

   //------------------------------------------------------------------------------

      /**
      * Add an asynchronous check point to the test.
      * This method will return an event handler function.
      *
      * @param func the Function to execute when things have been handled
      * @param timeout if the function isn't called within this time the test is considered a failure
      * @param passThroughData data that will be passed to your function (only if non-null) as the 2nd argument
      * @param failFunc a Function that will be called if the asynchronous function fails to execute, useful if perhaps the failure to
      *     execute was intentional or if you want a specific failure message
      * @return the Function that can be used as an event listener
      * /
      public*/ function addAsync(
               func/* : Function*/,
               timeout/* : int*/,
               passThroughData/* : Object = null*/,
               failFunc/* : Function = null*/ )/* : Function*/
      {switch(Math.max(arguments.length,2)){case 2:passThroughData=null;case 3:failFunc=null;}
         flexunit.framework.Assert.oneAssertionHasBeenMade();
         
         if ( this.asyncTestHelper$oHM3 == null )
         {
             this.asyncTestHelper$oHM3 = new flexunit.framework.AsyncTestHelper( this, this.testResult$oHM3 );
         }
         
         this.asyncMethods$oHM3.push( { func: func, timeout: timeout, extraData: passThroughData, failFunc: failFunc } );
         
         return AS3.bind( this.asyncTestHelper$oHM3,"handleEvent");
      }/*

   //------------------------------------------------------------------------------

      /**
       * Returns true if there are any asynchronous methods remaining to be called
       * /
       public*/ function hasAsync()/* : Boolean*/
       {
           return this.asyncMethods$oHM3.length > 0;
       }/*

   //------------------------------------------------------------------------------

      /**
       * Called by the TestResult to kick off wait for the next asynchronous method
       * /
        public*/ function startAsync()/* : void*/
       {
           this.asyncTestHelper$oHM3.startAsync();
       }/*

   //------------------------------------------------------------------------------
      /**
       * The AsyncTestHelper will call this when it's ready for to start the next async.  It's possible that
       * it will need to get access to it even before async has been started if the call didn't actually end
       * up being asynchronous.
       * /
       public*/ function getNextAsync()/* : Object*/
       {
           return this.asyncMethods$oHM3.shift();
       }/*

   //------------------------------------------------------------------------------

      /**
       * Called by the TestResult to pass along so that it can be passed for async
       * /
       public*/ function setTestResult( result/* : TestResult*/ )/* : void*/
       {
           this.testResult$oHM3 = result;           
       }/*
       
       public*/ function  set$assertionsMade( value/* : Number*/ )/* : void*/
       {
          this._assertionsMade$oHM3 = value;
       }/*
   //------------------------------------------------------------------------------

      public*/ function getTestMethodNames()/* : Array*/
      {
         if ( this.methodNames$oHM3 == null )
         {
            this.methodNames$oHM3 = new Array();

            var type/* : XML*/ = flash.utils.describeType( this );
            var names/* : XMLList*/ = type.method["@name"];

            for ( var i/* : uint*/ = 0; i < names.length(); i++ )
            {
               if ( this.isTestMethod$oHM3( String( names[ i ] ) ) )
               {
                  this.methodNames$oHM3.push( String( names[ i ] ) );
               }
            }
         }

         return this.methodNames$oHM3;
      }/*

      private*/ function isTestMethod( name/* : String*/ )/* : Boolean*/
      {
         return name.indexOf( "test", 0 ) == 0;
      }/*

   //------------------------------------------------------------------------------

      /**
       *   An array of all the test methods for this test case.
       * /
       private var methodNames : Array;

      /**
       * The method name of the individual test to be run
       * /
       public var methodName : String;
       private var asyncMethods : Array;
       private var asyncTestHelper : AsyncTestHelper;
       private var testResult : TestResult;
       private var _assertionsMade : Number = 0;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.framework.Assert",
      mixins: ["flexunit.framework.Test"],
      constructor: TestCase$,
      super$oHM3: function() {
        flexunit.framework.Assert.prototype.constructor.apply(this, arguments);
      },
      run: run,
      runWithResult: runWithResult,
      runStart: runStart,
      runMiddle: runMiddle,
      runFinish: runFinish,
      setUp: setUp,
      tearDown: tearDown,
      countTestCases: countTestCases,
      toString: toString,
      runTestOrAsync$oHM3: runTestOrAsync,
      addAsync: addAsync,
      hasAsync: hasAsync,
      startAsync: startAsync,
      getNextAsync: getNextAsync,
      setTestResult: setTestResult,
      getTestMethodNames: getTestMethodNames,
      isTestMethod$oHM3: isTestMethod,
      methodNames$oHM3: null,
      methodName: null,
      asyncMethods$oHM3: null,
      asyncTestHelper$oHM3: null,
      testResult$oHM3: null,
      _assertionsMade$oHM3: 0,
      __accessors__: {
        className: {get: get$className},
        assertionsMade: {
          get: get$assertionsMade,
          set: set$assertionsMade
        }
      },
      requires: [
        "flash.utils.describeType",
        "flash.utils.getQualifiedClassName",
        "flexunit.framework.Assert",
        "flexunit.framework.Test"
      ],
      uses: [
        "flexunit.framework.AsyncTestHelper",
        "flexunit.framework.TestResult"
      ]
    };
});
