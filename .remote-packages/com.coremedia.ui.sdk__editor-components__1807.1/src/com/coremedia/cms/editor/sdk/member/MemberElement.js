Ext.define("com.coremedia.cms.editor.sdk.member.MemberElement", function(MemberElement) {/*package com.coremedia.cms.editor.sdk.member{
import com.coremedia.cms.editor.sdk.member.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.IconDisplayField;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.icons.CollaborationIcons')]
/**

 An small container to display a member. It is intended to be used as an item
 of a <code>com.coremedia.cms.editor.sdk.config.membersContainer</code>.
 The container displays the member's name and has a 'remove' button.
 If the member is a group, an additional 'expand' button is shown.

 * /
public class MemberElement extends MemberElementBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.memberElement";

    public static const NAME_FIELD_ITEM_ID:String = "nameFieldItemId";

    public static const EXPAND_BUTTON_ITEM_ID:String = "expandButtonItemId";

    public static const REMOVE_BUTTON_ITEM_ID:String = "removeButtonItemId";
    private var computedDisabledValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:MemberElement*/)/*:void*/ {
      this.computedDisabledValueExpression$2Lq8 = AS3.getBindable(config,"disabledValueExpression") ? AS3.getBindable(config,"disabledValueExpression") : com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }/*

    public*/function MemberElement$(config/*:MemberElement = null*/){if(arguments.length<=0)config=null;this.__initialize__$2Lq8(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.member.MemberElementBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MemberElementBase,{});
    var defaults_$1/*:MemberElement*/ =AS3.cast(MemberElement,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_53_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_53_5_$1,"align" , "begin");
    AS3.setBindable(layout_HBox_53_5_$1,"pack" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_53_5_$1);
    var ui_IconButton_57_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_57_5_$1.itemId =net.jangaroo.ext.Exml.asString( MemberElement.EXPAND_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_57_5_$1,"scale" , "small");
    ui_IconButton_57_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_57_5_$1,"handler" ,AS3.bind( this,"expandGroup"));
    AS3.setBindable(ui_IconButton_57_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CollaborationIcons', 'add_expand')));
    AS3.setBindable(ui_IconButton_57_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_expand_btn_tooltip')));
    AS3.setBindable(ui_IconButton_57_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_expand_btn_tooltip'));
    var ui_BindVisibilityPlugin_65_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_65_9_$1.bindTo = this.getExpandGroupsButtonVisibilityVE();
    var ui_BindPropertyPlugin_66_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_66_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_66_9_$1.bindTo = this.computedDisabledValueExpression$2Lq8;
    var ui_BindPropertyPlugin_68_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_68_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_68_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeMemberName"));
    ui_BindPropertyPlugin_68_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_IconButton_57_5_$1.plugins = [ui_BindVisibilityPlugin_65_9_$1, ui_BindPropertyPlugin_66_9_$1, ui_BindPropertyPlugin_68_9_$1];
    var ui_IconDisplayField_73_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_73_5_$1.itemId =net.jangaroo.ext.Exml.asString( MemberElement.NAME_FIELD_ITEM_ID);
    ui_IconDisplayField_73_5_$1.flex = 1.0;
    var ui_BindPropertyPlugin_76_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_76_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_76_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeMemberName"));
    ui_BindPropertyPlugin_76_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_IconDisplayField_73_5_$1.plugins = [ui_BindPropertyPlugin_76_9_$1];
    var ui_IconButton_81_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_81_5_$1.itemId =net.jangaroo.ext.Exml.asString( MemberElement.REMOVE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_81_5_$1,"scale" , "small");
    ui_IconButton_81_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_81_5_$1,"handler" ,AS3.bind( this,"removeMember"));
    AS3.setBindable(ui_IconButton_81_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove_small')));
    AS3.setBindable(ui_IconButton_81_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_remove_btn_tooltip')));
    AS3.setBindable(ui_IconButton_81_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SelectedMemberElement_remove_btn_tooltip'));
    var ui_BindPropertyPlugin_89_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_89_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_89_9_$1.bindTo = this.computedDisabledValueExpression$2Lq8;
    var ui_BindVisibilityPlugin_91_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_91_9_$1.bindTo = this.getMemberVisibleVE();
    ui_IconButton_81_5_$1.plugins = [ui_BindPropertyPlugin_89_9_$1, ui_BindVisibilityPlugin_91_9_$1];
    config_$1.items = [ui_IconButton_57_5_$1, ui_IconDisplayField_73_5_$1, ui_IconButton_81_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2Lq8(config_$1);
  }/*

    /**
     * ValueExpression holding the disabled status of this MemberElement.
     * /
    [Bindable]
    public var disabledValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.member.MemberElementBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.memberElement",
      computedDisabledValueExpression$2Lq8: null,
      __initialize__$2Lq8: __initialize__,
      constructor: MemberElement$,
      super$2Lq8: function() {
        com.coremedia.cms.editor.sdk.member.MemberElementBase.prototype.constructor.apply(this, arguments);
      },
      config: {disabledValueExpression: null},
      statics: {
        NAME_FIELD_ITEM_ID: "nameFieldItemId",
        EXPAND_BUTTON_ITEM_ID: "expandButtonItemId",
        REMOVE_BUTTON_ITEM_ID: "removeButtonItemId"
      },
      requires: [
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.member.MemberElementBase",
        "com.coremedia.icons.CollaborationIcons_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
