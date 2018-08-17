Ext.define("com.coremedia.ui.data.impl.BeforeFlushEventImpl", function(BeforeFlushEventImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.BeforeFlushEvent;
import com.coremedia.ui.data.RemoteBean;

public class BeforeFlushEventImpl implements BeforeFlushEvent {

  public*/ function BeforeFlushEventImpl$(bean/*:RemoteBean*/) {
    this['bean'] = bean;
  }/*

  public native function get bean():RemoteBean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.BeforeFlushEvent"],
      constructor: BeforeFlushEventImpl$,
      requires: ["com.coremedia.ui.data.BeforeFlushEvent"]
    };
});
