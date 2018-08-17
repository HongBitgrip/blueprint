Ext.define("com.coremedia.cap.content.impl.ContentTypeImpl", function(ContentTypeImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.CapTypeImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="content/type/{id:[A-Za-z0-9_]+}")]
public class ContentTypeImpl extends CapTypeImpl implements ContentType {

  public*/ function ContentTypeImpl$(uri/*:String*/, vars/*:Object*/) {
    this.super$oHhC(uri);
    this.setImmediateProperty("name", vars.id);
    this.setId("coremedia:///content/type/" + vars.id);
  }/*

  override public*/ function get(property/*:**/)/*:**/ {
    if (property === "instances") {
      var instancesBean/*:RemoteBean*/ = AS3.cast(com.coremedia.ui.data.RemoteBean,com.coremedia.cap.common.impl.CapTypeImpl.prototype.get.call(this,"instancesBean"));
      if (!instancesBean) {
        return undefined;
      }
      return instancesBean.get("items");
    } else {
      return com.coremedia.cap.common.impl.CapTypeImpl.prototype.get.call(this,property);
    }
  }/*

  override public*/ function getParent()/*:CapType*/ {
    return AS3.as( this.get('parent'),  com.coremedia.cap.content.ContentType);
  }/*

  override public*/ function isSubtypeOf(type/*:**/)/*:Boolean*/ {
    var otherType/*:CapType*/ = typeof type === 'string'
        ? com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(type)
        :AS3.as( type,  com.coremedia.cap.common.CapType);
    var currentType/*:CapType*/ = this;
    do {
      if (currentType === otherType) {
        return true;
      }
      currentType = currentType.getParent();
    } while (currentType);
    return false;
  }/*

  override public*/ function isAbstract()/*:Boolean*/ {
    return AS3.as( this.get("abstract"),  Boolean);
  }/*

  override public*/ function getDescriptors()/*:Array*/ {
    return AS3.as( this.get('descriptors'),  Array);
  }/*

  public*/ function create(base/*:Content*/, preferredName/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    this.createWithProperties(base, preferredName, {}, callback);
  }/*

  public*/ function createWithProperties(base/*:Content*/, preferredName/*:String*/, properties/*:Object*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=3)callback=null;
    var remoteServiceMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(AS3.cast(com.coremedia.ui.data.RemoteBean,com.coremedia.cap.common.SESSION.getConnection().getContentRepository()).getUriPath(), 'POST', true);
    if (!base.isFolder()) {
      base = base.getParent();
    }
    var contentType/*:ContentType*/ = this;
    remoteServiceMethod.request({
      contentType: this.getName(),
      name: preferredName,
      folder: base,
      properties: properties
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      if (response.success) {
        if (callback) {
          var content/*:Content*/ =AS3.as( response.getResponseJSON(),  com.coremedia.cap.content.Content);
          callback(new com.coremedia.cap.content.impl.ContentCreateResultImpl(content));
        }
      } else {
        var error/*:RemoteError*/ = response.getError();
        if (callback) {
          callback(new com.coremedia.cap.content.impl.ContentCreateResultImpl(null, error));
        }
      }
    });
  }/*

  public*/ function getInstances()/*:Array*/ {
    var instances/*:**/ = this.get('instances');
    return instances === undefined ? undefined :AS3.as( instances,  Array);
  }/*

  internal*/ function init()/*:void*/ {
    // set derived properties:
    this.setInternal('descriptors', this.computeDescriptors({}));
  }/*

  protected*/ function computeDescriptors(propertyDescriptorName2Index/*:Object*/)/*:Array*/ {
    var parent/*:ContentTypeImpl*/ = AS3.cast(ContentTypeImpl,this.getParent());
    var result/*:Array*/ = parent ? parent.computeDescriptors(propertyDescriptorName2Index) : [];
    var directDescriptors/*:Array*/ = this.getDirectDescriptors();
    directDescriptors.forEach(function(d/*:Object*/)/*:void*/ {
      var propertyName/*:String*/ = d.name;
      // if property redefined, keep original declaration order:
      if (!(propertyName in propertyDescriptorName2Index)) {
        // append new properties at the end:
        propertyDescriptorName2Index[propertyName] = result.length;
      }
      result[propertyDescriptorName2Index[propertyName]] = d;
    });
    return result;
  }/*

  /**
   * A content type does not change its state. Ignore the
   * invalidation. Call the callback, if given.
   *
   * @param callback the optional callback
   * /
  override public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    // Content types do not change (or at least we do not react to
    // changes within the Studio). Swallow all invalidations.
    if (callback) {
      callback(this);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.CapTypeImpl",
      mixins: ["com.coremedia.cap.content.ContentType"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/type/{id:[A-Za-z0-9_]+}"
        ]
      ]},
      constructor: ContentTypeImpl$,
      super$oHhC: function() {
        com.coremedia.cap.common.impl.CapTypeImpl.prototype.constructor.apply(this, arguments);
      },
      get: get,
      getParent: getParent,
      isSubtypeOf: isSubtypeOf,
      isAbstract: isAbstract,
      getDescriptors: getDescriptors,
      create: create,
      createWithProperties: createWithProperties,
      getInstances: getInstances,
      init: init,
      computeDescriptors: computeDescriptors,
      invalidate: invalidate,
      requires: [
        "com.coremedia.cap.common.CapType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.CapTypeImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cap.content.impl.ContentCreateResultImpl"]
    };
});
