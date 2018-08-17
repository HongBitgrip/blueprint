Ext.define("com.coremedia.cms.editor.sdk.publication.PublicationSuccessNotification", function(PublicationSuccessNotification) {/*package com.coremedia.cms.editor.sdk.publication{
import com.coremedia.ui.components.AnimatedNotification;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.components.SimpleContentList;

    [ResourceBundle('com.coremedia.cms.editor.sdk.publication.Publisher')]
/**
 A notification window describing a successful publication or withdrawal.
 * /
public class PublicationSuccessNotification extends AnimatedNotification{

    import com.coremedia.ui.data.ValueExpressionFactory;

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.publicationSuccessNotification";

    public static const CHANGE_SET_LIST_ITEM_ID:String = "changeSetList";

    public*/function PublicationSuccessNotification$(config/*:PublicationSuccessNotification = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AnimatedNotification*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotification,{});
    var defaults_$1/*:PublicationSuccessNotification*/ =AS3.cast(PublicationSuccessNotification,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher', Ext.String.format('publicationNotification_{0}_succeeded_title', AS3.getBindable(config,"publishOperation"))));
    AS3.setBindable(config_$1,"width" , 300);
    AS3.setBindable(config_$1,"closable" , true);
    AS3.setBindable(config_$1,"position" , "lc");
    var editor_SimpleContentList_45_5_$1/*:com.coremedia.cms.editor.sdk.components.SimpleContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContentList,{});
    editor_SimpleContentList_45_5_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationSuccessNotification.CHANGE_SET_LIST_ITEM_ID);
    AS3.setBindable(editor_SimpleContentList_45_5_$1,"hideBorder" , true);
    AS3.setBindable(editor_SimpleContentList_45_5_$1,"contentList" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"publishedItems")));
    config_$1.items = [editor_SimpleContentList_45_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GodU(config_$1);
  }/*

    /**
     a list of content beans that have been published or withdrawn and that are
     supposed to be listed in the notification
     * /
    [Bindable]
    public var publishedItems:Array;


    /**
     whether the operation was a publication ('publish') or a withdrawal
     ('withdraw')
     * /
    [Bindable]
    public var publishOperation:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotification",
      alias: "widget.com.coremedia.cms.editor.sdk.config.publicationSuccessNotification",
      constructor: PublicationSuccessNotification$,
      super$GodU: function() {
        com.coremedia.ui.components.AnimatedNotification.prototype.constructor.apply(this, arguments);
      },
      config: {
        publishedItems: null,
        publishOperation: null
      },
      statics: {CHANGE_SET_LIST_ITEM_ID: "changeSetList"},
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.publication.Publisher_properties",
        "com.coremedia.ui.components.AnimatedNotification",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.SimpleContentList"]
    };
});
