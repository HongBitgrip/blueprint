Ext.define("com.coremedia.personalization.ui.SearchQueryHelperWindow", function(SearchQueryHelperWindow) {/*package com.coremedia.personalization.ui{
import com.coremedia.ui.components.HelperWindow;
import net.jangaroo.ext.Exml;
import ext.button.Button;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 A Window that contains a short tutorial how to configure your own search queries.
 * /
public class SearchQueryHelperWindow extends HelperWindow{

    import com.coremedia.ui.skins.ButtonSkin;

    import ext.Ext;

    public static const xtype:String = "com.coremedia.personalization.ui.config.searchQueryHelperWindow";

    public*/function SearchQueryHelperWindow$(config/*:SearchQueryHelperWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.HelperWindow*/ =AS3.cast(com.coremedia.ui.components.HelperWindow,{});
    var defaults_$1/*:SearchQueryHelperWindow*/ =AS3.cast(SearchQueryHelperWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_searchQueryHelper_window_title'));
    AS3.setBindable(config_$1,"helpTextUrl" ,net.jangaroo.ext.Exml.asString( Ext.manifest.globalResources[this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_searchQueryHelper_window_html_content_key')]));
    var button_26_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_26_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_26_5_$1,"scale" , "small");
    AS3.setBindable(button_26_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_dialog_defaultCloseButton_text')));
    AS3.setBindable(button_26_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_26_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Eg8a(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.HelperWindow",
      alias: "widget.com.coremedia.personalization.ui.config.searchQueryHelperWindow",
      constructor: SearchQueryHelperWindow$,
      super$Eg8a: function() {
        com.coremedia.ui.components.HelperWindow.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.components.HelperWindow",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
