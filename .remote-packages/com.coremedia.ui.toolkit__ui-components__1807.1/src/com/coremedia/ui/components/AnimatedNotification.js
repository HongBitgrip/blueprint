Ext.define("com.coremedia.ui.components.AnimatedNotification", function(AnimatedNotification) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
/**
 A notification window that appears besides a given component.
 It does not disappear if the mouse is over this window and the config param isMouseAware is true.
 Otherwise it is visible for three seconds or until closed explicitly.
 It fades in and fades out softly.
 * /
public class AnimatedNotification extends AnimatedNotificationBase{

    import com.coremedia.ui.mixins.ValidationState;

    public static const xtype:String = "com.coremedia.ui.config.animatedNotification";

    public*/function AnimatedNotification$(config/*:AnimatedNotification = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.AnimatedNotificationBase*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotificationBase,{});
    var defaults_$1/*:AnimatedNotification*/ =AS3.cast(AnimatedNotification,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$lKa2(config_$1);
  }/*

    /**
     The id of the DOM element next to which this tip should be shown.
     * /
    [Bindable]
    public var target:String;


    /**
     The position of the notification relative to the target.
     A string composition beginning with 'l' (left) or 'r' (right) and
     ending with 't' (top), 'c' (center) or 'b' (bottom). Default is 'lb',
     if only 'l' or 'r' are given, 'c' is default.
     * /
    [Bindable]
    public var position:String;


    /**
     An y-offset of the tip from the computed location.
     * /
    [Bindable]
    public var yOffset:Number;


    /**
     An x-offset of the tip from the computed location.
     * /
    [Bindable]
    public var xOffset:Number;


    /**
     If true the tip does not disappear when the mouse is over this component. Default is false.
     * /
    [Bindable]
    public var isMouseAware:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotificationBase",
      alias: "widget.com.coremedia.ui.config.animatedNotification",
      constructor: AnimatedNotification$,
      super$lKa2: function() {
        com.coremedia.ui.components.AnimatedNotificationBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        target: null,
        position: null,
        yOffset: NaN,
        xOffset: NaN,
        isMouseAware: false
      },
      requires: [
        "com.coremedia.ui.components.AnimatedNotificationBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.mixins.ValidationState"]
    };
});
