Ext.define("com.coremedia.personalization.ui.plugin.MultipleRepositoryPathsObserver", function(MultipleRepositoryPathsObserver) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;

import ext.Ext;
import ext.util.Observable;

/**
 * An {@link Observable} that retrieves the contents of several repository paths. The contents are provided
 * as an {@link Array} of {@link Content} objects via the value property.
 * /
internal class MultipleRepositoryPathsObserver extends Observable {
  private static const*/var DEFAULT_POLLING_INTERVAL$static/*:int*/ = 20000;/* // 20s

  // bean containing the list of contents visible by this observer
  public static const VALUE_PROPERTY_NAME:String = 'value';
  private const folderContents:Bean =*/function folderContents_(){this.folderContents$EeO9=( com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({VALUE_PROPERTY_NAME: []}));}/*;

  // maps paths (strings) to corresponding instances of RepositoryPathObserver
  private const pathObservers:Object =*/function pathObservers_(){this.pathObservers$EeO9=( {});}/*;

  private var documentType:String;
  private var pollingInterval:int;

  // maps coremedia-ids (URIs) to the paths (strings) they were retrieved from
  private var idToPathTable:Object =*/function idToPathTable_(){this.idToPathTable$EeO9=( {});}/*;

  /**
   * Constructs a new observer.
   *
   * @param documentType only documents of this type are retrieved from the configured repository paths
   * @param pollingInterval the time interval in ms in which the repository is to be polled for changes
   * /
  public*/ function MultipleRepositoryPathsObserver$(documentType/*:String*/, pollingInterval/*:int*/) {this.super$EeO9();folderContents_.call(this);pathObservers_.call(this);idToPathTable_.call(this);
    this.documentType$EeO9 = documentType;
    this.pollingInterval$EeO9 = pollingInterval || DEFAULT_POLLING_INTERVAL$static;

    this.folderContents$EeO9.addPropertyChangeListener(MultipleRepositoryPathsObserver.VALUE_PROPERTY_NAME,AS3.bind(
            this,"valueChanged$EeO9"));
  }/*
  
  private*/ function valueChanged(ev/*:PropertyChangeEvent*/)/*:void*/ {
    this.fireEvent(MultipleRepositoryPathsObserver.VALUE_PROPERTY_NAME,Ext.applyIf({bean:this},ev));
  }/*

  public*/ function getValue()/*:Array*/ {
    return this.folderContents$EeO9.get(MultipleRepositoryPathsObserver.VALUE_PROPERTY_NAME);
  }/*

  public*/ function getPathOf(cmId/*:String*/)/*:String*/ {
    return this.idToPathTable$EeO9[cmId];
  }/*

  public*/ function addPath(path/*:String*/)/*:void*/ {
    if (!this.pathObservers$EeO9[path]) {
      this.pathObservers$EeO9[path] = com.coremedia.personalization.ui.plugin.RepositoryPathObserverManager.getInstance(path, this.documentType$EeO9, this.pollingInterval$EeO9);
      this.pathObservers$EeO9[path].addListener(com.coremedia.personalization.ui.plugin.RepositoryPathObserver.VALUE_PROPERTY_NAME,AS3.bind( this,"onObservedFolderContentsChanged$EeO9"));
      this.onObservedFolderContentsChanged$EeO9();
    }
  }/*

  public*/ function removePath(path/*:String*/)/*:void*/ {
    if (this.removePathObserver$EeO9(path)) {
      this.onObservedFolderContentsChanged$EeO9();
    }
  }/*

  private*/ function removePathObserver(path/*:String*/)/*:Boolean*/ {/*
    const*/var pathObserver/*:RepositoryPathObserver*/ = this.pathObservers$EeO9[path];
    if (pathObserver) {
      pathObserver.removeListener(com.coremedia.personalization.ui.plugin.RepositoryPathObserver.VALUE_PROPERTY_NAME,AS3.bind( this,"onObservedFolderContentsChanged$EeO9"), this);
      com.coremedia.personalization.ui.plugin.RepositoryPathObserverManager.releaseInstance(path, this.documentType$EeO9, this.pollingInterval$EeO9);
      this.pathObservers$EeO9[path] = undefined;
      delete this.pathObservers$EeO9[path];
      return true;
    } else {
      return false;
    }
  }/*

  public*/ function clearPaths()/*:void*/ {
    for (var path/*:String*/ in this.pathObservers$EeO9) {
      this.removePathObserver$EeO9(path);
    }
    this.onObservedFolderContentsChanged$EeO9();
  }/*

  private*/ function onObservedFolderContentsChanged()/*:void*/ {
    var combinedValues/*:Array*/ = [];
    this.idToPathTable$EeO9 = {};
    for (var path/*:String*/ in this.pathObservers$EeO9) {
      if (this.pathObservers$EeO9[path]) {/*
        const*/var v/*:Array*/ = this.pathObservers$EeO9[path].getValue();
        combinedValues = combinedValues.concat(v);
        for (var i/*:int*/ = 0; i < v.length; ++i) {
          this.idToPathTable$EeO9[(AS3.as(v[i],  com.coremedia.cap.content.Content)).getId()] = path;
        }
      }
    }
    this.folderContents$EeO9.set(MultipleRepositoryPathsObserver.VALUE_PROPERTY_NAME, combinedValues);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      documentType$EeO9: null,
      pollingInterval$EeO9: 0,
      constructor: MultipleRepositoryPathsObserver$,
      super$EeO9: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      valueChanged$EeO9: valueChanged,
      getValue: getValue,
      getPathOf: getPathOf,
      addPath: addPath,
      removePath: removePath,
      removePathObserver$EeO9: removePathObserver,
      clearPaths: clearPaths,
      onObservedFolderContentsChanged$EeO9: onObservedFolderContentsChanged,
      statics: {VALUE_PROPERTY_NAME: 'value'},
      requires: [
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.editorContext"
      ],
      uses: [
        "com.coremedia.personalization.ui.plugin.RepositoryPathObserver",
        "com.coremedia.personalization.ui.plugin.RepositoryPathObserverManager"
      ]
    };
});
