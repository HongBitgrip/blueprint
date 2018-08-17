Ext.define("com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea", function(CoreMediaRichTextArea) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPlugin;
import com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin;
[PublicApi]
/**
 A RichTextArea for rendering CoreMedia Rich Text.
 Compared to the plain com.coremedia.ui.ckeditor.RichTextArea this component comes with enhanced support for
 CoreMedia Rich Text, like automatic invalidation of linked blob data.
 If you want to add plugins to this component, make sure to set the plugins mode attribute to 'append'.
 * /
public class CoreMediaRichTextArea extends CoreMediaRichTextAreaBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.coreMediaRichTextArea";

    /**
     * The default maxWidth an embedded image will be scaled down to, if necessary.
     * /
    public static const EMBEDDED_IMAGE_DEFAULT_WIDTH:int = 240;

    public*/function CoreMediaRichTextArea$(config/*:CoreMediaRichTextArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase,{});
    var defaults_$1/*:CoreMediaRichTextArea*/ =AS3.cast(CoreMediaRichTextArea,{});
    AS3.setBindable(defaults_$1,"embeddedImageMaxWidth" , CoreMediaRichTextArea.EMBEDDED_IMAGE_DEFAULT_WIDTH);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_RichTextDropTargetPlugin_37_5_$1/*:com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPlugin,{});
    var ui_CustomizeCKEditorPlugin_38_5_$1/*:com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin,{});
    var object_40_9_$1/*:Object*/ = {};
    object_40_9_$1.embeddedImageMaxWidth = AS3.getBindable(config,"embeddedImageMaxWidth");
    object_40_9_$1.imgRichTextToHtmlConverter = this.getConvertImageElementFunction();
    ui_CustomizeCKEditorPlugin_38_5_$1.ckConfig = object_40_9_$1;
    config_$1.plugins = [editor_RichTextDropTargetPlugin_37_5_$1, ui_CustomizeCKEditorPlugin_38_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kxxz(config_$1);
  }/*

    /**
     The maximumWidth an embedded image will be scaled down to in the property field, in pixels. No transformation
     will be applied to the original image itself (ie the transformation will not be visible on the delivery side). The image
     will never be scaled up. Defaults to 240.  * /
    [Bindable]
    public var embeddedImageMaxWidth:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.coreMediaRichTextArea",
      constructor: CoreMediaRichTextArea$,
      super$kxxz: function() {
        com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase.prototype.constructor.apply(this, arguments);
      },
      config: {embeddedImageMaxWidth: 0},
      statics: {EMBEDDED_IMAGE_DEFAULT_WIDTH: 240},
      requires: [
        "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextAreaBase",
        "com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dragdrop.RichTextDropTargetPlugin"]
    };
});
