Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataServiceImpl", function(MetadataServiceImpl) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import com.coremedia.ui.data.dependencies.DependencyTracker;

import ext.util.Observable;

/**
 * Fires after the metadata was set.
 * /
[Event(name = "metadatachanged")] // NOSONAR - no type

public class MetadataServiceImpl extends Observable implements IMetadataService {

  private var rawMetadata:Object;

  private static const*/var METADATACHANGED_EVENT_NAME$static/*:String*/ = "metadatachanged";/*

  public*/ function MetadataServiceImpl$() {this.super$_Jr7();
  }/*

  public*/ function setRawMetadata(cmMetadata/*:Object*/)/*:void*/ {
    this.rawMetadata$_Jr7 = cmMetadata;
    this.fireEvent(METADATACHANGED_EVENT_NAME$static);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getMetadataTree(filterProperties/*:Array = null*/)/*:MetadataTree*/ {if(arguments.length<=0)filterProperties=null;
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, METADATACHANGED_EVENT_NAME$static);
    return new com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree(this.rawMetadata$_Jr7, filterProperties);
  }/*

  public*/ function getTransformedMetadataTree(rawNodeTransformer/*:Function*/)/*:MetadataTree*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, METADATACHANGED_EVENT_NAME$static);
    return new com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree(this.rawMetadata$_Jr7, null, rawNodeTransformer);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService"],
      metadata: {"": [
        "Event",
        [
          "name",
          "metadatachanged"
        ]
      ]},
      rawMetadata$_Jr7: null,
      constructor: MetadataServiceImpl$,
      super$_Jr7: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      setRawMetadata: setRawMetadata,
      getMetadataTree: getMetadataTree,
      getTransformedMetadataTree: getTransformedMetadataTree,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree"]
    };
});
