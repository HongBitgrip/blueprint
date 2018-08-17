Ext.define("com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback", function(DragDropVisualFeedback) {/*package com.coremedia.cms.editor.sdk.dragdrop {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.util.DraggableItemsUtils;

import ext.StringUtil;
import ext.Template;
import ext.XTemplate;

import mx.resources.ResourceManager;

/**
 * A helper class to create drag and drop visual feedback HTML
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DragDropVisualFeedback {

  private static*/ var simpleDragDropTemplate$static/*:Template*/;/* =*/function simpleDragDropTemplate$static_(){simpleDragDropTemplate$static=( new Ext.XTemplate(
    '<span>{text:htmlEncode}</span>').compile());};/*

  public static*/ function getHtmlFeedback$static(items/*:Array*/)/* : String*/ {
    if (!items || items.length === 0) {
      return null;
    }

    if (items.length === 1) {
      //the item can be a Content or a BeanRecord
      var content/*:Content*/ = (AS3.is(items[0],  com.coremedia.cap.content.Content))? items[0] : items[0].getBean();
      var name/*:String*/;
      var type/*:ContentType*/;
      if (content.getState() === com.coremedia.ui.data.BeanState.READABLE) {
        type = content ? content.getType() : null;
        name = content ? content.getName() : "no content";
      } else {
        type = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getDocumentContentType();
        name = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);
      }
      return com.coremedia.ui.util.DraggableItemsUtils.DRAG_GHOST_TEMPLATE.apply({
        title : name,
        icon : com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(type)
      });
    } else {
      return simpleDragDropTemplate$static.apply({
        text : Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DragDropVisualFeedback_multiSelect_text'), items.length)
      });
    }
  }/*
}*/function DragDropVisualFeedback$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: DragDropVisualFeedback$,
      statics: {
        simpleDragDropTemplate: undefined,
        getHtmlFeedback: getHtmlFeedback$static,
        __initStatics__: function() {
          simpleDragDropTemplate$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.XTemplate",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.util.DraggableItemsUtils",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
