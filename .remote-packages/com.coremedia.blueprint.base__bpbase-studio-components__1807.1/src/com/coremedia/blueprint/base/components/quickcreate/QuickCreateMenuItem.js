Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItem", function(QuickCreateMenuItem) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.blueprint.base.components.quickcreate.*;
import com.coremedia.blueprint.base.components.quickcreate.processing.*;
import net.jangaroo.ext.Exml;
public class QuickCreateMenuItem extends QuickCreateMenuItemBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.quickCreateMenuItem";

    public*/function QuickCreateMenuItem$(config/*:QuickCreateMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase,{});
    var defaults_$1/*:QuickCreateMenuItem*/ =AS3.cast(QuickCreateMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentType"));
    var bpb$components_OpenQuickCreateAction_84_5_$1/*: com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction,{});
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(AS3.getBindable(config,"contentType"))));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentTypeName(AS3.getBindable(config,"contentType"))));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"contentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentType")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"defaultProperties" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"defaultProperties")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"model" , AS3.getBindable(config,"model"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"inheritEditors" , AS3.getBindable(config,"inheritEditors"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"skipInitializers" , AS3.getBindable(config,"skipInitializers"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"openInTab" , AS3.getBindable(config,"openInTab"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"processingDataFactory" , AS3.getBindable(config,"processingDataFactory"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"onSuccess" , AS3.getBindable(config,"onSuccess"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"linkType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkType")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_84_5_$1,"sourceLinkListVE" , AS3.getBindable(config,"sourceLinkListVE"));
    config_$1.baseAction = new com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction(bpb$components_OpenQuickCreateAction_84_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1qKg(config_$1);
  }/*

    /**
     * Contains the active content.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Optional ValueExpression of the original link list,
     * needed when the original link list is not a plain content array.
     * When passed, the configs for bindTo, linkType and propertyName are not needed.
     * /
    [Bindable]
    public var sourceLinkListVE:ValueExpression;

    /** The content type to create. * /
    [Bindable]
    public var contentType:String;


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


    /** An optional callback that the Dialog will invoke when content creation was successfully completed.
   Signature: function(createdContent:Content, data:ProcessingData, callback:Function):void
     * /
    [Bindable]
    public var onSuccess:Function;


    /**
     Optional model for which the dialog editors wil be created.
     If not specified a model will be created internally.
     * /
    [Bindable]
    public var model:com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData;


    /** Default properties to be used, allows to overwrite the name and folder properties (CSV format). * /
    [Bindable]
    public var defaultProperties:String;


    /**
     Optional function for creating a custom model for each menu item. The method can be used to apply
     default for some quick create properties without displaying a component for it.
     Method signature: function(contentType:String, bindTo:ValueExpression)
     * /
    [Bindable]
    public var processingDataFactory:Function;


    /**
     Optional: if set to false the property editors will not be inherited from the super document types.
     Default is true, i.e. the property editors are inherited.
     * /
    [Bindable]
    public var inheritEditors:Boolean;


    /** If true the default initializers are skipped after content creation. Default is false. * /
    [Bindable]
    public var skipInitializers:Boolean;


    /** If true, the new content will be opened in a new tab. Default is true.
     * /
    [Bindable]
    public var openInTab:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.quickCreateMenuItem",
      constructor: QuickCreateMenuItem$,
      super$1qKg: function() {
        com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        sourceLinkListVE: null,
        contentType: null,
        propertyName: null,
        linkType: null,
        onSuccess: null,
        model: null,
        defaultProperties: null,
        processingDataFactory: null,
        inheritEditors: false,
        skipInitializers: false,
        openInTab: false
      },
      requires: [
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItemBase",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction"]
    };
});
