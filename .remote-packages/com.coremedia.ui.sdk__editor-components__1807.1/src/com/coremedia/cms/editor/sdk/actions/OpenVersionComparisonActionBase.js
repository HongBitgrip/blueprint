Ext.define("com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase", function(OpenVersionComparisonActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cms.editor.sdk.desktop.ContentTabManager;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;

[PublicApi]
public class OpenVersionComparisonActionBase extends DependencyTrackedAction {
  private var versionValueExpression:ValueExpression;

  public*/ function OpenVersionComparisonActionBase$(config/*:OpenVersionComparisonAction = null*/) {if(arguments.length<=0)config=null;
    this.versionValueExpression$2lMJ = AS3.getBindable(config,"versionValueExpression");

    this.super$2lMJ(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "openVersionComparison", {handler:AS3.bind( this,"openVersionComparison$2lMJ")})));
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var version/*:Version*/ = this.versionValueExpression$2lMJ ?AS3.as( this.versionValueExpression$2lMJ.getValue(),  com.coremedia.cap.content.Version): null;
    return !version;
  }/*

  private*/ function openVersionComparison()/*:void*/ {
    var version/*:Version*/ = this.versionValueExpression$2lMJ ?AS3.as( this.versionValueExpression$2lMJ.getValue(),  com.coremedia.cap.content.Version): null;
    if (version) {
      var contentTabManager/*:ContentTabManager*/ = com.coremedia.cms.editor.sdk.editorContext.getContentTabManager();
      var content/*:Content*/ = version.getContainingContent();
      var contentToVersionMap/*:Object*/ = {};
      contentToVersionMap[content.getUriPath()] = version;
      contentTabManager.openPremulars([new com.coremedia.cms.editor.sdk.premular.PremularConfiguration(content, version, false, true)]);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      versionValueExpression$2lMJ: null,
      constructor: OpenVersionComparisonActionBase$,
      super$2lMJ: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled: calculateDisabled,
      openVersionComparison$2lMJ: openVersionComparison,
      requires: [
        "com.coremedia.cap.content.Version",
        "com.coremedia.ui.actions.DependencyTrackedAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration"
      ]
    };
});
