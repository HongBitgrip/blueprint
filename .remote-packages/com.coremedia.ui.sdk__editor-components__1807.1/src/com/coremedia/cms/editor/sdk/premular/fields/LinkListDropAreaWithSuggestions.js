Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions", function(LinkListDropAreaWithSuggestions) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import com.coremedia.ui.store.DataField;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.button.Button;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.components.SimpleSuggestionsComboBox;
import ext.view.BoundListView;
import com.coremedia.ui.plugins.StopEventPropagationPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
/**
 Drop Area which can be used to append items to a given link list.

 We need a container here to wrap the components, as they use a CSS table layout and this clashes
 with our styles for the validation.
 * /
public class LinkListDropAreaWithSuggestions extends LinkListDropAreaWithSuggestionsBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.cms.editor.sdk.util.SiteUtil;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.TextfieldSkin;
    import com.coremedia.ui.util.createComponentSelector;
    import ext.XTemplate;
    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListDropAreaWithSuggestions";

    public var suggestionsTemplate:XTemplate;

    [Bindable]
    public var iconCls:String;

    [Bindable]
    public var text:String;

    public*/function LinkListDropAreaWithSuggestions$(config/*:LinkListDropAreaWithSuggestions = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase,{});
    var defaults_$1/*:LinkListDropAreaWithSuggestions*/ =AS3.cast(LinkListDropAreaWithSuggestions,{});
    var ui_DataField_48_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_48_9_$1.name = "id";
    ui_DataField_48_9_$1.encode = false;
    var ui_DataField_50_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_50_9_$1.name = "name";
    ui_DataField_50_9_$1.encode = false;
    var ui_DataField_52_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_52_9_$1.name = "typeCls";
    ui_DataField_52_9_$1.mapping = "type";
    ui_DataField_52_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    ui_DataField_52_9_$1.encode = false;
    var ui_DataField_56_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_56_9_$1.name = "typeName";
    ui_DataField_56_9_$1.mapping = "type.name";
    ui_DataField_56_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    ui_DataField_56_9_$1.encode = false;
    var ui_DataField_60_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_60_9_$1.name = "lifecycleStatus";
    ui_DataField_60_9_$1.mapping = "";
    ui_DataField_60_9_$1.convert =AS3.bind( this,"getDetailedLifecycleStatus");
    ui_DataField_60_9_$1.encode = false;
    var ui_DataField_64_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_64_9_$1.name = "lifecycleStatusCls";
    ui_DataField_64_9_$1.mapping = "";
    ui_DataField_64_9_$1["convert"] =AS3.bind( this,"getDetailedLifecycleStatusCls");
    ui_DataField_64_9_$1.encode = false;
    var ui_DataField_68_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_68_9_$1.name = "siteName";
    ui_DataField_68_9_$1.mapping = "";
    ui_DataField_68_9_$1.ifUnreadable = "";
    ui_DataField_68_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteNameFor;
    var ui_DataField_72_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_72_9_$1.name = "siteLocale";
    ui_DataField_72_9_$1.mapping = "";
    ui_DataField_72_9_$1.ifUnreadable = "";
    ui_DataField_72_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteLocaleNameFor;
    AS3.setBindable(defaults_$1,"defaultFields" , [ui_DataField_48_9_$1, ui_DataField_50_9_$1, ui_DataField_52_9_$1, ui_DataField_56_9_$1, ui_DataField_60_9_$1, ui_DataField_64_9_$1, ui_DataField_68_9_$1, ui_DataField_72_9_$1]);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.maskOnDisable = false;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME.getSkin());
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.INLINE_SEARCH_COMBOBOX_ID).build());
    var container_85_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_85_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.SUGGESTING_DROP_AREA_CONTAINER_ID);
    var layout_HBox_87_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_85_5_$1,"layout" , layout_HBox_87_9_$1);
    var button_90_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_90_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_90_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'add')));
    AS3.setBindable(button_90_9_$1,"handler" ,AS3.bind( this,"focusSuggestionField"));
    button_90_9_$1.tabIndex = -1;
    AS3.setBindable(button_90_9_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions__button_focus_tooltip_text'));
    button_90_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions__button_focus_tooltip_text'));
    var ui_BEMMixin_97_13_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_97_13_$1,"bemElement" , com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.BUTTON_ELEMENT);

    delete ui_BEMMixin_97_13_$1['xtype'];
    delete ui_BEMMixin_97_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_90_9_$1, ui_BEMMixin_97_13_$1);
    var ui_SimpleSuggestionsComboBox_100_9_$1/*:com.coremedia.ui.components.SimpleSuggestionsComboBox*/ =AS3.cast(com.coremedia.ui.components.SimpleSuggestionsComboBox,{});
    ui_SimpleSuggestionsComboBox_100_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.INLINE_SEARCH_COMBOBOX_ID);
    AS3.setBindable(ui_SimpleSuggestionsComboBox_100_9_$1,"doQueryFunction" ,AS3.bind( this,"triggerSuggestionSearch"));
    ui_SimpleSuggestionsComboBox_100_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions_text'));
    ui_SimpleSuggestionsComboBox_100_9_$1.flex = 1.0;
    ui_SimpleSuggestionsComboBox_100_9_$1.queryMode = "remote";
    ui_SimpleSuggestionsComboBox_100_9_$1["lastQuery"] = "";
    ui_SimpleSuggestionsComboBox_100_9_$1.minChars = 3.0;
    ui_SimpleSuggestionsComboBox_100_9_$1.queryDelay = 500.0;
    ui_SimpleSuggestionsComboBox_100_9_$1.queryParam = "query";
    AS3.setBindable(ui_SimpleSuggestionsComboBox_100_9_$1,"hideTrigger" , true);
    ui_SimpleSuggestionsComboBox_100_9_$1.enableKeyEvents = true;
    ui_SimpleSuggestionsComboBox_100_9_$1.triggerAction = "query";
    ui_SimpleSuggestionsComboBox_100_9_$1.selectOnTab = false;
    AS3.setBindable(ui_SimpleSuggestionsComboBox_100_9_$1,"displayField" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"text") || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions_text')));
    AS3.setBindable(ui_SimpleSuggestionsComboBox_100_9_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"text") || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions_text')));
    ui_SimpleSuggestionsComboBox_100_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TextfieldSkin.EMBEDDED.getSkin());
    var boundList_117_13_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    boundList_117_13_$1.itemTpl = config.suggestionsTemplate;
    boundList_117_13_$1.deferEmptyText = false;
    AS3.setBindable(boundList_117_13_$1,"maxHeight" , AS3.getBindable(config,"suggestionsComboBoxPickerMaxHeight") || com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.DEFAULT_SUGGESTIONS_COMBOBOX_PICKER_MAX_HEIGHT);
    AS3.setBindable(boundList_117_13_$1,"scrollable" , "vertical");
    boundList_117_13_$1.itemSelector = "div";
    ui_SimpleSuggestionsComboBox_100_9_$1.listConfig = boundList_117_13_$1;
    var local_LinkListBindListPlugin_125_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin,{});
    AS3.setBindable(local_LinkListBindListPlugin_125_13_$1,"bindTo" , this.getSuggestedLinksValueExpressions());
    AS3.setBindable(local_LinkListBindListPlugin_125_13_$1,"fields" , com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.makeFields(config));
    var ui_StopEventPropagationPlugin_127_13_$1/*:com.coremedia.ui.plugins.StopEventPropagationPlugin*/ =AS3.cast(com.coremedia.ui.plugins.StopEventPropagationPlugin,{});
    ui_SimpleSuggestionsComboBox_100_9_$1.plugins = [local_LinkListBindListPlugin_125_13_$1, ui_StopEventPropagationPlugin_127_13_$1];
    ui_SimpleSuggestionsComboBox_100_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var button_130_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_130_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_130_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.INLINE_SEARCH_LIBRARY_BUTTON_ID);
    AS3.setBindable(button_130_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyField_button_icon')));
    button_130_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyField_button_aria_label'));
    AS3.setBindable(button_130_9_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyFieldWithSuggestions__button_tooltip_text'));
    var ui_BEMMixin_136_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_136_13_$1,"bemElement" , com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.BUTTON_ELEMENT);

    delete ui_BEMMixin_136_13_$1['xtype'];
    delete ui_BEMMixin_136_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_130_9_$1, ui_BEMMixin_136_13_$1);
    container_85_5_$1.items = [button_90_9_$1, ui_SimpleSuggestionsComboBox_100_9_$1, button_130_9_$1];
    var ui_BEMPlugin_141_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_141_9_$1,"block" , com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BLOCK);
    container_85_5_$1.plugins = [ui_BEMPlugin_141_9_$1];
    config_$1.items = [container_85_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SZZY(config_$1);
  }/*

    /**
     A list of fields to be present for the suggestions.
     * /
    [Bindable]
    public var defaultFields:Array;


    /**
     A list of fields to be added to the default fields for suggestions.
     * /
    [Bindable]
    public var extraFields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListDropAreaWithSuggestions",
      suggestionsTemplate: null,
      constructor: LinkListDropAreaWithSuggestions$,
      super$SZZY: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        iconCls: null,
        text: null,
        defaultFields: null,
        extraFields: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase",
        "com.coremedia.ui.components.SimpleSuggestionsComboBox",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.StopEventPropagationPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.TextfieldSkin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.createComponentSelector",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.SiteUtil"
      ]
    };
});
