Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenu", function(TeaserOverlayPositionMenu) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser{
import com.coremedia.cms.editor.sdk.premular.fields.teaser.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TeaserOverlayPositionMenu extends TeaserOverlayPositionMenuBase{

    import com.coremedia.ui.skins.MenuSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.TeaserOverlayPositionMenu";

    public*/function TeaserOverlayPositionMenu$(config/*:TeaserOverlayPositionMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase,{});
    var defaults_$1/*:TeaserOverlayPositionMenu*/ =AS3.cast(TeaserOverlayPositionMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.GRID_100);
    config_$1.items = [];
    var layout_Anchor_26_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_26_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$B50z(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.TeaserOverlayPositionMenu",
      constructor: TeaserOverlayPositionMenu$,
      super$B50z: function() {
        com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
