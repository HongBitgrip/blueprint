Ext.define("com.coremedia.personalization.ui.editors.ConditionFrame", function(ConditionFrame) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
/**
 Provides the 'frame' responsible for the 'condition-type' selector and the 'delete' button around a condition. It is also responsible for selecting the appropriate Condition item for a supplied rule condition. <br/><br/>The available Condition items are supplied via an array containing JSON-representations of the actual objects. Each such JSON object must contain the following properties: <ul><li><i>xtype</i> the xtype name of the represented object. The referenced object must implement the {@link Condition} interface.</li><li><i>conditionName</i> the name under which the item can be selected in the UI, e.g. 'Keyword' or 'Phone'.</li><li><i>propertyPattern</i> a prefix pattern that determines for which properties this item is to be used. The first item in the array that matches a property name is chosen. The value of <i>propertyName</i> is used as the default value for this property.</li></ul>Optionally, you can add these properties: <ul><li><i>propertyName</i> the property name to be set if the condition is selected. Useful if you use an item for one specific property and don't want the user to set the name manually. The value of this property is used as the default for <i>propertyPattern</i>. If you want to use a different pattern, set the <i>propertyPattern</i> value explicitly.</li><li><i>isDefault</i> if 'true', the item is selected by default for newly created conditions</li></ul>
 * /
public class ConditionFrame extends ConditionFrameBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.conditionFrame";

    public*/function ConditionFrame$(config/*:ConditionFrame = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.ConditionFrameBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionFrameBase,{});
    var defaults_$1/*:ConditionFrame*/ =AS3.cast(ConditionFrame,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_HorizontalSpacingPlugin_25_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_25_5_$1];
    var layout_HBox_29_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_29_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$DxdK(config_$1);
  }/*

    /*
      configuration of the ConditionFrames shown in this panel. see ConditionFrame for details
     * /
    [Bindable]
    public var conditionItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.ConditionFrameBase",
      alias: "widget.com.coremedia.personalization.ui.config.conditionFrame",
      constructor: ConditionFrame$,
      super$DxdK: function() {
        com.coremedia.personalization.ui.editors.ConditionFrameBase.prototype.constructor.apply(this, arguments);
      },
      config: {conditionItems: null},
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.personalization.ui.editors.ConditionFrameBase",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
