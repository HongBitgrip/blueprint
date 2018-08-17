Ext.define("com.coremedia.ui.data.impl.RequestQueue", function(RequestQueue) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;

/**
 * A RequestQueue is shared among all RemoteBeans that share a common ETag.
 * It keeps the current ETag value and manages write requests.
 * /
public class RequestQueue {

  /**
   * A list of pending update requests.
   *
   * @see RequestQueueEntry
   * /
  private const requestQueue:Vector.<RequestQueueEntry> =*/function requestQueue_(){this.requestQueue$B7LG=(/* new <RequestQueueEntry>*/[]);}/*;
  private var toBeNotifiedWhenIdle:Vector.<QueuedRemoteBean> =*/function toBeNotifiedWhenIdle_(){this.toBeNotifiedWhenIdle$B7LG=(/* new <QueuedRemoteBean>*/[]);}/*;

  private var eTag:String;
  private var beans:Array =*/function beans_(){this.beans$B7LG=( []);}/*;
  private var successCallback:Function;

  public*/ function RequestQueue$(successCallback/*:Function = null*/) {requestQueue_.call(this);toBeNotifiedWhenIdle_.call(this);beans_.call(this);if(arguments.length<=0)successCallback=null;
    this.successCallback$B7LG = successCallback;
  }/*

  internal*/ function addBean(remoteBean/*:QueuedRemoteBean*/)/*:void*/ {
    this.beans$B7LG.push(remoteBean);
  }/*

  public*/ function getETag()/*:String*/ {
    return this.eTag$B7LG;
  }/*

  public*/ function setETag(value/*:String*/)/*:void*/ {
    if (this.eTag$B7LG !== value) {
      this.eTag$B7LG = value;
      for (var i/*:int*/ = 0; i < this.beans$B7LG.length; i++) {
        (AS3.as(this.beans$B7LG[i],  com.coremedia.ui.data.impl.QueuedRemoteBean)).requestQueueETagUpdated();
      }
    }
  }/*

  public*/ function flush(remoteBean/*:QueuedRemoteBean*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    if (this.requestQueue$B7LG.length > 0) {
      var requestQueueEntry/*:RequestQueueEntry*/ = this.provideFreeRequestQueueEntry$B7LG(remoteBean);
      requestQueueEntry.callback = callback ? callback : Ext.emptyFn;
    } else {
      this.invokeCallback$B7LG(remoteBean, callback, null);
    }
  }/*

  internal*/ function propertiesUpdated(remoteBean/*:QueuedRemoteBean*/, overwrittenValues/*:Object*/, newValues/*:Object*/)/*:void*/ {
    var requestQueueEntry/*:RequestQueueEntry*/ = this.provideFreeRequestQueueEntry$B7LG(remoteBean);
    for (var property/*:String*/ in overwrittenValues) {
      requestQueueEntry.setProperty(property, newValues[property]);
    }
  }/*
  /**
   * Return a request queue entry that can still receive new property updates.
   * If necessary, add a new entry to the request queue.
   * If necessary, start the write process.
   *
   * @return the queue entry
   * /
  private*/ function provideFreeRequestQueueEntry(remoteBean/*:QueuedRemoteBean*/)/*:RequestQueueEntry*/ {
    var requestQueueEntry/*:RequestQueueEntry*/;
    if (this.requestQueue$B7LG.length > 0) {
      requestQueueEntry = this.requestQueue$B7LG[this.requestQueue$B7LG.length - 1];
      if (requestQueueEntry.callback || requestQueueEntry.getRemoteBean() !== remoteBean) {
        // The last queue entry already has a callback or is dedicated to another bean.
        // Therefore, no more changes may be added. Provide a new entry.
        requestQueueEntry = new com.coremedia.ui.data.impl.RequestQueueEntry(remoteBean);
        this.requestQueue$B7LG.push(requestQueueEntry);
        // The background write process has already been started.
        // It will take care of the new entry eventually.
      }
    } else {
      requestQueueEntry = new com.coremedia.ui.data.impl.RequestQueueEntry(remoteBean);
      this.requestQueue$B7LG.push(requestQueueEntry);
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"writeChanges$B7LG"));
    }
    return requestQueueEntry;
  }/*

  private*/ function writeChanges()/*:void*/ {
    var requestQueueEntry/*:RequestQueueEntry*/ = this.requestQueue$B7LG[0];
    var changedProperties/*:Object*/ = requestQueueEntry.getChangedProperties();
    if (changedProperties) {
      if (!requestQueueEntry.callback) {
        requestQueueEntry.callback = Ext.emptyFn;
      }
      requestQueueEntry.getRemoteBean().doWriteChanges(changedProperties);
    } else {
      this.completeFirstRequestQueueEntry$B7LG(null);
    }
  }/*

  internal*/ function onWriteComplete(error/*:RemoteError*/)/*:void*/ {
    this.completeFirstRequestQueueEntry$B7LG(error);
  }/*

  internal*/ function onWriteFailureInternal()/*:void*/ {
    // All writes performed so far may rely on unwarranted assumptions.
    // Do not perform any writes. Continue to process the callbacks in
    // their original order, though.
    for (var i/*:int*/ = 0; i<this.requestQueue$B7LG.length; i++) {
      var requestQueueEntry/*:RequestQueueEntry*/ = this.requestQueue$B7LG[i];
      requestQueueEntry.clearChangedProperties();
    }
  }/*

  private*/ function completeFirstRequestQueueEntry(error/*:RemoteError*/)/*:void*/ {
    var requestQueueEntry/*:RequestQueueEntry*/ = AS3.cast(com.coremedia.ui.data.impl.RequestQueueEntry,this.requestQueue$B7LG.shift());
    if (this.requestQueue$B7LG.length > 0) {
      // anyone changed properties during save?
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"writeChanges$B7LG"));
    } else {
      var toBeNotified/*:Vector.<QueuedRemoteBean>*/ = this.toBeNotifiedWhenIdle$B7LG;
      this.toBeNotifiedWhenIdle$B7LG =/* new <QueuedRemoteBean>*/[];
      for (var i/*:int*/ = 0; i < toBeNotified.length; i++) {
        toBeNotified[i].notifyRequestQueueIdle();
      }
    }
    this.invokeCallback$B7LG(requestQueueEntry.getRemoteBean(), requestQueueEntry.callback, error);
  }/*

  private*/ function invokeCallback(remoteBean/*:QueuedRemoteBean*/, callback/*:Function*/, error/*:RemoteError*/)/*:void*/ {
    if (callback) {
      try {
        var result/*:FlushResultImpl*/ = new com.coremedia.ui.data.impl.FlushResultImpl(remoteBean, error);
        callback(result);
      } catch(e){if(AS3.is(e,AS3.Error)) {
        com.coremedia.ui.logging.Logger.error(com.coremedia.ui.data.impl.QueuedRemoteBean+": Error while invoking callback: "+e);
      }else throw e;}
    }
  }/*

  internal*/ function writePending()/*:Boolean*/ {
    for (var i/*:int*/ = 0; i<this.requestQueue$B7LG.length; i++) {
      var requestQueueEntry/*:RequestQueueEntry*/ = this.requestQueue$B7LG[i];
      if(requestQueueEntry.getChangedProperties()) {
        return true;
      }
    }
    return false;
  }/*

  public*/ function getPendingWriteProperties(remoteBean/*:QueuedRemoteBean*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for (var i/*:int*/ = 0; i<this.requestQueue$B7LG.length; i++) {
      var requestQueueEntry/*:RequestQueueEntry*/ = this.requestQueue$B7LG[i];
      if (requestQueueEntry.getRemoteBean() === remoteBean) {
        for (var property/*:String*/ in requestQueueEntry.getChangedProperties()) {
          result.push(property);
        }
      }
    }
    return result;

  }/*

  internal*/ function notifyWhenIdle(remoteBean/*:QueuedRemoteBean*/)/*:void*/ {
    // If the bean is not in the list, schedule it for reloading. Traversing the list should not take that long.
    if (this.toBeNotifiedWhenIdle$B7LG.indexOf(remoteBean) === -1) {
      this.toBeNotifiedWhenIdle$B7LG.push(remoteBean);
    }
  }/*

  public*/ function onWriteSuccess(remoteBean/*:QueuedRemoteBean*/)/*:void*/ {
    if(this.successCallback$B7LG) {
      this.successCallback$B7LG(remoteBean);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      eTag$B7LG: null,
      successCallback$B7LG: null,
      constructor: RequestQueue$,
      addBean: addBean,
      getETag: getETag,
      setETag: setETag,
      flush: flush,
      propertiesUpdated: propertiesUpdated,
      provideFreeRequestQueueEntry$B7LG: provideFreeRequestQueueEntry,
      writeChanges$B7LG: writeChanges,
      onWriteComplete: onWriteComplete,
      onWriteFailureInternal: onWriteFailureInternal,
      completeFirstRequestQueueEntry$B7LG: completeFirstRequestQueueEntry,
      invokeCallback$B7LG: invokeCallback,
      writePending: writePending,
      getPendingWriteProperties: getPendingWriteProperties,
      notifyWhenIdle: notifyWhenIdle,
      onWriteSuccess: onWriteSuccess,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.ui.data.impl.FlushResultImpl",
        "com.coremedia.ui.data.impl.QueuedRemoteBean",
        "com.coremedia.ui.data.impl.RequestQueueEntry",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
