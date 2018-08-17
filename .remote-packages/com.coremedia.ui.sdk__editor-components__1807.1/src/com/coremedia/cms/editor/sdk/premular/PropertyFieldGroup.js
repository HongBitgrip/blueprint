Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup", function(PropertyFieldGroup) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin;
[PublicApi]
/**
 This collapsible panel is intended to be used in DocumentForms.
 The collapse/expand status is stored document type depending the EditorPreferences of the user.
 To identify the component, the itemId must be set for the component.
 * /
public class PropertyFieldGroup extends PropertyFieldGroupBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.propertyFieldGroup";

    public*/function PropertyFieldGroup$(config/*:PropertyFieldGroup = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase,{});
    var defaults_$1/*:PropertyFieldGroup*/ =AS3.cast(PropertyFieldGroup,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyField_23_5_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_23_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyField_23_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_PropertyField_23_5_$1.labelSeparator = "";
    editor_PropertyField_23_5_$1.labelAlign = "top";
    editor_PropertyField_23_5_$1.anchor = "100%";
    config_$1["defaultType"] = editor_PropertyField_23_5_$1['xtype'];
    delete editor_PropertyField_23_5_$1['xtype'];
    delete editor_PropertyField_23_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_23_5_$1;
    var ui_VerticalSpacingPlugin_30_5_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    var editor_ReusabilityComponentStatePlugin_31_5_$1/*:com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin,{});
    editor_ReusabilityComponentStatePlugin_31_5_$1.stateId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemId","DUMMY"));
    editor_ReusabilityComponentStatePlugin_31_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_ReusabilityComponentStatePlugin_31_5_$1.events = ['expand', 'collapse'];
    editor_ReusabilityComponentStatePlugin_31_5_$1.applyStateFn =AS3.bind( this,"applyReusabilityState");
    editor_ReusabilityComponentStatePlugin_31_5_$1.saveStateFn =AS3.bind( this,"saveReusabilityState");
    config_$1.plugins = [ui_VerticalSpacingPlugin_30_5_$1, editor_ReusabilityComponentStatePlugin_31_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Q5By(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.propertyFieldGroup",
      constructor: PropertyFieldGroup$,
      super$Q5By: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin",
        "com.coremedia.cms.editor.sdk.premular.PropertyField"
      ]
    };
});
