Ext.define("com.coremedia.ui.data.impl.QueuedRemoteBean", function(QueuedRemoteBean) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.RemoteBean;

public interface QueuedRemoteBean extends RemoteBean {
  function requestQueueETagUpdated():void;

  function notifyRequestQueueIdle():void;

  function doWriteChanges(changedProperties:Object):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
