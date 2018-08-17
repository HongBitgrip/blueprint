Ext.define("com.coremedia.cms.studio.imageeditor.VariantTab", function(VariantTab) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ExtendedTab;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.cms.studio.imageeditor.history.UndoRedoButton;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.cms.studio.imageeditor.actions.EnlargeAction;
public class VariantTab extends VariantTabBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.variantTab";
    private var BUNDLE:Object;

    // called by generated constructor code
    private*/ function __initialize__(config/*:VariantTab*/)/*:void*/ {
      this.BUNDLE$BBnJ = this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content;
    }/*

    public*/function VariantTab$(config/*:VariantTab = null*/){if(arguments.length<=0)config=null;this.__initialize__$BBnJ(config);
    var config_$1/*: com.coremedia.cms.studio.imageeditor.VariantTabBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.VariantTabBase,{});
    var defaults_$1/*:VariantTab*/ =AS3.cast(VariantTab,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.BUNDLE$BBnJ['IEC_variants_' + com.coremedia.cms.studio.imageeditor.VariantKeyUtil.itemIdToVariantKey(AS3.getBindable(config,"itemId","DUMMY"))] || com.coremedia.cms.studio.imageeditor.VariantKeyUtil.itemIdToVariantKey(AS3.getBindable(config,"itemId","DUMMY")));
    var ui_ExtendedTab_59_5_$1/*:com.coremedia.ui.components.ExtendedTab*/ =AS3.cast(com.coremedia.ui.components.ExtendedTab,{});
    var editor_ShowIssuesPlugin_61_9_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_61_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_61_9_$1,"ifUndefined" , "");
    AS3.setBindable(editor_ShowIssuesPlugin_61_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName") + (config.variant ? ('.' + config.variant.key ) : '')));
    AS3.setBindable(editor_ShowIssuesPlugin_61_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    ui_ExtendedTab_59_5_$1.plugins = [editor_ShowIssuesPlugin_61_9_$1];
    config_$1.tabConfig = ui_ExtendedTab_59_5_$1;
    var editor_PropertyFieldPlugin_70_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_70_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName") + (config.variant  ? ('.' + config.variant.key ) : '')));
    config_$1.plugins = [editor_PropertyFieldPlugin_70_5_$1];
    var toolbar_74_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_74_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.LIGHT.getSkin());
    var ie_UndoRedoButton_76_9_$1/*:com.coremedia.cms.studio.imageeditor.history.UndoRedoButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.history.UndoRedoButton,{});
    ie_UndoRedoButton_76_9_$1.itemId = "undo";
    ie_UndoRedoButton_76_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ie_UndoRedoButton_76_9_$1,"tooltip" , this.BUNDLE$BBnJ.IEC_action_undo_toolTip);
    ie_UndoRedoButton_76_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_undo_toolTip);
    AS3.setBindable(ie_UndoRedoButton_76_9_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_UndoRedoButton_76_9_$1,"isRedo" , false);
    AS3.setBindable(ie_UndoRedoButton_76_9_$1,"disableValueExpression" , config.disableValueExpression);
    var ie_UndoRedoButton_83_9_$1/*: com.coremedia.cms.studio.imageeditor.history.UndoRedoButton*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.history.UndoRedoButton,{});
    ie_UndoRedoButton_83_9_$1.itemId = "redo";
    ie_UndoRedoButton_83_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    AS3.setBindable(ie_UndoRedoButton_83_9_$1,"tooltip" , this.BUNDLE$BBnJ.IEC_action_redo_toolTip);
    ie_UndoRedoButton_83_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_redo_toolTip);
    AS3.setBindable(ie_UndoRedoButton_83_9_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_UndoRedoButton_83_9_$1,"isRedo" , true);
    AS3.setBindable(ie_UndoRedoButton_83_9_$1,"disableValueExpression" , config.disableValueExpression);
    var ui_IconButton_91_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_91_9_$1.itemId = "resetCrop";
    ui_IconButton_91_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_resetvariant_toolTip);
    var ui_DependencyTrackedAction_93_13_$1/*:com.coremedia.ui.actions.DependencyTrackedAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,{});
    AS3.setBindable(ui_DependencyTrackedAction_93_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_resetvariant_iconCls));
    ui_DependencyTrackedAction_93_13_$1["tooltip"] = this.BUNDLE$BBnJ.IEC_action_resetvariant_toolTip;
    AS3.setBindable(ui_DependencyTrackedAction_93_13_$1,"statusExpression" , AS3.getBindable(config,"undoHistory").createResetStatusValueExpression(
                                            AS3.getBindable(config,"readOnlyValueExpression"), AS3.getBindable(config,"variantKey"), null));
    AS3.setBindable(ui_DependencyTrackedAction_93_13_$1,"handler" , AS3.getBindable(config,"undoHistory").createPropertyResetCommand(
                                                      this.getUndoText(AS3.getBindable(config,"variantKey")), AS3.getBindable(config,"variantKey"), null));
    ui_IconButton_91_9_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedAction(ui_DependencyTrackedAction_93_13_$1);
    var ui_IconButton_101_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_101_9_$1.itemId = "enlarge";
    ui_IconButton_101_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_enlarge_crop_off_toolTip);
    AS3.setBindable(ui_IconButton_101_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_enlarge_crop_iconCls));
    ui_IconButton_101_9_$1.enableToggle = true;
    var ie_EnlargeAction_106_13_$1/*:com.coremedia.cms.studio.imageeditor.actions.EnlargeAction*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.actions.EnlargeAction,{});
    ie_EnlargeAction_106_13_$1["tooltip"] = this.BUNDLE$BBnJ.IEC_action_enlarge_crop_off_toolTip;
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"tooltipPressed" ,net.jangaroo.ext.Exml.asString( this.BUNDLE$BBnJ.IEC_action_enlarge_crop_on_toolTip));
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"pressedValueExpression" , config.enlargeValueExpression);
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"variant" , config.variant);
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"statusExpression" , this.createEnlargeStatusExpression(config));
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"imageDimensionsValueExpression" , config.imageDimensionsValueExpression);
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"variantBoxedImageDimensionsValueExpression" , config.boxedImageDimensionsValueExpression);
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"imageEditorViewModel" , config.imageEditorViewModel);
    AS3.setBindable(ie_EnlargeAction_106_13_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    ui_IconButton_101_9_$1.baseAction = new com.coremedia.cms.studio.imageeditor.actions.EnlargeAction(ie_EnlargeAction_106_13_$1);
    toolbar_74_5_$1.items = [ie_UndoRedoButton_76_9_$1, ie_UndoRedoButton_83_9_$1, ui_IconButton_91_9_$1, ui_IconButton_101_9_$1];
    config_$1.tbar = toolbar_74_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BBnJ(config_$1);
  }/*

    [Bindable]
    public var readOnlyValueExpression:ValueExpression;

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var bindTo:ValueExpression;

    public var disableValueExpression:ValueExpression;

    public var enlargeValueExpression:ValueExpression;

    public var imageDimensionsValueExpression:ValueExpression;

    public var boxedImageDimensionsValueExpression:ValueExpression;

    public var imageEditorViewModel:Bean;

    public var variant:ImageVariant;

    [Bindable]
    public var propertyName:String;

    [Bindable]
    public var variantKey:String;

    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.VariantTabBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.variantTab",
      BUNDLE$BBnJ: null,
      __initialize__$BBnJ: __initialize__,
      constructor: VariantTab$,
      super$BBnJ: function() {
        com.coremedia.cms.studio.imageeditor.VariantTabBase.prototype.constructor.apply(this, arguments);
      },
      disableValueExpression: null,
      enlargeValueExpression: null,
      imageDimensionsValueExpression: null,
      boxedImageDimensionsValueExpression: null,
      imageEditorViewModel: null,
      variant: null,
      config: {
        readOnlyValueExpression: null,
        undoHistory: null,
        bindTo: null,
        propertyName: null,
        variantKey: null,
        hideIssues: false
      },
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.cms.studio.imageeditor.VariantTabBase",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.VariantKeyUtil",
        "com.coremedia.cms.studio.imageeditor.actions.EnlargeAction",
        "com.coremedia.cms.studio.imageeditor.history.UndoRedoButton"
      ]
    };
});
