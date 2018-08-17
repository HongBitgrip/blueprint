Ext.define("com.coremedia.ui.data.impl.RemoteServiceMethodResponse", function(RemoteServiceMethodResponse) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.*;
import com.coremedia.ui.data.error.RemoteError;

import js.XMLHttpRequest;

/**
 * A response from a remote service method request.
 * @see com.coremedia.ui.data.impl.RemoteServiceMethod
 * @see com.coremedia.ui.data.impl.RemoteServiceMethod#request()
 * /
public interface RemoteServiceMethodResponse {

  /**
   * Specifies whether the request was successful or failed.
   * /
  function get success():Boolean;

  /**
   * The "raw" XHR response object.
   * @see ext.data.Connection#request()
   * /
  function get response():XMLHttpRequest;

  /**
   * The parameters that were used when invoking the remote service method.
   * @see com.coremedia.ui.data.impl.RemoteServiceMethod#request()
   * /
  function get params():Object;

  /**
   * The response text, parsed as a JSON object and unmarshalled (e.g. RemoteBean references are resolved),
   * or null if the response text is empty or not a JSON object.
   * @see XMLHttpRequest#responseText
   * @see RemoteService.resolveResponse()
   * /
  function getResponseJSON():Object;

  /**
   * This used to resolve the Location header URL to the corresponding remote bean,
   * but since Location headers continuously caused trouble with HTTP proxies, the result is
   * now read from the response body (where it has been available redundantly for quite some time).
   * The response body is expected to contain JSON with a single $Ref remote bean reference,
   * otherwise, <code>null</code> is returned.
   *
   * @return the single remote bean given in the response body
   * /
  [Deprecated(replacement="#getResponseJSON()")]
  function getLocationAsRemoteBean():RemoteBean;

  /**
   * Return the Error object if the remote method was not successful
   * @return the remote error
   * /
  function getError():RemoteError;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
