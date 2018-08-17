Ext.define("com.coremedia.cms.editor.sdk.components.folderprompt.FolderPanel", function(FolderPanel) {/*package com.coremedia.cms.editor.sdk.components.folderprompt{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.ExtendedDisplayField;
public class FolderPanel extends Container{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.folderPanel";

    public*/function FolderPanel$(config/*:FolderPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:FolderPanel*/ =AS3.cast(FolderPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "hbox");
    AS3.setBindable(config_$1,"height" , 21);
    var ui_IconDisplayField_27_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_27_5_$1.itemId = "folderName";
    ui_IconDisplayField_27_5_$1.flex = 1.0;
    AS3.setBindable(ui_IconDisplayField_27_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'folder')));
    AS3.setBindable(ui_IconDisplayField_27_5_$1,"value" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"name")));
    AS3.setBindable(ui_IconDisplayField_27_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    var ui_ExtendedDisplayField_32_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_32_5_$1.flex = 2.0;
    ui_ExtendedDisplayField_32_5_$1.itemId = "folderPath";
    AS3.setBindable(ui_ExtendedDisplayField_32_5_$1,"value" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"path")));
    AS3.setBindable(ui_ExtendedDisplayField_32_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    config_$1.items = [ui_IconDisplayField_27_5_$1, ui_ExtendedDisplayField_32_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HREO(config_$1);
  }/*

    /** The folder name to display on this panel. * /
    [Bindable]
    public var name:String;


    /** The folder name to display on this panel. * /
    [Bindable]
    public var path:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.editor.sdk.config.folderPanel",
      constructor: FolderPanel$,
      super$HREO: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        name: null,
        path: null
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
