Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton", function(BlacklistToolbarButton) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class BlacklistToolbarButton extends BlacklistToolbarButtonBase{

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.blacklistToolbarButton";

    public*/function BlacklistToolbarButton$(config/*:BlacklistToolbarButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase,{});
    var defaults_$1/*:BlacklistToolbarButton*/ =AS3.cast(BlacklistToolbarButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.enableToggle = true;
    config_$1.toggleHandler =AS3.bind( this,"onToggle");
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'blacklist')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4wWQ(config_$1);
  }/*

    [Bindable]
    public var richTextAreaId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.blacklistToolbarButton",
      constructor: BlacklistToolbarButton$,
      super$4wWQ: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {richTextAreaId: null},
      requires: [
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
