Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo", function(DeviceInfo) {/*package com.coremedia.cms.editor.sdk.preview.zoom {
import com.coremedia.ui.data.impl.BeanImpl;

public class DeviceInfo extends BeanImpl {

  public*/ function DeviceInfo$() {
    this.super$JNPV();
    this.set('devices', []);
  }/*

  public*/ function setData(devices/*:Array*/)/*:void*/ {
    this.set('devices', devices);
  }/*

  public*/ function getDevices()/*:Array*/ {
    return AS3.as( this.get('devices'),  Array);
  }/*

  public*/ function getDefaultDevice()/*:Object*/ {
    var devices/*:Array*/ = this.getDevices();
    for (var i/*:int*/ = 0; i < devices.length; i++) {
      var device/*:Object*/ = devices[i];
      if (device['isDefault']) {
        return device;
      }
    }
    return undefined;
  }/*

  public*/ function getDevice(id/*:String*/)/*:Object*/ {
    var devices/*:Array*/ = this.getDevices();
    for (var i/*:int*/ = 0; i < devices.length; i++) {
      var device/*:Object*/ = devices[i];
      if (device['id'] === id) {
        return device;
      }
    }
    return undefined;
  }/*

  public*/ function getDeviceAt(index/*:Number*/)/*:Object*/ {
    return this.getDevices()[index];
  }/*

  public*/ function getDeviceIndex(type/*:Object*/)/*:Number*/ {
    var devices/*:Array*/ = this.getDevices();
    if (type) {
      for (var i/*:int*/ = 0; i < devices.length; i++) {
        var device/*:Object*/ = devices[i];
        if (device['id'] === type['id']) {
          return i;
        }
      }
    }
    return -1;
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      constructor: DeviceInfo$,
      super$JNPV: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      setData: setData,
      getDevices: getDevices,
      getDefaultDevice: getDefaultDevice,
      getDevice: getDevice,
      getDeviceAt: getDeviceAt,
      getDeviceIndex: getDeviceIndex,
      requires: ["com.coremedia.ui.data.impl.BeanImpl"]
    };
});
