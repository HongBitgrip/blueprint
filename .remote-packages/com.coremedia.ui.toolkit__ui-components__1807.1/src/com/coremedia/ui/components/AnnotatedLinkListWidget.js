Ext.define("com.coremedia.ui.components.AnnotatedLinkListWidget", function(AnnotatedLinkListWidget) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.StopEventPropagationPlugin;
[PublicApi]
/**
Default implementation for a widget used in an that serves as a dispatcher to multiple {@link IAnnotatedLinkListForm}s.

It makes sure that the {@link IAnnotatedLinkListForm#settingsVE} will always point to the correct setting based on the
index the item is rendered in the parent {@link ext.view.TableView}.
 * /
public class AnnotatedLinkListWidget extends AnnotatedLinkListWidgetBase{

    public static const xtype:String = "com.coremedia.ui.components.AnnotatedLinkListWidget";

    public*/function AnnotatedLinkListWidget$(config/*:AnnotatedLinkListWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.AnnotatedLinkListWidgetBase*/ =AS3.cast(com.coremedia.ui.components.AnnotatedLinkListWidgetBase,{});
    var defaults_$1/*:AnnotatedLinkListWidget*/ =AS3.cast(AnnotatedLinkListWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_Anchor_21_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_21_5_$1);
    var ui_IAnnotatedLinkListForm_24_5_$1/*: com.coremedia.ui.components.IAnnotatedLinkListForm*/ =AS3.cast(com.coremedia.ui.components.IAnnotatedLinkListForm,{});
    AS3.setBindable(ui_IAnnotatedLinkListForm_24_5_$1,"settingsVE" , AS3.getBindable(this,"settingsVE"));
    config_$1["defaultType"] = ui_IAnnotatedLinkListForm_24_5_$1['xtype'];
    delete ui_IAnnotatedLinkListForm_24_5_$1['xtype'];
    delete ui_IAnnotatedLinkListForm_24_5_$1['xclass'];
    config_$1.defaults = ui_IAnnotatedLinkListForm_24_5_$1;
    var ui_StopEventPropagationPlugin_27_5_$1/*:com.coremedia.ui.plugins.StopEventPropagationPlugin*/ =AS3.cast(com.coremedia.ui.plugins.StopEventPropagationPlugin,{});
    config_$1.plugins = [ui_StopEventPropagationPlugin_27_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qF_0(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnnotatedLinkListWidgetBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.components.AnnotatedLinkListWidget",
      constructor: AnnotatedLinkListWidget$,
      super$qF_0: function() {
        com.coremedia.ui.components.AnnotatedLinkListWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.ui.components.AnnotatedLinkListWidgetBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.components.IAnnotatedLinkListForm",
        "com.coremedia.ui.plugins.StopEventPropagationPlugin"
      ]
    };
});
