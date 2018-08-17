Ext.define("com.coremedia.cms.editor.sdk.premular.VersionComparisonDocumentFormToolbar", function(VersionComparisonDocumentFormToolbar) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Spacer;
import ext.toolbar.Fill;
import com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton;
public class VersionComparisonDocumentFormToolbar extends DocumentFormToolbar{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.versionComparisonDocumentFormToolbar";

    public*/function VersionComparisonDocumentFormToolbar$(config/*:VersionComparisonDocumentFormToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar,{});
    var defaults_$1/*:VersionComparisonDocumentFormToolbar*/ =AS3.cast(VersionComparisonDocumentFormToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var tbSpacer_19_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_19_5_$1,"width" , 6);
    var editor_ReadOnlyVersionSelector_20_5_$1/*: com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector,{});
    editor_ReadOnlyVersionSelector_20_5_$1.itemId = "versionInfo";
    editor_ReadOnlyVersionSelector_20_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_ReadOnlyVersionSelector_20_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_ReadOnlyVersionSelector_20_5_$1,"premular" , AS3.getBindable(config,"premular"));
    var tbFill_24_5_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var editor_OpenDifferencesWindowButton_25_5_$1/*:com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton,{});
    AS3.setBindable(editor_OpenDifferencesWindowButton_25_5_$1,"diffManager" , AS3.getBindable(config,"premular").getDiffManager());
    editor_OpenDifferencesWindowButton_25_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(editor_OpenDifferencesWindowButton_25_5_$1,"premular" , AS3.getBindable(config,"premular"));
    config_$1.items = [tbSpacer_19_5_$1, editor_ReadOnlyVersionSelector_20_5_$1, tbFill_24_5_$1, editor_OpenDifferencesWindowButton_25_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mUfT(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
      alias: "widget.com.coremedia.cms.editor.sdk.config.versionComparisonDocumentFormToolbar",
      constructor: VersionComparisonDocumentFormToolbar$,
      super$mUfT: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.toolbar.Fill",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelector",
        "com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButton"
      ]
    };
});
