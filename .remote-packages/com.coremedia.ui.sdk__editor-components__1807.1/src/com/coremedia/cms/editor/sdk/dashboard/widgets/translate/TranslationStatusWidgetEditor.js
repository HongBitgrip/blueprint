Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditor", function(TranslationStatusWidgetEditor) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.LocalComboBox;
public class TranslationStatusWidgetEditor extends TranslationStatusWidgetEditorBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusWidgetEditor";

    public*/function TranslationStatusWidgetEditor$(config/*:TranslationStatusWidgetEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase,{});
    var defaults_$1/*:TranslationStatusWidgetEditor*/ =AS3.cast(TranslationStatusWidgetEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"properties" , "targetSiteId,title");
    var editor_TranslationStatusSiteSelector_18_7_$1/*:com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector,{});
    var ui_ValueExpression_20_11_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_20_11_$1,"expression" , "targetSiteId");
    AS3.setBindable(ui_ValueExpression_20_11_$1,"context" , this.getModel());
    AS3.setBindable(editor_TranslationStatusSiteSelector_18_7_$1,"selectedSiteIdValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_20_11_$1));
    var ui_VerticalSpacingPlugin_24_11_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    editor_TranslationStatusSiteSelector_18_7_$1.plugins = [ui_VerticalSpacingPlugin_24_11_$1];
    var ui_LocalComboBox_27_11_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_27_11_$1.anchor = "100%";
    ui_LocalComboBox_27_11_$1.labelAlign = "left";
    ui_LocalComboBox_27_11_$1.labelSeparator = ":";
    editor_TranslationStatusSiteSelector_18_7_$1["defaultType"] = ui_LocalComboBox_27_11_$1['xtype'];
    delete ui_LocalComboBox_27_11_$1['xtype'];
    delete ui_LocalComboBox_27_11_$1['xclass'];
    editor_TranslationStatusSiteSelector_18_7_$1.defaults = ui_LocalComboBox_27_11_$1;
    config_$1.items = [editor_TranslationStatusSiteSelector_18_7_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$12FX(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusWidgetEditor",
      constructor: TranslationStatusWidgetEditor$,
      super$12FX: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditorBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelector"]
    };
});
