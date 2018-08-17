Ext.define("com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcher", function(ReadOnlyDocumentFormToolbarDispatcher) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.panel.Panel;
import ext.layout.container.CardLayout;
public class ReadOnlyDocumentFormToolbarDispatcher extends ReadOnlyDocumentFormToolbarDispatcherBase{

    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.readOnlyDocumentFormToolbarDispatcher";

    public*/function ReadOnlyDocumentFormToolbarDispatcher$(config/*:ReadOnlyDocumentFormToolbarDispatcher = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase,{});
    var defaults_$1/*:ReadOnlyDocumentFormToolbarDispatcher*/ =AS3.cast(ReadOnlyDocumentFormToolbarDispatcher,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var panel_24_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_24_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase.MASTER_COMPARISON_PANEL_ID);
    var editor_MasterComparisonDocumentFormToolbar_26_9_$1/*: com.coremedia.cms.editor.sdk.premular.MasterComparisonDocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.MasterComparisonDocumentFormToolbar,{});
    AS3.setBindable(editor_MasterComparisonDocumentFormToolbar_26_9_$1,"bindTo" , AS3.getBindable(config,"premular").getReadOnlyContentValueExpression());
    editor_MasterComparisonDocumentFormToolbar_26_9_$1["tabGuard"] = false;
    editor_MasterComparisonDocumentFormToolbar_26_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_MasterComparisonDocumentFormToolbar_26_9_$1,"premular" , AS3.getBindable(config,"premular"));
    panel_24_5_$1.tbar = editor_MasterComparisonDocumentFormToolbar_26_9_$1;
    var panel_34_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_34_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase.VERSION_COMPARISON_PANEL_ID);
    var editor_VersionComparisonDocumentFormToolbar_36_9_$1/*: com.coremedia.cms.editor.sdk.premular.VersionComparisonDocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.VersionComparisonDocumentFormToolbar,{});
    AS3.setBindable(editor_VersionComparisonDocumentFormToolbar_36_9_$1,"bindTo" , AS3.getBindable(config,"premular").getReadOnlyContentValueExpression());
    editor_VersionComparisonDocumentFormToolbar_36_9_$1["tabGuard"] = false;
    editor_VersionComparisonDocumentFormToolbar_36_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_VersionComparisonDocumentFormToolbar_36_9_$1,"premular" , AS3.getBindable(config,"premular"));
    panel_34_5_$1.tbar = editor_VersionComparisonDocumentFormToolbar_36_9_$1;
    config_$1.items = [panel_24_5_$1, panel_34_5_$1];
    var layout_Card_45_5_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_45_5_$1.deferredRender = true;
    AS3.setBindable(config_$1,"layout" , layout_Card_45_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$az6V(config_$1);
  }/*

    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.Premular;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.readOnlyDocumentFormToolbarDispatcher",
      constructor: ReadOnlyDocumentFormToolbarDispatcher$,
      super$az6V: function() {
        com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase.prototype.constructor.apply(this, arguments);
      },
      config: {premular: null},
      requires: [
        "Ext.layout.container.Card",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.premular.ReadOnlyDocumentFormToolbarDispatcherBase",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.MasterComparisonDocumentFormToolbar",
        "com.coremedia.cms.editor.sdk.premular.VersionComparisonDocumentFormToolbar"
      ]
    };
});
