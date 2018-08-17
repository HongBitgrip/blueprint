Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowPanelBadgePlugin", function(WorkflowPanelBadgePlugin) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.ui.plugins.BadgePlugin;
import net.jangaroo.ext.Exml;

public class WorkflowPanelBadgePlugin extends BadgePlugin{

    import com.coremedia.ui.plugins.BadgePlugin;

    public*/function WorkflowPanelBadgePlugin$(config/*:BadgePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.plugins.BadgePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BadgePlugin,{});
    var defaults_$1/*:WorkflowPanelBadgePlugin*/ =AS3.cast(WorkflowPanelBadgePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.bindTo = AS3.getBindable(config,"cmp","DUMMY")['card'].badgeValueExpression;
    config_$1.x = 2.0;
    config_$1.y = -6.0;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KoSa(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BadgePlugin",
      constructor: WorkflowPanelBadgePlugin$,
      super$KoSa: function() {
        com.coremedia.ui.plugins.BadgePlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.BadgePlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
