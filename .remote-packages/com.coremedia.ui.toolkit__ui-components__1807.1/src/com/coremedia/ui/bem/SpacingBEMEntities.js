Ext.define("com.coremedia.ui.bem.SpacingBEMEntities", function(SpacingBEMEntities) {/*package com.coremedia.ui.bem {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

public class SpacingBEMEntities {

  public static const VERTICAL_SPACING_BLOCK:BEMBlock =*/function VERTICAL_SPACING_BLOCK$static_(){SpacingBEMEntities.VERTICAL_SPACING_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-vertical-spacing"));}/*;
  public static const VERTICAL_SPACING_ELEMENT_ITEM:BEMElement =*/function VERTICAL_SPACING_ELEMENT_ITEM$static_(){SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM=( SpacingBEMEntities.VERTICAL_SPACING_BLOCK.createElement("item"));}/*;
  public static const VERTICAL_SPACING_MODIFIER_25:BEMModifier =*/function VERTICAL_SPACING_MODIFIER_25$static_(){SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_25=( SpacingBEMEntities.VERTICAL_SPACING_BLOCK.createModifier("25"));}/*;
  public static const VERTICAL_SPACING_MODIFIER_200:BEMModifier =*/function VERTICAL_SPACING_MODIFIER_200$static_(){SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200=( SpacingBEMEntities.VERTICAL_SPACING_BLOCK.createModifier("200"));}/*;
  public static const VERTICAL_SPACING_MODIFIER_300:BEMModifier =*/function VERTICAL_SPACING_MODIFIER_300$static_(){SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_300=( SpacingBEMEntities.VERTICAL_SPACING_BLOCK.createModifier("300"));}/*;

  public static const HORIZONTAL_SPACING_BLOCK:BEMBlock =*/function HORIZONTAL_SPACING_BLOCK$static_(){SpacingBEMEntities.HORIZONTAL_SPACING_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-horizontal-spacing"));}/*;
  public static const HORIZONTAL_SPACING_ELEMENT_ITEM:BEMElement =*/function HORIZONTAL_SPACING_ELEMENT_ITEM$static_(){SpacingBEMEntities.HORIZONTAL_SPACING_ELEMENT_ITEM=( SpacingBEMEntities.HORIZONTAL_SPACING_BLOCK.createElement("item"));}/*;
  public static const HORIZONTAL_SPACING_MODIFIER_200:BEMModifier =*/function HORIZONTAL_SPACING_MODIFIER_200$static_(){SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200=( SpacingBEMEntities.HORIZONTAL_SPACING_BLOCK.createModifier("200"));}/*;
}*/function SpacingBEMEntities$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SpacingBEMEntities$,
      statics: {
        VERTICAL_SPACING_BLOCK: undefined,
        VERTICAL_SPACING_ELEMENT_ITEM: undefined,
        VERTICAL_SPACING_MODIFIER_25: undefined,
        VERTICAL_SPACING_MODIFIER_200: undefined,
        VERTICAL_SPACING_MODIFIER_300: undefined,
        HORIZONTAL_SPACING_BLOCK: undefined,
        HORIZONTAL_SPACING_ELEMENT_ITEM: undefined,
        HORIZONTAL_SPACING_MODIFIER_200: undefined,
        __initStatics__: function() {
          VERTICAL_SPACING_BLOCK$static_();
          VERTICAL_SPACING_ELEMENT_ITEM$static_();
          VERTICAL_SPACING_MODIFIER_25$static_();
          VERTICAL_SPACING_MODIFIER_200$static_();
          VERTICAL_SPACING_MODIFIER_300$static_();
          HORIZONTAL_SPACING_BLOCK$static_();
          HORIZONTAL_SPACING_ELEMENT_ITEM$static_();
          HORIZONTAL_SPACING_MODIFIER_200$static_();
        }
      },
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
