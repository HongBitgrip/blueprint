Ext.define("com.coremedia.ui.bem.SeparatorBEMEntities", function(SeparatorBEMEntities) {/*package com.coremedia.ui.bem {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;

public class SeparatorBEMEntities {

  public static const VERTICAL_SEPARATOR_BLOCK:BEMBlock =*/function VERTICAL_SEPARATOR_BLOCK$static_(){SeparatorBEMEntities.VERTICAL_SEPARATOR_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-vertical-separator"));}/*;
  public static const VERTICAL_SEPARATOR_ELEMENT_ITEM:BEMElement =*/function VERTICAL_SEPARATOR_ELEMENT_ITEM$static_(){SeparatorBEMEntities.VERTICAL_SEPARATOR_ELEMENT_ITEM=( SeparatorBEMEntities.VERTICAL_SEPARATOR_BLOCK.createElement("item"));}/*;
}*/function SeparatorBEMEntities$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SeparatorBEMEntities$,
      statics: {
        VERTICAL_SEPARATOR_BLOCK: undefined,
        VERTICAL_SEPARATOR_ELEMENT_ITEM: undefined,
        __initStatics__: function() {
          VERTICAL_SEPARATOR_BLOCK$static_();
          VERTICAL_SEPARATOR_ELEMENT_ITEM$static_();
        }
      },
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
