Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel", function(ContributionUserInformationPanel) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import ext.form.field.DisplayField;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ContributionUserInformationPanel extends ContributionUserInformationPanelBase{

    import com.coremedia.elastic.social.studio.model.UserAdministration;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.contributionUserInformationPanel";

    public*/function ContributionUserInformationPanel$(config/*:ContributionUserInformationPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase,{});
    var defaults_$1/*:ContributionUserInformationPanel*/ =AS3.cast(ContributionUserInformationPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME_200_NO_TOP_BORDER.getSkin());
    var button_33_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_33_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase.USER_INFORMATION_BUTTON_ID);
    button_33_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.LINK.getSkin());
    button_33_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_user_management_tooltip_text'));
    AS3.setBindable(button_33_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_user_management_tooltip_text'));
    AS3.setBindable(button_33_5_$1,"handler" ,AS3.bind( this,"openUserDetails"));
    AS3.setBindable(button_33_5_$1,"margin" , "0 0 0 -2");
    var displayField_40_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_40_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_comments_for_user_title')));
    displayField_40_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase.USER_INFORMATION_TEXT_ID);
    AS3.setBindable(displayField_40_5_$1,"hidden" , true);
    displayField_40_5_$1.hideMode = "visibility";
    config_$1.items = [button_33_5_$1, displayField_40_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Nx5z(config_$1);
  }/*

    [Bindable]
    public var userAdministration:UserAdministration;

    /**
     The authorProvider is a function that returns the author within the current context
     which is only known by the component, which uses the ContributionUserInformationPanel    This function does not expect any parameter and return a User.
     * /
    [Bindable]
    public var authorProvider:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.contributionUserInformationPanel",
      constructor: ContributionUserInformationPanel$,
      super$Nx5z: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        userAdministration: null,
        authorProvider: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
