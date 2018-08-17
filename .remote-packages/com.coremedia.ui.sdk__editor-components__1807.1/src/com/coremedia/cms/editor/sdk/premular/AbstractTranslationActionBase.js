Ext.define("com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase", function(AbstractTranslationActionBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.editorContext;

public class AbstractTranslationActionBase extends ContentAction {

  public*/ function AbstractTranslationActionBase$(config/*:AbstractTranslationAction = null*/) {if(arguments.length<=0)config=null;
    this.super$kLNK(config);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (!contents || contents.length !== 1 || !(AS3.is(contents[0],  com.coremedia.cap.content.Content))) {
      return true;
    }

    var content/*:Content*/ = contents[0];
    var contentType/*:ContentType*/ = content.getType();
    if (!contentType) {
      return true;
    }
    // content is known to be loaded.

    var masterProperty/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel().getMasterProperty();
    var masterDescriptor/*:CapPropertyDescriptor*/ = contentType.getDescriptor(masterProperty);
    if (!masterDescriptor || masterDescriptor.type !== com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
      return true;
    }

    //noinspection JSMismatchedCollectionQueryUpdate
    var masterLinks/*:Array*/ = content.getProperties().get(masterProperty);
    if (!masterLinks || masterLinks.length !== 1) {
      return true;
    }

    var master/*:Content*/ = masterLinks[0];

    var masterVersionProperty/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel().getMasterVersionProperty();
    var masterVersionDescriptor/*:CapPropertyDescriptor*/ = contentType.getDescriptor(masterVersionProperty);
    if (!masterVersionDescriptor || masterVersionDescriptor.type !== com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER) {
      return true;
    }

    if (content.getProperties().get(masterVersionProperty) === undefined) {
      return true;
    }
    var masterVersion/*:Number*/ = content.getProperties().get(masterVersionProperty);

    var versionHistory/*:com.coremedia.cap.content.VersionHistory*/ = master.getVersionHistory();
    if (versionHistory === undefined || !versionHistory.getItems() || versionHistory.getItems().length === 0) {
      return true;
    }

    var latestVersion/*:Version*/ = versionHistory.getItems()[versionHistory.getItems().length - 1];
    return latestVersion.getVersionNumber() <= masterVersion;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      constructor: AbstractTranslationActionBase$,
      super$kLNK: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      requires: [
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
