Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanel", function(TargetSitesGridPanel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import ext.grid.column.Column;
import ext.view.TableView;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class TargetSitesGridPanel extends TargetSitesGridPanelBase{

    import com.coremedia.ui.skins.TableViewSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.targetSitesGridPanel";

    public*/function TargetSitesGridPanel$(config/*:TargetSitesGridPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase,{});
    var defaults_$1/*:TargetSitesGridPanel*/ =AS3.cast(TargetSitesGridPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.selModel = this.getCheckboxSelectionModel();
    config_$1.forceFit = true;
    config_$1.sortableColumns = false;
    var ui_BindListPlugin_25_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_25_5_$1,"bindTo" , AS3.getBindable(config,"sitesValueExpression"));
    AS3.setBindable(ui_BindListPlugin_25_5_$1,"idProperty" , "id");
    var ui_DataField_28_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_28_9_$1.name = "localeDisplayName";
    ui_DataField_28_9_$1.mapping = "locale.displayName";
    ui_DataField_28_9_$1.encode = false;
    var ui_DataField_31_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_31_9_$1.name = "id";
    AS3.setBindable(ui_BindListPlugin_25_5_$1,"fields" , [ui_DataField_28_9_$1, ui_DataField_31_9_$1]);
    var ui_BindSelectionPlugin_34_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_34_5_$1,"selectedValues" , AS3.getBindable(config,"selectedSitesValueExpression"));
    config_$1.plugins = [ui_BindListPlugin_25_5_$1, ui_BindSelectionPlugin_34_5_$1];
    var gridColumn_37_5_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_37_5_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_selectAllSites'));
    gridColumn_37_5_$1.stateId = "locale";
    gridColumn_37_5_$1.dataIndex = "localeDisplayName";
    gridColumn_37_5_$1.renderer =AS3.bind( this,"tooltipRenderer");
    gridColumn_37_5_$1.menuDisabled = true;
    config_$1.columns = [gridColumn_37_5_$1];
    var gridView_45_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_45_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    gridView_45_5_$1.stripeRows = true;
    config_$1["viewConfig"] = gridView_45_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Vxxp(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.targetSitesGridPanel",
      constructor: TargetSitesGridPanel$,
      super$Vxxp: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "Ext.view.Table",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ]
    };
});
