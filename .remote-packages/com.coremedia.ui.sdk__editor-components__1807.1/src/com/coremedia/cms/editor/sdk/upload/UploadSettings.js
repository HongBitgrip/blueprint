Ext.define("com.coremedia.cms.editor.sdk.upload.UploadSettings", function(UploadSettings) {/*package com.coremedia.cms.editor.sdk.upload {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.Ext;

/**
 * Contains all information that are stored in the UploadSettings settings document.
 * The document is retrieved server side so that it can be merged with site depending information.
 * /
public class UploadSettings extends BeanImpl {
  private static const*/var DEFAULT_CONTENT_TYPE_PROPERTY$static/*:String*/ = 'defaultContentType';/*
  private static const*/var MIME_TYPE_MAPPINGS$static/*:String*/ = 'mimeTypeMappings';/*
  private static const*/var AUTO_OPEN_PROPERTY$static/*:String*/ = 'autoOpenDocumentTypes';/*
  private static const*/var PREVIEW_DISABLED_PROPERTY$static/*:String*/ = 'previewDisabled';/*
  private static const*/var PREVIEW_MAX_FILE_SIZE_MB_PROPERTY$static/*:String*/ = 'previewMaxFileSizeMB';/*
  private static const*/var TIMEOUT_PROPERTY$static/*:String*/ = 'timeout';/*

  public static const OPEN_IN_TAB_PROPERTY:String = 'openUploadsInTab';

  public static const DEFAULT_PREVIEW_MAX_FILE_SIZE_MB:Number = 32;

  private var configBean:RemoteBean;
  private var autoOpenSettings:Boolean = false;

  //creates a new settings object for the preferred site.
  public*/ function UploadSettings$() {this.super$ayst();
    var url/*:String*/ = 'upload/config';
    var preferredSiteId/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();
    if (preferredSiteId) {
      url += '?' + Ext.urlEncode({site: com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId()});
    }
    this.configBean$ayst = com.coremedia.ui.data.beanFactory.getRemoteBean(url);
  }/*

  /**
   * If set to true, the open in tab setting will be overridden.
   * This is the case when the default upload method of the FileUploadPlugin will be used.
   * @param useSettings true to use the content settings instead.
   * /
  public*/ function setOpenInTabSettingEnabled(useSettings/*:Boolean*/)/*:void*/ {
    this.autoOpenSettings$ayst = useSettings;
  }/*

  public*/ function isOpenInTabSettingEnabled()/*:Boolean*/ {
    return this.autoOpenSettings$ayst;
  }/*

  public*/ function isPreviewDisabled()/*:Boolean*/ {
    return this.get(PREVIEW_DISABLED_PROPERTY$static);
  }/*

  public*/ function getMaxPreviewFileSizeMB()/*:Number*/ {
    return this.get(PREVIEW_MAX_FILE_SIZE_MB_PROPERTY$static);
  }/*

  public*/ function getMaxPreviewFileSizeBytes()/*:Number*/ {
    return this.getMaxPreviewFileSizeMB() * 1048576;
  }/*

  public*/ function ensureLoaded()/*:UploadSettings*/ {
    if (this.getDefaultContentType() === undefined) {
      this.load(Ext.emptyFn);
    }
    return this;
  }/*

  public*/ function load(callback/*:Function*/)/*:void*/ {var this$=this;
    this.configBean$ayst.invalidate(function ()/*:void*/ {
      this$.set(DEFAULT_CONTENT_TYPE_PROPERTY$static, this$.configBean$ayst.get(DEFAULT_CONTENT_TYPE_PROPERTY$static));
      this$.set(MIME_TYPE_MAPPINGS$static, this$.configBean$ayst.get(MIME_TYPE_MAPPINGS$static));
      this$.set(AUTO_OPEN_PROPERTY$static, this$.configBean$ayst.get(AUTO_OPEN_PROPERTY$static));
      this$.set(PREVIEW_DISABLED_PROPERTY$static, this$.configBean$ayst.get(PREVIEW_DISABLED_PROPERTY$static));
      this$.set(PREVIEW_MAX_FILE_SIZE_MB_PROPERTY$static, this$.configBean$ayst.get(PREVIEW_MAX_FILE_SIZE_MB_PROPERTY$static) || UploadSettings.DEFAULT_PREVIEW_MAX_FILE_SIZE_MB);

      if (this$.configBean$ayst.get(TIMEOUT_PROPERTY$static) > 0) {
        this$.set(TIMEOUT_PROPERTY$static, this$.configBean$ayst.get(TIMEOUT_PROPERTY$static));
      }

      callback();
    });
  }/*

  public*/ function getTimeout()/*:Number*/ {
    return this.get(TIMEOUT_PROPERTY$static);
  }/*

  public*/ function getDefaultContentType()/*:String*/ {
    return this.get(DEFAULT_CONTENT_TYPE_PROPERTY$static);
  }/*

  public*/ function getAutoOpenDocumentTypes()/*:Array*/ {
    return this.get(AUTO_OPEN_PROPERTY$static);
  }/*

  public*/ function getOpenInTab()/*:Boolean*/ {
    var value/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(UploadSettings.OPEN_IN_TAB_PROPERTY);
    return value && value === "true";
  }/*

  public*/ function setOpenInTab(b/*:Boolean*/)/*:Boolean*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(UploadSettings.OPEN_IN_TAB_PROPERTY, "" + b);
  }/*

  public*/ function getMimeTypeMappings()/*:Object*/ {
    return this.get(MIME_TYPE_MAPPINGS$static);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      configBean$ayst: null,
      autoOpenSettings$ayst: false,
      constructor: UploadSettings$,
      super$ayst: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      setOpenInTabSettingEnabled: setOpenInTabSettingEnabled,
      isOpenInTabSettingEnabled: isOpenInTabSettingEnabled,
      isPreviewDisabled: isPreviewDisabled,
      getMaxPreviewFileSizeMB: getMaxPreviewFileSizeMB,
      getMaxPreviewFileSizeBytes: getMaxPreviewFileSizeBytes,
      ensureLoaded: ensureLoaded,
      load: load,
      getTimeout: getTimeout,
      getDefaultContentType: getDefaultContentType,
      getAutoOpenDocumentTypes: getAutoOpenDocumentTypes,
      getOpenInTab: getOpenInTab,
      setOpenInTab: setOpenInTab,
      getMimeTypeMappings: getMimeTypeMappings,
      statics: {
        OPEN_IN_TAB_PROPERTY: 'openUploadsInTab',
        DEFAULT_PREVIEW_MAX_FILE_SIZE_MB: 32
      },
      requires: [
        "Ext",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
