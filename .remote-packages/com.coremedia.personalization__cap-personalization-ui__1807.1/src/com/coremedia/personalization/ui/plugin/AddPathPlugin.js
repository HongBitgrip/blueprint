Ext.define("com.coremedia.personalization.ui.plugin.AddPathPlugin", function(AddPathPlugin) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.personalization.ui.condition.SegmentCondition;

import ext.Component;
import ext.Plugin;

/**
 * Adds a path to a {@link ContentSelector} or a {@link SegmentCondition}.
 * /
public class AddPathPlugin implements Plugin {

  /**
   * @ptype addpath
   * /

  private var pathToAdd:String;
  private var labelSuffix:String;

  /**
   * @cfg {String} path the repository paths that is to be added
   * @cfg {String} labelSuffix suffix to be added to the label of documents retrieved from the path when
   *   rendered
   *
   * @param config the config object
   * /
  public*/ function AddPathPlugin$(config/*:Addpath = null*/){if(arguments.length<=0)config=null;
    this.pathToAdd$mE1u = AS3.getBindable(config,"path");
    this.labelSuffix$mE1u = AS3.getBindable(config,"labelSuffix");
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    if (!(AS3.is(component,  com.coremedia.personalization.ui.plugin.ContentSelector)) && !(AS3.is(component,  com.coremedia.personalization.ui.condition.SegmentCondition))) {
      throw AS3.cast(AS3.Error,"plugin is only applicable to components of type 'ContentSelector' or 'SegmentCondition'");
    }
    component['addPath'](this.pathToAdd$mE1u, this.labelSuffix$mE1u || '');
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      pathToAdd$mE1u: null,
      labelSuffix$mE1u: null,
      constructor: AddPathPlugin$,
      init: init,
      requires: [
        "AS3.Error",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.SegmentCondition",
        "com.coremedia.personalization.ui.plugin.ContentSelector"
      ]
    };
});
