Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPositionMenuBase", function(TeaserOverlayPositionMenuBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser {
import ext.Ext;
import ext.dom.Element;
import ext.menu.Menu;

public class TeaserOverlayPositionMenuBase extends Menu {

  public*/ function TeaserOverlayPositionMenuBase$(config/*:TeaserOverlayPositionMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$$sIk(config);

    this.on('beforehide', function ()/*:Boolean*/ {
      var activeElement/*:Element*/ = Ext.fly(window.document['activeElement']);
      if (!activeElement) {
        return true;
      }

      var id/*:String*/ = activeElement.getAttribute("id");
      if(id && id.indexOf("coreMediaRichTextArea") !== -1) {
        return false;
      }

      return true;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      constructor: TeaserOverlayPositionMenuBase$,
      super$$sIk: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext",
        "Ext.menu.Menu"
      ]
    };
});
