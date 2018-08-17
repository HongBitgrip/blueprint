Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.ReusableDocumentFormTabsPlugin", function(ReusableDocumentFormTabsPlugin) {/*package com.coremedia.cms.editor.sdk.desktop.reusability{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 This plugin offers the possibility to reuse WorkArea document form tabs for multiple content items over the
 course of a Studio session instead of creating new tabs over and over again.

 * /
public class ReusableDocumentFormTabsPlugin extends StudioPlugin{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.cap.content.ContentType;
    import com.coremedia.cms.editor.sdk.IEditorContext;
    import com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType;
    import com.coremedia.ui.util.reusableComponentsService;

    public*/function ReusableDocumentFormTabsPlugin$(config/*:ReusableDocumentFormTabsPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$stky(config);
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:ReusableDocumentFormTabsPlugin*/ =AS3.cast(ReusableDocumentFormTabsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$stky(config_$1);
  }/*

    private*/ function __initialize__(config/*:ReusableDocumentFormTabsPlugin*/)/*:void*/ {
      this.defaultLimit = config.defaultLimit || 0;
      this.limitsPerContentType = config.limitsPerContentType || {};
    }/*

    /**
     * The default limit of WorkArea document form tabs to create for content
     * items of each content type. Can be overridden by individual configurations
     * per content type via the property limitsPerContentType.
     *
     * Defaults to 0 (re-usability disabled).
     * /
    [ExtConfig]
    public var defaultLimit:int;

    /**
     * A map specifying the limits of WorkArea document form tabs for content items
     * of specific content types.
     * /
    [ExtConfig]
    public var limitsPerContentType:Object;

    override public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {var this$=this;
      com.coremedia.cms.editor.configuration.StudioPlugin.prototype.init.call(this,editorContext);

      var premularTabType/*:PremularWorkAreaTabType*/ = new com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType();

      if (this.defaultLimit) {
        com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getConcreteDocumentTypes().forEach(function (docType/*:ContentType*/)/*:void*/ {
          com.coremedia.ui.util.reusableComponentsService.setReusabilityLimit(
                  premularTabType.computeReusabilityKey(new com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState({contentTypeName: docType.getName()})),
                  this$.defaultLimit);
        });
      }

      for (var typeName/*:String*/ in this.limitsPerContentType) {
        com.coremedia.ui.util.reusableComponentsService.setReusabilityLimit(
                premularTabType.computeReusabilityKey((new com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState({contentTypeName: typeName}))),
                this.limitsPerContentType[typeName]);
      }
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: ReusableDocumentFormTabsPlugin$,
      super$stky: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      __initialize__$stky: __initialize__,
      defaultLimit: 0,
      limitsPerContentType: null,
      init: init,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.ui.util.reusableComponentsService",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.reusability.PremularProxyTabState"
      ]
    };
});
