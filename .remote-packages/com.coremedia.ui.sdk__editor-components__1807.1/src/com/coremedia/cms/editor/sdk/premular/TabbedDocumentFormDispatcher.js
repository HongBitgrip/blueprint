Ext.define("com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher", function(TabbedDocumentFormDispatcher) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.ui.components.SwitchingContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
import com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher;
import com.coremedia.cms.editor.sdk.premular.MetaDataPanel;
import ext.form.Label;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 The TabbedDocumentFormDispatcher chooses based on the content type which DocumentTabPanel is appropriate for editing
 the content.
 * /
public class TabbedDocumentFormDispatcher extends SwitchingContainer{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.tabbedDocumentFormDispatcher";

    public*/function TabbedDocumentFormDispatcher$(config/*:TabbedDocumentFormDispatcher = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    var defaults_$1/*:TabbedDocumentFormDispatcher*/ =AS3.cast(TabbedDocumentFormDispatcher,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"activeItemValueExpression" , AS3.getBindable(config,"bindTo").extendBy('type.name'));
    var fx_Object_60_7_$1/*:Object*/ =Object({});
    fx_Object_60_7_$1.bindTo = AS3.getBindable(config,"bindTo");
    fx_Object_60_7_$1.propertyFieldRegistry = AS3.getBindable(config,"propertyFieldRegistry");
    fx_Object_60_7_$1.focusForwarder = AS3.getBindable(config,"focusForwarder");
    fx_Object_60_7_$1.premularConfigurationVE = AS3.getBindable(config,"premularConfigurationVE");
    fx_Object_60_7_$1.forceReadOnlyValueExpression = AS3.getBindable(config,"forceReadOnlyValueExpression");
    config_$1["defaultType"] = fx_Object_60_7_$1['xtype'];
    delete fx_Object_60_7_$1['xtype'];
    delete fx_Object_60_7_$1['xclass'];
    config_$1.defaults = fx_Object_60_7_$1;
    var editor_DocumentTabPanel_68_7_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentTabPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentTabPanel,{});
    AS3.setBindable(editor_DocumentTabPanel_68_7_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_DocumentTabPanel_68_7_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    AS3.setBindable(editor_DocumentTabPanel_68_7_$1,"focusForwarder" , AS3.getBindable(config,"focusForwarder"));
    AS3.setBindable(editor_DocumentTabPanel_68_7_$1,"premularConfigurationVE" , AS3.getBindable(config,"premularConfigurationVE"));
    AS3.setBindable(editor_DocumentTabPanel_68_7_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_DocumentFormDispatcher_74_11_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher,{});
    editor_DocumentFormDispatcher_74_11_$1["title"] = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentForm_title');
    AS3.setBindable(editor_DocumentFormDispatcher_74_11_$1,"singleType" , true);
    var editor_MetaDataPanel_77_9_$1/*:com.coremedia.cms.editor.sdk.premular.MetaDataPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.MetaDataPanel,{});
    editor_MetaDataPanel_77_9_$1["title"] = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_title');
    editor_DocumentTabPanel_68_7_$1.items = [editor_DocumentFormDispatcher_74_11_$1, editor_MetaDataPanel_77_9_$1];
    config_$1.itemTemplate = editor_DocumentTabPanel_68_7_$1;
    var label_84_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_84_5_$1,"text" , "Error: No form exists for this type of document.");
    config_$1.lazyItems = [label_84_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PT_K(config_$1);
  }/*

    /**
     * a property path to the Content to find a form for
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An object that controls the flow of focus, scroll and collapse events.
     * /
    [Bindable]
    public var focusForwarder:FocusForwarder;

    /**
     * the property field registry for locating fields
     * /
    [Bindable]
    public var propertyFieldRegistry:IPropertyFieldRegistry;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The premular configuration VE that holds all prefetched data.
     * /
    [Bindable]
    public var premularConfigurationVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.tabbedDocumentFormDispatcher",
      constructor: TabbedDocumentFormDispatcher$,
      super$PT_K: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        focusForwarder: null,
        propertyFieldRegistry: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationVE: null
      },
      requires: [
        "Ext.form.Label",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.SwitchingContainer",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.MetaDataPanel"
      ]
    };
});
