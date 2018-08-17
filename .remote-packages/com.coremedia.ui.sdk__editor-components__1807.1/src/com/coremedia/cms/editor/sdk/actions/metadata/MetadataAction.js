Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction", function(MetadataAction) {/*package com.coremedia.cms.editor.sdk.actions.metadata{
import com.coremedia.cms.editor.sdk.actions.metadata.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Config class for an abstract ext.Action that performs a read-only operation on the configured metadata.

 <p>The metadata can be configured using one of the following config parameters:</p>
 <ul>
 <li><code>metadataVariableName</code>: Inject the metadata as context parameter.</li>
 <li><code>metadata</code>: Configure the metadata directly.</li>
 </ul>

 @see com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction

 * /
public class MetadataAction extends MetadataActionBase{

    import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;

    public*/function MetadataAction$(config/*:MetadataAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase,{});
    var defaults_$1/*:MetadataAction*/ =AS3.cast(MetadataAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CjPP(config_$1);
  }/*

    /**
     * the metadata tree node on which the action will perform
     *
     * @private because MetadataTreeNode is not public API
     * /
    [Bindable]
    public var metadata:MetadataTreeNode;

    /**
     The name of the context variable to be injected to the metadata property.
     The context value should be a metadata tree node.
     * /
    [Bindable]
    public var metadataVariableName:String;


    /**
     Determines whether the action's components (if any) should be hidden when the action is disabled.
     * /
    [Bindable]
    public var hideOnDisable:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: MetadataAction$,
      super$CjPP: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        metadata: null,
        metadataVariableName: null,
        hideOnDisable: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
