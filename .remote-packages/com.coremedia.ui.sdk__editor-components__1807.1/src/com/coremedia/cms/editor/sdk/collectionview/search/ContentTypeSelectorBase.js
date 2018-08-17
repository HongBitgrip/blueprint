Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.ContentTypeSelectorBase", function(ContentTypeSelectorBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.bem.IconWithTextBEMEntities;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.TextMetricsUtil;

[PublicApi]
public class ContentTypeSelectorBase extends LocalComboBox {

  /**
   * An array of entries that this combo box should offer.
   * Each entry must consist of a "name" (primary key), an "icon" style class, and a localized "label"
   * that is used for the view. Mandatory
   * /
  [ExtConfig]
  [Bindable]
  public var entries:Array;

  /**
   * A value expression that is read to adjust the combo box and set whenever the user changes the combo box.
   * /
  [Bindable]
  public var contentTypeValueExpression:ValueExpression;

  /**
   * The template for displaying the combobox entries.
   * @return
   * /
  internal static*/ function getTemplate$static()/*:Array*/ {
    // TODO Ext6: just refactored existing code for now, a common base template needs to be extracted here, see CMS-7870
    return ['<tpl for=".">',
      '<div class="x-menu-item x-menu-item-default ' + com.coremedia.ui.components.LocalComboBox.COMBO_BOX_TPL_ITEM_CLASS + '" role="option">',
      '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK + '">',
      '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {icon}"></span>',
      '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '">{label}</span>',
      '</span>',
      '</div>',
      '</tpl>'];
  }/*

  public*/ function ContentTypeSelectorBase$(config/*:ContentTypeSelector = null*/) {if(arguments.length<=0)config=null;
    this.super$E__k(config);
    AS3.getBindable(this,"contentTypeValueExpression").addChangeListener(AS3.bind(this,"nameChanged$E__k"));
  }/*

  /**
   * Filter only acceptable content types.
   * @param ve
   * /
  private*/ function nameChanged(ve/*:ValueExpression*/)/*:void*/ {
    var name/*:String*/ = ve.getValue();
    if (AS3.getBindable(this,"entries").some(function (entry/*:Object*/)/*:Boolean*/ {
              return entry.name === name;
            })) {
      this.setValue(name);
    }
  }/*

  internal static*/ function computeMaxNameWidth$static(entries/*:Array*/)/*:int*/ {
    if (entries && entries.length) {
      return com.coremedia.ui.util.TextMetricsUtil.getMaxWidth('div', ['x-boundlist'], entries.map(getEntryLabel$static)) + 64;
    }
  }/*

  private static*/ function getEntryLabel$static(entry/*:Object*/)/*:String*/ {
    return entry.label;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.LocalComboBox.prototype.afterRender.call(this);

    var name/*:String*/ = AS3.getBindable(this,"contentTypeValueExpression").getValue();
    if (name !== undefined) {
      this.setValue(name);
    }
  }/*

  /**
   * Get all ContentTypes except those excluded from search.
   * @param availableContentTypes
   * @return
   * @private
   * /
  public static*/ function getAvailableContentTypeEntries$static(availableContentTypes/*:Array = null*/)/*:Array*/ {if(arguments.length<=0)availableContentTypes=null;
    return (availableContentTypes || com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil.applyBlacklist(
            com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentTypes(),
            com.coremedia.cms.editor.sdk.editorContext.getContentTypesExcludedFromSearch()
    )).map(contentTypeToEntry$static);
  }/*

  /**
   * Get all available contenttypes
   * @return
   * @private
   * /
  public static*/ function getAllContentTypeEntries$static()/*:Array*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getDocumentTypes().map(contentTypeToEntry$static);
  }/*

  /**
   * Get contenttypes restricted by given linkType
   * @param linkType String
   * @return
   * @private
   * /
  public static*/ function getContentTypeEntries$static(linkType/*:String = null*/)/*:Array*/ {if(arguments.length<=0)linkType=null;
    var contentTypes/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentTypes();
    if (linkType) {
      contentTypes = contentTypes.filter(function (contentType/*:ContentType*/)/*:Boolean*/ {
        return contentType.isSubtypeOf(linkType);
      });
    }
    return contentTypes.map(contentTypeToEntry$static);
  }/*

  private static*/ function contentTypeToEntry$static(contentType/*:ContentType*/)/*:Object*/ {
    var name/*:String*/ = contentType.getName();
    return {
      name: name,
      label: com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(name),
      icon: com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(contentType)
    };
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.ui.components.LocalComboBox.prototype.onDestroy.call(this);
    AS3.getBindable(this,"contentTypeValueExpression").removeChangeListener(AS3.bind(this,"nameChanged$E__k"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      metadata: {"": ["PublicApi"]},
      constructor: ContentTypeSelectorBase$,
      super$E__k: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      nameChanged$E__k: nameChanged,
      afterRender: afterRender,
      onDestroy: onDestroy,
      config: {
        entries: null,
        contentTypeValueExpression: null
      },
      statics: {
        getTemplate: getTemplate$static,
        computeMaxNameWidth: computeMaxNameWidth$static,
        getAvailableContentTypeEntries: getAvailableContentTypeEntries$static,
        getAllContentTypeEntries: getAllContentTypeEntries$static,
        getContentTypeEntries: getContentTypeEntries$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.bem.IconWithTextBEMEntities",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.util.TextMetricsUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
