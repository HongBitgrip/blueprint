Ext.define("com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil", function(TranslationStatusUtil) {/*package com.coremedia.cms.editor.sdk.translate {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.*;
import com.coremedia.ui.data.impl.BeanImpl;

import mx.resources.ResourceManager;

/**
 * Determine the translation status of a given content.
 * /
// Should match states in com.coremedia.cap.multisite.TranslationState
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusUtil {

  public static const NO_MASTER:String = "no-master";
  public static const UP_TO_DATE:String = "up-to-date";
  public static const NOT_LOCALIZED_YET:String = "not-localized-yet";
  public static const NOT_UP_TO_DATE:String = "not-up-to-date";
  public static const MASTER_VERSION_DESTROYED:String = "master-version-destroyed";
  public static const IGNORE_UPDATES:String = "ignore-updates";
  public static const INVALID:String = "invalid";

  public static const PSEUDO_STATE_IN_TRANSLATION:String = "in-translation";

  /*
  This state is not included in com.coremedia.cap.multisite.TranslationState, as it is no possible state for the site aspect of a derive.
  Currently 'translation state' refers to the state of a derive, so if a derive does not exists there is no state.
  But in the UI we want to display the translation state between the master and the derive, and if one of them doesn't exist that is also a valid state.
  * /
  public static const NEW_IN_MASTER:String = "new-in-master";

  /**
   * Localize the translation status of a derived content
   * from the perspective of a translator who expects
   * that the content needs translation.
   * /
  public static const STATUS_ROLE_TRANSLATOR:String = "translator";
  /**
   * Localize the translation status of a derived content
   * from the perspective of the provider of the master content
   * who expects that the content is already translated.
   * /
  public static const STATUS_ROLE_PROVIDER:String = "provider";

  /**
   * <p>
   * Retrieve translation status for given content.
   * </p>
   * <p>
   *   <b>Possible Return Values:</b>
   * </p>
   * <ul>
   *   <li>NO_MASTER: No master link specified (or: master content is destroyed meanwhile).</li>
   *   <li>UP_TO_DATE: Master did not change since previous localization.</li>
   *   <li>NOT_LOCALIZED_YET: Content has not been localized yet.</li>
   *   <li>NOT_UP_TO_DATE: Master is modified. Localization update required.</li>
   *   <li>MASTER_VERSION_DESTROYED: Referred Master version got destroyed.</li>
   *   <li>INVALID: Master version is invalid.</li>
   * </ul>
   *
   * @param content the content for which the translation status should be computed
   * @return the translation status
   * /
  public static*/ function getTranslationStatus$static(content/*:Content*/)/*:String*/ {
    return TranslationStatusUtil.getTranslationStatusAgainstVersion(content, null);
  }/*

  /**
   * <p>
   * Retrieve translation status for given content.
   * </p>
   * <p>
   *   <b>Possible Return Values:</b>
   * </p>
   * <ul>
   *   <li>NO_MASTER: No master link specified (or: master content is destroyed meanwhile).</li>
   *   <li>UP_TO_DATE: Master did not change since previous localization.</li>
   *   <li>NOT_LOCALIZED_YET: Content has not been localized yet.</li>
   *   <li>NOT_UP_TO_DATE: Master is modified. Localization update required.</li>
   *   <li>MASTER_VERSION_DESTROYED: Referred Master version got destroyed.</li>
   *   <li>INVALID: Master version is invalid.</li>
   * </ul>
   *
   * @param content the content for which the translation status should be computed
   * @param masterVersion the masterVersion which is the translation source of the content (optional)
   *                      if no masterVersion is provided, the latest checked-in version of the
   *                      master content is used.
   * @return the translation status
   * /
  public static*/ function getTranslationStatusAgainstVersion$static(content/*:Content*/, masterVersion/*:Version*/)/*:String*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var master/*:Content*/ = sitesService.getMaster(content);

    if (master === undefined) {
      return undefined;
    }

    if (!master) {
      return TranslationStatusUtil.NO_MASTER;
    }

    // make sure master is loaded and dependency-tracked
    AS3.cast(com.coremedia.ui.data.impl.BeanImpl,master).dependencyOnValue();
    if (!master.isLoaded()) {
      master.load();
      return undefined;
    }

    if (master.isDestroyed()) {
      // On UAPI layer we return a special state here denoting that the master got
      // destroyed. For the editor it might not make a difference if the master is
      // destroyed or just not available.
      return TranslationStatusUtil.NO_MASTER;
    }

    masterVersion = masterVersion || getLatestCheckedInVersion$static(master);

    if (masterVersion === undefined) {
      return undefined;
    }

    if (masterVersion === null) {
      // Derived from ContentSiteAspect for Java: If there is only a working
      // version of the master the translation state is assumed to be invalid.
      return TranslationStatusUtil.INVALID;
    }

    if (!masterVersion.isLoaded()) {
      masterVersion.load();
      return undefined;
    }

    if (masterVersion.isDestroyed()) {
      return TranslationStatusUtil.MASTER_VERSION_DESTROYED;
    }

    var ignoreUpdates/*:int*/ = content.getProperties().get(sitesService.getSiteModel().getIgnoreUpdatesProperty());
    if (AS3.is(ignoreUpdates,  Number) && ignoreUpdates === 1) {
      return TranslationStatusUtil.IGNORE_UPDATES;
    }

    var masterVersionRaw/*:**/ = content.getProperties().get(sitesService.getSiteModel().getMasterVersionProperty());
    if (masterVersionRaw === undefined || masterVersionRaw === null || masterVersionRaw < 0) {
      return TranslationStatusUtil.NOT_LOCALIZED_YET;
    }

    var masterVersionNumber/*:Number*/ = masterVersionRaw;

    var masterVersionNumberToTranslate/*:int*/ = masterVersion.getVersionNumber();
    if (masterVersionNumberToTranslate < masterVersionNumber) {
      return TranslationStatusUtil.INVALID;
    }
    if (masterVersionNumber === masterVersionNumberToTranslate) {
      return TranslationStatusUtil.UP_TO_DATE;
    }
    return TranslationStatusUtil.NOT_UP_TO_DATE;
  }/*

  private static*/ function getLatestCheckedInVersion$static(content/*:Content*/)/*:Version*/ {
    if (content.isCheckedOut()) {
      return content.getCheckedOutVersion();
    }
    return content.getCheckedInVersion();
  }/*

  public static*/ function getTranslationStatusText$static(status/*:String*/, role/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'TranslationStatus_' + role + '_' + status + "_text") || "";
  }/*

  public static*/ function getTranslationStatusTooltip$static(status/*:String*/, role/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'TranslationStatus_' + role + '_' + status + "_tooltip") || "";
  }/*

}*/function TranslationStatusUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationStatusUtil$,
      statics: {
        NO_MASTER: "no-master",
        UP_TO_DATE: "up-to-date",
        NOT_LOCALIZED_YET: "not-localized-yet",
        NOT_UP_TO_DATE: "not-up-to-date",
        MASTER_VERSION_DESTROYED: "master-version-destroyed",
        IGNORE_UPDATES: "ignore-updates",
        INVALID: "invalid",
        PSEUDO_STATE_IN_TRANSLATION: "in-translation",
        NEW_IN_MASTER: "new-in-master",
        STATUS_ROLE_TRANSLATOR: "translator",
        STATUS_ROLE_PROVIDER: "provider",
        getTranslationStatus: getTranslationStatus$static,
        getTranslationStatusAgainstVersion: getTranslationStatusAgainstVersion$static,
        getTranslationStatusText: getTranslationStatusText$static,
        getTranslationStatusTooltip: getTranslationStatusTooltip$static
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.impl.BeanImpl",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
