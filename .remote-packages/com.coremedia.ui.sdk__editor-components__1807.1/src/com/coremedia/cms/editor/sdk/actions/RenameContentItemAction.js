Ext.define("com.coremedia.cms.editor.sdk.actions.RenameContentItemAction", function(RenameContentItemAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class RenameContentItemAction extends RenameContentItemActionBase{

    public*/function RenameContentItemAction$(config/*:RenameContentItemAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase,{});
    var defaults_$1/*:RenameContentItemAction*/ =AS3.cast(RenameContentItemAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VwWP(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase",
      constructor: RenameContentItemAction$,
      super$VwWP: function() {
        com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.RenameContentItemActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
