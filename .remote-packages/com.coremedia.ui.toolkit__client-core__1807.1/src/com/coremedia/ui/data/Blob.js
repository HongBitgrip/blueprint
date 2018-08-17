Ext.define("com.coremedia.ui.data.Blob", function(Blob) {/*package com.coremedia.ui.data {

/**
 * Represents a Blob
 *
 * /
[PublicApi]
public interface Blob {

  /**
   * The uri of the blob data.
   * 
   * @return the uri of the blob data
   * /
  function getUri():String;

  /**
   * The number of bytes this blob consumes.
   *
   * @return the size of the blob
   * /
  function getSize():Number;

  /**
   * The data of the blob or undefined if not loaded yet.
   * @return the data of the blob
   *
   * @see #loadData
   * /
  function getData():*;

  /**
   * The content type / mime type of the blob data
   * @return the content type
   * /
  function getContentType():String;

  /**
   * Whether the blob data is locally available or not.
   * @return true if the data is loaded, false if it is not loaded
   *
   * @see #getData
   * /
  function isLoaded():Boolean;

  /**
   * Loads the actual data of this Blob if not already loaded. If the data was already loaded, the callback is called immediately,
   * or otherwise it is called after the data has been loaded.
   *
   * @param callback the function to call when the blob data is locally available.
   *   Method signature: <code>function(blob:Blob)</code>
   * @see #isLoaded
   * /
  function loadData(callback:Function = null):void;

  /**
   * Return this blob's metadata (if any)
   * @return a meta data remote bean or null
   * /
  function getMetadata():RemoteBean;

}

}

============================================== Jangaroo part ==============================================*/
    return {};
});
