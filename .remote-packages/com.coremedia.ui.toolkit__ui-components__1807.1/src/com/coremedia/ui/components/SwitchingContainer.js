Ext.define("com.coremedia.ui.components.SwitchingContainer", function(SwitchingContainer) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.CardLayout;
[PublicApi]
/**
 The SwitchingContainer chooses based on the activeItemValueExpression and
 the itemId which item it should display.
 Don't use the initial activeItem configuration. It will be ignored. Only the values of the
 activeItemValueExpression are used.
 * /
public class SwitchingContainer extends SwitchingContainerBase{

    public static const xtype:String = "com.coremedia.ui.config.switchingContainer";

    public*/function SwitchingContainer$(config/*:SwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.SwitchingContainerBase*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainerBase,{});
    var defaults_$1/*:SwitchingContainer*/ =AS3.cast(SwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.items = config.items || [];
    var layout_Card_62_5_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_62_5_$1.deferredRender = true;
    AS3.setBindable(config_$1,"layout" , layout_Card_62_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Xr$7(config_$1);
  }/*

    import ext.Component;

    /**
     A Component configuration that is instantiated with the bean in case there is no item in this switching container
     matching the requested itemId.
     * /
    public var itemTemplate:Component;

    /**
     The list of items that are searched for the requested itemId and instantiated and added to this container's
     items lazily.
     * /
    [ArrayElementType("ext.Component")]
    public var lazyItems:Array;

    /**
     A function to apply to the ValueExpression's value to compute an itemId (String) or item index (number).
     If not given, the value is used as-is.
     * /
    [Bindable]
    public var transformer:Function;


    /**

     A function that is called to find the a suitable item in the list of the current items of this container,
     based on the given itemId. The returned item is then used as the new active item.
     Signature: &lt;code>function(itemId):Component&lt;/code>

     * /
    [Bindable]
    public var findComponent:Function;


    /*
      Determines whether each card change (of the underlying CardLayout) should occur
      with Ext layouts being resumed.
     * /
    [Bindable]
    public var layoutOnCardChange:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainerBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.switchingContainer",
      constructor: SwitchingContainer$,
      super$Xr$7: function() {
        com.coremedia.ui.components.SwitchingContainerBase.prototype.constructor.apply(this, arguments);
      },
      itemTemplate: null,
      lazyItems: null,
      config: {
        transformer: null,
        findComponent: null,
        layoutOnCardChange: false
      },
      requires: [
        "Ext.layout.container.Card",
        "com.coremedia.ui.components.SwitchingContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
