Ext.define("com.coremedia.personalization.ui.plugin.RepositoryPathObserver", function(RepositoryPathObserver) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.error.RemoteError;

import ext.Ext;
import ext.util.Observable;

import joo.debug;

/**
 * An {@link Observable} that retrieves periodically all documents of a specified type from a
 * repository path and makes them available as an {@link Array} via its value property.
 * /
internal class RepositoryPathObserver extends Observable {
  // name of the property containing the documents in the observed folder
  public static const VALUE_PROPERTY_NAME:String = 'value';

  // map of all active repository observers.
  private static const*/var intervalHandles$static/*:Object*/;/* =*/function intervalHandles$static_(){intervalHandles$static=( {});};function static$0(){  
  
  // abort polling if we get a remote error
  { // static initializer
    com.coremedia.cms.editor.sdk.editorContext.getRemoteErrorRegistry().registerErrorHandler(function(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
      if (error.status === 403 || error.status === 500) {
        if (joo.debug) {
          AS3.trace("[ERROR] handling error " + error + " raised by " + source);
        }
        for (var key/*:String*/ in intervalHandles$static){
          intervalHandles$static[key].destroy();
        }
      }
    });
  }}/*

  // keeps the contents retrieved by this observer instance
  private var folderContents:Bean;
  
  // the folder to observe
  private var folder:Content;

  // the interval handle to abort polling eventually 
  private var intervalHandle:Object;

  /**
   * @param path repository path to be observed. Uses slash-separated folder names.
   * @param contentType type of the content objects to observe in the folder.
   * @param pollingInterval interval between requests to the repository. In milliseconds.
   * @private
   * /
  public*/ function RepositoryPathObserver$(path/*:String*/, contentType/*:String*/, pollingInterval/*:int*/) {var this$=this;this.super$0jmc();
    this.folderContents$0jmc = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({value: []});
    this.folderContents$0jmc.addPropertyChangeListener(RepositoryPathObserver.VALUE_PROPERTY_NAME,AS3.bind( this,"valueChanged$0jmc"));
    
    com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(path, function observeFolder(c/*:Content*/, absolutePath/*:String*/, error/*:RemoteError*/)/*:void*/ {
      if (this$.folder$0jmc == null && c != null) {
        this$.folder$0jmc = c;
        if (joo.debug) {
          AS3.trace("[INFO] starting to observe CMS folder at '" + this$.folder$0jmc.getPath() + "'");
        }/*
        const*/var searchParams/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
        searchParams.folder = this$.folder$0jmc.getUriPath();
        searchParams['includeSubfolders'] = false;
        searchParams.contentType = [contentType];
        searchParams.filterQuery = ["isdeleted:false"];/*
        const*/var searchService/*:SearchService*/ = this$.folder$0jmc.getRepository().getSearchService();/*
        const*/var searchFunc/*:Function*/ = function()/* :void*/ {/*
          const*/var searchResult/*:SearchResult*/ = searchService.search(searchParams);
          searchResult.load(AS3.bind(this$,"setValue"));
        };
        this$.intervalHandle$0jmc = window.setInterval(searchFunc, pollingInterval);
        this$.registerInstance$0jmc();
        searchFunc();
      }
      if (error && error.status === 403) {
        error.setHandled(true);
      }
    });    
  }/*

  private*/ function registerInstance()/*:void*/ {
    intervalHandles$static[this.intervalHandle$0jmc] = this;
    if (joo.debug) {
      AS3.trace("[INFO] " + RepositoryPathObserver + " intervalHandles: " + intervalHandles$static);
    }
  }/*
  
  private*/ function valueChanged(ev/*:PropertyChangeEvent*/)/*:void*/ {
    this.fireEvent(RepositoryPathObserver.VALUE_PROPERTY_NAME,Ext.applyIf({bean:this},ev));
  }/*
  
  internal*/ function setValue(result/*:SearchResult*/)/*:void*/ {
    this.folderContents$0jmc.set(RepositoryPathObserver.VALUE_PROPERTY_NAME, result.getHits());
  }/*

  public*/ function getValue()/*:Array*/ {
    return this.folderContents$0jmc.get(RepositoryPathObserver.VALUE_PROPERTY_NAME);
  }/*
  
  internal*/ function clearInterval()/*:void*/ {
    if (this.intervalHandle$0jmc) {
      if (joo.debug) {
        AS3.trace("[INFO] unregistering repository path observer for path '" + this.folder$0jmc.getPath() + "'");
      }
      window.clearInterval(this.intervalHandle$0jmc);
    }
    delete intervalHandles$static[this.intervalHandle$0jmc];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      folderContents$0jmc: null,
      folder$0jmc: null,
      intervalHandle$0jmc: null,
      constructor: RepositoryPathObserver$,
      super$0jmc: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      registerInstance$0jmc: registerInstance,
      valueChanged$0jmc: valueChanged,
      setValue: setValue,
      getValue: getValue,
      clearInterval: clearInterval,
      statics: {
        VALUE_PROPERTY_NAME: 'value',
        intervalHandles: undefined,
        __initStatics__: function() {
          intervalHandles$static_();
          static$0();
        }
      },
      requires: [
        "AS3.trace",
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.search.SearchParameters",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
