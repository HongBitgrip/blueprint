Ext.define("com.coremedia.cms.editor.sdk.util.Thumbnail", function(Thumbnail) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.Blob;

/**
 * Simple Pojo for storing the information of a blob to be rendered by the Studio or an external system.
 * /
public class Thumbnail {
  private var owner:Content;
  private var content:Content;
  private var blob:Blob;
  private var propertyName:String;
  private var operations:String;
  private var thumbnailPath:Array =*/function thumbnailPath_(){this.thumbnailPath$1m$Q=( []);}/*;

  public*/ function setOwner(owner/*:Content*/)/*:void*/ {
    this.owner$1m$Q = owner;
  }/*

  public*/ function getOwner()/*:Content*/ {
    return this.owner$1m$Q;
  }/*

  public*/ function setContent(content/*:Content*/)/*:void*/ {
    this.content$1m$Q = content;
  }/*

  public*/ function setBlob(blob/*:Blob*/)/*:void*/ {
    this.blob$1m$Q = blob;
  }/*

  public*/ function setPropertyName(propertyName/*:String*/)/*:void*/ {
    this.propertyName$1m$Q = propertyName;
  }/*

  public*/ function getContent()/*:Content*/ {
    return this.content$1m$Q;
  }/*

  public*/ function getBlob()/*:Blob*/ {
    return this.blob$1m$Q;
  }/*

  public*/ function getPropertyName()/*:String*/ {
    return this.propertyName$1m$Q;
  }/*

  public*/ function setOperations(operations/*:String*/)/*:void*/ {
    this.operations$1m$Q = operations;
  }/*

  public*/ function getOperations()/*:String*/ {
    return this.operations$1m$Q;
  }/*

  public*/ function setThumbnailPath(path/*:Array*/)/*:void*/ {
    this.thumbnailPath$1m$Q = path;
  }/*

  public*/ function getThumbnailPath()/*:Array*/ {
    return this.thumbnailPath$1m$Q;
  }/*
}*/function Thumbnail$() {thumbnailPath_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      owner$1m$Q: null,
      content$1m$Q: null,
      blob$1m$Q: null,
      propertyName$1m$Q: null,
      operations$1m$Q: null,
      setOwner: setOwner,
      getOwner: getOwner,
      setContent: setContent,
      setBlob: setBlob,
      setPropertyName: setPropertyName,
      getContent: getContent,
      getBlob: getBlob,
      getPropertyName: getPropertyName,
      setOperations: setOperations,
      getOperations: getOperations,
      setThumbnailPath: setThumbnailPath,
      getThumbnailPath: getThumbnailPath,
      constructor: Thumbnail$
    };
});
