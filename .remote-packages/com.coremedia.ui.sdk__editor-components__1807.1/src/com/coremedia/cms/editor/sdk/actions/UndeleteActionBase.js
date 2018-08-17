Ext.define("com.coremedia.cms.editor.sdk.actions.UndeleteActionBase", function(UndeleteActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cms.editor.sdk.bulkOperation.UndeleteResultWindow;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.ComponentManager;

/**
 * An ext.Action that restores the content defined in the given value expression from trash.
 * /
[PublicApi]
public class UndeleteActionBase extends ContentAction {

  /**
   * Create an ext.Action that restores the content defined in the given value expression from trash.
   *
   * @param config the config object
   * /
  public*/ function UndeleteActionBase$(config/*:UndeleteAction = null*/) {if(arguments.length<=0)config=null;
    this.super$vU9s(AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'undelete', {handler:AS3.bind( this,"doUndelete$vU9s")})));
  }/*

  protected override*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    var needsUndelete/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (!content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.DELETE)) {
        return true;
      }

      if (content.isDeleted()) {
        needsUndelete = true;
      }
    }
    return !needsUndelete;
  }/*

  private*/ function doUndelete()/*:void*/ {var this$=this;
    var contents/*:Array*/ = this.getContents();
    if (!contents || !contents.length) {
      return;
    }

    var content/*:Content*/ = contents[0];
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(content, function(extension/*:CollectionViewExtension*/)/*:void*/ {
      extension && extension.getContentTreeRelation().undeleteContents(contents,AS3.bind( this$,"afterUndelete$vU9s"));
    });
  }/*

  private*/ function afterUndelete(result/*:Object*/)/*:void*/ {
    if (result.successful) {
      // Re-validate active content
      var activeContent/*:Content*/ = com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.getValue();
      if (activeContent && activeContent.getIssues()) {
        activeContent.getIssues().invalidate();
      }

    } else {
      // Show error message box if undeletion did not succeed.
      var undeleteResultWindowCfg/*:UndeleteResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.UndeleteResultWindow,{});
      AS3.setBindable(undeleteResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(undeleteResultWindowCfg).show();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: UndeleteActionBase$,
      super$vU9s: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isHiddenFor: isHiddenFor,
      doUndelete$vU9s: doUndelete,
      afterUndelete$vU9s: afterUndelete,
      requires: [
        "Ext.ComponentManager",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.bulkOperation.UndeleteResultWindow",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
