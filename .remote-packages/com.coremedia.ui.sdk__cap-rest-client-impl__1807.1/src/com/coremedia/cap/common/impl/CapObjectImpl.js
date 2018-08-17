Ext.define("com.coremedia.cap.common.impl.CapObjectImpl", function(CapObjectImpl) {/* /**
 * Created by IntelliJ IDEA.
 * User: mbruegma
 * Date: 18.10.11
 * Time: 13:32
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.common.impl {

import com.coremedia.cap.common.CapObject;
import com.coremedia.cap.common.CapType;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

public class CapObjectImpl extends RemoteBeanImpl implements CapObject {
  public*/ function CapObjectImpl$(uri/*:String*/) {
    this.super$iLdK(uri);
  }/*

  public*/ function getType_()/*:CapType*/ {
    return this.get('type');
  }/*

  override public*/ function setId(id/*:String*/)/*:void*/ {
    com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.setId.call(this,id);
    this.setImmediateProperty('id', id);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.common.CapObject"],
      constructor: CapObjectImpl$,
      super$iLdK: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getType_: getType_,
      setId: setId,
      requires: [
        "com.coremedia.cap.common.CapObject",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
