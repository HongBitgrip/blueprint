Ext.define("com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin", function(BrowsePlugin) {/*package com.coremedia.cms.editor.sdk.components.html5{
import com.coremedia.cms.editor.sdk.components.html5.*;
import net.jangaroo.ext.Exml;
public class BrowsePlugin extends BrowsePluginBase{

    import ext.dom.Element;

    public*/function BrowsePlugin$(config/*:BrowsePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase,{});
    var defaults_$1/*:BrowsePlugin*/ =AS3.cast(BrowsePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eY2V(config_$1);
  }/*

    /**
     * Element used as drop target if enableFileDrop is enabled.
     * /
    [Bindable]
    public var dropEl:Element;

    /** Allow multiple files to be selected (HTML 5 only). * /
    [Bindable]
    public var multiple:Boolean;


    /**
     Whether dropping a file from the OS file manager into the Studio window for upload is enabled.
     Defaults to true.

     @see http://www.w3.org/TR/2008/WD-html5-20080610/editing.html
     * /
    [Bindable]
    public var enableFileDrop:Boolean;


    /** The CSS class used as drop selector. * /
    [Bindable]
    public var dropElSelector:String;


    /** Name to use for the hidden input file DOM element. Defaults to "file". * /
    [Bindable]
    public var inputFileName:String;


    /** Event handler that is invoked on browse button click. * /
    [Bindable]
    public var onBrowseButtonClick:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase",
      constructor: BrowsePlugin$,
      super$eY2V: function() {
        com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dropEl: null,
        multiple: false,
        enableFileDrop: false,
        dropElSelector: null,
        inputFileName: null,
        onBrowseButtonClick: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.html5.BrowsePluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
