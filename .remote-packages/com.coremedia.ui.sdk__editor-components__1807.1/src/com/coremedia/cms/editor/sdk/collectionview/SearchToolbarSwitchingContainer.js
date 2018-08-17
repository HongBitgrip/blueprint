Ext.define("com.coremedia.cms.editor.sdk.collectionview.SearchToolbarSwitchingContainer", function(SearchToolbarSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.ui.components.SwitchingContainer;
import net.jangaroo.ext.Exml;
[PublicApi]
public class SearchToolbarSwitchingContainer extends SwitchingContainer{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.searchToolbarSwitchingContainer";

    public*/function SearchToolbarSwitchingContainer$(config/*:SearchToolbarSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    var defaults_$1/*:SearchToolbarSwitchingContainer*/ =AS3.cast(SearchToolbarSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$660r(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.searchToolbarSwitchingContainer",
      constructor: SearchToolbarSwitchingContainer$,
      super$660r: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.SwitchingContainer",
        "net.jangaroo.ext.Exml"
      ]
    };
});
