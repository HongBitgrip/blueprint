Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView", function(EmptyDetailView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.empty{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.Component;
import ext.form.Label;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class EmptyDetailView extends Container{

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.emptyDetailView";

    public*/function EmptyDetailView$(config/*:EmptyDetailView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:EmptyDetailView*/ =AS3.cast(EmptyDetailView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var component_17_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_17_5_$1.flex = 1.0;
    var label_18_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_18_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_empty')));
    var component_19_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_19_5_$1.flex = 1.0;
    config_$1.items = [component_17_5_$1, label_18_5_$1, component_19_5_$1];
    var layout_VBox_22_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_22_5_$1,"align" , "center");
    AS3.setBindable(config_$1,"layout" , layout_VBox_22_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$cbgF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.elastic.social.studio.config.emptyDetailView",
      constructor: EmptyDetailView$,
      super$cbgF: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
