Ext.define("flexunit.framework.EventfulTestCaseListener", function(EventfulTestCaseListener) {/* /*

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

   import mx.collections.ArrayCollection;
   import mx.collections.ListCollectionView;

   /**
    * Listens for expected events, keeping track of the expected events that
    * actually occur. A helper class designed specifically for the
    * <code>EventfulTestCase</code>.
    * /
   internal class EventfulTestCaseListener
   {
      //-------------------------------
      //
      // properties
      //
      //-------------------------------

      private var _expectedEventTypes : ListCollectionView
               =*/function _expectedEventTypes_(){this._expectedEventTypes$_LKQ=( new mx.collections.ArrayCollection());}/*;
      private var _unexpectedEventTypes : ListCollectionView
               =*/function _unexpectedEventTypes_(){this._unexpectedEventTypes$_LKQ=( new mx.collections.ArrayCollection());}/*;

      private var _dispatchedExpectedEvents : ListCollectionView
               =*/function _dispatchedExpectedEvents_(){this._dispatchedExpectedEvents$_LKQ=( new mx.collections.ArrayCollection());}/*;

      /**
       * Gets a comma-separated string listing the types of events that were
       * expected.
       * /
      public*/ function  get$expectedEventTypes()/* : String*/
      {
         var eventTypes/* : String*/ = "";

        for ( var i/*: uint*/ = 0; i < this._expectedEventTypes$_LKQ.length; i++ )
         {
            eventTypes +=AS3.as( this._expectedEventTypes$_LKQ[ i ],  String);

            if ( i < this._expectedEventTypes$_LKQ.length - 1 )
            {
               eventTypes += ',';
            }
         }

         return eventTypes;
      }/*

      /**
       * Gets a comma-separated string listing the types of events that were not
       * expected.
       * /
      public*/ function  get$unexpectedEventTypes()/* : String*/
      {
         var eventTypes/* : String*/ = "";

         for ( var i/*: uint*/ = 0; i < this._unexpectedEventTypes$_LKQ.length; i++ )
         {
            eventTypes +=AS3.as( this._unexpectedEventTypes$_LKQ[ i ],  String);

            if ( i < this._unexpectedEventTypes$_LKQ.length - 1 )
            {
               eventTypes += ',';
            }
         }

         return eventTypes;
      }/*

      /**
       * Gets a comma-separated string listing the types of events that have
       * been heard.
       * /
      public*/ function  get$dispatchedExpectedEventTypes()/* : String*/
      {
         var eventTypes/* : String*/ = "";

         for ( var i/*: uint*/; i < this._dispatchedExpectedEvents$_LKQ.length; i++ )
         {
            var event/* : Event*/ =AS3.as( this._dispatchedExpectedEvents$_LKQ[ i ],  flash.events.Event);

            eventTypes += event.type;

            if ( i < this._dispatchedExpectedEvents$_LKQ.length - 1 )
            {
               eventTypes += ',';
            }
         }

         return eventTypes;
      }/*

      /**
       * Gets an array of all the events that have been heard.
       * /
      public*/ function  get$dispatchedExpectedEvents()/* : Array*/
      {
         return this._dispatchedExpectedEvents$_LKQ.toArray();
      }/*

      /**
       * Gets the last event to have been heard.
       * /
      public*/ function  get$lastDispatchedExpectedEvent()/* : Event*/
      {
         if ( this._dispatchedExpectedEvents$_LKQ.length == 0 )
         {
            return null;
         }

         return AS3.cast(flash.events.Event, this._dispatchedExpectedEvents$_LKQ.getItemAt( this._dispatchedExpectedEvents$_LKQ.length - 1 ) );
      }/*

      //-------------------------------
      //
      // constructor
      //
      //-------------------------------

      public*/ function EventfulTestCaseListener$()
      {_expectedEventTypes_.call(this);_unexpectedEventTypes_.call(this);_dispatchedExpectedEvents_.call(this);
         this._dispatchedExpectedEvents$_LKQ = new mx.collections.ArrayCollection();
         this._expectedEventTypes$_LKQ = new mx.collections.ArrayCollection();
      }/*

      //-------------------------------
      //
      // functions
      //
      //-------------------------------

      /**
       * Records an event being listened for.
       *
       * @param type
       *    the type of event
       * @param expected
       *    whether the event is expected to be dispatched or not
       * /
      public*/ function listenForEvent( type/* : String*/, expected/* : Boolean*/ )/* : void*/
      {
      	if ( expected )
	         this._expectedEventTypes$_LKQ.addItem( type );
	      else
         	this._unexpectedEventTypes$_LKQ.addItem( type );
      }/*

      /**
       * Verifies that the expected events were heard, returning
       * <code>true</code> if so or <code>false</code> otherwise.
       * /
      public*/ function expectedEventsDispatched()/* : Boolean*/
      {
        for (var i/*:uint*/ = 0; i < this._expectedEventTypes$_LKQ.length; ++i )
         {
            var expectedEvent/* : String*/ = this._expectedEventTypes$_LKQ[i];
         	if ( this.expectedEventDispatched( expectedEvent ) == false )
         		return false;
         }
         return true;
      }/*

      /**
      *  Verifies the expected event was dispatched
      * /
      public*/ function expectedEventDispatched( expectedEvent/* : String*/ )/* : Boolean*/
      {
      	for (var i/*:uint*/ = 0; i < this._dispatchedExpectedEvents$_LKQ.length; ++i )
        	{
              var actualEvent/* : Event*/ = this._dispatchedExpectedEvents$_LKQ[i];
            if ( actualEvent.type == expectedEvent )
            {
               return true;
            }
         }
         return false;
      }/*

      /**
       * Verifies that the unexpected events were not heard, returning
       * <code>true</code> if so or <code>false</code> otherwise.
       * /
      public*/ function unexpectedEventsNotDispatched()/* : Boolean*/
      {
         for (var i/*:uint*/ = 0; i < this._unexpectedEventTypes$_LKQ.length; ++i )
         {
            var unexpectedEvent/* : String*/ = this._unexpectedEventTypes$_LKQ[i];
         	if ( this.unexpectedEventNotDispatched( unexpectedEvent ) == false )
         	{
         		return false;
         	}
         }

         return true;
      }/*

      /**
      *  Verifies that the unexpected event was not dispatched
      * /
      public*/ function unexpectedEventNotDispatched( unexpectedEvent/* : String*/ )/* : Boolean*/
      {
	      for (var i/*:uint*/ = 0; i < this._dispatchedExpectedEvents$_LKQ.length; ++i )
         {
            var actualEvent/* : Event*/ = this._dispatchedExpectedEvents$_LKQ[i];
            if( actualEvent.type == unexpectedEvent )
            {
               return false;
            }
         }

         return true;
      }/*

      /**
       * Handles an event by recording that it actually occurred.
       * /
      public*/ function handleEvent( event/* : Event*/ )/* : void*/
      {
         this._dispatchedExpectedEvents$_LKQ.addItem( event );
      }/*
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: EventfulTestCaseListener$,
      listenForEvent: listenForEvent,
      expectedEventsDispatched: expectedEventsDispatched,
      expectedEventDispatched: expectedEventDispatched,
      unexpectedEventsNotDispatched: unexpectedEventsNotDispatched,
      unexpectedEventNotDispatched: unexpectedEventNotDispatched,
      handleEvent: handleEvent,
      __accessors__: {
        expectedEventTypes: {get: get$expectedEventTypes},
        unexpectedEventTypes: {get: get$unexpectedEventTypes},
        dispatchedExpectedEventTypes: {get: get$dispatchedExpectedEventTypes},
        dispatchedExpectedEvents: {get: get$dispatchedExpectedEvents},
        lastDispatchedExpectedEvent: {get: get$lastDispatchedExpectedEvent}
      },
      requires: [
        "flash.events.Event",
        "mx.collections.ArrayCollection"
      ]
    };
});
