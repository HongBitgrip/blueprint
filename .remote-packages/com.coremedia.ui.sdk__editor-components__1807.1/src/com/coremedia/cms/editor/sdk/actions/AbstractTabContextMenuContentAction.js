Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction", function(AbstractTabContextMenuContentAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AbstractTabContextMenuContentAction extends AbstractTabContextMenuContentActionBase{

    public*/function AbstractTabContextMenuContentAction$(config/*:AbstractTabContextMenuContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase,{});
    var defaults_$1/*:AbstractTabContextMenuContentAction*/ =AS3.cast(AbstractTabContextMenuContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7itf(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractTabContextMenuContentAction$,
      super$7itf: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
