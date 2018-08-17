Ext.define("com.coremedia.ui.bem.IconWithTextBEMEntities", function(IconWithTextBEMEntities) {/*package com.coremedia.ui.bem {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

public class IconWithTextBEMEntities {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){IconWithTextBEMEntities.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-icon-with-text"));}/*;
  public static const ELEMENT_ICON:BEMElement =*/function ELEMENT_ICON$static_(){IconWithTextBEMEntities.ELEMENT_ICON=( IconWithTextBEMEntities.BLOCK.createElement("icon"));}/*;
  public static const ELEMENT_TEXT:BEMElement =*/function ELEMENT_TEXT$static_(){IconWithTextBEMEntities.ELEMENT_TEXT=( IconWithTextBEMEntities.BLOCK.createElement("text"));}/*;
  public static const MODIFIER_ICON_ONLY:BEMModifier =*/function MODIFIER_ICON_ONLY$static_(){IconWithTextBEMEntities.MODIFIER_ICON_ONLY=( IconWithTextBEMEntities.BLOCK.createModifier("icon-only"));}/*;
  public static const MODIFIER_DISABLED:BEMModifier =*/function MODIFIER_DISABLED$static_(){IconWithTextBEMEntities.MODIFIER_DISABLED=( IconWithTextBEMEntities.BLOCK.createModifier("disabled"));}/*;
  public static const MODIFIER_DISCLOSING:BEMModifier =*/function MODIFIER_DISCLOSING$static_(){IconWithTextBEMEntities.MODIFIER_DISCLOSING=( IconWithTextBEMEntities.BLOCK.createModifier("disclosing"));}/*;
  public static const MODIFIER_ERROR:BEMModifier =*/function MODIFIER_ERROR$static_(){IconWithTextBEMEntities.MODIFIER_ERROR=( IconWithTextBEMEntities.BLOCK.createModifier("error"));}/*;
}*/function IconWithTextBEMEntities$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: IconWithTextBEMEntities$,
      statics: {
        BLOCK: undefined,
        ELEMENT_ICON: undefined,
        ELEMENT_TEXT: undefined,
        MODIFIER_ICON_ONLY: undefined,
        MODIFIER_DISABLED: undefined,
        MODIFIER_DISCLOSING: undefined,
        MODIFIER_ERROR: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_ICON$static_();
          ELEMENT_TEXT$static_();
          MODIFIER_ICON_ONLY$static_();
          MODIFIER_DISABLED$static_();
          MODIFIER_DISCLOSING$static_();
          MODIFIER_ERROR$static_();
        }
      },
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
