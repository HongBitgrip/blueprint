Ext.define("com.coremedia.ui.data.impl.ProblemDescriptionImpl", function(ProblemDescriptionImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.ProblemDescription;

public class ProblemDescriptionImpl implements ProblemDescription{
  public*/ function ProblemDescriptionImpl$(json/*:Object*/) {
    this['code'] = json['code'];
    this['arguments'] = json['arguments'];
  }/*

  /**
   * A code identifying the type of issue. This should be an identifier that can be localized afterwards.
   * It is discouraged to provide human readable text at this point.
   * /
  public native function get code():String;

  /**
   * Optional argument describing the issue, for example indicating a illegally linked object.
   * /
  public native function get arguments():Array;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ProblemDescription"],
      constructor: ProblemDescriptionImpl$,
      requires: ["com.coremedia.ui.data.ProblemDescription"]
    };
});
