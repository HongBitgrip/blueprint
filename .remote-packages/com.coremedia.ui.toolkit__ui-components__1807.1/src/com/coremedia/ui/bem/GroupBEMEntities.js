Ext.define("com.coremedia.ui.bem.GroupBEMEntities", function(GroupBEMEntities) {/*package com.coremedia.ui.bem {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

public class GroupBEMEntities {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){GroupBEMEntities.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-group-wrapper"));}/*;
  public static const ELEMENT_LEFT:BEMElement =*/function ELEMENT_LEFT$static_(){GroupBEMEntities.ELEMENT_LEFT=( GroupBEMEntities.BLOCK.createElement("left"));}/*;
  public static const ELEMENT_RIGHT:BEMElement =*/function ELEMENT_RIGHT$static_(){GroupBEMEntities.ELEMENT_RIGHT=( GroupBEMEntities.BLOCK.createElement("right"));}/*;
}*/function GroupBEMEntities$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: GroupBEMEntities$,
      statics: {
        BLOCK: undefined,
        ELEMENT_LEFT: undefined,
        ELEMENT_RIGHT: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_LEFT$static_();
          ELEMENT_RIGHT$static_();
        }
      },
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
