Ext.define("com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField", function(TextBlobPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.ui.components.StatefulTextArea;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
[PublicApi]
/**
 A text area that binds to a BLOB property of MIME type text/plain being edited inside
 of a document form. Specify the propertyName property for selecting
 the BLOB property.
 * /
public class TextBlobPropertyField extends StatefulTextArea{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.textBlobPropertyField";

    public*/function TextBlobPropertyField$(config/*:TextBlobPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.StatefulTextArea*/ =AS3.cast(com.coremedia.ui.components.StatefulTextArea,{});
    var defaults_$1/*:TextBlobPropertyField*/ =AS3.cast(TextBlobPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.name =net.jangaroo.ext.Exml.asString( 'properties.' + AS3.getBindable(config,"propertyName"));
    config_$1.anchor = "100%";
    config_$1.grow = true;
    config_$1.growMax = 2000.0;
    config_$1.growMin = 100.0;
    var editor_SetPropertyLabelPlugin_56_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_56_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_56_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    var editor_SetPropertyEmptyTextPlugin_58_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin,{});
    editor_SetPropertyEmptyTextPlugin_58_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_SetPropertyEmptyTextPlugin_58_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_BindDisablePlugin_60_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_60_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_60_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_62_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_62_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var editor_ShowIssuesPlugin_63_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_63_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_63_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(editor_ShowIssuesPlugin_63_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var ui_BindBlobPropertyPlugin_66_5_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_66_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    AS3.setBindable(ui_BindBlobPropertyPlugin_66_5_$1,"mimeType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"defaultMimeType") || 'text/plain'));
    config_$1.plugins = [editor_SetPropertyLabelPlugin_56_5_$1, editor_SetPropertyEmptyTextPlugin_58_5_$1, editor_BindDisablePlugin_60_5_$1, editor_PropertyFieldPlugin_62_5_$1, editor_ShowIssuesPlugin_63_5_$1, ui_BindBlobPropertyPlugin_66_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qXz8(config_$1);
  }/*

    /**
     * a property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /** the property of the Bean to bind in this field * /
    [Bindable]
    public var propertyName:String;


    /**
     the MIME type to use for new texts; MIME types of existing texts are kept unchanged;
     defaults to text/plain
     * /
    [Bindable]
    public var defaultMimeType:String;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulTextArea",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.textBlobPropertyField",
      constructor: TextBlobPropertyField$,
      super$qXz8: function() {
        com.coremedia.ui.components.StatefulTextArea.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        propertyName: null,
        defaultMimeType: null,
        hideIssues: false
      },
      requires: [
        "com.coremedia.ui.components.StatefulTextArea",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyEmptyTextPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
