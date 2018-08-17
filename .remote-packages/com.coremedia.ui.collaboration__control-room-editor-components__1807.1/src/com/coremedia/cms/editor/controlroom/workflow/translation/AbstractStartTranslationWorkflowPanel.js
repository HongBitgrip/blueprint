Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel", function(AbstractStartTranslationWorkflowPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
import ext.form.Labelable;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
[PublicApi]
/**
 <p>
 The base class for panels that control the creation of translation processes.
 An input field for the process subject is provided by the framework
 and need not be repeated by the defined panels.
 </p>
 <p>
 Subclasses must override the methods <code>initializeContents</code> and
 <code>getProcessVariableMappings</code>
 for receiving the set of contents for which a translation has been requested
 and for defining the set of processes to create.
 Subclasses may optionally override the method <code>isStartButtonDisabled</code>
 if the start button of the translation process creation window should
 be disabled at times.
 </p>
 * /
public class AbstractStartTranslationWorkflowPanel extends AbstractStartTranslationWorkflowPanelBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.abstractStartTranslationWorkflowPanel";

    public*/function AbstractStartTranslationWorkflowPanel$(config/*:AbstractStartTranslationWorkflowPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase,{});
    var defaults_$1/*:AbstractStartTranslationWorkflowPanel*/ =AS3.cast(AbstractStartTranslationWorkflowPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_Anchor_35_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_35_5_$1.anchor = "100%";
    AS3.setBindable(config_$1,"layout" , layout_Anchor_35_5_$1);
    var labelable_38_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_38_5_$1.labelSeparator = "";
    labelable_38_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_38_5_$1['xtype'];
    delete labelable_38_5_$1['xtype'];
    delete labelable_38_5_$1['xclass'];
    config_$1.defaults = labelable_38_5_$1;
    var ui_VerticalSpacingPlugin_42_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_42_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_42_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$G5Y4(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.abstractStartTranslationWorkflowPanel",
      constructor: AbstractStartTranslationWorkflowPanel$,
      super$G5Y4: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
