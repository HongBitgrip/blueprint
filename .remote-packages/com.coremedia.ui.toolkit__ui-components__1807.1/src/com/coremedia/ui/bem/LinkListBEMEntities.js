Ext.define("com.coremedia.ui.bem.LinkListBEMEntities", function(LinkListBEMEntities) {/*package com.coremedia.ui.bem {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

public class LinkListBEMEntities {

  /**
   * @private
   * This value must be in sync with $cm-link-list-wrapper-validation-indicator-width
   * /
  public static const VALIDATION_SPACING_ADDED:Number = 4;

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){LinkListBEMEntities.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-link-list-wrapper"));}/*;
  public static const ELEMENT_HEADER:BEMElement =*/function ELEMENT_HEADER$static_(){LinkListBEMEntities.ELEMENT_HEADER=( LinkListBEMEntities.BLOCK.createElement("header"));}/*;
  public static const ELEMENT_LIST:BEMElement =*/function ELEMENT_LIST$static_(){LinkListBEMEntities.ELEMENT_LIST=( LinkListBEMEntities.BLOCK.createElement("list"));}/*;
  public static const ELEMENT_TAIL:BEMElement =*/function ELEMENT_TAIL$static_(){LinkListBEMEntities.ELEMENT_TAIL=( LinkListBEMEntities.BLOCK.createElement("tail"));}/*;
  public static const MODIFIER_NO_TAIL:BEMModifier =*/function MODIFIER_NO_TAIL$static_(){LinkListBEMEntities.MODIFIER_NO_TAIL=( LinkListBEMEntities.BLOCK.createModifier("no-tail"));}/*;
  public static const MODIFIER_EMPTY:BEMModifier =*/function MODIFIER_EMPTY$static_(){LinkListBEMEntities.MODIFIER_EMPTY=( LinkListBEMEntities.BLOCK.createModifier("empty"));}/*;
  public static const MODIFIER_EMBEDDED:BEMModifier =*/function MODIFIER_EMBEDDED$static_(){LinkListBEMEntities.MODIFIER_EMBEDDED=( LinkListBEMEntities.BLOCK.createModifier("embedded"));}/*;
  public static const MODIFIER_WITH_HEADER:BEMModifier =*/function MODIFIER_WITH_HEADER$static_(){LinkListBEMEntities.MODIFIER_WITH_HEADER=( LinkListBEMEntities.BLOCK.createModifier("with-header"));}/*;
  public static const MODIFIER_NO_VALIDATION:BEMModifier =*/function MODIFIER_NO_VALIDATION$static_(){LinkListBEMEntities.MODIFIER_NO_VALIDATION=( LinkListBEMEntities.BLOCK.createModifier("no-validation"));}/*;
}*/function LinkListBEMEntities$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LinkListBEMEntities$,
      statics: {
        VALIDATION_SPACING_ADDED: 4,
        BLOCK: undefined,
        ELEMENT_HEADER: undefined,
        ELEMENT_LIST: undefined,
        ELEMENT_TAIL: undefined,
        MODIFIER_NO_TAIL: undefined,
        MODIFIER_EMPTY: undefined,
        MODIFIER_EMBEDDED: undefined,
        MODIFIER_WITH_HEADER: undefined,
        MODIFIER_NO_VALIDATION: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_HEADER$static_();
          ELEMENT_LIST$static_();
          ELEMENT_TAIL$static_();
          MODIFIER_NO_TAIL$static_();
          MODIFIER_EMPTY$static_();
          MODIFIER_EMBEDDED$static_();
          MODIFIER_WITH_HEADER$static_();
          MODIFIER_NO_VALIDATION$static_();
        }
      },
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
