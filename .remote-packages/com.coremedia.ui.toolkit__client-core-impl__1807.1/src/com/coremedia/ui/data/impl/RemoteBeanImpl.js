Ext.define("com.coremedia.ui.data.impl.RemoteBeanImpl", function(RemoteBeanImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.*;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.error.NotExistsError;
import com.coremedia.ui.data.error.NotReadableError;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ExecuteEventually;
import com.coremedia.ui.util.RequestCounter;

import js.XMLHttpRequest;

public class RemoteBeanImpl extends BeanImpl implements QueuedRemoteBean {

  /**
   * A property name for use in encoding references to remote beans in
   * an object structure.
   * /
  public static const REF_PROPERTY:String = '$Ref';

  private static const*/var LOADED_CHANGED_EVENT_NAME$static/*:String*/ = '_loadedChanged';/*
  private static const*/var REMOTE_BEAN_LOADED_EVENT_NAME$static/*:String*/ = '_remoteBeanLoaded';/*
  private static const*/var BEFORE_FLUSH_EVENT_NAME$static/*:String*/ = '_beforeFlush';/*
  private static const*/var ETAG_EVENT_NAME$static/*:String*/ = '_etag';/*

  /*

   An overview of remote bean states as represented by the subsequently
   defined constants. This is not to be confused with the BeanState values,
   which represent externally visible behaviour. The remote bean states
   defined here coordinate read and write operations, making sure that
   an outdated state will eventually be overwritten if there are interested
   clients.

   queried: get() | load()
   RQ: request queue
   read: read success | read failure

   Operations that are not mentioned leave the bean in the old state.

                                   |
                                   V
                            +--------------+   inject()
            +-------------> |   INVALID    | --------------------------------------------+
            |               +--------------+                                             |
            |                      |                                                     |
        no  |                      | queried                                             |
            |                      V                                                     |
   .--------------.   yes   +--------------+                                             |
  < has listeners? > -----> |   WAITING    | <--------------------------+                |
   '--------------'         +--------------+                            |                |
            |                  ^   |                                    |                |
            |                  |   | [RQ empty & requestRecommended]    |                |
            |             read |   |                                    |                |
            |   [RQ not empty] |   |                                    | read           |
            |                  |   V                                    |                |
            |               +--------------+   invalidate()      +--------------+        |
            |               |   LOADING    | ------------------> |  OVERTAKEN   |        |
            |               +--------------+   set()             +--------------+        |
            |                      |                                                     |
            |                      | read [RQ empty]                                     |
            |                      V                                                     |
            |               +--------------+                                             |
            +-------------- |    VALID     | <-------------------------------------------+
             invalidate()   +--------------+

   * /


  /**
   * The remote bean has been invalidated or has never been loaded.
   * The properties might be unset or outdated.
   * If there is still interest in the current properties, the remote bean
   * should be loaded.
   * /
  private static const*/var INVALID$static/*:int*/ = -4;/*
  /**
   * The remote bean is supposed to be loaded as soon as the request queue
   * is empty. This is the only state in which he remote bean may wait
   * for the request queue.
   * /
  private static const*/var WAITING$static/*:int*/ = -3;/*
  /**
   * The remote bean is being loaded. A GET request
   * has been sent. The result of the pending GET is still expected
   * to represent a valid server state.
   * /
  private static const*/var LOADING$static/*:int*/ = -2;/*
  /**
   * The remote bean is being loaded, but it has also been invalidated
   * or a write request has been performed after the load has started.
   * The load has to be retried once the current load is finished.
   * /
  private static const*/var OVERTAKEN$static/*:int*/ = -1;/*
  /**
   * The remote bean is loaded. The properties represent a valid
   * server state.
   * /
  private static const*/var VALID$static/*:int*/ = 0;/*

  private var path:String;
  private var state:int =*/function state_(){this.state$dHfa=( INVALID$static);}/*;
  private var loaded:Boolean = false;
  private var beanState:BeanState =*/function beanState_(){this.beanState$dHfa=( com.coremedia.ui.data.BeanState.UNKNOWN);}/*;

  /**
   * When false, indicates that writes should not be propagated to the remote
   * server at the moment.
   * /
  private var writesAllowed:Boolean = true;

  private var immediateProperties:Object;

  private var eTag:String;
  private var rq:RequestQueue;*/function static$0(){

  // static initializer
  {
    com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl
            .initRemoteErrorHandlerRegistry()
            .registerErrorHandler(remoteErrorHandler$static);

    com.coremedia.ui.data.impl.RemoteService.registerMarshaller(RemoteBeanImpl, RemoteBeanImpl.marshal);
  }}/*

  public*/ function RemoteBeanImpl$(path/*:String*/) {
    this.super$dHfa();state_.call(this);beanState_.call(this);;
    this.immediateProperties$dHfa = {}; // TODO: this object should be static on each inheritance level!
    this.path$dHfa = path;
    this.rq$dHfa = this.createRequestQueue();
    this.rq$dHfa.addBean(this);
  }/*

  protected*/ function createRequestQueue()/*:RequestQueue*/ {
    return new com.coremedia.ui.data.impl.RequestQueue();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getUriPath()/*:String*/ {
    return this.path$dHfa;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getUri()/*:String*/ {
    return com.coremedia.ui.data.impl.RemoteService.calculateRequestURI(this.path$dHfa);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getAbsoluteUri()/*:String*/ {
    return com.coremedia.ui.data.impl.RemoteService.calculateAbsoluteURI(this.path$dHfa).toString();
  }/*

  public override*/ function get(property/*:**/)/*:**/ {
    // Some properties are not stored as ordinary property values.
    if (property === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      return this.getState();
    }
    
    if (property === 'uriPath') {
      return this.getUriPath();
    }

    // Static properties are always present and not protected by read rights.
    // They cannot change and do not have to support dependency tracking
    if (this.immediateProperties$dHfa[property]) {
      return this.doGet(property, false);
    }

    // Make sure the bean gets loaded.
    this.queried$dHfa();

    // Other properties may only be retrieved if the bean might be readable.
    if (this.getState().exists === false) {
      throw new com.coremedia.ui.data.error.NotExistsError(this, "get('" + property + "') on non-existing bean with path='" + this.path$dHfa + "'");
    }
    if (this.getState().readable === false) {
      throw new com.coremedia.ui.data.error.NotReadableError(this, property, "get('" + property + "') on unreadable bean with path='" + this.path$dHfa + "'");
    }

    return com.coremedia.ui.data.impl.BeanImpl.prototype.get.call(this,property);
  }/*


  override protected*/ function getOrCreate(object/*:Object*/, propertyPath/*:String*/, lastProperty/*:String*/)/*:**/ {
    return object[lastProperty];
  }/*


  /**
   * @inheritDoc
   * /
  public*/ function load(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    if (this.state$dHfa === VALID$static) {
      if (callback) {
        callback(this);
      }
    } else {
      if (callback) {
        this.addListener(REMOTE_BEAN_LOADED_EVENT_NAME$static, function(passThroughData/*:**/)/*:void*/ {callback(passThroughData);}, undefined, {single:true});
      }
      this.queried$dHfa();
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function flush(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    if (this.hasListener(BEFORE_FLUSH_EVENT_NAME$static)) {
      var beforeFlushEvent/*:BeforeFlushEventImpl*/ = new com.coremedia.ui.data.impl.BeforeFlushEventImpl(this);
      this.fireEvent(BEFORE_FLUSH_EVENT_NAME$static, beforeFlushEvent);
    }
    this.rq$dHfa.flush(this, callback);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isLoaded()/*:Boolean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanPropertyDependency(this, LOADED_CHANGED_EVENT_NAME$static));
    return this.loaded$dHfa;
  }/*

  /**
   * Set a property that is immediately present without even
   * consulting the server and without needing rights checks.
   * An immediate property must be immutable.
   *
   * @param property name of the immediate property
   * @param value computed value
   * /
  protected*/ function setImmediateProperty(property/*:**/, value/*:**/)/*:void*/ {
    this.immediateProperties$dHfa[property] = true;
    this.setInternal(property, value);
  }/*

  /**
   * Set a property that must not be written back to the server.
   * @param property name of the computed property
   * @param value computed value
   * @return Boolean whether the computed value has changed
   * /
  protected*/ function setInternal(property/*:**/, value/*:**/)/*:Boolean*/ {
    var properties/*:Object*/ = {};
    properties[property] = value;
    return this.setInternalProperties(properties);
  }/*

  /**
   * Sets properties that must not be written back to the server.
   * @param newValues name-value object of the computed property
   * @return Boolean whether the computed value has changed
   * /
  public*/ function setInternalProperties(newValues/*:Object*/)/*:Boolean*/ {
    return this.doUpdateProperties(newValues, true, this.beanState$dHfa, this.beanState$dHfa);
  }/*

  override protected*/ function propertiesUpdated(overwrittenValues/*:Object*/, newValues/*:Object*/)/*:void*/ {
    if (this.state$dHfa === LOADING$static) {
      this.state$dHfa = OVERTAKEN$static;
    }
    if (this.writesAllowed$dHfa) {
      this.rq$dHfa.propertiesUpdated(this, overwrittenValues, newValues);
    }
    com.coremedia.ui.data.impl.BeanImpl.prototype.propertiesUpdated.call(this,overwrittenValues, newValues);
  }/*

  public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    if (callback &&AS3.is( callback,  Function)) {
      this.addListener(REMOTE_BEAN_LOADED_EVENT_NAME$static, function(passThroughData/*:**/)/*:void*/ {callback(passThroughData);}, undefined, {single:true});
    }

    if (this.state$dHfa === LOADING$static) {
      this.state$dHfa = OVERTAKEN$static;
    } else if (this.state$dHfa === VALID$static || this.state$dHfa === INVALID$static) {
      this.state$dHfa = INVALID$static;
      // Only issue reloading if any listeners are present.
      if (this.hasAnyListener()) {
        this.issueLoadRequest$dHfa();
      } else if (this.beanState$dHfa === com.coremedia.ui.data.BeanState.NON_EXISTENT) {
        // It may happen that a remote bean is only temporarily 'non-existent'.
        // In this case set bean state to unknown so that accessing the bean
        // at a later stage triggers a load.
        this.beanState$dHfa = com.coremedia.ui.data.BeanState.UNKNOWN;
        var oldLoaded/*:Boolean*/ = this.loaded$dHfa;
        this.loaded$dHfa = false;
        if (oldLoaded) {
          this.fireEvent(LOADED_CHANGED_EVENT_NAME$static, this);
        }
      }
    }
    // If WAITING or OVERTAKEN, the remote bean will be loaded eventually.
  }/*


  /**
   * Check wether the state of this remote bean is outdated (e.g. after an {@link #invalidate()} call).
   * If it is, make sure it is reloaded and add a dependency
   * which fires when the bean has finished reloading and is in valid state.
   *
   * @return true if this remote bean is outdated.
   * /
  public*/ function checkOutdated()/*:Boolean*/ {
    if (this.state$dHfa === VALID$static) {
      return false;
    }
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanPropertyDependency(this, REMOTE_BEAN_LOADED_EVENT_NAME$static));
    this.queried$dHfa();
    return true;
  }/*

  protected*/ function hasAnyListener()/*:Boolean*/ {
    for (var e/*:String*/ in this.events) {
      if(this.hasListener(e)) {
        return true;
      }
    }
    return false;
  }/*

  private*/ function queried()/*:void*/ {
    if (this.state$dHfa === INVALID$static) {
      this.issueLoadRequest$dHfa();
    }
    // Calls in other states can be ignored.
    // If LOADED, the remote bean is already in a readable state.
    // IF WAITING, LOADING, or OVERTAKEN, the remote bean will be loaded eventually.
  }/*

  private*/ function issueLoadRequest()/*:void*/ {
    this.state$dHfa = WAITING$static;
    if (this.rq$dHfa.writePending()) {
      this.rq$dHfa.notifyWhenIdle(this);
    } else if (!com.coremedia.ui.util.RequestCounter.isRequestRecommended()) {
      com.coremedia.ui.util.RequestCounter.whenRequestRecommended(AS3.bind(this,"issueLoadRequest$dHfa"));
    } else {
      this.doLoad$dHfa();
    }
  }/*

  // Called in state waiting
  public*/ function notifyRequestQueueIdle()/*:void*/ {
    // The request queue is idle. This bean can be safely loaded.
    this.issueLoadRequest$dHfa();
  }/*

  private*/ function doLoad()/*:void*/ {
    this.state$dHfa = LOADING$static;
    var requestObject/*:Object*/ = {
      url: this.getUri(),
      method: 'GET',
      success:AS3.bind( this,"onReadSuccess$dHfa"),
      failure:AS3.bind( this,"onReadFailure$dHfa")
    };
    com.coremedia.ui.util.RequestCounter.openRequest();
    try {
      com.coremedia.ui.data.impl.RemoteService.getConnection().request(requestObject);
    } catch (e/*:**/) {
      com.coremedia.ui.util.RequestCounter.closeRequest();
      throw new AS3.Error("Unable to send Bean " + requestObject.method + " request: " + e);
    }
  }/*

  /**
   * Inject the given property values into the remote bean.
   * The values were retrieved as the side effect of another read operation.
   * The bean can be considered loaded after applying the values.
   *
   * @param newValues the values
   * /
  internal*/ function inject(newValues/*:Object*/)/*:void*/ {
    this.state$dHfa = VALID$static;
    var oldLoaded/*:Boolean*/ = this.loaded$dHfa;
    this.loaded$dHfa = true;
    this.setInternalProperties(newValues);
    this.fireLoaded(oldLoaded);
  }/*

  internal*/ function   fireLoaded(oldLoaded/*:Boolean*/)/*:void*/ {
    this.fireEvent(REMOTE_BEAN_LOADED_EVENT_NAME$static, this);
    if (!oldLoaded) {
      this.fireEvent(LOADED_CHANGED_EVENT_NAME$static, this);
    }
  }/*

  public*/ function doWriteChanges(changedProperties/*:Object*/)/*:void*/ {
    var requestObject/*:Object*/ = {
      url : this.getUri(),
      method: 'PUT',
      success:AS3.bind( this,"onWriteSuccessInternal$dHfa"),
      failure:AS3.bind( this,"onWriteFailureInternal$dHfa")
    };

    var etag/*:String*/ = this.rq$dHfa.getETag();
    if(etag) {
      requestObject.headers = {'Etag': '"' + com.coremedia.ui.data.impl.RemoteService.formatEtag(etag)};
    }

    this.marshalChangedProperties(requestObject, changedProperties);
    com.coremedia.ui.util.RequestCounter.openRequest();
    try {
      com.coremedia.ui.data.impl.RemoteService.getConnection().request(requestObject);
    } catch (e/*:**/) {
      com.coremedia.ui.util.RequestCounter.closeRequest();
      throw new AS3.Error("Unable to send Bean " + requestObject.method + " request: " + e);
    }
  }/*

  /**
   * Fill a collection of changed properties into the given request object.
   * The properties may either be set as parameters or as JSON data.
   *
   * @param requestObject a request object to be passed to ext.data.Connection#request
   * @param changedProperties the changed properties of this bean
   *
   * @see ext.data.Connection#request
   * /
  protected*/ function marshalChangedProperties(requestObject/*:Object*/, changedProperties/*:Object*/)/*:void*/ {
    var jsonData/*:Object*/ = {};
    for (var propertyPath/*:String*/ in changedProperties) {
      var value/*:**/ = changedProperties[propertyPath];
      // If the property has become undefined, it has also been removed from the list of descriptors.
      // The server will analyse that list and remove properties as needed.
      if (value !== undefined) {
        // Locate the subobject that receives the property.
        var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(propertyPath);
        AS3.assert(propertyPathArcs.length >= 1, "RemoteBeanImpl.as", 436, 9);
        var current/*:Object*/ = jsonData;
        var propertyPathPrefix/*:String*/;
        for (var i/*:int*/ = 0; i < propertyPathArcs.length - 1; i++) {
          var property/*:String*/ = propertyPathArcs[i];
          propertyPathPrefix = com.coremedia.ui.data.impl.PropertyPathUtil.append(propertyPathPrefix, property);
          var next/*:Object*/ = current[property];
          if (!next) {
            // If the sub-bean has been created and is stored in the change properties,
            // use the new object.
            // Use changed properties or create an empty object for the nested struct.
            next = changedProperties[propertyPathPrefix] || {};
            current[property] = next;
          }
          current = next;
        }

        var lastProperty/*:String*/ = propertyPathArcs[propertyPathArcs.length - 1];
        if (current[lastProperty] === undefined) {
          current[lastProperty] = com.coremedia.ui.data.impl.RemoteService.marshalValue(value);
        }
      }
    }
    requestObject.jsonData = jsonData;
  }/*

  /**
   * Ext.data.Connection handles the "callback" *after* "success" / "failure", so to make sure this
   * code is always executed, we rather call it in both cases before any other code that may fail.
   * /
  private*/ function onWriteComplete(error/*:RemoteError*/)/*:void*/ {
    this.rq$dHfa.onWriteComplete(error);
  }/*

  private*/ function onWriteSuccessInternal(response/*:XMLHttpRequest*/, options/*:Object*/)/*:void*/ {
    // Mark the request complete.
    com.coremedia.ui.util.RequestCounter.closeRequest();

    var oldETag/*:String*/ = this.eTag$dHfa;
    var newETag/*:String*/ = com.coremedia.ui.data.impl.RemoteService.getEtag(response);
    this.updateETag$dHfa(newETag);

    var isJsonResponse/*:Boolean*/ = "application/json" === response.getResponseHeader("Content-Type") &&
            response.responseText.substr(0,1) === '{';
    var writeResult/*:WriteResult*/ = isJsonResponse ?AS3.as( com.coremedia.ui.data.impl.RemoteService.resolveResponse(response.responseText, this.path$dHfa),  com.coremedia.ui.data.impl.WriteResult) : null;

    // If the server has reported updated timestamps, make sure to remember them
    // for later reference.
    if (writeResult && writeResult.timestamps) {
      com.coremedia.ui.data.impl.TimeTracker.advanceTimestamps(writeResult.timestamps);
    }

    this.onWriteComplete$dHfa(null);

    // If the server reported some rewritten values, ...
    if (writeResult) {
      // ... we must update all affected beans ...
      for (var updatedPath/*:String*/ in writeResult.updates) {
        var properties/*:Object*/ =  writeResult.updates[updatedPath];
        var updatedBean/*:RemoteBeanImpl*/ = AS3.cast(RemoteBeanImpl,com.coremedia.ui.data.impl.RemoteBeanCache.peek(updatedPath));
        // ... if the bean is known and loaded and thus might contain outdated values.
        if (updatedBean && updatedBean.isLoaded()) {
          updatedBean.writeResultReceived$dHfa(properties);
        }
      }
    }
    this.rq$dHfa.onWriteSuccess(this);
    this.onWriteSuccess(response, options);

    if (oldETag !== newETag) {
      this.fireETag();
    }
  }/*

  private*/ function writeResultReceived(properties/*:Object*/)/*:void*/ {
    var newValues/*:Object*/ = this.processWriteResult(properties);
    // We must check whether these values might again be obsolete due to newer writes.
    var pendingWriteProperties/*:Array*/ = this.rq$dHfa.getPendingWriteProperties(this);
    for (var i/*:uint*/ = 0; i < pendingWriteProperties.length; i++) {
      delete newValues[pendingWriteProperties[i]];
    }
    // The remaining properties can be set into the bean.
    this.setInternalProperties(newValues);
  }/*

  private*/ function onWriteFailureInternal(response/*:XMLHttpRequest*/, options/*:Object*/)/*:void*/ {var this$=this;
    // Mark the request complete.
    com.coremedia.ui.util.RequestCounter.closeRequest();

    // Make sure that no writes occur before we have resolved all problems.
    this.writesAllowed$dHfa = false;

    this.rq$dHfa.onWriteFailureInternal();

    // Prepare a handler to be executed *after* all error handlers have
    // completed their actions.
    var willHandleStrategy/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function()/*:void*/ {
      // Only call the internal function if the error has not already been handled or
      // no error object is there -> bad error
      if(!error.isHandled()) {
        // We never know what has happened on the server.
        com.coremedia.ui.logging.Logger.error(RemoteBeanImpl + " " + this$.getUriPath() + ": Communication error: " + response.status + " " + response.responseText + " " + error);
      }
      // While writesAllowed is false, the local state of the bean may diverge from
      // the server state. Invalidate the bean in order to receive the last valid state.
      this$.invalidate(AS3.bind(this$,"allowWrites$dHfa"));
    });

    var error/*:RemoteError*/ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response, willHandleStrategy);
    this.onWriteComplete$dHfa(error);
    (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(error, this);

    // Execute the willHandleStrategy now or sometimes in the future when all
    // error handlers are finished.
    willHandleStrategy.proceed();
  }/*

  private*/ function allowWrites()/*:void*/ {
    this.writesAllowed$dHfa = true;
  }/*

  /**
   * Used by RemoteBeanImplTest and can be overwritten for post processing on writes
   * @param response the response
   * @param options the request options
   * /
  protected*/ function onWriteSuccess(response/*:XMLHttpRequest*/, options/*:Object*/)/*:void*/ {
    com.coremedia.ui.logging.Logger.debug(RemoteBeanImpl + " " + this.getUriPath() + ": POST successful");
  }/*

  private*/ function onReadSuccess(result/*:XMLHttpRequest*//*, request*/)/*:void*/ {
    // Mark the request complete.
    com.coremedia.ui.util.RequestCounter.closeRequest();

    if (this.rq$dHfa.writePending()) {
      // This read request has been overtaken by a write.
      this.state$dHfa = WAITING$static;
      this.rq$dHfa.notifyWhenIdle(this);
    } else if (this.state$dHfa === OVERTAKEN$static) {
      // This read request has been overtaken by an invalidation.
      this.issueLoadRequest$dHfa();
    } else {
      var newValues/*:Object*/ = com.coremedia.ui.data.impl.RemoteService.resolveResponse(result.responseText, this.path$dHfa);
      AS3.assert(!(com.coremedia.ui.data.BeanState.PROPERTY_NAME in newValues), "RemoteBeanImpl.as", 579, 7);
      var oldState/*:BeanState*/ = this.beanState$dHfa;
      this.beanState$dHfa = com.coremedia.ui.data.BeanState.READABLE;

      var oldETag/*:String*/ = this.eTag$dHfa;
      var newETag/*:String*/ = com.coremedia.ui.data.impl.RemoteService.getEtag(result);
      this.updateETag$dHfa(newETag);

      this.state$dHfa = VALID$static;
      var oldLoaded/*:Boolean*/ = this.loaded$dHfa;
      this.loaded$dHfa = true;
      var oldValues/*:Object*/ = this.doUpdateProperties(this.processReadResult(newValues), true, oldState, this.beanState$dHfa);

      this.fireLoaded(oldLoaded);
      this.broadcastStateChange$dHfa(oldState, oldValues);
      if (oldETag !== newETag) {
        this.fireETag();
      }
    }
  }/*

  private*/ function updateETag(newETag/*:String*/)/*:void*/ {
    this.eTag$dHfa = newETag;
    this.rq$dHfa.setETag(this.eTag$dHfa);
  }/*

  public*/ function requestQueueETagUpdated()/*:void*/ {
    if (this.eTag$dHfa && this.rq$dHfa.getETag() !== this.eTag$dHfa) {
      this.invalidate();
    }
  }/*

  internal*/ function fireETag()/*:void*/ {
    this.fireEvent(ETAG_EVENT_NAME$static, this);
  }/*

  public*/ function dependOnEtag()/*:void*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, ETAG_EVENT_NAME$static);
  }/*

  protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    return newValues;
  }/*

  protected*/ function processWriteResult(properties/*:Object*/)/*:Object*/ {
    var flattened/*:Object*/ = {};
    this.processWriteResultRecursively$dHfa(properties, this.getValueObject(), null, flattened);
    return flattened;
  }/*

  private*/ function processWriteResultRecursively(newValue/*:Object*/, oldValue/*:Object*/, prefix/*:String*/, flattened/*:Object*/)/*:void*/ {
    if (this.isSubObjectInternal(newValue, prefix)) {
      for (var propertyName/*:String*/ in newValue) {
        var propertyPath/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.append(prefix, propertyName);
        this.processWriteResultRecursively$dHfa(newValue[propertyName], oldValue[propertyName], propertyPath, flattened);
      }
    } else {
      if (newValue instanceof com.coremedia.ui.data.impl.BlobHash) {
        var oldBlob/*:BlobImpl*/ =AS3.as( oldValue,  com.coremedia.ui.data.impl.BlobImpl);
        if (oldBlob) {
          // The blob is either the blob that caused the write request
          // or another blob that was set locally after the write request
          // had already been sent. In any case, setting the hash will
          // not hurt because the hash is either applied to the matching
          // blob or it will be overwritten once the follow-up modification
          // has been written to the server.
          // The blob cannot be a blob that was read from the server,
          // because read requests are not initiated and read results are
          // discarded while a write request is on its way.
          oldBlob.setHash(AS3.cast(com.coremedia.ui.data.impl.BlobHash,newValue).getHash());
        }
        return;
      }
      flattened[prefix] = newValue;
    }
  }/*

  /**
   * Return true if the error reported in the given response is likely
   * temporary and will eventually be healed by retrying the operation.
   *
   * @return whether the error is temporary
   * /
  public static*/ function isTemporaryError$static(response/*:XMLHttpRequest*/)/*:Boolean*/ {
    // -1: timeout
    // 0: connection failed
    // 408: request timeout
    // 429: too many requests
    // 502: bad gateway
    // 503: service unavailable
    // 504: gateway timeout
    // 509: Apache bandwidth limit exceeded
    return response.status <= 0 ||
            response.status === 408 ||
            response.status === 429 ||
            response.status === 502 ||
            response.status === 503 ||
            response.status === 504 ||
            response.status === 509;
  }/*

  private*/ function onReadFailure(response/*:XMLHttpRequest*/)/*:void*/ {
    // Mark the request complete.
    com.coremedia.ui.util.RequestCounter.closeRequest();

    if (RemoteBeanImpl.isTemporaryError(response)) {
      window.setTimeout(AS3.bind(this,"issueLoadRequest$dHfa"), 10000);
      return;
    }

    // Handle known errors.
    var error/*:RemoteError*/ = com.coremedia.ui.data.impl.RemoteService.createRemoteError(response);
    (AS3.as(com.coremedia.ui.data.error.remoteErrorHandlerRegistry,  com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl)).handleError(error, this);

    // Handle really bad errors.
    if (!error.isHandled()) {
      com.coremedia.ui.logging.Logger.error(RemoteBeanImpl + " " + this.getUriPath() + ": Communication error: " + response.status + " " + response.responseText + " " + error);
    }
  }/*

  /**
   * Broadcast the events that are needed for bean state changes.
   * @param oldState
   * @param oldValues a map of properties that have recently been updated and for which events have been sent; may be null
   * /
  private*/ function broadcastStateChange(oldState/*:BeanState*/, oldValues/*:Object*/)/*:void*/ {
    if(oldState != this.beanState$dHfa) {
      // Broadcast the state change to all property listeners
      for (var listenerProperty/*:String*/ in this.propertiesWithListeners) {
        // Has an update event already been sent?
        if (!oldValues || !oldValues.hasOwnProperty(listenerProperty)) {
          // No, it hasn't.
          // Determine whether the listener is interested in a sub-bean or in the main bean.
          var propertyPath/*:Array*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(listenerProperty);
          var source/*:Object*/;
          AS3.assert(propertyPath.length > 0, "RemoteBeanImpl.as", 714, 11);
          var eventProperty/*:String*/ = propertyPath.pop();
          if (propertyPath.length === 0) {
            // A listener for the main bean.
            source = this;
          } else {
            // A listener for a sub-bean.
            source = this.createSubBean(com.coremedia.ui.data.impl.PropertyPathUtil.serialize(propertyPath));
          }
          // Send the state change event to value change listeners.
          if (eventProperty === com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME) {
            eventProperty = com.coremedia.ui.data.BeanState.PROPERTY_NAME;
          }
          // Depending on the property whose change is reported in the event, determine old and new value.
          var oldValue/*:**/;
          var newValue/*:**/;
          if (eventProperty === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
            oldValue = oldState;
            newValue = this.beanState$dHfa;
          } else {
            // The value itself has not changed, otherwise it would be included in oldValues.
            oldValue = newValue = this.beanState$dHfa.readable === true ? this.get(listenerProperty) : undefined;
          }
          // Fire the event, using the listeners registered with this observable, but using the computed source.
          this.fireEvent(listenerProperty, com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(source, eventProperty, oldValue, newValue, oldState, this.beanState$dHfa));
        }
      }
    }
  }/*

  /**
   * Set the bean state of this bean, for example when it becomes known that the bean is readable.
   *
   * @param newState the new state
   * /
  public*/ function injectBeanState(newState/*:BeanState*/)/*:void*/ {
    var oldState/*:BeanState*/ = this.beanState$dHfa;
    this.beanState$dHfa = newState;
    this.broadcastStateChange$dHfa(oldState, null);
  }/*

  /**
   * Return the state of this bean. Calling this method does not cause the bean to be loaded.
   * <p>Returns BeanState.UNKNOWN if a load request has not been issued or not yet finished.</p>
   * <p>Returns BeanState.READABLE if the Bean is loaded and is readable by this client.</p>
   * <p>Returns BeanState.UNREADABLE if an attempt to load the bean has failed with a
   *   <code>401 Unauthorized</code> response.</p>
   * <p>Returns BeanState.NON_EXISTENT if an attempt to load the bean has failed with a
   *   <code>404 Not Found</code>.</p>
   *
   * @see com.coremedia.ui.data.BeanState
   * /
  override public*/ function getState()/*:BeanState*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.impl.BeanPropertyDependency(this, com.coremedia.ui.data.BeanState.PROPERTY_NAME));
    return this.beanState$dHfa;
  }/*

  /**
   * Return this RemoteBean's JSON representation, which is
   * <pre>
   * { "$Ref" : "<i>getUriPath()</i>" }
   * </pre>
   * To get a JSON of the local property values, use <code>BeanFactory.objectToJson(bean.toObject())</code>.
   * @return String this RemoteBean's JSON representation.
   *
   * @see #toObject
   * /
  override public*/ function toJson()/*:String*/ {
    return '{"' + RemoteBeanImpl.REF_PROPERTY + '":"' + this.getUriPath() + '"}';
  }/*

  internal static*/ function marshal$static(self/*:RemoteBeanImpl*/)/*:**/ {
    var result/*:Object*/ = {};
    result[RemoteBeanImpl.REF_PROPERTY] = self.getUriPath();
    return result;
  }/*

  private static*/ function remoteErrorHandler$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    var remoteBeanImpl/*:RemoteBeanImpl*/ =AS3.as( source,  RemoteBeanImpl);
    if(remoteBeanImpl){
      remoteBeanImpl.handleRemoteError$dHfa(error);
    }
  }/*

  private*/ function handleRemoteError(error/*:RemoteError*/)/*:void*/ {
    var status/*:uint*/ = error.status;
    if (status === 401 // UNAUTHORIZED
            || status === 403 // FORBIDDEN
            || status === 404 // NOT FOUND
            || status === 410) // GONE
    {
      // We cannot read the object's properties, but at least we know why.
      var oldState/*:BeanState*/ = this.beanState$dHfa;
      if (status < 404) {
        // The object is unreadable.
        this.beanState$dHfa = com.coremedia.ui.data.BeanState.UNREADABLE;
      } else {
        // The object does not exist.
        this.beanState$dHfa = com.coremedia.ui.data.BeanState.NON_EXISTENT;
      }
      // Do not handle unexpected errors (e.g. timeout, webapp gone, etc.) here.
      var isExpectedError/*:Boolean*/ = (com.coremedia.ui.data.impl.RemoteService.HTTP_ERROR != error.errorName);
      error.setHandled(isExpectedError);
      com.coremedia.ui.logging.Logger.debug("handled remote error " + error +  " raised by bean " + this.getUriPath());

      this.state$dHfa = VALID$static;
      var oldLoaded/*:Boolean*/ = this.loaded$dHfa;
      this.loaded$dHfa = true;
      var newValues/*:Object*/ = this.buildUnreadableProperties();
      var oldValues/*:Object*/ = this.doUpdateProperties(newValues, true, oldState, this.beanState$dHfa);
      this.fireLoaded(oldLoaded);
      this.broadcastStateChange$dHfa(oldState, oldValues);
    }
  }/*

  /**
   * Make all property values become suitable values for unreadable beans (which is usually undefined)
   * /
  protected*/ function buildUnreadableProperties()/*:Object*/ {
    var newValues/*:Object*/ = {};
    var valueObject/*:Object*/ = this.getValueObject();
    for (var property/*:String*/ in valueObject) {
      if (valueObject.hasOwnProperty(property)) {
        newValues[property] = undefined;
      }
    }
    return newValues;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addBeforeFlushListener(onChange/*:Function*/)/*:void*/ {
    this.addListener(BEFORE_FLUSH_EVENT_NAME$static, onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removeBeforeFlushListener(onChange/*:Function*/)/*:void*/ {
    this.removeListener(BEFORE_FLUSH_EVENT_NAME$static, onChange);
  }/*

  /**
   * Return a string identifier of this bean for purposes of tracking dependencies efficiently.
   * Remote beans reuse the URI paths for this purpose.
   *
   * @return an identifier
   * /
  internal override*/ function getDependencyId()/*:String*/ {
    return this.getUriPath();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.ui.data.impl.QueuedRemoteBean"],
      path$dHfa: null,
      loaded$dHfa: false,
      writesAllowed$dHfa: true,
      immediateProperties$dHfa: null,
      eTag$dHfa: null,
      rq$dHfa: null,
      constructor: RemoteBeanImpl$,
      super$dHfa: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      createRequestQueue: createRequestQueue,
      getUriPath: getUriPath,
      getUri: getUri,
      getAbsoluteUri: getAbsoluteUri,
      get: get,
      getOrCreate: getOrCreate,
      load: load,
      flush: flush,
      isLoaded: isLoaded,
      setImmediateProperty: setImmediateProperty,
      setInternal: setInternal,
      setInternalProperties: setInternalProperties,
      propertiesUpdated: propertiesUpdated,
      invalidate: invalidate,
      checkOutdated: checkOutdated,
      hasAnyListener: hasAnyListener,
      queried$dHfa: queried,
      issueLoadRequest$dHfa: issueLoadRequest,
      notifyRequestQueueIdle: notifyRequestQueueIdle,
      doLoad$dHfa: doLoad,
      inject: inject,
      fireLoaded: fireLoaded,
      doWriteChanges: doWriteChanges,
      marshalChangedProperties: marshalChangedProperties,
      onWriteComplete$dHfa: onWriteComplete,
      onWriteSuccessInternal$dHfa: onWriteSuccessInternal,
      writeResultReceived$dHfa: writeResultReceived,
      onWriteFailureInternal$dHfa: onWriteFailureInternal,
      allowWrites$dHfa: allowWrites,
      onWriteSuccess: onWriteSuccess,
      onReadSuccess$dHfa: onReadSuccess,
      updateETag$dHfa: updateETag,
      requestQueueETagUpdated: requestQueueETagUpdated,
      fireETag: fireETag,
      dependOnEtag: dependOnEtag,
      processReadResult: processReadResult,
      processWriteResult: processWriteResult,
      processWriteResultRecursively$dHfa: processWriteResultRecursively,
      onReadFailure$dHfa: onReadFailure,
      broadcastStateChange$dHfa: broadcastStateChange,
      injectBeanState: injectBeanState,
      getState: getState,
      toJson: toJson,
      handleRemoteError$dHfa: handleRemoteError,
      buildUnreadableProperties: buildUnreadableProperties,
      addBeforeFlushListener: addBeforeFlushListener,
      removeBeforeFlushListener: removeBeforeFlushListener,
      getDependencyId: getDependencyId,
      statics: {
        REF_PROPERTY: '$Ref',
        isTemporaryError: isTemporaryError$static,
        marshal: marshal$static,
        __initStatics__: function() {
          static$0();
        }
      },
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.error.NotExistsError",
        "com.coremedia.ui.data.error.NotReadableError",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.QueuedRemoteBean",
        "com.coremedia.ui.util.ExecuteEventually",
        "com.coremedia.ui.util.RequestCounter"
      ],
      uses: [
        "com.coremedia.ui.data.impl.BeanConstants",
        "com.coremedia.ui.data.impl.BeanPropertyDependency",
        "com.coremedia.ui.data.impl.BeforeFlushEventImpl",
        "com.coremedia.ui.data.impl.BlobHash",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.data.impl.PropertyPathUtil",
        "com.coremedia.ui.data.impl.RemoteBeanCache",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RequestQueue",
        "com.coremedia.ui.data.impl.TimeTracker",
        "com.coremedia.ui.data.impl.WriteResult",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
