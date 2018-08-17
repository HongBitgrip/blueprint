Ext.define("com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction", function(ShowHiddenItemsAction) {/*package com.coremedia.cms.editor.sdk.navigationtree.actions{
import com.coremedia.cms.editor.sdk.navigationtree.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class ShowHiddenItemsAction extends ShowHiddenItemsActionBase{

    public*/function ShowHiddenItemsAction$(config/*:ShowHiddenItemsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase,{});
    var defaults_$1/*:ShowHiddenItemsAction*/ =AS3.cast(ShowHiddenItemsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Jjry(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowHiddenItemsAction$,
      super$Jjry: function() {
        com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
