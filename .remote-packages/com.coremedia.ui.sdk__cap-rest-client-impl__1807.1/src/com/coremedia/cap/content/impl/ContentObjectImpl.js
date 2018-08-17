Ext.define("com.coremedia.cap.content.impl.ContentObjectImpl", function(ContentObjectImpl) {/* /**
 * Created by IntelliJ IDEA.
 * User: mbruegma
 * Date: 18.10.11
 * Time: 13:32
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.CapObjectImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.Version;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.impl.SubBean;

public class ContentObjectImpl extends CapObjectImpl implements ContentObject {
  public*/ function ContentObjectImpl$(uri/*:String*/) {
    this.super$m5VH(uri);
  }/*

  override protected*/ function isSubObject(value/*:**/, propertyPath/*:**/)/*:Boolean*/ {
    return propertyPath === "properties";
  }/*

  override protected*/ function createSubBean(propertyPathPrefix/*:String*/)/*:SubBean*/ {
    return new com.coremedia.cap.content.impl.ContentPropertiesImpl(this, propertyPathPrefix);
  }/*

  public*/ function getType()/*:ContentType*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.TYPE);
  }/*

  override public*/ function getType_()/*:CapType*/ {
    return this.getType();
  }/*

  /**
   * Return the ContentRepository this Content comes from.
   *
   * @return the ContentRepository this Content comes from
   *
   * @see ContentRepository
   * /
  public*/ function getRepository()/*:ContentRepository*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
  }/*

  protected*/ function getRepositoryInternal()/*:ContentRepositoryInternal*/ {
    return AS3.cast(com.coremedia.cap.content.impl.ContentRepositoryInternal,com.coremedia.cap.common.SESSION.getConnection().getContentRepository());
  }/*

  /**
   * Return a <code>ContentProperties</code> object representing the project-specific properties of this Content.
   * @return a <code>ContentProperties</code> object representing the project-specific properties of this Content.
   * @see ContentProperties
   * /
  public*/ function getProperties()/*:ContentProperties*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES);
  }/*

  public*/ function isContent()/*:Boolean*/ {
    return AS3.is( this,  com.coremedia.cap.content.Content);
  }/*

  public*/ function isVersion()/*:Boolean*/ {
    return AS3.is( this,  com.coremedia.cap.content.Version);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isDestroyed()/*:Boolean*/ {
    switch (this.getState()) {
      case com.coremedia.ui.data.BeanState.UNKNOWN:
        return undefined;
      case com.coremedia.ui.data.BeanState.NON_EXISTENT:
        return true;
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.CapObjectImpl",
      mixins: ["com.coremedia.cap.content.ContentObject"],
      constructor: ContentObjectImpl$,
      super$m5VH: function() {
        com.coremedia.cap.common.impl.CapObjectImpl.prototype.constructor.apply(this, arguments);
      },
      isSubObject: isSubObject,
      createSubBean: createSubBean,
      getType: getType,
      getType_: getType_,
      getRepository: getRepository,
      getRepositoryInternal: getRepositoryInternal,
      getProperties: getProperties,
      isContent: isContent,
      isVersion: isVersion,
      isDestroyed: isDestroyed,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.CapObjectImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentObject",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.Version",
        "com.coremedia.ui.data.BeanState"
      ],
      uses: [
        "com.coremedia.cap.content.impl.ContentPropertiesImpl",
        "com.coremedia.cap.content.impl.ContentRepositoryInternal"
      ]
    };
});
