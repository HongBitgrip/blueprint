Ext.define("com.coremedia.ui.plugins.HorizontalSpacingPlugin", function(HorizontalSpacingPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 Adds horizontal spacing between the items of a container.

 In case the default spacing of "100" should not apply, use the {@link HorizontalSpacingPlugin#modifier} configuration
 using one of the horizontal spacing modifiers provided by {@link com.coremedia.ui.bem.SpacingBEMEntities}.

 Note: The spacings are not the actual pixel values but abstract numbers, so we do not need to hard code any pixel
 value into the component layer as the theme controls the actual value.
 * /
public class HorizontalSpacingPlugin extends BEMPlugin{

    import com.coremedia.ui.bem.SpacingBEMEntities;

    public*/function HorizontalSpacingPlugin$(config/*:HorizontalSpacingPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    var defaults_$1/*:HorizontalSpacingPlugin*/ =AS3.cast(HorizontalSpacingPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"block" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_BLOCK);
    AS3.setBindable(config_$1,"defaultElement" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_ELEMENT_ITEM);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ya80(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BEMPlugin",
      constructor: HorizontalSpacingPlugin$,
      super$ya80: function() {
        com.coremedia.ui.plugins.BEMPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.BEMPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.bem.SpacingBEMEntities"]
    };
});
