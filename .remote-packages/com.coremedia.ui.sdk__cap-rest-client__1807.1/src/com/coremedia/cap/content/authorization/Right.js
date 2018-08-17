Ext.define("com.coremedia.cap.content.authorization.Right", function(Right) {/*package com.coremedia.cap.content.authorization {

/**
 * A single right on content.
 * /
[PublicApi]
public class Right {
  /**
   * Right to read content.
   * /
  public static const READ:Right =*/function READ$static_(){Right.READ=( new Right('R'));}/*;

  /**
   * Right to write content.
   * /
  public static const WRITE:Right =*/function WRITE$static_(){Right.WRITE=( new Right('M'));}/*;

  /**
   * Right to move content to or from the recycle bin or to destroy content.
   * /
  public static const DELETE:Right =*/function DELETE$static_(){Right.DELETE=( new Right('D'));}/*;

  /**
   * Right to approve content.
   * /
  public static const APPROVE:Right =*/function APPROVE$static_(){Right.APPROVE=( new Right('A'));}/*;

  /**
   * Right to publish content.
   * /
  public static const PUBLISH:Right =*/function PUBLISH$static_(){Right.PUBLISH=( new Right('P'));}/*;

  /**
   * Right to assign rights to other users and to revert and check-in content edited by other users.
   * /
  public static const SUPERVISE:Right =*/function SUPERVISE$static_(){Right.SUPERVISE=( new Right('S'));}/*;

  private var rightString:String;

  /**
   * @private
   * /
  public*/ function Right$(rightString/*:String*/) {
    this.rightString$81J0 = rightString;
  }/*

  /**
   * @private
   * /
 public*/ function asString()/*:String*/ {
    return this.rightString$81J0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      rightString$81J0: null,
      constructor: Right$,
      asString: asString,
      statics: {
        READ: undefined,
        WRITE: undefined,
        DELETE: undefined,
        APPROVE: undefined,
        PUBLISH: undefined,
        SUPERVISE: undefined,
        __initStatics__: function() {
          READ$static_();
          WRITE$static_();
          DELETE$static_();
          APPROVE$static_();
          PUBLISH$static_();
          SUPERVISE$static_();
        }
      }
    };
});
