Ext.define("com.coremedia.ui.actions.AbstractTabContextMenuAction", function(AbstractTabContextMenuAction) {/*package com.coremedia.ui.actions{
import com.coremedia.ui.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AbstractTabContextMenuAction extends AbstractTabContextMenuActionBase{

    public*/function AbstractTabContextMenuAction$(config/*:AbstractTabContextMenuAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.actions.AbstractTabContextMenuActionBase*/ =AS3.cast(com.coremedia.ui.actions.AbstractTabContextMenuActionBase,{});
    var defaults_$1/*:AbstractTabContextMenuAction*/ =AS3.cast(AbstractTabContextMenuAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CFN6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.AbstractTabContextMenuActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractTabContextMenuAction$,
      super$CFN6: function() {
        com.coremedia.ui.actions.AbstractTabContextMenuActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.actions.AbstractTabContextMenuActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
