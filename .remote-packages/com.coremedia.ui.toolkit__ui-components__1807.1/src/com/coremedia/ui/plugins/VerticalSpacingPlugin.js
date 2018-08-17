Ext.define("com.coremedia.ui.plugins.VerticalSpacingPlugin", function(VerticalSpacingPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 Adds vertical spacing between the items of a container.

 In case the default spacing of "100" should not apply, use the {@link VerticalSpacingPlugin#modifier} configuration
 using one of the vertical spacing modifiers provided by {@link com.coremedia.ui.bem.SpacingBEMEntities}.

 Note: The spacings are not the actual pixel values but abstract numbers, so we do not need to hard code any pixel
 value into the component layer as the theme controls the actual value.
 * /
public class VerticalSpacingPlugin extends BEMPlugin{

    import com.coremedia.ui.bem.SpacingBEMEntities;

    public*/function VerticalSpacingPlugin$(config/*:VerticalSpacingPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    var defaults_$1/*:VerticalSpacingPlugin*/ =AS3.cast(VerticalSpacingPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"block" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_BLOCK);
    AS3.setBindable(config_$1,"defaultElement" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ovzk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BEMPlugin",
      constructor: VerticalSpacingPlugin$,
      super$ovzk: function() {
        com.coremedia.ui.plugins.BEMPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.BEMPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.bem.SpacingBEMEntities"]
    };
});
