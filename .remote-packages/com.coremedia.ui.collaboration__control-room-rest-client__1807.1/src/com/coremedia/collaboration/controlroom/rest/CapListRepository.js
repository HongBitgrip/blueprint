Ext.define("com.coremedia.collaboration.controlroom.rest.CapListRepository", function(CapListRepository) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.RemoteBean;

/**
 * A CapList repository
 * /
public interface CapListRepository extends RemoteBean {

  /**
   * Return the list of edited contents of the current user.
   *
   * @return the list of the edited contents of the current user
   * /
  function getEditedContents():CapList;

  /**
   * Returns the content sets of the current user.
   *
   * @return the content sets of the current user
   * /
  function getContentSetList():CapList;

  /**
   * Returns the completed processes of the current user.
   *
   * @return the completed processes of the current user
   * /
  function getCompletedProcesses():CapList;

  /**
   * Returns the pending processes of the current user.
   *
   * @return the pending processes of the current user
   * /
  function getPendingProcesses():CapList;

  /**
   * Create a new content set containing the given contents.
   *
   * @param callback the callback function
   * /
  function createContentSet(name:String, contents:Array, callback:Function = null):void;

  /**
   * Create a new workflow set containing the given contents.
   *
   * @param callback the callback function
   * /
  function createWorkflowSet(name:String, contents:Array, callback:Function = null):void;

  /**
   * Publishes the given content sets and shares them with the given users.
   *
   * @param contentSets the content sets to publish/share
   * @param members the members to share the content sets with
   * @param callback the callback function, called without any parameters
   * /
  function shareContentSets(contentSets:Array, members:Array, isPublic:Boolean = true, callback:Function = null):void;

  /**
   * Adds the given content sets to the list of content sets of current user.
   *
   * @param capLists the CapLists to add
   * @param callback the callback function
   * /
  function addSharedContentSets(capLists:Array, callback:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
