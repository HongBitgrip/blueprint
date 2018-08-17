Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentTabPanel", function(DocumentTabPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.tab.TabBar;
import com.coremedia.cms.editor.sdk.desktop.TabChangePlugin;
import com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin;
[PublicApi]
/**
 A tab panel that is the basis for tabbed document forms.
 To implement a tabbed document form, inherit from this class and
 provide multiple document forms as items. Each document form should
 provide a tab title in the <code>title</code> attribute. Each document
 form will automatically receive important attributes as default values
 when nested in an instance of this class.

 It is a context provider with the context variable <code>FORCE_READ_ONLY_VARIABLE_NAME</code>

 @see com.coremedia.cms.editor.sdk.premular.DocumentForm
 * /
public class DocumentTabPanel extends DocumentTabPanelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentTabPanel";

    /**
     * The context property name for the force read only property.
     * The context value is a boolean.
     * /
    public static const FORCE_READ_ONLY_VARIABLE_NAME:String = "forceReadOnly";

    public*/function DocumentTabPanel$(config/*:DocumentTabPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase,{});
    var defaults_$1/*:DocumentTabPanel*/ =AS3.cast(DocumentTabPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemsLazyUntilEvent = "beforerender";
    var tabBar_63_7_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    AS3.setBindable(tabBar_63_7_$1,"hidden" , true);
    AS3.setBindable(config_$1,"tabBar" , tabBar_63_7_$1);
    var editor_TabChangePlugin_66_7_$1/*:com.coremedia.cms.editor.sdk.desktop.TabChangePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.TabChangePlugin,{});
    var editor_AriaMainRegionPlugin_67_7_$1/*:com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin,{});
    config_$1.plugins = [editor_TabChangePlugin_66_7_$1, editor_AriaMainRegionPlugin_67_7_$1];
    var fx_Object_70_7_$1/*:Object*/ =Object({});
    fx_Object_70_7_$1.bindTo = AS3.getBindable(config,"bindTo");
    fx_Object_70_7_$1.premularConfigurationVE = AS3.getBindable(config,"premularConfigurationVE");
    fx_Object_70_7_$1.forceReadOnlyValueExpression = AS3.getBindable(config,"forceReadOnlyValueExpression");
    config_$1["defaultType"] = fx_Object_70_7_$1['xtype'];
    delete fx_Object_70_7_$1['xtype'];
    delete fx_Object_70_7_$1['xclass'];
    config_$1.defaults = fx_Object_70_7_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rkVC(config_$1);
  }/*

    /**
     * a property path to the Content to find a form for
     * /
    [Bindable]
    public var bindTo:ValueExpression;

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
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentTabPanel",
      constructor: DocumentTabPanel$,
      super$rkVC: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyFieldRegistry: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationVE: null
      },
      statics: {FORCE_READ_ONLY_VARIABLE_NAME: "forceReadOnly"},
      requires: [
        "Ext.tab.Bar",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin",
        "com.coremedia.cms.editor.sdk.desktop.TabChangePlugin"
      ]
    };
});
