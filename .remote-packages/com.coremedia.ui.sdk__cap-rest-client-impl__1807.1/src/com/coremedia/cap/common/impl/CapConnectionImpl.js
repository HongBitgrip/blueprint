Ext.define("com.coremedia.cap.common.impl.CapConnectionImpl", function(CapConnectionImpl) {/*package com.coremedia.cap.common.impl {

import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.infos.CapSystemInfo;
import com.coremedia.cap.common.infos.impl.CapSystemInfoImpl;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.user.UserRepository;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteBeanCache;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.data.impl.URITemplate;
import com.coremedia.ui.util.AsyncObserver;

import ext.util.Observable;

[RestResource(uriTemplate="connection")]
public class CapConnectionImpl extends RemoteBeanImpl implements CapConnection, MessageService {
  /**
   * The initial delay before another attempt is made to poll events
   * after an error, in milliseconds. Subsequent poll attempts repeatedly
   * double this value.
   * /
  private static const*/var INITIAL_POLL_DELAY$static/*:int*/ = 500;/*
  /**
   * The maximum delay before another attempt is made to poll events
   * after an error, in milliseconds.
   * /
  private static const*/var MAX_POLL_DELAY$static/*:int*/ = 30000;/*

  private var messageListeners:Observable =*/function messageListeners_(){this.messageListeners$vbjp=( new Ext.util.Observable());}/*;

  private var invalidationsRetrievalStateHandler:Function;

  private var automaticInvalidations:Boolean = false;
  private var polling:Boolean = false;
  private var currentTimestamps:Object;
  private var pollDelay:int = 0;

  public static*/ function getInstance$static()/*:CapConnectionImpl*/ {
    return AS3.cast(CapConnectionImpl,com.coremedia.ui.data.beanFactory.getRemoteBean("connection"));
  }/*

  public*/ function CapConnectionImpl$(path/*:String*/) {
    this.super$vbjp(path);messageListeners_.call(this);;
  }/*

  public*/ function getLoginService()/*:CapLoginService*/ {
    return AS3.cast(com.coremedia.cap.common.CapLoginService,com.coremedia.ui.data.beanFactory.getRemoteBean("loginService"));
  }/*

  public*/ function getContentRepository()/*:ContentRepository*/ {
    return this.get('contentRepository');
  }/*

  public*/ function getUserRepository()/*:UserRepository*/ {
    return this.get('userRepository');
  }/*

  public*/ function getWorkflowRepository()/*:WorkflowRepository*/ {
    return this.get('workflowRepository');
  }/*

  private*/ function getInvalidationsUri()/*:String*/ {
    return this.get('invalidationsUri');
  }/*

  public*/ function getSystemInfo()/*:CapSystemInfo*/ {
    return AS3.cast(com.coremedia.cap.common.infos.impl.CapSystemInfoImpl,com.coremedia.ui.data.beanFactory.getRemoteBean('systemInfo'));
  }/*

  /**
   * Retrieve the current logical time from the REST service.
   * The time is passed to the callback function
   * as an object mapping event source ids
   * (for example, &gt;content&gt;) to timestamp strings suitable
   * for each individual event source. The timestamps may then be
   * use to retrieve events that occurred since the indicated
   * logical time.
   *
   * @param callback the callback; signature: function(timestamps:Object)
   * /
  public*/ function getTimestamps(callback/*:Function*/)/*:void*/ {
    var timestampsUri/*:String*/ = this.get('timestampsUri');
    var remoteServiceMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(timestampsUri, "GET");

    remoteServiceMethod.request(null, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var timestamp/*:Object*/ = response.getResponseJSON();
      callback(timestamp);
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      if (response.getError()) {
        response.getError().setHandled(true);
      }
      callback(null);
    });
  }/*

  /**
   * Retrieve the uris of beans that have changed since the given logical time.
   * The callback receives an Invalidations object reporting the uris of modified
   * beans and the timestamp to use when retrieving invalidations the next time.
   * In the case of a communication error, the callback receives a null argument
   * for the invalidations, but it can analyse the remote error for details about
   * the problem.
   *
   * @param startTime the logical time up to which invalidations have already been processed
   * @param immediate Disable the timeout of the invalidation source after a reconnect of the server.
   * @param callback the callback; signature: function(invalidations:Invalidations, error:RemoteError)
   *
   * @see Invalidations
   * /
  public*/ function getInvalidations(startTime/*:Object*/, immediate/*:Boolean*/, callback/*:Function*/)/*:void*/ {
    var requestUri/*:String*/ = this.getInvalidationsUri$vbjp();
    // Invalidation requests should not tracked by the async observer,
    // because there is almost always an invalidation request that hangs
    // in the server.
    var noAsyncObserverOptions/*:Object*/ = {};
    noAsyncObserverOptions[com.coremedia.ui.util.AsyncObserver.SKIP_ASYNC_OBSERVER_OPTION] = true;
    // No automatic retry: the error response triggers a status update.
    var remoteServiceMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(requestUri, "POST", true, true, noAsyncObserverOptions, false);
    remoteServiceMethod.request({
      "immediate": immediate,
      "user": com.coremedia.cap.common.SESSION.getUser().getUriPath(),
      "after": startTime
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var eventsRepresentation/*:Object*/ = response.getResponseJSON();
      callback(eventsRepresentation, null);
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      callback(null, response.getError());
    });
  }/*

  /**
   * Set the handler function that is called when the state of the invalidation
   * polling mechanism changes. The function receives a boolean flag indicating
   * whether invalidations can be retrieved and the remote error
   * object that indicates the problem in case the flag is false.
   * The error object is already marked handled before invoking the handler method.
   *
   * @param handler the error handler function
   *
   * @see RemoteError
   * /
  public*/ function setInvalidationsRetrievalStateHandler(handler/*:Function*/)/*:void*/ {
    this.invalidationsRetrievalStateHandler$vbjp = handler;
  }/*

  public*/ function setAutomaticInvalidations(automaticInvalidations/*:Boolean*/, callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=1)callback=null;
    this.automaticInvalidations$vbjp = automaticInvalidations;

    this.load(function()/*:void*/ {
      if (automaticInvalidations && !this$.polling$vbjp) {
        // No polling process is running. Make a note that it is now.
        this$.polling$vbjp = true;
        // Retrieve the initial timestamp, ...
        this$.getTimestamps(function (timestamp/*:Object*/)/*:void*/ {
          // ... which is stored as the starting point for fetching invalidations.
          if (!this$.currentTimestamps$vbjp) {
            this$.currentTimestamps$vbjp = timestamp;
          }
          // After the initial timestamp has been retrieved we can continue to
          // load other beans and be confident that they are properly invalidated.
          callback && callback();
          // Fetch events.
          this$.pollEvents$vbjp();
        });
      } else {
        callback && callback();
      }
    });
  }/*

  private*/ function pollEvents()/*:void*/ {
    this.getInvalidations(this.currentTimestamps$vbjp, this.pollDelay$vbjp > 0,AS3.bind( this,"getInvalidationsCallback$vbjp"));
  }/*

  private*/ function getInvalidationsCallback(eventsRepresentation/*:Invalidations*/, error/*:RemoteError*/)/*:void*/ {
    if (!this.automaticInvalidations$vbjp) {
      // If automatic invalidations are no longer desired, stop the chain of polls.
      this.polling$vbjp = false;
      // If there was an error while stopping, it can be safely ignored.
      if (error) {
        error.setHandled(true);
      }
      return;
    }

    if (eventsRepresentation) {
      this.invalidationsRetrieved$vbjp(eventsRepresentation);
    } else {
      this.invalidationRetrievalFailed$vbjp(error);
    }
  }/*

  private*/ function invalidationsRetrieved(eventsRepresentation/*:Invalidations*/)/*:void*/ {
    var modified/*:Array*/ =AS3.as( eventsRepresentation.invalidations,  Array);
    if (modified) {
      processInvalidations$static(modified);
    } else {
      // The server could not determine the exact set of bean to invalidate.
      // Be safe and invalidate all.
      com.coremedia.ui.data.impl.RemoteBeanCache.invalidateAll();
      AS3.cast(com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl,this.getWorkflowRepository()).reloadWorklists();
    }

    this.sendMessages$vbjp(eventsRepresentation.messages);

    if (this.invalidationsRetrievalStateHandler$vbjp) {
      this.invalidationsRetrievalStateHandler$vbjp(true, null);
    }

    this.pollDelay$vbjp = 0;
    this.currentTimestamps$vbjp = eventsRepresentation.timestamps;
    this.pollEvents$vbjp();
  }/*

  private static*/ function processInvalidations$static(invalidations/*:Array*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < invalidations.length; i++) {
      var path/*:String*/ = invalidations[i];
      if (com.coremedia.ui.data.impl.URITemplate.containsVariables(path)) {
        com.coremedia.ui.data.impl.RemoteBeanCache.search(new com.coremedia.ui.data.impl.URITemplate(path)).forEach(function (remoteBean/*:RemoteBean*/)/*:void*/ {
          remoteBean.invalidate();
        });
      } else {
        var remoteBean/*:RemoteBean*/ = com.coremedia.ui.data.impl.RemoteBeanCache.peek(path);
        if (remoteBean) {
          remoteBean.invalidate();
        }
      }
    }
  }/*

  private*/ function sendMessages(messages/*:Array*/)/*:void*/ {
    if (messages) {
      for (var i/*:int*/ = 0; i < messages.length; i++) {
        this.sendMessage$vbjp(messages[i]);
      }
    }
  }/*

  private*/ function invalidationRetrievalFailed(error/*:RemoteError*/)/*:void*/ {
    this.pollDelay$vbjp = Math.min(MAX_POLL_DELAY$static, Math.max(INITIAL_POLL_DELAY$static, this.pollDelay$vbjp * 2));
    window.setTimeout(AS3.bind(this,"pollEvents$vbjp"), this.pollDelay$vbjp);

    if (this.invalidationsRetrievalStateHandler$vbjp) {
      this.invalidationsRetrievalStateHandler$vbjp(false, error);
    }
  }/*

  public*/ function addMessageListener(subject/*:String*/, listener/*:Function*/)/*:void*/ {
    this.messageListeners$vbjp.addListener(subject, listener);
  }/*

  public*/ function removeMessageListener(subject/*:String*/, listener/*:Function*/)/*:void*/ {
    this.messageListeners$vbjp.removeListener(subject, listener);
  }/*

  private*/ function sendMessage(message/*:Message*/)/*:void*/ {
    this.messageListeners$vbjp.fireEvent(message.subject, message);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: [
        "com.coremedia.cap.common.CapConnection",
        "com.coremedia.cap.common.MessageService"
      ],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "connection"
        ]
      ]},
      invalidationsRetrievalStateHandler$vbjp: null,
      automaticInvalidations$vbjp: false,
      polling$vbjp: false,
      currentTimestamps$vbjp: null,
      pollDelay$vbjp: 0,
      constructor: CapConnectionImpl$,
      super$vbjp: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getLoginService: getLoginService,
      getContentRepository: getContentRepository,
      getUserRepository: getUserRepository,
      getWorkflowRepository: getWorkflowRepository,
      getInvalidationsUri$vbjp: getInvalidationsUri,
      getSystemInfo: getSystemInfo,
      getTimestamps: getTimestamps,
      getInvalidations: getInvalidations,
      setInvalidationsRetrievalStateHandler: setInvalidationsRetrievalStateHandler,
      setAutomaticInvalidations: setAutomaticInvalidations,
      pollEvents$vbjp: pollEvents,
      getInvalidationsCallback$vbjp: getInvalidationsCallback,
      invalidationsRetrieved$vbjp: invalidationsRetrieved,
      sendMessages$vbjp: sendMessages,
      invalidationRetrievalFailed$vbjp: invalidationRetrievalFailed,
      addMessageListener: addMessageListener,
      removeMessageListener: removeMessageListener,
      sendMessage$vbjp: sendMessage,
      statics: {getInstance: getInstance$static},
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.common.CapConnection",
        "com.coremedia.cap.common.CapLoginService",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteBeanCache",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.data.impl.URITemplate",
        "com.coremedia.ui.util.AsyncObserver"
      ],
      uses: [
        "com.coremedia.cap.common.infos.impl.CapSystemInfoImpl",
        "com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl"
      ]
    };
});
