Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel", function(LinkListPropertyFieldGridPanel) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.MoveLinkAction;
import com.coremedia.ui.plugins.BEMMixin;
/**
 Grid component of link list editor
 * /
public class LinkListPropertyFieldGridPanel extends LinkListPropertyFieldGridPanelBase{

    import com.coremedia.ui.bem.LinkListBEMEntities;

    import ext.XTemplate;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.linkListPropertyFieldGridPanel";

    /**
     * Optional custom template to display link suggestions in the drop area
     * /
    [Bindable]
    public var linkSuggesterTemplate:XTemplate;

    /**
     * Additional data fields for the custom template to display link suggestions in the drop area
     * /
    [Bindable]
    public var linkSuggesterTemplateExtraFields:Array;

    public*/function LinkListPropertyFieldGridPanel$(config/*:LinkListPropertyFieldGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase,{});
    var defaults_$1/*:LinkListPropertyFieldGridPanel*/ =AS3.cast(LinkListPropertyFieldGridPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hideHeaders" , true);
    config_$1.forceFit = true;
    AS3.setBindable(config_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    AS3.setBindable(config_$1,"dropAreaHandler" ,AS3.bind( this,"processOpenCollectionViewHandler"));
    AS3.setBindable(config_$1,"readOnlyValueExpression" , this.getReadOnlyValueExpression(config));
    var editor_MoveLinkAction_41_5_$1/*:com.coremedia.cms.editor.sdk.actions.MoveLinkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveLinkAction,{});
    editor_MoveLinkAction_41_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveLinkAction.ACTION_ID_UP);
    AS3.setBindable(editor_MoveLinkAction_41_5_$1,"grid" , this);
    AS3.setBindable(editor_MoveLinkAction_41_5_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveLinkAction.ACTION_ID_UP));
    AS3.setBindable(editor_MoveLinkAction_41_5_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    var editor_MoveLinkAction_45_5_$1/*: com.coremedia.cms.editor.sdk.actions.MoveLinkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveLinkAction,{});
    editor_MoveLinkAction_45_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveLinkAction.ACTION_ID_DOWN);
    AS3.setBindable(editor_MoveLinkAction_45_5_$1,"grid" , this);
    AS3.setBindable(editor_MoveLinkAction_45_5_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveLinkAction.ACTION_ID_DOWN));
    AS3.setBindable(editor_MoveLinkAction_45_5_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.actions.MoveLinkAction(editor_MoveLinkAction_41_5_$1), new com.coremedia.cms.editor.sdk.actions.MoveLinkAction(editor_MoveLinkAction_45_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    var local_LinkListDropAreaWithSuggestions_51_5_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions,{});
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"linkListWrapper" , this.getLinkListWrapper(config));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"linkSuggester" , com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase.createLinkSuggester(config));
    local_LinkListDropAreaWithSuggestions_51_5_$1.suggestionsTemplate = AS3.getBindable(config,"linkSuggesterTemplate") || com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils.getContentSuggestionsTemplate();
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"extraFields" , AS3.getBindable(config,"linkSuggesterTemplateExtraFields"));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"ddGroups" , com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.DD_GROUPS);
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"handler" , AS3.getBindable(config,"dropAreaHandler") ||AS3.bind( this,"processOpenCollectionViewHandler"));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"readOnlyValueExpression" , AS3.getBindable(config,"readOnlyValueExpression") || this.getReadOnlyValueExpression(config));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dropAreaIconCls")));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"appendOnDrop" , false);
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"dropHandler" ,AS3.bind( this,"handleDropAreaDrop"));
    AS3.setBindable(local_LinkListDropAreaWithSuggestions_51_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"dropAreaText") || this.getDropAreaText(config)));
    var ui_BEMMixin_63_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_63_9_$1,"bemElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_TAIL);

    delete ui_BEMMixin_63_9_$1['xtype'];
    delete ui_BEMMixin_63_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(local_LinkListDropAreaWithSuggestions_51_5_$1, ui_BEMMixin_63_9_$1);
    config_$1.dropArea = local_LinkListDropAreaWithSuggestions_51_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zmh4(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.linkListPropertyFieldGridPanel",
      constructor: LinkListPropertyFieldGridPanel$,
      super$zmh4: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        linkSuggesterTemplate: null,
        linkSuggesterTemplateExtraFields: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanelBase",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.plugins.BEMMixin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.MoveLinkAction",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaUtils",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestions",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel"
      ]
    };
});
