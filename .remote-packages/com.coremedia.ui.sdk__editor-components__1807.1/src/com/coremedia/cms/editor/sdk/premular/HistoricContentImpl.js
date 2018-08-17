Ext.define("com.coremedia.cms.editor.sdk.premular.HistoricContentImpl", function(HistoricContentImpl) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cap.undoc.content.Content;
import com.coremedia.cap.undoc.content.ContentUtil;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.data.validation.Issues;

import ext.Ext;
import ext.util.Observable;

/**
 * Fires after this version or its content has changed.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>old:*</code> the old value
 *   </li>
 *   <li>
 *     <code>new:*</code> the new value
 *   </li>
 * </ul>
 * /
[Event(name = "valueChanged")] // NOSONAR - no type

public class HistoricContentImpl extends Observable implements HistoricContent, com.coremedia.cap.undoc.content.Content {
  private static const*/var VALUE_CHANGED_EVENT$static/*:String*/ = 'valueChanged';/*

  private var content:com.coremedia.cap.content.Content;
  private var version:Version;

  private var immutableProperties:Object;

  public*/ function HistoricContentImpl$(version/*:Version*/) {this.super$muRu();
    this.content$muRu = version.getContainingContent();
    this.version$muRu = version;

    // After content and version are set, the immutable properties
    // are correctly reported by the getters.
    this.immutableProperties$muRu = {
      checkedOut: this.isCheckedOut(),
      checkedOutByCurrentSession: this.isCheckedOutByCurrentSession(),
      checkedOutByOther: this.isCheckedOutByOther(),
      checkedIn: this.isCheckedIn(),
      checkedOutVersion: this.getCheckedOutVersion(),
      checkedInVersion: this.getCheckedInVersion(),
      issues: this.getIssues()
    };

    // Make sure to load both beans eventually to avoid the special case
    // where one of the beans stays unloaded because only one of the beans
    // is accessed.
    // This is probably superstitious, because the full information will be
    // requested soon, anyway.
    this.content$muRu.load();
    version.load();
  }/*

  public*/ function getVersion()/*:Version*/ {
    return this.version$muRu;
  }/*

  public*/ function getContent()/*:com.coremedia.cap.content.Content*/ {
    return this.content$muRu;
  }/*

  override public*/ function getId()/*:String*/ {
    return this.content$muRu.getId();
  }/*

  public*/ function isRoot()/*:Boolean*/ {
    return this.content$muRu.isRoot();
  }/*

  public*/ function isFolder()/*:Boolean*/ {
    return this.content$muRu.isFolder();
  }/*

  public*/ function isDocument()/*:Boolean*/ {
    return this.content$muRu.isDocument();
  }/*

  public*/ function getName()/*:String*/ {
    return this.content$muRu.getName();
  }/*

  public*/ function getPath()/*:String*/ {
    return this.content$muRu.getPath();
  }/*

  public*/ function getReferrers()/*:Array*/ {
    return this.content$muRu.getReferrers();
  }/*

  public*/ function getReferrersWithDescriptor(contentType/*:ContentType*/, descriptor/*:CapPropertyDescriptor*/)/*:Array*/ {
    return this.content$muRu.getReferrersWithDescriptor(contentType, descriptor);
  }/*

  public*/ function getReferrersWithNamedDescriptor(contentTypeName/*:String*/, descriptorName/*:String*/, callback/*:Function = undefined*/)/*:Array*/ {
    return this.content$muRu.getReferrersWithNamedDescriptor(contentTypeName, descriptorName, callback);
  }/*

  public*/ function rename(name/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    throw new AS3.Error("rename not supported by HistoricContent");
  }/*

  public*/ function moveTo(target/*:com.coremedia.cap.content.Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    throw new AS3.Error("moveTo not supported by HistoricContent");
  }/*

  public*/ function copyTo(target/*:com.coremedia.cap.content.Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    throw new AS3.Error("copyTo not supported by HistoricContent");
  }/*

  public*/ function getCreator()/*:User*/ {
    return this.content$muRu.getCreator();
  }/*

  public*/ function getCreationDate()/*:Date*/ {
    return this.content$muRu.getCreationDate();
  }/*

  public*/ function getModificationDate()/*:Date*/ {
    return this.content$muRu.getModificationDate();
  }/*

  public*/ function isCheckedOut()/*:Boolean*/ {
    return false;
  }/*

  public*/ function isCheckedIn()/*:Boolean*/ {
    return true;
  }/*

  public*/ function isPublished()/*:Boolean*/ {
    return this.content$muRu.isPublished();
  }/*

  public*/ function isInProduction()/*:Boolean*/ {
    return this.content$muRu.isInProduction();
  }/*

  public*/ function isDeleted()/*:Boolean*/ {
    return this.content$muRu.isDeleted();
  }/*

  public*/ function isDestroyed()/*:Boolean*/ {
    return this.version$muRu.isDestroyed();
  }/*

  public*/ function getLifecycleStatus()/*:String*/ {
    return this.content$muRu.getLifecycleStatus();
  }/*

  public*/ function getParent()/*:com.coremedia.cap.content.Content*/ {
    return this.content$muRu.getParent();
  }/*

  public*/ function getLastParent()/*:com.coremedia.cap.content.Content*/ {
    return this.content$muRu.getLastParent();
  }/*

  public*/ function getEditor()/*:User*/ {
    return this.content$muRu.getEditor();
  }/*

  public*/ function getChildren()/*:Array*/ {
    return this.content$muRu.getChildren();
  }/*

  public*/ function getChildrenByName()/*:Object*/ {
    return this.content$muRu.getChildrenByName();
  }/*

  public*/ function getChildDocuments()/*:Array*/ {
    return this.content$muRu.getChildDocuments();
  }/*

  public*/ function getSubFolders()/*:Array*/ {
    return this.content$muRu.getSubFolders();
  }/*

  public*/ function getPreviewUrl()/*:String*/ {
    return this.content$muRu.getPreviewUrl();
  }/*

  public*/ function isCheckedOutByCurrentSession()/*:Boolean*/ {
    return false;
  }/*

  public*/ function isCheckedOutByOther()/*:Boolean*/ {
    return false;
  }/*

  public*/ function getChild(path/*:String*/, callback/*:Function = null*/)/*:com.coremedia.cap.content.Content*/ {if(arguments.length<=1)callback=null;
    return this.content$muRu.getChild(path, callback);
  }/*

  public*/ function getVersionHistory()/*:com.coremedia.cap.content.VersionHistory*/ {
    return this.content$muRu.getVersionHistory();
  }/*

  public*/ function getLatestApprovedVersion()/*:Version*/ {
    return this.content$muRu.getLatestApprovedVersion();
  }/*

  public*/ function getLatestPublishedVersion()/*:Version*/ {
    return this.content$muRu.getLatestPublishedVersion();
  }/*

  public*/ function getCheckedOutVersion()/*:Version*/ {
    return null;
  }/*

  public*/ function getCheckedInVersion()/*:Version*/ {
    return this.version$muRu;
  }/*

  public*/ function getIssues()/*:Issues*/ {
    return new com.coremedia.cms.editor.sdk.premular.EmptyIssues(this);
  }/*

  public*/ function checkIn(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    throw new AS3.Error("check in not supported by HistoricContent");
  }/*

  public*/ function checkOut(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    throw new AS3.Error("check out not supported by HistoricContent");
  }/*

  public*/ function revert(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    throw new AS3.Error("revert not supported by HistoricContent");
  }/*

  public*/ function doDelete(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    throw new AS3.Error("delete not supported by HistoricContent");
  }/*

  public*/ function undelete(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    throw new AS3.Error("undelete not supported by HistoricContent");
  }/*

  public*/ function getType()/*:ContentType*/ {
    return this.content$muRu.getType();
  }/*

  public*/ function getProperties()/*:ContentProperties*/ {
    // TODO: Really? This reports the wrong value for ContentProperties.getContentObject().
    return this.version$muRu.getProperties();
  }/*

  public*/ function getRepository()/*:ContentRepository*/ {
    return this.content$muRu.getRepository();
  }/*

  public*/ function isContent()/*:Boolean*/ {
    return this.content$muRu.isContent();
  }/*

  public*/ function isVersion()/*:Boolean*/ {
    return this.content$muRu.isVersion();
  }/*

  public*/ function getUri()/*:String*/ {
    return this.content$muRu.getUri();
  }/*

  public*/ function getUriPath()/*:String*/ {
    return this.content$muRu.getUriPath();
  }/*

  public*/ function getAbsoluteUri()/*:String*/ {
    return this.content$muRu.getAbsoluteUri();
  }/*

  public*/ function getType_()/*:CapType*/ {
    return this.content$muRu.getType_();
  }/*

  public*/ function getNumericId()/*:uint*/ {
    return com.coremedia.cap.common.IdHelper.parseContentId(this.content$muRu);
  }/*

  public*/ function hasRightsRules()/*:Boolean*/ {
    return com.coremedia.cap.undoc.content.ContentUtil.hasRightsRules(this.content$muRu);
  }/*

  public*/ function getMergeVersions()/*:Array*/ {
    return [];
  }/*

  public*/ function load(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var me/*:HistoricContentImpl*/ = this;
    com.coremedia.ui.data.RemoteBeanUtil.loadAll(function()/*:void*/ {
      callback(me);
    }, this.content$muRu, this.version$muRu);
  }/*

  public*/ function flush(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.content$muRu.flush(callback);
  }/*

  public*/ function isLoaded()/*:Boolean*/ {
    return this.content$muRu.isLoaded() && this.version$muRu.isLoaded();
  }/*

  public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var me/*:HistoricContentImpl*/ = this;
    com.coremedia.ui.data.RemoteBeanUtil.invalidateAll(function()/*:void*/ {
      callback(me);
    }, this.content$muRu, this.version$muRu);
  }/*

  public*/ function addBeforeFlushListener(beforeFlush/*:Function*/)/*:void*/ {
    // History content needn't be flushed. It's immutable.
    // In fact, some listeners get confused when they
    // receive flush events from the wrapped content.
  }/*

  public*/ function removeBeforeFlushListener(beforeFlush/*:Function*/)/*:void*/ {
  }/*

  private*/ function isImmutableProperty(propertyName/*:String*/)/*:Boolean*/ {
    return this.immutableProperties$muRu.hasOwnProperty(propertyName);
  }/*

  public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    var propertyName/*:String*/ = String(property);
    if (this.isImmutableProperty$muRu(propertyName)) {
      // Nothing to do.
      return;
    }

    if (propertyName === com.coremedia.cap.content.ContentPropertyNames.PROPERTIES) {
      this.version$muRu.addPropertyChangeListener(property, onChange);
    } else if (propertyName === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      this.version$muRu.addPropertyChangeListener(property, onChange);
      this.content$muRu.addPropertyChangeListener(property, onChange);
    } else {
      this.content$muRu.addPropertyChangeListener(property, onChange);
    }
  }/*

  public*/ function removePropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    var propertyName/*:String*/ = String(property);
    if (this.isImmutableProperty$muRu(propertyName)) {
      // Nothing to do.
      return;
    }

    if (propertyName === com.coremedia.cap.content.ContentPropertyNames.PROPERTIES) {
      this.version$muRu.removePropertyChangeListener(property, onChange);
    } else if (propertyName === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      this.version$muRu.removePropertyChangeListener(property, onChange);
      this.content$muRu.removePropertyChangeListener(property, onChange);
    } else {
      this.content$muRu.removePropertyChangeListener(property, onChange);
    }
  }/*

  public*/ function hasPropertyChangeListener(property/*:**/)/*:Boolean*/ {
    var propertyName/*:String*/ = String(property);
    if (this.isImmutableProperty$muRu(propertyName)) {
      // Nothing to do.
      return false;
    }

    if (propertyName === com.coremedia.cap.content.ContentPropertyNames.PROPERTIES) {
      return this.version$muRu.hasPropertyChangeListener(property);
    } else if (propertyName === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      return this.version$muRu.hasPropertyChangeListener(property) &&
              this.content$muRu.hasPropertyChangeListener(property);
    } else {
      return this.content$muRu.hasPropertyChangeListener(property);
    }
  }/*

  public*/ function addValueChangeListener(onChange/*:Function*/)/*:void*/ {
    if (!this.hasListener(VALUE_CHANGED_EVENT$static)) {
      this.content$muRu.addValueChangeListener(AS3.bind(this,"contentValueChanged$muRu"));
      this.version$muRu.addValueChangeListener(AS3.bind(this,"versionValueChanged$muRu"));
    }
    this.addListener(VALUE_CHANGED_EVENT$static, onChange);
  }/*

  public*/ function removeValueChangeListener(onChange/*:Function*/)/*:void*/ {
    this.removeListener(VALUE_CHANGED_EVENT$static, onChange);
    if (!this.hasListener(VALUE_CHANGED_EVENT$static)) {
      this.content$muRu.removeValueChangeListener(AS3.bind(this,"contentValueChanged$muRu"));
      this.version$muRu.removeValueChangeListener(AS3.bind(this,"versionValueChanged$muRu"));
    }
  }/*

  public*/ function hasValueChangeListener()/*:Boolean*/ {
    return this.hasListener(VALUE_CHANGED_EVENT$static);
  }/*

  private*/ function versionValueChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    if (event.property === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      this.fireValueChangedEvent$muRu(com.coremedia.ui.data.BeanState.PROPERTY_NAME, event.oldValue, event.newValue, event.oldState, event.newState);
    } else if (event.property.indexOf("properties.") === 0) {
      // User-defined properties are passed through from the version.
      this.fireValueChangedEvent$muRu(event.property, event.oldValue, event.newValue, event.oldState, event.newState);
    }
  }/*

  private*/ function contentValueChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    if (!this.isImmutableProperty$muRu(event.property) && event.property.indexOf("properties\n") !== 0) {
      // The changed property is a property that is passed through from the content.
      this.fireValueChangedEvent$muRu(event.property, event.oldValue, event.newValue, event.oldState, event.newState);
    }
  }/*

  private*/ function fireValueChangedEvent(property/*:String*/, oldValue/*:**/, newValue/*:**/, oldState/*:BeanState*/, newState/*:BeanState*/)/*:void*/ {
    this.fireEvent(VALUE_CHANGED_EVENT$static, com.coremedia.ui.data.util.PropertyChangeEventUtil.createEvent(this, property, oldValue, newValue, oldState, newState));
  }/*

  public*/ function get(property/*:**/)/*:**/ {
    var propertyName/*:String*/ = String(property);
    if (this.isImmutableProperty$muRu(propertyName)) {
      return this.immutableProperties$muRu[propertyName];
    }

    if (propertyName === com.coremedia.cap.content.ContentPropertyNames.PROPERTIES) {
      return this.getProperties();
    } else if (propertyName === com.coremedia.ui.data.BeanState.PROPERTY_NAME) {
      return this.getState();
    } else {
      return this.content$muRu.get(property);
    }
  }/*

  public*/ function instantiate(property/*:**/)/*:**/ {
    return this.get(property);
  }/*

  public*/ function set(property/*:**/, value/*:**/)/*:Boolean*/ {
    throwUpdateNotSupported$static();
  }/*

  public*/ function updateProperties(newValue/*:Object*/)/*:Boolean*/ {
    throwUpdateNotSupported$static();
  }/*

  public*/ function addAt(property/*:String*/, position/*:int = -1*/, value/*:* = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position=-1;case 2:value=null;}
    throwUpdateNotSupported$static();
  }/*

  public*/ function removeAt(property/*:String*/, position/*:int = -1*/)/*:**/ {if(arguments.length<=1)position=-1;
    throwUpdateNotSupported$static();
  }/*

  private static*/ function throwUpdateNotSupported$static()/*:void*/ {
    throw new AS3.Error("update not supported by HistoricContent");
  }/*

  public*/ function toObject()/*:Object*/ {
    var result/*:Object*/ = this.content$muRu.toObject();
    result[com.coremedia.cap.content.ContentPropertyNames.PROPERTIES] = this.version$muRu.getProperties().toObject();
    Ext.apply(result, this.immutableProperties$muRu);
    return result;
  }/*

  public*/ function toJson()/*:String*/ {
    return this.content$muRu.toJson();
  }/*

  public*/ function getState()/*:BeanState*/ {
    var contentState/*:BeanState*/ = this.content$muRu.getState();
    var versionState/*:BeanState*/ = this.version$muRu.getState();

    if (contentState === com.coremedia.ui.data.BeanState.UNKNOWN || versionState === com.coremedia.ui.data.BeanState.UNKNOWN) {
      return com.coremedia.ui.data.BeanState.UNKNOWN;
    }

    if (contentState === com.coremedia.ui.data.BeanState.NON_EXISTENT || versionState === com.coremedia.ui.data.BeanState.NON_EXISTENT) {
      return com.coremedia.ui.data.BeanState.NON_EXISTENT;
    }
    
    if (contentState === com.coremedia.ui.data.BeanState.UNREADABLE || versionState === com.coremedia.ui.data.BeanState.UNREADABLE) {
      return com.coremedia.ui.data.BeanState.UNREADABLE;
    }

    // There are no read restrictions on versions besides the restrictions on the containing content.
    return contentState;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: [
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.cap.undoc.content.Content"
      ],
      metadata: {"": [
        "Event",
        [
          "name",
          "valueChanged"
        ]
      ]},
      content$muRu: null,
      version$muRu: null,
      immutableProperties$muRu: null,
      constructor: HistoricContentImpl$,
      super$muRu: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      getVersion: getVersion,
      getContent: getContent,
      getId: getId,
      isRoot: isRoot,
      isFolder: isFolder,
      isDocument: isDocument,
      getName: getName,
      getPath: getPath,
      getReferrers: getReferrers,
      getReferrersWithDescriptor: getReferrersWithDescriptor,
      getReferrersWithNamedDescriptor: getReferrersWithNamedDescriptor,
      rename: rename,
      moveTo: moveTo,
      copyTo: copyTo,
      getCreator: getCreator,
      getCreationDate: getCreationDate,
      getModificationDate: getModificationDate,
      isCheckedOut: isCheckedOut,
      isCheckedIn: isCheckedIn,
      isPublished: isPublished,
      isInProduction: isInProduction,
      isDeleted: isDeleted,
      isDestroyed: isDestroyed,
      getLifecycleStatus: getLifecycleStatus,
      getParent: getParent,
      getLastParent: getLastParent,
      getEditor: getEditor,
      getChildren: getChildren,
      getChildrenByName: getChildrenByName,
      getChildDocuments: getChildDocuments,
      getSubFolders: getSubFolders,
      getPreviewUrl: getPreviewUrl,
      isCheckedOutByCurrentSession: isCheckedOutByCurrentSession,
      isCheckedOutByOther: isCheckedOutByOther,
      getChild: getChild,
      getVersionHistory: getVersionHistory,
      getLatestApprovedVersion: getLatestApprovedVersion,
      getLatestPublishedVersion: getLatestPublishedVersion,
      getCheckedOutVersion: getCheckedOutVersion,
      getCheckedInVersion: getCheckedInVersion,
      getIssues: getIssues,
      checkIn: checkIn,
      checkOut: checkOut,
      revert: revert,
      doDelete: doDelete,
      undelete: undelete,
      getType: getType,
      getProperties: getProperties,
      getRepository: getRepository,
      isContent: isContent,
      isVersion: isVersion,
      getUri: getUri,
      getUriPath: getUriPath,
      getAbsoluteUri: getAbsoluteUri,
      getType_: getType_,
      getNumericId: getNumericId,
      hasRightsRules: hasRightsRules,
      getMergeVersions: getMergeVersions,
      load: load,
      flush: flush,
      isLoaded: isLoaded,
      invalidate: invalidate,
      addBeforeFlushListener: addBeforeFlushListener,
      removeBeforeFlushListener: removeBeforeFlushListener,
      isImmutableProperty$muRu: isImmutableProperty,
      addPropertyChangeListener: addPropertyChangeListener,
      removePropertyChangeListener: removePropertyChangeListener,
      hasPropertyChangeListener: hasPropertyChangeListener,
      addValueChangeListener: addValueChangeListener,
      removeValueChangeListener: removeValueChangeListener,
      hasValueChangeListener: hasValueChangeListener,
      versionValueChanged$muRu: versionValueChanged,
      contentValueChanged$muRu: contentValueChanged,
      fireValueChangedEvent$muRu: fireValueChangedEvent,
      get: get,
      instantiate: instantiate,
      set: set,
      updateProperties: updateProperties,
      addAt: addAt,
      removeAt: removeAt,
      toObject: toObject,
      toJson: toJson,
      getState: getState,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.util.Observable",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.undoc.content.Content",
        "com.coremedia.cap.undoc.content.ContentUtil",
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.EmptyIssues"]
    };
});
