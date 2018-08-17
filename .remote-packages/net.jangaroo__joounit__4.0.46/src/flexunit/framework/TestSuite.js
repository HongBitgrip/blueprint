Ext.define("flexunit.framework.TestSuite", function(TestSuite) {/* /*
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
   import flash.utils.describeType;
   
   import flexunit.utils.*;
   
   /**
    * A <code>TestSuite</code> is a collection of tests.
    * @description
    * It runs a collection of test cases. Here is an example:
    * import samples.test.com.iterationtwo.*;
    * import flexunit.framework.*;
    * import flexunit.extensions.*;
    *
    * <code>
    * import samples.test.com.iterationtwo.*;
    * import flexunit.framework.*;
    * import flexunit.extensions.*;
    *
    * class samples.test.com.iterationtwo.AllTests
    * {
    *    public static function suite() : Test
    *    {
    *       var testSuite : TestSuite = new TestSuite();
    *
    *       testSuite.addTest( new TestSuite( TestMoney ) );
    *       testSuite.addTest( new TestSuite( TestMoneyWithSetUpTearDown ) );
    *       testSuite.addTest( TestSuiteWithSetUpTearDown.suite() );
    *
    *       return testSuite;
    *    }
    * }
    * </code>
    * A <code>TestRunner</code> can be used to run the tests in a <code>TestSuite</code><br><br>
    * The <code>TestSetup</code>class lets you add <code>setUp()</code> and <code>tearDown()</code>
    * methods to initialize and clean-up your test suites, as shown in this example:
    * <code>
    * import samples.test.com.iterationtwo.*;
    * import flexunit.framework.*;
    * import flexunit.extensions.*;
    *
    * class samples.test.com.iterationtwo.TestSuiteWithSetUpTearDown
    * {
    *    public static function suite() : Test
    *    {
    *       var testSuite : TestSuite = new TestSuite();
    *
    *       testSuite.addTest( new TestSuite( TestMoneyWithFailingTests ) );
    *
    *       var testSetUp = new TestSetup( testSuite );
    *
    *       testSetUp.setUp = setUp
    *       testSetUp.tearDown = tearDown;
    *
    *       return testSetUp;
    *    }
    *
    *    public static function setUp()
    *    {
    *    }
    *
    *    public static function tearDown()
    *    {
    *    }
    * }
    * </code>
    * You can create your own classes that extend <code>TestSetup</code> so that you can reuse common
    * test suite <code>setUp()</code> and <code>tearDown()</code> functionality across
    * test suites.
    *
    * @see flexunit.framework.Test
    * @see flexunit.flexui.TestRunner
    * @see flexunit.extensions.TestSetup
    * /
   public class TestSuite implements Test
   {

      /**
       * The TestSuite constructor, provided with the test to be run.
       * @param param The test class to be run. Can be a <code>TestCase</code>, another <code>TestSuite</code>
       * or any class that implements the <code>Test</code> interface.
       * /
       public*/ function TestSuite$( param/* : Object = null*/ )
       {if(arguments.length<=0)param=null;/*
           super()*/;
           this.testArrayList = AS3.cast(flexunit.utils.Collection, new flexunit.utils.ArrayList());

           if( param == null )
               return;

           if (AS3.is(param,  Class))
           {
              var c/* : Class*/ = AS3.cast(Class,param);
              var newClass/* : Test*/ = new c();
              this.addTestMethods$H0S5( c, newClass );

              if ( this.testArrayList.length() == 0 )
              {
                  var warningTestCase/* : WarningTestCase*/ = new flexunit.framework.WarningTestCase( "No tests found in " + newClass.className );
                  this.addTestToList$H0S5( warningTestCase );
              }
           }
           else if (AS3.is(param,  flexunit.framework.Test))
           {
               this.addTestToList$H0S5(AS3.cast(flexunit.framework.Test,param));
           }
           else
           {
               throw new AS3.Error("Can't handle constructor arg");
           }
       }/*

   //------------------------------------------------------------------------------
       public*/ function toString()/* : String*/
       {
           return "TestSuite";
       }/*

   //------------------------------------------------------------------------------

   /**
    * Runs the test, populating <code>result</code> with the test results.
    * @param result The <code>TestResult</code> instance to be populated with the test results.
    * /
       public*/ function runWithResult( result/* : TestResult*/ )/* : void*/
       {
           this.runIter$H0S5 = this.testArrayList.iterator();
           this.listener$H0S5 = new flexunit.framework.TestSuiteTestListener(this, result);
           this.runNext(result);
       }/*

       public*/ function runNext( result/* : TestResult*/)/* : void*/
       {
           if ( this.runIter$H0S5.hasNext() )
           {
               if ( result.shouldStop() )
               {
                   this.listener$H0S5.pop();
                   return;
               }
               //note that the TestSuiteListener will make sure that runNext is called only occasionally so that
               //recursion doesn't spiral out of control
               var test/* : Test*/ = AS3.cast(flexunit.framework.Test, this.runIter$H0S5.next() );
               this.runTest$H0S5( test, result );
           }
           else
           {
               this.listener$H0S5.pop();
           }
       }/*

   //------------------------------------------------------------------------------

       private*/ function runTest( test/* : Test*/, result/* : TestResult*/ )/* : void*/
       {
           test.runWithResult( result );
       }/*

   //------------------------------------------------------------------------------

   /**
    * Adds a test to this test suite.
    * @param test The <code>Test</code> instance to be added.
    * /
       public*/ function addTest( test/* : Test*/ )/* : void*/
       {
           if (!(AS3.is( test,  flexunit.framework.Test) ))
               this.addTest( AS3.cast(flexunit.framework.Test, new flexunit.framework.WarningTestCase( "Object instance passed to addTest does not implement Test interface" )));
           else
               this.addTestToList$H0S5( test );
       }/*

   //------------------------------------------------------------------------------

   /**
    * Wraps a test inside a <code>TestSuite</code> and adds it to this test suite.
    * @param testClass The <code>Class</code> that extends TestCase which will be added as a test suite.
    * /
       public*/ function addTestSuite( testClass/* : Class*/ )/* : void*/
       {
          //addClassTestsToList( testClass );
           this.addTestToList$H0S5( new TestSuite( testClass ));
       }/*

   //------------------------------------------------------------------------------

       private*/ function addTestMethods( theClass/* : Class*/, newClass/* : Test*/ )/* : void*/
       {
           var methodNames/* : Array*/ = newClass.getTestMethodNames();
           for ( var i/* : uint*/ =0; i<methodNames.length; i++ )
           {
               var method/* : String*/ = String( methodNames[i] );
               this.addTestMethod$H0S5( theClass, method );
           }
       }/*

   //------------------------------------------------------------------------------

       private*/ function addTestMethod( theClass/* : Class*/, methodName/* : String*/ )/* : void*/
       {
           this.addTestToList$H0S5( this.createTestInstance$H0S5( theClass, methodName ));
       }/*

   //------------------------------------------------------------------------------

       private*/ function createTestInstance( theClass/* : Class*/, methodName/* : String*/ )/* : Test*/
       {
          var test/* : Test*/ = new theClass();
          if(AS3.is( test,  flexunit.framework.TestCase) ) AS3.cast(flexunit.framework.TestCase,test).methodName = methodName;

           return test;
       }/*

   //------------------------------------------------------------------------------

   /**
    * Returns the names of the test methods for this test.
    * @return  Array of method names for this test
   * /
       public*/ function getTestMethodNames()/* : Array*/
       {
           return(null);
       }/*

   //------------------------------------------------------------------------------

   /**
    * Returns all the tests in this test suite as an <code>Array</code>
    * @return An <code>Array</code> containing the tests in this test suite.
    * /
       public*/ function getTests()/* : Array*/
       {
           return this.testArrayList.toArray();
       }/*

   //------------------------------------------------------------------------------

   /**
    * Iterates all tests in this suite to calculate the total number of tests in this suite.
    * @return A Number containing the count of all tests in this suite.
    * /
       public*/ function countTestCases()/* : Number*/
       {
           var count/* : Number*/ = 0;

           var iter/* : Iterator*/ = this.testArrayList.iterator();
           while ( iter.hasNext() )
           {
               var test/* : Test*/ = AS3.cast(flexunit.framework.Test, iter.next() );
               count = count + test.countTestCases();
           }

           return count;
       }/*
         
   //------------------------------------------------------------------------------

   /**
    * The number of tests added to this suite.
    * @return A Number containing the number of tests added to this suite.
    * /
       public*/ function testCount()/* : Number*/
       {
           return this.testArrayList.length();
       }/*

   //------------------------------------------------------------------------------

   /**
    * Returns the fully qualified class name.
    * @return The fully qualified class name.
    * /
       public*/ function  get$className()/* : String*/
       {
           return flash.utils.getQualifiedClassName(this).replace(/::/, ".");
       }/*


   //------------------------------------------------------------------------------

       private*/ function addTestToList( test/* : Test*/ )/* : void*/
       {
           this.testArrayList.addItem( test );
       }/*

   //------------------------------------------------------------------------------

       public var testArrayList : Collection;
       public var name : String;
       private var runIter : Iterator;
       private var listener : TestSuiteTestListener;

   }
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["flexunit.framework.Test"],
      constructor: TestSuite$,
      toString: toString,
      runWithResult: runWithResult,
      runNext: runNext,
      runTest$H0S5: runTest,
      addTest: addTest,
      addTestSuite: addTestSuite,
      addTestMethods$H0S5: addTestMethods,
      addTestMethod$H0S5: addTestMethod,
      createTestInstance$H0S5: createTestInstance,
      getTestMethodNames: getTestMethodNames,
      getTests: getTests,
      countTestCases: countTestCases,
      testCount: testCount,
      addTestToList$H0S5: addTestToList,
      testArrayList: null,
      name: null,
      runIter$H0S5: null,
      listener$H0S5: null,
      __accessors__: {className: {get: get$className}},
      requires: [
        "AS3.Error",
        "flash.utils.getQualifiedClassName",
        "flexunit.framework.Test"
      ],
      uses: [
        "flexunit.framework.TestCase",
        "flexunit.framework.TestSuiteTestListener",
        "flexunit.framework.WarningTestCase",
        "flexunit.utils.ArrayList",
        "flexunit.utils.Collection"
      ]
    };
});
