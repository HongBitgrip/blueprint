Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction", function(MetadataBeanAction) {/*package com.coremedia.cms.editor.sdk.actions.metadata{
import com.coremedia.cms.editor.sdk.actions.metadata.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Config class for a MetadataAction that works on a bean metadata node. Provides convenience
 functionality to extract a bean from the default metadata property.

 @see com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction

 * /
public class MetadataBeanAction extends MetadataBeanActionBase{

    public*/function MetadataBeanAction$(config/*:MetadataBeanAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase,{});
    var defaults_$1/*:MetadataBeanAction*/ =AS3.cast(MetadataBeanAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$TOYf(config_$1);
  }/*

    /**
     Whether to look for beans in the default property of parent metadata nodes
     * /
    [Bindable]
    public var useParentNode:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: MetadataBeanAction$,
      super$TOYf: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {useParentNode: false},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
