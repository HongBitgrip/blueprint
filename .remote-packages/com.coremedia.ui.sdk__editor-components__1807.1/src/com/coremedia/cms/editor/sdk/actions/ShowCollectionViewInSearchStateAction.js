Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction", function(ShowCollectionViewInSearchStateAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 This action can be used to open the collection view in search mode
 showing a specific search state including the main state (search string,
 document filter) as well as the states of specific filters.
 * /
public class ShowCollectionViewInSearchStateAction extends ShowCollectionViewInSearchStateActionBase{

    public*/function ShowCollectionViewInSearchStateAction$(config/*:ShowCollectionViewInSearchStateAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase,{});
    var defaults_$1/*:ShowCollectionViewInSearchStateAction*/ =AS3.cast(ShowCollectionViewInSearchStateAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6THF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowCollectionViewInSearchStateAction$,
      super$6THF: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
