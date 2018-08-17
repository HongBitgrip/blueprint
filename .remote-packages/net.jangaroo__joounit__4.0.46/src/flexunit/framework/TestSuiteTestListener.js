Ext.define("flexunit.framework.TestSuiteTestListener", function(TestSuiteTestListener) {/* /*
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

   import flash.events.*;
   import flash.utils.*;
   public class TestSuiteTestListener implements TestListener
   {

       public*/ function TestSuiteTestListener$(suite/* : TestSuite*/, result/* : TestResult*/)
       {
           this.suite$dBSB = suite;
           this.result$dBSB = result;
           result.addListener(AS3.cast(flexunit.framework.TestListener,this));
           //the Timer allows us to let frames progress and kill the deep recursion problem
           this.timer$dBSB = new flash.utils.Timer(5, 1);
           this.timer$dBSB.addEventListener("timer",AS3.bind( this,"handleTimer"));
           if (listenerStack$static == null)
           {
               listenerStack$static = new Array();
           }
           else
           {
               result.removeListener(AS3.cast(flexunit.framework.TestListener,listenerStack$static[0]));
           }
           listenerStack$static.unshift(this);
       }/*

       public*/ function endTest( test/* : Test*/ )/* : void*/
       {
           if (listenerStack$static[0] != this)
           {
               //trace('TSTL.endTest ignored');
               return;
           }
           //BUG 114824 WORKAROUND
           this.timer$dBSB.removeEventListener(flash.events.TimerEvent.TIMER,AS3.bind( this,"handleTimer"));
           this.timer$dBSB = new flash.utils.Timer(5, 1);
           this.timer$dBSB.addEventListener(flash.events.TimerEvent.TIMER,AS3.bind( this,"handleTimer"));
           //END WORKAROUND
           this.timer$dBSB.start();
       }/*

       public*/ function handleTimer(event/* : Event*/)/* : void*/
       {
           this.suite$dBSB.runNext(this.result$dBSB);
       }/*

       public*/ function pop()/* : void*/
       {
           var popped/* : TestSuiteTestListener*/ = listenerStack$static.shift();
           //assertEquals(this, popped);
           this.result$dBSB.removeListener(AS3.cast(flexunit.framework.TestListener,this));
           if (listenerStack$static.length > 0)
           {
               this.result$dBSB.addListener(AS3.cast(flexunit.framework.TestListener,listenerStack$static[0]));
               listenerStack$static[0].endTest(null);
           }
       }/*

       public*/ function addError( test/* : Test*/, error/* : Error*/ )/* : void*/ { }/*

       public*/ function addFailure( test/* : Test*/, error/* : AssertionFailedError*/ )/* : void*/ { }/*

       public*/ function startTest( test/* : Test*/ )/* : void*/ { }/*

       private static*/ var listenerStack$static/* : Array*/=null;/*
       private var suite : TestSuite;
       private var result : TestResult;
       private var timer : Timer;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["flexunit.framework.TestListener"],
      constructor: TestSuiteTestListener$,
      endTest: endTest,
      handleTimer: handleTimer,
      pop: pop,
      addError: addError,
      addFailure: addFailure,
      startTest: startTest,
      suite$dBSB: null,
      result$dBSB: null,
      timer$dBSB: null,
      requires: [
        "flash.events.TimerEvent",
        "flash.utils.Timer",
        "flexunit.framework.TestListener"
      ]
    };
});
