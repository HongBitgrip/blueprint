Ext.define("com.coremedia.cms.editor.sdk.upload.UploadMenuItem", function(UploadMenuItem) {/*package com.coremedia.cms.editor.sdk.upload{
import com.coremedia.cms.editor.sdk.upload.*;
import ext.menu.Item;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UploadMenuItem extends Item{

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.uploadMenuItem";

    public*/function UploadMenuItem$(config/*:UploadMenuItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var defaults_$1/*:UploadMenuItem*/ =AS3.cast(UploadMenuItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId = "uploadMenuItem";
    AS3.setBindable(config_$1,"listeners" , {'afterrender':com.coremedia.cms.editor.sdk.upload.UploadHelper.resolveMenuItemTooltip});
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadFileAction_menu_item_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'upload')));
    var upload_OpenUploadDialogAction_23_5_$1/*: com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction,{});
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction(upload_OpenUploadDialogAction_23_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3qwc(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.uploadMenuItem",
      constructor: UploadMenuItem$,
      super$3qwc: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.upload.OpenUploadDialogAction",
        "com.coremedia.cms.editor.sdk.upload.UploadHelper"
      ]
    };
});
