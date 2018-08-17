Ext.define("com.coremedia.cap.workflow.WorkflowContentService", function(WorkflowContentService) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.content.Content;

public interface WorkflowContentService {
  /**
   * Return the locking processes which refer to the given content.
   *
   * <p>The returned Array is a read-only snapshot of the current
   * state.
   *
   * @param content the com.coremedia.cap.content.Content to operate on
   * @return the Processes which refer to the given content
   * /
  function getLockingProcesses(content: Content):Array;

  /**
   * Returns true, if the content is included in another locking workflow
   * and the user is not the current performer of the running task.
   *
   * @param content
   * @return true if the content is locked for the user.
   * /
  function isLockedForUser(content:Content):Boolean;

  /**
   * Invalidates the remote bean which contains the locking processes for the content.
   * @param content
   * @param callback
   * /
  function invalidateLocking(content:Content, callback:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
