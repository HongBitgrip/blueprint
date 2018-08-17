Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel", function(FilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.panel.PanelHeader;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.panel.Tool;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 <p>
 The base component for defining a search filter. For defining a custom filter
 for the search mode of the library window, you can create an ActionScript class
 inheriting from this class in which you define the methods buildQuery() and
 getDefaultState(). Afterwards you can create an MXML definition of the
 actual UI for the new filter, which references your newly created ActionScript
 class as its base class.
 </p>
 <p>
 The UI can use the getStateBean() method to retrieve
 the predefined bean into which it stores its current state.
 It might be helpful to use the various existing bind plugins for this purpose.
 </p>
 <p>
 The method buildQuery() can use the current state as stored in
 the bean returned from getStateBean() to assemble a Solr query string.
 Query strings from individual filters will be combined using the AND operator.
 </p>
 <p>
 The method getDefaultState() must return an object mapping all properties
 of the state bean to their defaults. It is used for initialization and
 for resetting the filter. This method will be called first after the
 initComponent() method completed, but before the constructor of
 FilterPanel returns.
 </p>
 <p>
 This component uses plugins. When you subclass this component and want to use plugins
 be aware to set mode="append" in your plugins configuration.
 </p>

 @see SearchFilter#buildQuery
 @see SearchFilter#getDefaultState
 @see SearchFilter#getStateBean
 * /
public class FilterPanel extends FilterPanelBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.filterPanel";

    public*/function FilterPanel$(config/*:FilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase,{});
    var defaults_$1/*:FilterPanel*/ =AS3.cast(FilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FILTER.getSkin());
    AS3.setBindable(config_$1,"collapsed" , true);
    var ui_BindPropertyPlugin_61_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_61_5_$1.componentProperty = "validationState";
    ui_BindPropertyPlugin_61_5_$1.bindTo = this.getValidationStateVE();
    var ui_BEMPlugin_63_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_63_5_$1,"block" , com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase.BLOCK.getIdentifier());
    AS3.setBindable(ui_BEMPlugin_63_5_$1,"bodyElement" , com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase.ELEMENT_BODY);
    AS3.setBindable(ui_BEMPlugin_63_5_$1,"modifier" , this.getModifierVE());
    config_$1.plugins = [ui_BindPropertyPlugin_61_5_$1, ui_BEMPlugin_63_5_$1];
    var header_68_5_$1/*:ext.panel.PanelHeader*/ =AS3.cast(Ext.panel.Header,{});
    AS3.setBindable(header_68_5_$1,"titlePosition" , 1.0);
    var ui_BEMMixin_70_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_70_9_$1,"bemElement" , com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase.ELEMENT_HEADER);

    delete ui_BEMMixin_70_9_$1['xtype'];
    delete ui_BEMMixin_70_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(header_68_5_$1, ui_BEMMixin_70_9_$1);
    var ui_AddItemsPlugin_74_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var tool_76_13_$1/*:ext.panel.Tool*/ =AS3.cast(Ext.panel.Tool,{});
    tool_76_13_$1.itemId = "resetButton";
    tool_76_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    tool_76_13_$1.handler =AS3.bind( this,"resetFilter");
    tool_76_13_$1.tooltip = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_restore_btn_text');
    AS3.setBindable(tool_76_13_$1,"type" , "close");
    var ui_BEMMixin_82_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_82_17_$1,"bemElement" , com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase.ELEMENT_RESET);

    delete ui_BEMMixin_82_17_$1['xtype'];
    delete ui_BEMMixin_82_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(tool_76_13_$1, ui_BEMMixin_82_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_74_9_$1,"items" , [tool_76_13_$1]);
    header_68_5_$1.plugins = [ui_AddItemsPlugin_74_9_$1];
    config_$1.header = header_68_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xeTN(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.filterPanel",
      constructor: FilterPanel$,
      super$xeTN: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.panel.Header",
        "Ext.panel.Tool",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
