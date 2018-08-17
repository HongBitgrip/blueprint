Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteActionUtil", function(DeleteActionUtil) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.DeleteResultCodes;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.ContentTreeRelationProvider;
import com.coremedia.cms.editor.sdk.bulkOperation.DeleteResultWindow;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.ComponentManager;

import ext.StringUtil;

import mx.resources.ResourceManager;

/**
 * Contains common code for delete actions.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class DeleteActionUtil {*/

  function DeleteActionUtil$() {}/*

  public static*/ function isDeleteDisabledFor$static(contents/*:Array*/)/*:Boolean*/ {
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.isCheckedOutByOther() ||
              !content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.DELETE) ||
              content.isPublished()) {
        return true;
      }
      var treeRelation/*:ContentTreeRelation*/ = com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation();
      if(treeRelation === undefined) {
        return undefined;
      }

      if(treeRelation === null) {
        return true;
      }

      if(!treeRelation.mayDelete([content])) {
        return true;
      }
      var lifecycleStatus/*:String*/ = content.getLifecycleStatus();
      if (lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.DELETED) {
        return true;
      }
    }
    return false;
  }/*

  public static*/ function hasMultipleParentsFor$static(contents/*:Array*/)/*:Boolean*/ {
    var treeRelation/*:ContentTreeRelation*/ = com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation();
    if(treeRelation === undefined) {
      return undefined;
    }
    if(treeRelation === null) {
      return true;
    }
    return someHasMultipleParents$static(contents);
  }/*

  private static*/ function someHasMultipleParents$static(contents/*:Array*/)/*:Boolean*/ {
    for (var i/*:int*/ = 0; i < contents.length; i++) {
      var hmp/*:Boolean*/ = hasMultipleParents$static(contents[i]);
      if (hmp === undefined || hmp) {
        return hmp;
      }
    }
    return false;
  }/*

  private static*/ function hasMultipleParents$static(content/*:Content*/)/*:Boolean*/ {
    var treeRelation/*:ContentTreeRelation*/ = com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation();
    var parents/*:Array*/ = treeRelation.getParents(content);
    return parents ? parents.length > 1 : parents;
  }/*

  public static*/ function startDelete$static(contents/*:Array*/)/*:void*/ {
    if (!contents || !contents.length) {
      return;
    }
    var title/*:String*/;
    var message/*:String*/;
    if (contents.length === 1) {
      var content/*:Content*/ = contents[0];
      var isDocument/*:Boolean*/ = content.isDocument();

      title = isDocument ?
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_document_verifyMessage_title') :
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_folder_verifyMessage_title');
      message = Ext.String.format(isDocument ?
                      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_document_verifyMessage_text') :
                      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_folder_verifyMessage_text'),
              content.getName());
    } else {
      title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_contents_verifyMessage_title');
      message = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_contents_verifyMessage_text'), contents.length);
    }
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_buttonText'),
            function (btn/*:**/)/*:void*/ {
              if (btn === 'ok') {
                doDelete$static(contents);
              }
            });
  }/*

  private static*/ function doDelete$static(contents/*:Array*/)/*:void*/ {
    contents.map(function (c/*:Content*/)/*:void*/ {
      var panel/*:PremularBase*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().findTabForEntity(c),  com.coremedia.cms.editor.sdk.premular.PremularBase);
      if(panel) {
        panel.setPreventCloseMessage(true);
      }
    });
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(com.coremedia.cms.editor.sdk.ContentTreeRelationProvider.getContentTreeRelation).loadValue(function(treeRelation/*:ContentTreeRelation*/)/*:void*/ {
      treeRelation.deleteContents(contents, completed$static);
    });
  }/*

  private static*/ function completed$static(result/*:BulkOperationResult*/)/*:void*/ {
    // Index all deleted content and close tabs.
    var deletedIds/*:Object*/ = {};
    for (var i/*:uint*/ =0; i < result.results.length; i++) {
      var resultItem/*:BulkOperationResultItem*/ = result.results[i];
      var code/*:String*/ = resultItem.resultCode;
      if (code === com.coremedia.cap.content.results.DeleteResultCodes.DOCUMENT_DELETED ||
              code === com.coremedia.cap.content.results.DeleteResultCodes.FOLDER_DELETED)
      {
        deletedIds[resultItem.content.getId()] = true;
      }
    }

    // Show error message box if deletion did not succeed.
    if (!result['successful']) {
      var deleteResultWindowCfg/*:DeleteResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.DeleteResultWindow,{});
      AS3.setBindable(deleteResultWindowCfg,"bulkResultItems" , result.results);
      Ext.ComponentManager.create(deleteResultWindowCfg).show();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: DeleteActionUtil$,
      statics: {
        isDeleteDisabledFor: isDeleteDisabledFor$static,
        hasMultipleParentsFor: hasMultipleParentsFor$static,
        startDelete: startDelete$static
      },
      requires: [
        "Ext.ComponentManager",
        "Ext.String",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cap.content.results.DeleteResultCodes",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.ContentTreeRelationProvider",
        "com.coremedia.cms.editor.sdk.bulkOperation.DeleteResultWindow",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
