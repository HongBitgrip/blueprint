Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainer", function(ContentInformationContainer) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindStyleClassPlugin;
import ext.form.field.DisplayField;
import com.coremedia.ui.exml.ValueExpression;
public class ContentInformationContainer extends ContentInformationContainerBase{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.util.AriaUtils;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.contentInformationContainer";

    public*/function ContentInformationContainer$(config/*:ContentInformationContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase,{});
    var defaults_$1/*:ContentInformationContainer*/ =AS3.cast(ContentInformationContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var layout_VBox_29_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(config_$1,"layout" , layout_VBox_29_5_$1);
    var button_32_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_32_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase.TARGET_BUTTON_ID);
    AS3.setBindable(button_32_5_$1,"margin" , "0 0 0 -6px");
    button_32_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT);
    button_32_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_32_5_$1,"handler" ,AS3.bind( this,"openTarget"));
    var ui_BindPropertyPlugin_38_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_38_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_38_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_38_9_$1.bindTo = this.getTargetTextValueExpression();
    var ui_BindPropertyPlugin_42_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_42_9_$1.componentProperty = "ariaLabel";
    ui_BindPropertyPlugin_42_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_42_9_$1.bindTo = this.getTargetAriaLabelValueExpression();
    var ui_BindStyleClassPlugin_46_9_$1/*:com.coremedia.ui.plugins.BindStyleClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindStyleClassPlugin,{});
    AS3.setBindable(ui_BindStyleClassPlugin_46_9_$1,"cls" , "content-btn-not-readable");
    ui_BindStyleClassPlugin_46_9_$1.bindTo = this.getTargetContentNotReadableVE();
    button_32_5_$1.plugins = [ui_BindPropertyPlugin_38_9_$1, ui_BindPropertyPlugin_42_9_$1, ui_BindStyleClassPlugin_46_9_$1];
    var displayField_50_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var ui_BindPropertyPlugin_52_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_52_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_52_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_52_9_$1.ifUndefined = "";
    var ui_ValueExpression_56_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_56_13_$1,"context" , AS3.getBindable(config,"contributionAdministration"));
    AS3.setBindable(ui_ValueExpression_56_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                                                com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                                com.coremedia.elastic.social.studio.model.ContributionPropertyNames.SUBJECT])));
    ui_BindPropertyPlugin_52_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_56_13_$1);
    displayField_50_5_$1.plugins = [ui_BindPropertyPlugin_52_9_$1];
    config_$1.items = [button_32_5_$1, displayField_50_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gE5a(config_$1);
  }/*

    [Bindable]
    public var contributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.contentInformationContainer",
      constructor: ContentInformationContainer$,
      super$gE5a: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {contributionAdministration: null},
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindStyleClassPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.util.AriaUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
