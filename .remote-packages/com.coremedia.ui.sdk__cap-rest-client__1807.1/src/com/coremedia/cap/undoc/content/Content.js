Ext.define("com.coremedia.cap.undoc.content.Content", function(Content) {/*package com.coremedia.cap.undoc.content {
import com.coremedia.cap.content.Content;

/**
 * undocumented public methods of com.coremedia.cap.content.Content
 * <p>internal clients should only access this interface, not the actual implementation classes.</p>
 * <p>we can extend and change the undoc interfaces at any time when we feel the need. Still it's
 * good to know what the interface is.</p>
 * /
public interface Content extends com.coremedia.cap.content.Content {
  /**
   * Return the numeric ID of this Content.
   * <p><b>Note:</b> Always use <code>getUriPath()</code> to externalize Content,
   * use <code>getId()</code> to show the Content ID to the user/admin.</p>
   *
   * @return the numeric ID of this Content.
   *
   * @see #getUriPath()
   * @see #getId()
   * /
  function getNumericId():uint;

  // Keep private API. In the future, we'd rather make the list of rights rules public.
  function hasRightsRules():Boolean;

  // Keep private API. In the future, we'd rather make the list of merge versions public.
  function getMergeVersions():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.Content"],
      requires: ["com.coremedia.cap.content.Content"]
    };
});
