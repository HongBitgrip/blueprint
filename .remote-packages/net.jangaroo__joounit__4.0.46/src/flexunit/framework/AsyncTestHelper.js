Ext.define("flexunit.framework.AsyncTestHelper", function(AsyncTestHelper) {/* /*
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
   
   import mx.utils.StringUtil;

   public class AsyncTestHelper
   {
       public*/ function AsyncTestHelper$( testCase/* : TestCase*/, testResult/* : TestResult*/ )
       {
           this.testCase$7tox = testCase;
           this.testResult$7tox = testResult;
           this.timer$7tox = new flash.utils.Timer( 100 );
           this.timer$7tox.addEventListener( flash.events.TimerEvent.TIMER,AS3.bind( this,"timerHandler") );
       }/*

   //------------------------------------------------------------------------------

       public*/ function startAsync()/* : void*/
       {
           this.loadAsync();
           if ( this.objToPass$7tox != null )
           {
               this.testResult$7tox.continueRun( this.testCase$7tox );
           }
           else
           {
               this.timer$7tox.start();
           }
       }/*

   //------------------------------------------------------------------------------


       public*/ function loadAsync()/* : void*/
       {
           var async/* : Object*/ = this.testCase$7tox.getNextAsync();

           this.func$7tox = async.func;

           this.extraData$7tox = async.extraData;

           this.failFunc$7tox = async.failFunc;

           //BUG 114824 WORKAROUND
           this.timer$7tox = new flash.utils.Timer( async.timeout, 1 );

           this.timer$7tox.addEventListener( flash.events.TimerEvent.TIMER,AS3.bind( this,"timerHandler") );
           //END WORKAROUND

           this.timer$7tox.delay = async.timeout;
       }/*

   //------------------------------------------------------------------------------

       public*/ function runNext()/* : void*/
       {
           if ( this.shouldFail$7tox )
           {
               if ( this.failFunc$7tox != null )
               {
                   this.failFunc$7tox( this.extraData$7tox );
               }
               else
               {
                   flexunit.framework.Assert.fail( mx.utils.StringUtil.substitute( flexunit.framework.AssertStringFormats.ASYNC_CALL_NOT_FIRED, this.timer$7tox.delay ) );
               }
           }
           else
           {
               if ( this.extraData$7tox != null )
               {
                   this.func$7tox( this.objToPass$7tox, this.extraData$7tox );
               }
               else
               {
                   this.func$7tox( this.objToPass$7tox );
               }
               this.func$7tox = null;
               this.objToPass$7tox = null;
               this.extraData$7tox = null;
           }
       }/*

   //------------------------------------------------------------------------------

       public*/ function timerHandler( event/* : TimerEvent*/ )/* : void*/
       {
           this.timer$7tox.stop();
           this.shouldFail$7tox = true;
           this.testResult$7tox.continueRun( this.testCase$7tox );
       }/*

   //------------------------------------------------------------------------------

       public*/ function handleEvent( event/* : Object*/ )/* : void*/
       {
           var wasReallyAsync/* : Boolean*/ = this.timer$7tox.running;

           this.timer$7tox.stop();

           if ( this.shouldFail$7tox )
               return;

           this.objToPass$7tox = event;
           if ( wasReallyAsync )
           {
               this.testResult$7tox.continueRun( this.testCase$7tox );
           }
       }/*

   //------------------------------------------------------------------------------

       //IResponder methods here (they'd look similar to handleEvent) ...

   //------------------------------------------------------------------------------

       private var testCase : TestCase;
       private var func : Function;
       private var extraData : Object;
       private var failFunc : Function;
       private var testResult : TestResult;

       private var shouldFail : Boolean = false;
       private var objToPass : Object;

       private var timer : Timer;

   }
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: AsyncTestHelper$,
      startAsync: startAsync,
      loadAsync: loadAsync,
      runNext: runNext,
      timerHandler: timerHandler,
      handleEvent: handleEvent,
      testCase$7tox: null,
      func$7tox: null,
      extraData$7tox: null,
      failFunc$7tox: null,
      testResult$7tox: null,
      shouldFail$7tox: false,
      objToPass$7tox: null,
      timer$7tox: null,
      requires: [
        "flash.events.TimerEvent",
        "flash.utils.Timer",
        "mx.utils.StringUtil"
      ],
      uses: [
        "flexunit.framework.Assert",
        "flexunit.framework.AssertStringFormats"
      ]
    };
});
