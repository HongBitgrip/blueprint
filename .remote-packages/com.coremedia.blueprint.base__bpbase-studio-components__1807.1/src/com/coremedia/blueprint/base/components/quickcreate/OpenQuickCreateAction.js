Ext.define("com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction", function(OpenQuickCreateAction) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.blueprint.base.components.quickcreate.*;
import com.coremedia.blueprint.base.components.quickcreate.processing.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 An action to open a window dialog.
 It provides several properties to control to which container the window should be rendered to.
 * /


/* Now the properties of the quick create dialog * /
public class OpenQuickCreateAction extends OpenQuickCreateActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function OpenQuickCreateAction$(config/*:OpenQuickCreateAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase,{});
    var defaults_$1/*:OpenQuickCreateAction*/ =AS3.cast(OpenQuickCreateAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$D9Ea(config_$1);
  }/*

    /**
     * The content type of the newly created content, optional if the content type name is set.
     * /
    [Bindable]
    public var contentTypeExpression:ValueExpression;

    /**
     * Contains the active content.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * The value expression contains default name that should be used for the dialog.
     * If undefined, the default new document name will be used.
     * /
    [Bindable]
    public var defaultNameExpression:ValueExpression;

    /**
     * Optional ValueExpression of the original link list,
     * needed when the original link list is not a plain content array.
     * When passed, the configs for bindTo, linkType and propertyName are not needed.
     * /
    [Bindable]
    public var sourceLinkListVE:ValueExpression;

    /** The content type of the content to create. * /
    [Bindable]
    public var contentType:String;


    /**
     Optional: if set to false the property editors will not be inherited from the super document types.
     Default is true, i.e. the property editors are inherited.
     * /
    [Bindable]
    public var inheritEditors:Boolean;


    /** The content property name of the list to bind the newly created content to. * /
    [Bindable]
    public var propertyName:String;


    /**
     The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
     but to override this or provide an initial value for link properties in Structs that are created by this
     property field, you may specify a custom link type.
     * /
    [Bindable]
    public var linkType:String;


    /**
     Optional model for which the dialog editors wil be created.
     If not specified a model will be created internally.
     * /
    [Bindable]
    public var model:com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData;


    /** If true the default initializers are skipped after content creation. Default is false. * /
    [Bindable]
    public var skipInitializers:Boolean;


    /** An optional callback that the Dialog will invoke when content creation was successfully completed.
   Signature: function(createdContent:Content, data:ProcessingData, callback:Function):void
     * /
    [Bindable]
    public var onSuccess:Function;


    /** Default properties to be used, allows to overwrite the name and folder properties (CSV format). * /
    [Bindable]
    public var defaultProperties:String;


    /** If true, the newly created content will be appended to the end of the given linklist.
   By default, this option is set to 'false' so that new content items will be inserted at the beginning.  * /
    [Bindable]
    public var appendResultAtEnd:Boolean;


    /** If true, the new content will be opened in a new tab. Default is true.
     * /
    [Bindable]
    public var openInTab:Boolean;


    /**
     Optional function for creating a custom model for each menu item. The method can be used to apply
     default for some quick create properties without displaying a component for it.
     Method signature: function(contentType:String, bindTo:ValueExpression)
     * /
    [Bindable]
    public var processingDataFactory:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenQuickCreateAction$,
      super$D9Ea: function() {
        com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentTypeExpression: null,
        bindTo: null,
        defaultNameExpression: null,
        sourceLinkListVE: null,
        contentType: null,
        inheritEditors: false,
        propertyName: null,
        linkType: null,
        model: null,
        skipInitializers: false,
        onSuccess: null,
        defaultProperties: null,
        appendResultAtEnd: false,
        openInTab: false,
        processingDataFactory: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
