Ext.define("com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPluginBase", function(BeanListChooserBindListPluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.ui.plugins.BindListPlugin;

import ext.Ext;

/**
 * A variant of the bind list plugin that defines default data fields for the bean list chooser.
 * It offers config parameter to add additional fields.
 *
 * @see com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin
 * /
public class BeanListChooserBindListPluginBase extends BindListPlugin {
  /**
   * Create a BeanListChooserBindListPlugin object
   *
   * @param config the configuration object
   * /
  public*/ function BeanListChooserBindListPluginBase$(config/*:BeanListChooserBindListPlugin = null*/) {if(arguments.length<=0)config=null;
    var copiedConfig/*:BeanListChooserBindListPlugin*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin,Ext.apply({}, config));
    AS3.setBindable(copiedConfig,"fields" , AS3.getBindable(config,"fields","DUMMY").concat(AS3.getBindable(config,"additionalFields")));
    this.super$BvCv(copiedConfig);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindListPlugin",
      constructor: BeanListChooserBindListPluginBase$,
      super$BvCv: function() {
        com.coremedia.ui.plugins.BindListPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "com.coremedia.ui.plugins.BindListPlugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin"]
    };
});
