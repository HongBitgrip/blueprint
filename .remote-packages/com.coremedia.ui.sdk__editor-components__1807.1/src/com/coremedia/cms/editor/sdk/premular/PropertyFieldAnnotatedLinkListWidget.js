Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget", function(PropertyFieldAnnotatedLinkListWidget) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.StopEventPropagationPlugin;
[PublicApi]
/**
PropertyField implementation for a widget used in an that serves as a dispatcher to multiple PropertyField.

It relies on the fact that propertyPath will never change implying that the widget is never reused within the attached
table view. This is currently made sure by a RowContextTable override in the ui-components...
 * /
public class PropertyFieldAnnotatedLinkListWidget extends PropertyFieldAnnotatedLinkListWidgetBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget";

    public*/function PropertyFieldAnnotatedLinkListWidget$(config/*:PropertyFieldAnnotatedLinkListWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase,{});
    var defaults_$1/*:PropertyFieldAnnotatedLinkListWidget*/ =AS3.cast(PropertyFieldAnnotatedLinkListWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaults =AS3.bind( this,"calculateDefaults");
    var layout_Anchor_22_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_22_5_$1);
    var ui_StopEventPropagationPlugin_25_5_$1/*:com.coremedia.ui.plugins.StopEventPropagationPlugin*/ =AS3.cast(com.coremedia.ui.plugins.StopEventPropagationPlugin,{});
    config_$1.plugins = [ui_StopEventPropagationPlugin_25_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FHOH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidget",
      constructor: PropertyFieldAnnotatedLinkListWidget$,
      super$FHOH: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldAnnotatedLinkListWidgetBase",
        "com.coremedia.ui.plugins.StopEventPropagationPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
