Ext.define("com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin", function(CustomizeCKEditorPlugin) {/*package com.coremedia.ui.plugins.ckeditor {
import com.coremedia.ui.ckeditor.RichTextArea;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * A Plugin that changes the configuration of the CKEditor in a
 * <code>RichTextArea</code>. The specified configuration key-value
 * pairs are applied to the CKEditor configuration during initialization.
 * See CKEditor documentation for further information.
 *
 * @example Example configuration in EXML
 * <listing version="3.0">
 * &lt;ui:richTextAre>
 *   &lt;plugins>
 *     &lt;ui:customizeCKEditorPlugin>
 *       &lt;ui:config>
 *         &lt;exml:object configOption1="value1" configOption2="value2"/>
 *       &lt;/ui:config>
 *     &lt;/ui:customizeCKEditorPlugin>
 *   &lt;/plugins>
 * &lt;/ui:richTextArea>
 * </listing>
 *
 * @see com.coremedia.ui.ckeditor.RichTextArea
 * /
[PublicApi]
public class CustomizeCKEditorPlugin extends AbstractPlugin {

  public var ckConfig:Object;

  /**
   * @param config the config object
   * /
  public*/ function CustomizeCKEditorPlugin$(config/*:CustomizeCKEditorPlugin = null*/) {if(arguments.length<=0)config=null;
    if (config && config.ckConfig) {
      this.ckConfig = config.ckConfig;
    }
    this.super$BVo4(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (this.ckConfig &&AS3.is( component,  com.coremedia.ui.ckeditor.RichTextArea)) {
      var richTextArea/*:RichTextArea*/ =AS3.as( component,  com.coremedia.ui.ckeditor.RichTextArea);
      richTextArea.customizeCKEditorConfig(this.ckConfig);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      ckConfig: null,
      constructor: CustomizeCKEditorPlugin$,
      super$BVo4: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"],
      uses: ["com.coremedia.ui.ckeditor.RichTextArea"]
    };
});
