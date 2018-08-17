Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanel", function(TwoStepPublicationPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.publication{
import com.coremedia.cms.editor.controlroom.workflow.publication.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.BoundRadioGroup;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.IconDisplayField;
/**
 A diagram of radio buttons and arrows to display the current and next steps of a studio-two-step-publication workflow.
 * /
public class TwoStepPublicationPanel extends TwoStepPublicationPanelBase{

    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.twoStepPublicationPanel";

    public*/function TwoStepPublicationPanel$(config/*:TwoStepPublicationPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase,{});
    var defaults_$1/*:TwoStepPublicationPanel*/ =AS3.cast(TwoStepPublicationPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BoundRadioGroup_29_5_$1/*:com.coremedia.ui.components.BoundRadioGroup*/ =AS3.cast(com.coremedia.ui.components.BoundRadioGroup,{});
    ui_BoundRadioGroup_29_5_$1.columns = 1;
    AS3.setBindable(ui_BoundRadioGroup_29_5_$1,"bindTo" , this.getNextStateValueExpression());
    var radio_32_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_32_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMPOSE_TASK_NAME);
    radio_32_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_35_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_35_13_$1.bindTo = this.getComposeLabelValueExpression();
    ui_BindPropertyPlugin_35_13_$1.componentProperty = "boxLabel";
    var ui_BindPropertyPlugin_37_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_37_13_$1.bindTo = this.getComposeDisabledValueExpression();
    ui_BindPropertyPlugin_37_13_$1.componentProperty = "disabled";
    radio_32_9_$1.plugins = [ui_BindPropertyPlugin_35_13_$1, ui_BindPropertyPlugin_37_13_$1];
    var ui_IconDisplayField_41_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_41_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.INFO.getSkin());
    AS3.setBindable(ui_IconDisplayField_41_9_$1,"margin" , "0 0 0 -1");
    var ui_BindPropertyPlugin_44_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_44_13_$1.bindTo = this.getComposeApproveArrowValueExpression();
    ui_BindPropertyPlugin_44_13_$1.componentProperty = "iconCls";
    ui_IconDisplayField_41_9_$1.plugins = [ui_BindPropertyPlugin_44_13_$1];
    var radio_48_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_48_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.APPROVE_TASK_NAME);
    radio_48_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_51_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_51_13_$1.bindTo = this.getApproveLabelValueExpression();
    ui_BindPropertyPlugin_51_13_$1.componentProperty = "boxLabel";
    var ui_BindPropertyPlugin_53_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_53_13_$1.bindTo = this.getApproveDisabledValueExpression();
    ui_BindPropertyPlugin_53_13_$1.componentProperty = "disabled";
    radio_48_9_$1.plugins = [ui_BindPropertyPlugin_51_13_$1, ui_BindPropertyPlugin_53_13_$1];
    var ui_IconDisplayField_57_9_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_57_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.INFO.getSkin());
    AS3.setBindable(ui_IconDisplayField_57_9_$1,"margin" , "0 0 0 -1");
    AS3.setBindable(ui_IconDisplayField_57_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.prioritize_down));
    var radio_60_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_60_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.PUBLISH_TASK_NAME);
    radio_60_9_$1.hideLabel = true;
    var ui_BindPropertyPlugin_63_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_63_13_$1.bindTo = this.getPublishLabelValueExpression();
    ui_BindPropertyPlugin_63_13_$1.componentProperty = "boxLabel";
    var ui_BindPropertyPlugin_65_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_65_13_$1.bindTo = this.getPublishDisabledValueExpression();
    ui_BindPropertyPlugin_65_13_$1.componentProperty = "disabled";
    radio_60_9_$1.plugins = [ui_BindPropertyPlugin_63_13_$1, ui_BindPropertyPlugin_65_13_$1];
    ui_BoundRadioGroup_29_5_$1.items = [radio_32_9_$1, ui_IconDisplayField_41_9_$1, radio_48_9_$1, ui_IconDisplayField_57_9_$1, radio_60_9_$1];
    config_$1.items = [ui_BoundRadioGroup_29_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_2Mx(config_$1);
  }/*

    /**
     * The ValueExpression that contains the next state name.
     * /
    [Bindable]
    public var nextStateValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.twoStepPublicationPanel",
      constructor: TwoStepPublicationPanel$,
      super$_2Mx: function() {
        com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {nextStateValueExpression: null},
      requires: [
        "Ext.form.field.Radio",
        "com.coremedia.cms.editor.controlroom.workflow.publication.TwoStepPublicationPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.BoundRadioGroup",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"]
    };
});
