Ext.define("com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm", function(ContentQueryForm) {/*package com.coremedia.blueprint.base.queryeditor.components{
import com.coremedia.blueprint.base.queryeditor.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]

public class ContentQueryForm extends ContentQueryFormBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.contentQueryDocumentForm";

    public*/function ContentQueryForm$(config/*:ContentQueryForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase,{});
    var defaults_$1/*:ContentQueryForm*/ =AS3.cast(ContentQueryForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyFieldPlugin_40_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_40_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"queryPropertyName")));
    config_$1.plugins = [editor_PropertyFieldPlugin_40_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var local_DocumentTypesForm_44_5_$1/*: com.coremedia.blueprint.base.queryeditor.components.DocumentTypesForm*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.DocumentTypesForm,{});
    local_DocumentTypesForm_44_5_$1.itemId = "documenttypesForm";
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_selection_of_document_types'));
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"documentTypes" , com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.getAllDocumentTypes(AS3.getBindable(config,"conditions")));
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"documentTypesPropertyName")));
    AS3.setBindable(local_DocumentTypesForm_44_5_$1,"documentTypesFilterHeight" , AS3.getBindable(config,"documentTypesFilterHeight"));
    var local_QueryConditionsForm_53_5_$1/*: com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm,{});
    local_QueryConditionsForm_53_5_$1.itemId = "queryForm";
    AS3.setBindable(local_QueryConditionsForm_53_5_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_query_title'));
    AS3.setBindable(local_QueryConditionsForm_53_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    local_QueryConditionsForm_53_5_$1.conditions = AS3.getBindable(config,"conditions");
    AS3.setBindable(local_QueryConditionsForm_53_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    var local_SortingForm_59_5_$1/*: com.coremedia.blueprint.base.queryeditor.components.SortingForm*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.SortingForm,{});
    local_SortingForm_59_5_$1.itemId = "sortingForm";
    AS3.setBindable(local_SortingForm_59_5_$1,"title" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_sorting_search_query'));
    AS3.setBindable(local_SortingForm_59_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(local_SortingForm_59_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(local_SortingForm_59_5_$1,"queryVE" , this.getQuery(config));
    AS3.setBindable(local_SortingForm_59_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"sortingPropertyName")));
    config_$1.items = [local_DocumentTypesForm_44_5_$1, local_QueryConditionsForm_53_5_$1, local_SortingForm_59_5_$1];
    var layout_Anchor_67_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_67_5_$1.anchor = "100%";
    AS3.setBindable(config_$1,"layout" , layout_Anchor_67_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SI_6(config_$1);
  }/*

    /** A default height in pixels for the document types filter container. * /
    [Bindable]
    public var documentTypesFilterHeight:Number;


    /** Name of the property containing the struct that defines the query. * /
    [Bindable]
    public var queryPropertyName:String;


    /**
     Name of the filter query subproperty containing the information about document types included in the query.
     * /
    [Bindable]
    public var documentTypesPropertyName:String;


    /**
     Name of the query property containing the information about the query results sorting.
     * /
    [Bindable]
    public var sortingPropertyName:String;


    /** Array of condition editor configuration objects for all applicable condition editors. * /
    [Bindable]
    public var conditions:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.contentQueryDocumentForm",
      constructor: ContentQueryForm$,
      super$SI_6: function() {
        com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        documentTypesFilterHeight: NaN,
        queryPropertyName: null,
        documentTypesPropertyName: null,
        sortingPropertyName: null,
        conditions: null
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.blueprint.base.queryeditor.components.DocumentTypesForm",
        "com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm",
        "com.coremedia.blueprint.base.queryeditor.components.SortingForm"
      ]
    };
});
