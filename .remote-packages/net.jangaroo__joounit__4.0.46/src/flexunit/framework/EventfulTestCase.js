Ext.define("flexunit.framework.EventfulTestCase", function(EventfulTestCase) {/* /*

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

@ignore
* /

package flexunit.framework
{
   import flash.events.Event;
   import flash.events.IEventDispatcher;
   
   import mx.utils.StringUtil;

   /**
    * A base class for test cases that are interested in event dispatching.
    *
    * <p>
    * The process of testing the dispatch of events typically involves four
    * stages:
    * </p>
    *
    * <ol>
    *    <li>
    *       Record the events that are expected to occur or not expected to occur
    *       during the test case using the <code>listenForEvent()</code> function.
    *    </li>
    *    <li>
    *       Perform the action under test in the same way as a normal test case.
    *    </li>
    *    <li>
    *       Assert that the expected events actually occurred using the
    *       <code>assertEvents()</code> function.
    *    </li>
    *    <li>
    *       Assert that the details of these events are correct using the
    *       <code>lastDispatchedEvent</code> and <code>dispatchedEvents</code> property
    *       getters and standard FlexUnit assertion functions.
    *    </li>
    * </ol>
    *
    * <p>
    * An example test case is shown below:
    * </p>
    *
    * <pre>
    * public function testAddPlutonium() : void
    * {
    *    // record the expected and unexpected events
    *    listenForEvent( model, TemperatureChangeEvent.TEMPERATURE_CHANGED );
    *    listenForEvent( model, EmergencyEvent.NUCLEAR_MELTDOWN, UNEXPECTED );
    *
    *    // perform the action that is being tested
    *    reactor.addPlutonium( plutonium );
    *
    *    // assert that the expected events were dispatched and the unexpected
    *    // events were not dispatched
    *    assertEvents(
    *       "The temperature change event was not dispatched or the world has ended" );
    *
    *    // assert on the details of the actual event
    *    var temperatureChangeEvent : TemperatureChangeEvent =
    *       TemperatureChangeEvent( lastDispatchedEvent );
    *
    *    var expectedTemperature : Number = 550;
    *
    *    assertEquals(
    *       "The expected temperature change did not occur.",
    *       expectedTemperature,
    *       temperatureChangeEvent.temperature );
    * }
    * </pre>
    * /
   public class EventfulTestCase extends TestCase
   {
   	/** Boolean to indicate the event is expected to be dispatched * /
   	public static const EVENT_EXPECTED : Boolean = true;

   	/** Boolean to indicate the event is not expected to be dispatched * /
   	public static const EVENT_UNEXPECTED : Boolean = false;
   	
      /** Listens for expected events during a single test case. * /
      private var eventListener : EventfulTestCaseListener =*/function eventListener_(){this.eventListener$7T96=( new flexunit.framework.EventfulTestCaseListener());}/*;

      //-------------------------------
      //
      // actual event getters
      //
      //-------------------------------

      /**
       * Gets the last event to actually be heard. Only expected events
       * registered through the <code>listenForEvent()</code> function
       * can be heard.
       * /
      protected*/ function  get$lastDispatchedExpectedEvent()/* : Event*/
      {
         return this.eventListener$7T96.lastDispatchedExpectedEvent;
      }/*

      /**
       * Gets the events that were heard.
       * /
      protected*/ function  get$dispatchedExpectedEvents()/* : Array*/
      {
         return this.eventListener$7T96.dispatchedExpectedEvents;
      }/*

      //-------------------------------
      //
      // constructor
      //
      //-------------------------------

      public*/ function EventfulTestCase$( methodName/* : String = null*/ )
      {if(arguments.length<=0)methodName=null;
         this.super$7T96( methodName );eventListener_.call(this);;
      }/*

      //-------------------------------
      //
      // listen functions
      //
      //-------------------------------

      /**
       * Listens for an. When the <tt>assertEvents()</tt>
       * function is called, the events will be compared with the
       * actual events.
       *
       * @param source
       *    the object that is to be listened on for the dispatched event
       * @param type
       *    the type of event that the source object might dispatch
       * @param expected
       *    whether the event is expected to be dispatched or now; defaults to <code>EVENT_EXPECTED</code>
       * /
      protected*/ function listenForEvent(
         source/* : IEventDispatcher*/,
         type/* : String*/,
         expected/* : Boolean = EventfulTestCase.EVENT_EXPECTED*/ )/* : void*/
      {if(arguments.length<=2)expected=EventfulTestCase.EVENT_EXPECTED;
         // prevent the same event listener hearing an event multiple times

         if ( source.hasEventListener( type ) )
         {
            source.removeEventListener( type,AS3.bind( this.eventListener$7T96,"handleEvent") );
         }

         this.eventListener$7T96.listenForEvent( type, expected );

         source.addEventListener(
            type,AS3.bind(
            this.eventListener$7T96,"handleEvent"),
            false,
            0.0,
            true ); // weak reference so singleton listeners are cleaned up
      }/*

      //-------------------------------
      //
      // assertions
      //
      //-------------------------------

      /**
       * Asserts that the expected events were dispatched and the 
       * unexpected events were not dispatched. The events
       * must first be recorded using the <tt>listenForEvents()</tt>
       * method.
       *
       * @param message
       *    the user message to display when a test failure occurs
       * /
      public*/ function assertEvents(
         message/* : String = ""*/ )/* : void*/
      {if(arguments.length<=0)message="";
         flexunit.framework.Assert.oneAssertionHasBeenMade();
      	
         var failed/* : Boolean*/ = this.failExpectedEventsDidNotOccur$7T96( message, this.eventListener$7T96 );
         if ( !failed )
         	this.failUnexpectedEventsOccur$7T96( message, this.eventListener$7T96 );         
      }/*

      //-------------------------------
      //
      // private fail functions
      //
      //-------------------------------

      /**
       * Fails the test case if the expected events did not actually occur.
       * /
      private*/ function failExpectedEventsDidNotOccur(
         message/* : String*/,
         listener/* : EventfulTestCaseListener*/ )/* : Boolean*/
      {
         if ( listener.expectedEventsDispatched() == false )
         {
            failWithUserMessage$static(
               message, mx.utils.StringUtil.substitute(
                           flexunit.framework.AssertStringFormats.EVENT_DID_NOT_OCCUR,
                           listener.expectedEventTypes,
                           listener.dispatchedExpectedEventTypes ) );
            return true;
         }
         return false;
      }/*

      /**
       * Fails the test case if the expected events did not actually occur.
       * /
      private*/ function failUnexpectedEventsOccur(
         message/* : String*/,
         listener/* : EventfulTestCaseListener*/ )/* : Boolean*/
      {
         if ( listener.unexpectedEventsNotDispatched() == false )
         {
            failWithUserMessage$static(
               message, mx.utils.StringUtil.substitute(
                           flexunit.framework.AssertStringFormats.EVENT_DID_OCCUR,
                           listener.unexpectedEventTypes,
                           listener.dispatchedExpectedEventTypes ) );
            return true;
         }
         return false;
      }/*

      /**
       * Private function duplicated from <code>Assert</code>. Ideally this
       * would be protected in the FlexUnit <code>Assert</code> class instead.
       * /
      private static*/ function failWithUserMessage$static(
         userMessage/* : String*/,
         failMessage/* : String*/ )/* : void*/
      {
         if ( userMessage.length > 0 )
         {
            userMessage += " - ";
         }

         throw new flexunit.framework.AssertionFailedError( userMessage + failMessage );
   	}/*
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "flexunit.framework.TestCase",
      constructor: EventfulTestCase$,
      super$7T96: function() {
        flexunit.framework.TestCase.prototype.constructor.apply(this, arguments);
      },
      listenForEvent: listenForEvent,
      assertEvents: assertEvents,
      failExpectedEventsDidNotOccur$7T96: failExpectedEventsDidNotOccur,
      failUnexpectedEventsOccur$7T96: failUnexpectedEventsOccur,
      statics: {
        EVENT_EXPECTED: true,
        EVENT_UNEXPECTED: false
      },
      __accessors__: {
        lastDispatchedExpectedEvent: {get: get$lastDispatchedExpectedEvent},
        dispatchedExpectedEvents: {get: get$dispatchedExpectedEvents}
      },
      requires: [
        "flexunit.framework.TestCase",
        "mx.utils.StringUtil"
      ],
      uses: [
        "flexunit.framework.Assert",
        "flexunit.framework.AssertStringFormats",
        "flexunit.framework.AssertionFailedError",
        "flexunit.framework.EventfulTestCaseListener"
      ]
    };
});
