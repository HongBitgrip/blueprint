Ext.define("com.coremedia.cap.common.CapConnection", function(CapConnection) {/*package com.coremedia.cap.common {

import com.coremedia.cap.common.infos.CapSystemInfo;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.user.UserRepository;
import com.coremedia.cap.workflow.WorkflowRepository;

/**
 * The public entry point to a CMS remote service.
 * Compared to the CMS Unified API in Java, the
 * CapConnection has no reference to a CapSession.
 * Instead, sessions are retrieved through the login service.
 * Use <code>Cap.prepare()</code> to obtain a CapConnection.
 *
 * @see com.coremedia.cap.Cap
 * @see #getLoginService()
 * @see com.coremedia.cap.common.CapSession
 * /
[PublicApi]
public interface CapConnection {

  /**
   * Return the login service of this connection.
   * @return the login service of this connection
   * /
  function getLoginService():CapLoginService;

  /**
   * Return the CMS content repository of this connection.
   * This is only available after establishing a session.
   *
   * @return the CMS content repository of this connection
   *
   * @see #getLoginService()
   * /
  function getContentRepository():ContentRepository;

  /**
   * Return the CMS user repository of this connection.
   * This is only available after establishing a session.
   *
   * @return the CMS user repository of this connection
   *
   * @see #getLoginService()
   * /
  function getUserRepository():UserRepository;

  /**
   * Return the workflow repository of this connection.
   * This is only available after establishing a session.
   *
   * @return the workflow repository of this connection
   *
   * @see #getLoginService()
   * /
  function getWorkflowRepository():WorkflowRepository;

  /**
   * Return information about the REST server to which this
   * connection is connected.
   *
   * @return information about the REST server
   * /
  function getSystemInfo():CapSystemInfo;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
