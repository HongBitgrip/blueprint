Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton", function(EmailButton) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import ext.form.Label;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class EmailButton extends EmailButtonBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.emailButton";

    public static const OPEN_EMAIL_BUTTON_ITEM_ID:String = "cm-elastic-social-contribution-email-button";

    public*/function EmailButton$(config/*:EmailButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase,{});
    var defaults_$1/*:EmailButton*/ =AS3.cast(EmailButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "card");
    AS3.setBindable(config_$1,"activeItem" , 1);
    var button_30_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_30_5_$1.itemId =net.jangaroo.ext.Exml.asString( EmailButton.OPEN_EMAIL_BUTTON_ITEM_ID);
    button_30_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_30_5_$1,"handler" ,AS3.bind( this,"openEmailEditor"));
    AS3.setBindable(button_30_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil')));
    AS3.setBindable(button_30_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'mail')));
    var label_36_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_36_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'commentdetail_reject_comment_email_anonymous')));
    var label_37_5_$1/*: ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_37_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'commentdetail_reject_comment_email_blocked')));
    var label_38_5_$1/*: ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_38_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'commentdetail_reject_comment_email_ignored')));
    config_$1.items = [button_30_5_$1, label_36_5_$1, label_37_5_$1, label_38_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Nuo4(config_$1);
  }/*

    [Bindable]
    public var abstractContributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.emailButton",
      constructor: EmailButton$,
      super$Nuo4: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {abstractContributionAdministration: null},
      statics: {OPEN_EMAIL_BUTTON_ITEM_ID: "cm-elastic-social-contribution-email-button"},
      requires: [
        "Ext.button.Button",
        "Ext.form.Label",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButtonBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
