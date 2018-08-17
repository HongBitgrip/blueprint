Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenu", function(DateTimeMenu) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct{
import com.coremedia.cms.editor.sdk.premular.fields.struct.*;
import net.jangaroo.ext.Exml;
import ext.picker.DatePicker;
import com.coremedia.ui.components.StatefulTimeField;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DateTimeMenu extends DateTimeMenuBase{

    import com.coremedia.ui.data.Calendar;
    import com.coremedia.ui.skins.MenuSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.dateTimeMenu";

    public*/function DateTimeMenu$(config/*:DateTimeMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase,{});
    var defaults_$1/*:DateTimeMenu*/ =AS3.cast(DateTimeMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.GRID_100);
    var datePicker_38_5_$1/*:ext.picker.DatePicker*/ =AS3.cast(Ext.picker.Date,{});
    datePicker_38_5_$1.itemId = "date";
    var ui_StatefulTimeField_39_5_$1/*:com.coremedia.ui.components.StatefulTimeField*/ =AS3.cast(com.coremedia.ui.components.StatefulTimeField,{});
    ui_StatefulTimeField_39_5_$1.itemId = "time";
    ui_StatefulTimeField_39_5_$1.increment = 15.0;
    ui_StatefulTimeField_39_5_$1.allowBlank = true;
    ui_StatefulTimeField_39_5_$1.format =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase.getTimeFormat());
    ui_StatefulTimeField_39_5_$1.validator = com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase.validateTime;
    AS3.setBindable(ui_StatefulTimeField_39_5_$1,"width" , 310);
    AS3.setBindable(ui_StatefulTimeField_39_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimeMenu_time_title')));
    var ui_LocalComboBox_46_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_46_5_$1.itemId = "timeZone";
    AS3.setBindable(ui_LocalComboBox_46_5_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_46_5_$1,"store" , com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase.getTimeZoneIdsWithLocalizedNames());
    AS3.setBindable(ui_LocalComboBox_46_5_$1,"displayField" , "localizedName");
    ui_LocalComboBox_46_5_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_46_5_$1,"width" , 310);
    AS3.setBindable(ui_LocalComboBox_46_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimeMenu_timeZone_title')));
    config_$1.items = [datePicker_38_5_$1, ui_StatefulTimeField_39_5_$1, ui_LocalComboBox_46_5_$1];
    var ui_VerticalSpacingPlugin_56_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_56_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var layout_Anchor_60_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_60_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KKO0(config_$1);
  }/*

    /**
     * The initial state of the calendar. Used to initialize the values in the
     * datepicker, time and timezone fields. If no initial calendar is provided,
     * the default values are today at midnight in the default timezone.
     * /
    [Bindable]
    public var initialCalendar:Calendar;

    /**
     * Called when menu is closed (event: hide). The calendar is calculated from
     * the current field values and passed to the function as its single argument.
     * /
    public var onMenuCloseCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.dateTimeMenu",
      constructor: DateTimeMenu$,
      super$KKO0: function() {
        com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase.prototype.constructor.apply(this, arguments);
      },
      onMenuCloseCallback: null,
      config: {initialCalendar: null},
      requires: [
        "Ext.layout.container.Anchor",
        "Ext.picker.Date",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulTimeField",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
