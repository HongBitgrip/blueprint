Ext.define("com.coremedia.personalization.ui.editors.RuleListEditor", function(RuleListEditor) {/*package com.coremedia.personalization.ui.editors{
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.form.field.DisplayField;
import com.coremedia.personalization.ui.editors.RuleListPanel;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;

    [ResourceBundle('com.coremedia.personalization.ui.Personalization')]
/**
 A property editor for editing a rule list.
 * /
public class RuleListEditor extends Panel{

    import com.coremedia.cap.content.Content;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.personalization.ui.util.RuleXMLCoDec;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.data.dependencies.DependencyTracker;
    import com.coremedia.ui.data.impl.BlobImpl;
    import com.coremedia.ui.bem.LinkListBEMEntities;

    public static const xtype:String = "com.coremedia.personalization.ui.config.ruleListEditor";

    public static const RULE_LIST_PANEL_ITEM_ID:String = "ruleListPanel";

    private var ruleForContentVE:ValueExpression;

    private var propertiesVE:ValueExpression;

    private var modifierVE:ValueExpression;

    public*/function RuleListEditor$(config/*:RuleListEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var defaults_$1/*:RuleListEditor*/ =AS3.cast(RuleListEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_selectionRuleList_description'));
    config_$1.header = false;
    var layout_Anchor_133_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    layout_Anchor_133_5_$1.anchor = "100%";
    AS3.setBindable(config_$1,"layout" , layout_Anchor_133_5_$1);
    var ui_BEMPlugin_136_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_136_5_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_136_5_$1,"modifier" , this.getModifierVE$Vgo9(config));
    config_$1.plugins = [ui_BEMPlugin_136_5_$1];
    var panel_140_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_140_5_$1.itemId = "loadingInfo";
    var displayField_142_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_142_9_$1,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_loadingInfo'));
    panel_140_5_$1.items = [displayField_142_9_$1];
    var pui_RuleListPanel_146_5_$1/*:com.coremedia.personalization.ui.editors.RuleListPanel*/ =AS3.cast(com.coremedia.personalization.ui.editors.RuleListPanel,{});
    pui_RuleListPanel_146_5_$1.itemId =net.jangaroo.ext.Exml.asString( RuleListEditor.RULE_LIST_PANEL_ITEM_ID);
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"allowedContentType" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"allowedContentType")));
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"showThumbnails" , AS3.getBindable(config,"showThumbnails"));
    AS3.setBindable(pui_RuleListPanel_146_5_$1,"conditionItems" , AS3.getBindable(config,"conditionItems"));
    var ui_BEMMixin_154_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_154_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);

    delete ui_BEMMixin_154_9_$1['xtype'];
    delete ui_BEMMixin_154_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(pui_RuleListPanel_146_5_$1, ui_BEMMixin_154_9_$1);
    var ui_BindBlobPropertyPlugin_157_9_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_157_9_$1.bindTo = this.getPropertiesVE$Vgo9(config);
    AS3.setBindable(ui_BindBlobPropertyPlugin_157_9_$1,"transformer" , com.coremedia.personalization.ui.util.RuleXMLCoDec.rulesFromXML);
    AS3.setBindable(ui_BindBlobPropertyPlugin_157_9_$1,"reverseTransformer" , com.coremedia.personalization.ui.util.RuleXMLCoDec.xmlFromRules);
    pui_RuleListPanel_146_5_$1.plugins = [ui_BindBlobPropertyPlugin_157_9_$1];
    pui_RuleListPanel_146_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [panel_140_5_$1, pui_RuleListPanel_146_5_$1];
    var editor_LinkListDropArea_164_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea,{});
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"ddGroups" , ['ContentDD', 'ContentLinkDD']);
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_dropZone_icon')));
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_dropZone')));
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"appendOnDrop" , true);
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"handler" , function ()/*:void*/ { com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openRepository(); });
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"dock" , "bottom");
    editor_LinkListDropArea_164_5_$1.itemId = "ruleListDropBox";
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"hidden" , true);
    var ui_BEMMixin_173_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_173_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_173_9_$1['xtype'];
    delete ui_BEMMixin_173_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_LinkListDropArea_164_5_$1, ui_BEMMixin_173_9_$1);
    var editor_BindDisablePlugin_176_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    editor_BindDisablePlugin_176_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_BindDisablePlugin_176_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_LinkListDropArea_164_5_$1.plugins = [editor_BindDisablePlugin_176_9_$1];
    editor_LinkListDropArea_164_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_MemoryLinkListWrapper_180_9_$1/*:com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
    AS3.setBindable(editor_MemoryLinkListWrapper_180_9_$1,"linksVE" , this.getRuleForContentVE$Vgo9());
    AS3.setBindable(editor_MemoryLinkListWrapper_180_9_$1,"linkTypeName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"allowedContentType")));
    AS3.setBindable(editor_LinkListDropArea_164_5_$1,"linkListWrapper" , new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(editor_MemoryLinkListWrapper_180_9_$1));
    config_$1.dockedItems = [editor_LinkListDropArea_164_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Vgo9(config_$1);
  }/*

    /**
     * a property path expression leading to the bean that contains the rule list property
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;


    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    private*/ function getRuleForContentVE()/*:ValueExpression*/ {var this$=this;
      if (!this.ruleForContentVE$Vgo9) {
        this.ruleForContentVE$Vgo9 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);

        this.ruleForContentVE$Vgo9.addChangeListener(function ()/*:void*/ {
          var contentsToAdd/*:Array*/ =AS3.as( this$.ruleForContentVE$Vgo9.getValue(),  Array);
          if (contentsToAdd && contentsToAdd.length > 0) {
            var ruleListPanel/*:RuleListPanel*/ =AS3.as( this$.queryById(RuleListEditor.RULE_LIST_PANEL_ITEM_ID),  com.coremedia.personalization.ui.editors.RuleListPanel);
            contentsToAdd.forEach(function (content/*:Content*/)/*:void*/ {
              ruleListPanel.addRuleForContent(content);
            });
            this$.ruleForContentVE$Vgo9.setValue([]);
          }
        });
      }

      return this.ruleForContentVE$Vgo9;
    }/*

    private*/ function getPropertiesVE(config/*:RuleListEditor*/)/*:ValueExpression*/ {
      if (!this.propertiesVE$Vgo9) {
        this.propertiesVE$Vgo9 = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
      }
      return this.propertiesVE$Vgo9;
    }/*

    private*/ function getModifierVE(config/*:RuleListEditor*/)/*:ValueExpression*/ {var this$=this;
      if (!this.modifierVE$Vgo9) {
        this.modifierVE$Vgo9 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
          var ve/*:ValueExpression*/ = this$.getPropertiesVE$Vgo9(config);
          if (ve.getValue() === undefined) {
            return undefined;
          }
          var blob/*:BlobImpl*/ =AS3.as( ve.getValue(),  com.coremedia.ui.data.impl.BlobImpl);
          // check if the blob already exists
          if (!blob) {
            return [com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMPTY];
          }
          if (!blob.isLoaded()) {
            // BlobImpl does not trigger dependency tracking, but throws a "data" event when loading is finished
            com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(blob, "data");
            blob.loadData();
            // when blob is not loaded yet, hide the list, so no double borders are shown while loading
            return [com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMPTY];
          } else {
            var rulesString/*:String*/ = com.coremedia.personalization.ui.util.RuleXMLCoDec.rulesFromXML(AS3.as(blob.getData(),  String));
            // empty string means that there are no rules defined
            if (!rulesString) {
              return [com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_EMPTY];
            }
          }

          return [];
        });
      }
      return this.modifierVE$Vgo9;
    }/*

    /** the name of the property containing the rule list without the 'properties.' prefix
     * /
    [Bindable]
    public var propertyName:String;


    /** definitions of the condition components to be made available in the editor * /
    [Bindable]
    public var conditionItems:Array;


    /**
     Name of the content type any content object dropped into the editor must be an instance of. If this attribute
     is not set, any content object may be dropped into the editor.
     * /
    [Bindable]
    public var allowedContentType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      alias: "widget.com.coremedia.personalization.ui.config.ruleListEditor",
      ruleForContentVE$Vgo9: null,
      propertiesVE$Vgo9: null,
      modifierVE$Vgo9: null,
      constructor: RuleListEditor$,
      super$Vgo9: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getRuleForContentVE$Vgo9: getRuleForContentVE,
      getPropertiesVE$Vgo9: getPropertiesVE,
      getModifierVE$Vgo9: getModifierVE,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        showThumbnails: false,
        propertyName: null,
        conditionItems: null,
        allowedContentType: null
      },
      statics: {RULE_LIST_PANEL_ITEM_ID: "ruleListPanel"},
      requires: [
        "Ext.form.field.Display",
        "Ext.layout.container.Anchor",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropArea",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.RuleListPanel",
        "com.coremedia.personalization.ui.util.RuleXMLCoDec"
      ]
    };
});
