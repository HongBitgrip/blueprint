Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanel", function(ConditionalFilterPanel) {/*package com.coremedia.cms.editor.sdk.collectionview.search{
import com.coremedia.cms.editor.sdk.collectionview.search.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 <p>
 The base component for conditional search filters. For defining a custom filter
 for the search mode of the library window, you can create an ActionScript class
 inheriting from this class in which you define the methods isApplicable(),
 doBuildQuery() and getDefaultState(). Afterwards you can create an MXML
 definition of the actual UI for the new filter, which references your newly
 created ActionScript class as its base class.
 </p>

 @see ConditionalFilterPanelBase#isApplicable
 @see ConditionalFilterPanelBase#doBuildQuery
 * /
public class ConditionalFilterPanel extends ConditionalFilterPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.conditionalFilterPanel";

    public*/function ConditionalFilterPanel$(config/*:ConditionalFilterPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase,{});
    var defaults_$1/*:ConditionalFilterPanel*/ =AS3.cast(ConditionalFilterPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"collapsed" , true);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$s7Gx(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.conditionalFilterPanel",
      constructor: ConditionalFilterPanel$,
      super$s7Gx: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
