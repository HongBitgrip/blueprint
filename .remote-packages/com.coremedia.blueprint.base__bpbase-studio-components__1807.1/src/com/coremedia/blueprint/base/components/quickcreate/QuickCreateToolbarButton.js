Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButton", function(QuickCreateToolbarButton) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.blueprint.base.components.quickcreate.*;
import com.coremedia.blueprint.base.components.quickcreate.processing.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;

    [ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreate')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class QuickCreateToolbarButton extends QuickCreateToolbarButtonBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.quickCreateToolbarButton";

    public*/function QuickCreateToolbarButton$(config/*:QuickCreateToolbarButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase,{});
    var defaults_$1/*:QuickCreateToolbarButton*/ =AS3.cast(QuickCreateToolbarButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( config.tooltip || this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'quick_create_tooltip')));
    AS3.setBindable(config_$1,"tooltip" , config.tooltip || this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'quick_create_tooltip'));
    var bpb$components_OpenQuickCreateAction_102_5_$1/*: com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction,{});
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'create_content')));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(AS3.getBindable(config,"contentType")||AS3.getBindable(config,"contentTypeExpression").getValue())));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"contentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentType")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"contentTypeExpression" , AS3.getBindable(config,"contentTypeExpression"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"skipInitializers" , AS3.getBindable(config,"skipInitializers"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"onSuccess" , AS3.getBindable(config,"onSuccess"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"model" , AS3.getBindable(config,"model"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"openInTab" , AS3.getBindable(config,"openInTab"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"processingDataFactory" , AS3.getBindable(config,"processingDataFactory"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"defaultNameExpression" , AS3.getBindable(config,"defaultNameExpression"));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"defaultProperties" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"defaultProperties")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(bpb$components_OpenQuickCreateAction_102_5_$1,"sourceLinkListVE" , AS3.getBindable(config,"sourceLinkListVE"));
    config_$1.baseAction = new com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction(bpb$components_OpenQuickCreateAction_102_5_$1);
    var editor_BindDisablePlugin_119_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_119_5_$1,"forceReadOnlyValueExpression" , this.forceReadOnly(config));
    editor_BindDisablePlugin_119_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    config_$1.plugins = [editor_BindDisablePlugin_119_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BHrr(config_$1);
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
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

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

    /** The content type to create, optional if the content type value expression is set. * /
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


    /** If true the default initializers are skipped after content creation. Default is false. * /
    [Bindable]
    public var skipInitializers:Boolean;


    /** If true the default initializers are skipped after content creation. Default is false. * /
    [Bindable]
    public var openInTab:Boolean;


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
    public var processingDataFactory:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.quickCreateToolbarButton",
      constructor: QuickCreateToolbarButton$,
      super$BHrr: function() {
        com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentTypeExpression: null,
        bindTo: null,
        forceReadOnlyValueExpression: null,
        defaultNameExpression: null,
        sourceLinkListVE: null,
        contentType: null,
        propertyName: null,
        linkType: null,
        skipInitializers: false,
        openInTab: false,
        onSuccess: null,
        model: null,
        defaultProperties: null,
        processingDataFactory: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateToolbarButtonBase",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateAction"]
    };
});
