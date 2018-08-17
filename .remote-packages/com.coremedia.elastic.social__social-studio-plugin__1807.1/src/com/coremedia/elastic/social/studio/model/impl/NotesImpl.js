Ext.define("com.coremedia.elastic.social.studio.model.impl.NotesImpl", function(NotesImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="{tenant:[^/]+}/elastic/social/user/{id:[A-Za-z0-9-]+}/note")]
public class NotesImpl extends RemoteBeanImpl {
  public*/ function NotesImpl$(path/*:String*/) {
    this.super$hvj_(path);
  }/*

  public*/ function getUser()/*:Contribution*/ {
    return this.get("user");
  }/*

  public*/ function getNotesText()/*:String*/ {
    return this.get("text");
  }/*

  public*/ function setNotesText(notesText/*:String*/)/*:void*/ {
    this.set("text", notesText);

  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "{tenant:[^/]+}/elastic/social/user/{id:[A-Za-z0-9-]+}/note"
        ]
      ]},
      constructor: NotesImpl$,
      super$hvj_: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getUser: getUser,
      getNotesText: getNotesText,
      setNotesText: setNotesText,
      requires: ["com.coremedia.ui.data.impl.RemoteBeanImpl"]
    };
});
