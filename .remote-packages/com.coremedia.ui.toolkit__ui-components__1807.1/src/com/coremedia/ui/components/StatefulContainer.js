Ext.define("com.coremedia.ui.components.StatefulContainer", function(StatefulContainer) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class StatefulContainer extends StatefulContainerBase{

    public static const xtype:String = "com.coremedia.ui.config.statefulContainer";

    public*/function StatefulContainer$(config/*:StatefulContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.StatefulContainerBase*/ =AS3.cast(com.coremedia.ui.components.StatefulContainerBase,{});
    var defaults_$1/*:StatefulContainer*/ =AS3.cast(StatefulContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ho11(config_$1);
  }/*

    /**
     A comma-separated list of property names to copy from the config object to the model.
     * /
    [Bindable]
    public var properties:String;


    /**
     An object mapping property names to default values in case the
     property is initially undefined.
     * /
    [Bindable]
    public var propertyDefaults:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulContainerBase",
      alias: "widget.com.coremedia.ui.config.statefulContainer",
      constructor: StatefulContainer$,
      super$ho11: function() {
        com.coremedia.ui.components.StatefulContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        properties: null,
        propertyDefaults: null
      },
      requires: [
        "com.coremedia.ui.components.StatefulContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
