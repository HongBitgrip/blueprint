Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher", function(DocumentFormDispatcher) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.form.Label;
[PublicApi]
/**
 The DocumentFormDispatcher chooses based on the config parameter bindTo which DocumentForm is appropriate for editing
 the content.
 * /
public class DocumentFormDispatcher extends DocumentFormDispatcherBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentFormDispatcher";

    public*/function DocumentFormDispatcher$(config/*:DocumentFormDispatcher = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase,{});
    var defaults_$1/*:DocumentFormDispatcher*/ =AS3.cast(DocumentFormDispatcher,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyField_50_5_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_50_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyField_50_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    config_$1["defaultType"] = editor_PropertyField_50_5_$1['xtype'];
    delete editor_PropertyField_50_5_$1['xtype'];
    delete editor_PropertyField_50_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_50_5_$1;
    var editor_GenericDocumentForm_55_5_$1/*: com.coremedia.cms.editor.sdk.premular.GenericDocumentForm*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.GenericDocumentForm,{});
    AS3.setBindable(editor_GenericDocumentForm_55_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_GenericDocumentForm_55_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    config_$1.itemTemplate = editor_GenericDocumentForm_55_5_$1;
    var label_60_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_60_5_$1,"text" , "Error: No form exists for this type of document.");
    var editor_QueryForm_61_5_$1/*: com.coremedia.cms.editor.sdk.premular.QueryForm*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.QueryForm,{});
    editor_QueryForm_61_5_$1.itemId = "Query";
    config_$1.lazyItems = [label_60_5_$1, editor_QueryForm_61_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gNqe(config_$1);
  }/*

    /**
     * a property path to the Content to find a form for
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The premular configuration VE that holds all prefetched data.
     * /
    [Bindable]
    public var premularConfigurationVE:ValueExpression;

    /**  Signals whether the document form dispatcher can only handle one single type of documents. This
   makes it effectively a single item container. (This parameter mainly exists for the purpose when an
   outer tabbed document form dispatcher already takes care of the dispatching functionality).
     * /
    [Bindable]
    public var singleType:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentFormDispatcher",
      constructor: DocumentFormDispatcher$,
      super$gNqe: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationVE: null,
        singleType: false
      },
      requires: [
        "Ext.form.Label",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcherBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.GenericDocumentForm",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.cms.editor.sdk.premular.QueryForm"
      ]
    };
});
