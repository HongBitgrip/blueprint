Ext.define("com.coremedia.cms.editor.sdk.premular.CollapsiblePanel", function(CollapsiblePanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.ExpandPanelOnHoverPlugin;
import ext.layout.container.AnchorLayout;
import ext.form.Labelable;
import ext.panel.PanelHeader;
[PublicApi]
/**
 Common collapsible panel to be used in dialogs and components other than studio forms to ensure a unified layout.
 To make this panel non-collapsible set the config option header = "{false}".
 This panel has a grey background color and the collapse icon is on the left side.
 * /
public class CollapsiblePanel extends CollapsiblePanelBase{

    import com.coremedia.cms.editor.sdk.util.UIBehaviour;
    import com.coremedia.ui.skins.PanelSkin;

    /**
     * Set true to prevent title from being cut off if too long. Defaults to false.
     * /
    [Bindable]
    public var multilineTitle:Boolean = false;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collapsiblePanel";

    public*/function CollapsiblePanel$(config/*:CollapsiblePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase,{});
    var defaults_$1/*:CollapsiblePanel*/ =AS3.cast(CollapsiblePanel,{});
    AS3.setBindable(defaults_$1,"expandOnHover" , true);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.collapsible = true;
    config_$1.titleCollapse = true;
    config_$1.itemsLazyUntilEvent = "beforeexpand";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    var ui_ExpandPanelOnHoverPlugin_42_5_$1/*:com.coremedia.ui.plugins.ExpandPanelOnHoverPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ExpandPanelOnHoverPlugin,{});
    AS3.setBindable(ui_ExpandPanelOnHoverPlugin_42_5_$1,"activateOnHoverDDGroups" , AS3.getBindable(config,"expandOnHover") ? com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DD_GROUPS : []);
    AS3.setBindable(ui_ExpandPanelOnHoverPlugin_42_5_$1,"activateOnHoverDelay" , com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DELAY);
    config_$1.plugins = [ui_ExpandPanelOnHoverPlugin_42_5_$1];
    var layout_Anchor_46_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_46_5_$1.manageOverflow = false;
    AS3.setBindable(config_$1,"layout" , layout_Anchor_46_5_$1);
    var labelable_49_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_49_5_$1.labelSeparator = "";
    labelable_49_5_$1.labelAlign = "top";
    config_$1["defaultType"] = labelable_49_5_$1['xtype'];
    delete labelable_49_5_$1['xtype'];
    delete labelable_49_5_$1['xclass'];
    config_$1.defaults = labelable_49_5_$1;
    var header_53_5_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    AS3.setBindable(header_53_5_$1,"titlePosition" , 2.0);
    header_53_5_$1["focusableContainer"] = false;
    config_$1.header = header_53_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nyuy(config_$1);
  }/*

    /**
     If true hovering over a panel header will expand the panel if it is collapsed after a certain delay.
     * /
    [Bindable]
    public var expandOnHover:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collapsiblePanel",
      constructor: CollapsiblePanel$,
      super$nyuy: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        multilineTitle: false,
        expandOnHover: false
      },
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.Anchor",
        "Ext.panel.Header",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase",
        "com.coremedia.ui.plugins.ExpandPanelOnHoverPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.UIBehaviour"]
    };
});
