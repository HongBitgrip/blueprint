Ext.define("com.coremedia.cms.editor.sdk.components.BeanListChooser", function(BeanListChooser) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import ext.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
[PublicApi]
/**
 A highly customizable component that allows to select an entry from a list of beans.

 The list of beans to choose from is configured via the <code>beanList</code> config property.

 Other configuration options provide support for custom rendering templates as well as additional
 field definitions for the underlying store.
 * /
public class BeanListChooser extends BeanListChooserBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.beanListChooser";

    /**
     * The itemId of the embedded dataview.
     * /
    public static const DATAVIEW_ITEM_ID:String = "dataView";

    public*/function BeanListChooser$(config/*:BeanListChooser = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.BeanListChooserBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.BeanListChooserBase,{});
    var defaults_$1/*:BeanListChooser*/ =AS3.cast(BeanListChooser,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.bodyBorder = false;
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME_100.getSkin());
    AS3.setBindable(config_$1,"layout" , "anchor");
    var ui_BindPropertyPlugin_86_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_86_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_86_5_$1.disableStrictConsistency = config.disableStrictConsistency;
    ui_BindPropertyPlugin_86_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_86_5_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_86_5_$1.componentProperty = "outerSelectedBeans";
    ui_BindPropertyPlugin_86_5_$1.componentEvent = "selectedBeansChanged";
    config_$1.plugins = [ui_BindPropertyPlugin_86_5_$1];
    var editor_BeanListChooserDataView_94_5_$1/*: com.coremedia.cms.editor.sdk.components.BeanListChooserDataView*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.BeanListChooserDataView,{});
    editor_BeanListChooserDataView_94_5_$1.itemId =net.jangaroo.ext.Exml.asString( BeanListChooser.DATAVIEW_ITEM_ID);
    AS3.setBindable(editor_BeanListChooserDataView_94_5_$1,"beanList" , AS3.getBindable(config,"beanList"));
    AS3.setBindable(editor_BeanListChooserDataView_94_5_$1,"selectedBeans" , this.getInnerSelectedBeansValueExpression());
    AS3.setBindable(editor_BeanListChooserDataView_94_5_$1,"dataFields" , this.addEmptySelectionDataField(AS3.getBindable(config,"dataFields"), AS3.getBindable(config,"emptySelection")));
    editor_BeanListChooserDataView_94_5_$1.itemSelector =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemSelector"));
    editor_BeanListChooserDataView_94_5_$1.tpl = AS3.getBindable(config,"template");
    config_$1.items = [editor_BeanListChooserDataView_94_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IqZl(config_$1);
  }/*

    /**
     * Value expression evaluating to a list of beans to choose from.
     *
     * The expression is expected to evaluate to undefined until the list of beans is complete.
     * /
    [Bindable]
    public var beanList:ValueExpression;

    /**
     * An expression evaluating to the bean being edited.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /** The property of the Bean to bind in this field. * /
    [Bindable]
    public var propertyName:String;


    /**
     A rendering template for list items. This configuration property is mandatory.

     Additional data fields might be required in the underlying store to fill a provided template.
     * /
    [Bindable]
    public var template:ext.XTemplate;


    /**
     A simple CSS selector (e.g. div.some-class or span:first-child) that will be used to determine what nodes this
     component will be working with. This configuration property is mandatory.
     * /
    [Bindable]
    public var itemSelector:String;


    /**
     List of data fields. This component always provides the fields 'mergedItemClass' and 'emptySelectionItemClass'.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var dataFields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.BeanListChooserBase",
      metadata: {
        "": ["PublicApi"],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.beanListChooser",
      constructor: BeanListChooser$,
      super$IqZl: function() {
        com.coremedia.cms.editor.sdk.components.BeanListChooserBase.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        beanList: null,
        bindTo: null,
        propertyName: null,
        template: null,
        itemSelector: null,
        dataFields: null
      },
      statics: {DATAVIEW_ITEM_ID: "dataView"},
      requires: [
        "com.coremedia.cms.editor.sdk.components.BeanListChooserBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.BeanListChooserDataView"]
    };
});
