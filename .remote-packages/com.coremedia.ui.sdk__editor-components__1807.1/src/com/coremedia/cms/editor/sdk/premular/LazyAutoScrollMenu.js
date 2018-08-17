Ext.define("com.coremedia.cms.editor.sdk.premular.LazyAutoScrollMenu", function(LazyAutoScrollMenu) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindItemsPlugin;
/**
 A menu that creates its menu items lazily just before rendering (on event 'beforerender').
 The menu scrolls with a horizontal scroll bar when maxHeight is reached (default: 400).
 * /
public class LazyAutoScrollMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.lazyAutoScrollMenu";

    public*/function LazyAutoScrollMenu$(config/*:LazyAutoScrollMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:LazyAutoScrollMenu*/ =AS3.cast(LazyAutoScrollMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var ui_BindItemsPlugin_34_5_$1/*:com.coremedia.ui.plugins.BindItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPlugin,{});
    AS3.setBindable(ui_BindItemsPlugin_34_5_$1,"valueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ui_BindItemsPlugin_34_5_$1,"reuseComponents" , true);
    AS3.setBindable(ui_BindItemsPlugin_34_5_$1,"lazy" , true);
    config_$1.plugins = [ui_BindItemsPlugin_34_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7ryH(config_$1);
  }/*

    /**
     * a value expression to a list of menu items
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /** the premular containing this toolbar * /
    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.Premular;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.lazyAutoScrollMenu",
      constructor: LazyAutoScrollMenu$,
      super$7ryH: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        premular: null
      },
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.ui.plugins.BindItemsPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
