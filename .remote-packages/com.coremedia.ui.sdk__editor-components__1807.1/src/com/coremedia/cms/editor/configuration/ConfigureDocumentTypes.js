Ext.define("com.coremedia.cms.editor.configuration.ConfigureDocumentTypes", function(ConfigureDocumentTypes) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class ConfigureDocumentTypes extends ConfigureDocumentTypesBase{

    public*/function ConfigureDocumentTypes$(config/*:ConfigureDocumentTypes = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase,{});
    var defaults_$1/*:ConfigureDocumentTypes*/ =AS3.cast(ConfigureDocumentTypes,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$Fys(config_$1);
  }/*

    /**
     The name of the document type(s) (comma-separated list) that is being configured in the Studio.
     * /
    [Bindable]
    public var names:String;


    /**
     The name of the image BLOB property to be used for thumbnail previews of documents of the given document type(s),
     e.g. in the thumbnail view of the collection window and in image links.
     * /
    [Bindable]
    public var imageProperty:String;


    /**
     The name of the image BLOB property to be used when dropping documents of the given document type(s)
     as images in RichText.
     * /
    [Bindable]
    public var richTextImageBlobProperty:String;


    /*
    If true, the given document type names are registered as linkable content, allowed to be dropped into richtext.
     * /
    [Bindable]
    public var richTextLinkable:Boolean;


    /**
     Whether to exclude this document type from creation, that is, hide it from Studio users.
     * /
    [Bindable]
    public var exclude:Boolean;


    /**
     Whether to exclude this content type from the library's content type search filter
     * /
    [Bindable]
    public var excludeFromSearch:Boolean;


    /**
     Whether to hide this document types in the referrers list of Contents. For example the
     EditorPreferences always refer every open document and should not be seen in their referrers.
     * /
    [Bindable]
    public var hideInReferrers:Boolean;


    /**
     Whether to show a preview for this document type. Defaults to true.
     Set to false explicitly to ensure that no preview is shown.
     * /
    [Bindable]
    public var preview:Boolean;


    /**
     A list of PreviewUrlTransformer objects, most often &amp;lt;addParameterPreviewUrlTransformer&amp;gt;s
     that add parameters to preview URLs of documents of the given document type(s).
     * /
    [Bindable]
    public var previewUrlTransformers:Array;


    /**
     Dependency tracked function that calculates if the Preview should be loaded for the current selection.
     * /
    [Bindable]
    public var mayPreview:Function;


    /**
     Dependency tracked function that calculates if the NewContentAction should be disabled for the current selection.
     * /
    [Bindable]
    public var mayCreate:Function;


    /** Used for the 'mayCreate' function: if true, the mayCreate function will be evaluated for subtypes too. * /
    [Bindable]
    public var includeSubtypes:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase",
      metadata: {"": ["PublicApi"]},
      constructor: ConfigureDocumentTypes$,
      super$$Fys: function() {
        com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        names: null,
        imageProperty: null,
        richTextImageBlobProperty: null,
        richTextLinkable: false,
        exclude: false,
        excludeFromSearch: false,
        hideInReferrers: false,
        preview: false,
        previewUrlTransformers: null,
        mayPreview: null,
        mayCreate: null,
        includeSubtypes: false
      },
      requires: [
        "com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
