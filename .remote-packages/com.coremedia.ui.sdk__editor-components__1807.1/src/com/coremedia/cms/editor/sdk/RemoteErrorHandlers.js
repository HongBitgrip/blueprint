Ext.define("com.coremedia.cms.editor.sdk.RemoteErrorHandlers", function(RemoteErrorHandlers) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.cap.common.CapErrorCodes;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentErrorCodes;
import com.coremedia.cap.content.IssuesDetectedError;
import com.coremedia.cap.content.impl.ContentMethod;
import com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl;
import com.coremedia.cap.workflow.WorkflowContentService;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.UrlUtil;
import com.coremedia.ui.util.WindowUtil;

import ext.StringUtil;
import ext.window.MessageBoxWindow;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class RemoteErrorHandlers {*/

  /**
   * @private
   * This class defines global error handler functions.
   *
   * @see com.coremedia.ui.data.error.RemoteError
   * @see com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry
   */
  function RemoteErrorHandlers$() {
  }/*

  private static*/ function showError$static(title/*:String*/, text/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(title, text, Ext.window.MessageBox.ERROR, Ext.window.MessageBox.OK, callback, true, true);
  }/*

  /**
   * Handle content write errors
   * @param error
   * @param source
   * @see com.coremedia.cap.content.ContentErrorCodes
   * /
  private static*/ function handleContentWriteError$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    // Make sure that we have a content write error and no ordinary write error
    // Content write errors can be caused by Contents and by ContentMethods
    var content/*:Content*/;
    if (AS3.is(source,  com.coremedia.cap.content.Content)) {
      content =AS3.as( source,  com.coremedia.cap.content.Content);
    } else if (AS3.is(source,  com.coremedia.cap.content.impl.ContentMethod)) {
      content =AS3.as( source['content'],  com.coremedia.cap.content.Content);
    } else if (AS3.is(source,  com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl)) {
      var contentStruct/*:ContentStructRemoteBeanImpl*/ =AS3.as( source,  com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl);
      content = contentStruct.getContent();
    }

    // assume that we will handle the error
    var afterHandle/*:Function*/ = error.willHandle();
    // if a callback is defined, that callback is also assume to invoke
    // afterHandle when it is done
    var callback/*:Function*/ = makeErrorCallback$static(content, error, afterHandle);
    // if an error handling callback is defined, ...
    if (callback){
      // ... invoke it only after the content and optionally
      // its properties have been reloaded.
      if (content) {
        content.invalidate(callback);
      } else {
        // if no content is available (e.g failed content creation) then invoke directly.
        callback();
      }
      error.setHandled(true);
    } else {
      // This class does not know how to handle the error.
      // The error processing should not wait.
      afterHandle();
    }
  }/*

  private static*/ function makeErrorCallback$static(content/*:Content*/, error/*:RemoteError*/, afterHandle/*:Function*/)/*:Function*/ {
    var callback/*:Function*/ = null;
    switch (error.errorCode) {
      case com.coremedia.cap.content.ContentErrorCodes.BLOB_MIME_CONTENT_TYPE_MISMATCH:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_wrongType'), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.CHECKED_OUT_BY_OTHER:
        callback = function(content/*:Content*/)/*:void*/ {
          var usernameExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create("editor.name", content);
          usernameExpression.loadValue(function(newValue/*:String*/)/*:void*/ {
            showError$static(Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'checkedOutByOther_title'), newValue),
                    Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'checkedOutByOther_message'), newValue), afterHandle);
          });
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.LOCKED_BY_WORKFLOW:
        callback = function(content/*:Content*/)/*:void*/ {
          var workflowContentService/*:WorkflowContentService*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository().getWorkflowContentService();
          workflowContentService.invalidateLocking(content);
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'Workflow_content_locked_warning_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'Workflow_content_locked_warning_message'), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.DUPLICATE_NAME:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'duplicateName_title'),
                  Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'duplicateName_message'), content.getName()), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.INVALID_NAME:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidName_title'),
                  Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidName_message')), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.INVALID_XML_PROPERTY_VALUE:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidXmlPropertyValue_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidXmlPropertyValue_message'), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.MAX_CARDINALITY_EXCEEDED:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'maxCardinalityValue_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'maxCardinalityValue_message'), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.NOT_AUTHORIZED:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'notAuthorized_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'notAuthorized_message'), afterHandle);
        };
        break;
      case com.coremedia.cap.content.ContentErrorCodes.STRING_TOO_LONG:
        callback = function(content/*:Content*/)/*:void*/ {
          showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'stringTooLong_title'),
                  mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'stringTooLong_message'), afterHandle);
        };
        break;
      case com.coremedia.cap.common.CapErrorCodes.NOT_VALID:
        callback = function(content/*:Content*/)/*:void*/ {
          error.setHandled(true);
          afterHandle();
          RemoteErrorHandlers.showIssues(AS3.cast(com.coremedia.cap.content.IssuesDetectedError,error));
        };
        break;
      // no default
      default:
        // it's obviously a content error but we don't know how to handle it
        com.coremedia.ui.logging.Logger.warn(RemoteErrorHandlers + ": don't know how to handle " + error + " raised for " + content);
    }

    if (!callback && error.status === 409) {
      callback = function(content/*:Content*/)/*:void*/ {
        var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'dataTooOld_title');
        var text/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'dataTooOld_message');
        if (error.errorCode === com.coremedia.cap.content.ContentErrorCodes.MARKED_FOR_DELETION) {
          title = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'markedForDeletion_title');
          text = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'markedForDeletion_message');
        }

        showError$static(title, text, afterHandle);
      };
    }
    return callback;
  }/*

  public static*/ function showIssues$static(error/*:IssuesDetectedError*/)/*:void*/ {
    var issues/*:Array*/ = error.issues;
    var severity/*:String*/ = com.coremedia.cms.editor.sdk.validation.ValidationUtil.computeMaximumSeverity(issues);
    if (severity === com.coremedia.ui.data.validation.Severity.INFO) {
      // Don't show a message.
      return;
    }

    var key/*:String*/ = ('IssuesDetectedWindow_header_' + severity.toLowerCase() + '_text');
    var intro/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', key);
    var texts/*:Array*/ = issues.map(com.coremedia.cms.editor.sdk.validation.ValidationUtil.formatText).map(com.coremedia.ui.util.EncodingUtil.encodeForHTML);
    if (issues.length > 1) {
      texts = texts.map(function (line/*:String*/)/*:String*/ {
        return '<li>' + line + '</li>';
      });
      texts.splice(0, 0, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'IssuesDetectedWindow_multiMessagePrefix_text'));
      texts.splice(0, 0, '<ul class="issues-list">');
      texts.push('</ul>');
    } else {
      texts.splice(0, 0, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'IssuesDetectedWindow_singleMessagePrefix_text'));
    }

    texts.splice(0, 0, '<p>' + intro + '</p>');

    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'IssuesDetectedWindow_title'), texts.join(' '), null, false);
  }/*

  public static*/ function handleSessionLost$static(error/*:RemoteError*/, source/*:Object = null*/)/*:void*/ {if(arguments.length<=1)source=null;
    // we should expect 401 if the current user is not authenticated (e.g. session expired)
    // but Spring Security uses 403
    var status/*:uint*/ = error.status;
    if((status === 401 || status === 403) && (com.coremedia.ui.data.impl.RemoteService.HTTP_ERROR === error.errorName)) {
      //UNAUTHORIZED or FORBIDDEN on HTTP level
      com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.show(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'sessionClosed_title'),
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'sessionClosed_message'),
              Ext.window.MessageBox.ERROR,
              {ok: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'sessionClosed_button')},
              function()/*:void*/ { com.coremedia.cap.common.SESSION.close(); com.coremedia.ui.util.WindowUtil.forceReload(); });

      error.setHandled(true); //don't process the error further
    }
  }/*

  private static*/ function defaultErrorHandler$static(error/*:RemoteError*/, source/*:Object*/)/*:void*/{
    if (error.status >= 500 || error.status === 0) { // status 0 is not an HTTP status but may be returned if communication is unavailable (XMLHttpRequest error, empty response)
      if (!com.coremedia.ui.util.UrlUtil.getHashParam("hideGenericError")) {
        showError$static(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'generalError_title'),
                mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'generalError_message'));
      }
    }

    com.coremedia.ui.logging.Logger.error("handling "+error+" raised by source "+source);
  }/*

  /**
   * Register the remote error handlers at the given registry.
   * @param registry
   * /
  public static*/ function registerRemoteErrorHandlers$static(registry/*:IRemoteErrorHandlerRegistry*/)/*:void*/ {
    // register high prio handlers
    com.coremedia.ui.logging.Logger.debug(RemoteErrorHandlers+": registering handlers");
    registry.registerWriteErrorHandler(handleContentWriteError$static);
    registry.registerErrorHandler(RemoteErrorHandlers.handleSessionLost);
    registry.registerErrorHandler(defaultErrorHandler$static,true);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RemoteErrorHandlers$,
      statics: {
        showIssues: showIssues$static,
        handleSessionLost: handleSessionLost$static,
        registerRemoteErrorHandlers: registerRemoteErrorHandlers$static
      },
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.CapErrorCodes",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentErrorCodes",
        "com.coremedia.cap.content.IssuesDetectedError",
        "com.coremedia.cap.content.impl.ContentMethod",
        "com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.UrlUtil",
        "com.coremedia.ui.util.WindowUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil"
      ]
    };
});
