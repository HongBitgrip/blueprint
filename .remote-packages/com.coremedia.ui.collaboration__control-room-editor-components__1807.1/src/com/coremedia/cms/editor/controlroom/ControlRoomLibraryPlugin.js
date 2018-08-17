Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomLibraryPlugin", function(ControlRoomLibraryPlugin) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
import com.coremedia.cms.editor.controlroom.ControlRoomCollectionViewPlugin;
public class ControlRoomLibraryPlugin extends StudioPlugin{

    public*/function ControlRoomLibraryPlugin$(config/*:ControlRoomLibraryPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:ControlRoomLibraryPlugin*/ =AS3.cast(ControlRoomLibraryPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_CollectionView_15_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionView*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionView,{});
    var collab_ControlRoomCollectionViewPlugin_17_9_$1/*:com.coremedia.cms.editor.controlroom.ControlRoomCollectionViewPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ControlRoomCollectionViewPlugin,{});
    editor_CollectionView_15_5_$1.plugins = [collab_ControlRoomCollectionViewPlugin_17_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_CollectionView_15_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$t6oo(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      constructor: ControlRoomLibraryPlugin$,
      super$t6oo: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.ControlRoomCollectionViewPlugin"]
    };
});
