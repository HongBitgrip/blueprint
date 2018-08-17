Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetState", function(TranslationStatusWidgetState) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A widget state for adding translation status widgets to the dashboard
 default view.
 * /
public class TranslationStatusWidgetState extends WidgetState{

    public*/function TranslationStatusWidgetState$(config/*:TranslationStatusWidgetState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.WidgetState*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    var defaults_$1/*:TranslationStatusWidgetState*/ =AS3.cast(TranslationStatusWidgetState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.widgetTypeId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget.xtype);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3gET(config_$1);
  }/*

    /**
     The site for which the translation state should be displayed.
     * /
    [Bindable]
    public var targetSiteId:String;


    /**
     The title of the widget.
     * /
    [Bindable]
    public var title:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
      metadata: {"": ["PublicApi"]},
      constructor: TranslationStatusWidgetState$,
      super$3gET: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetState.prototype.constructor.apply(this, arguments);
      },
      config: {
        targetSiteId: null,
        title: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidget"]
    };
});
