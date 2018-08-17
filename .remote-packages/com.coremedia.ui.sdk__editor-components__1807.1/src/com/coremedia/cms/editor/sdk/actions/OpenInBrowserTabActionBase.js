Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase", function(OpenInBrowserTabActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;

public class OpenInBrowserTabActionBase extends DependencyTrackedAction {
  private var urlValueExpression:ValueExpression;

  public*/ function OpenInBrowserTabActionBase$(config/*:OpenInBrowserTabAction = null*/) {if(arguments.length<=0)config=null;
    this.urlValueExpression$zkck = AS3.getBindable(config,"urlValueExpression");
    this.super$zkck(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'openInBrowserTab', {handler:AS3.bind( this,"openInBrowserTab$zkck")})));
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return !this.urlValueExpression$zkck.getValue();
  }/*

  private*/ function openInBrowserTab()/*:void*/ {
    var url/*:String*/ = this.urlValueExpression$zkck.getValue();
    if (url) {
      window.open(url);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      urlValueExpression$zkck: null,
      constructor: OpenInBrowserTabActionBase$,
      super$zkck: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled: calculateDisabled,
      openInBrowserTab$zkck: openInBrowserTab,
      requires: ["com.coremedia.ui.actions.DependencyTrackedAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction"
      ]
    };
});
