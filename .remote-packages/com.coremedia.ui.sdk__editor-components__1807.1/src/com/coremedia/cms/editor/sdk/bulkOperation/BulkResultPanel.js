Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel", function(BulkResultPanel) {/*package com.coremedia.cms.editor.sdk.bulkOperation{
import com.coremedia.cms.editor.sdk.bulkOperation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
/** For bulk result panels. * /
public class BulkResultPanel extends BulkResultPanelBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bulkResultPanel";

    public*/function BulkResultPanel$(config/*:BulkResultPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase,{});
    var defaults_$1/*:BulkResultPanel*/ =AS3.cast(BulkResultPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , "y");
    var ui_VerticalSpacingPlugin_19_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_19_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_19_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PWwY(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bulkResultPanel",
      constructor: BulkResultPanel$,
      super$PWwY: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
