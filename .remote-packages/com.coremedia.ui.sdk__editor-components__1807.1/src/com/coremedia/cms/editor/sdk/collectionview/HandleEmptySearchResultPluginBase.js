Ext.define("com.coremedia.cms.editor.sdk.collectionview.HandleEmptySearchResultPluginBase", function(HandleEmptySearchResultPluginBase) {/*package com.coremedia.cms.editor.sdk.collectionview {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.util.ComponentUtil;

import ext.Component;
import ext.Plugin;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.plugin.AbstractPlugin;
import ext.view.DataView;

import js.HTMLElement;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class HandleEmptySearchResultPluginBase extends AbstractPlugin {

  private static const*/var EMPTY_TEXT$static/*:String*/;/* =*/function EMPTY_TEXT$static_(){EMPTY_TEXT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearch_text'));};/*

  private static const*/var EMPTY_TEXT_NOT_ROOT$static/*:String*/;/* =*/function EMPTY_TEXT_NOT_ROOT$static_(){EMPTY_TEXT_NOT_ROOT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearchNotRoot_text'));};/*

  private static const*/var CLEAR_PATH_TEXT$static/*:String*/;/* =*/function CLEAR_PATH_TEXT$static_(){CLEAR_PATH_TEXT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearchNotRoot_link_text'));};/*

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-empty-search-result"));};/*
  private static const*/var ELEMENT_PARAGRAPH$static/*:BEMElement*/;/* =*/function ELEMENT_PARAGRAPH$static_(){ELEMENT_PARAGRAPH$static=( BLOCK$static.createElement("paragraph"));};/*
  private static const*/var ELEMENT_LINK$static/*:BEMElement*/;/* =*/function ELEMENT_LINK$static_(){ELEMENT_LINK$static=( BLOCK$static.createElement("link"));};/*

  private static const*/var CLEAR_PATH_COMMAND$static/*:String*/ = "clearPath";/*

  private var theCollectionView:CollectionView;

  /**
   * Must either be a GridPanel or a DataView.
   * /
  private var component:Component;

  private var emptyTextValueExpression:ValueExpression;

  /**
   * handle search results of non-contents
   * /
  [ExtConfig]
  public var additionalHandler:Function;

  public*/ function HandleEmptySearchResultPluginBase$(config/*:HandleEmptySearchResultPluginBase = null*/) {this.super$Yeyz();if(arguments.length<=0)config=null;
    this.additionalHandler = config.additionalHandler;
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$Yeyz = component;
    com.coremedia.ui.util.ComponentUtil.findAsParentOf(component, com.coremedia.cms.editor.sdk.collectionview.CollectionView.xtype,AS3.bind( this,"initCollectionView$Yeyz"));
  }/*

  private*/ function initCollectionView(theCollectionView/*:CollectionView*/)/*:void*/ {
    this.theCollectionView$Yeyz = theCollectionView;

    this.emptyTextValueExpression$Yeyz = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeEmptyText$Yeyz"));
    this.emptyTextValueExpression$Yeyz.addChangeListener(AS3.bind(this,"onEmptyTextChange$Yeyz"));
    this.onEmptyTextChange$Yeyz();

    this.component$Yeyz.on("afterrender",AS3.bind( this,"attachListener$Yeyz"));

    this.component$Yeyz.on("beforedestroy",AS3.bind( this,"onDestroy$Yeyz"));
  }/*

  private*/ function attachListener()/*:void*/ {
    this.component$Yeyz.getEl().addListener("click",AS3.bind( this,"linkClicked$Yeyz"));
  }/*

  private*/ function linkClicked(e/*:Event*/)/*:void*/ {
    var target/*:HTMLElement*/ = e.getTarget();
    if (target && target.getAttribute("data-command") === CLEAR_PATH_COMMAND$static) {
      this.theCollectionView$Yeyz.getCollectionViewModel().getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY,
        com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot());
      e.stopEvent();
    }
  }/*

  private*/ function computeEmptyText()/*:String*/ {
    var searchResult/*:SearchResult*/ = this.theCollectionView$Yeyz.getSearchResult();
    if (!searchResult) {
      return undefined;
    }
    //noinspection JSMismatchedCollectionQueryUpdate
    var hits/*:Array*/ = searchResult.getHits();
    var emptyText/*:String*/ = "";

    if (hits && hits.length === 0) {
      var mainStateBean/*:Bean*/ = this.theCollectionView$Yeyz.getCollectionViewModel().getMainStateBean();
      var folder/*:Object*/ = mainStateBean.get(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY);
      if (AS3.is(folder,  com.coremedia.cap.content.Content)) {
        if (!AS3.cast(com.coremedia.cap.content.Content,folder).isRoot()) {
          emptyText = '<p class="' + ELEMENT_PARAGRAPH$static + '">' + EMPTY_TEXT_NOT_ROOT$static + '</p>';
          emptyText += '<p class="' + ELEMENT_PARAGRAPH$static + '"><a class="' + ELEMENT_LINK$static + '" href="#" data-command="' + CLEAR_PATH_COMMAND$static + '">' + CLEAR_PATH_TEXT$static + '</a></p>';
        }
      } else if (this.additionalHandler) {
        var rawEmptyText/*:String*/ = this.additionalHandler.call(null, mainStateBean);
        emptyText = rawEmptyText && this.formatRawEmptyText$Yeyz(rawEmptyText);
      }

      emptyText = emptyText || '<p class="' + ELEMENT_PARAGRAPH$static + '">' + EMPTY_TEXT$static + '</p>';
    }

    // must be wrapped with a <div> otherwise it is not properly cleaned up when setting a different empty text
    return '<div class="' + BLOCK$static + '">' + emptyText + '</div>';
  }/*

  private*/ function formatRawEmptyText(text/*:String*/)/*:String*/ {
    var formattedText/*:String*/ = "";
    var lines/*:Array*/ = text.split('\n');
    lines.forEach(function(line/*:String*/)/*:void*/ {
      formattedText += '<p class="' + ELEMENT_PARAGRAPH$static + '">' + line + '</p>';
    });
    return formattedText;
  }/*

  private*/ function onEmptyTextChange()/*:void*/ {
    var emptyText/*:String*/ = this.emptyTextValueExpression$Yeyz.getValue();
    if (emptyText !== undefined) {
      var dataView/*:DataView*/ =AS3.as( this.component$Yeyz,  Ext.view.View);
      if (!dataView) {
        var gridPanel/*:GridPanel*/ =AS3.as( this.component$Yeyz,  Ext.grid.Panel);
        if (gridPanel) {
          dataView = gridPanel.getView();
        }
      }
      if (dataView) {
        // TODO: ExtJS 6 API: AbstractView#emptyText needs to be Bindable
        dataView["setEmptyText"](emptyText);
      }
    }
  }/*

  private*/ function onDestroy()/*:void*/ {
    this.emptyTextValueExpression$Yeyz.removeChangeListener(AS3.bind(this,"onEmptyTextChange$Yeyz"));
    if(this.component$Yeyz.getEl()) {
      this.component$Yeyz.getEl().removeListener("click",AS3.bind( this,"linkClicked$Yeyz"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      theCollectionView$Yeyz: null,
      component$Yeyz: null,
      emptyTextValueExpression$Yeyz: null,
      additionalHandler: null,
      constructor: HandleEmptySearchResultPluginBase$,
      super$Yeyz: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      initCollectionView$Yeyz: initCollectionView,
      attachListener$Yeyz: attachListener,
      linkClicked$Yeyz: linkClicked,
      computeEmptyText$Yeyz: computeEmptyText,
      formatRawEmptyText$Yeyz: formatRawEmptyText,
      onEmptyTextChange$Yeyz: onEmptyTextChange,
      onDestroy$Yeyz: onDestroy,
      statics: {
        EMPTY_TEXT: undefined,
        EMPTY_TEXT_NOT_ROOT: undefined,
        CLEAR_PATH_TEXT: undefined,
        BLOCK: undefined,
        ELEMENT_PARAGRAPH: undefined,
        ELEMENT_LINK: undefined,
        __initStatics__: function() {
          EMPTY_TEXT$static_();
          EMPTY_TEXT_NOT_ROOT$static_();
          CLEAR_PATH_TEXT$static_();
          BLOCK$static_();
          ELEMENT_PARAGRAPH$static_();
          ELEMENT_LINK$static_();
        }
      },
      requires: [
        "Ext.grid.Panel",
        "Ext.plugin.Abstract",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.ComponentUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel"
      ]
    };
});
