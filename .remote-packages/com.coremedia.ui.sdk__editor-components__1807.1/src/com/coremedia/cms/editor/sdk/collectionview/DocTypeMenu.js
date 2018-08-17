Ext.define("com.coremedia.cms.editor.sdk.collectionview.DocTypeMenu", function(DocTypeMenu) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.actions.NewContentAction;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;
import ext.menu.Menu;
import ext.util.MixedCollection;

/**
 * A menu that displays all concrete document types and adds a NewDocumentAction for each,
 * to create a new document of this type.
 * /
public class DocTypeMenu extends Menu {

  private static const*/var DOC_TYPE_MENU_BLOCK$static/*:String*/ = "cm-doctype-menu";/*

  public static const xtype:String = "com.coremedia.cms.editor.sdk.config.docTypeMenu";

  /**
   * Value expression that acts as a model for informing a view of a newly created content object.
   * /
  [Bindable]
  public var createdContentValueExpression:ValueExpression;

  /**
   * Value expression which holds the folder in which a new content is created.
   * /
  [Bindable]
  public var folderValueExpression:ValueExpression;

  /**
   * Create a new doc type menu.
   * /
  public*/ function DocTypeMenu$(config/*:DocTypeMenu = null*/) {if(arguments.length<=0)config=null;
    config.cls = DOC_TYPE_MENU_BLOCK$static;
    this.super$mcZ0(processConfig$static(config || {}));
  }/*

  private static*/ function processConfig$static(config/*:DocTypeMenu*/)/*:DocTypeMenu*/ {
    if (!AS3.getBindable(config,"createdContentValueExpression")) {
      throw new AS3.Error("Error");
    }
    var beanValueExpression/*:ValueExpression*/ = AS3.getBindable(config,"createdContentValueExpression");
    var concreteDocumentTypes/*:Array*//* Vector.<ContentType> */ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getConcreteDocumentTypes();
    var creatableDocumentTypes/*:Array*//* Vector.<ContentType> */ =
            com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.applyBlacklist(concreteDocumentTypes, com.coremedia.cms.editor.sdk.editorContext.getExcludedDocumentTypes());
    var newContentActions/*:Array*//* Vector.<NewContentAction> */ = [];
    var docTypeCollection/*:MixedCollection*/ = new Ext.util.MixedCollection();
    docTypeCollection.addAll(creatableDocumentTypes);
    docTypeCollection.sortBy(sortByDocTypeName$static);
    docTypeCollection.each(function (documentType/*:ContentType*/)/*:void*/ {
      var newContentActionCfg/*:NewContentAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.NewContentAction,{});
      AS3.setBindable(newContentActionCfg,"hideWhenDisabled" , true);
      AS3.setBindable(newContentActionCfg,"folderValueExpression" , AS3.getBindable(config,"folderValueExpression"));
      AS3.setBindable(newContentActionCfg,"createdContentValueExpression" , beanValueExpression);
      AS3.setBindable(newContentActionCfg,"contentType" , documentType);
      AS3.setBindable(newContentActionCfg,"text" , com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(documentType.getName()));
      AS3.setBindable(newContentActionCfg,"iconCls" , 'content-type-xs ' + com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(documentType));
      newContentActions.push(new com.coremedia.cms.editor.sdk.actions.NewContentAction(newContentActionCfg));
    });
    return AS3.cast(DocTypeMenu,Ext.apply(config, {
      items: newContentActions
    }));
  }/*

  private static*/ function sortByDocTypeName$static(lhs/*:ContentType*/, rhs/*:ContentType*/)/*:**/ {
    //sort case-insensitively
    var lhsName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(lhs.getName()).toLowerCase();
    var rhsName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(rhs.getName()).toLowerCase();
    if (lhsName === rhsName) {
      if (lhsName === rhsName) {
        return 0;
      }
      return (lhsName < rhsName) ? -1 : 1;
    }
    return (lhsName < rhsName) ? -1 : 1;
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.docTypeMenu",
      constructor: DocTypeMenu$,
      super$mcZ0: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        createdContentValueExpression: null,
        folderValueExpression: null
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.menu.Menu",
        "Ext.util.MixedCollection",
        "com.coremedia.cap.common.SESSION"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.NewContentAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
