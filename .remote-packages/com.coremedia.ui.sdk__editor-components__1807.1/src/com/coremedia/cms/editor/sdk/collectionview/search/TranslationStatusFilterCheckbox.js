Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterCheckbox", function(TranslationStatusFilterCheckbox) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import ext.form.field.Checkbox;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.AddQuickTipPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusFilterCheckbox extends Checkbox{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.translationStatusFilterCheckbox";

    public*/function TranslationStatusFilterCheckbox$(config/*:TranslationStatusFilterCheckbox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    var defaults_$1/*:TranslationStatusFilterCheckbox*/ =AS3.cast(TranslationStatusFilterCheckbox,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"translationState"));
    AS3.setBindable(config_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_status_' + AS3.getBindable(config,"translationState") + '_text')));
    config_$1.hideLabel = true;
    var ui_BindPropertyPlugin_29_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_29_5_$1.bidirectional = true;
    ui_BindPropertyPlugin_29_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var ui_AddQuickTipPlugin_34_5_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_34_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_status_' + AS3.getBindable(config,"translationState") + '_tooltip')));
    config_$1.plugins = [ui_BindPropertyPlugin_29_5_$1, ui_AddQuickTipPlugin_34_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_gwf(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var translationState:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Checkbox",
      alias: "widget.com.coremedia.cms.editor.sdk.config.translationStatusFilterCheckbox",
      constructor: TranslationStatusFilterCheckbox$,
      super$_gwf: function() {
        Ext.form.field.Checkbox.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        translationState: null
      },
      requires: [
        "Ext.form.field.Checkbox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
