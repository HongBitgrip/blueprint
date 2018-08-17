Ext.define("com.coremedia.ui.data.validation.Issue", function(Issue) {/*package com.coremedia.ui.data.validation {

import com.coremedia.ui.data.RemoteBean;

/**
 * An issue resulting from a validation operation. Issues are bundled in <code>Issues</code> objects.
 *
 * @see Issues
 * /
[PublicApi]
public interface Issue {
  /**
   * The entity that causes the issue identified in this object.
   * /
  function get entity():RemoteBean;

  /**
   * The severity of this issue. One of the constants from <code>Severity</code>
   *
   * @see Severity
   * /
  function get severity():String;

  /**
   * The property that caused the issue, or <code>null</code>, if the issue affects the validated object as a whole.
   * /
  function get property():String;

  /**
   * A code identifying the type of issue. This should be an identifier that can be localized afterwards.
   * It is discouraged to provide human readable text at this point.
   * /
  function get code():String;

  /**
   * Optional argument describing the issue, for example indicating a illegally linked object.
   * /
  function get arguments():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
