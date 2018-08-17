Ext.define("com.coremedia.cms.studio.imageeditor.ImageArea", function(ImageArea) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
public class ImageArea extends ImageAreaBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.imageArea";

    public*/function ImageArea$(config/*:ImageArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.ImageAreaBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageAreaBase,{});
    var defaults_$1/*:ImageArea*/ =AS3.cast(ImageArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.constrain = true;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.computeAriaLabel(config));
    config_$1["focusable"] = true;
    config_$1.cls = "crop-container x-resizable x-component-resizable x-component-default-resizable x-border-box x-resizable-pinned";
    var editor_ShowIssuesPlugin_33_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_33_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(editor_ShowIssuesPlugin_33_5_$1,"ifUndefined" , "");
    AS3.setBindable(editor_ShowIssuesPlugin_33_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName") + (AS3.getBindable(config,"variant") ? ('.' + AS3.getBindable(config,"variant").key) : '')));
    AS3.setBindable(editor_ShowIssuesPlugin_33_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    config_$1.plugins = [editor_ShowIssuesPlugin_33_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$o3ob(config_$1);
  }/*

    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var propertyName:String;


    [Bindable]
    public var name:String;


    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageAreaBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.imageArea",
      constructor: ImageArea$,
      super$o3ob: function() {
        com.coremedia.cms.studio.imageeditor.ImageAreaBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null,
        name: null,
        hideIssues: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin",
        "com.coremedia.cms.studio.imageeditor.ImageAreaBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
