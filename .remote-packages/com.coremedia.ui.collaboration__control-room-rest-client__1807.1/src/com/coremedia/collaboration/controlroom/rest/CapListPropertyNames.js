Ext.define("com.coremedia.collaboration.controlroom.rest.CapListPropertyNames", function(CapListPropertyNames) {/*package com.coremedia.collaboration.controlroom.rest {

/**
 * CapListPropertyNames is a container for static identifiers of CapList meta property names.
 * Use these if you want to attach listeners to CapList properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the CapList interface.
 *
 * @see CapList
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
public class CapListPropertyNames {


  /**
   * @see CapList#getId()
   * /
  public static const ID:String = "id";

  /**
   * @eventType type
   * @see CapList#getType()
   * /
  public static const TYPE:String = 'type';

  /**
   * @eventType name
   * @see CapList#getName()
   * /
  public static const NAME:String = 'name';

  /**
   * @eventType items
   * @see CapList#getItems()
   * /
  public static const ITEMS:String = 'items';

  /**
   * @eventType public
   * @see CapList#isPublic()
   * /
  public static const IS_PUBLIC:String = 'public';


}*/function CapListPropertyNames$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CapListPropertyNames$,
      statics: {
        ID: "id",
        TYPE: 'type',
        NAME: 'name',
        ITEMS: 'items',
        IS_PUBLIC: 'public'
      }
    };
});
