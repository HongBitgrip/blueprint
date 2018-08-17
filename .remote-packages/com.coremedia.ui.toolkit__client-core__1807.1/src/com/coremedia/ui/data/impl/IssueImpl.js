Ext.define("com.coremedia.ui.data.impl.IssueImpl", function(IssueImpl) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.WithEquals;

public class IssueImpl implements Issue, WithEquals {
  public*/ function IssueImpl$(json/*:Object*/) {
    this['entity'] = json['entity'];
    this['severity'] = json['severity'];
    this['property'] = json['property'];
    this['code'] = json['code'];
    this['arguments'] = json['arguments'];
  }/*
  
  /**
   * The entity that causes the issue identified in this object.
   * /
  public native function get entity():RemoteBean;

  /**
   * The severity of this issue.
   * /
  public native function get severity():String;

  /**
   * The property that caused the issue, or <code>null</code>, if the issue affects the validated object as a whole.
   * /
  public native function get property():String;

  /**
   * A code identifying the type of issue. This should be an identifier that can be localized afterwards.
   * It is discouraged to provide human readable text at this point.
   * /
  public native function get code():String;

  /**
   * Optional argument describing the issue, for example indicating a illegally linked object.
   * /
  public native function get arguments():Array;

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:IssueImpl*/ =AS3.as( o,  IssueImpl);
    return that && 
            that.entity === this.entity && 
            that.severity === this.severity &&
            that.property === this.property &&
            that.code === this.code &&
            com.coremedia.ui.util.ObjectUtils.equal(that.arguments, this.arguments);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.ui.data.validation.Issue",
        "com.coremedia.ui.util.WithEquals"
      ],
      constructor: IssueImpl$,
      equals: equals,
      requires: [
        "com.coremedia.ui.data.validation.Issue",
        "com.coremedia.ui.util.WithEquals"
      ],
      uses: ["com.coremedia.ui.util.ObjectUtils"]
    };
});
