Ext.define("com.coremedia.ui.plugins.WriteBeforeFlushPlugin", function(WriteBeforeFlushPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to make an ext.form.TextField send 'change' events
 before a bean that is indicated by a value expression is about to be flushed.

 * /
public class WriteBeforeFlushPlugin extends WriteBeforeFlushPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function WriteBeforeFlushPlugin$(config/*:WriteBeforeFlushPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.WriteBeforeFlushPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.WriteBeforeFlushPluginBase,{});
    var defaults_$1/*:WriteBeforeFlushPlugin*/ =AS3.cast(WriteBeforeFlushPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$H0B(config_$1);
  }/*

    /**
     * A value expression that returns the remote bean whose &lt;code>beforeFlush&lt;/code> events
     * are supposed to trigger the change event.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.WriteBeforeFlushPluginBase",
      constructor: WriteBeforeFlushPlugin$,
      super$$H0B: function() {
        com.coremedia.ui.plugins.WriteBeforeFlushPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {valueExpression: null},
      requires: [
        "com.coremedia.ui.plugins.WriteBeforeFlushPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
