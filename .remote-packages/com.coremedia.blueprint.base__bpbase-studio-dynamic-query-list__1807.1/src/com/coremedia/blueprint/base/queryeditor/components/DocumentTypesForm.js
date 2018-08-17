Ext.define("com.coremedia.blueprint.base.queryeditor.components.DocumentTypesForm", function(DocumentTypesForm) {/*package com.coremedia.blueprint.base.queryeditor.components{
import com.coremedia.blueprint.base.queryeditor.components.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.components.StatefulCheckbox;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class DocumentTypesForm extends DocumentTypesFormBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.documentTypesForm";

    public*/function DocumentTypesForm$(config/*:DocumentTypesForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase,{});
    var defaults_$1/*:DocumentTypesForm*/ =AS3.cast(DocumentTypesForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.collapsible = false;
    config_$1.itemId = "documentTypesFilter";
    var container_35_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var ui_StatefulCheckbox_37_9_$1/*:com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    AS3.setBindable(ui_StatefulCheckbox_37_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_all')));
    ui_StatefulCheckbox_37_9_$1.itemId = "all";
    ui_StatefulCheckbox_37_9_$1.checked = true;
    container_35_5_$1.items = [ui_StatefulCheckbox_37_9_$1];
    var container_43_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_43_5_$1.itemId = "types";
    container_43_5_$1.items = [];
    var layout_VBox_46_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_46_9_$1,"align" , "left");
    AS3.setBindable(container_43_5_$1,"layout" , layout_VBox_46_9_$1);
    config_$1.items = [container_35_5_$1, container_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bSOF(config_$1);
  }/*

    /** A default height in pixels for the document types filter container. * /
    [Bindable]
    public var documentTypesFilterHeight:Number;


    /**
     Name of the property containing the information about document types included in the query.
     * /
    [Bindable]
    public var propertyName:String;


    /**
     Array of objects containing available document type's name and conditions applicable to that document type.
     * /
    [Bindable]
    public var documentTypes:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.documentTypesForm",
      constructor: DocumentTypesForm$,
      super$bSOF: function() {
        com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        documentTypesFilterHeight: NaN,
        propertyName: null,
        documentTypes: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.VBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase",
        "com.coremedia.ui.components.StatefulCheckbox",
        "net.jangaroo.ext.Exml"
      ]
    };
});
