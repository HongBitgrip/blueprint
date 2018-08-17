Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.CategoryElement", function(CategoryElement) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.form.Label;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class CategoryElement extends Container{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.util.AriaUtils;

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.categoryElement";

    public*/function CategoryElement$(config/*:CategoryElement = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:CategoryElement*/ =AS3.cast(CategoryElement,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase.getCategoryKeyWithoutWhiteSpaces(AS3.getBindable(config,"categoryBean")));
    var label_45_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_45_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.getCategoryName$pilG(config)));
    label_45_5_$1.flex = 1.0;
    var ui_BindPropertyPlugin_48_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_48_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_48_9_$1.bindTo = AS3.getBindable(config,"disabledValueExpression");
    label_45_5_$1.plugins = [ui_BindPropertyPlugin_48_9_$1];
    var ui_IconButton_52_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase.getCategoryKeyWithoutWhiteSpaces(AS3.getBindable(config,"categoryBean")));
    AS3.setBindable(ui_IconButton_52_5_$1,"handler" , AS3.getBindable(config,"removeHandler"));
    AS3.setBindable(ui_IconButton_52_5_$1,"scale" , "small");
    AS3.setBindable(ui_IconButton_52_5_$1,"text" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.AriaUtils.DUMMY_TEXT));
    ui_IconButton_52_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.getAriaLabel$pilG(config));
    AS3.setBindable(ui_IconButton_52_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'remove_small')));
    var ui_BindPropertyPlugin_59_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_59_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_59_9_$1.bindTo = AS3.getBindable(config,"disabledValueExpression");
    ui_IconButton_52_5_$1.plugins = [ui_BindPropertyPlugin_59_9_$1];
    config_$1.items = [label_45_5_$1, ui_IconButton_52_5_$1];
    var layout_HBox_65_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_65_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_65_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pilG(config_$1);
  }/*

    [Bindable]
    public var categoryBean:Bean;

    [Bindable]
    public var disabledValueExpression:ValueExpression;

    private*/ function getCategoryName(config/*:CategoryElement*/)/*:String*/ {
      return AS3.getBindable(config,"categoryBean").get('display');
    }/*

    private*/ function getAriaLabel(config/*:CategoryElement*/)/*:String*/ {
      var category/*:String*/ = this.getCategoryName$pilG(config);
      var removePattern/*:String*/ = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_contributionSearchFilterPanel_remove_filterCategory_pattern');
      return Ext.String.format(removePattern, category);
    }/*

    [Bindable]
    public var removeHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.elastic.social.studio.config.categoryElement",
      constructor: CategoryElement$,
      super$pilG: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getCategoryName$pilG: getCategoryName,
      getAriaLabel$pilG: getAriaLabel,
      config: {
        categoryBean: null,
        disabledValueExpression: null,
        removeHandler: null
      },
      requires: [
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.util.AriaUtils",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase"]
    };
});
