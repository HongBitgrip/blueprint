Ext.define("com.coremedia.cap.common.infos.CapSystemInfo", function(CapSystemInfo) {/*package com.coremedia.cap.common.infos {

import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.RemoteBean;

/**
 * Information about the server to which a connection is connected.
 * 
 * @see com.coremedia.cap.common.CapConnection#getSystemInfo
 * /
[PublicApi]
public interface CapSystemInfo extends RemoteBean {
  /**
   * Return the ID of the licence granted for this CoreMedia CMS installation.
   * /
  function getLicenceId():String;

  /**
   * Return the name of the licensee of this CoreMedia CMS installation.
   * /
  function getLicensee():String;

  /**
   * Return the features enabled by the license of this CoreMedia CMS installation
   * as an array of strings.
   * /
  function getLicenseFeatures():Array;

  /**
   * Returns the CoreMedia licenses required by the studio features and plugins deployed with this Studio installation.
   * @return
   * /
  function getRequiredLicenses():Array;

  /**
   * Return the name of the operating system on which the REST server runs.
   * /
  function getOperatingSystem():String;

  /**
   * Return information about the JVM on which the REST server runs.
   * /
  function getJvm():String;

  /**
   * Return the timezone in which the REST server runs.
   * /
  function getDefaultTimeZone():String;

  /**
   * Return the default locale of the REST server. This might not
   * be the default locale of this client.
   * /
  function getDefaultLocale():String;

  /**
   * Return the time at which the REST server was started.
   * /
  function getStartedAt():Calendar;

  /**
   * Return an object mapping module IDs to versions.
   * /
  function getModuleVersions():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
