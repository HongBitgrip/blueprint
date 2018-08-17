Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.SimplePublicationPanel", function(SimplePublicationPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.publication{
import com.coremedia.ui.components.*;
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
import ext.form.RadioGroup;
import ext.form.field.Radio;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class SimplePublicationPanel extends Panel{

    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.simplePublicationPanel";

    public*/function SimplePublicationPanel$(config/*:SimplePublicationPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var defaults_$1/*:SimplePublicationPanel*/ =AS3.cast(SimplePublicationPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var radioGroup_21_5_$1/*:ext.form.RadioGroup*/ =AS3.cast(Ext.form.RadioGroup,{});
    radioGroup_21_5_$1.columns = 1;
    radioGroup_21_5_$1.name = "stateSimple";
    var radio_24_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_24_9_$1.inputValue = "Start";
    radio_24_9_$1.hideLabel = true;
    AS3.setBindable(radio_24_9_$1,"disabled" , true);
    AS3.setBindable(radio_24_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioSimplePublication_start')));
    var ui_IconDisplayField_28_9_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_28_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.INFO.getSkin());
    AS3.setBindable(ui_IconDisplayField_28_9_$1,"margin" , "0 0 0 -1");
    AS3.setBindable(ui_IconDisplayField_28_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.prioritize_down));
    var radio_31_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_31_9_$1.inputValue = "End";
    radio_31_9_$1.hideLabel = true;
    AS3.setBindable(radio_31_9_$1,"disabled" , false);
    AS3.setBindable(radio_31_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Workflow_StudioSimplePublication_end')));
    radio_31_9_$1.checked = true;
    radioGroup_21_5_$1.items = [radio_24_9_$1, ui_IconDisplayField_28_9_$1, radio_31_9_$1];
    config_$1.items = [radioGroup_21_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1On$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.simplePublicationPanel",
      constructor: SimplePublicationPanel$,
      super$1On$: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.RadioGroup",
        "Ext.form.field.Radio",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
