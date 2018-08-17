Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ContentListChooserPropertyField", function(ContentListChooserPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import ext.*;
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.components.BeanListChooser;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;

    [Deprecated]
    [PublicApi]
/**

 A link property editor that allows to choose a linked document from a list of contents.
 Use the config option <code>propertyName</code> to select the content link property for this editor.

 The config option <code>contentList</code> is used to set the list of contents to choose from.
 Custom data fields can be set via <code>customDataFields</code>, a custom rendering template is configured via
 <code>customTemplate</code>.

 * /
public class ContentListChooserPropertyField extends Container{

    import com.coremedia.cms.editor.sdk.components.BeanListChooserUtil;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.contentListChooserPropertyField";

    /**
     * The itemId of the bean list chooser.
     * /
    public static const BEAN_LIST_CHOOSER_ITEM_ID:String = "beanListChooser";

    public*/function ContentListChooserPropertyField$(config/*:ContentListChooserPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:ContentListChooserPropertyField*/ =AS3.cast(ContentListChooserPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "form");
    var editor_SetPropertyLabelPlugin_122_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_122_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_122_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_122_5_$1];
    var container_126_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_126_5_$1,"layout" , "anchor");
    var editor_BeanListChooser_128_9_$1/*:com.coremedia.cms.editor.sdk.components.BeanListChooser*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.BeanListChooser,{});
    editor_BeanListChooser_128_9_$1.itemId =net.jangaroo.ext.Exml.asString( ContentListChooserPropertyField.BEAN_LIST_CHOOSER_ITEM_ID);
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"beanList" , AS3.getBindable(config,"contentList"));
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"height" , AS3.getBindable(config,"chooserHeight"));
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"bindTo" , AS3.getBindable(config,"bindTo").extendBy('properties'));
    editor_BeanListChooser_128_9_$1.disableStrictConsistency = config.disableStrictConsistency;
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"emptySelection" , AS3.getBindable(config,"emptySelection"));
    editor_BeanListChooser_128_9_$1.cls =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.BeanListChooserUtil.getDefaultBemBlockCssClass());
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"dataFields" , AS3.getBindable(config,"customDataFields") ? AS3.getBindable(config,"customDataFields") : com.coremedia.cms.editor.sdk.components.BeanListChooserUtil.getDefaultContentDataFields());
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"itemSelector" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"customItemSelector") ? AS3.getBindable(config,"customItemSelector") : com.coremedia.cms.editor.sdk.components.BeanListChooserUtil.getDefaultContentItemSelector()));
    AS3.setBindable(editor_BeanListChooser_128_9_$1,"template" , AS3.getBindable(config,"customTemplate") ? AS3.getBindable(config,"customTemplate") : com.coremedia.cms.editor.sdk.components.BeanListChooserUtil.getDefaultContentTemplate());
    var editor_PropertyFieldPlugin_140_13_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_140_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_141_13_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_141_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_141_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_141_13_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_BindDisablePlugin_144_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_144_13_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_144_13_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BeanListChooser_128_9_$1.plugins = [editor_PropertyFieldPlugin_140_13_$1, editor_ShowIssuesPlugin_141_13_$1, editor_BindDisablePlugin_144_13_$1];
    editor_BeanListChooser_128_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    container_126_5_$1.items = [editor_BeanListChooser_128_9_$1];
    config_$1.items = [container_126_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$N3ik(config_$1);
  }/*

    /**
     * Value expression evaluating to a list of contents to choose from.
     *
     * The expression is expected to evaluate to undefined until the list of contents is complete.
     * /
    [Bindable]
    public var contentList:ValueExpression;

    /**
     * An expression evaluating to the content bean being edited.
     *
     * This property editor assumes that the bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Optional parameter to specify a list entry that represents the empty selection. The item is expected
     * to be included in the given contentList.
     *
     * The properties of the empty selection bean have to match the ones referenced in a custom template / custom fields.
     * /
    [Bindable]
    public var emptySelection:Bean;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * Forwarded to BindPropertyPlugins inside this form.
     *
     * @see BindPropertyPlugin.disableStrictConsistency
     * /
    [Config]
    public var disableStrictConsistency:Boolean;

    /** The property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /**
     A template for customized list entry rendering. If no customTemplate is provided, a default one is used.
     See com.coremedia.cms.editor.sdk.components.BeanListChooserUtil for further details.

     @see com.coremedia.cms.editor.sdk.components.BeanListChooserUtil
     * /
    [Bindable]
    public var customTemplate:ext.XTemplate;


    /**
     The height of the selection chooser.
     * /
    [Bindable]
    public var chooserHeight:Number;


    /**
     Optional list of data fields. If no customDataFields are configured, a default set of fields for typical content values
     is used. See com.coremedia.cms.editor.sdk.components.BeanListChooserUtil for further details.

     Elements of the array are instances of datafield.

     @see ext.config.datafield
     @see com.coremedia.cms.editor.sdk.components.BeanListChooserUtil
     * /
    [Bindable]
    public var customDataFields:Array;


    /**
     Optional configuration of a simple CSS selector (e.g. div.some-class or span:first-child) that will be used to
     determine what nodes this component will be working with. The configured value has to match the structure
     of the configured template.

     If no customItemSelector is configured, a default selector matching the default template is used. See
     com.coremedia.cms.editor.sdk.components.BeanListChooserUtil for further details.

     @see com.coremedia.cms.editor.sdk.components.BeanListChooserUtil
     * /
    [Bindable]
    public var customItemSelector:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {
        "": [
          "Deprecated",
          "PublicApi"
        ],
        disableStrictConsistency: ["Config"]
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.contentListChooserPropertyField",
      constructor: ContentListChooserPropertyField$,
      super$N3ik: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      disableStrictConsistency: false,
      config: {
        contentList: null,
        bindTo: null,
        emptySelection: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        hideIssues: false,
        customTemplate: null,
        chooserHeight: NaN,
        customDataFields: null,
        customItemSelector: null
      },
      statics: {BEAN_LIST_CHOOSER_ITEM_ID: "beanListChooser"},
      requires: [
        "Ext.container.Container",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.BeanListChooser",
        "com.coremedia.cms.editor.sdk.components.BeanListChooserUtil",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
