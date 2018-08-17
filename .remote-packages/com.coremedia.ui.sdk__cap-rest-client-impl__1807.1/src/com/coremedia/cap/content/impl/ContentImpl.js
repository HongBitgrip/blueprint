Ext.define("com.coremedia.cap.content.impl.ContentImpl", function(ContentImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cap.undoc.content.Content;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RequestQueue;
import com.coremedia.ui.data.impl.URITemplate;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.data.validation.Issues;

import ext.Ext;
import ext.StringUtil;

[RestResource(uriTemplate="content/{id:[0-9]+}")]
public class ContentImpl extends ContentObjectImpl implements com.coremedia.cap.undoc.content.Content {

  //noinspection JSFieldCanBeLocalInspection
  /**
   * The character that starts a path and that separates path components. A slash.
   * /
  private static const*/var PATH_SEPARATOR$static/*:String*/ = "/";/*

  private static const*/var CONTENT_ID_PREFIX$static/*:String*/ = "coremedia:///cap/content/";/*

  private var numericId:int;
  private var rightsCheckInProgress:Boolean = false;
  private var listeningToPath:Boolean = false;

  /**
   * Do not invoke directly. Content objects are only created by the BeanFactory!
   * /
  public*/ function ContentImpl$(uri/*:String*/, vars/*:Object*/) {
    // Remember the id before calling super, so that createRequestQueue can read it.
    var id/*:**/ = vars['id'];
    this.numericId$CJro =AS3.is( id,  Number) ? id : parseInt(id);

    this.super$CJro(uri);
    // Now that the numeric id is set, we can already use a few methods.
    // Store derived immediate property for bean-type access.
    this.setImmediateProperty(com.coremedia.cap.content.ContentPropertyNames.IS_DOCUMENT, this.isDocument());
    this.setImmediateProperty(com.coremedia.cap.content.ContentPropertyNames.IS_FOLDER, this.isFolder());
    this.setImmediateProperty(com.coremedia.cap.content.ContentPropertyNames.IS_ROOT, this.isRoot());
    this.setId(CONTENT_ID_PREFIX$static + this.numericId$CJro);
  }/*

  override protected*/ function createRequestQueue()/*:RequestQueue*/ {
    return com.coremedia.cap.content.impl.ContentRequestQueues.getRequestQueue(this.numericId$CJro);
  }/*


  public*/ function isRightsCheckInProgress()/*:Boolean*/ {
    return this.rightsCheckInProgress$CJro;
  }/*

  public*/ function setRightsCheckInProgress(value/*:Boolean*/)/*:void*/ {
    this.rightsCheckInProgress$CJro = value;
  }/*

  override public*/ function get (property/*:**/)/*:**/ {
    switch (property) {
      case com.coremedia.cap.content.ContentPropertyNames.IS_ROOT:
        // Determine whether this is the root folder without retrieving any data:
        return this.getNumericId() === 1;
      case com.coremedia.cap.content.ContentPropertyNames.IS_FOLDER:
        // Determine whether this is a document without retrieving any data:
        return this.getNumericId() > 0 && this.getNumericId() % 2 === 0;
      case com.coremedia.cap.content.ContentPropertyNames.PREVIEW_URL:
        return Ext.String.format(this.getRepositoryInternal().getPreviewControllerUriPattern(), this.getId(), this.getNumericId());
      case com.coremedia.cap.content.ContentPropertyNames.PATH:
        this.attachPathListeners$CJro();
    }
    return com.coremedia.cap.content.impl.ContentObjectImpl.prototype.get.call(this,property);
  }/*

  override public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    if (property === com.coremedia.cap.content.ContentPropertyNames.PATH) {
      this.attachPathListeners$CJro();
    }
    com.coremedia.cap.content.impl.ContentObjectImpl.prototype.addPropertyChangeListener.call(this,property, onChange);
  }/*

  private*/ function attachPathListeners()/*:Boolean*/ {
    if (!this.listeningToPath$CJro) {
      this.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.NAME,AS3.bind( this,"placeChanged$CJro"));
      this.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.PARENT,AS3.bind( this,"placeChanged$CJro"));
      this.placeChanged$CJro(com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(this, com.coremedia.cap.content.ContentPropertyNames.PARENT, undefined, this.getParent()));
      this.listeningToPath$CJro = true;
      return true;
    }
    return false;
  }/*

  override protected*/ function fireTopLevelPropertyChangeEvent(property/*:String*/, oldValue/*:**/, newValue/*:**/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:void*/ {
    com.coremedia.cap.content.impl.ContentObjectImpl.prototype.fireTopLevelPropertyChangeEvent.call(this,property, oldValue, newValue, oldState, newState);
    switch (property) {
      case com.coremedia.cap.content.ContentPropertyNames.EDITOR:
        this.editorChanged$CJro(newValue);
        break;
      case com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME:
        this.childrenByNameChanged();
        break;
      case com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS:
        this.lifecycleStatusChanged$CJro(newValue);
        break;
      case com.coremedia.cap.content.ContentPropertyNames.PARENT:
        this.folderChanged(oldValue, newValue);
        break;
      case com.coremedia.cap.content.ContentPropertyNames.NAME:
        this.nameChanged(newValue);
        break;
    }
  }/*

  public*/ function getNumericId()/*:uint*/ {
    return this.numericId$CJro;
  }/*

  public*/ function isRoot()/*:Boolean*/ {
    // Determine whether this is the root folder without retrieving any data:
    return this.getNumericId() === 1;
  }/*

  public*/ function isFolder()/*:Boolean*/ {
    // Determine whether this is a folder without retrieving any data:
    return this.getNumericId() % 2 === 1;
  }/*

  public*/ function isDocument()/*:Boolean*/ {
    // Determine whether this is a document without retrieving any data:
    return this.getNumericId() > 0 && this.getNumericId() % 2 === 0;
  }/*

  public*/ function getName()/*:String*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.NAME);
  }/*

  public*/ function getPath()/*:String*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.PATH);
  }/*

  public*/ function getReferrers()/*:Array*/ {
    var uriTemplate/*:URITemplate*/ = this.getRepositoryInternal().getReferrersUriTemplate();
    var referrersBeanPath/*:String*/ = uriTemplate.format({
      id: this.getNumericId()
    });
    var referrersBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(referrersBeanPath);
    return referrersBean.get("items");
  }/*

  private*/ function getReferrersInternal(contentTypeName/*:String*/, propertyName/*:String*/, callback/*:Function = undefined*/)/*:Array*/ {
    var uriTemplate/*:URITemplate*/ = this.getRepositoryInternal().getReferrersWithDescriptorUriTemplate();
    var referrersBeanPath/*:String*/ = uriTemplate.format({
      id: this.getNumericId(),
      contentType: contentTypeName,
      propertyName: propertyName
    });

    var referrersBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(referrersBeanPath);
    if(callback) {
      referrersBean.invalidate(function(invalidatedBean/*:RemoteBean*/)/*:void*/ {
        callback.call(null, invalidatedBean.get('items'));
      });
    }

    return referrersBean.get("items");
  }/*

  public*/ function getReferrersWithDescriptor(contentType/*:ContentType*/, descriptor/*:CapPropertyDescriptor*/)/*:Array*/ {
    return this.getReferrersInternal$CJro(contentType.getName(), descriptor.name);
  }/*

  public*/ function getReferrersWithNamedDescriptor(contentTypeName/*:String*/, propertyName/*:String*/, callback/*:Function = undefined*/)/*:Array*/ {
    var contentType/*:ContentType*/ = this.getRepository().getContentType(contentTypeName);
    if (!contentType) {
      throw new AS3.Error("no such content type: " + contentTypeName);
    }
    var descriptor/*:CapPropertyDescriptor*/ = contentType.getDescriptor(propertyName);
    if (!descriptor) {
      throw new AS3.Error("no such property descriptor: " + contentTypeName + "." + propertyName);
    }
    return this.getReferrersInternal$CJro(contentTypeName, propertyName, callback);
  }/*

  public*/ function hasRightsRules()/*:Boolean*/ {
    return this.get('hasRightsRules');
  }/*

  public*/ function getMergeVersions()/*:Array*/ {
    return this.get('mergeVersions');
  }/*

  public*/ function rename(name/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    // TODO: provide a way to react on success / error of writing some specific property, here 'name'!
    this.set(com.coremedia.cap.content.ContentPropertyNames.NAME, name);
    this.flush(callback);
  }/*

  public*/ function moveTo(target/*:com.coremedia.cap.content.Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    // TODO: provide a way to react on success / error of writing some specific property, here 'parent'!
    this.set(com.coremedia.cap.content.ContentPropertyNames.PARENT, target);
    this.flush(callback);
  }/*

  public*/ function copyTo(target/*:com.coremedia.cap.content.Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.getRepository().copyRecursivelyTo([this], target,  callback);
  }/*

  public*/ function getCreationDate()/*:Date*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CREATION_DATE);
  }/*

  public*/ function getModificationDate()/*:Date*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.MODIFICATION_DATE);
  }/*

  public*/ function getModifier()/*:User*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.MODIFIER);
  }/*

  public*/ function isCheckedOut()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT);
  }/*

  public*/ function isCheckedIn()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN);
  }/*

  public*/ function isPublished()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.PUBLISHED);
  }/*

  public*/ function isInProduction()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.IS_IN_PRODUCTION);
  }/*

  public*/ function isDeleted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.IS_DELETED);
  }/*

  public*/ function getLifecycleStatus()/*:String*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS);
  }/*

  public*/ function getParent()/*:com.coremedia.cap.content.Content*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.PARENT);
  }/*

  public*/ function getLastParent()/*:com.coremedia.cap.content.Content*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.LAST_PARENT);
  }/*

  public*/ function getEditor()/*:User*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.EDITOR);
  }/*

  public*/ function getCreator()/*:User*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CREATOR);
  }/*

  private*/ function lifecycleStatusChanged(lifecycleStatus/*:String*/)/*:void*/ {
    if (this.getState().readable) {
      var computedProperties/*:Object*/ = {};
      computedProperties[com.coremedia.cap.content.ContentPropertyNames.IS_DELETED] = lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.DELETED;
      this.setInternalProperties(computedProperties);
    }
  }/*

  private*/ function editorChanged(editor/*:String*/)/*:void*/ {
    if (this.getState().readable) {
      var isDocument/*:Boolean*/ = this.isDocument();
      var computedProperties/*:Object*/ = {};
      computedProperties[com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT] = isDocument && ! !editor;
      computedProperties[com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN] = isDocument && !editor;
      computedProperties[com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_CURRENT_SESSION] = isDocument && editor === com.coremedia.cap.common.SESSION.getUser();
      computedProperties[com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_OTHER] = isDocument && ! !editor && editor !== com.coremedia.cap.common.SESSION.getUser();
      this.setInternalProperties(computedProperties);

      if (editor) {
        this.setInternal(com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS, com.coremedia.cap.content.LifecycleStatus.IN_PRODUCTION);
      }
    }
  }/*

  private*/ function placeChanged(pce/*:PropertyChangeEvent*/)/*:void*/ {
    // If the folder property changed, make sure to detach and
    // reattach the listener as needed.
    if (pce.property === com.coremedia.cap.content.ContentPropertyNames.PARENT) {
      var oldFolder/*:com.coremedia.cap.content.Content*/ =AS3.as( pce.oldValue,  com.coremedia.cap.content.Content);
      if (oldFolder) {
        oldFolder.removePropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.PATH,AS3.bind( this,"updatePath$CJro"));
      }
      var newFolder/*:com.coremedia.cap.content.Content*/ =AS3.as( pce.newValue,  com.coremedia.cap.content.Content);
      if (newFolder) {
        newFolder.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.PATH,AS3.bind( this,"updatePath$CJro"));
      }
    }
    // Update the path according to the new state.
    this.updatePath$CJro();
  }/*

  /**
   * Recompute the path property using the name property and the
   * parent folder's path.
   * /
  private*/ function updatePath()/*:void*/ {
    var path/*:String*/ = this.computePath$CJro();
    if (path !== undefined) {
      this.setInternal(com.coremedia.cap.content.ContentPropertyNames.PATH, path);
    }
  }/*

  /**
   * Return the path of this content. Return undefined, if the path cannot be
   * computed yet.
   * /
  private*/ function computePath()/*:String*/ {
    try { // Special case for the root folder.
      if (this.isRoot()) {
        return PATH_SEPARATOR$static;
      }
      // If the bean is not fully loaded, we don't know our path.
      var name/*:String*/ = this.getName();
      if (name === undefined) {
        return undefined;
      }
      var folder/*:com.coremedia.cap.content.Content*/ = this.getParent();
      if (folder === undefined) {
        return undefined;
      }
      // Handle documents in trash.
      if (folder === null) {
        return PATH_SEPARATOR$static + name;
      }
      // Special case for content in the root folder: We already know the
      // parents path and we do not want a double slash in the path anyway.
      if (folder.isRoot()) {
        return PATH_SEPARATOR$static + name;
      }
      // If the parent path is not known, we don't know our path.
      var parentPath/*:String*/ = folder.getPath();
      if (parentPath === undefined) {
        return undefined;
      }
      // We can compute the path of an ordinary resource.
      return parentPath + PATH_SEPARATOR$static + name;
    } catch (e/*:**/) {
      //fall through
    }
    // Unreadable? Destroyed? Whatever.
    return undefined;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isCheckedOutByCurrentSession()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_CURRENT_SESSION);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isCheckedOutByOther()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_OTHER);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getChild(path/*:String*/, callback/*:Function = null*/)/*:com.coremedia.cap.content.Content*/ {if(arguments.length<=1)callback=null;
    return this.getRepository().getChild(path, callback, this);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getVersionHistory()/*:VersionHistory*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.VERSION_HISTORY);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getLatestApprovedVersion()/*:Version*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.LATEST_APPROVED_VERSION);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getLatestPublishedVersion()/*:Version*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.LATEST_PUBLISHED_VERSION);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCheckedOutVersion()/*:Version*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_VERSION);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCheckedInVersion()/*:Version*/ {
      return this.get(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN_VERSION);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getIssues()/*:Issues*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.ISSUES);
  }/*

  /**
   * Return the default preview URL for this Content.
   * @return the default preview URL for this Content.
   * /
  public*/ function getPreviewUrl()/*:String*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.PREVIEW_URL);
  }/*

  /**
   * Return a String representation of this Content, which is "Content[&lt;id&gt;]".
   * Do not rely on this output format.
   * @return a String representation of this Content.
   * /
  override public*/ function toString()/*:String*/ {
    return "Content[" + this.getId() + "]";
  }/*

  /**
   * Return a mapping of the name of child contents to the child contents themselves.
   * /
  public*/ function getChildrenByName()/*:Object*/ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME);
  }/*

  internal*/ function folderChanged(oldValue/*:ContentImpl*/, newValue/*:ContentImpl*/)/*:void*/ {
    if (this.getState().readable) {
      this.removeAsChildOfFolder$CJro(oldValue);
      this.addAsChildOfFolder$CJro(newValue);
    } else if (this.getState() === com.coremedia.ui.data.BeanState.NON_EXISTENT) {
      this.removeAsChildOfFolder$CJro(oldValue);
    }
  }/*

  private*/ function removeAsChildOfFolder(folder/*:ContentImpl*/)/*:void*/ {
    if (folder && folder.isLoaded() && folder.getState().readable) {
      folder.childRemoved(this);
    }
  }/*

  internal*/ function childRemoved(removedChild/*:ContentImpl*/)/*:void*/ {
    var childrenByName/*:Object*/ = this.getChildrenByName();
    for (var name/*:String*/ in childrenByName) {
      var child/*:**/ = childrenByName[name];
      if (child === removedChild) {
        // Avoid aliasing: clone object.
        var newChildrenByName/*:Object*/ = Ext.apply({}, childrenByName);
        // This content is no longer a child.
        delete newChildrenByName[name];
        this.setInternal(com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME, newChildrenByName);
        return;
      }
    }
    // Not a child. This is just as well.
  }/*

  private*/ function addAsChildOfFolder(folder/*:ContentImpl*/)/*:void*/ {
    if (folder && folder.isLoaded() && folder.getState().readable) {
      var addedChild/*:ContentImpl*/ = this;
      folder.childAdded(addedChild);
    }
  }/*

  internal*/ function childAdded(addedChild/*:ContentImpl*/)/*:void*/ {
    var childrenByName/*:Object*/ = this.getChildrenByName();
    if (childrenByName[addedChild.getName()]) {
      // A name conflict. Let's hope that the involved contents are invalidated soon.
    } else {
      for (var name/*:String*/ in childrenByName) {
        var child/*:**/ = childrenByName[name];
        if (child === addedChild) {
          // This content is already a child of its parent.
          return;
        }
      }
      // Avoid aliasing: clone object.
      var newChildrenByName/*:Object*/ = Ext.apply({}, childrenByName);
      // This content is no longer a child.
      newChildrenByName[addedChild.getName()] = addedChild;
      this.setInternal(com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME, newChildrenByName);
    }
  }/*

  internal*/ function nameChanged(name/*:String*/)/*:void*/ {
    if (this.getState().readable) {
      var folder/*:ContentImpl*/ =AS3.as( this.getParent(),  ContentImpl);
      if (folder && folder.isLoaded() && folder.getState().readable) {
        folder.childRenamed(name, this);
      }
    }
  }/*

  internal*/ function childRenamed(name/*:String*/, renamedChild/*:ContentImpl*/)/*:void*/ {
    var childrenByName/*:Object*/ = this.getChildrenByName();
    if (childrenByName[name]) {
      // The new name is already taken. If this content is (for whatever reason)
      // already registered at its new name, all is well. Otherwise, we can
      // only hope that the parent is invalidated soon. In either case, we
      // don't try to rectify the situation.
    } else {
      // Avoid aliasing: clone object.
      var newChildrenByName/*:Object*/ = Ext.apply({}, childrenByName);
      // Remove this content from the child map. Consider the possibility
      // that it might not be registered with its old or new name.
      for (var childName/*:String*/ in newChildrenByName) {
        var child/*:**/ = newChildrenByName[childName];
        if (child === renamedChild) {
          delete newChildrenByName[childName];
          break;
        }
      }
      newChildrenByName[name] = renamedChild;
      this.setInternal(com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME, newChildrenByName);
    }
  }/*

  internal*/ function childrenByNameChanged()/*:void*/ {
    if (this.getState().readable) {
      var childrenByName/*:Object*/ = this.getChildrenByName();
      var subFolders/*:Array*/ = computeChildren$static(childrenByName, function(c/*:com.coremedia.cap.content.Content*/)/*:Boolean*/ {
        return c.isFolder();
      }) || [];
      var childDocuments/*:Array*/ = computeChildren$static(childrenByName, function(c/*:com.coremedia.cap.content.Content*/)/*:Boolean*/ {
        return !c.isFolder();
      }) || [];

      //noinspection JSUnusedGlobalSymbols
      var computedProperties/*:Object*/ = {
        children: subFolders.concat(childDocuments),
        subFolders: subFolders,
        childDocuments: childDocuments
      };
      this.setInternalProperties(computedProperties);
    }
  }/*

  /**
   * Return a list of child contents, folders first.
   * /
  public*/ function getChildren()/*:Array*//* Vector.<com.coremedia.cap.content.Content> */ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHILDREN);
  }/*

  /**
   * Return list of child documents, sorted by name (case insensitive)
   * /
  public*/ function getChildDocuments()/*:Array*//* Vector.<com.coremedia.cap.content.Content> */ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.CHILD_DOCUMENTS);
  }/*

  /**
   * Return list of child folders, sorted by name (case insensitive)
   * /
  public*/ function getSubFolders()/*:Array*//* Vector.<com.coremedia.cap.content.Content> */ {
    return this.get(com.coremedia.cap.content.ContentPropertyNames.SUB_FOLDERS);
  }/*

  private static*/ function computeChildren$static(childrenByName/*:Object*/, filter/*:Function*/)/*:Array*/ {
    if (!childrenByName)
      return undefined;
    var nameValuePairs/*:Array*/ = [];
    for (var prop/*:String*/ in childrenByName) {
      var child/*:**/ = childrenByName[prop];
      if (filter(child)) {
        nameValuePairs.push({ name: prop.toLowerCase(), value: child});
      }
    }
    if (nameValuePairs.length == 0) {
      return nameValuePairs;
    }
    nameValuePairs.sort(function(p1/*:Object*/, p2/*:Object*/)/*:int*/ {
      return (AS3.as(p1.name,  String)).localeCompare(AS3.as(p2.name,  String));
    });
    return nameValuePairs.map(function(item/*:Object*/)/*:**/ {
      return item.value;
    });
  }/*

  public*/ function checkIn(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.getRepository().checkInAll([this], callback);
  }/*

  public*/ function checkOut(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    new com.coremedia.cap.content.impl.CheckOutMethod(this, callback).execute();
  }/*

  public*/ function revert(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.getRepository().revertAll([this], callback);
  }/*

  public*/ function doDelete(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.getRepository().deleteAll([this], callback);
  }/*

  public*/ function undelete(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.getRepository().undeleteAll([this], callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentObjectImpl",
      mixins: ["com.coremedia.cap.undoc.content.Content"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{id:[0-9]+}"
        ]
      ]},
      numericId$CJro: 0,
      rightsCheckInProgress$CJro: false,
      listeningToPath$CJro: false,
      constructor: ContentImpl$,
      super$CJro: function() {
        com.coremedia.cap.content.impl.ContentObjectImpl.prototype.constructor.apply(this, arguments);
      },
      createRequestQueue: createRequestQueue,
      isRightsCheckInProgress: isRightsCheckInProgress,
      setRightsCheckInProgress: setRightsCheckInProgress,
      get: get,
      addPropertyChangeListener: addPropertyChangeListener,
      attachPathListeners$CJro: attachPathListeners,
      fireTopLevelPropertyChangeEvent: fireTopLevelPropertyChangeEvent,
      getNumericId: getNumericId,
      isRoot: isRoot,
      isFolder: isFolder,
      isDocument: isDocument,
      getName: getName,
      getPath: getPath,
      getReferrers: getReferrers,
      getReferrersInternal$CJro: getReferrersInternal,
      getReferrersWithDescriptor: getReferrersWithDescriptor,
      getReferrersWithNamedDescriptor: getReferrersWithNamedDescriptor,
      hasRightsRules: hasRightsRules,
      getMergeVersions: getMergeVersions,
      rename: rename,
      moveTo: moveTo,
      copyTo: copyTo,
      getCreationDate: getCreationDate,
      getModificationDate: getModificationDate,
      getModifier: getModifier,
      isCheckedOut: isCheckedOut,
      isCheckedIn: isCheckedIn,
      isPublished: isPublished,
      isInProduction: isInProduction,
      isDeleted: isDeleted,
      getLifecycleStatus: getLifecycleStatus,
      getParent: getParent,
      getLastParent: getLastParent,
      getEditor: getEditor,
      getCreator: getCreator,
      lifecycleStatusChanged$CJro: lifecycleStatusChanged,
      editorChanged$CJro: editorChanged,
      placeChanged$CJro: placeChanged,
      updatePath$CJro: updatePath,
      computePath$CJro: computePath,
      isCheckedOutByCurrentSession: isCheckedOutByCurrentSession,
      isCheckedOutByOther: isCheckedOutByOther,
      getChild: getChild,
      getVersionHistory: getVersionHistory,
      getLatestApprovedVersion: getLatestApprovedVersion,
      getLatestPublishedVersion: getLatestPublishedVersion,
      getCheckedOutVersion: getCheckedOutVersion,
      getCheckedInVersion: getCheckedInVersion,
      getIssues: getIssues,
      getPreviewUrl: getPreviewUrl,
      toString: toString,
      getChildrenByName: getChildrenByName,
      folderChanged: folderChanged,
      removeAsChildOfFolder$CJro: removeAsChildOfFolder,
      childRemoved: childRemoved,
      addAsChildOfFolder$CJro: addAsChildOfFolder,
      childAdded: childAdded,
      nameChanged: nameChanged,
      childRenamed: childRenamed,
      childrenByNameChanged: childrenByNameChanged,
      getChildren: getChildren,
      getChildDocuments: getChildDocuments,
      getSubFolders: getSubFolders,
      checkIn: checkIn,
      checkOut: checkOut,
      revert: revert,
      doDelete: doDelete,
      undelete: undelete,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.impl.ContentObjectImpl",
        "com.coremedia.cap.undoc.content.Content",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cap.content.impl.CheckOutMethod",
        "com.coremedia.cap.content.impl.ContentRequestQueues"
      ]
    };
});
