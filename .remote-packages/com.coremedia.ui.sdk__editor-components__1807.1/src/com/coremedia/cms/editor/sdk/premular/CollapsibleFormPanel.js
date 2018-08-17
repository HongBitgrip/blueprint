Ext.define("com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel", function(CollapsibleFormPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FormLayout;
import ext.form.Labelable;
[PublicApi]
/**
 A collapsible panel to be used with form fields.
 * /
public class CollapsibleFormPanel extends CollapsiblePanel{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collapsibleFormPanel";

    public*/function CollapsibleFormPanel$(config/*:CollapsibleFormPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    var defaults_$1/*:CollapsibleFormPanel*/ =AS3.cast(CollapsibleFormPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_Form_18_5_$1/*:ext.layout.container.FormLayout*/ =AS3.cast(Ext.layout.container.Form,{});
    layout_Form_18_5_$1.manageOverflow = true;
    AS3.setBindable(config_$1,"layout" , layout_Form_18_5_$1);
    var labelable_22_5_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_22_5_$1.labelSeparator = ":";
    labelable_22_5_$1.labelAlign = "left";
    config_$1["defaultType"] = labelable_22_5_$1['xtype'];
    delete labelable_22_5_$1['xtype'];
    delete labelable_22_5_$1['xclass'];
    config_$1.defaults = labelable_22_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1K$O(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collapsibleFormPanel",
      constructor: CollapsibleFormPanel$,
      super$1K$O: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.Labelable",
        "Ext.layout.container.Form",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "net.jangaroo.ext.Exml"
      ]
    };
});
