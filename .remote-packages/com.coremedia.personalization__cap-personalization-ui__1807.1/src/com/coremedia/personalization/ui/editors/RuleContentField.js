Ext.define("com.coremedia.personalization.ui.editors.RuleContentField", function(RuleContentField) {/*package com.coremedia.personalization.ui.editors{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField;
import com.coremedia.ui.components.IconButton;
import com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class RuleContentField extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.ruleContentField";

    public*/function RuleContentField$(config/*:RuleContentField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:RuleContentField*/ =AS3.cast(RuleContentField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_43_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_43_5_$1);
    var ui_HorizontalSpacingPlugin_46_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    config_$1.plugins = [ui_HorizontalSpacingPlugin_46_5_$1];
    var editor_SingleLinkField_49_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField,{});
    AS3.setBindable(editor_SingleLinkField_49_5_$1,"linkContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"allowedContentType")));
    editor_SingleLinkField_49_5_$1.flex = 1.0;
    AS3.setBindable(editor_SingleLinkField_49_5_$1,"valueExpression" , AS3.getBindable(config,"bindTo").extendBy(AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_SingleLinkField_49_5_$1,"showThumbnails" , AS3.getBindable(config,"showThumbnails"));
    var ui_IconButton_54_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    var pui_DeleteContentFromRuleAction_56_9_$1/*:com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction*/ =AS3.cast(com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction,{});
    AS3.setBindable(pui_DeleteContentFromRuleAction_56_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pui_DeleteContentFromRuleAction_56_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    ui_IconButton_54_5_$1.baseAction = new com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction(pui_DeleteContentFromRuleAction_56_9_$1);
    var ui_BindPropertyPlugin_60_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_9_$1.componentProperty = "hidden";
    ui_BindPropertyPlugin_60_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('readOnly');
    ui_IconButton_54_5_$1.plugins = [ui_BindPropertyPlugin_60_9_$1];
    config_$1.items = [editor_SingleLinkField_49_5_$1, ui_IconButton_54_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$aVrV(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean that represent the selection rule
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    /** the name of the bean property containing the content bean associated with the rule
     * /
    [Bindable]
    public var propertyName:String;


    /**
     Name of the content type any content object dropped into the editor must be an instance of. If this attribute
     is not set, any content object may be dropped into the editor.
     * /
    [Bindable]
    public var allowedContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.ruleContentField",
      constructor: RuleContentField$,
      super$aVrV: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        showThumbnails: false,
        propertyName: null,
        allowedContentType: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction"]
    };
});
