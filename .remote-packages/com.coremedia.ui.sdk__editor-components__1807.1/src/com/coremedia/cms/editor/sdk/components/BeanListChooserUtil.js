Ext.define("com.coremedia.cms.editor.sdk.components.BeanListChooserUtil", function(BeanListChooserUtil) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.store.DataField;

import ext.XTemplate;

/**
 * Helper class that provides typical configuration settings for the <code>BeanListChooser</code> component.
 *
 * @see BeanListChooser
 * /
[Deprecated]
[PublicApi]
public class BeanListChooserUtil {

  private static const*/var BEAN_LIST_CHOOSER_BLOCK$static/*:BEMBlock*/;/* =*/function BEAN_LIST_CHOOSER_BLOCK$static_(){BEAN_LIST_CHOOSER_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-bean-list-chooser"));};/*
  private static const*/var BEAN_LIST_CHOOSER_ITEM_ELEMENT$static/*:BEMElement*/;/* =*/function BEAN_LIST_CHOOSER_ITEM_ELEMENT$static_(){BEAN_LIST_CHOOSER_ITEM_ELEMENT$static=( BEAN_LIST_CHOOSER_BLOCK$static.createElement("item"));};/*

  private static const*/var BEAN_LIST_CHOOSER_ITEM_BLOCK$static/*:BEMBlock*/;/* =*/function BEAN_LIST_CHOOSER_ITEM_BLOCK$static_(){BEAN_LIST_CHOOSER_ITEM_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-bean-list-chooser-item"));};/*
  private static const*/var BEAN_LIST_CHOOSER_ELEMENT_ICON$static/*:BEMElement*/;/* =*/function BEAN_LIST_CHOOSER_ELEMENT_ICON$static_(){BEAN_LIST_CHOOSER_ELEMENT_ICON$static=( BEAN_LIST_CHOOSER_ITEM_BLOCK$static.createElement("icon"));};/*
  private static const*/var BEAN_LIST_CHOOSER_ELEMENT_TEXT$static/*:BEMElement*/;/* =*/function BEAN_LIST_CHOOSER_ELEMENT_TEXT$static_(){BEAN_LIST_CHOOSER_ELEMENT_TEXT$static=( BEAN_LIST_CHOOSER_ITEM_BLOCK$static.createElement("text"));};/*

  public*/ function BeanListChooserUtil$() {
  }/*

  public static*/ function getDefaultBemBlockCssClass$static()/*:String*/ {
    return BEAN_LIST_CHOOSER_BLOCK$static.getCSSClass();
  }/*

  /**
   * Returns a default rendering template for content lists.
   *
   * @return default rendering template for content lists.
   * @see BeanListChooserUtil#getDefaultContentDataFields
   * /
  public static*/ function getDefaultContentTemplate$static()/*:XTemplate*/ {

    return new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="' + BEAN_LIST_CHOOSER_ITEM_BLOCK$static + ' ' + BEAN_LIST_CHOOSER_ITEM_ELEMENT$static +
                                                                            ' {mergedItemClass}" data-qtip="{name}">',
              '<div class="' + BEAN_LIST_CHOOSER_ELEMENT_ICON$static + ' {docTypeClass} {emptySelectionItemClass}"></div>',
              '<p class="' + BEAN_LIST_CHOOSER_ELEMENT_TEXT$static + '">{shortName}</p>',
              '</div>',
            '</tpl>');
  }/*

  /**
   * Returns a default itemSelector value matching the default content template.
   *
   * @return default itemSelector value
   * /
  public static*/ function getDefaultContentItemSelector$static()/*:String*/ {
    return BEAN_LIST_CHOOSER_ITEM_BLOCK$static.getCSSSelector();
  }/*

  /**
   * Returns a default set of data fields for content lists. Provided fields include:
   * 'name', 'shortName' and 'docTypeClass'.
   *
   * @return default set of data fields for content lists.
   * /
  public static*/ function getDefaultContentDataFields$static()/*:Array*/ {
    var result/*:Array*/ = [];

    var nameDataField/*:DataField*/ = new com.coremedia.ui.store.DataField(AS3.cast(com.coremedia.ui.store.DataField,{
      name: "name"
    }));
    result.push(nameDataField);

    var shortNameDataField/*:DataField*/ = new com.coremedia.ui.store.DataField(AS3.cast(com.coremedia.ui.store.DataField,{
      name: "shortName",
      mapping: "name",
      convert: BeanListChooserUtil.curtail
    }));
    result.push(shortNameDataField);

    var docTypeClassDataField/*:DataField*/ = new com.coremedia.ui.store.DataField(AS3.cast(com.coremedia.ui.store.DataField,{
      name: "docTypeClass",
      mapping: "type.name",
      convert: com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentTypeName
    }));
    result.push(docTypeClassDataField);

    return result;
  }/*

  private static const*/var SHORT_NAME_MAX_LENGTH$static/*:int*/ = 15;/*

  internal static*/ function curtail$static(s/*:String*/)/*:String*/ {
    if (!s) return '';
    if (s.length > SHORT_NAME_MAX_LENGTH$static) {
      return s.substr(0, SHORT_NAME_MAX_LENGTH$static - 3) + '...';
    }
    return s;
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": [
        "Deprecated",
        "PublicApi"
      ]},
      constructor: BeanListChooserUtil$,
      statics: {
        BEAN_LIST_CHOOSER_BLOCK: undefined,
        BEAN_LIST_CHOOSER_ITEM_ELEMENT: undefined,
        BEAN_LIST_CHOOSER_ITEM_BLOCK: undefined,
        BEAN_LIST_CHOOSER_ELEMENT_ICON: undefined,
        BEAN_LIST_CHOOSER_ELEMENT_TEXT: undefined,
        getDefaultBemBlockCssClass: getDefaultBemBlockCssClass$static,
        getDefaultContentTemplate: getDefaultContentTemplate$static,
        getDefaultContentItemSelector: getDefaultContentItemSelector$static,
        getDefaultContentDataFields: getDefaultContentDataFields$static,
        curtail: curtail$static,
        __initStatics__: function() {
          BEAN_LIST_CHOOSER_BLOCK$static_();
          BEAN_LIST_CHOOSER_ITEM_ELEMENT$static_();
          BEAN_LIST_CHOOSER_ITEM_BLOCK$static_();
          BEAN_LIST_CHOOSER_ELEMENT_ICON$static_();
          BEAN_LIST_CHOOSER_ELEMENT_TEXT$static_();
        }
      },
      requires: [
        "Ext.XTemplate",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.store.DataField"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
