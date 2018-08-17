Ext.define("com.coremedia.personalization.ui.SearchQueryHelper", function(SearchQueryHelper) {/*package com.coremedia.personalization.ui{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction;
import com.coremedia.personalization.ui.SearchQueryHelperWindow;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A container, that contains a) a textlink with the 'Search Functions'-help and
 b) an 'Info'-icon, that displays a short summary on mouse hover
 * /
public class SearchQueryHelper extends Container{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.personalization.ui.config.searchQueryHelper";

    public*/function SearchQueryHelper$(config/*:SearchQueryHelper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:SearchQueryHelper*/ =AS3.cast(SearchQueryHelper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "column");
    var button_33_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_33_5_$1.itemId = "btnHelp";
    button_33_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_33_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_searchQueryHelper_button_text')));
    button_33_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_searchQueryHelper_button_text'));
    AS3.setBindable(button_33_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    var editor_OpenReferenceWindowAction_39_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction,{});
    var perso_SearchQueryHelperWindow_41_13_$1/*:com.coremedia.personalization.ui.SearchQueryHelperWindow*/ =AS3.cast(com.coremedia.personalization.ui.SearchQueryHelperWindow,{});
    AS3.setBindable(editor_OpenReferenceWindowAction_39_9_$1,"dialog" , perso_SearchQueryHelperWindow_41_13_$1);
    button_33_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction(editor_OpenReferenceWindowAction_39_9_$1);
    config_$1.items = [button_33_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Q$aK(config_$1);
  }/*

    /**
     The handler to be called when the help link is clicked.
     * /
    [Bindable]
    public var clickHandler:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.personalization.ui.config.searchQueryHelper",
      constructor: SearchQueryHelper$,
      super$Q$aK: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {clickHandler: null},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.personalization.ui.SearchQueryHelperWindow"]
    };
});
