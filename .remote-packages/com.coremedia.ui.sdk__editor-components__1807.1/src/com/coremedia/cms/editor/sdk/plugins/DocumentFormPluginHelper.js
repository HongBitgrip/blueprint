Ext.define("com.coremedia.cms.editor.sdk.plugins.DocumentFormPluginHelper", function(DocumentFormPluginHelper) {/*package com.coremedia.cms.editor.sdk.plugins {
import com.coremedia.ui.components.SwitchingContainer;

public class DocumentFormPluginHelper {
  public static*/ function addOrReplaceItems$static(container/*:SwitchingContainer*/, items/*:Array*/)/*:void*/ {
    // Read old forms and clone them so that we can safely modify the resulting array.
    var allForms/*:Array*/ = container.getLazyItems().concat();
    // Build a hash table to locate existing forms by their item id.
    var indexById/*:Object*/ = {};
    for (var i/*:uint*/ = 0; i < allForms.length; i++) {
      var existingItemId/*:String*/ =AS3.as( allForms[i].itemId,  String);
      if (existingItemId) {
        indexById[existingItemId] = i;
      }
    }
    // Insert all new forms, ...
    for (var j/*:uint*/ = 0; j < items.length; j++) {
      var item/*:**/ = items[j];
      var itemId/*:String*/ = item.itemId;
      var index/*:**/ = indexById[itemId];
      if (index === undefined) {
        // .. adding them at the end when they are new ...
        allForms.push(item);
      } else {
        // .. but replacing an existing entry if it exists.
        allForms[index] = item;
      }
    }
    container.removeAll();
    container.setLazyItems(allForms);
  }/*
}*/function DocumentFormPluginHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: DocumentFormPluginHelper$,
      statics: {addOrReplaceItems: addOrReplaceItems$static}
    };
});
