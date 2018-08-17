Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopupImplicitContainer", function(PersonaPopupImplicitContainer) {/*package com.coremedia.personalization.ui.persona.popup{
import ext.form.FieldContainer;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
import ext.ProgressBar;
public class PersonaPopupImplicitContainer extends FieldContainer{

    import com.coremedia.ui.skins.LabelableSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaPopupImplicitContainer";

    public*/function PersonaPopupImplicitContainer$(config/*:PersonaPopupImplicitContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    var defaults_$1/*:PersonaPopupImplicitContainer*/ =AS3.cast(PersonaPopupImplicitContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(config,"implicitName"))));
    config_$1.labelWidth = 120.0;
    config_$1.labelSeparator = "";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.LabelableSkin.SUB.getSkin());
    var layout_Fit_27_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_27_5_$1);
    var progressBar_30_5_$1/*:ext.ProgressBar*/ =AS3.cast(Ext.ProgressBar,{});
    AS3.setBindable(progressBar_30_5_$1,"value" , AS3.getBindable(config,"implicitValue")/100);
    config_$1.items = [progressBar_30_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fufU(config_$1);
  }/*

    /** The name of the implicit taxonomy that should be displayed * /
    [Bindable]
    public var implicitName:String;


    /** The value of the implicit taxonomy as Number (0-100) * /
    [Bindable]
    public var implicitValue:Number;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      alias: "widget.com.coremedia.personalization.ui.config.personaPopupImplicitContainer",
      constructor: PersonaPopupImplicitContainer$,
      super$fufU: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        implicitName: null,
        implicitValue: NaN
      },
      requires: [
        "Ext.ProgressBar",
        "Ext.form.FieldContainer",
        "Ext.layout.container.Fit",
        "com.coremedia.ui.skins.LabelableSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
