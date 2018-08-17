Ext.define("com.coremedia.cms.editor.sdk.components.html5.Uploader", function(Uploader) {/*package com.coremedia.cms.editor.sdk.components.html5{
import com.coremedia.cms.editor.sdk.components.html5.*;
import net.jangaroo.ext.Exml;
public class Uploader extends UploaderBase{

    public*/function Uploader$(config/*:Uploader = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.html5.UploaderBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.UploaderBase,{});
    var defaults_$1/*:Uploader*/ =AS3.cast(Uploader,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Dhsm(config_$1);
  }/*

    /**
     Get the maximum file size in bytes.
     * /
    [Bindable]
    public var maxFileSize:int;


    [Bindable]
    public var url:String;


    [Bindable]
    public var method:String;


    [Bindable]
    public var timeout:int;


    [Bindable]
    public var headerParams:Object;


    [Bindable]
    public var params:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.html5.UploaderBase",
      constructor: Uploader$,
      super$Dhsm: function() {
        com.coremedia.cms.editor.sdk.components.html5.UploaderBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        maxFileSize: 0,
        url: null,
        method: null,
        timeout: 0,
        headerParams: null,
        params: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.html5.UploaderBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
