Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase", function(TranslationStatusWidgetEditorBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import com.coremedia.ui.components.StatefulContainer;

[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class TranslationStatusWidgetEditorBase extends StatefulContainer {
  public*/ function TranslationStatusWidgetEditorBase$(config/*:TranslationStatusWidgetEditorBase = null*/) {if(arguments.length<=0)config=null;
    this.super$lCPI(config);

    this.getModel().set('title', this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_name'));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulContainer",
      constructor: TranslationStatusWidgetEditorBase$,
      super$lCPI: function() {
        com.coremedia.ui.components.StatefulContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.ui.components.StatefulContainer"
      ]
    };
});
