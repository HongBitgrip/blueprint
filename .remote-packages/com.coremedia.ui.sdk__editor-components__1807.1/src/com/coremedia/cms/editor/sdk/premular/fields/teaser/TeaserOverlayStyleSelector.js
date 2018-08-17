Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelector", function(TeaserOverlayStyleSelector) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser{
import com.coremedia.cms.editor.sdk.premular.fields.teaser.*;
import ext.data.field.DataField;
import net.jangaroo.ext.Exml;
import ext.view.BoundListView;
import com.coremedia.ui.plugins.AddQuickTipPlugin;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
    [ResourceBundle('com.coremedia.cms.editor.TeaserOverlay')]
public class TeaserOverlayStyleSelector extends TeaserOverlayStyleSelectorBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.TeaserOverlayStyleSelector";

    [Bindable]
    internal var teaserOverlayViewModel:TeaserOverlayViewModel;

    [Bindable]
    public var stylesVE:ValueExpression;

    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    public*/function TeaserOverlayStyleSelector$(config/*:TeaserOverlayStyleSelector = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase,{});
    var defaults_$1/*:TeaserOverlayStyleSelector*/ =AS3.cast(TeaserOverlayStyleSelector,{});
    var data_AutoField_54_7_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_54_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.VALUE_FIELD_NAME);
    data_AutoField_54_7_$1.mapping = "";
    var data_AutoField_56_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_56_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.TITLE_FIELD_NAME);
    data_AutoField_56_7_$1.mapping = "";
    data_AutoField_56_7_$1["convert"] = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.localizeTitle;
    var data_AutoField_59_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_59_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.DESCRIPTION_FIELD_NAME);
    data_AutoField_59_7_$1.mapping = "";
    data_AutoField_59_7_$1["convert"] = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.localizeDescription;
    var data_AutoField_62_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_62_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.HAS_PREVIEW_FIELD_NAME);
    data_AutoField_62_7_$1.mapping = "";
    data_AutoField_62_7_$1["convert"] = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.hasPreview;
    var data_AutoField_65_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_65_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.COLOR_FIELD_NAME);
    data_AutoField_65_7_$1.mapping = "";
    data_AutoField_65_7_$1["convert"] = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.resolveColor;
    var data_AutoField_68_7_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_68_7_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.BACKGROUND_COLOR_FIELD_NAME);
    data_AutoField_68_7_$1.mapping = "";
    data_AutoField_68_7_$1["convert"] = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.resolveBackgroundColor;
    AS3.setBindable(defaults_$1,"fields" , [data_AutoField_54_7_$1, data_AutoField_56_7_$1, data_AutoField_59_7_$1, data_AutoField_62_7_$1, data_AutoField_65_7_$1, data_AutoField_68_7_$1]);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.labelWidth = 30.0;
    config_$1.itemId = "styleSelector";
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_style_label')));
    config_$1.valueField =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.VALUE_FIELD_NAME);
    AS3.setBindable(config_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_style_no_selection')));
    AS3.setBindable(config_$1,"displayField" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.TITLE_FIELD_NAME));
    config_$1.tpl = com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.getTemplate();
    AS3.setBindable(config_$1,"minWidth" , 200.0);
    var boundList_74_5_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_74_5_$1,"minWidth" , 360.0);
    config_$1.listConfig = boundList_74_5_$1;
    var ui_AddQuickTipPlugin_77_5_$1/*:com.coremedia.ui.plugins.AddQuickTipPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddQuickTipPlugin,{});
    AS3.setBindable(ui_AddQuickTipPlugin_77_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_style_tooltip')));
    var ui_BindListPlugin_79_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_79_5_$1,"bindTo" , AS3.getBindable(config,"stylesVE"));
    AS3.setBindable(ui_BindListPlugin_79_5_$1,"fields" , AS3.getBindable(config,"fields"));
    var editor_BindDisablePlugin_81_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_81_5_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindDisablePlugin_81_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    config_$1.plugins = [ui_AddQuickTipPlugin_77_5_$1, ui_BindListPlugin_79_5_$1, editor_BindDisablePlugin_81_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$98qx(config_$1);
  }/*

    /**
     The data fields to be added to the store of the combo box.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var fields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.TeaserOverlayStyleSelector",
      constructor: TeaserOverlayStyleSelector$,
      super$98qx: function() {
        com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        teaserOverlayViewModel: null,
        stylesVE: null,
        bindTo: null,
        forceReadOnlyValueExpression: null,
        fields: null
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.view.BoundList",
        "com.coremedia.cms.editor.TeaserOverlay_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.plugins.AddQuickTipPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin"]
    };
});
