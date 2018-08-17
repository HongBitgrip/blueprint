Ext.define("flexunit.framework.TestFailure", function(TestFailure) {/* /*
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

   /**
    * A <code>TestFailure</code> collects a failed test together with
    * the caught Error.
    *
    * see TestResult
    * /
   public class TestFailure
   {
       public*/ function TestFailure$( test/* : Test*/, error/* : Error*/ )
       {
           this.test$YH9N = test;
           this.error$YH9N = error;
       }/*

   //------------------------------------------------------------------------------

       public*/ function failedTest()/* : Test*/
       {
           return this.test$YH9N;
       }/*

   //------------------------------------------------------------------------------

       public*/ function thrownException()/* : Error*/
       {
           return this.error$YH9N;
       }/*

   //------------------------------------------------------------------------------
       public*/ function exceptionMessage()/* : String*/
       {
           if ( ! this.isFailure() )
           {
               return this.error$YH9N.toString();
           }
           else
           {
               return this.error$YH9N.toString();
           }
       }/*

   //------------------------------------------------------------------------------

       public*/ function isFailure()/* : Boolean*/
       {
           return AS3.is( this.thrownException(),  flexunit.framework.AssertionFailedError);
       }/*

   //------------------------------------------------------------------------------

       public*/ function toString()/* : String*/
       {
           var errorMessage/* : String*/ = Object( this.test$YH9N ).toString() + ": " + this.error$YH9N.toString();

           if ( ! this.isFailure() )
               errorMessage += ": " + this.error$YH9N.toString();
           return errorMessage ;
       }/*

   //------------------------------------------------------------------------------

       private var test : Test;
       private var error : Error;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TestFailure$,
      failedTest: failedTest,
      thrownException: thrownException,
      exceptionMessage: exceptionMessage,
      isFailure: isFailure,
      toString: toString,
      test$YH9N: null,
      error$YH9N: null,
      uses: ["flexunit.framework.AssertionFailedError"]
    };
});