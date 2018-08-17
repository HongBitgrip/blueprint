Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewURI", function(PreviewURI) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;
import ext.ObjectUtil;
import ext.StringUtil;

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

/**
 * Instances of this class combine a preview URI with parameters
 * and the source object to be previewed. It is used as parameter
 * passed to preview URL transformers. Preview URL transformers
 * may alter the <code>#parameters</code> which are finally appended
 * as query parameters to the preview URI. Parameters may be arrays.
 *
 * @see com.coremedia.cms.editor.sdk.IEditorContext#registerPreviewUrlTransformer()
 * /
[PublicApi]
public class PreviewURI {

  private var _uri:URI; // non_null
  private var _source:Object; // non_null
  private var _parameters:Object; // non_null
  private var _transformers:Array; // non_null
  private var _callback:Function; // non_null

  public*/ function PreviewURI$(uri/*:String*/, source/*:Object*/, transformers/*:Array*//*<Function>*/, callback/*:Function*/, parameters/*:Object = null*/) {if(arguments.length<=4)parameters=null;
    AS3.assert(uri && "Preview URI must be set", "PreviewURI.as", 33, 5);
    this._uri$aqE4 = net.jangaroo.net.URIUtils.parse(uri);
    AS3.assert(source && "Preview source must be set", "PreviewURI.as", 35, 5);
    this._source$aqE4 = source;
    AS3.assert(transformers && "Transformers must be set", "PreviewURI.as", 37, 5);
    this._transformers$aqE4 = transformers;
    AS3.assert(callback && "Callback must be set", "PreviewURI.as", 39, 5);
    this._callback$aqE4 = callback;
    this._parameters$aqE4 = parameters || {};
   Ext.apply(this._parameters$aqE4, Ext.Object.fromQueryString(this._uri$aqE4.query || ""));
   this._uri$aqE4['query'] = null;
  }/*

  /**
   * The preview base URI
   * /
  public*/ function getUri()/*:URI*/ {
    return this._uri$aqE4;
  }/*

  /**
   * The model to be previewed.
   * /
  public*/ function getSource()/*:Object*/ {
    return this._source$aqE4;
  }/*

  /**
   * The parameters modeling the query parameters to be appended to the preview URI
   *
   * @see #toString
   * /
  public*/ function getParameters()/*:Object*/ {
    return this._parameters$aqE4;
  }/*

  /**
   * Set the given parameter and return the old value (if any)
   * @param name the parameter name
   * @param value the new value to be set (null or undefined removes the named parameter)
   * @return the old value (may be undefined)
   * /
  public*/ function setParameter(name/*:String*/, value/*:**/)/*:**/{
    var old/*:**/ = this._parameters$aqE4[name];
    this._parameters$aqE4[name] = value;
    return old;
  }/*

  /**
   * Append the given value to the named (list-type) parameter.
   * @param name the parameter name
   * @param value the value to be added
   * /
  public*/ function appendParameter(name/*:String*/,value/*:**/)/*:void*/ {
    var arr/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(this._parameters$aqE4[name]);
    arr.push(value);
    this._parameters$aqE4[name] = arr;
  }/*

  /**
   * append all parameters to the uri
   * /
  internal*/ function toString()/*:String*/ {
    if(AS3.is(this._parameters$aqE4,  com.coremedia.ui.data.Bean)){
      this._parameters$aqE4 = AS3.cast(com.coremedia.ui.data.Bean,this._parameters$aqE4).toObject();
    }
    com.coremedia.ui.util.ObjectUtils.removeUndefinedOrNullProperties(this._parameters$aqE4);
    com.coremedia.ui.logging.Logger.debug(PreviewURI+": appending query parameters '"+this._parameters$aqE4.toString()+"' to preview URI "+this._uri$aqE4.toString());
    return Ext.String.urlAppend(this._uri$aqE4.toString(), Ext.Object.toQueryString(this._parameters$aqE4));
  }/*

  internal*/ function transform()/*:void*/ {
    var transformer/*:Function*/ = this._transformers$aqE4.shift();
    if(transformer){
      com.coremedia.ui.logging.Logger.debug(PreviewURI+" invoking transformer "+this._transformers$aqE4.length);
      transformer(this,AS3.bind(this,"transform"));
    } else {/*
      const*/var result/*:String*/ = this.toString();
      com.coremedia.ui.logging.Logger.debug(PreviewURI+" invoking callback with uri "+result);
      this._callback$aqE4(result);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      _uri$aqE4: null,
      _source$aqE4: null,
      _parameters$aqE4: null,
      _transformers$aqE4: null,
      _callback$aqE4: null,
      constructor: PreviewURI$,
      getUri: getUri,
      getSource: getSource,
      getParameters: getParameters,
      setParameter: setParameter,
      appendParameter: appendParameter,
      toString: toString,
      transform: transform,
      requires: [
        "Ext",
        "Ext.Object",
        "Ext.String",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ObjectUtils",
        "net.jangaroo.net.URIUtils"
      ]
    };
});
