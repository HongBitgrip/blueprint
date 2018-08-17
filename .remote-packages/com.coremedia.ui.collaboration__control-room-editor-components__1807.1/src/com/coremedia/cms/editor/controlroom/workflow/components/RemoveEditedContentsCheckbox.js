Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.RemoveEditedContentsCheckbox", function(RemoveEditedContentsCheckbox) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import ext.form.field.Checkbox;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class RemoveEditedContentsCheckbox extends Checkbox{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.removeEditedContentsCheckbox";

    public static const REMOVE_EDITED_CONTENTS_ITEM_ID:String = "removeEditedContents";

    public*/function RemoveEditedContentsCheckbox$(config/*:RemoveEditedContentsCheckbox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    var defaults_$1/*:RemoveEditedContentsCheckbox*/ =AS3.cast(RemoveEditedContentsCheckbox,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( RemoveEditedContentsCheckbox.REMOVE_EDITED_CONTENTS_ITEM_ID);
    config_$1.hideLabel = true;
    AS3.setBindable(config_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_removeEditedContents_box_label')));
    var ui_BindPropertyPlugin_28_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_28_5_$1.bindTo = AS3.getBindable(config,"removeEditedContentsValueExpression");
    ui_BindPropertyPlugin_28_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_28_5_$1.bidirectional = true;
    config_$1.plugins = [ui_BindPropertyPlugin_28_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mNDl(config_$1);
  }/*

    [Bindable]
    public var removeEditedContentsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Checkbox",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.removeEditedContentsCheckbox",
      constructor: RemoveEditedContentsCheckbox$,
      super$mNDl: function() {
        Ext.form.field.Checkbox.prototype.constructor.apply(this, arguments);
      },
      config: {removeEditedContentsValueExpression: null},
      statics: {REMOVE_EDITED_CONTENTS_ITEM_ID: "removeEditedContents"},
      requires: [
        "Ext.form.field.Checkbox",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
