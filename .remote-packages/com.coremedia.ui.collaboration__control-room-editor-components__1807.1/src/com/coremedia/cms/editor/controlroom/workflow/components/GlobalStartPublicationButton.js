Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.GlobalStartPublicationButton", function(GlobalStartPublicationButton) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.ui.components.IconButton;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction;
import com.coremedia.ui.plugins.BadgePlugin;
import com.coremedia.ui.plugins.BEMPlugin;
public class GlobalStartPublicationButton extends IconButton{

    import com.coremedia.collaboration.controlroom.rest.CapListRepository;
    import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public*/function GlobalStartPublicationButton$(config/*:GlobalStartPublicationButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var defaults_$1/*:GlobalStartPublicationButton*/ =AS3.cast(GlobalStartPublicationButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_GlobalShowStartPublicationWorkflowWindowAction_24_5_$1/*:com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction,{});
    config_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction(collab_GlobalShowStartPublicationWorkflowWindowAction_24_5_$1);
    var ui_BadgePlugin_27_5_$1/*:com.coremedia.ui.plugins.BadgePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BadgePlugin,{});
    ui_BadgePlugin_27_5_$1.bindTo = this.getEditedContentVE();
    ui_BadgePlugin_27_5_$1.maxValue = 99.0;
    ui_BadgePlugin_27_5_$1.x = 2.0;
    ui_BadgePlugin_27_5_$1.y = -6.0;
    var ui_BEMPlugin_31_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_31_5_$1,"block" , "cm-publication-button");
    config_$1.plugins = [ui_BadgePlugin_27_5_$1, ui_BEMPlugin_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wgf4(config_$1);
  }/*

    protected*/ function getEditedContentVE()/*:ValueExpression*/ {
      return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var capListRepository/*:CapListRepository*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance();
        return capListRepository ? capListRepository.getEditedContents().getItems() : [];
      });
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      constructor: GlobalStartPublicationButton$,
      super$wgf4: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      getEditedContentVE: getEditedContentVE,
      requires: [
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BadgePlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction"]
    };
});
