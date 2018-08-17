Ext.define("com.coremedia.cms.editor.sdk.actions.RenameTabContentAction", function(RenameTabContentAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class RenameTabContentAction extends RenameTabContentActionBase{

    public*/function RenameTabContentAction$(config/*:RenameTabContentAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase,{});
    var defaults_$1/*:RenameTabContentAction*/ =AS3.cast(RenameTabContentAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4Um3(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase",
      constructor: RenameTabContentAction$,
      super$4Um3: function() {
        com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.RenameTabContentActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
