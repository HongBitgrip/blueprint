Ext.define("flexunit.textui.TestRunner", function(TestRunner) {/* /*
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

package flexunit.textui
{

   import flash.utils.*;
   import flash.utils.getTimer;
   import flexunit.framework.*;
   import flexunit.runner.BaseTestRunner;

   public class TestRunner extends BaseTestRunner
   {
       public*/ function TestRunner$(onComplete/*:Function=null*/, printer/*:Printer=null*/)
       {this.super$KbzU();switch(arguments.length){case 0:onComplete=null;case 1:printer=null;}
           if(printer == null)
            this.printer$KbzU = new flexunit.textui.ResultPrinter();
           else
            this.printer$KbzU = printer;
           this.testsComplete$KbzU = onComplete;
       }/*



   //------------------------------------------------------------------------------

       public static*/ function run$static( test/*:Test*/, onComplete/*:Function=null*/, printer/*:Printer=null*/ )/*:TestResult*/
       {switch(Math.max(arguments.length,1)){case 1:onComplete=null;case 2:printer=null;}
           return new TestRunner(onComplete, printer).doRun( test );
       }/*

   //------------------------------------------------------------------------------

       internal*/ function doRun( test/*:Test*/ )/*:TestResult*/
       {
           this.result$KbzU = new flexunit.framework.TestResult();
           this.result$KbzU.addListener(AS3.cast(flexunit.framework.TestListener, this.printer$KbzU ));
           this.result$KbzU.addListener(AS3.cast(flexunit.framework.TestListener, this ));

           this.startTime$KbzU = flash.utils.getTimer();
           this.totalTestCount$KbzU = test.countTestCases();
           this.numTestsRun$KbzU = 0;
           test.runWithResult( this.result$KbzU );
           return this.result$KbzU;
       }/*

   //------------------------------------------------------------------------------

       override public*/ function testEnded( test/* : Test*/ )/*:void*/
       {
           if (++this.numTestsRun$KbzU == this.totalTestCount$KbzU)
           {
               var endTime/*:Number*/ = flash.utils.getTimer();

               var runTime/*:Number*/ = endTime - this.startTime$KbzU;

               this.printer$KbzU.print( this.result$KbzU, runTime );
               if(this.testsComplete$KbzU != null)
               {
                   this.testsComplete$KbzU();
               }
           }
       }/*

       private var printer : Printer;
       private var startTime : int;
       private var totalTestCount : int;
       private var numTestsRun : int;
       private var result:TestResult;
       private var testsComplete:Function;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.runner.BaseTestRunner",
      constructor: TestRunner$,
      super$KbzU: function() {
        flexunit.runner.BaseTestRunner.prototype.constructor.apply(this, arguments);
      },
      doRun: doRun,
      testEnded: testEnded,
      printer$KbzU: null,
      startTime$KbzU: 0,
      totalTestCount$KbzU: 0,
      numTestsRun$KbzU: 0,
      result$KbzU: null,
      testsComplete$KbzU: null,
      statics: {run: run$static},
      requires: [
        "flash.utils.getTimer",
        "flexunit.runner.BaseTestRunner"
      ],
      uses: [
        "flexunit.framework.TestListener",
        "flexunit.framework.TestResult",
        "flexunit.textui.ResultPrinter"
      ]
    };
});
