Ext.define("com.coremedia.collaboration.controlroom.rest.CapList", function(CapList) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.RemoteBean;

public interface CapList extends RemoteBean {

  function getId():String;

  function getType():String;

  function getName():String;

  function setName(name:String):void;

  function getItems():Array;

  function removeItems(items:Array, callback:Function = null):void;

  function removeDestroyedItems(callback:Function = null):void;

  function addItems(items:Array, callback:Function = null):void;

  function setItems(items:Array, callback:Function = null):void;

  /**
   * If the cap list is a content set, it is published and
   * shared with the given members (users and groups). If not, nothing happens.
   *
   * @param members the members to share the content set with
   * @param isPublic if true, the cap list is accessible to everyone
   * @param callback the callback function, called without parameters
   * /
  function share(members:Array, isPublic:Boolean = true, callback:Function = null):void;

  function unsubscribe(callback:Function = null):void;

  function isPublic():Boolean;

  function destroy(...params):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
