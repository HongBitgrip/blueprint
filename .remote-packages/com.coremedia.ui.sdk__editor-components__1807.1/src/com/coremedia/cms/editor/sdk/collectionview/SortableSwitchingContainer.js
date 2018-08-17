Ext.define("com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainer", function(SortableSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class SortableSwitchingContainer extends SortableSwitchingContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.sortableSwitchingContainer";

    public*/function SortableSwitchingContainer$(config/*:SortableSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase,{});
    var defaults_$1/*:SortableSwitchingContainer*/ =AS3.cast(SortableSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_bPy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.sortableSwitchingContainer",
      constructor: SortableSwitchingContainer$,
      super$_bPy: function() {
        com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.SortableSwitchingContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
