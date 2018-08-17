Ext.define("com.coremedia.cap.content.authorization.impl.AccessControlImpl", function(AccessControlImpl) {/*package com.coremedia.cap.content.authorization.impl {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.content.impl.ContentImpl;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cap.undoc.content.ContentUtil;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.UrlUtil;

public class AccessControlImpl implements AccessControl {
  private static const*/var DEFAULT_BULK_RIGHTS_CHUNKS_SIZE$static/*:int*/ = 250;/*
  /**
   * The maximum number of contents for which rights may be retrieved
   * in a single server call.
   * /
  private var bulkRightsChunkSize:int =*/function bulkRightsChunkSize_(){this.bulkRightsChunkSize$Xyfd=( DEFAULT_BULK_RIGHTS_CHUNKS_SIZE$static);}/*;

  private var contentRepository:ContentRepositoryImpl;

  public*/ function AccessControlImpl$(contentRepositoryImpl/*:ContentRepositoryImpl*/) {bulkRightsChunkSize_.call(this);
    this.contentRepository$Xyfd = contentRepositoryImpl;
  }/*

  public*/ function setBulkRightsChunkSize(bulkRightsChunkSize/*:int*/)/*:void*/ {
    this.bulkRightsChunkSize$Xyfd = bulkRightsChunkSize;
  }/*

  public*/ function mayPerform(content/*:Content*/, right/*:Right*/)/*:**/ {
    if (right === com.coremedia.cap.content.authorization.Right.READ) {
      return mayRead$static(content);
    }
    
    if (right === com.coremedia.cap.content.authorization.Right.APPROVE && content.isDocument() && this.contentRepository$Xyfd.useStrictWorkflow()) {
      if (content.isCheckedOut()) {
        // approve action would check in - and the current user becomes the editor
        return false;
      }
      var latestVersion/*:Version*/ = content.getCheckedInVersion();
      if (latestVersion === undefined) {
        return undefined;
      }
      var editor/*:User*/ = latestVersion.getEditor();
      if (editor === undefined) {
        return undefined;
      }
      if (com.coremedia.cap.common.SESSION.getUser() === editor) {
        return false;
      }
    }
    var type/*:ContentType*/ = content.getType();
    if (!type) {
      // The type of the content is not loaded yet.
      // We cannot determine the rights.
      return undefined;
    }
    return this.mayPerformForType(content, type, right);
  }/*

  public*/ function mayCreate(content/*:Content*/, contentType/*:ContentType*/)/*:**/ {
    return this.mayPerformForType(content, contentType, com.coremedia.cap.content.authorization.Right.WRITE);
  }/*

  public*/ function mayPerformForType(content/*:Content*/, type/*:ContentType*/, right/*:Right*/)/*:**/ {
    if (right === com.coremedia.cap.content.authorization.Right.READ) {
      return mayRead$static(content);
    }

    var contentRights/*:ContentRights*/ = this.getContentRightsBean$Xyfd(content);
    if (contentRights === undefined) {
      return undefined;
    }
    if (contentRights === null) {
      // No rights apply.
      return false;
    }
    var rightsAsString/*:**/ = contentRights.getRightsAsString(type);
    if (rightsAsString === undefined) {
      return undefined;
    }
    return String(rightsAsString).indexOf(right.asString()) !== -1;
  }/*

  /**
   * Return true, if the content may be written,
   * undefined, if the writable state cannot yet be determined,
   * false otherwise.
   *
   * @param content the content
   * @return the read-only state
   * /
  public*/ function isWritable(content/*:Content*/)/*:Boolean*/ {
    var mayReadContent/*:**/ = mayRead$static(content);
    if (!mayReadContent) {
      return mayReadContent;
    }

    var contentRights/*:ContentRights*/ = this.getContentRightsBean$Xyfd(content);
    if (contentRights === undefined) {
      return undefined;
    }
    return contentRights.isWritable();
  }/*

  private*/ function getContentRightsBean(content/*:Content*/)/*:ContentRights*/ {
    // Starting with the given content, search the chain of rights parent until
    // a content with rights rules has been found.
    var currentContent/*:**/ = content;
    while (!currentContent.isRoot()) {
      var hasRightsRule/*:Boolean*/ = com.coremedia.cap.undoc.content.ContentUtil.hasRightsRules(currentContent);
      if (hasRightsRule === undefined) {
        // Content not yet loaded.
        return undefined;
      }
      if (hasRightsRule) {
        break;
      }
      if (currentContent.isDeleted()) {
        currentContent = currentContent.getLastParent();
        if (!currentContent) {
          // Administrative users inherit rights from the root folder if the chain of last folders is broken.
          // This happens only in very rare cases for content created with ancient versions of the CMS.
          var isAdministrative/*:**/ = com.coremedia.cap.common.SESSION.getUser().isAdministrative();
          if (isAdministrative === undefined) {
            // We do not yet know whether the user is administrative, but that would be important.
            return undefined;
          }
          if (isAdministrative) {
            currentContent = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
          }
        }
      } else {
        currentContent = currentContent.getParent();
      }
      if (!currentContent) {
        if (currentContent === undefined) {
          // The rights parent is not yet loaded. We cannot decide at the moment.
          return undefined;
        } else {
          // The chain of rights parents broke without arriving at a folder with applicable rights rules. No rights.
          return null;
        }
      }
    }

    var rightsBeanId/*:String*/ = com.coremedia.ui.util.UrlUtil.addMatrixParameters(AS3.cast(com.coremedia.cap.content.Content,currentContent).getUriPath() + "/rights", {
      "for": com.coremedia.cap.common.SESSION.getUser().getUriPath().replace(/\//g, '_')
    });
    return AS3.cast(com.coremedia.cap.content.authorization.impl.ContentRights,com.coremedia.ui.data.beanFactory.getRemoteBean(rightsBeanId));
  }/*

  private static*/ function mayRead$static(content/*:Content*/)/*:**/ {
    var readable/*:Boolean*/ = content.getState().readable;
    if (readable === undefined) {
      // Retrieving the state does not cause the content to be loaded.
      // Trigger the load explicitly. Dependencies have been registered.
      content.load();
    }
    return readable;
  }/*

  public*/ function filterReadableContents(contents/*:Array*/)/*:**/ {
    var allRightsKnown/*:Boolean*/ = true;
    for (var i/*:uint*/ = 0; i < contents.length; i++) {
      var content/*:Content*/ = contents[i];
      if (content.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
        allRightsKnown = false;
        break;
      }
    }

    if (allRightsKnown) {
      return filterReadableContentsNoLoad$static(contents);
    } else {
      this.performRightsChecks$Xyfd(contents);
      return undefined;
    }
  }/*

  public*/ function mayCopy(contents/*:Array*/, target/*:Content*/)/*:**/ {var this$=this;
    // It's ok to copy nothing.
    if (!contents || contents.length < 1) {
      return true;
    }
    // But it must be moved somewhere.
    if (!target || !target.isFolder()) {
      return false;
    }

    var valid/*:**/ = true;
    contents.some(function (content/*:Content*/)/*:Boolean*/ {
      // At this point, valid is either true or undefined. If it is set to false,
      // we exit the loop immediately.

      if (content.getState() === com.coremedia.ui.data.BeanState.UNREADABLE) {
        // Content is known to be unreadable.
        valid = false;
        return true;
      }

      var contentType/*:ContentType*/ = content.getType();
      if (!contentType) {
        // Content is not yet loaded.
        valid = undefined;
      } else {
        var contentValid/*:**/ = this$.mayPerformForType(target, contentType, com.coremedia.cap.content.authorization.Right.WRITE);
        if (contentValid != true) {
          valid = contentValid;
        }
      }

      return valid === false;
    });
    return valid;
  }/*

  public*/ function mayMove(contents/*:Array*/, target/*:Content*/)/*:**/ {var this$=this;
    // It's ok to move nothing.
    if (!contents || contents.length < 1) {
      return true;
    }
    // But it must be moved somewhere.
    if (!target || !target.isFolder()) {
      return false;
    }

    // Some folders have to be treated in a special way.
    var userHomeFolder/*:Content*/ = com.coremedia.cap.common.SESSION.getUser().getHomeFolder();
    var rootFolder/*:Content*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();

    var valid/*:**/ = true;
    contents.some(function (content/*:Content*/)/*:Boolean*/ {
      // At this point, valid is either true or undefined. If it is set to false,
      // we exit the loop immediately.

      if (content.getState() === com.coremedia.ui.data.BeanState.UNREADABLE) {
        // Content is known to be unreadable.
        valid = false;
        return true;
      }

      if (content === userHomeFolder || content === rootFolder || target === content) {
        valid = false;
        return true;
      }

      var contentType/*:ContentType*/ = content.getType();
      if (!contentType) {
        // Content is not yet loaded.
        valid = undefined;
      } else {
        var sourceFolder/*:Content*/ = content.getParent() || content.getLastParent();
        if (!sourceFolder) {
          // Content should be loaded, because it has a type.
          // If it has no parent, it is likely the root folder.
          valid = false;
          return true;
        }

        if (target === sourceFolder) {
          valid = false;
          return true;
        }

        var contentValid/*:**/ = !isChildOf$static(target, content) &&
                this$.mayPerformForType(sourceFolder, contentType, com.coremedia.cap.content.authorization.Right.WRITE) &&
                this$.mayPerformForType(target, contentType, com.coremedia.cap.content.authorization.Right.WRITE);
        if (contentValid != true) {
          valid = contentValid;
        }
      }

      return valid === false;
    });
    return valid;
  }/*

  public*/ function mayRename(content/*:Content*/)/*:**/ {
    if (content.isDocument()) {
      return this.mayPerform(content, com.coremedia.cap.content.authorization.Right.WRITE);
    } else if (content.isRoot()) {
      return false;
    } else {
      var parent/*:Content*/ = content.getParent();
      if (parent === undefined) {
        return undefined;
      }
      if (parent === null) {
        // No rename in archive.
        return false;
      }
      return this.mayPerform(parent, com.coremedia.cap.content.authorization.Right.WRITE);
    }
  }/*

  private static*/ function isChildOf$static(child/*:Content*/, parent/*:Content*/)/*:**/ {
    if (child === parent) {
      return false;
    }
    var current/*:Content*/ = child.getParent();
    while (current != null) {
      if (current === undefined) {
        return undefined;
      }
      if (current === parent) {
        return true;
      }
      current = current.getParent();
    }
    return false;
  }/*

  private static*/ function filterReadableContentsNoLoad$static(contents/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for (var j/*:uint*/ = 0; j < contents.length; j++) {
      var content2/*:Content*/ = contents[j];
      if (content2.getState().readable) {
        result.push(content2);
      }
    }
    return result;
  }/*

  private*/ function performRightsChecks(contents/*:Array*/)/*:void*/ {var this$=this;
    var toBeChecked/*:Array*/ = [];
    for (var i/*:uint*/ = 0; i < contents.length; i++) {
      var originalContent/*:Content*/ = contents[i];
      var content/*:ContentImpl*/ = originalContent instanceof com.coremedia.cap.content.impl.ContentImpl ?
              AS3.cast(com.coremedia.cap.content.impl.ContentImpl,originalContent) :
              AS3.cast(com.coremedia.cap.content.impl.ContentImpl,com.coremedia.ui.data.beanFactory.getRemoteBean(originalContent.getUriPath()));
      if (content.getState() === com.coremedia.ui.data.BeanState.UNKNOWN && !content.isRightsCheckInProgress()) {
        toBeChecked.push(content);
      }
    }

    if (toBeChecked.length > 0) {
      var limit/*:uint*/ = 0;
      var allReadable/*:Array*/ = [];
      var allUnreadable/*:Array*/ = [];
      var serviceMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.contentRepository$Xyfd.get('bulkRightsUri'), "POST", true, false, null, true);
      function sendRequest()/*:void*/ {
        var nextLimit/*:uint*/ = limit + this$.bulkRightsChunkSize$Xyfd;
        var chunk/*:Array*/ = toBeChecked.slice(limit, nextLimit);
        serviceMethod.request({contents:chunk}, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (response.success) {
            // Extract and remember readability information.
            var result/*:Object*/ = response.getResponseJSON();
            var readable/*:Array*/ = result.readable;
            if (readable) {
              readable.forEach(function(readableContent/*:Content*/)/*:void*/ {
                allReadable.push(readableContent);
              });
            }
            var unreadable/*:Array*/ = result.unreadable;
            if (unreadable) {
              unreadable.forEach(function(unreadableContent/*:Content*/)/*:void*/ {
                allUnreadable.push(unreadableContent);
              });
            }
            limit = nextLimit;
          } else {
            // Mark all remaining contents as unreadable on the first error.
            allUnreadable = allUnreadable.concat(toBeChecked.slice(limit));
            limit = toBeChecked.length;
          }

          if (limit < toBeChecked.length) {
            sendRequest();
          } else {
            // Remember all retrieved data in one go.
            // This makes sure that value expressions are triggered once at the end
            // of the rights retrieval and not multiple times when partial data arrives.
            injectBeanState$static(allReadable, com.coremedia.ui.data.BeanState.READABLE);
            injectBeanState$static(allUnreadable, com.coremedia.ui.data.BeanState.UNREADABLE);

            // Index readability data.
            var retrievedContentIds/*:Object*/ = {};
            allReadable.concat(allUnreadable).forEach(function(content/*:Content*/)/*:void*/ {
              retrievedContentIds[content.getUriPath()] = true;
            });
            // Find contents whose readability could not be decided.
            // Such contents where handled in a request that completed successfully,
            // so that the only reason for their absence from the list is non-existence.
            var nonExistent/*:Array*/ = toBeChecked.filter(function(content/*:Content*/)/*:Boolean*/ {
              return !retrievedContentIds[content.getUriPath()];
            });
            injectBeanState$static(nonExistent, com.coremedia.ui.data.BeanState.NON_EXISTENT);
          }
        });
      }
      sendRequest();
    }

    // The requests are underway.
    for (var j/*:uint*/ = 0; j < toBeChecked.length; j++) {
      var checkedContent/*:ContentImpl*/ = toBeChecked[j];
      checkedContent.setRightsCheckInProgress(true);
    }
  }/*


  private static*/ function injectBeanState$static(contents/*:Array*/, state/*:BeanState*/)/*:void*/ {
    if (contents) {
      for (var i/*:uint*/ = 0; i < contents.length; i++) {
        var contentImpl/*:ContentImpl*/ =AS3.as( contents[i],  com.coremedia.cap.content.impl.ContentImpl);
        if (!contentImpl) {
          contentImpl =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(contents[i]),  com.coremedia.cap.content.impl.ContentImpl);
          if (!contentImpl) {
            // should not happen
            continue;
          }
        }
        contentImpl.injectBeanState(state);
        contentImpl.setRightsCheckInProgress(false);
      }
    }
  }/*

  public*/ function mayWrite(content/*:Content*/)/*:**/ {
    // Check all conditions, giving up early if it becomes known that the
    // content cannot be written.
    var deleted/*:Boolean*/ = content.isDeleted();
    if (deleted) {
      return false;
    }
    
    var checkedOutByOther/*:Boolean*/ = content.isCheckedOutByOther();
    if (checkedOutByOther) {
      return false;
    }
    
    var rightGranted/*:**/ = this.mayPerform(content,  com.coremedia.cap.content.authorization.Right.WRITE);
    if (rightGranted === false) {
      return false;
    }

    if (deleted === undefined || checkedOutByOther == undefined || rightGranted == undefined) {
      // Report lack of knowledge. All necessary loads have been triggered.
      return undefined;
    }

    // All is well.
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.authorization.AccessControl"],
      contentRepository$Xyfd: null,
      constructor: AccessControlImpl$,
      setBulkRightsChunkSize: setBulkRightsChunkSize,
      mayPerform: mayPerform,
      mayCreate: mayCreate,
      mayPerformForType: mayPerformForType,
      isWritable: isWritable,
      getContentRightsBean$Xyfd: getContentRightsBean,
      filterReadableContents: filterReadableContents,
      mayCopy: mayCopy,
      mayMove: mayMove,
      mayRename: mayRename,
      performRightsChecks$Xyfd: performRightsChecks,
      mayWrite: mayWrite,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.authorization.AccessControl",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cap.undoc.content.ContentUtil",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.UrlUtil"
      ],
      uses: [
        "com.coremedia.cap.content.authorization.impl.ContentRights",
        "com.coremedia.cap.content.impl.ContentImpl"
      ]
    };
});
