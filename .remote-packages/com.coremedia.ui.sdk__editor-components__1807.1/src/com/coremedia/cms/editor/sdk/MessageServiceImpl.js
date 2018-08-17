Ext.define("com.coremedia.cms.editor.sdk.MessageServiceImpl", function(MessageServiceImpl) {/*package com.coremedia.cms.editor.sdk {
import com.coremedia.cap.common.SESSION;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.JSON;
import ext.event.Event;

import joo.getOrCreatePackage;

import js.Element;
import js.Window;

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

public class MessageServiceImpl implements IMessageService {

  internal static const MESSAGE_LISTENERS_LIMIT:int = 100;

  // List of all listeners known to the message service.
  private var windowListeners:Array =*/function windowListeners_(){this.windowListeners$28q8=( []);}/*;

  // List of response listeners.
  private var inReplyToIds:Array =*/function inReplyToIds_(){this.inReplyToIds$28q8=( []);}/*;
  private var inReplyToListeners:Array =*/function inReplyToListeners_(){this.inReplyToListeners$28q8=( []);}/*;
  private var inReplyToStakeholders:Array =*/function inReplyToStakeholders_(){this.inReplyToStakeholders$28q8=( []);}/*;

  // Counter to generate unique conversation IDs.
  private var conversationCounter:int = 1;

  // Valid communication partner origin.
  private var validPreviewOrigins:Array;

  // Create service and listen to all message events of the current window.
  public*/ function MessageServiceImpl$() {windowListeners_.call(this);inReplyToIds_.call(this);inReplyToListeners_.call(this);inReplyToStakeholders_.call(this);
    Ext.get(window).addListener("message",AS3.bind( this,"dispatchMessage$28q8"));
  }/*

  /**
   * Process message events.
   * /
  private*/ function dispatchMessage(e/*:Event*/)/*:void*/ {
    // Should not happen but better be safe than sorry.
    var eventType/*:String*/ = e.type;
    if (eventType !== 'message') {
      return;
    }

    // Check message origin
    var origin/*:String*/ = e.browserEvent['origin'];
    if (!this.isValidPreviewOrigin(origin)) {
      com.coremedia.ui.logging.Logger.warn(MessageServiceImpl +  " Received message from non-authorized origin: " + origin);
      return;
    }

    // Parse message
    var msgString/*:String*/ = e.browserEvent['data'];
    var msg/*:Object*/ = MessageServiceImpl.resolvePostMessage(msgString);
    var messageSource/*:Window*/ = e.browserEvent['source'];

    if (msg) {
      // If message is response, call response handler.
      if (msg.inReplyTo) {
        var inReplyToId/*:int*/ = msg.inReplyTo;
        com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + " Received response for conversation " + inReplyToId);
        var inReplyToIdIndex/*:int*/ = this.inReplyToIds$28q8.indexOf(inReplyToId);
        if (inReplyToIdIndex >= 0) {
          var replyToCallback/*:Function*/ = this.inReplyToListeners$28q8[inReplyToIdIndex];
          this.removeFromInReplyTo$28q8(inReplyToIdIndex);
          replyToCallback.call(null, msg.body);
        }
        return;
      }

      // Find and call matching message listeners.
      var messageType/*:String*/ = msg.type;
      var typeListenersMapping/*:Object*/ = this.findTypeListenerMappingForWindow$28q8(messageSource);
      if (typeListenersMapping) {
        var listeners/*:Array*/ = typeListenersMapping[messageType];
        if (listeners) {
          var replyWith/*:String*/ = msg.replyWith ? msg.replyWith : undefined;
          com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + ": Received message. Calling " + listeners.length + " message listeners for message with type " + messageType);
          listeners.forEach(function (listener/*:Function*/)/*:void*/ {
            listener.call(null, msg.body, replyWith);
          });
        }
      }
    }
  }/*

  private*/ function removeFromInReplyTo(inReplyToIndex/*:int*/)/*:void*/ {
    this.inReplyToIds$28q8.splice(inReplyToIndex, 1);
    this.inReplyToListeners$28q8.splice(inReplyToIndex, 1);
    this.inReplyToStakeholders$28q8.splice(inReplyToIndex, 1);
    var removedStakeholder/*:Component*/ = this.inReplyToStakeholders$28q8[inReplyToIndex];
    if (removedStakeholder && this.inReplyToStakeholders$28q8.indexOf(removedStakeholder) === -1) {
      // Remove listener on stakeholder when no replies are pending.
      removedStakeholder.un("destroy",AS3.bind( this,"cancelInReplyToOnDestroy$28q8"));
    }
  }/*

  /**
   * Initialize the current message service instance.
   * /
  public static*/ function initMessageService$static()/*:void*/ {
    if (!com.coremedia.cms.editor.sdk.messageService) {
      joo.getOrCreatePackage("com.coremedia.cms.editor.sdk").messageService = new MessageServiceImpl();
    }
  }/*

  public*/ function registerMessageListener(iframe/*:Element*/, messageType/*:String*/, listener/*:Function*/)/*:void*/ {
    // Make sure that all required parameters are given
    if (iframe && messageType && listener) {
      // Get list of listeners for given window or create if not available yet.
      var typeListenersMapping/*:Object*/ = this.findTypeListenerMappingForIframe$28q8(iframe);
      if (!typeListenersMapping) {
        this.windowListeners$28q8.push([iframe, {}]);
        typeListenersMapping = this.findTypeListenerMappingForIframe$28q8(iframe);
      }

      // Init listener list for message type if not available yet.
      if (!typeListenersMapping[messageType]) {
        typeListenersMapping[messageType] = [];
      }
      var typeListeners/*:Array*/ = typeListenersMapping[messageType];

      // Save new listener
      com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + " Registered listener for message Type " + messageType);
      typeListeners.push(listener);
    }
  }/*

  /**
   * Retrieve map with message types and corresponding listeners for the given window.
   * /
  private*/ function findTypeListenerMappingForWindow(contentWindow/*:Window*/)/*:Object*/ {
    var index/*:int*/ = this.findTypeListenerMappingIndexForWindow$28q8(contentWindow);
    if (index >= 0) {
      return this.windowListeners$28q8[index][1];
    }
    return null;
  }/*

  private*/ function findTypeListenerMappingIndexForWindow(contentWindow/*:Window*/)/*:int*/ {
    for (var i/*:int*/ = 0; i < this.windowListeners$28q8.length; i++) {
      var windowTypesListenersTuple/*:Array*/ = this.windowListeners$28q8[i];
      try {
        if (windowTypesListenersTuple[0].contentWindow === contentWindow) {
          return i;
        }
      } catch (e/*:**/) {
        com.coremedia.ui.logging.Logger.warn("Error while reading DOM Element");
      }
    }
    return -1;
  }/*

  /**
   * Retrieve map with message types and corresponding listeners for the given window.
   * /
  private*/ function findTypeListenerMappingForIframe(iframe/*:Element*/)/*:Object*/ {
    var index/*:int*/ = this.findTypeListenerMappingIndexForIframe$28q8(iframe);
    if (index >= 0) {
      return this.windowListeners$28q8[index][1];
    }
    return null;
  }/*

  private*/ function findTypeListenerMappingIndexForIframe(iframe/*:Element*/)/*:int*/ {
    for (var i/*:int*/ = 0; i < this.windowListeners$28q8.length; i++) {
      var windowTypesListenersTuple/*:Array*/ = this.windowListeners$28q8[i];
      try {
        if (windowTypesListenersTuple[0] === iframe) {
          return i;
        }
      } catch (e/*:**/) {
        com.coremedia.ui.logging.Logger.warn("Error while reading DOM Element");
      }
    }
    return -1;
  }/*

  private*/ function cancelInReplyToOnDestroy(stakeholder/*:Component*/)/*:void*/ {
    for (var i = this.inReplyToStakeholders$28q8.length - 1; i >= 0; i--) {
      if (this.inReplyToStakeholders$28q8[i] === stakeholder) {
        this.removeFromInReplyTo$28q8(i);
      }
    }
  }/*

  public*/ function sendMessage(messageRecipient/*:Window*/, messageType/*:String*/, messageBody/*:Object*/, callback/*:Function = undefined*/, stakeholder/*:Component = undefined*/)/*:void*/ {
    if (messageRecipient && messageType && messageBody) {
      var message/*:Object*/ = {
        type:messageType,
        body:messageBody
      };

      if (callback && Ext.isFunction(callback)) {
        // Set conversation ID in message and save response handler under this ID.
        var replyWithId/*:int*/ = this.createConversationId$28q8();
        message.replyWith = replyWithId;
        this.inReplyToIds$28q8.push(replyWithId);
        this.inReplyToListeners$28q8.push(callback);
        this.inReplyToStakeholders$28q8.push(stakeholder);

        // Remove oldest response listeners if list capacity is exceeded.
        if (this.inReplyToIds$28q8.length > MessageServiceImpl.MESSAGE_LISTENERS_LIMIT) {
          this.removeFromInReplyTo$28q8(0);
          com.coremedia.ui.logging.Logger.info(MessageServiceImpl + " Response callback list size limit exceeded. Removed oldest entry.");
        }

        if (stakeholder) {
          stakeholder.on("destroy",AS3.bind( this,"cancelInReplyToOnDestroy$28q8"));
        }
      }

      var messageString/*:String*/ = com.coremedia.ui.util.ObjectUtils.toJson(message);
      com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + " Send message of type " + messageType + ". Response callback ID: " + message.replyWith);
      messageRecipient.postMessage(messageString, this.getTargetOrigin());
    }
  }/*

  private*/ function createConversationId()/*:int*/ {
    return this.conversationCounter$28q8++;
  }/*

  public*/ function unregisterMessageListener(iframe/*:Element*/, messageType/*:String*/, listener/*:Function*/)/*:void*/ {
    var typeListenersMapping/*:Object*/ = this.findTypeListenerMappingForIframe$28q8(iframe);
    if (!typeListenersMapping) {
      return;
    }
    if (!typeListenersMapping[messageType]) {
      return;
    }
    var typeListeners/*:Array*/ = typeListenersMapping[messageType];
    var listenerIndex/*:int*/ = typeListeners.indexOf(listener);
    if (listenerIndex === -1) {
      return;
    }
    com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + " Unregistered listener for message Type " + messageType);
    typeListeners.splice(listenerIndex, 1);

    // Cleanup
    if (typeListeners.length == 0) {
      delete typeListenersMapping[messageType];
    }
    if (com.coremedia.ui.util.ObjectUtils.isEmpty(typeListenersMapping)) {
      this.windowListeners$28q8.splice(this.findTypeListenerMappingIndexForIframe$28q8(iframe), 1);
    }
  }/*

  public*/ function sendResponse(messageRecipient/*:Window*/, inReplyTo/*:String*/, messageBody/*:Object*/)/*:void*/ {
    if (messageRecipient && inReplyTo && messageBody) {
      var message/*:Object*/ = {
        inReplyTo:inReplyTo,
        body:messageBody
      };
      var messageString/*:String*/ = com.coremedia.ui.util.ObjectUtils.toJson(message);
      com.coremedia.ui.logging.Logger.debug(MessageServiceImpl + " Send response with conversation ID " + inReplyTo + ".");
      messageRecipient.postMessage(messageString, this.getTargetOrigin());
    }
  }/*

  /**
   * Returns parsed JSON message with resolved bean references or undefined if
   * the given string is not valid JSON.
   * @param msgString JSON string
   * @return Parsed JSON object with resolved bean references
   * /
  internal static*/ function resolvePostMessage$static(msgString/*:String*/)/*:Object*/ {
    var message/*:Object*/ = Ext.JSON.decode(msgString, true);
    return message && com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(message);
  }/*

  internal*/ function isValidPreviewOrigin(origin/*:String*/)/*:Boolean*/ {
    var validOrigins/*:Array*/ = this.getValidPreviewOrigins$28q8();
    for (var i=0; i < validOrigins.length; i++) {
      // The previewUrlWhitelist-property in proprties file may include wild
      // cards for valid origins. These wildcards ('*') are converted in JavaScript
      // RexExp patterns ('.*'). Afterwards each resulting valid-origin-regexp
      // is checked whether it matches with the given origin.
      var validOriginsRegExpString/*:String*/ = (AS3.as(validOrigins[i],  String)).replace(/\*/g, ".*");
      var validOriginRegExp/*:RegExp*/ = new RegExp(validOriginsRegExpString);
      if (origin.match(validOriginRegExp) &&
              origin.match(validOriginRegExp).indexOf(origin) != -1) {
        return true;
      }
    }
    return false;
  }/*

  private*/ function getValidPreviewOrigins()/*:Array*/ {
    // Init if the list has not been initialized yet.
    if (!this.validPreviewOrigins$28q8 || this.validPreviewOrigins$28q8.length == 0 || !this.validPreviewOrigins$28q8[0]) {
      var whitelist/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository()["getPreviewUrlWhitelist"]();
      if (whitelist && whitelist.length > 0) {
        this.validPreviewOrigins$28q8 = whitelist;
      } else {
        var previewControllerUri/*:URI*/ = net.jangaroo.net.URIUtils.parse(com.coremedia.cap.common.SESSION.getConnection().getContentRepository()["getPreviewControllerUriPattern"]());
        if (previewControllerUri.isAbsolute) {
          this.validPreviewOrigins$28q8 = [previewControllerUri.scheme + "://" + previewControllerUri.authority];
        } else {
          var studioUri/*:URI*/ = net.jangaroo.net.URIUtils.parse(window.location.href);
          this.validPreviewOrigins$28q8 = [studioUri.scheme + "://" + studioUri.authority];
        }
      }
    }
    return this.validPreviewOrigins$28q8;
  }/*

  /**
   * Get the target origin for all outgoing messages. This only works for scenarios with
   * exactly one whitelisted URL that includes no wildcard. Returns '*' otherwise.
   * /
  internal*/ function getTargetOrigin()/*:String*/ {
    var validPreviewOrigin/*:String*/ = "*";
    if (this.getValidPreviewOrigins$28q8().length === 1 &&
            (AS3.as(this.getValidPreviewOrigins$28q8()[0],  String)).indexOf("*") === -1) {
      validPreviewOrigin = this.getValidPreviewOrigins$28q8()[0];
    }
    return validPreviewOrigin;
  }/*

  // Currently only used for unit tests
  internal*/ function setValidPreviewOrigins(origins/*:Array*/)/*:void*/ {
    this.validPreviewOrigins$28q8 = origins;
  }/*

  internal*/ function getWindowListeners()/*:Array*/ {
    return this.windowListeners$28q8;
  }/*

  internal*/ function getInReplyToIds()/*:Array*/ {
    return this.inReplyToIds$28q8;
  }/*

  internal*/ function getInReplyToListeners()/*:Array*/ {
    return this.inReplyToListeners$28q8;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.IMessageService"],
      conversationCounter$28q8: 1,
      validPreviewOrigins$28q8: null,
      constructor: MessageServiceImpl$,
      dispatchMessage$28q8: dispatchMessage,
      removeFromInReplyTo$28q8: removeFromInReplyTo,
      registerMessageListener: registerMessageListener,
      findTypeListenerMappingForWindow$28q8: findTypeListenerMappingForWindow,
      findTypeListenerMappingIndexForWindow$28q8: findTypeListenerMappingIndexForWindow,
      findTypeListenerMappingForIframe$28q8: findTypeListenerMappingForIframe,
      findTypeListenerMappingIndexForIframe$28q8: findTypeListenerMappingIndexForIframe,
      cancelInReplyToOnDestroy$28q8: cancelInReplyToOnDestroy,
      sendMessage: sendMessage,
      createConversationId$28q8: createConversationId,
      unregisterMessageListener: unregisterMessageListener,
      sendResponse: sendResponse,
      isValidPreviewOrigin: isValidPreviewOrigin,
      getValidPreviewOrigins$28q8: getValidPreviewOrigins,
      getTargetOrigin: getTargetOrigin,
      setValidPreviewOrigins: setValidPreviewOrigins,
      getWindowListeners: getWindowListeners,
      getInReplyToIds: getInReplyToIds,
      getInReplyToListeners: getInReplyToListeners,
      statics: {
        MESSAGE_LISTENERS_LIMIT: 100,
        initMessageService: initMessageService$static,
        resolvePostMessage: resolvePostMessage$static
      },
      requires: [
        "Ext",
        "Ext.JSON",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.IMessageService",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ObjectUtils",
        "net.jangaroo.net.URIUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.messageService"]
    };
});
