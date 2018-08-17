Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenu", function(QuickCreateLinklistMenu) {/*package com.coremedia.blueprint.base.components.quickcreate{
import com.coremedia.blueprint.base.components.quickcreate.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.menu.Menu;

    [ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreate')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class QuickCreateLinklistMenu extends QuickCreateLinklistMenuBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.quickCreateLinklistMenu";

    public*/function QuickCreateLinklistMenu$(config/*:QuickCreateLinklistMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase*/ =AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase,{});
    var defaults_$1/*:QuickCreateLinklistMenu*/ =AS3.cast(QuickCreateLinklistMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'create_content')));
    config_$1.itemId = "createFromLinkListMenuButton";
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'quick_create_tooltip'))));
    AS3.setBindable(config_$1,"tooltip" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'quick_create_tooltip')));
    var editor_BindDisablePlugin_31_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_31_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_31_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    config_$1.plugins = [editor_BindDisablePlugin_31_5_$1];
    var menu_35_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_35_5_$1.itemId = "createFromLinkListMenu";
    menu_35_5_$1.items = [];
    config_$1.menu = menu_35_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$iGql(config_$1);
  }/*

    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase",
      alias: "widget.com.coremedia.blueprint.base.components.config.quickCreateLinklistMenu",
      constructor: QuickCreateLinklistMenu$,
      super$iGql: function() {
        com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase.prototype.constructor.apply(this, arguments);
      },
      config: {forceReadOnlyValueExpression: null},
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
