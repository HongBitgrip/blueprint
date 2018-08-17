Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel", function(ProjectCalendarPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.CustomizableDatePicker;
import ext.toolbar.Toolbar;
import ext.toolbar.Fill;
import com.coremedia.ui.components.SwitchingContainer;
import ext.button.Button;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.form.field.DisplayField;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectCalendarPanel extends ProjectCalendarPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectCalendarPanel";

    public static const DATE_PICKER_ITEM_ID:String = "datePickerItemId";

    public static const SHOW_ALL_TODOS_BTN_ITEM_ID:String = "showAllTodosBtnItemId";

    public static const DATE_HELP_TEXT_ITEM_ID:String = "dateHelpTextItemId";

    public*/function ProjectCalendarPanel$(config/*:ProjectCalendarPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase,{});
    var defaults_$1/*:ProjectCalendarPanel*/ =AS3.cast(ProjectCalendarPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_CustomizableDatePicker_30_5_$1/*:com.coremedia.ui.components.CustomizableDatePicker*/ =AS3.cast(com.coremedia.ui.components.CustomizableDatePicker,{});
    ui_CustomizableDatePicker_30_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectCalendarPanel.DATE_PICKER_ITEM_ID);
    ui_CustomizableDatePicker_30_5_$1.showToday = false;
    ui_CustomizableDatePicker_30_5_$1.scrollOnTopBar = true;
    AS3.setBindable(ui_CustomizableDatePicker_30_5_$1,"modifiersForDate" ,AS3.bind( this,"calculateModifiersForDate"));
    AS3.setBindable(ui_CustomizableDatePicker_30_5_$1,"selectedDateVE" , AS3.getBindable(config,"selectedDateVE"));
    config_$1.items = [ui_CustomizableDatePicker_30_5_$1];
    var toolbar_37_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_37_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.EMBEDDED_FOOTER_GRID_100.getSkin());
    toolbar_37_5_$1["focusableContainer"] = false;
    AS3.setBindable(toolbar_37_5_$1,"dock" , "bottom");
    var tbFill_41_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var ui_SwitchingContainer_42_9_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_42_9_$1,"activeItemValueExpression" , this.getActiveFooterVE());
    var button_44_13_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_44_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_44_13_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectCalendarPanel.SHOW_ALL_TODOS_BTN_ITEM_ID);
    AS3.setBindable(button_44_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_Todos_show_all')));
    AS3.setBindable(button_44_13_$1,"handler" ,AS3.bind( this,"removeDateSelection"));
    var ui_BindVisibilityPlugin_49_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_49_17_$1.bindTo = AS3.getBindable(config,"selectedDateVE");
    button_44_13_$1.plugins = [ui_BindVisibilityPlugin_49_17_$1];
    var displayField_52_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_52_13_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectCalendarPanel.DATE_HELP_TEXT_ITEM_ID);
    AS3.setBindable(displayField_52_13_$1,"margin" , "0 8 0 0");
    AS3.setBindable(displayField_52_13_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_Todos_select_day'));
    ui_SwitchingContainer_42_9_$1.items = [button_44_13_$1, displayField_52_13_$1];
    toolbar_37_5_$1.items = [tbFill_41_9_$1, ui_SwitchingContainer_42_9_$1];
    config_$1.dockedItems = [toolbar_37_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6rwq(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectCalendarPanel",
      constructor: ProjectCalendarPanel$,
      super$6rwq: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DATE_PICKER_ITEM_ID: "datePickerItemId",
        SHOW_ALL_TODOS_BTN_ITEM_ID: "showAllTodosBtnItemId",
        DATE_HELP_TEXT_ITEM_ID: "dateHelpTextItemId"
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanelBase",
        "com.coremedia.ui.components.CustomizableDatePicker",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
