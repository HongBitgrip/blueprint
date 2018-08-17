Ext.define("com.coremedia.collaboration.controlroom.rest.CapListImpl", function(CapListImpl) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;

[RestResource(uriTemplate="caplist/{id:[a-zA-Z0-9-]+}")]
public class CapListImpl extends RemoteBeanImpl implements CapList {

  private static const*/var CAPLIST_ID_PREFIX$static/*:String*/ = "coremedia:///cap/list/";/*

  public*/ function CapListImpl$(path/*:String*/, vars/*:Object*/) {
    var id/*:String*/ = vars[com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.ID];

    this.super$8g5B(path);

    this.setId(CAPLIST_ID_PREFIX$static + id);
  }/*

  override public*/ function getId()/*:String*/ {
    return this.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.ID);
  }/*

  public*/ function getType()/*:String*/ {
    return this.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.TYPE);
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.NAME);
  }/*

  public*/ function setName(name/*:String*/)/*:void*/ {
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/rename", "POST", true);
    rsm.request({newName: name});
  }/*

  public*/ function getItems()/*:Array*/ {
    return this.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.ITEMS);
  }/*

  public*/ function removeItems(items/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/remove", 'POST', true);
    rsm.request({items:items}, callback, callback);
  }/*

  public*/ function removeDestroyedItems(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/removeDestroyed", 'POST', true);
    rsm.request(null, callback, callback);
  }/*

  public*/ function addItems(items/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/add", 'POST', true);
    rsm.request({items:items}, callback, callback);
  }/*

  public*/ function setItems(items/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/set", 'POST', true);
    rsm.request({items:items}, callback, callback);
  }/*

  public*/ function share(members/*:Array*/, isPublic/*:Boolean = true*/, callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:isPublic=true;case 2:callback=null;}
    members = members || [];
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/share", 'POST', true);
    rsm.request({
      members : members,
      isPublic : isPublic
    }, callback, callback);
  }/*

  public*/ function unsubscribe(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/unsubscribe", 'POST', true);
    rsm.request(null, callback, callback);
  }/*

  public*/ function isPublic()/*:Boolean*/ {
    return this.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.IS_PUBLIC);
  }/*

  override public*/ function setId(id/*:String*/)/*:void*/ {
    this.setImmediateProperty(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.ID, id);
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath(), 'DELETE', true);
    var callback/*:Function*/ = params[0];
    rsm.request(null, callback, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.collaboration.controlroom.rest.CapList"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "caplist/{id:[a-zA-Z0-9-]+}"
        ]
      ]},
      constructor: CapListImpl$,
      super$8g5B: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getId: getId,
      getType: getType,
      getName: getName,
      setName: setName,
      getItems: getItems,
      removeItems: removeItems,
      removeDestroyedItems: removeDestroyedItems,
      addItems: addItems,
      setItems: setItems,
      share: share,
      unsubscribe: unsubscribe,
      isPublic: isPublic,
      setId: setId,
      destroy: destroy,
      requires: [
        "com.coremedia.collaboration.controlroom.rest.CapList",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.collaboration.controlroom.rest.CapListPropertyNames"]
    };
});
