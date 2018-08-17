Ext.define("com.coremedia.cms.editor.sdk.login.AutoLogout", function(AutoLogout) {/*package com.coremedia.cms.editor.sdk.login {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ActivityTracker;

import ext.Ext;

import ext.dom.DomHelper;

import ext.dom.Element;

/**
 * A background process that initiates a logout when Studio is
 * idle for too long. As a warning, Studio is covered in grey after
 * half of the logout timeout has passed.
 * /
public class AutoLogout {
  /**
   * The fraction of the total timeout period after which Studio
   * is covered in grey.
   * /
  private static const*/var MIN_COVER_FRACTION$static/*:Number*/ = 0.75;/*

  /**
   * The maximum period for showing the cover, in milliseconds
   * /
  private static const*/var MAX_COVER_MILLISECONDS$static/*:int*/ = 30000;/*

  /**
   * The delay before auto logout.
   * If configured (not NaN), this value overrides the
   * value configured in the Studio webapp.
   * /
  private static*/ var forcedDelay$static/*:Number*/ = NaN;/*

  /**
   * Set the delay before auto logout.
   * If configured (not NaN), this value overrides the
   * value configured in the Studio webapp.
   *
   * @param delay the delay in seconds
   * /
  public static*/ function setDelay$static(delay/*:Number*/)/*:void*/ {
    forcedDelay$static = delay;
  }/*

  /**
   * Initialize the auto logout process.
   * /
  public static*/ function init$static()/*:void*/ {
    var actualDelay/*:Number*/ = forcedDelay$static;
    if (isNaN(actualDelay)) {
      actualDelay = 1000;

      // The server-side setting is made available in the autoLogout configuration.
      var autoLogoutConfiguration/*:**/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()['autoLogout'] || {};
      var delayString/*:String*/ = autoLogoutConfiguration['delay'];
      if (delayString) {
        actualDelay = Number(delayString);
      }
    }

    if (actualDelay) {
      new AutoLogout(actualDelay * 1000);
      com.coremedia.ui.logging.Logger.debug("Enabled auto logout with timeout " + actualDelay + "s.");
    } else {
      com.coremedia.ui.logging.Logger.debug("Disabled auto logout.");
    }
  }/*

  private var delay:Number;

  /**
   * The grey cover, initially hidden.
   * /
  private var cover:Element;

  /**
   * Whether Studio is covered at the moment.
   * /
  private var covering:Boolean;

  /**
   * A timer object to be canceled when activity is detected again.
   * /
  private var checkTimer:Object;

  /**
   * Create a new AutoLogout process with the given auto logout delay.
   * @param delay
   * /
  public*/ function AutoLogout$(delay/*:Number*/) {
    this.delay$itzO = delay;

    // Prepare a DOM element to cover Studio.
    // By creating the element early, we can easily apply an animation
    // using CSS3 transitions.
    this.cover$itzO = Ext.dom.Helper.append(window.document.body, {
      tag : 'img',
      src : Ext.BLANK_IMAGE_URL,
      cls : 'auto-logout-cover',
      galleryimg : "no"
    }, true);

    this.check$itzO();
  }/*

  /**
   * Check whether an auto logout or a warning should be initiated.
   * Schedule another check just after the next possible state transition.
   * /
  private*/ function check()/*:void*/ {
    var lastActive/*:Number*/ = com.coremedia.ui.util.ActivityTracker.getInstance().getLastActive().getTime();
    var inactiveFor/*:Number*/ = new Date().getTime() - lastActive;

    if (inactiveFor > this.delay$itzO) {
      com.coremedia.cms.editor.sdk.login.LogoutUtil.autoLogout();
    } else {
      var coverDelay/*:Number*/ = Math.max(this.delay$itzO * MIN_COVER_FRACTION$static, this.delay$itzO - MAX_COVER_MILLISECONDS$static);
      if (inactiveFor >= coverDelay && !this.covering$itzO) {
        // Add the cover.
        this.covering$itzO = true;
        this.cover$itzO.addCls("auto-logout-cover-on");
        // Make sure to remove the cover when activity is detected.
        com.coremedia.ui.util.ActivityTracker.getInstance().on(com.coremedia.ui.util.ActivityTracker.ACTIVITY_DETECTED_EVENT,AS3.bind( this,"removeCover$itzO"));
      }

      // Wait until next timeout, but at least one second.
      var timeToNextTimeout/*:Number*/ = Math.max(
              1000,
              (this.covering$itzO ? this.delay$itzO : coverDelay) - inactiveFor);
      this.checkTimer$itzO = window.setTimeout(AS3.bind(this,"check$itzO"), timeToNextTimeout);
    }
  }/*

  /**
   * Remove the grey cover and trigger a check for auto logout in due time.
   * /
  private*/ function removeCover()/*:void*/ {
    this.covering$itzO = false;
    this.cover$itzO.removeCls("auto-logout-cover-on");

    com.coremedia.ui.util.ActivityTracker.getInstance().un(com.coremedia.ui.util.ActivityTracker.ACTIVITY_DETECTED_EVENT,AS3.bind( this,"removeCover$itzO"));
    window.clearTimeout(this.checkTimer$itzO);
    // Studio is active right now, but the check method also
    this.check$itzO();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      delay$itzO: NaN,
      cover$itzO: null,
      covering$itzO: false,
      checkTimer$itzO: null,
      constructor: AutoLogout$,
      check$itzO: check,
      removeCover$itzO: removeCover,
      statics: {
        setDelay: setDelay$static,
        init: init$static
      },
      requires: [
        "Ext",
        "Ext.dom.Helper",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ActivityTracker"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.login.LogoutUtil"
      ]
    };
});
