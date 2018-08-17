Ext.define("com.coremedia.cms.editor.sdk.about.AboutWindowBase", function(AboutWindowBase) {/*package com.coremedia.cms.editor.sdk.about {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.infos.CapSystemInfo;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.util.LocaleUtil;
import com.coremedia.ui.data.impl.CacheLevel;
import com.coremedia.ui.data.impl.RemoteBeanCache;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.dom.Element;
import ext.view.DataView;

import js.Document;
import js.Range;
import js.Selection;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class AboutWindowBase extends StudioDialog {
  public static const PROPERTIES_TABLE_ITEM_ID:String = "propertiesTable";

  private var lander:Lander;

  /**
   * @param config the config object
   * /
  public*/ function AboutWindowBase$(config/*:AboutWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$gCwJ(config);
  }/*

  public*/ function getAboutProperties()/*:Array*/ {
    var properties/*:Array*/ = [];
    var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_userName'), user.getName()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_userDomain'), user.getDomain() || this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_userDomain_default')]);
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_licenceId'), systemInfo.getLicenceId()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_licensee'), systemInfo.getLicensee()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_licenseFeatures'), new com.coremedia.cms.editor.sdk.about.AlreadyEncoded(getEncodedLicenseFeatures$static())]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_requiredLicenses'), new com.coremedia.cms.editor.sdk.about.AlreadyEncoded(getEncodedRequiredLicenses$static())]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_studio_locale'), com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_studio_locales'), com.coremedia.cms.editor.sdk.util.LocaleUtil.getSupportedLocales().join(", ")]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_os'), window.navigator.platform]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_timezone'), getClientTimezone$static()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type'), getClientType$static()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_userAgent'), window.navigator.userAgent]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_locale'), window.navigator.language || window.navigator.userLanguage + "/" + window.navigator.systemLanguage]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_url'), window.location.href]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_os'), systemInfo.getOperatingSystem()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_jvm'), systemInfo.getJvm()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_start'), getServerStartTime$static()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_locale'), systemInfo.getDefaultLocale()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_timeZone'), systemInfo.getDefaultTimeZone()]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_server_versions'), new com.coremedia.cms.editor.sdk.about.AlreadyEncoded(getEncodedVersionsString$static())]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_cache_contents'), new com.coremedia.cms.editor.sdk.about.AlreadyEncoded(this.getCacheLevelsString$gCwJ())]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_eventQueue_current'), String(com.coremedia.ui.util.EventUtil.getQueueSize())]);
    properties.push([this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_eventQueue_max'), String(com.coremedia.ui.util.EventUtil.getMaxQueueSize())]);

    encodeProperties$static(properties);
    return properties;
  }/*

  private static*/ function getServerStartTime$static()/*:String*/ {
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    if (systemInfo.getStartedAt()) {
      var startedAt/*:Date*/ = systemInfo.getStartedAt().getDate();
      return String(startedAt);
    }
    return undefined;
  }/*

  private static*/ function getEncodedLicenseFeatures$static()/*:String*/ {
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    var licenseFeatures/*:Array*/ = systemInfo.getLicenseFeatures();
    if (licenseFeatures) {
      return licenseFeatures.map(com.coremedia.ui.util.EncodingUtil.encodeForHTML).join("<br/>");
    }
    return undefined;
  }/*

  private static*/ function getEncodedRequiredLicenses$static()/*:String*/ {
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    var requiredLicenses/*:Array*/ = systemInfo.getRequiredLicenses();
    if (requiredLicenses) {
      return requiredLicenses.map(com.coremedia.ui.util.EncodingUtil.encodeForHTML).join("<br/>");
    }
    return undefined;
  }/*

  private static*/ function getEncodedVersionsString$static()/*:String*/ {
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    var moduleVersions/*:Object*/ = systemInfo.getModuleVersions();
    if (moduleVersions) {
      var modules/*:Array*/ = [];
      for (var module/*:String*/ in moduleVersions) {
        if (AS3.is(module,  String)) {
          modules.push(module);
        }
      }
      modules.sort();
      var versionsBuilder/*:Array*/ = [];
      for (var i/*:int*/ = 0; i < modules.length; i++) {
        var sortedModule/*:String*/ = modules[i];
        var version/*:String*/ = moduleVersions[sortedModule];
        if (versionsBuilder.length) {
          versionsBuilder.push("<br/>");
        }
        versionsBuilder.push(com.coremedia.ui.util.EncodingUtil.encodeForHTML(sortedModule), ": ", com.coremedia.ui.util.EncodingUtil.encodeForHTML(version));
      }
      return versionsBuilder.join("");
    }
    return undefined;
  }/*

  private*/ function getCacheLevelsString()/*:String*/ {
    // Retrieve the cache levels for all remote beans.
    var levels/*:Object*/ = com.coremedia.ui.data.impl.RemoteBeanCache.getLevels();

    // Split the levels object into lists, which can then be sorted.
    var displayNameList/*:Array*/ = [];
    var levelsList/*:Array*/ = [];
    var indices/*:Array*/ = [];
    var nextIndex/*:uint*/ = 0;
    for (var className/*:String*/ in levels) {
      var displayName/*:String*/ = className.substr(className.length - 4, 4) === "Impl" ? className.substr(0, className.length - 4) : className;
      displayNameList.push(displayName);
      levelsList.push(levels[className]);
      indices.push(nextIndex++);
    }
    // Actually we are sorting an array of indices, because we do not want to compute
    // the display name again and again.
    indices.sort(function (i1/*:uint*/, i2/*:uint*/)/*:int*/ {
      if (displayNameList[i1] < displayNameList[i2]) {
        return -1;
      }
      if (displayNameList[i1] > displayNameList[i2]) {
        return 1;
      }
      return 0;
    });
    // For each cache level, ...
    var stringBuilder/*:Array*/ = [];
    for (var j/*:int*/ = 0; j < indices.length; j++) {
      var i/*:uint*/ = indices[j];
      // ... report on a new line ...
      var level/*:CacheLevel*/ = levelsList[i];
      // ... the essential statistics.
      stringBuilder.push(com.coremedia.ui.util.EncodingUtil.encodeForHTML(displayNameList[i] + ": " + level.listened + "/" + level.loaded + "/" + level.total + ""));
    }
    return stringBuilder.join("<br/>");
  }/*

  private static*/ function getClientType$static()/*:String*/ {
    if (Ext.isIE8) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_ie8');
    }
    if (Ext.isIE9) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_ie9');
    }
    if (Ext.isIE) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_ie');
    }
    if (Ext.isOpera) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_opera');
    }
    if (Ext.isChrome) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_chrome');
    }
    if (Ext.isSafari) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_safari');
    }
    if ((Ext.isWebKit || Ext.isGecko) && window.navigator.userAgent.toLowerCase().indexOf("firefox") >= 0) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_firefox');
    }
    if (Ext.isWebKit) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_webkit');
    }
    if (Ext.isGecko) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_gecko');
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'AboutWindow_property_client_type_unknown');
  }/*

  private static*/ function getClientTimezone$static()/*:String*/ {
    var timezoneOffset/*:Number*/ = -(new Date().getTimezoneOffset() / 60);
    var clientTimezone/*:String*/ = timezoneOffset < 0 ? "GMT" + timezoneOffset :
            timezoneOffset === 0 ? "GMT" : "GMT+" + timezoneOffset;
    return clientTimezone;
  }/*

  private static*/ function encodeProperties$static(properties/*:Array*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < properties.length; i++) {
      var row/*:Array*/ = properties[i];
      for (var j/*:int*/ = 0; j < row.length; j++) {
        var value/*:**/ = row[j];
        if (AS3.is(value,  com.coremedia.cms.editor.sdk.about.AlreadyEncoded)) {
          row[j] = AS3.cast(com.coremedia.cms.editor.sdk.about.AlreadyEncoded,value).value;
        } else {
          row[j] = com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.as(value,  String));
        }
      }
    }
  }/*

  public*/ function selectAll()/*:void*/ {
    var propertiesTable/*:DataView*/ = AS3.cast(Ext.view.View,this.itemCollection.get(AboutWindowBase.PROPERTIES_TABLE_ITEM_ID));
    if (propertiesTable) {
      var elem/*:Element*/ = propertiesTable.getEl();
      if (elem) {
        var document/*:Document*/ = window.document;
        if (AS3.bind(document,"createRange") &&AS3.bind( window,"getSelection")) {
          var range/*:Range*/ = document.createRange();
          if (Ext.isChrome || Ext.isSafari) {
            range.selectNodeContents(elem.dom);
          } else {
            range.selectNode(elem.dom);
          }
          var selection/*:Selection*/ = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    }
  }/*

  protected override*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
    if (this.lander$gCwJ) {
      this.lander$gCwJ.stop();
    }
  }/*

  public*/ function coreMediaLogoClicked()/*:void*/ {
    this.removeAll(true);
    this.setScrollable(false);
    this.lander$gCwJ = new com.coremedia.cms.editor.sdk.about.Lander(this.body);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      lander$gCwJ: null,
      constructor: AboutWindowBase$,
      super$gCwJ: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      getAboutProperties: getAboutProperties,
      getCacheLevelsString$gCwJ: getCacheLevelsString,
      selectAll: selectAll,
      onDestroy: onDestroy,
      coreMediaLogoClicked: coreMediaLogoClicked,
      statics: {PROPERTIES_TABLE_ITEM_ID: "propertiesTable"},
      requires: [
        "Ext",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.impl.RemoteBeanCache",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.about.AlreadyEncoded",
        "com.coremedia.cms.editor.sdk.about.Lander",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil"
      ]
    };
});
