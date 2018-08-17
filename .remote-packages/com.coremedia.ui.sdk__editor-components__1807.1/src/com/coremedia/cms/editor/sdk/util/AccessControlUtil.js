Ext.define("com.coremedia.cms.editor.sdk.util.AccessControlUtil", function(AccessControlUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.authorization.impl.AccessControlImpl;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMModifier;

public class AccessControlUtil {

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-access-control-util"));};/*
  private static const*/var MODIFIER_READ_ONLY$static/*:BEMModifier*/;/* =*/function MODIFIER_READ_ONLY$static_(){MODIFIER_READ_ONLY$static=( BLOCK$static.createModifier("read-only"));};/*

  public static*/ function isReadOnly$static(content/*:Content*/)/*:Boolean*/ {
    var repository/*:ContentRepository*/ = content.getRepository();
    return AS3.cast(com.coremedia.cap.content.authorization.impl.AccessControlImpl,repository.getAccessControl()).isWritable(content) === false;
  }/*

  public static*/ function calculateCSSClasses$static(content/*:Content*/)/*:String*/ {
    var result/*:String*/ = BLOCK$static.getCSSClass();
    if (AccessControlUtil.isReadOnly(content)) {
      result += " "  + MODIFIER_READ_ONLY$static.getCSSClass();
    }
    return result;
  }/*
}*/function AccessControlUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: AccessControlUtil$,
      statics: {
        BLOCK: undefined,
        MODIFIER_READ_ONLY: undefined,
        isReadOnly: isReadOnly$static,
        calculateCSSClasses: calculateCSSClasses$static,
        __initStatics__: function() {
          BLOCK$static_();
          MODIFIER_READ_ONLY$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.authorization.impl.AccessControlImpl",
        "com.coremedia.ui.models.bem.BEMBlock"
      ]
    };
});
