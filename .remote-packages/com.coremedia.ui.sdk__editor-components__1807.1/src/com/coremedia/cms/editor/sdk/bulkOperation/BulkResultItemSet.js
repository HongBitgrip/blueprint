Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSet", function(BulkResultItemSet) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.components.SimpleContentList;
public class BulkResultItemSet extends BulkResultItemSetBase{

    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bulkResultItemSet";

    public static const CONTENT_LIST_ITEM_ID:String = "contentList";

    public*/function BulkResultItemSet$(config/*:BulkResultItemSet = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase,{});
    var defaults_$1/*:BulkResultItemSet*/ =AS3.cast(BulkResultItemSet,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SimpleContentList_19_5_$1/*:com.coremedia.cms.editor.sdk.components.SimpleContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContentList,{});
    editor_SimpleContentList_19_5_$1.itemId =net.jangaroo.ext.Exml.asString( BulkResultItemSet.CONTENT_LIST_ITEM_ID);
    AS3.setBindable(editor_SimpleContentList_19_5_$1,"contentPropertyPath" , "content");
    AS3.setBindable(editor_SimpleContentList_19_5_$1,"showApproveContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_19_5_$1,"showPublishContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_19_5_$1,"showWithdrawContextMenuItem" , AS3.getBindable(config,"showPublisherMenuItems"));
    AS3.setBindable(editor_SimpleContentList_19_5_$1,"contentList" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"resultItems")));
    config_$1.items = [editor_SimpleContentList_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mU5j(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bulkResultItemSet",
      constructor: BulkResultItemSet$,
      super$mU5j: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase.prototype.constructor.apply(this, arguments);
      },
      statics: {CONTENT_LIST_ITEM_ID: "contentList"},
      requires: [
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSetBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.SimpleContentList"]
    };
});
