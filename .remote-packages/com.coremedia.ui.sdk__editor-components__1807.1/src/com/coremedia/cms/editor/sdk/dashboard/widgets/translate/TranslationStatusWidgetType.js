Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetType", function(TranslationStatusWidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget;
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditor;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A widget type for displaying the translation status of
 a specific site.
 * /
public class TranslationStatusWidgetType extends ComponentBasedWidgetType{

    import mx.resources.ResourceManager;

    public static const WIDGET_TYPE_ID:String =*/function WIDGET_TYPE_ID$static_(){TranslationStatusWidgetType.WIDGET_TYPE_ID=( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget.xtype);}/*;

    public*/function TranslationStatusWidgetType$(config/*:TranslationStatusWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType,{});
    var defaults_$1/*:TranslationStatusWidgetType*/ =AS3.cast(TranslationStatusWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"id_" ,net.jangaroo.ext.Exml.asString( TranslationStatusWidgetType.WIDGET_TYPE_ID));
    AS3.setBindable(config_$1,"name" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_name')));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_icon')));
    var editor_TranslationStatusWidget_29_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget,{});
    AS3.setBindable(config_$1,"widgetComponent" , editor_TranslationStatusWidget_29_5_$1);
    var editor_TranslationStatusWidgetEditor_32_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditor*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditor,{});
    AS3.setBindable(config_$1,"editorComponent" , editor_TranslationStatusWidgetEditor_32_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$T9wk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
      metadata: {"": ["PublicApi"]},
      constructor: TranslationStatusWidgetType$,
      super$T9wk: function() {
        com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType.prototype.constructor.apply(this, arguments);
      },
      statics: {
        WIDGET_TYPE_ID: undefined,
        __initStatics__: function() {
          WIDGET_TYPE_ID$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetType",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetEditor"
      ]
    };
});
