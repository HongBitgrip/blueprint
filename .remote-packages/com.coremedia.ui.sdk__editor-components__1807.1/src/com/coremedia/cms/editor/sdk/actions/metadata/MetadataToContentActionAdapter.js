Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter", function(MetadataToContentActionAdapter) {/*package com.coremedia.cms.editor.sdk.actions.metadata{
import com.coremedia.cms.editor.sdk.actions.metadata.*;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adapter that implements a MetadataAction based on a backing ContentAction.

 All critical methods are delegated to the backing ContentAction after extracting
 a content from the underlying metadata. If no content can be obtained from
 the MetadataTreeNode (or one of it's parents if useParentNode is enabled), the
 backing content action is configured with an empty contents array.

 @see com.coremedia.cms.editor.sdk.config.metadataToContentActionAdapter
 @see com.coremedia.cms.editor.sdk.actions.ContentAction

 * /
public class MetadataToContentActionAdapter extends MetadataToContentActionAdapterBase{

    public*/function MetadataToContentActionAdapter$(config/*:MetadataToContentActionAdapter = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase,{});
    var defaults_$1/*:MetadataToContentActionAdapter*/ =AS3.cast(MetadataToContentActionAdapter,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$UIL_(config_$1);
  }/*

    /**
     Backing ContentAction.
     * /
    [Bindable]
    public var backingAction:com.coremedia.cms.editor.sdk.actions.ContentAction;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase",
      metadata: {"": ["PublicApi"]},
      constructor: MetadataToContentActionAdapter$,
      super$UIL_: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase.prototype.constructor.apply(this, arguments);
      },
      config: {backingAction: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
