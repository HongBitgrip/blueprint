Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ContentTypeStringPropertyField", function(ContentTypeStringPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
[PublicApi]
/**
 A combobox field that binds to a string property being edited inside
 of a document form and offers a list of content types to be selected from the combobox.
 Specify the propertyName property for selecting the string property.
 * /
public class ContentTypeStringPropertyField extends ContentTypeSelector{

    import com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase;
    import com.coremedia.ui.data.ValueExpression;


    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.contentTypeStringPropertyField";

    public*/function ContentTypeStringPropertyField$(config/*:ContentTypeStringPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector,{});
    var defaults_$1/*:ContentTypeStringPropertyField*/ =AS3.cast(ContentTypeStringPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    config_$1.valueField = "name";
    AS3.setBindable(config_$1,"displayField" , "label");
    AS3.setBindable(config_$1,"contentTypeValueExpression" , AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName")));
    AS3.setBindable(config_$1,"entries" , com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase.getContentTypeEntries(AS3.getBindable(config,"linkType")));
    config_$1.anchor = "";
    var editor_SetPropertyLabelPlugin_55_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_55_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_55_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var editor_SetPropertyEmptyTextPlugin_57_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_57_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_57_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindDisablePlugin_59_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_59_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_59_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var editor_ShowIssuesPlugin_61_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_61_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_61_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_61_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_PropertyFieldPlugin_64_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_64_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_55_5_$1, editor_SetPropertyEmptyTextPlugin_57_5_$1, editor_BindDisablePlugin_59_5_$1, editor_ShowIssuesPlugin_61_5_$1, editor_PropertyFieldPlugin_64_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CBPq(config_$1);
  }/*

    /**
     * An expression evaluating to the bean being edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:com.coremedia.ui.data.ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:com.coremedia.ui.data.ValueExpression;

    /** The property of the Bean to bind in this field. * /
    [Bindable]
    public var propertyName:String;



    /** You may specify a custom link type. * /
    [Bindable]
    public var linkType:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.contentTypeStringPropertyField",
      constructor: ContentTypeStringPropertyField$,
      super$CBPq: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        linkType: null,
        hideIssues: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
