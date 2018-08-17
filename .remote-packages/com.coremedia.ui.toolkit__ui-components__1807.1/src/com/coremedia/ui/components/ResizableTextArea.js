Ext.define("com.coremedia.ui.components.ResizableTextArea", function(ResizableTextArea) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.ResizablePlugin;
/**
 A resizable text field.
 * /
public class ResizableTextArea extends ResizableTextAreaBase{

    public static const xtype:String = "com.coremedia.ui.config.resizableTextArea";
    public static const TEXT_AREA_BLOCK:String = "cm-auto-width-text-area";

    public*/function ResizableTextArea$(config/*:ResizableTextArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.ResizableTextAreaBase*/ =AS3.cast(com.coremedia.ui.components.ResizableTextAreaBase,{});
    var defaults_$1/*:ResizableTextArea*/ =AS3.cast(ResizableTextArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BEMPlugin_18_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_18_5_$1,"block" , ResizableTextArea.TEXT_AREA_BLOCK);
    var ui_ResizablePlugin_19_5_$1/*:com.coremedia.ui.plugins.ResizablePlugin*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePlugin,{});
    var ui_StatefulResizer_21_9_$1/*: com.coremedia.ui.components.StatefulResizer*/ =AS3.cast(com.coremedia.ui.components.StatefulResizer,{});
    ui_StatefulResizer_21_9_$1.minHeight = 30;
    ui_StatefulResizer_21_9_$1.handles = "s";
    ui_StatefulResizer_21_9_$1.pinned = true;
    ui_StatefulResizer_21_9_$1.dynamic = false;
    AS3.setBindable(ui_StatefulResizer_21_9_$1,"embed" , false);
    ui_ResizablePlugin_19_5_$1.resizableConfig = ui_StatefulResizer_21_9_$1;
    config_$1.plugins = [ui_BEMPlugin_18_5_$1, ui_ResizablePlugin_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kGZH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ResizableTextAreaBase",
      alias: "widget.com.coremedia.ui.config.resizableTextArea",
      constructor: ResizableTextArea$,
      super$kGZH: function() {
        com.coremedia.ui.components.ResizableTextAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {TEXT_AREA_BLOCK: "cm-auto-width-text-area"},
      requires: [
        "com.coremedia.ui.components.ResizableTextAreaBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.components.StatefulResizer",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.ResizablePlugin"
      ]
    };
});
