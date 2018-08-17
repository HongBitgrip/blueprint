Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ComboBoxAutoWidth", function(ComboBoxAutoWidth) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.LocalComboBox;
import net.jangaroo.ext.Exml;
public class ComboBoxAutoWidth extends LocalComboBox{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.comboBoxAutoWidth";

    /**
     * This ComboBox box size is rendered by the browser as border-box. This is useful for deep nested components,
     * if ExtJS miscalculates the width.
     * /
    public static const COMBO_BOX_AUTO_WIDTH:String = "combo-auto-width";

    /**
     * Special ctCls class to reach the surrounding box.
     * /
    public static const CT_COMBO_BOX_AUTO_WIDTH:String = "combo-auto-width";

    public*/function ComboBoxAutoWidth$(config/*:ComboBoxAutoWidth = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    var defaults_$1/*:ComboBoxAutoWidth*/ =AS3.cast(ComboBoxAutoWidth,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$P7Xd(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      alias: "widget.com.coremedia.cms.editor.sdk.config.comboBoxAutoWidth",
      constructor: ComboBoxAutoWidth$,
      super$P7Xd: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COMBO_BOX_AUTO_WIDTH: "combo-auto-width",
        CT_COMBO_BOX_AUTO_WIDTH: "combo-auto-width"
      },
      requires: [
        "com.coremedia.ui.components.LocalComboBox",
        "net.jangaroo.ext.Exml"
      ]
    };
});
