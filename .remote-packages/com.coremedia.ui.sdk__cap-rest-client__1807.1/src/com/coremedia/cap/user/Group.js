Ext.define("com.coremedia.cap.user.Group", function(Group) {/*package com.coremedia.cap.user {

/**
 * A user group known to the CMS.
 *
 * <p>Each group can have a number of members, which can be users or groups.</p>
 * /
[PublicApi]
public interface Group extends Member {

  /**
   * Loads the direct members of this group.
   *
   * @param success function callback(members:Array):void, the success callback function that receives the direct members.
   * @param failure function callback(error:RemoteError):void, the failure callback function that receives the error object.
   * /
  function loadDirectMembers(success:Function, failure:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.user.Member"],
      requires: ["com.coremedia.cap.user.Member"]
    };
});
