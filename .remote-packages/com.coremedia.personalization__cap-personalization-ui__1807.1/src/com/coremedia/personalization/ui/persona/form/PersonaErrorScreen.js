Ext.define("com.coremedia.personalization.ui.persona.form.PersonaErrorScreen", function(PersonaErrorScreen) {/*package com.coremedia.personalization.ui.persona.form{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import ext.form.Label;
import com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class PersonaErrorScreen extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaErrorScreen";

    [Bindable]
    public var bindTo:ValueExpression;

    public*/function PersonaErrorScreen$(config/*:PersonaErrorScreen = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:PersonaErrorScreen*/ =AS3.cast(PersonaErrorScreen,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_PropertyFieldGroup_23_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup,{});
    editor_PropertyFieldGroup_23_5_$1.itemId = "errorScreen";
    AS3.setBindable(editor_PropertyFieldGroup_23_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyFieldGroup_23_5_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_error_screen_label'));
    var label_27_9_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_27_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_error_screen_text')));
    var editor_TextBlobPropertyField_28_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField,{});
    AS3.setBindable(editor_TextBlobPropertyField_28_9_$1,"height" , 300);
    editor_TextBlobPropertyField_28_9_$1.labelSeparator = "";
    AS3.setBindable(editor_TextBlobPropertyField_28_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_TextBlobPropertyField_28_9_$1,"propertyName" , "profileSettings");
    editor_TextBlobPropertyField_28_9_$1.hideLabel = true;
    editor_PropertyFieldGroup_23_5_$1.items = [label_27_9_$1, editor_TextBlobPropertyField_28_9_$1];
    config_$1.items = [editor_PropertyFieldGroup_23_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wirs(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.personaErrorScreen",
      constructor: PersonaErrorScreen$,
      super$wirs: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "Ext.container.Container",
        "Ext.form.Label",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.fields.TextBlobPropertyField",
        "com.coremedia.personalization.ui.Personalization_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
