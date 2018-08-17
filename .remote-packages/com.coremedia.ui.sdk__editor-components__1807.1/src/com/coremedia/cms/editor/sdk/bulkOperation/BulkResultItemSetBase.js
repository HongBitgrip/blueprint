Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase", function(BulkResultItemSetBase) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import net.jangaroo.ext.Exml;
public class BulkResultItemSetBase extends CollapsiblePanel{

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bulkResultItemSetBase";

    public static const CONTENT_LIST_ITEM_ID:String = "contentList";

    public*/function BulkResultItemSetBase$(config/*:BulkResultItemSetBase = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    var defaults_$1/*:BulkResultItemSetBase*/ =AS3.cast(BulkResultItemSetBase,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"multilineTitle" , true);
    AS3.setBindable(config_$1,"title" , Ext.String.format(AS3.getBindable(config,"resourceBundle")[Ext.String.format(AS3.getBindable(config,"resourcePrefix") + '_error_{0}_{1}_text',
                                                                          AS3.getBindable(config,"resultCode"),
                                                                          AS3.getBindable(config,"resultItems").length === 1 ? 'sg' : 'pl')],
                                                   AS3.getBindable(config,"resultItems").length));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2DtU(config_$1);
  }/*

    /**
     the result code, which is used to derive a title to display
     * /
    [Bindable]
    public var resultCode:String;


    /**
     a list of publication result items, where each item has a 'content' and an optional 'impediment',
     both of which are Content Beans
     * /
    [Bindable]
    public var resultItems:Array;


    /**
     the resource bundle to show correct error message for this bulk result item set.
     * /
    [Bindable]
    public var resourceBundle:Object;


    /**
     the prefix to use for properties in the resource bundle
     * /
    [Bindable]
    public var resourcePrefix:String;


    /** Whether to show the publisher-related menu items in the context menu; default true * /
    [Bindable]
    public var showPublisherMenuItems:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bulkResultItemSetBase",
      constructor: BulkResultItemSetBase$,
      super$2DtU: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      config: {
        resultCode: null,
        resultItems: null,
        resourceBundle: null,
        resourcePrefix: null,
        showPublisherMenuItems: false
      },
      statics: {CONTENT_LIST_ITEM_ID: "contentList"},
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "net.jangaroo.ext.Exml"
      ]
    };
});
