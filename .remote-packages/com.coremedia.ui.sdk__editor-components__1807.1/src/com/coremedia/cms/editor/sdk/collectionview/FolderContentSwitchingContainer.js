Ext.define("com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer", function(FolderContentSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class FolderContentSwitchingContainer extends FolderContentSwitchingContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.folderContentSwitchingContainer";

    public*/function FolderContentSwitchingContainer$(config/*:FolderContentSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase,{});
    var defaults_$1/*:FolderContentSwitchingContainer*/ =AS3.cast(FolderContentSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Grcj(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.folderContentSwitchingContainer",
      constructor: FolderContentSwitchingContainer$,
      super$Grcj: function() {
        com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
