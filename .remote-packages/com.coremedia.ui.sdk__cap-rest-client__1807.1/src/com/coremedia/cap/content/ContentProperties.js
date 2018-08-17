Ext.define("com.coremedia.cap.content.ContentProperties", function(ContentProperties) {/*package com.coremedia.cap.content {
import com.coremedia.ui.data.Bean;

/**
 * A Bean representing the project-specific properties of a Content.
 *
 * @see Content
 * @see Content#getProperties()
 * /
[PublicApi]
public interface ContentProperties extends Bean {

  /**
   * Return the content object these properties belong to.
   * @return the content object these properties belong to
   *
   * @see Content#getProperties()
   * /
  function getContentObject():ContentObject;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
