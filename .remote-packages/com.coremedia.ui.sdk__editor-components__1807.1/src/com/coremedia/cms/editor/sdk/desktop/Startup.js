Ext.define("com.coremedia.cms.editor.sdk.desktop.Startup", function(Startup) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.Component;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A pseudo component that is instantiated once after all editor plugins have been
 processed and before the GUI is set up. This component is used in plugin rules
 to specify an Ext JS plugin that should be run once at startup time. The plugin should
 not access the component with which it is registered and which is discarded
 immediately afterwards. Rather, it should configure the editor context.
 * /
public class Startup extends Component{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.startup";

    public*/function Startup$(config/*:Startup = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    var defaults_$1/*:Startup*/ =AS3.cast(Startup,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$L6VH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.startup",
      constructor: Startup$,
      super$L6VH: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "net.jangaroo.ext.Exml"
      ]
    };
});
