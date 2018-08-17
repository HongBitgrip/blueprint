Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer", function(ContributionStatusContainer) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import ext.container.Container;
import com.coremedia.ui.components.ExtendedDisplayField;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ContributionStatusContainer extends ContributionStatusContainerBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.contributionStatusContainer";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){ContributionStatusContainer.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-contribution-status-container"));}/*;

    public*/function ContributionStatusContainer$(config/*:ContributionStatusContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase,{});
    var defaults_$1/*:ContributionStatusContainer*/ =AS3.cast(ContributionStatusContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_29_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_29_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_29_5_$1);
    var button_34_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_34_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase.EDIT_LAST_OR_NEXT_ID);
    AS3.setBindable(button_34_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'edit_last')));
    AS3.setBindable(button_34_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'edit_last_tooltip_empty'));
    AS3.setBindable(button_34_5_$1,"handler" ,AS3.bind( this,"processLastOrNext"));
    button_34_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_34_5_$1,"disabled" , true);
    var container_40_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_40_5_$1.flex = 1.0;
    var ui_ExtendedDisplayField_41_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase.TOOLBAR_STATUS_FIELD_ID);
    var displayField_42_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase.TOOLBAR_CREATION_DATE_ID);
    config_$1.items = [button_34_5_$1, container_40_5_$1, ui_ExtendedDisplayField_41_5_$1, displayField_42_5_$1];
    var ui_HorizontalSpacingPlugin_45_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_45_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    var ui_BEMPlugin_46_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_46_5_$1,"block" , ContributionStatusContainer.BLOCK);
    config_$1.plugins = [ui_HorizontalSpacingPlugin_45_5_$1, ui_BEMPlugin_46_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xaKL(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.contributionStatusContainer",
      constructor: ContributionStatusContainer$,
      super$xaKL: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      statics: {
        BLOCK: undefined,
        __initStatics__: function() {
          BLOCK$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
