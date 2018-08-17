Ext.define("com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase", function(SingleLinkFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.ValueExpression;

/**
 * The application logic for the target field displayed in the internal link menu.
 * /
[ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class SingleLinkFieldBase extends LinkListGridPanel {

  private var content:Content;

  /**
   * A property path expression leading to the linked content wrapped in a list.
   * /
  [Bindable]
  public var valueExpression:ValueExpression;

  /**
   * Only content items of this type may be linked.
   * /
  [Bindable]
  public var linkContentType:String;

  /**
   * @param config the config object
   * /
  public*/ function SingleLinkFieldBase$(config/*:SingleLinkFieldBase = null*/) {if(arguments.length<=0)config=null;
    this.super$jBrM(config);
  }/*

  /**
   * Show the collection view, if this field may be set.
   * /
  protected*/ function openCollectionView()/*:void*/ {
    if (AS3.getBindable(this.getStore(),"data","DUMMY").length == 0) {

      var searchState/*:SearchState*/ = null;

      if (this.content$jBrM) {
        var targetSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(this.content$jBrM);
        var baseFolder/*:Content*/ = targetSite && targetSite.getSiteRootFolder();

        if (baseFolder) {
          searchState = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
          searchState.folder = baseFolder;
        }
      }

      if (AS3.getBindable(this,"linkContentType")) {
        if (!searchState) {
          searchState = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
        }
        searchState.contentType = AS3.getBindable(this,"linkContentType");
      }

      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(searchState);
    }
  }/*

  [InjectFromExtParent(variableNameConfig='contentVariableName')]
  public*/ function setContent(content/*:Content*/)/*:void*/ {
    this.content$jBrM = content;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
      metadata: {setContent: [
        "InjectFromExtParent",
        [
          "variableNameConfig",
          "contentVariableName"
        ]
      ]},
      content$jBrM: null,
      constructor: SingleLinkFieldBase$,
      super$jBrM: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.constructor.apply(this, arguments);
      },
      openCollectionView: openCollectionView,
      setContent: setContent,
      config: {
        valueExpression: null,
        linkContentType: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
        "com.coremedia.ui.ckeditor.CKEditor_properties"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
