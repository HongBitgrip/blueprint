Ext.define("com.coremedia.cms.studio.im.zoom.ZoomButton", function(ZoomButton) {/*package com.coremedia.cms.studio.im.zoom{
import com.coremedia.cms.studio.im.zoom.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.menu.Menu;
import ext.container.Container;
import ext.form.Label;
import ext.Component;
public class ZoomButton extends ZoomButtonBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.Template;

    /**
     * The item id of the zoom slider in the button menu.
     * /
    public static const ZOOM_SLIDER_ITEM_ID:String = "zoomSlider";

    /**
     * A special CSS rules for a text menu button up to a size of 200px.
     * /
    public static const TEXT_MENU_BUTTON_CSS_CLASS:String = "text-menu-button";

    public*/function ZoomButton$(config/*:ZoomButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.im.zoom.ZoomButtonBase*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomButtonBase,{});
    var defaults_$1/*:ZoomButton*/ =AS3.cast(ZoomButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindPropertyPlugin_36_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_36_5_$1.bidirectional = false;
    ui_BindPropertyPlugin_36_5_$1.componentProperty = "text";
    ui_BindPropertyPlugin_36_5_$1.bindTo = AS3.getBindable(config,"zoomValueExpression");
    ui_BindPropertyPlugin_36_5_$1.transformer = function(value/*:Number*/)/*:String*/ {return (Math.round(value*100)) + '%';};
    config_$1.plugins = [ui_BindPropertyPlugin_36_5_$1];
    var menu_42_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    AS3.setBindable(menu_42_5_$1,"minWidth" , 30.0);
    var container_44_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_44_9_$1,"layout" , "hbox");
    AS3.setBindable(container_44_9_$1,"width" , 45);
    var container_47_13_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_47_13_$1,"layout" , "vbox");
    AS3.setBindable(container_47_13_$1,"height" , "100%");
    var label_50_17_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_50_17_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.zoom.ZoomSlider.MAX_VALUE + '%'));
    var box_51_17_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_51_17_$1.flex = 1.0;
    var label_52_17_$1/*: ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_52_17_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.im.zoom.ZoomSlider.MIN_VALUE + '%'));
    container_47_13_$1.items = [label_50_17_$1, box_51_17_$1, label_52_17_$1];
    var im_ZoomSlider_55_13_$1/*: com.coremedia.cms.studio.im.zoom.ZoomSlider*/ =AS3.cast(com.coremedia.cms.studio.im.zoom.ZoomSlider,{});
    im_ZoomSlider_55_13_$1.itemId =net.jangaroo.ext.Exml.asString( ZoomButton.ZOOM_SLIDER_ITEM_ID);
    AS3.setBindable(im_ZoomSlider_55_13_$1,"zoomValueExpression" , AS3.getBindable(config,"zoomValueExpression"));
    container_44_9_$1.items = [container_47_13_$1, im_ZoomSlider_55_13_$1];
    menu_42_5_$1.items = [container_44_9_$1];
    config_$1.menu = menu_42_5_$1;
    config_$1.template = 


    new Ext.Template(
    '<div id="{4}" class="{3}">',
    '<em class="{2}"><div style="margin-right:12px"><button></button></div></em>',
    '</div>');
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1M$p(config_$1);
  }/*

    /**
     * Value expression holding the zoom factor.
     * /
    [Bindable]
    public var zoomValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.im.zoom.ZoomButtonBase",
      constructor: ZoomButton$,
      super$1M$p: function() {
        com.coremedia.cms.studio.im.zoom.ZoomButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {zoomValueExpression: null},
      statics: {
        ZOOM_SLIDER_ITEM_ID: "zoomSlider",
        TEXT_MENU_BUTTON_CSS_CLASS: "text-menu-button"
      },
      requires: [
        "Ext.Component",
        "Ext.Template",
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.menu.Menu",
        "com.coremedia.cms.studio.im.zoom.ZoomButtonBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.studio.im.zoom.ZoomSlider"]
    };
});
