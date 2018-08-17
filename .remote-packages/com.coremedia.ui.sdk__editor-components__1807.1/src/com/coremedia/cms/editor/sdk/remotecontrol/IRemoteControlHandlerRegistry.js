Ext.define("com.coremedia.cms.editor.sdk.remotecontrol.IRemoteControlHandlerRegistry", function(IRemoteControlHandlerRegistry) {/*package com.coremedia.cms.editor.sdk.remotecontrol {
import com.coremedia.ui.data.RemoteBean;

/**
 *  Remote control handler registry..
 * /
public interface IRemoteControlHandlerRegistry {

  /**
   * Creates a url that can be called to open a RemoteBean in Studio.
   *
   * @return  the URL of a RemoteBean to open in Studio
   * /
  function createRemoteControlUrl(bean:RemoteBean):String;

  /**
   * Registers a handler function with a signature
   *
   * <code>function(remoteBean:RemoteBean):Boolean</code>
   *
   * as a remote control handler for opening RemoteBeans
   * (documents or content sets). The function returns true
   * if it can handle the RemoteBean argument.
   *
   * @param remoteControlHandler a function with an argument of type RemoteBean
   * /
  function registerRemoteControlHandler(remoteControlHandler:Function):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
