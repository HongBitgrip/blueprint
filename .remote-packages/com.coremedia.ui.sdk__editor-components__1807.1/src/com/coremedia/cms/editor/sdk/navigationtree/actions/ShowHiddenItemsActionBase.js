Ext.define("com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase", function(ShowHiddenItemsActionBase) {/*package com.coremedia.cms.editor.sdk.navigationtree.actions {
import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.ContentTreeRelationProvider;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel;
import com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;

import mx.resources.ResourceManager;

/**
 * An ext.Action that approves the content defined in the given value expression.
 * /
[PublicApi]
public class ShowHiddenItemsActionBase extends ContentAction {
  private static const*/var VIEW_TREE_SETTINGS$static/*:String*/ = "showHiddenElementsInNavigationTree";/*

  /**
   * Create an ext.Action that approves the content defined in the given value expression.
   *
   * @param config the config object
   * /
  public*/ function ShowHiddenItemsActionBase$(config/*:ShowHiddenItemsAction = null*/) {if(arguments.length<=0)config=null;
    this.super$Ypfj(AS3.cast(com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'showHiddenItems', {handler:AS3.bind( this,"showHideItems$Ypfj")})));
  }/*

  private*/ function showHideItems()/*:void*/ {
    var treeRelation/*:NavigationTreeRelation*/ =AS3.as( com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation(),  com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation);
    var showHiddenItems/*:Boolean*/ = treeRelation.toggleView();

    com.coremedia.cms.editor.sdk.editorContext.getPreferences().getType().removeProperty(VIEW_TREE_SETTINGS$static);
    com.coremedia.cms.editor.sdk.editorContext.getPreferences().getType().addBooleanProperty(VIEW_TREE_SETTINGS$static, showHiddenItems);

    //recursively reload the subtree
    var root/*:Content*/ = this.getContents()[0];
    this.reload$Ypfj(root);
    this.updateText$Ypfj();
  }/*

  /**
   * Reload all childrens that are already loaded to refresh the existing tree view.
   * @param node the current node to check for reloading
   * /
  private*/ function reload(node/*:Content*/)/*:void*/ {var this$=this;
    if (node.isLoaded()) {
      node.invalidate(function (loaded)/*:Content*/ {
        var children/*:Array*/ = com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.getChildrenFor(loaded);
        for/* each*/(var $1=0;$1</* in*/ children.length;++$1) {var child/*:Content*/ =children[$1];
          this$.reload$Ypfj(child);
        }
      });
    }
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.addComponent.call(this,comp);
    this.updateText$Ypfj();
  }/*

  private*/ function updateText()/*:void*/ {var this$=this;
    ShowHiddenItemsActionBase.getHiddenStatusValueExpression().loadValue(function (showHidden/*:Boolean*/)/*:void*/ {
      if (showHidden) {
        this$.setText(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Navigation_action_hide_items'));
      }
      else {
        this$.setText(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Navigation_action_show_hidden_items'));
      }
    });
  }/*

  public static*/ function getHiddenStatusValueExpression$static()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var preferences/*:StructRemoteBeanImpl*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getPreferences(),  com.coremedia.cap.common.impl.StructRemoteBeanImpl);
      if (preferences && !preferences.isLoaded()) {
        preferences.load();
        return undefined;
      }

      var showHidden/*:Boolean*/ = false;
      if (preferences) {
        showHidden = preferences.get(VIEW_TREE_SETTINGS$static);
        if (showHidden === undefined) {
          return false;
        }
      }

      return showHidden;
    });
  }/*

  protected override*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (!com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel.isActivated()) {
      return true;
    }

    for/* each*/(var $1=0;$1</* in*/ contents.length;++$1) {var content/*:Content*/ =contents[$1];
      var treeRelation/*:ContentTreeRelation*/ = com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation();
      if (treeRelation === undefined) {
        return undefined;
      }

      if (AS3.as(treeRelation,  com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation) === null) {
        return true;
      }

      var id/*:String*/ = content.getId();
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
      if (site.getSiteRootDocument().getId() !== id) {
        return true;
      }
    }
    return false;
  }/*

  protected override*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    // only the delete button should be shown otherwise
    return this.isDisabledFor(contents);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: ShowHiddenItemsActionBase$,
      super$Ypfj: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      showHideItems$Ypfj: showHideItems,
      reload$Ypfj: reload,
      addComponent: addComponent,
      updateText$Ypfj: updateText,
      isDisabledFor: isDisabledFor,
      isHiddenFor: isHiddenFor,
      statics: {getHiddenStatusValueExpression: getHiddenStatusValueExpression$static},
      requires: [
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.ContentTreeRelationProvider",
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation",
        "com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction"
      ]
    };
});
