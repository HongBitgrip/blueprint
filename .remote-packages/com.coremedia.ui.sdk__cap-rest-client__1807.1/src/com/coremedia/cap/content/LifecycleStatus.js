Ext.define("com.coremedia.cap.content.LifecycleStatus", function(LifecycleStatus) {/*package com.coremedia.cap.content {

/**
 * Constants for the lifecycle status identifiers of a Content.
 *
 * @see Content#getLifecycleStatus()
 * @see #IN_PRODUCTION
 * @see #APPROVED
 * @see #PUBLISHED
 * @see #DELETED
 * /
[PublicApi]
public class LifecycleStatus {

  /**
   * The Content is in production, that is, it is not deleted and not yet approved in its current state.
   * /
  public static const IN_PRODUCTION:String = "in-production";

  /**
   * The Content is approved, that is, its place and its latest version are approved in their current states,
   * but it is not yet published in its current state.
   * /
  public static const APPROVED:String = "approved";

  /**
   * The Content is published, that is, its place and its latest version are published
   * in their current states.
   * /
  public static const PUBLISHED:String = "published";

  /**
   * The Content is deleted.
   * /
  public static const DELETED:String = "deleted";

  /**
   * @private
   * Do not instantiate this class.
   * /
  public*/ function LifecycleStatus$() {
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: LifecycleStatus$,
      statics: {
        IN_PRODUCTION: "in-production",
        APPROVED: "approved",
        PUBLISHED: "published",
        DELETED: "deleted"
      }
    };
});
