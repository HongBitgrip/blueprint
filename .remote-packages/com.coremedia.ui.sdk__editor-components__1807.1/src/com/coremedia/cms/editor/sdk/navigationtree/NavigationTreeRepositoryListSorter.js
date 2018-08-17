Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRepositoryListSorter", function(NavigationTreeRepositoryListSorter) {/*package com.coremedia.cms.editor.sdk.navigationtree {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchParameters;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.logging.Logger;

import mx.resources.ResourceManager;

/**
 * Extends the default RepositoryListSorterImpl to override the resolving of children.
 * The parent/children relationship differs for the catalog documents and is implemented here.
 * /
public class NavigationTreeRepositoryListSorter extends RepositoryListSorterImpl {
  private static const*/var PAGE_GRID_PROPERTY$static/*:String*/ = "placement";/*

  private var extension:NavigationTreeCollectionViewExtension;

  public*/ function NavigationTreeRepositoryListSorter$(extension/*:NavigationTreeCollectionViewExtension*/) {this.super$1wg7();
    this.extension$1wg7 = extension;
  }/*

  override public*/ function sort(folder/*:Content*/, children/*:Array*/)/*:Array*/ {
    var cvManager/*:CollectionViewManagerInternal*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager(),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));
    var sortValues/*:Array*/ = cvManager.getCollectionView().getSortStateManager().getCurrentSortCriteria();
    var sortParams/*:Array*/ = sortValues[0].split(" ");


    if (sortParams[0] === "name") {
      if (sortParams[1] === "asc") {
        children.sort(function (c1/*:Content*/, c2/*:Content*/)/*:Number*/ {
          return c1.getName().localeCompare(c2.getName());
        });
      }
      else {
        children.sort(function (c1/*:Content*/, c2/*:Content*/)/*:Number*/ {
          return c2.getName().localeCompare(c1.getName());
        });
      }
    }
    else if (sortParams[0] === "type") {
      if (sortParams[1] === "asc") {
        children.sort(function (c1/*:Content*/, c2/*:Content*/)/*:Number*/ {
          var t1/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(c1.getType().getName());
          var t2/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(c2.getType().getName());
          return t1.localeCompare(t2);
        });
      }
      else {
        children.sort(function (c1/*:Content*/, c2/*:Content*/)/*:Number*/ {
          var t1/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(c1.getType().getName());
          var t2/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(c2.getType().getName());
          return t2.localeCompare(t1);
        });
      }
    }

    return children;
  }/*

  override protected*/ function computeSearchParameters(folder/*:Content*/, sortValues/*:Array*/)/*:SearchParameters*/ {
    var searchParameters/*:SearchParameters*/ = com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl.prototype.computeSearchParameters.call(this,folder, sortValues);
    return this.extension$1wg7.applySearchParameters(folder, [], searchParameters);
  }/*


  override public*/ function getChildren(folder/*:Content*/)/*:Array*/ {
    //get categories from the parent category
    if (!folder.isLoaded()) {
      folder.load();
      return undefined;
    }

    var placement/*:**/ = folder.getProperties().get(PAGE_GRID_PROPERTY$static);
    if (!placement && !placement.isLoaded()) {
      placement.load();
      return undefined;
    }

    var items/*:Array*/ = getPageGridItems$static(folder, placement);

    //it is important here that we add the navigation items too, otherwise we would have no direct edit for newly created content
    var children/*:Array*/ = com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.getChildrenFor(folder);
    for/* each*/(var $1=0;$1</* in*/ children.length;++$1) {var child/*:Content*/ =children[$1];
      if (items.indexOf(child) === -1) {
        items.push(child);
      }
    }

    return items;
  }/*


  override public*/ function filter(folder/*:Content*/, children/*:Array*/)/*:Array*/ {
    var returnUndefined/*:Boolean*/ = false;
    children = children.filter(function (item/*:Content*/)/*:Boolean*/ {
      var state/*:BeanState*/ = item.getState();
      if (state.readable === false) {
        return false;
      }

      var deleted/*:Boolean*/ = item.isDeleted();
      if (deleted === undefined) {
        returnUndefined = true;
      }
      return deleted === false;
    });
    return returnUndefined ? undefined : children;
  }/*

  /**
   * Returns all page grid items of the active selection or null
   * if the page grid has a deprecated format.
   * @param folder the current tree selection
   * @param pageGrid the page grid
   * /
  private static*/ function getPageGridItems$static(folder/*:Content*/, pageGrid/*:Struct*/)/*:Array*/ {
    var items/*:Array*/ = [];
    var placements2/*:Struct*/ = pageGrid.get(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'pagegrid_new_placements_base_property'));
    if (placements2) {
      var placements/*:Struct*/ = placements2.get(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'pagegrid_list_property'));
      if (placements) {
        var descriptors/*:Array*/ = placements.getType().getDescriptors();
        for/* each*/(var $1=0;$1</* in*/ descriptors.length;++$1) {var descriptor/*:CapPropertyDescriptor*/ =descriptors[$1];
          var name/*:String*/ = descriptor.name;
          var sectionItems/*:Array*/ = placements.get(name).get(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'pagegird_placement_items_property'));
          items = items.concat(sectionItems);
        }
        return items;
      }
    }
    com.coremedia.ui.logging.Logger.warn("Failed to load PageGrid items for " + folder.getPath() + ", using navigation children instead");
    return items;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl",
      extension$1wg7: null,
      constructor: NavigationTreeRepositoryListSorter$,
      super$1wg7: function() {
        com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl.prototype.constructor.apply(this, arguments);
      },
      sort: sort,
      computeSearchParameters: computeSearchParameters,
      getChildren: getChildren,
      filter: filter,
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.sort.RepositoryListSorterImpl",
        "com.coremedia.ui.logging.Logger",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
