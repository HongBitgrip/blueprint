Ext.define("flexunit.framework.Assert", function(Assert) {/* /*
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
   import mx.utils.ObjectUtil;
   import mx.utils.StringUtil;
   
   /**
    * Base class containing static assert methods.
    * /
   public class Assert
   {
      protected static var _assertionsMade : Number = 0;
      private static*/ var _maxAssertionsMade$static/* : Number*/ = 0;/*
      private static*/ var _totalAssertionsMade$static/* : Number*/ = 0;/*

      public static*/ function resetAssertionsMade$static()/* : void*/
      {
         if ( Assert._assertionsMade > _maxAssertionsMade$static )
         {
            _maxAssertionsMade$static = Assert._assertionsMade;
         } 
         Assert._assertionsMade = 0;
      }/*
      
      public static*/ function oneAssertionHasBeenMade$static()/* : void*/
      {
         Assert._assertionsMade++;
         _totalAssertionsMade$static++;
      }/*

      public static*/ function resetEveryAsserionsFields$static()/* : void*/
      {
         Assert._assertionsMade = 0;
         _maxAssertionsMade$static = 0;
         _totalAssertionsMade$static = 0;   
      }/*
            
      public static*/ function  get$maxAssertionsMade$static()/* : Number*/
      {
         return _maxAssertionsMade$static;
      }/*
      
      public static*/ function  get$assetionsMade$static()/* : Number*/
      {
         return Assert._assertionsMade;
      }/*
      
      public static*/ function  get$totalAssertionsMade$static()/* : Number*/
      {
         return _totalAssertionsMade$static;
      }/*
      
      public*/ function Assert$()
      {
      }/*

   //---------------------------------------------------------------------------


      /**
       * Asserts that 2 values are equal.
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", expected, actual ]
       *
       * /
      public static*/ function assertEquals$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 3 )
         {
            failNotEquals$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failNotEquals$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/*
      
   //---------------------------------------------------------------------------


      /**
       * Asserts that 2 objects are equal.
       * This method will recursively compare properties on the nested objects.
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", expected, actual ]
       *
       * /
      public static*/ function assertObjectEquals$static(/* ... rest*/ )/* : void*/ 
      {var rest=Array.prototype.slice.call(arguments); 
         if ( rest.length == 3 )
         {
            failObjectEquals$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failObjectEquals$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/* 


   //---------------------------------------------------------------------------

      /**
       * Asserts that a string matches a regexp.
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", regexp, stringToTest ]
       *
       * /
      public static*/ function assertMatch$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 3 )
         {
            failNoMatch$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failNoMatch$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that a string doesn't match a regexp.
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", regexp, stringToTest ]
       *
       * /
      public static*/ function assertNoMatch$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 3 )
         {
            failMatch$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failMatch$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that the first string is contained in the second one
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", shortString, longString ]
       *
       * /
      public static*/ function assertContained$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 3 )
         {
            failNotContained$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failNotContained$static( "", rest[ 0 ], rest[ 1 ] );
         }
     }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that the first string is not contained in the second one
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", shortString, longString ]
       *
       * /
      public static*/ function assertNotContained$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);         
         if ( rest.length == 3 )
         {
            failContained$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failContained$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that two objects are strickly identical
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", expectedObject, actualObject ]
       *
       * /
      public static*/ function assertStrictlyEquals$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 3 )
         {
            failNotStrictlyEquals$static( rest[ 0 ], rest[ 1 ], rest[ 2 ] );
         }
         else
         {
            failNotStrictlyEquals$static( "", rest[ 0 ], rest[ 1 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that a condition is true
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", condition ]
       *
       * /
      public static*/ function assertTrue$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failNotTrue$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failNotTrue$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that a condition is false
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", condition ]
       *
       * /
      public static*/ function assertFalse$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failTrue$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failTrue$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that an object is null
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", objectToTest ]
       *
       * /
      public static*/ function assertNull$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failNotNull$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failNotNull$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that an object is not null
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", objectToTest ]
       *
       * /
      public static*/ function assertNotNull$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failNull$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failNull$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that an object is undefined
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", objectToTest ]
       *
       * /
      public static*/ function assertUndefined$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failNotUndefined$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failNotUndefined$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Asserts that an object is not undefined
       * The first argument can be the message when the assertion fails
       *
       * @param rest [ message = "", objectToTest ]
       *
       * /
      public static*/ function assertNotUndefined$static(/* ... rest*/ )/* : void*/
      {var rest=Array.prototype.slice.call(arguments);
         if ( rest.length == 2 )
         {
            failUndefined$static( rest[ 0 ], rest[ 1 ] );
         }
         else
         {
            failUndefined$static( "", rest[ 0 ] );
         }
      }/*

   //---------------------------------------------------------------------------

      /**
       * Fails with the given message
       *
       * @param failMessage
       * /
      public static*/ function fail$static( failMessage/* : String = ""*/ )/* : void*/
      {if(arguments.length<=0)failMessage="";
         throw new flexunit.framework.AssertionFailedError( failMessage );
      }/*

   //---------------------------------------------------------------------------

      private static*/ function failNotEquals$static(
                 message/* : String*/,
                 expected/* : Object*/,
                 actual/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( expected != actual )
         {
            if (AS3.is( expected,  Number) &&AS3.is( 
                 actual,  Number) && 
                 isNaN( Number( expected ) ) && 
                 isNaN( Number( actual ) ) )
            {
               return;
            }
            failWithUserMessage$static(
                message, mx.utils.StringUtil.substitute( 
                           flexunit.framework.AssertStringFormats.EXPECTED_BUT_WAS, 
                           expected, actual ) );
         }
      }/*
      
      private static*/ function failObjectEquals$static(
                 message/* : String*/,
                 expected/* : Object*/,
                 actual/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( mx.utils.ObjectUtil.compare( expected, actual ) != 0 ) 
         { 
            failWithUserMessage$static(
                message, flexunit.framework.AssertStringFormats.ACTUAL_OBJECT_DIFFERS );
         } 
      }/*

      private static*/ function failNoMatch$static(
               message/* : String*/,
               regexp/* : RegExp*/,
               string/* : String*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( ! regexp.test( string ) )
         {
           failWithUserMessage$static(
                  message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.NO_MATCH,
                              string, regexp.toString() ) );
         }
      }/*

      private static*/ function failMatch$static(
               message/* : String*/,
               regexp/* : RegExp*/,
               string/* : String*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( regexp.test( string ) )
         {
           failWithUserMessage$static(
                  message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.MATCH,
                              string, regexp.toString() ) );
         }
      }/*

      private static*/ function failNotContained$static(
               message/* : String*/,
               shortString/* : String*/,
               longString/* : String*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( longString.indexOf( shortString ) < 0 )
         {
           failWithUserMessage$static(
                  message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.NOT_CONTAINED,
                              shortString, longString ) );
         }
      }/*

      private static*/ function failContained$static(
               message/* : String*/,
               shortString/* : String*/,
               longString/* : String*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( longString.indexOf( shortString ) >= 0 )
         {
           failWithUserMessage$static(
                  message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.CONTAINED,
                              shortString, longString ) );
         }
      }/*

      private static*/ function failNotStrictlyEquals$static(
                 message/* : String*/,
                 expected/* : Object*/,
                 actual/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( expected !== actual )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.EXPECTED_BUT_WAS,
                              expected, actual ) );
         }
      }/*

      private static*/ function failNotTrue$static(
                 message/* : String*/,
                 condition/* : Boolean*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( ! condition )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.EXPECTED_BUT_WAS,
                              true, false ) );
         }
      }/*

      private static*/ function failTrue$static(
                 message/* : String*/,
                 condition/* : Boolean*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( condition )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.EXPECTED_BUT_WAS,
                              false, true ) );
         }
      }/*

      private static*/ function failNull$static(
                 message/* : String*/,
                 object/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( object == null )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.NULL,
                              object ) );
         }
      }/*

      private static*/ function failNotNull$static(
                 message/* : String*/,
                 object/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( object != null )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.NOT_NULL,
                              object ) );
         }
      }/*

      private static*/ function failUndefined$static(
                 message/* : String*/,
                 object/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( object == null )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.UNDEFINED,
                              object ) );
         }
      }/*

      private static*/ function failNotUndefined$static(
                 message/* : String*/,
                 object/* : Object*/ )/* : void*/
      {
         Assert.oneAssertionHasBeenMade();
         
         if ( object != null )
         {
            failWithUserMessage$static(
                   message, mx.utils.StringUtil.substitute( 
                              flexunit.framework.AssertStringFormats.NOT_UNDEFINED,
                              object ) );
         }
      }/*

      private static*/ function failWithUserMessage$static(
                 userMessage/* : String*/,
                 failMessage/* : String*/ )/* : void*/
      {
         if ( userMessage.length > 0 )
         {
            userMessage = userMessage + " - ";
         }

         throw new flexunit.framework.AssertionFailedError( userMessage + failMessage );
      }/*
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: Assert$,
      statics: {
        _assertionsMade: 0,
        resetAssertionsMade: resetAssertionsMade$static,
        oneAssertionHasBeenMade: oneAssertionHasBeenMade$static,
        resetEveryAsserionsFields: resetEveryAsserionsFields$static,
        assertEquals: assertEquals$static,
        assertObjectEquals: assertObjectEquals$static,
        assertMatch: assertMatch$static,
        assertNoMatch: assertNoMatch$static,
        assertContained: assertContained$static,
        assertNotContained: assertNotContained$static,
        assertStrictlyEquals: assertStrictlyEquals$static,
        assertTrue: assertTrue$static,
        assertFalse: assertFalse$static,
        assertNull: assertNull$static,
        assertNotNull: assertNotNull$static,
        assertUndefined: assertUndefined$static,
        assertNotUndefined: assertNotUndefined$static,
        fail: fail$static
      },
      __accessors__: {statics: {
        maxAssertionsMade: {get: get$maxAssertionsMade$static},
        assetionsMade: {get: get$assetionsMade$static},
        totalAssertionsMade: {get: get$totalAssertionsMade$static}
      }},
      requires: [
        "mx.utils.ObjectUtil",
        "mx.utils.StringUtil"
      ],
      uses: [
        "flexunit.framework.AssertStringFormats",
        "flexunit.framework.AssertionFailedError"
      ]
    };
});
