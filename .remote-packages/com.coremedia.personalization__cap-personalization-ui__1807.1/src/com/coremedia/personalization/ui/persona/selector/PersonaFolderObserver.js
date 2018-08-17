Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaFolderObserver", function(PersonaFolderObserver) {/*package com.coremedia.personalization.ui.persona.selector {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cap.content.search.SearchService;

import ext.util.Observable;

public class PersonaFolderObserver extends Observable {

  private var path:String;
  private var contentType:String;

  public*/ function PersonaFolderObserver$(path/*:String*/, contentType/*:String*/) {this.super$xD0T();
    this.path$xD0T = path;
    this.contentType$xD0T = contentType;
  }/*

  /**
   * Finds the Personas. Therefore, a contentRepository search is executed from the given path for the given contentType.
   *
   * @param callback a function that is called when the search result is available (when there are personas found),
   * receiving the <code>SearchResult</code> found by a path lookup from the given folder (constructor param),
   * and the searched folder as <code>Content</code>.
   * Signature: <code>function(result:SearchResult, folder:Content):void</code>
   * /
  public*/ function find(callback/*:Function*/)/*:void*/ {
    this.addPersonasFromFolder$xD0T(callback);
  }/*

  private*/ function addPersonasFromFolder(callback/*:Function*/)/*:void*/ {var this$=this;
    com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(this.path$xD0T, function getFolderChildren(folder/*:Content*/)/*:void*/ {
      if (folder != null) {/*
        const*/var searchParams/*:SearchParameters*/ = AS3.cast(com.coremedia.cap.content.search.SearchParameters,{});
        searchParams.folder = folder.getUriPath();
        searchParams.includeSubfolders = false;
        searchParams.contentType = [this$.contentType$xD0T];
        searchParams.filterQuery = ["isdeleted:false"];
        this$.doFolderSearch$xD0T(folder, searchParams, callback);
      } else {
        callback();
      }
    });
  }/*

  private*/ function doFolderSearch(folder/*:Content*/, searchParams/*:SearchParameters*/, callback/*:Function*/)/*:void*/ {/*
    const*/var searchService/*:SearchService*/ = folder.getRepository().getSearchService();/*
    const*/var searchResult/*:SearchResult*/ = searchService.search(searchParams);
    searchResult.load(function (result/*:SearchResult*/)/*:void*/ {
      callback(result, folder);


    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      path$xD0T: null,
      contentType$xD0T: null,
      constructor: PersonaFolderObserver$,
      super$xD0T: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      find: find,
      addPersonasFromFolder$xD0T: addPersonasFromFolder,
      doFolderSearch$xD0T: doFolderSearch,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.search.SearchParameters"
      ]
    };
});
