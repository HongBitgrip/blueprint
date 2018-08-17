Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.PairBulkResultItemSet", function(PairBulkResultItemSet) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.cms.editor.sdk.components.SimpleContentList;
import ext.layout.container.HBoxLayout;
import ext.layout.container.ColumnLayout;
/**
 A bulk result list, where each item is represented by a two contents.
 * /
public class PairBulkResultItemSet extends BulkResultItemSetBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.pairBulkResultItemSet";

    public static const LEFT_LIST_ITEM_ID:String = "leftList";

    public static const RIGHT_LIST_ITEM_ID:String = "rightList";

    public*/function PairBulkResultItemSet$(config/*:PairBulkResultItemSet = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase,{});
    var defaults_$1/*:PairBulkResultItemSet*/ =AS3.cast(PairBulkResultItemSet,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var container_36_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var editor_SimpleContentList_38_9_$1/*:com.coremedia.cms.editor.sdk.components.SimpleContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContentList,{});
    editor_SimpleContentList_38_9_$1.itemId =net.jangaroo.ext.Exml.asString( PairBulkResultItemSet.LEFT_LIST_ITEM_ID);
    AS3.setBindable(editor_SimpleContentList_38_9_$1,"contentPropertyPath" ,net.jangaroo.ext.Exml.asString( config['leftPropertyPath']));
    editor_SimpleContentList_38_9_$1["columnWidth"] = .5;
    AS3.setBindable(editor_SimpleContentList_38_9_$1,"showApproveContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_38_9_$1,"showPublishContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_38_9_$1,"showWithdrawContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_38_9_$1,"contentList" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"resultItems")));
    var container_45_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_45_9_$1,"width" , 80);
    var container_47_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_47_13_$1,"html" , AS3.getBindable(config,"resourceBundle")[AS3.getBindable(config,"resourcePrefix") + '_impedimentType_' + AS3.getBindable(config,"resultCode") + '_text']);
    container_45_9_$1.items = [container_47_13_$1];
    var layout_HBox_51_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_51_13_$1,"pack" , "center");
    AS3.setBindable(container_45_9_$1,"layout" , layout_HBox_51_13_$1);
    var editor_SimpleContentList_54_9_$1/*: com.coremedia.cms.editor.sdk.components.SimpleContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContentList,{});
    editor_SimpleContentList_54_9_$1.itemId =net.jangaroo.ext.Exml.asString( PairBulkResultItemSet.RIGHT_LIST_ITEM_ID);
    AS3.setBindable(editor_SimpleContentList_54_9_$1,"contentPropertyPath" ,net.jangaroo.ext.Exml.asString( config['rightPropertyPath']));
    editor_SimpleContentList_54_9_$1["columnWidth"] = .5;
    AS3.setBindable(editor_SimpleContentList_54_9_$1,"showApproveContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_54_9_$1,"showPublishContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_54_9_$1,"showWithdrawContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_54_9_$1,"contentList" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"resultItems")));
    container_36_5_$1.items = [editor_SimpleContentList_38_9_$1, container_45_9_$1, editor_SimpleContentList_54_9_$1];
    var layout_Column_63_9_$1/*:ext.layout.container.ColumnLayout*/ =AS3.cast(Ext.layout.container.Column,{});
    AS3.setBindable(container_36_5_$1,"layout" , layout_Column_63_9_$1);
    config_$1.items = [container_36_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ziyp(config_$1);
  }/*

    /**
     the relative property path for the items to be displayed on the left
     * /
    [Bindable]
    public var leftPropertyPath:String;


    /**
     the relative property path for the items to be displayed on the right
     * /
    [Bindable]
    public var rightPropertyPath:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.pairBulkResultItemSet",
      constructor: PairBulkResultItemSet$,
      super$Ziyp: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        leftPropertyPath: null,
        rightPropertyPath: null
      },
      statics: {
        LEFT_LIST_ITEM_ID: "leftList",
        RIGHT_LIST_ITEM_ID: "rightList"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Column",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.SimpleContentList"]
    };
});
