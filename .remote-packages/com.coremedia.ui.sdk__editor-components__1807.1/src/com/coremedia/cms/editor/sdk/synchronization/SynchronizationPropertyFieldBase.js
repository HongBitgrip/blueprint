Ext.define("com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase", function(SynchronizationPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.synchronization {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SynchronizationPropertyFieldBase extends AdvancedFieldContainer {

  internal static const IGNORE_UPDATES:int = 1;
  internal static const RECEIVE_UPDATES:int = 0;

  public*/ function SynchronizationPropertyFieldBase$(config/*:SynchronizationPropertyFieldBase = null*/) {if(arguments.length<=0)config=null;
    this.super$AWT_(config);
  }/*

  [Bindable]
  public var bindTo:ValueExpression;

  protected*/ function getVisibilityVE(config/*:SynchronizationPropertyFieldBase*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      var content/*:Content*/ = AS3.getBindable(config,"bindTo").getValue();
      if (!content) {
        return content;
      }
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
      if (!site) {
        return site;
      }
      return site.isSynchronizationTargetSite();
    });
  }/*

  protected static*/ function toBoolean$static(ignoreUpdates/*:int*/)/*:Boolean*/ {
    return ignoreUpdates !== SynchronizationPropertyFieldBase.IGNORE_UPDATES;
  }/*

  protected static*/ function toInt$static(value/*:Boolean*/)/*:int*/ {
    return value ? SynchronizationPropertyFieldBase.RECEIVE_UPDATES : SynchronizationPropertyFieldBase.IGNORE_UPDATES;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      constructor: SynchronizationPropertyFieldBase$,
      super$AWT_: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      getVisibilityVE: getVisibilityVE,
      config: {bindTo: null},
      statics: {
        IGNORE_UPDATES: 1,
        RECEIVE_UPDATES: 0,
        toBoolean: toBoolean$static,
        toInt: toInt$static
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
