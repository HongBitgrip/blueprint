Ext.define("com.coremedia.cms.editor.sdk.premular.HistoricContent", function(HistoricContent) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;

/**
 * A content that behaves like the current content but historic
 * values are returned for the user-defined properties.
 * Modifications through this object are not allowed.
 * /
[PublicApi]
public interface HistoricContent extends Content {
  /**
   * Return the version defining the state of this content.
   *
   * @return the version
   * /
  function getVersion():Version;

  /**
   * Return the associated content in its current state.
   * /
  function getContent():Content;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.Content"],
      requires: ["com.coremedia.cap.content.Content"]
    };
});
