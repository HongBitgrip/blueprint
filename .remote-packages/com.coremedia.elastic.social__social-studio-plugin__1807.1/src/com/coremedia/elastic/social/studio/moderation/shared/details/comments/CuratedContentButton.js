Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentButton", function(CuratedContentButton) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.util.EncodingUtil;

import ext.button.Button;
import mx.resources.ResourceManager;

public class CuratedContentButton extends Button {

  public var content:Content;

  public*/ function CuratedContentButton$(config/*:CuratedContentButton = null*/) {if(arguments.length<=0)config=null;
    // set the ariaLabel before the super call to prevent console warnings
    this.ariaLabel = com.coremedia.ui.util.EncodingUtil.encodeForHTML(config.content.getName());
    this.super$5WX0(config);
    this.content = config.content;
    AS3.setBindable(this,"handler" ,AS3.bind( this,"openTarget$5WX0"));
    AS3.setBindable(this,"text" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.content.getName()));
    AS3.setBindable(this,"iconCls" , getIconClass$static(this.content));
  }/*

  private*/ function openTarget()/*:void*/ {
    if (this.content && this.content.getState().readable) {
      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(this.content);
    }
  }/*

  private static*/ function getIconClass$static(content/*:Content*/)/*:String*/ {
    // Trigger load, this is not done by getState()
    content.load();
    var contentReadable/*:Boolean*/ = content.getState().readable;
    return contentReadable
            ? (com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(content.getType()))
            : mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      content: null,
      constructor: CuratedContentButton$,
      super$5WX0: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      openTarget$5WX0: openTarget,
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
