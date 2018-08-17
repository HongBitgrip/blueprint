Ext.define("com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase", function(LocalizationManagerBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

public class LocalizationManagerBase extends StudioDialog {
  private var currentSiteId:String;

  public*/ function LocalizationManagerBase$(config/*:LocalizationManager = null*/) {if(arguments.length<=0)config=null;
    this.super$NII9(config);
  }/*

  public*/ function setCurrentSiteId(newSiteId/*:String*/)/*:void*/ {
    var oldSiteId/*:String*/ = this.currentSiteId$NII9;
    this.currentSiteId$NII9 = newSiteId;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.sites.LocalizationManager.CURRENT_SITE_ID_VARIABLE_NAME, oldSiteId, this.currentSiteId$NII9);
  }/*

  [ProvideToExtChildren]
  public*/ function getCurrentSiteId()/*:String*/ {
    return this.currentSiteId$NII9;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      metadata: {getCurrentSiteId: ["ProvideToExtChildren"]},
      currentSiteId$NII9: null,
      constructor: LocalizationManagerBase$,
      super$NII9: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      setCurrentSiteId: setCurrentSiteId,
      getCurrentSiteId: getCurrentSiteId,
      requires: [
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.sites.LocalizationManager"]
    };
});
