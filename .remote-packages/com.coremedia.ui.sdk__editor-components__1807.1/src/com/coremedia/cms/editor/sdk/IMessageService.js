Ext.define("com.coremedia.cms.editor.sdk.IMessageService", function(IMessageService) {/*package com.coremedia.cms.editor.sdk {
import js.Element;
import ext.Component;

import js.Window;

/**
 * Service to send and receive JSON messages between separate frames (and windows).
 * This service provides bean serialization and deserialization as well as secure
 * JSON parsing (if supported by the current browser)
 *
 * Message syntax looks like:
 * {
 *   type: MESSAGE_TYPE,
 *   [replyWith: CONVERSATION_ID,]
 *   [inReplyTo: CONVERSATION_ID,]
 *   body: {
 *     [property1: value1,]
 *     [property2: value2]
 *   }
 * }
 * /
public interface IMessageService {

  /**
   * Registers a listener function to receive messages of a given type from a given window/sender.
   * @param iframe Element object the iframe containing the window on which to listen.
   * @param messageType Message type the listener wants to receive.
   * @param listener The listener function to be called when a matching message is received. The function
   *        is called with the message body and a conversation id (if available).
   *        <pre>function listener(messageBody:Object,conversationId:String):void;</pre>
   * /
  function registerMessageListener(iframe:Element, messageType:String, listener:Function):void;

  /**
   * Unregister a listener function for a certain message type and window.
   * @param iframe Element object the iframe containing the window on which the listener listens.
   * @param messageType Message type the listener is registered for.
   * @param listener The listener function to be removed.
   * /
  function unregisterMessageListener(iframe:Element, messageType:String, listener:Function):void;

  /**
   * Sends a message of the given type and with the given body to the specified recipient. An optional
   * callback function can be provided if a response is expected.
   * @param messageRecipient The recipient window/frame.
   * @param messageType The message type.
   * @param messageBody The message body.
   * @param callback Function called when a response is received.
   *        <pre>function callback(messageBody:Object):void;</pre>
   * @param stakeholder The component interested in the callback; when the component is destroyed, the callback is canceled
   * /
  function sendMessage(messageRecipient:Window, messageType:String, messageBody:Object, callback:Function = undefined, stakeholder:Component = undefined):void;

  /**
   * Sends a response to the given window with the specified conversation ID.
   * @param messageRecipient The recipient window/frame.
   * @param inReplyTo Conversation ID.
   * @param messageBody The message body.
   * /
  function sendResponse(messageRecipient:Window, inReplyTo:String, messageBody:Object):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
