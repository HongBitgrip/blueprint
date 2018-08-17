Ext.define("flexunit.utils.ArrayList", function(ArrayList) {/* /*
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

package flexunit.utils
{

   public class ArrayList implements Collection
   {

      public*/ function ArrayList$()
      {
         this.items$5rQ9 = new Array();
      }/*

   //------------------------------------------------------------------------------

      public*/ function addItem( item/*:Object*/ )/*:Boolean*/
      {
         if ( item == null )
            return false;

         this.items$5rQ9.push( item );
         return true;
      }/*

   //------------------------------------------------------------------------------

      public*/ function clear()/*:void*/
      {
         this.items$5rQ9 = new Array();
      }/*

   //------------------------------------------------------------------------------

      public*/ function contains(item/*:Object*/)/*:Boolean*/
      {
         return ( this.getItemIndex$5rQ9( item ) > -1 );
      }/*

   //------------------------------------------------------------------------------

      public*/ function getItemAt(index/*:Number*/)/*:Object*/
      {
         return ( this.items$5rQ9[ index ] );
      }/*

   //------------------------------------------------------------------------------

      public*/ function iterator()/*:Iterator*/
      {
         return ( AS3.cast(flexunit.utils.Iterator, new flexunit.utils.CollectionIterator( this )));
      }/*

   //------------------------------------------------------------------------------

      public*/ function length()/*:Number*/
      {
         return this.items$5rQ9.length;
      }/*

   //------------------------------------------------------------------------------

      public*/ function isEmpty()/*:Boolean*/
      {
         return ( this.items$5rQ9.length == 0 );
      }/*

   //------------------------------------------------------------------------------

      public*/ function removeItem( item/*:Object*/ )/*:Boolean*/
      {
         var itemIndex/*:Number*/ = this.getItemIndex$5rQ9( item );
         if ( itemIndex < 0 )
            return false;

         this.items$5rQ9.splice( itemIndex, 1 );
         return true;
      }/*

   //------------------------------------------------------------------------------

      public*/ function toArray()/* : Array*/
      {
         return this.items$5rQ9;
      }/*

   //------------------------------------------------------------------------------

      private*/ function getItemIndex( item/*:Object*/ )/*:Number*/
      {
         for ( var i/*:uint*/ =0; i<this.items$5rQ9.length; i++ )
         {
            if ( this.items$5rQ9[ i ] == item )
               return i;
         }
         return -1;
      }/*

   //------------------------------------------------------------------------------

      private var items:Array;
   }
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["flexunit.utils.Collection"],
      constructor: ArrayList$,
      addItem: addItem,
      clear: clear,
      contains: contains,
      getItemAt: getItemAt,
      iterator: iterator,
      length: length,
      isEmpty: isEmpty,
      removeItem: removeItem,
      toArray: toArray,
      getItemIndex$5rQ9: getItemIndex,
      items$5rQ9: null,
      requires: ["flexunit.utils.Collection"],
      uses: [
        "flexunit.utils.CollectionIterator",
        "flexunit.utils.Iterator"
      ]
    };
});
