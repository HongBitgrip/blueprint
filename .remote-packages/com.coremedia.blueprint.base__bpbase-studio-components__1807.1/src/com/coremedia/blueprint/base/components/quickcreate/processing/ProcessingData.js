Ext.define("com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData", function(ProcessingData) {/*package com.coremedia.blueprint.base.components.quickcreate.processing {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.data.impl.BeanImpl;

/**
 * Data wrapper that contains all user input of the dialog.
 * /
public class ProcessingData extends BeanImpl {
  //mandatory dialog properties
  public static const FOLDER_PROPERTY:String = "folder";
  public static const NAME_PROPERTY:String = "name";

  //dialog properties
  public static const SKIP_INITIALIZERS:String = "skipInitializers";
  public static const ON_SUCCESS:String = "onSuccess";

  //only used for page grid
  public static const SITE_PROPERTY:String = "site";

  private var contentType:String;
  private var content:Content;

  //property is used to remember all documents that have been touched.
  private var additionalContent:Array =*/function additionalContent_(){this.additionalContent$9Yv7=( []);}/*;

  public*/ function ProcessingData$() {this.super$9Yv7();additionalContent_.call(this);
  }/*

  public*/ function getOnSuccessCall()/*:Function*/ {
    return this.get(ProcessingData.ON_SUCCESS);
  }/*

  public*/ function doSkipInitializers()/*:Boolean*/ {
    return this.get(ProcessingData.SKIP_INITIALIZERS);
  }/*

  public*/ function addAdditionalContent(c/*:Content*/)/*:void*/ {
    if(this.additionalContent$9Yv7.indexOf(c) === -1) {
      this.additionalContent$9Yv7.push(c);
    }
  }/*

  public*/ function getAdditionalContent()/*:Array*/ {
    return this.additionalContent$9Yv7;
  }/*

  public*/ function setContentType(contentType/*:String*/)/*:void*/ {
    this.contentType$9Yv7 = contentType;
  }/*

  /**
   * Returns the folder the content has been created into.
   * This may be a content or a function that returns the folder content.
   * If the return value is a function it is called in a FunctionValueExpression.
   * @return
   * /
  public*/ function getFolder()/*:**/ {
    return this.get(ProcessingData.FOLDER_PROPERTY);
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(ProcessingData.NAME_PROPERTY);
  }/*

  public*/ function setName(value/*:String*/)/*:void*/ {
    this.set(ProcessingData.NAME_PROPERTY, value);
  }/*

  public*/ function getContentType()/*:ContentType*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(this.contentType$9Yv7);
  }/*

  public*/ function setContent(c/*:Content*/)/*:void*/ {
    this.content$9Yv7 = c;
  }/*

  public*/ function getContent()/*:Content*/ {
    return this.content$9Yv7;
  }/*


  override public*/ function toString()/*:String*/ {
    var value/*:String*/ = 'Processing Data: ' + this.content$9Yv7 + ', skipInitializers:' + this.doSkipInitializers()
            + ', additionalContent:' + this.additionalContent$9Yv7.length;
    return value;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      contentType$9Yv7: null,
      content$9Yv7: null,
      constructor: ProcessingData$,
      super$9Yv7: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      getOnSuccessCall: getOnSuccessCall,
      doSkipInitializers: doSkipInitializers,
      addAdditionalContent: addAdditionalContent,
      getAdditionalContent: getAdditionalContent,
      setContentType: setContentType,
      getFolder: getFolder,
      getName: getName,
      setName: setName,
      getContentType: getContentType,
      setContent: setContent,
      getContent: getContent,
      toString: toString,
      statics: {
        FOLDER_PROPERTY: "folder",
        NAME_PROPERTY: "name",
        SKIP_INITIALIZERS: "skipInitializers",
        ON_SUCCESS: "onSuccess",
        SITE_PROPERTY: "site"
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.impl.BeanImpl"
      ]
    };
});
