Ext.define("com.coremedia.cap.common.MessageService", function(MessageService) {/*package com.coremedia.cap.common {
import com.coremedia.ui.data.RemoteBean;

/**
 * A service object at which message listeners can be registered.
 * /
public interface MessageService extends RemoteBean {

  /**
   * Add a message listener. A message listener is a function with
   * a single argument of type Message.
   *
   * @param subject the subject on which to listen
   * @param listener the listener
   *
   * @see Message
   * /
  function addMessageListener(subject:String, listener:Function):void;

  /**
   * Remove a message listener.
   *
   * @param subject the subject from which to remove the listener
   * @param listener the listener
   * /
  function removeMessageListener(subject:String, listener:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
