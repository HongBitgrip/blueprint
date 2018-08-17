Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase", function(DeviceTypeSliderBase) {/*package com.coremedia.cms.editor.sdk.preview.zoom {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.Ext;
import ext.container.Container;
import ext.slider.SliderField;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.DeviceTypes')]
public class DeviceTypeSliderBase extends Container {
  internal static const SLIDER_COMPONENT_ITEM_ID:String = 'sliderComponent';


  internal static const LOCAL_STORAGE_SELECTED_DEVICE_KEY:String = 'preview.selectedDevice';
  internal static const MODEL_INDEX:String = 'selectedIndex';
  internal static const MODEL_MAXINDEX:String = 'maxIndex';
  internal static const INCREMENT_VALUE:Number = 1;

  private var model:Bean;

  private var deviceInfoValueExpression:ValueExpression;
  private var selectedDeviceValueExpression:ValueExpression;
  private var preferredDeviceValueExpression:ValueExpression;

  private var preferredDeviceType:String;

  public*/ function DeviceTypeSliderBase$(config/*:DeviceTypeSlider = null*/) {if(arguments.length<=0)config=null;
    this.super$CowT(config);
    this.deviceInfoValueExpression$CowT = AS3.getBindable(config,"deviceInfoValueExpression");
    this.selectedDeviceValueExpression$CowT = AS3.getBindable(config,"selectedDeviceValueExpression");
    this.preferredDeviceValueExpression$CowT = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    this.on('afterrender',AS3.bind( this,"initListeners$CowT"));
    this.on('destroy',AS3.bind( this,"removeListeners$CowT"));
  }/*

  private*/ function initListeners()/*:void*/ {
    this.deviceInfoValueExpression$CowT.addChangeListener(AS3.bind(this,"updateLocalModel$CowT"));
    this.getModel().addPropertyChangeListener(DeviceTypeSliderBase.MODEL_INDEX,AS3.bind( this,"updateExternalModel$CowT"));
  }/*

  private*/ function removeListeners()/*:void*/ {
    this.deviceInfoValueExpression$CowT.removeChangeListener(AS3.bind(this,"updateLocalModel$CowT"));
    this.getModel().removePropertyChangeListener(DeviceTypeSliderBase.MODEL_INDEX,AS3.bind( this,"updateExternalModel$CowT"));
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$CowT) {
      this.model$CowT = com.coremedia.ui.data.beanFactory.createLocalBean({
        selectedIndex: -1,
        maxIndex: 0
      });
    }
    return this.model$CowT;
  }/*

  internal*/ function resetModel()/*:void*/ {
    this.getModel().set(DeviceTypeSliderBase.MODEL_INDEX, -1);
    this.getModel().set(DeviceTypeSliderBase.MODEL_MAXINDEX, 0);
  }/*

  private*/ function updateLocalModel()/*:void*/ {
    var deviceInfo/*:DeviceInfo*/ =AS3.as( this.deviceInfoValueExpression$CowT.getValue(),  com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo);

    if (!deviceInfo) {
      this.resetModel();
      this.hide();
      return;
    }

    var model/*:Bean*/ = this.getModel();

    // MaxIndex
    var length/*:Number*/ = deviceInfo.getDevices().length ;
    if (model.get(DeviceTypeSliderBase.MODEL_MAXINDEX) != length - 1) {
      model.set(DeviceTypeSliderBase.MODEL_MAXINDEX, length - 1);
    }

    // Index
    var currentModelIndex/*:Number*/ =AS3.as( model.get(DeviceTypeSliderBase.MODEL_INDEX),  Number);

    // preferredDevice has highest precedence, if supported
    if (this.preferredDeviceType$CowT && !this.preferredDeviceValueExpression$CowT.getValue()) {
      var preferredDeviceObject/*:Object*/ = this.readPreferredDevice$CowT(deviceInfo);
      if (preferredDeviceObject) {
        var preferredDeviceIdx/*:Number*/ = deviceInfo.getDeviceIndex(preferredDeviceObject);
        model.set(DeviceTypeSliderBase.MODEL_INDEX, preferredDeviceIdx);
        this.preferredDeviceValueExpression$CowT.setValue(this.preferredDeviceType$CowT);
      }
    }

    if (!this.selectedDeviceValueExpression$CowT.getValue()) {
      // initial loading - no device has been selected
      var storedDevice/*:Object*/ = readSelectedDevice$static(deviceInfo);
      var defaultDeviceIndex/*:Number*/ = deviceInfo.getDeviceIndex(deviceInfo.getDefaultDevice());

      // use the stored device if any, else the default device
      if (storedDevice) {
        var storedDeviceIndex/*:Number*/ = deviceInfo.getDeviceIndex(storedDevice);
        model.set(DeviceTypeSliderBase.MODEL_INDEX, storedDeviceIndex);
      } else if (defaultDeviceIndex !== -1 && currentModelIndex !== defaultDeviceIndex) {
        model.set(DeviceTypeSliderBase.MODEL_INDEX, defaultDeviceIndex);
      } else {
        // If length is [1..n] and there is no default or saved index, use last device (window mode)
        model.set(DeviceTypeSliderBase.MODEL_INDEX, length - 1);
      }
    } else if (!this.preferredDeviceValueExpression$CowT.getValue()
            && currentModelIndex !== deviceInfo.getDeviceIndex(this.selectedDeviceValueExpression$CowT.getValue())) {
      // preview reloaded - use the selected device
      model.set(DeviceTypeSliderBase.MODEL_INDEX, deviceInfo.getDeviceIndex(this.selectedDeviceValueExpression$CowT.getValue()));
    }

    if (length > 1) {
      this.show();
    } else {
      this.hide();
    }
  }/*

  private*/ function updateExternalModel()/*:void*/ {
    if (!this.selectedDeviceValueExpression$CowT || !this.deviceInfoValueExpression$CowT) {
      return;
    }

    // We do not want to show a device preview in IE. We use IE9 in IE8 mode and IE8 does not support CSS3.
    // CSS3 is essential for the responsive design templates.
    if (Ext.isIE && Ext.isIE8) {
      !this.disabled && this.disable();
      return;
    }

    var deviceInfo/*:DeviceInfo*/ =AS3.as( this.deviceInfoValueExpression$CowT.getValue(),  com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo);
    if (!deviceInfo) {
      return;
    }

    var currentModelIndex/*:Number*/ =AS3.as( this.getModel().get(DeviceTypeSliderBase.MODEL_INDEX),  Number);
    var newDevice/*:Object*/ = deviceInfo.getDeviceAt(currentModelIndex);
    var oldDevice/*:Object*/ = this.selectedDeviceValueExpression$CowT.getValue();

    this.selectedDeviceValueExpression$CowT.setValue(newDevice);

    storeSelectedDevice$static(newDevice, oldDevice);
  }/*

  private static*/ function storeSelectedDevice$static(newDevice/*:Object*/, oldDevice/*:Object*/)/*:void*/ {
    if (oldDevice && newDevice && oldDevice !== newDevice) {
      com.coremedia.ui.util.LocalStorageUtil.setItem(DeviceTypeSliderBase.LOCAL_STORAGE_SELECTED_DEVICE_KEY, newDevice['id']);
    }
  }/*

  private static*/ function readSelectedDevice$static(deviceInfo/*:DeviceInfo*/)/*:Object*/ {
    var deviceId/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(DeviceTypeSliderBase.LOCAL_STORAGE_SELECTED_DEVICE_KEY);
    return deviceId ? deviceInfo.getDevice(deviceId) : null;
  }/*

  private*/ function readPreferredDevice(deviceInfo/*:DeviceInfo*/)/*:Object*/ {
    return this.preferredDeviceType$CowT ? deviceInfo.getDevice(this.preferredDeviceType$CowT) : null;
  }/*

  public static*/ function getLocalizedText$static(device/*:Object*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.DeviceTypes', 'Device_' + device.id + '_text');
  }/*

  public static*/ function getIconClass$static(device/*:Object*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.DeviceTypes', 'Device_' + device.id + '_icon');
  }/*

  private*/ function getSliderComponent()/*:SliderField*/ {
    return AS3.as( this.queryById(DeviceTypeSliderBase.SLIDER_COMPONENT_ITEM_ID),  Ext.slider.Single);
  }/*

  public override*/ function disable(silent/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)silent=false;
    this.getSliderComponent$CowT().disable(silent);
    return Ext.container.Container.prototype.disable.call(this,silent);
  }/*

  public override*/ function enable(silent/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)silent=false;
    this.getSliderComponent$CowT().enable(silent);
    return Ext.container.Container.prototype.enable.call(this,silent);
  }/*

  [InjectFromExtParent]
  public*/ function getPreferredDevice(preferredDevice/*:String*/)/*:void*/ {
    this.preferredDeviceType$CowT = preferredDevice;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {getPreferredDevice: ["InjectFromExtParent"]},
      model$CowT: null,
      deviceInfoValueExpression$CowT: null,
      selectedDeviceValueExpression$CowT: null,
      preferredDeviceValueExpression$CowT: null,
      preferredDeviceType$CowT: null,
      constructor: DeviceTypeSliderBase$,
      super$CowT: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initListeners$CowT: initListeners,
      removeListeners$CowT: removeListeners,
      getModel: getModel,
      resetModel: resetModel,
      updateLocalModel$CowT: updateLocalModel,
      updateExternalModel$CowT: updateExternalModel,
      readPreferredDevice$CowT: readPreferredDevice,
      getSliderComponent$CowT: getSliderComponent,
      disable: disable,
      enable: enable,
      getPreferredDevice: getPreferredDevice,
      statics: {
        SLIDER_COMPONENT_ITEM_ID: 'sliderComponent',
        LOCAL_STORAGE_SELECTED_DEVICE_KEY: 'preview.selectedDevice',
        MODEL_INDEX: 'selectedIndex',
        MODEL_MAXINDEX: 'maxIndex',
        INCREMENT_VALUE: 1,
        getLocalizedText: getLocalizedText$static,
        getIconClass: getIconClass$static
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.slider.Single",
        "com.coremedia.cms.editor.DeviceTypes_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.LocalStorageUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo"]
    };
});
