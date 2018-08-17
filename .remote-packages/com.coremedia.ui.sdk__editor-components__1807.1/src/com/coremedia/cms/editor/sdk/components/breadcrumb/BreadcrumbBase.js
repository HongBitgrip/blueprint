Ext.define("com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbBase", function(BreadcrumbBase) {/*package com.coremedia.cms.editor.sdk.components.breadcrumb {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.TreeModel;

import ext.layout.container.BoxLayout;
import ext.menu.Menu;
import ext.toolbar.Toolbar;
import ext.util.MixedCollection;

public class BreadcrumbBase extends Toolbar {

  /**
   * Tree model for this breadcrumb.
   * /
  [Bindable]
  public var treeModel:TreeModel;

  /**
   * @param config the config object
   * /
  public*/ function BreadcrumbBase$(config/*:Breadcrumb = null*/) {if(arguments.length<=0)config=null;
    this.super$6a21(config);
    //TODO: this is really hacky, to be gone as soon as we switch to a more adequate overflow handling

    if (AS3.getBindable(config,"hideOnEmpty")) {
      this.on("add",AS3.bind( this,"hideOnEmpty$6a21"), this);
      this.on("remove",AS3.bind( this,"hideOnEmpty$6a21"), this);
    }

    this.addListener("overflowchange",AS3.bind( this,"handleOverflowChange$6a21"));
  }/*

  // Unfortunately, we need to help the standard EXT toolbar with some stuff concerning overflow ...
  //
  // Alternative (?): Use Ext standard breadcrumb component
  //
  //noinspection JSUnusedLocalSymbols
  private*/ function handleOverflowChange(lastHiddenCount/*:int*/, hiddenCount/*:int*/, hiddenItems/*:Array*/)/*:void*/ {var this$=this;

    // For all items in overflow, tell them
    hiddenItems.forEach(function (item/*:BreadcrumbElement*/)/*:void*/ {
      item.setIsInOverflow(true);
    });

    // For all items not in the overflow, we need to augment some things:
    // (1) As long as the overflow menu is not visible, former hidden items are kept.
    //     This is bad because of bad getRefItems() method of menu.
    //     Thus, remove them from menu.
    // (2) Remove their property 'overflowClone', leads to weird behaviour when moving
    //     items into and out of overflow.
    // (3) Tell them they are no longer in the overflow.
    var menu/*:Menu*/ = AS3.cast(Ext.menu.Menu,AS3.getBindable(AS3.cast(Ext.layout.container.Box,this.layout),"overflowHandler","DUMMY").menu);
    menu.itemCollection.each(function (menuItem/*:BreadcrumbElement*/)/*:void*/ {

      var itemNoLongerHidden/*:Boolean*/ = true;
      for (var i/*:int*/ = 0; i < hiddenItems.length; i++) {
        if (AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement,hiddenItems[i]).breadcrumbElementId === menuItem.breadcrumbElementId) {
          itemNoLongerHidden = false;
          break;
        }
      }

      if (itemNoLongerHidden) {
        // see (1)
        menu.remove(menuItem);

        var filteredForMenuItem/*:MixedCollection*/ = this$.itemCollection.filterBy(function (overflowHandlerItem/*:BreadcrumbElement*/)/*:Boolean*/ {
          return overflowHandlerItem.breadcrumbElementId === menuItem.breadcrumbElementId;
        });
        var originalBreadcrumbElement/*:BreadcrumbElement*/ = AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement,filteredForMenuItem.get(0));
        if (originalBreadcrumbElement) {

          // see (2)
          if (originalBreadcrumbElement["overflowClone"]) {
            originalBreadcrumbElement["overflowClone"] = null;
          }

          // see (3)
          AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement,originalBreadcrumbElement).setIsInOverflow(false);
        }
      }
    });
  }/*

  private*/ function hideOnEmpty()/*:void*/ {
    if (this.itemCollection.getCount() === 0 && !this.hidden) {
      this.hide();
    } else if (this.itemCollection.getCount() > 0 && this.hidden) {
      this.show();
    }
  }/*

  public*/ function getPathValueExpression(selectedNodeVE/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var entity/*:Object*/ = selectedNodeVE.getValue();
      if (!entity) {
        return undefined;
      }
      return AS3.getBindable(this$,"treeModel").getIdPathFromModel(entity);
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      constructor: BreadcrumbBase$,
      super$6a21: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      handleOverflowChange$6a21: handleOverflowChange,
      hideOnEmpty$6a21: hideOnEmpty,
      getPathValueExpression: getPathValueExpression,
      config: {treeModel: null},
      requires: [
        "Ext.layout.container.Box",
        "Ext.menu.Menu",
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement"]
    };
});
