Ext.define("flexunit.framework.WarningTestCase", function(WarningTestCase) {/* /*
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
    * A <code>WarningTestCase</code> is a framework generated
    * test cased used to highlight to the test writer that
    * there was a problem with their test.
    *
    * @see flexunit.framework.TestCase
    * /
   public class WarningTestCase extends TestCase
   {
      public*/ function WarningTestCase$( message/* : String*/ )
      {
          this.super$Xj3T( "Warning: " + message );
         this.message$Xj3T = message;
      }/*

   //------------------------------------------------------------------------------

      private*/ function runTest()/* : void*/
      {
         flexunit.framework.Assert.fail( this.message$Xj3T );
      }/*

   //------------------------------------------------------------------------------

      override public*/ function toString()/* : String*/
      {
         return this.methodName;
      }/*

   //------------------------------------------------------------------------------
      private var message : String;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.framework.TestCase",
      constructor: WarningTestCase$,
      super$Xj3T: function() {
        flexunit.framework.TestCase.prototype.constructor.apply(this, arguments);
      },
      runTest$Xj3T: runTest,
      toString: toString,
      message$Xj3T: null,
      requires: ["flexunit.framework.TestCase"],
      uses: ["flexunit.framework.Assert"]
    };
});
