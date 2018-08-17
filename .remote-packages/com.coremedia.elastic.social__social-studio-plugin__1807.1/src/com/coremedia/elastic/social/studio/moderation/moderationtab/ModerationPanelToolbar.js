Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbar", function(ModerationPanelToolbar) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab{
import com.coremedia.elastic.social.studio.moderation.moderationtab.*;
import net.jangaroo.ext.Exml;
import com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPoint;
import com.coremedia.ui.plugins.UpdateEnabledPlugin;
import com.coremedia.ui.plugins.BindVisibilityPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ModerationPanelToolbar extends ModerationPanelToolbarBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationPanelToolbar";

    public*/function ModerationPanelToolbar$(config/*:ModerationPanelToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase,{});
    var defaults_$1/*:ModerationPanelToolbar*/ =AS3.cast(ModerationPanelToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    var es_CuratedTransferExtensionPoint_37_5_$1/*:com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPoint*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPoint,{});
    AS3.setBindable(es_CuratedTransferExtensionPoint_37_5_$1,"width" , 200);
    AS3.setBindable(es_CuratedTransferExtensionPoint_37_5_$1,"height" , 50);
    AS3.setBindable(es_CuratedTransferExtensionPoint_37_5_$1,"layout" , "hbox");
    AS3.setBindable(es_CuratedTransferExtensionPoint_37_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    var ui_UpdateEnabledPlugin_42_9_$1/*:com.coremedia.ui.plugins.UpdateEnabledPlugin*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPlugin,{});
    AS3.setBindable(ui_UpdateEnabledPlugin_42_9_$1,"valueExpression" , this.getCuratedButtonsDisabledValueExpression(AS3.getBindable(config,"moderation")));
    var ui_BindVisibilityPlugin_43_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_43_9_$1.bindTo = AS3.getBindable(config,"activeTabValueExpression");
    AS3.setBindable(ui_BindVisibilityPlugin_43_9_$1,"transformer" , function(value/*:String*/)/*:Boolean*/ {return value === com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ACTIVE_TAB_ARCHIVE;});
    es_CuratedTransferExtensionPoint_37_5_$1.plugins = [ui_UpdateEnabledPlugin_42_9_$1, ui_BindVisibilityPlugin_43_9_$1];
    config_$1.items = [es_CuratedTransferExtensionPoint_37_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JNbU(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var activeTabValueExpression:ValueExpression;

    /** The function that will be called on collapse * /
    [Bindable]
    public var collapseHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationPanelToolbar",
      constructor: ModerationPanelToolbar$,
      super$JNbU: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        activeTabValueExpression: null,
        collapseHandler: null
      },
      requires: [
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.UpdateEnabledPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase",
        "com.coremedia.elastic.social.studio.plugins.CuratedTransferExtensionPoint"
      ]
    };
});
