Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList", function(WidgetContentList) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets{
import com.coremedia.cms.editor.sdk.dashboard.widgets.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
public class WidgetContentList extends WidgetContentListBase{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.data.BeanState;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    import ext.LoadMask;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.widgetContentList";
    private var selectedContentsValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:WidgetContentList*/)/*:void*/ {
      this.selectedContentsValueExpression$SGMW = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }/*

    public*/function WidgetContentList$(config/*:WidgetContentList = null*/){if(arguments.length<=0)config=null;this.__initialize__$SGMW(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase,{});
    var defaults_$1/*:WidgetContentList*/ =AS3.cast(WidgetContentList,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemSelector =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase.LIST_ELEMENT_ENTRY.getCSSSelector());
    config_$1.singleSelect = true;
    config_$1.multiSelect = false;
    config_$1.deferEmptyText = true;
    config_$1.loadingText =net.jangaroo.ext.Exml.asString( Ext.LoadMask['prototype']['msg']);
    config_$1.tpl = com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase.TEMPLATE;
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase.EMPTY_TEMPLATE.apply({})));
    var ui_BindListPlugin_44_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_44_5_$1,"bindTo" , AS3.getBindable(config,"contentList"));
    var ui_DataField_46_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_46_9_$1.name = "typeClass";
    ui_DataField_46_9_$1.ifUnreadable = "ignored";
    ui_DataField_46_9_$1.ifError = "";
    ui_DataField_46_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    ui_DataField_46_9_$1.mapping = 'type';
    var ui_DataField_51_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_51_9_$1.name = "name";
    ui_DataField_51_9_$1.ifUnreadable = 'ignored';
    ui_DataField_51_9_$1.ifError = "error accessing data";
    ui_DataField_51_9_$1.mapping = 'name';
    var ui_DataField_55_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_55_9_$1.name = "id";
    ui_DataField_55_9_$1.mapping = 'uriPath';
    var ui_DataField_57_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_57_9_$1.name = "readable";
    ui_DataField_57_9_$1.mapping = com.coremedia.ui.data.BeanState.PROPERTY_NAME + '.readable';
    var ui_DataField_59_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_59_9_$1.name = "statusClass";
    ui_DataField_59_9_$1.ifUnreadable = "";
    ui_DataField_59_9_$1.ifError = "";
    ui_DataField_59_9_$1.mapping = "";
    ui_DataField_59_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentStatus;
    AS3.setBindable(ui_BindListPlugin_44_5_$1,"fields" , [ui_DataField_46_9_$1, ui_DataField_51_9_$1, ui_DataField_55_9_$1, ui_DataField_57_9_$1, ui_DataField_59_9_$1]);
    var ui_BindSelectionPlugin_66_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_66_5_$1,"selectedValues" , this.selectedContentsValueExpression$SGMW);
    var ui_ContextMenuPlugin_67_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_WidgetContextMenu_69_9_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContextMenu,{});
    AS3.setBindable(editor_WidgetContextMenu_69_9_$1,"selectedContentsValueExpression" , this.selectedContentsValueExpression$SGMW);
    AS3.setBindable(ui_ContextMenuPlugin_67_5_$1,"contextMenu" , editor_WidgetContextMenu_69_9_$1);
    config_$1.plugins = [ui_BindListPlugin_44_5_$1, ui_BindSelectionPlugin_66_5_$1, ui_ContextMenuPlugin_67_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SGMW(config_$1);
  }/*

    /**
     * A value expression evaluating to an Array of Content that is to be shown.
     * /
    [Bindable]
    public var contentList:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.widgetContentList",
      selectedContentsValueExpression$SGMW: null,
      __initialize__$SGMW: __initialize__,
      constructor: WidgetContentList$,
      super$SGMW: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase.prototype.constructor.apply(this, arguments);
      },
      config: {contentList: null},
      requires: [
        "Ext.LoadMask",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContextMenu",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
