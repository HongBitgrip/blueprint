Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea", function(LinkListDropArea) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
import com.coremedia.ui.components.IconDisplayField;
/**
 Drop Area which can be used to append items to a given link list.

 We need a container here to wrap the display field, as it uses a CSS table layout and this clashes
 with our styles for the validation.
 * /
public class LinkListDropArea extends LinkListDropAreaBase{

    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListDropArea";

    [Bindable]
    public var iconCls:String;

    [Bindable]
    public var text:String;

    public*/function LinkListDropArea$(config/*:LinkListDropArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase,{});
    var defaults_$1/*:LinkListDropArea*/ =AS3.cast(LinkListDropArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.maskOnDisable = false;
    config_$1["ariaRole"] = "button";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    config_$1.tabIndex = 0.0;
    config_$1["focusable"] = true;
    var layout_Fit_38_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_38_5_$1);
    var ui_IconDisplayField_41_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.EMBEDDED.getSkin());
    AS3.setBindable(ui_IconDisplayField_41_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"iconCls") || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyField_icon')));
    AS3.setBindable(ui_IconDisplayField_41_5_$1,"value" , AS3.getBindable(config,"text") || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyField_text'));
    config_$1.items = [ui_IconDisplayField_41_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mDfd(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListDropArea",
      constructor: LinkListDropArea$,
      super$mDfd: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        iconCls: null,
        text: null
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
