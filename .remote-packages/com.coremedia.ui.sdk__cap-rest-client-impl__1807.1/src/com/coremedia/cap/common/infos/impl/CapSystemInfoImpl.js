Ext.define("com.coremedia.cap.common.infos.impl.CapSystemInfoImpl", function(CapSystemInfoImpl) {/*package com.coremedia.cap.common.infos.impl {

import com.coremedia.cap.common.infos.CapSystemInfo;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="systemInfo")]
public class CapSystemInfoImpl extends RemoteBeanImpl implements CapSystemInfo {
  public*/ function CapSystemInfoImpl$(path/*:String*/) {
    this.super$v89R(path);
  }/*

  public*/ function getLicenceId()/*:String*/ {
    return this.get('licenceId');
  }/*

  public*/ function getLicensee()/*:String*/ {
    return this.get('licensee');
  }/*

  public*/ function getLicenseFeatures()/*:Array*/ {
    return this.get('licenseFeatures');
  }/*

  public*/ function getRequiredLicenses()/*:Array*/ {
    return this.get('requiredLicenses');
  }/*

  public*/ function getOperatingSystem()/*:String*/ {
    return this.get('operatingSystem');
  }/*

  public*/ function getJvm()/*:String*/ {
    return this.get('jvm');
  }/*

  public*/ function getDefaultTimeZone()/*:String*/ {
    return this.get('defaultTimeZone');
  }/*

  public*/ function getDefaultLocale()/*:String*/ {
    return this.get('defaultLocale');
  }/*

  public*/ function getStartedAt()/*:Calendar*/ {
    return this.get('startedAt');
  }/*

  public*/ function getModuleVersions()/*:Object*/ {
    return this.get('moduleVersions');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.common.infos.CapSystemInfo"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "systemInfo"
        ]
      ]},
      constructor: CapSystemInfoImpl$,
      super$v89R: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getLicenceId: getLicenceId,
      getLicensee: getLicensee,
      getLicenseFeatures: getLicenseFeatures,
      getRequiredLicenses: getRequiredLicenses,
      getOperatingSystem: getOperatingSystem,
      getJvm: getJvm,
      getDefaultTimeZone: getDefaultTimeZone,
      getDefaultLocale: getDefaultLocale,
      getStartedAt: getStartedAt,
      getModuleVersions: getModuleVersions,
      requires: [
        "com.coremedia.cap.common.infos.CapSystemInfo",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
