Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar", function(ProcessContributionToolbar) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import ext.Action;
import net.jangaroo.ext.Exml;
import ext.toolbar.Fill;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ProcessContributionToolbar extends ProcessContributionToolbarBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.processContributionToolbar";

    public*/function ProcessContributionToolbar$(config/*:ProcessContributionToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase,{});
    var defaults_$1/*:ProcessContributionToolbar*/ =AS3.cast(ProcessContributionToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FOOTER.getSkin());
    var es_EmailButton_33_5_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton,{});
    es_EmailButton_33_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase.EMAIL_BUTTON_ID);
    AS3.setBindable(es_EmailButton_33_5_$1,"abstractContributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    var tbFill_35_5_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_36_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_36_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase.APPROVE_BUTTON_ID);
    AS3.setBindable(button_36_5_$1,"minWidth" , 70.0);
    button_36_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_36_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_approve')));
    button_36_5_$1.baseAction = AS3.getBindable(config,"approveAction");
    var button_41_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase.REJECT_BUTTON_ID);
    AS3.setBindable(button_41_5_$1,"minWidth" , 70.0);
    button_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_41_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_reject')));
    button_41_5_$1.baseAction = AS3.getBindable(config,"rejectAction");
    config_$1.items = [es_EmailButton_33_5_$1, tbFill_35_5_$1, button_36_5_$1, button_41_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$e1a6(config_$1);
  }/*

    [Bindable]
    public var abstractContributionAdministration:AbstractContributionAdministration;

    [Bindable]
    public var approveAction:ext.Action;


    [Bindable]
    public var rejectAction:ext.Action;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.processContributionToolbar",
      constructor: ProcessContributionToolbar$,
      super$e1a6: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        abstractContributionAdministration: null,
        approveAction: null,
        rejectAction: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.toolbar.Fill",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton"]
    };
});
