Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchState", function(SearchState) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.Content;

import ext.Ext;

/**
 * A search state can be used to change the settings of the
 * collection view that influence which documents are shown
 * in the search result.
 * /
[PublicApi]
public class SearchState {

  public*/ function SearchState$(config/*:SearchState = null*/) {if(arguments.length<=0)config=null;
    Ext.apply(this, config);

    this.filters = config && config.filters ? Ext.apply({}, config.filters) : {};
  }/*

  /**
   * Set the state of the filter with the given id. Filters to be configured in this way
   * are added to the object stored in the filter field of this collection view state.
   *
   * @param filterId the id of the filter to configure
   * @param state the filter configuration
   *
   * @see #filters
   * /
  public*/ function setFilter(filterId/*:String*/, state/*:Object*/)/*:void*/ {
    this.filters[filterId] = state;
  }/*

  /**
   Configuration of filters, typically used for custom filters.
   Each member of this array must be an instance of the class SearchFilterState,
   which is configured in EXML by using the &lt;searchFilterState&gt;
   element with untyped attributes or an element for a specific subclass
   of SearchFilterState.

   @see com.coremedia.cms.editor.sdk.config.searchFilterState
   @see com.coremedia.cms.editor.sdk.collectionview.SearchFilterState
   * /
  public native function get filters():Object;

  /**
   * @private
   * /
  public native function set filters(value:Object):void;

  /**
   * The folder that is then selected in the collection and used as the search filter
   * Default the root folder
   * /
  public native function get folder():Content;

  /**
   * @private
   * /
  public native function set folder(value:Content):void;

  /**
   The search text that is used for the collection view.
   Default "".
   * /
  public native function get searchText():String;

  /**
   * @private
   * /
  public native function set searchText(value:String):void;

  /**
   The content type that is used in the content type filter.
   Default "Content_".
   * /
  public native function get contentType():String;

  /**
   * @private
   * /
  public native function set contentType(value:String):void;

  /**
   Value for the inProduction filter.
   Default true.
   * /
  public native function get inProduction():Boolean;

  /**
   * @private
   * /
  public native function set inProduction(value:Boolean):void;

  /**
   Value for the editedByMe filter.
   Default true.
   * /
  public native function get editedByMe():Boolean;

  /**
   * @private
   * /
  public native function set editedByMe(value:Boolean):void;

  /**
   Value for the editedByOthers filter.
   Default true.
   * /
  public native function get editedByOthers():Boolean;

  /**
   * @private
   * /
  public native function set editedByOthers(value:Boolean):void;

  /**
   Value for the notEdited filter.
   Default true.
   * /
  public native function get notEdited():Boolean;

  /**
   * @private
   * /
  public native function set notEdited(value:Boolean):void;

  /**
   Value for the approved filter.
   Default true.
   * /
  public native function get approved():Boolean;

  /**
   * @private
   * /
  public native function set approved(value:Boolean):void;

  /**
   Value for the published filter.
   Default true.
   * /
  public native function get published():Boolean;

  /**
   * @private
   * /
  public native function set published(value:Boolean):void;

  /**
   Value for the deleted filter.
   Default false.
   * /
  public native function get deleted():Boolean;

  /**
   * @private
   * /
  public native function set deleted(value:Boolean):void;

  /**
   Value for the lastEditedBy filter. One of the constants LAST_EDITED_BY_ME and LAST_EDITED_BY_ANYONE.
   Default LAST_EDITED_BY_ANYONE.

   @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LAST_EDITED_BY_ME
   @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LAST_EDITED_BY_ANYONE
   * /
  public native function get lastEditedBy():String;

  /**
   * @private
   * /
  public native function set lastEditedBy(value:String):void;


  /**
   The order by clause.
   Default "freshness desc".
   * /
  public native function get orderBy():String;

  public native function set orderBy(value:String):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: SearchState$,
      setFilter: setFilter,
      requires: ["Ext"]
    };
});
