Ext.define("com.coremedia.cms.editor.sdk.preview.DevelopmentModeButtonBase", function(DevelopmentModeButtonBase) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.LocalStorageUtil;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DevelopmentModeButtonBase extends IconButton {
  private static const*/var USER_VARIANT_PARAMETER$static/*:String*/ = "userVariant";/*
  private static const*/var USER_VARIANT_TIMESTAMP_PARAMETER$static/*:String*/ = "userVariantTS";/*

  private static const*/var LOCAL_STORAGE_DEVELOPER_MODE_KEY$static/*:String*/ = "preview.devModeActive";/*
  private static*/ var isDevModeActiveValueExpression$static/*:ValueExpression*/=null;/*

  public*/ function DevelopmentModeButtonBase$(config/*:DevelopmentModeButton = null*/) {if(arguments.length<=0)config=null;
    this.super$yb91(config);

    // set initial state according to global variable
    var isDevModeActive/*:Boolean*/ = getIsDevModeActiveValueExpression$static().getValue();
    this.toggle(isDevModeActive);
    getIsDevModeActiveValueExpression$static().addChangeListener(AS3.bind(this,"updatePreviewOnGlobalChange"));

    this.setHandler(AS3.bind(this,"updatePreviewOnClick"));
    this.updatePreview();

    this.addListener("beforedestroy",AS3.bind( this,"onBeforeDestroy$yb91"));
  }/*

  private*/ function onBeforeDestroy()/*:Boolean*/ {
    getIsDevModeActiveValueExpression$static().removeChangeListener(AS3.bind(this,"updatePreviewOnGlobalChange"));
  }/*

  private static*/ function getIsDevModeActiveValueExpression$static()/*:ValueExpression*/ {
    if (!isDevModeActiveValueExpression$static) {
      isDevModeActiveValueExpression$static = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(readIsDeveloperModeActive$static());
    }
    return isDevModeActiveValueExpression$static;
  }/*

  internal*/ function updatePreviewOnGlobalChange()/*:void*/ {
    if (this.pressed != readIsDeveloperModeActive$static()) {
      this.toggle();
      this.updatePreview();
    }
  }/*

  internal*/ function updatePreviewOnClick()/*:void*/ {
    this.updatePreview();
    storeIsDeveloperModeActive$static(this.pressed);
    getIsDevModeActiveValueExpression$static().setValue(this.pressed);
  }/*

  internal*/ function updatePreview()/*:void*/ {
    var urlParameterBean/*:Bean*/ = AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelBase,this.findParentByType(com.coremedia.cms.editor.sdk.preview.PreviewPanel.xtype)).getUrlParameterBean();
    var userId/*:String*/ = ""; // empty string means no user set

    if (this.pressed) {
      var disableTooltip/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_developmentMode_disable_tooltip');
      this.setTooltip(disableTooltip);
      this.setText(disableTooltip);
      var user/*:User*/ = com.coremedia.cms.editor.sdk.editorContext.getSession().getUser();
      var uriPath/*:String*/ = user.getUriPath();
      var slashPos/*:int*/ = uriPath.lastIndexOf('/');
      userId = uriPath.substring(slashPos + 1);
    } else {
      var enableTooltip/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Premular_developmentMode_enable_tooltip');
      this.setTooltip(enableTooltip);
      this.setText(enableTooltip);
    }

    // updating the url parameter bean is only necessary if the user id has actually changed
    if (urlParameterBean.get(USER_VARIANT_PARAMETER$static) !== userId) {
      urlParameterBean.set(USER_VARIANT_PARAMETER$static, userId);
      urlParameterBean.set(USER_VARIANT_TIMESTAMP_PARAMETER$static, String(new Date().getTime()));
    }
  }/*

  private static*/ function storeIsDeveloperModeActive$static(isDevModeActive/*:Boolean*/)/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(LOCAL_STORAGE_DEVELOPER_MODE_KEY$static, String(isDevModeActive));
  }/*

  private static*/ function readIsDeveloperModeActive$static()/*:Boolean*/ {
    return com.coremedia.ui.util.LocalStorageUtil.getItem(LOCAL_STORAGE_DEVELOPER_MODE_KEY$static) == "true";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      constructor: DevelopmentModeButtonBase$,
      super$yb91: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      onBeforeDestroy$yb91: onBeforeDestroy,
      updatePreviewOnGlobalChange: updatePreviewOnGlobalChange,
      updatePreviewOnClick: updatePreviewOnClick,
      updatePreview: updatePreview,
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase"
      ]
    };
});
