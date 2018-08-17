Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase", function(LinkListBindListPluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.ui.plugins.BindListPlugin;

import ext.Ext;

/**
 * A variant of the bind list plugin that defines default data fields for link list items.
 * It offers config parameter to add additional fields.
 *
 * @see com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin
 * /
public class LinkListBindListPluginBase extends BindListPlugin {
  /**
   * Create a ListViewBindListPlugin object
   *
   * @param config the configuration object
   * /
  public*/ function LinkListBindListPluginBase$(config/*:LinkListBindListPlugin = null*/) {if(arguments.length<=0)config=null;
    var copiedConfig/*:LinkListBindListPlugin*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin,Ext.apply({}, config));
    if (AS3.getBindable(config,"additionalFields")) {
      AS3.setBindable(copiedConfig,"fields" , AS3.getBindable(config,"fields","DUMMY").concat(AS3.getBindable(config,"additionalFields")));
    }
    this.super$MOuA(copiedConfig);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindListPlugin",
      constructor: LinkListBindListPluginBase$,
      super$MOuA: function() {
        com.coremedia.ui.plugins.BindListPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "com.coremedia.ui.plugins.BindListPlugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin"]
    };
});
