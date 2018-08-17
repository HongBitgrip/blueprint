Ext.define("com.coremedia.cms.editor.sdk.util.ThumbnailResolverImpl", function(ThumbnailResolverImpl) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.BlobImpl;

/**
 * Recursive lookup of image blobs.
 * /
public class ThumbnailResolverImpl implements ThumbnailResolver {
  private var thumbnailMapping:Bean =*/function thumbnailMapping_(){this.thumbnailMapping$A8n0=( com.coremedia.ui.data.beanFactory.createLocalBean());}/*;

  public*/ function addMapping(contentTypeName/*:String, ...properties*/)/*:void*/ {var properties=Array.prototype.slice.call(arguments,1);
    this.thumbnailMapping$A8n0.set(contentTypeName, properties);
  }/*

  /**
   * Return null as default since this instance is applicable for all content.
   * /
  public*/ function getContentType()/*:String*/ {
    return null;
  }/*

  /**
   * Returns the ThumbnailBlob object that contains all information about the thumbnail rendering.
   * Executes the recursive search for a blob property until a match is found or returns null.
   *
   * @param model the model to find the thumbnail for
   * @param operations the image operation string that should be applied on the image
   * @return undefined if the required content is not loaded yet, null if there is no thumbnail available or the Thumbnail instance.
   * /
  public*/ function getThumbnail(model/*:Object*/, operations/*:String = null*/)/*:Object*/ {if(arguments.length<=1)operations=null;
    var thumbnail/*:Thumbnail*/ = this.getThumbnailForContent(AS3.as(model,  com.coremedia.cap.content.Content), []);
    if(thumbnail === undefined) {
      return undefined;
    }

    if(thumbnail !== null) {
      var blob/*:Blob*/ = thumbnail.getBlob();
      if(blob === undefined) {
        blob.loadData();
        return undefined;
      }

      thumbnail.setOperations(operations);
    }

    return thumbnail;
  }/*

  /**
   * Recursive search of the thumbnail blob that should be used as preview image for the given content.
   * @param content the content to retrieve the thumbnail for
   * @param thumbnailPath the thumbnail path resolved so far
   * @return the image blob or null if no preview is provided.
   * /
  protected*/ function getThumbnailForContent(content/*:Content*/, thumbnailPath/*:Array*/)/*:Thumbnail*/ {
    var contentType/*:CapType*/ = content.getType();
    if(contentType === undefined) {
      content.load();
      return undefined;
    }

    var mapping/*:Object*/ = this.getThumbnailMappingFor$A8n0(contentType);
    if(mapping) {
      var thumbData/*:Thumbnail*/ = getThumbnailFor$static(content, mapping);
      //start the next recursion using the current blob
      if(thumbData) {
        if(!thumbData.getBlob()) {
          thumbnailPath.push(thumbData);
          return this.getThumbnailForContent(thumbData.getContent(), thumbnailPath);
        }

        //push thumbnail itself as child of the path
        thumbnailPath.push(thumbData);
        //store the path that has been resolved
        thumbData.setThumbnailPath(thumbnailPath);
      }

      return thumbData;
    }
    return null;
  }/*

  /**
   * Returns the assigned thumbnail content or the mapped blob for the given content
   * @param c the content to retrieve the thumbnail for.
   * @param mapping the property mapping to find the image blob.
   * @return content or the image blob
   * /
  private static*/ function getThumbnailFor$static(c/*:Content*/, mapping/*:Object*/)/*:Thumbnail*/ {
    if(AS3.as(mapping,  Array)) {
      var propertyNames/*:Array*/ =AS3.as( mapping,  Array);
      for/* each*/(var $1=0;$1</* in*/ propertyNames.length;++$1) {var name/*:String*/ =propertyNames[$1];
        var value/*:Thumbnail*/ = getPropertyValue$static(c, name);
        if(value === undefined) {
          return undefined;
        }

        if(value) {
          return value;
        }
      }
    }
    else if(AS3.as(mapping,  String)) {
      return getPropertyValue$static(c,AS3.as( mapping,  String));
    }
    return null;
  }/*

  /**
   * Ensures that only a single value of a content property is returned, no matter what kind of type
   * @param content the content to read the property from.
   * @param propertyName the name of the property to read.
   * @return an object that contains the value and the propertyName of the content
   * /
  private static*/ function getPropertyValue$static(content/*:Content*/, propertyName/*:String*/)/*:Thumbnail*/ {
    var value/*:Object*/ = content.getProperties().get(propertyName);
    if(!value) {
      return null;
    }

    var result/*:Thumbnail*/ = new com.coremedia.cms.editor.sdk.util.Thumbnail();
    result.setPropertyName(propertyName);
    result.setOwner(content);

    var propertyValue/*:Object*/ = null;
    if(AS3.as(value,  Array)) {
      if((AS3.as(value,  Array)).length === 0) {
        return null;
      }

      propertyValue = value[0];
    }
    else {
      propertyValue = value;
    }

    if(AS3.as(propertyValue,  com.coremedia.cap.content.Content)) {
      if(!content.isLoaded()) {
        content.load();
        return undefined;
      }

      //overwrite the content for the next recursion
      result.setContent(AS3.as(propertyValue,  com.coremedia.cap.content.Content));
    }
    else if(AS3.as(propertyValue,  com.coremedia.ui.data.Blob)) {
      var blob/*:BlobImpl*/ =AS3.as( propertyValue,  com.coremedia.ui.data.impl.BlobImpl);
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(blob, "data");
      var mimeType/*:String*/ = blob.getContentType();
      //allow only images
      if(mimeType.indexOf("image/") === -1) {
        return null;
      }
      result.setBlob(blob);
    }
    else {
      AS3.trace('[ERROR]', "Unsupported thumbnail property '" + propertyName + " of document '" + content.getPath()+ "'/" + content.getId() + ", must be a blob or content.");
    }

    return result;
  }/*

  /**
   * Recursive search for the thumbnail mapping: if no mapping is found
   * for the given content type, the parent is used and the search continues...
   * @param contentType the content type to find the mapping for.
   * @return the mapping properties or the name of the blob property.
   * /
  private*/ function getThumbnailMappingFor(contentType/*:CapType*/)/*:Object*/ {
    var mapping/*:Array*/ = this.thumbnailMapping$A8n0.get(contentType.getName());
    if(mapping && mapping.length === 1) {
      return mapping[0];
    }

    while(!mapping && contentType) {
      contentType = contentType.getParent();
      if(contentType) {
        return this.getThumbnailMappingFor$A8n0(contentType);
      }
    }
    return null;
  }/*
}*/function ThumbnailResolverImpl$() {thumbnailMapping_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.util.ThumbnailResolver"],
      addMapping: addMapping,
      getContentType: getContentType,
      getThumbnail: getThumbnail,
      getThumbnailForContent: getThumbnailForContent,
      getThumbnailMappingFor$A8n0: getThumbnailMappingFor,
      constructor: ThumbnailResolverImpl$,
      requires: [
        "AS3.trace",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.util.ThumbnailResolver",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.BlobImpl"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.Thumbnail"]
    };
});
