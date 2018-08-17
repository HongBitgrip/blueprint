Ext.define("com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbarSwitchingContainer", function(RepositoryToolbarSwitchingContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.ui.components.SwitchingContainer;
import net.jangaroo.ext.Exml;
[PublicApi]
public class RepositoryToolbarSwitchingContainer extends SwitchingContainer{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.repositoryToolbarSwitchingContainer";

    public*/function RepositoryToolbarSwitchingContainer$(config/*:RepositoryToolbarSwitchingContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    var defaults_$1/*:RepositoryToolbarSwitchingContainer*/ =AS3.cast(RepositoryToolbarSwitchingContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vtLJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.repositoryToolbarSwitchingContainer",
      constructor: RepositoryToolbarSwitchingContainer$,
      super$vtLJ: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.SwitchingContainer",
        "net.jangaroo.ext.Exml"
      ]
    };
});
