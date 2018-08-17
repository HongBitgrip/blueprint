Ext.define("com.coremedia.cms.editor.sdk.EditorPluginDescriptor", function(EditorPluginDescriptor) {/*package com.coremedia.cms.editor.sdk {

import joo.JavaScriptObject;

/**
 * A editor plugin descriptor that should be used to describe a plugin when adding to
 * the global <code>coremediaEditorPlugins</code> array.
 * The properties of this class are equal to the properties of the json object that should be
 * added to <code>coremediaEditorPlugins</code>.
 * /
[PublicApi]
public class EditorPluginDescriptor extends JavaScriptObject {

  public*/ function EditorPluginDescriptor$(descriptor/*:Object*/) {
    this.super$wEwf(descriptor);
  }/*

  /**
   * The name of the plugins main class which implements the EditorPlugin interface.
   * This property is required.
   *
   * @see EditorPlugin
   * /
  public native function get mainClass():String;

  /**
   * Name of the plugin. Should not be longer than 20 characters.
   * /
  public native function get name():String;

  /**
   * A license feature that must be present for this plugin to be loaded.
   *
   * @link com.coremedia.cap.common.infos.CapSystemInfo#getLicenseFeatures()
   * /
  public native function get requiredLicenseFeature():String;

  /**
   * The name of a group that limits the set of users for whom
   * the plugin is activated. If this property is not set, the plugin
   * is started for all users.
   *
   * @link com.coremedia.cap.user.User#isMemberOf
   * /
  public native function get requiredGroup():String;

  /**
   * Determines whether the plugin's initialization may complete while
   * requests are pending.
   *
   * Defaults to false.
   * /
  public native function get initWithoutRequestsComplete():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "joo.JavaScriptObject",
      metadata: {"": ["PublicApi"]},
      constructor: EditorPluginDescriptor$,
      super$wEwf: function() {
        joo.JavaScriptObject.prototype.constructor.apply(this, arguments);
      },
      requires: ["joo.JavaScriptObject"]
    };
});
