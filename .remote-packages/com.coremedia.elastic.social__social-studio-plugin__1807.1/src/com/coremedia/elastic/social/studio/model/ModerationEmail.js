Ext.define("com.coremedia.elastic.social.studio.model.ModerationEmail", function(ModerationEmail) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Bean;

/**
 * During the process of moderating different types of contributions such as user and
 * comments, there may be several cases where changes to a certain contribution should
 * result in sending a notification to someone as email. The elastic social studio plugin
 * uses this interface as representation of such emails.
 * /
public interface ModerationEmail extends Bean {
  /**
   * Returns the type of this email.
   *
   * @return the type of this email
   * /
  function getType():String;

  /**
   * Returns this emails text.
   *
   * @return this emails text
   * /
  function getText():String;

  /**
   * Sets this emails text.
   *
   * @param text the text which shall be set as this emails text
   * /
  function setText(text:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
