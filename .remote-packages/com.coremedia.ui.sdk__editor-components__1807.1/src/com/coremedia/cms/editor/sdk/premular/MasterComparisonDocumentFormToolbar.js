Ext.define("com.coremedia.cms.editor.sdk.premular.MasterComparisonDocumentFormToolbar", function(MasterComparisonDocumentFormToolbar) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar;
import net.jangaroo.ext.Exml;
import ext.toolbar.Spacer;
import com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector;
import ext.toolbar.Fill;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.plugins.BindPlugin;
import com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton;
public class MasterComparisonDocumentFormToolbar extends DocumentFormToolbar{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.masterComparisonDocumentFormToolbar";

    public*/function MasterComparisonDocumentFormToolbar$(config/*:MasterComparisonDocumentFormToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar,{});
    var defaults_$1/*:MasterComparisonDocumentFormToolbar*/ =AS3.cast(MasterComparisonDocumentFormToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var tbSpacer_21_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_21_5_$1,"width" , 6);
    var editor_ReadOnlyVersionSelector_22_5_$1/*:com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector,{});
    editor_ReadOnlyVersionSelector_22_5_$1.itemId = "versionInfo";
    editor_ReadOnlyVersionSelector_22_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_ReadOnlyVersionSelector_22_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_ReadOnlyVersionSelector_22_5_$1,"premular" , AS3.getBindable(config,"premular"));
    var tbFill_26_5_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var tbSpacer_27_5_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_27_5_$1,"width" , 6);
    var ui_ExtendedDisplayField_28_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    AS3.setBindable(ui_ExtendedDisplayField_28_5_$1,"width" , 125);
    AS3.setBindable(ui_ExtendedDisplayField_28_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    ui_ExtendedDisplayField_28_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.WORKAREA.getSkin());
    var ui_BindPlugin_32_9_$1/*:com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_32_9_$1.bindTo = this.getLocaleValueExpression();
    ui_BindPlugin_32_9_$1.boundValueChanged =AS3.bind( this,"changeLocale");
    ui_ExtendedDisplayField_28_5_$1.plugins = [ui_BindPlugin_32_9_$1];
    var tbSpacer_36_5_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_36_5_$1,"width" , 6);
    var editor_OpenDifferencesWindowButton_37_5_$1/*:com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton,{});
    AS3.setBindable(editor_OpenDifferencesWindowButton_37_5_$1,"diffManager" , AS3.getBindable(config,"premular").getDiffManager());
    editor_OpenDifferencesWindowButton_37_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_OpenDifferencesWindowButton_37_5_$1,"premular" , AS3.getBindable(config,"premular"));
    config_$1.items = [tbSpacer_21_5_$1, editor_ReadOnlyVersionSelector_22_5_$1, tbFill_26_5_$1, tbSpacer_27_5_$1, ui_ExtendedDisplayField_28_5_$1, tbSpacer_36_5_$1, editor_OpenDifferencesWindowButton_37_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eqAF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
      alias: "widget.com.coremedia.cms.editor.sdk.config.masterComparisonDocumentFormToolbar",
      constructor: MasterComparisonDocumentFormToolbar$,
      super$eqAF: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.toolbar.Fill",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector",
        "com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton"
      ]
    };
});
