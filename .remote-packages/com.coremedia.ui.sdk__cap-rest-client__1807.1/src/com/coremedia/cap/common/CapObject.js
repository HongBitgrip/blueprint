Ext.define("com.coremedia.cap.common.CapObject", function(CapObject) {/*package com.coremedia.cap.common {
import com.coremedia.ui.data.RemoteBean;

/**
 * An identifiable and mutable entity of the CoreMedia CMS.
 * /
[PublicApi]
public interface CapObject extends RemoteBean, CapStruct {
  /**
   * Return this object's unique identifier.
   *
   * <p>This property should <em>not</em> be used to externalize the
   * Content object. For this purpose, use <code>getUriPath()</code> instead.</p>
   * <p>Do not make any assumptions about its structure. It might
   * change in future versions, so clients should not rely on it.</p>
   *
   * @return this object's unique identifier
   *
   * @see #getUriPath()
   * /
  function getId():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.cap.common.CapStruct"
      ],
      requires: [
        "com.coremedia.cap.common.CapStruct",
        "com.coremedia.ui.data.RemoteBean"
      ]
    };
});
