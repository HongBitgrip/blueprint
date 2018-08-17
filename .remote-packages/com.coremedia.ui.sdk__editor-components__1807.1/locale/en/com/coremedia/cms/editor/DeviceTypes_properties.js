/**
 * Properties class for ResourceBundle "DeviceTypes".
 */
Ext.define("com.coremedia.cms.editor.DeviceTypes_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Device_default_text": "Desktop",
  "Device_mobile_portrait_text": "Mobile",
  "Device_mobile_landscape_text": "Mobile",
  "Device_tablet_portrait_text": "Tablet",
  "Device_tablet_landscape_text": "Tablet",
  "Device_notebook_text": "Notebook",
  "Device_desktop_text": "Desktop",
  "Device_desktopMode_text": "Desktop",
  "Device_label_width": "110"
}, function() {
  this.prototype["Device_mobile_portrait_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_mobile_portrait;
  this.prototype["Device_mobile_landscape_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_mobile_landscape;
  this.prototype["Device_tablet_portrait_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_tablet_portrait;
  this.prototype["Device_tablet_landscape_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_tablet_landscape;
  this.prototype["Device_notebook_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_notebook;
  this.prototype["Device_desktop_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_desktop;
  this.prototype["Device_desktopMode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_desktop;
  this.prototype["Device_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.channel_desktop;

  com.coremedia.cms.editor.DeviceTypes_properties.INSTANCE = new com.coremedia.cms.editor.DeviceTypes_properties();
});