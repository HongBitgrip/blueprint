Ext.define("com.coremedia.cms.editor.sdk.components.ContentGridPanel", function(ContentGridPanel) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.ContextMenuPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ContentGridPanel extends ContentGridPanelBase{

    import com.coremedia.ui.data.BeanPropertyValueHolder;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.contentGridPanel";

    public static const SELECTED_ITEMS_VARIABLE_NAME:String = "selectedItems";

    public static const ALL_ITEMS_VARIABLE_NAME:String = "allItems";

    public static const ALL_OR_SELECTED_ITEMS_VARIABLE_NAME:String = "allOrSelectedItems";

    /**
     * TODO Ext6: Currently the dragdrop plugin only takes care of dragging.
     * Dropping is solved differently for different ContentGridPanels.
     * Cf. EditedContentPanelDropZone, UserChosenContentsGridDropZone.
     * Maybe we can unify it.
     * /
    public*/function ContentGridPanel$(config/*:ContentGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.ContentGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.ContentGridPanelBase,{});
    var defaults_$1/*:ContentGridPanel*/ =AS3.cast(ContentGridPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"viewStripeRows" , true);
    AS3.setBindable(config_$1,"hideDropArea" , true);
    AS3.setBindable(config_$1,"viewEnableDrop" , false);
    config_$1.hideValidation = true;
    var editor_MemoryLinkListWrapper_47_5_$1/*:com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
    AS3.setBindable(editor_MemoryLinkListWrapper_47_5_$1,"linksVE" , com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(new com.coremedia.ui.data.BeanPropertyValueHolder(this, ContentGridPanel.ALL_ITEMS_VARIABLE_NAME)));
    AS3.setBindable(config_$1,"linkListWrapper" , new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(editor_MemoryLinkListWrapper_47_5_$1));
    var ui_ValueExpression_51_5_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_51_5_$1,"context" , this);
    AS3.setBindable(ui_ValueExpression_51_5_$1,"expression" ,net.jangaroo.ext.Exml.asString( ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    AS3.setBindable(config_$1,"selectedValuesExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_51_5_$1));
    var ui_ContextMenuPlugin_55_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    AS3.setBindable(ui_ContextMenuPlugin_55_5_$1,"contextMenu" , AS3.getBindable(config,"contextMenu"));
    config_$1.plugins = [ui_ContextMenuPlugin_55_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$PH8Z(config_$1);
  }/*

    [Bindable]
    public var contextMenu:ext.menu.Menu;


    /**
     Determines whether the empty text is hidden.
     * /
    [Bindable]
    public var hideEmptyText:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.ContentGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.contentGridPanel",
      constructor: ContentGridPanel$,
      super$PH8Z: function() {
        com.coremedia.cms.editor.sdk.components.ContentGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contextMenu: null,
        hideEmptyText: false
      },
      statics: {
        SELECTED_ITEMS_VARIABLE_NAME: "selectedItems",
        ALL_ITEMS_VARIABLE_NAME: "allItems",
        ALL_OR_SELECTED_ITEMS_VARIABLE_NAME: "allOrSelectedItems"
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanelBase",
        "com.coremedia.ui.data.BeanPropertyValueHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper"]
    };
});
