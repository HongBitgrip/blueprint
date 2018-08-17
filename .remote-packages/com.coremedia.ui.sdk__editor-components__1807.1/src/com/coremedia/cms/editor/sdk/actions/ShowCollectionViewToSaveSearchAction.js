Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction", function(ShowCollectionViewToSaveSearchAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class ShowCollectionViewToSaveSearchAction extends ShowCollectionViewToSaveSearchActionBase{

    public*/function ShowCollectionViewToSaveSearchAction$(config/*:ShowCollectionViewToSaveSearchAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase,{});
    var defaults_$1/*:ShowCollectionViewToSaveSearchAction*/ =AS3.cast(ShowCollectionViewToSaveSearchAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"preserveFilter" , false);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YNw1(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase",
      constructor: ShowCollectionViewToSaveSearchAction$,
      super$YNw1: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
