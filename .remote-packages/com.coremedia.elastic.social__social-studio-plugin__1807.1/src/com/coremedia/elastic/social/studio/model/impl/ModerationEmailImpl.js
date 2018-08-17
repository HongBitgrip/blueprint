Ext.define("com.coremedia.elastic.social.studio.model.impl.ModerationEmailImpl", function(ModerationEmailImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames;
import com.coremedia.ui.data.impl.BeanImpl;

public class ModerationEmailImpl extends BeanImpl implements ModerationEmail {
  public*/ function ModerationEmailImpl$(type/*:String*/, text/*:String*/) {this.super$9u0J();
    this.setType$9u0J(type);
    this.setText(text);
  }/*

  private*/ function setType(type/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames.TYPE, type);
  }/*

  public*/ function getType()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames.TYPE);
  }/*

  public*/ function getText()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames.TEXT);
  }/*

  public*/ function setText(text/*:String*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames.TEXT, text);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.ModerationEmail"],
      constructor: ModerationEmailImpl$,
      super$9u0J: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      setType$9u0J: setType,
      getType: getType,
      getText: getText,
      setText: setText,
      requires: [
        "com.coremedia.elastic.social.studio.model.ModerationEmail",
        "com.coremedia.ui.data.impl.BeanImpl"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.ModerationEmailPropertyNames"]
    };
});
