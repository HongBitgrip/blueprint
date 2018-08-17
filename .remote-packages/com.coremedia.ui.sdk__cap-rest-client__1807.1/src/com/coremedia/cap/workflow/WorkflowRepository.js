Ext.define("com.coremedia.cap.workflow.WorkflowRepository", function(WorkflowRepository) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.workflow.authorization.AccessControl;

/**
 * The workflow repository provides access to content types
 * and content. Use the CapConnection to retrieve
 * a ContentRepository object.
 *
 * @see com.coremedia.cap.content.ContentType
 * @see com.coremedia.cap.content.Content
 * @see com.coremedia.cap.common.CapConnection
 * /
[PublicApi]
public interface WorkflowRepository {

  /**
   * Return this workflow repository's worklist aspect.
   * Return null, if this repository does not support worklists.
   * In particular, the internal connection of the Workflow
   * Server does not support worklists.
   *
   * @return this workflow repository's worklist aspect
   * /
  function getWorklistService():WorklistService;

  /**
   * Return the process definition with the given id or name to the
   * given callback or null, if no such process definition exists.
   *
   * <p>As id, three formats are accepted in this order: <ul>
   *   <li>the long URI format (coremedia:///cap/processdefinition/<i>process definition number</i>);</li>
   *   <li>the relative URI format as a short cut (<i>process definition number</i>);</li>
   *   <li>the name as a short cut for the latest process definition
   *      with that name (<i>process definition name</i>).</li>
   * </ul></p>
   *
   * @param idOrName the id or name of the process definition to return
   * @param callback the function, which is called after the process definition
   * is received from the server
   * /
  function getProcessDefinition(idOrName:String, callback:Function = null):void;

  /**
   * Return this workflow repository's access control aspect.
   *
   * @return this workflow repository's access control aspect
   * /
  function getAccessControl():AccessControl;

  /**
   * Return this WorkflowRepository's content aspect.
   *
   * @return this WorkflowRepository's content aspect
   * /
  function getWorkflowContentService():WorkflowContentService;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
