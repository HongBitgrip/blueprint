Ext.define("com.coremedia.cms.studio.imageeditor.VariantKeyUtil", function(VariantKeyUtil) {/*package com.coremedia.cms.studio.imageeditor {

import mx.resources.IResourceManager;
import mx.resources.ResourceManager;

/**
 * Ext is very picky with item ids (see Ext.validIdRe),
 * so we convert variant keys into valid item ids.
 * /
public class VariantKeyUtil {

  private static const*/var RESOURCE_MANAGER$static/*:IResourceManager*/;/* =*/function RESOURCE_MANAGER$static_(){RESOURCE_MANAGER$static=( mx.resources.ResourceManager.getInstance());};/*

  // copied from Ext.validIdRe:
  private static const*/var VALID_ID_REGEXP$static/*:RegExp*/ = /^[a-zA-Z_][a-zA-Z0-9_\-]*$/i;/*

  private static const*/var STARTS_WITH_LETTER_OR_UNDERSCORE_REGEXP$static/*:RegExp*/ = /^[a-zA-Z_]/;/*

  private static const*/var INVALID_ID_CHAR_REGEXP$static/*:RegExp*/ = /[^A-Za-z0-9_]/g;/*
  private static const*/var REPLACEMENT_CHAR$static/*:String*/ = '-';/*

  private static const*/var keyToitemId$static/*:Object*/;/* =*/function keyToitemId$static_(){keyToitemId$static=( {});};/*
  private static const*/var itemIdToKey$static/*:Object*/;/* =*/function itemIdToKey$static_(){itemIdToKey$static=( {});};/*
  private static*/ var nItemIds$static/*:int*/ = 0;/*

  public*/ function VariantKeyUtil$() {
    throw new AS3.Error("utility class");
  }/*

  public static*/ function variantKeyToItemId$static(key/*:String*/)/*:String*/ {
    if (!key) {
      return key;
    }
    var itemId/*:String*/ = keyToitemId$static[key];
    if (!itemId) {
      itemId = encode$static(key);
      keyToitemId$static[key] = itemId;
      itemIdToKey$static[itemId] = key;
    }
    return itemId;
  }/*

  private static*/ function encode$static(s/*:String*/)/*:String*/ {
    if (!STARTS_WITH_LETTER_OR_UNDERSCORE_REGEXP$static.test(s)) {
      s = '_' + s;
    }
    if (VALID_ID_REGEXP$static.test(s)) {
      return s;
    }
    return s.replace(INVALID_ID_CHAR_REGEXP$static, REPLACEMENT_CHAR$static) + '_' + nItemIds$static++;
  }/*

  public static*/ function itemIdToVariantKey$static(itemId/*:String*/)/*:String*/ {
    if (!itemId) {
      return itemId;
    }
    return itemIdToKey$static[itemId];
  }/*

  public static*/ function getVariantDisplayName$static(variantKey/*:String*/)/*:String*/ {
    return RESOURCE_MANAGER$static.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_variants_' + variantKey) || variantKey;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: VariantKeyUtil$,
      statics: {
        RESOURCE_MANAGER: undefined,
        keyToitemId: undefined,
        itemIdToKey: undefined,
        variantKeyToItemId: variantKeyToItemId$static,
        itemIdToVariantKey: itemIdToVariantKey$static,
        getVariantDisplayName: getVariantDisplayName$static,
        __initStatics__: function() {
          RESOURCE_MANAGER$static_();
          keyToitemId$static_();
          itemIdToKey$static_();
        }
      },
      requires: [
        "AS3.Error",
        "mx.resources.ResourceManager"
      ]
    };
});
