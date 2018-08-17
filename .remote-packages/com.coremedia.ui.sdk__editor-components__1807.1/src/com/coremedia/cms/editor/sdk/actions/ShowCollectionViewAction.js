Ext.define("com.coremedia.cms.editor.sdk.actions.ShowCollectionViewAction", function(ShowCollectionViewAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 This action can be used to open the collection view showing a search result.
 The appearance of the collection view can be controlled with several properties of this action.
 * /
public class ShowCollectionViewAction extends ShowCollectionViewActionBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;

    /**
     * Constant for lastEditedBy property. Indicates that only content last edited
     * by the current user should be displayed.
     * @see com.coremedia.cms.editor.sdk.config.showCollectionViewAction#lastEditedBy()
     * /
    public static const LAST_EDITED_BY_ME:String =*/function LAST_EDITED_BY_ME$static_(){ShowCollectionViewAction.LAST_EDITED_BY_ME=( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LAST_EDITED_BY_ME);}/*;

    /**
     * Constant for lastEditedBy property. Indicates that no special restrictions
     * on the search result apply.
     * @see com.coremedia.cms.editor.sdk.config.showCollectionViewAction#lastEditedBy()
     * /
    public static const LAST_EDITED_BY_ANYONE:String =*/function LAST_EDITED_BY_ANYONE$static_(){ShowCollectionViewAction.LAST_EDITED_BY_ANYONE=( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LAST_EDITED_BY_ANYONE);}/*;

    public*/function ShowCollectionViewAction$(config/*:ShowCollectionViewAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase,{});
    var defaults_$1/*:ShowCollectionViewAction*/ =AS3.cast(ShowCollectionViewAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aMI1(config_$1);
  }/*

    /**
     * The folder that is then selected in the collection and used as the search filter
     * Default the root folder
     * /
    [Bindable]
    public var folder:Content;

    /**
     Set true to preserve the filter of the collection. Only the specified filter will be changed.
     Default false.
     * /
    [Bindable]
    public var preserveFilter:Boolean;


    /**
     The search text that is used for the collection view.
     Default "".
     * /
    [Bindable]
    public var searchText:String;


    /**
     The content type that is used in the content type filter.
     Default "Document_".
     * /
    [Bindable]
    public var contentType:String;


    /**
     The view mode that is used.
     Default "list".

     @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
     @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
     * /
    [Bindable]
    public var view:String;


    /**
     Value for the inProduction filter.
     Default true.
     * /
    [Bindable]
    public var inProduction:Boolean;


    /**
     Value for the editedByMe filter.
     Default true.
     * /
    [Bindable]
    public var editedByMe:Boolean;


    /**
     Value for the editedByOthers filter.
     Default true.
     * /
    [Bindable]
    public var editedByOthers:Boolean;


    /**
     Value for the notEdited filter.
     Default true.
     * /
    [Bindable]
    public var notEdited:Boolean;


    /**
     Value for the approved filter.
     Default true.
     * /
    [Bindable]
    public var approved:Boolean;


    /**
     Value for the published filter.
     Default true.
     * /
    [Bindable]
    public var published:Boolean;


    /**
     Value for the lastEditedBy filter. One of the constants LAST_EDITED_BY_ME and LAST_EDITED_BY_ANYONE.
     Default LAST_EDITED_BY_ANYONE.

     @see com.coremedia.cms.editor.sdk.config.showCollectionViewAction#LAST_EDITED_BY_ME
     @see com.coremedia.cms.editor.sdk.config.showCollectionViewAction#LAST_EDITED_BY_ANYONE
     * /
    [Bindable]
    public var lastEditedBy:String;


    /**
     Configuration of filters, typically used for custom filters.
     Each member of this array must be an instance of the class SearchFilterState,
     which is configured in EXML by using the &lt;searchFilterState&gt;
     element with untyped attributes or an element for a specific subclass
     of SearchFilterState.

     @see com.coremedia.cms.editor.sdk.config.searchFilterState
     @see com.coremedia.cms.editor.sdk.collectionview.SearchFilterState
     * /
    [Bindable]
    public var filters:Array;


    /**
     The order by clause.
     Default "freshness desc".
     * /
    [Bindable]
    public var orderBy:String;


    /**
     Whether to force a reload of the view or not.
     Default false.
     * /
    [Bindable]
    public var forceReload:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: ShowCollectionViewAction$,
      super$aMI1: function() {
        com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        folder: null,
        preserveFilter: false,
        searchText: null,
        contentType: null,
        view: null,
        inProduction: false,
        editedByMe: false,
        editedByOthers: false,
        notEdited: false,
        approved: false,
        published: false,
        lastEditedBy: null,
        filters: null,
        orderBy: null,
        forceReload: false
      },
      statics: {
        LAST_EDITED_BY_ME: undefined,
        LAST_EDITED_BY_ANYONE: undefined,
        __initStatics__: function() {
          LAST_EDITED_BY_ME$static_();
          LAST_EDITED_BY_ANYONE$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants"]
    };
});
