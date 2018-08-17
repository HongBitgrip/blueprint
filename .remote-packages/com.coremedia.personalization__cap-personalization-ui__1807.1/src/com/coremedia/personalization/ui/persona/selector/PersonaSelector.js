Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelector", function(PersonaSelector) {/*package com.coremedia.personalization.ui.persona.selector{
import com.coremedia.personalization.ui.persona.selector.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/** A button that shows a menu (when clicked) with the available personas from the preconfigured
 repository paths. Selecting a persona from the menu will activate the personalized preview.
 The button is only enabled if there is a preview url provided.   * /
public class PersonaSelector extends PersonaSelectorBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.personalization.ui.config.personaSelector";

    public*/function PersonaSelector$(config/*:PersonaSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase*/ =AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase,{});
    var defaults_$1/*:PersonaSelector*/ =AS3.cast(PersonaSelector,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'user')));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_open_menu_button'));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_persona_popup_open_menu_button'));
    config_$1.menuAlign = "tr-br";
    var ui_BindPropertyPlugin_49_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_49_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_49_5_$1.bindTo = this.getDisabledValueExpression();
    var editor_ReusabilityComponentStatePlugin_51_5_$1/*:com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin,{});
    editor_ReusabilityComponentStatePlugin_51_5_$1.stateId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemId","DUMMY"));
    editor_ReusabilityComponentStatePlugin_51_5_$1.bindTo = AS3.getBindable(config,"contentValueExpression");
    editor_ReusabilityComponentStatePlugin_51_5_$1.events = [com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase.PERSONA_CHANGED_EVENT];
    editor_ReusabilityComponentStatePlugin_51_5_$1.applyStateFn =AS3.bind( this,"applyReusabilityState");
    editor_ReusabilityComponentStatePlugin_51_5_$1.saveStateFn =AS3.bind( this,"saveReusabilityState");
    config_$1.plugins = [ui_BindPropertyPlugin_49_5_$1, editor_ReusabilityComponentStatePlugin_51_5_$1];
    var perso_PersonaSelectorMenu_58_5_$1/*: com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu*/ =AS3.cast(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu,{});
    AS3.setBindable(perso_PersonaSelectorMenu_58_5_$1,"paths" , AS3.getBindable(config,"paths") || ['/System/personalization/profiles']);
    AS3.setBindable(perso_PersonaSelectorMenu_58_5_$1,"defaultGroupHeaderLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"defaultGroupHeaderLabel")));
    AS3.setBindable(perso_PersonaSelectorMenu_58_5_$1,"docType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"docType") || 'CMUserProfile'));
    AS3.setBindable(perso_PersonaSelectorMenu_58_5_$1,"personaActivatorFn" ,AS3.bind( this,"getPersonaActivator"));
    AS3.setBindable(perso_PersonaSelectorMenu_58_5_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    config_$1.menu = perso_PersonaSelectorMenu_58_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mFrO(config_$1);
  }/*

    /**
     * The value expression evaluating to the content to be used.
     * /
    [Bindable]
    public var contentValueExpression:ValueExpression;

    /** Name of the CMS document type representing personas. Default is 'CMUserProfile'. * /
    [Bindable]
    public var docType:String;


    /** repository paths that contain personas. paths are '/'-separated folder names * /
    [Bindable]
    public var paths:Array;


    /** The label that as persona group header * /
    [Bindable]
    public var defaultGroupHeaderLabel:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase",
      alias: "widget.com.coremedia.personalization.ui.config.personaSelector",
      constructor: PersonaSelector$,
      super$mFrO: function() {
        com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        docType: null,
        paths: null,
        defaultGroupHeaderLabel: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu"]
    };
});
