Ext.define("com.coremedia.ui.plugins.BEMMixin", function(BEMMixin) {/*package com.coremedia.ui.plugins {

/**
 * Provides an element name configuration to bemPlugins attached to parent containers.
 *
 * @see BEMPlugin
 * /
[PublicApi]
public class BEMMixin {

  [Bindable]
  public var bemElement:*;

  /**
   * Creates a new BEMMixin
   *
   * @param config the provided configuration
   * /
  public*/ function BEMMixin$(config/*:BEMMixin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"bemElement" , AS3.getBindable(config,"bemElement"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: BEMMixin$,
      config: {bemElement: undefined}
    };
});
