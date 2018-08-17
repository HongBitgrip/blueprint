Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase", function(LinkListPropertyFieldGridPanelBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.ContentLinkListWrapper;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.cms.editor.sdk.util.ILinkSuggester;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.util.DelayedTask;
import ext.util.Observable;

/**
 * The application logic for a property field editor that edits
 * link lists. Links can be limited to documents of a given type.
 * /
public class LinkListPropertyFieldGridPanelBase extends LinkListGridPanel {

  [Bindable]
  public var bindTo:ValueExpression;

  [Bindable]
  public var propertyName:String;

  [Bindable]
  public var propertyFieldName:String;

  [Bindable]
  public var linkType:String;

  [Bindable]
  public var maxCardinality:int;

  [Bindable]
  public var hideIssues:Boolean;

  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  [Bindable]
  public var openCollectionViewHandler:Function;

  /**
   * Custom strategy to compute link suggestions in the drop area
   * /
  [Bindable]
  public var linkSuggester:ILinkSuggester;

  private var wrapper:ILinkListWrapper;
  private var _readOnlyValueExpression:ValueExpression;
  private var restoreHighlighted:Boolean;
  private var prolongedHighlighting:Boolean;

  public*/ function LinkListPropertyFieldGridPanelBase$(config/*:LinkListPropertyFieldGridPanelBase = null*/) {if(arguments.length<=0)config=null;
    this.super$IuEr(config);
  }/*

  protected*/ function processOpenCollectionViewHandler(searchTerm/*:String*/)/*:void*/ {
    if (AS3.getBindable(this,"openCollectionViewHandler")) {
      this.processAlternativeToOpenCollectionView$IuEr();
    } else {
      this.openCollectionView$IuEr(searchTerm);
    }
  }/*

  internal static*/ function createLinkSuggester$static(config/*:LinkListPropertyFieldGridPanelBase*/)/*:ILinkSuggester*/ {
    if (AS3.getBindable(config,"linkSuggester")) {
      return AS3.getBindable(config,"linkSuggester");
    }

    var suggesterCfg/*:SearchContentLinkSuggester*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester,{});
    AS3.setBindable(suggesterCfg,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    var cType/*:ContentType*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.getTargetContentType(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"propertyName"), AS3.getBindable(config,"linkType"));
    if (cType) {
      AS3.setBindable(suggesterCfg,"linkTypeName" , cType.getName());
    }
    return new com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester(suggesterCfg);
  }/*

  private*/ function processAlternativeToOpenCollectionView()/*:void*/ {
    AS3.getBindable(this,"openCollectionViewHandler")(this.getContentType(), AS3.getBindable(this,"bindTo").getValue());
  }/*

  /*
   * Create drop target for this component.
   * /
  private*/ function openCollectionView(searchTerm/*:String*/)/*:void*/ {
    if (!this.disabled) {
      var contentTypeName/*:String*/ = this.getContentType().getName();
      var targetContent/*:Content*/ = AS3.getBindable(this,"bindTo").getValue();
      var targetSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(targetContent);
      var baseFolder/*:Content*/ = targetSite && targetSite.getSiteRootFolder();

      var searchState/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
      searchState.contentType = contentTypeName;
      if (searchTerm) {
        var prefixSearch/*:Boolean*/ = searchTerm.length >= 3 && searchTerm.charAt(searchTerm.length - 1) !== ' ';
        searchState.searchText = prefixSearch ? searchTerm + '*' : searchTerm;
      }
      //the base folder must not be a real folder, the node of another tree model can be applied here too
      searchState.folder = baseFolder;
      var view/*:String*/;
      if (com.coremedia.cms.editor.sdk.editorContext.getImageBlobProperty(contentTypeName)) {
        view = com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW;
      } else {
        view = com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW;
      }
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(searchState, true, view);
    }
  }/*

  protected*/ function getLinkListWrapper(config/*:LinkListPropertyFieldGridPanelBase*/)/*:ILinkListWrapper*/ {
    if (!this.wrapper$IuEr) {
      if (AS3.getBindable(config,"linkListWrapper")) {
        this.wrapper$IuEr = AS3.getBindable(config,"linkListWrapper");
      } else {
        this.wrapper$IuEr = getContentLinkListWrapper$static(config);
      }
    }
    return this.wrapper$IuEr;
  }/*

  protected*/ function getContentType(config/*:LinkListPropertyFieldGridPanelBase = null*/)/*:ContentType*/ {if(arguments.length<=0)config=null;
    var bindTo/*:ValueExpression*/ = config ? AS3.getBindable(config,"bindTo") : AS3.getBindable(this,"bindTo");
    var propertyPath/*:String*/ = config ? AS3.getBindable(config,"propertyName") : AS3.getBindable(this,"propertyName");
    var typeName/*:String*/ = config ? AS3.getBindable(config,"linkType") : AS3.getBindable(this,"linkType");
    return com.coremedia.cms.editor.sdk.util.LinkListUtil.getTargetContentType(bindTo, propertyPath, typeName);
  }/*

  private static*/ function getContentLinkListWrapper$static(config/*:LinkListPropertyFieldGridPanelBase*/)/*:ContentLinkListWrapper*/ {
    var linkListWrapperCfg/*:ContentLinkListWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.ContentLinkListWrapper,{});
    AS3.setBindable(linkListWrapperCfg,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(linkListWrapperCfg,"propertyName" , AS3.getBindable(config,"propertyName"));
    AS3.setBindable(linkListWrapperCfg,"linkTypeName" , AS3.getBindable(config,"linkType"));
    AS3.setBindable(linkListWrapperCfg,"maxCardinality" , AS3.getBindable(config,"maxCardinality"));
    AS3.setBindable(linkListWrapperCfg,"readOnlyVE" , com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression")));
    return new com.coremedia.cms.editor.sdk.util.ContentLinkListWrapper(linkListWrapperCfg);
  }/*

  protected*/ function getDropAreaText(config/*:LinkListPropertyFieldGridPanelBase*/)/*:String*/ {
    var content/*:Content*/ = AS3.getBindable(config,"bindTo").getValue();
    if (content) {
      return com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedStringWithoutFallback(content.getType().getName(), AS3.getBindable(config,"propertyFieldName") || AS3.getBindable(config,"propertyName"), com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.EMPTY_TEXT);
    }
    return null;
  }/*

  protected*/ function getReadOnlyValueExpression(config/*:LinkListPropertyFieldGridPanelBase*/)/*:ValueExpression*/ {
    if (!this._readOnlyValueExpression$IuEr) {
      this._readOnlyValueExpression$IuEr = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression"));
    }
    return this._readOnlyValueExpression$IuEr;
  }/*

  override public*/ function focus(selectText/*:* = undefined*/, delay/*:* = undefined*/, callback/*:Function = null*/, scope/*:Function = null*/)/*:Component*/ {var this$=this;arguments=Array.prototype.slice.call(arguments);switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:scope=null;}
    // Workaround: check if focus is triggered by DocumentTabPanelBase#showPropertyFieldByName
    var isFromPBE/*:Boolean*/ = delay === 1;
    if(!this.prolongedHighlighting$IuEr && isFromPBE){
      this.prolongedHighlighting$IuEr = true;
      this.restoreHighlighted$IuEr = AS3.getBindable(this,"highlighted");
      AS3.setBindable(this,"highlighted" , true);
      var observable/*:Observable*/ =AS3.as( this,  Ext.util.Observable);
      observable.addListener("highlightedChanged",AS3.bind( this,"changeRestoreHighlighted$IuEr"));
      var task/*:DelayedTask*/ = new Ext.util.DelayedTask(function()/*:void*/ {
        observable.removeListener("highlightedChanged",AS3.bind( this$,"changeRestoreHighlighted$IuEr"));
        AS3.setBindable(this$,"highlighted" , this$.restoreHighlighted$IuEr);
        this$.prolongedHighlighting$IuEr = false;
      });
      task.delay(3000);
    }
    return com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.focus.apply(this, arguments);
  }/*

  private*/ function changeRestoreHighlighted(obs/*:Observable*/, newHighlighted/*:Boolean*/, oldHighlighted/*:Boolean*/)/*:void*/{
    this.restoreHighlighted$IuEr = newHighlighted;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
      wrapper$IuEr: null,
      _readOnlyValueExpression$IuEr: null,
      restoreHighlighted$IuEr: false,
      prolongedHighlighting$IuEr: false,
      constructor: LinkListPropertyFieldGridPanelBase$,
      super$IuEr: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.constructor.apply(this, arguments);
      },
      processOpenCollectionViewHandler: processOpenCollectionViewHandler,
      processAlternativeToOpenCollectionView$IuEr: processAlternativeToOpenCollectionView,
      openCollectionView$IuEr: openCollectionView,
      getLinkListWrapper: getLinkListWrapper,
      getContentType: getContentType,
      getDropAreaText: getDropAreaText,
      getReadOnlyValueExpression: getReadOnlyValueExpression,
      focus: focus,
      changeRestoreHighlighted$IuEr: changeRestoreHighlighted,
      config: {
        bindTo: null,
        propertyName: null,
        propertyFieldName: null,
        linkType: null,
        maxCardinality: 0,
        hideIssues: false,
        forceReadOnlyValueExpression: null,
        openCollectionViewHandler: null,
        linkSuggester: null
      },
      statics: {createLinkSuggester: createLinkSuggester$static},
      requires: [
        "Ext.util.DelayedTask",
        "Ext.util.Observable",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLinkListWrapper",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.editor.sdk.util.SearchContentLinkSuggester"
      ]
    };
});
