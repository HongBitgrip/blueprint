Ext.define("com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainerBase", function(SubtypeAwareSwitchingContainerBase) {/*package com.coremedia.cms.editor.sdk.components {
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.components.SwitchingContainer;

import ext.Ext;

/**
 * A special SwitchingContainer that switches its items based on the content type. It goes up the inheritance tree of a
 * content type until it finds a parent type that has a item with the id like the content type name.
 *
 * @see com.coremedia.cap.content.ContentType
 * @see com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer
 *
 * /
[PublicApi]
public class SubtypeAwareSwitchingContainerBase extends SwitchingContainer {


  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer
   * /
  public*/ function SubtypeAwareSwitchingContainerBase$(config/*:SubtypeAwareSwitchingContainer = null*/) {if(arguments.length<=0)config=null;
    config = AS3.cast(com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer,Ext.apply({}, config));
    AS3.setBindable(config,"findComponent" ,AS3.bind( this,"findComponentWithSuptypes$TQ16")); 
    this.super$TQ16(config);
  }/*

  /**
   * Overwrites the default behavior of the switching panel. This method goes up the inheritance tree of a
   * content type until it finds a parent type that has a form for the metadata panel.
   * @param itemId
   * @return the itemId of the form or undefined if no parent exists
   * /
  private*/ function findComponentWithSuptypes(itemId/*:**/)/*:String*/ {
    if (itemId === undefined) {
      return undefined; // must be wrong usage
    }

    var contentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(itemId);
    if (!contentType) {
      throw new AS3.Error("Unknown content type '" + itemId + "' of " + this + ".");
    }

    var currentParent/*:CapType*/ = contentType;
    var currentItemId/*:String*/ = itemId;
    while (!this.hasComponentForItemId$TQ16(currentItemId)) {
      currentParent = currentParent.getParent();
      if (currentParent === undefined || currentParent === null) return undefined;
      currentItemId = currentParent.getName();
    }
    return currentItemId;
  }/*

  private*/ function hasComponentForItemId(componentItemId/*:String*/)/*:Boolean*/ {
    var transformer/*:Function*/ = this.getTransformer();
    if (transformer) {
      componentItemId = transformer(componentItemId);
    }
    return ! !this.getComponent(componentItemId);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      metadata: {"": ["PublicApi"]},
      constructor: SubtypeAwareSwitchingContainerBase$,
      super$TQ16: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      findComponentWithSuptypes$TQ16: findComponentWithSuptypes,
      hasComponentForItemId$TQ16: hasComponentForItemId,
      requires: [
        "AS3.Error",
        "Ext",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.components.SwitchingContainer"
      ],
      uses: ["com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer"]
    };
});
