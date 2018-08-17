Ext.define("com.coremedia.ui.layouts.MultiItemSplitter", function(MultiItemSplitter) {/*package com.coremedia.ui.layouts{
import com.coremedia.ui.layouts.*;
import net.jangaroo.ext.Exml;
/**
 A splitter that can not only resize adjacent components but potentially all components
 of a container, depending on its mode.

 It is assumed that the splitter is used in the context of a BoxLayout (vbox or hbox).
 Only flexed components are resized.

 The splitter respects minimal values (minWidth, minHeight) and fixed values (width, height).
 * /
public class MultiItemSplitter extends MultiItemSplitterBase{

    public static const xtype:String = "com.coremedia.ui.config.multiItemSplitter";

    public*/function MultiItemSplitter$(config/*:MultiItemSplitter = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.layouts.MultiItemSplitterBase*/ =AS3.cast(com.coremedia.ui.layouts.MultiItemSplitterBase,{});
    var defaults_$1/*:MultiItemSplitter*/ =AS3.cast(MultiItemSplitter,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"stateful" , config.stateId ? true : false);
    config_$1.stateEvents = [com.coremedia.ui.layouts.MultiItemSplitterBase.RESIZE_PERFORMED_EVENT];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rYPg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.layouts.MultiItemSplitterBase",
      alias: "widget.com.coremedia.ui.config.multiItemSplitter",
      constructor: MultiItemSplitter$,
      super$rYPg: function() {
        com.coremedia.ui.layouts.MultiItemSplitterBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.layouts.MultiItemSplitterBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
