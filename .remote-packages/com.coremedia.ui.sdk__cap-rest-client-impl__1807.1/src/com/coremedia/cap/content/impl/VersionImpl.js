Ext.define("com.coremedia.cap.content.impl.VersionImpl", function(VersionImpl) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionPropertyNames;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.logging.Logger;

[RestResource(uriTemplate="content/{id:[0-9]+}/versions/{version:[0-9]+}")]
public class VersionImpl extends ContentObjectImpl implements Version {
  private static const*/var VERSION_ID_PREFIX$static/*:String*/ = "coremedia:///cap/version/";/*

  private var contentLatestApprovedVersionExpression:ValueExpression;
  private var contentLatestPublishedVersionExpression:ValueExpression;
  private var contentLatestVersionExpression:ValueExpression;

  /**
   * Do not invoke directly. Used by the bean factory to create version objects.
   * /
  public*/ function VersionImpl$(uri/*:String*/, vars/*:Object*/) {
    this.super$TTvH(uri);

    var version/*:**/ = vars['version'];
    var contentId/*:**/ = vars['id'];
    this.setImmediateProperty(com.coremedia.cap.content.VersionPropertyNames.VERSION_NUMBER,AS3.is( version,  Number) ? version : parseInt(version));
    this.setImmediateProperty(com.coremedia.cap.content.VersionPropertyNames.CONTAINING_CONTENT, com.coremedia.ui.data.beanFactory.getRemoteBean('content/' + contentId));
    this.setId(VERSION_ID_PREFIX$static + contentId + "/" + version);
  }/*

  override public*/ function get(property/*:**/)/*:**/ {
    switch (property) {
      case com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION:
        if (!this.contentLatestApprovedVersionExpression$TTvH) {
          return this.makeContentLatestApprovedVersionExpression$TTvH().getValue() === this;
        }
        // else fall through to normal get
        break;
      case com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION:
        if (!this.contentLatestPublishedVersionExpression$TTvH) {
          return this.makeContentLatestPublishedVersionExpression$TTvH().getValue() === this;
        }
        // else fall through to normal get
        break;
      case com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION:
        if (!this.contentLatestVersionExpression$TTvH) {
          return this.makeContentLatestVersionExpression$TTvH().getValue() === this;
        }
        // else fall through to normal get
        break;
    }
    return com.coremedia.cap.content.impl.ContentObjectImpl.prototype.get.call(this,property);
  }/*

  public*/ function getEditionDate()/*:Date*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.EDITION_DATE);
  }/*

  public*/ function getApprovalDate()/*:Date*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.APPROVAL_DATE);
  }/*

  public*/ function getPublicationDate()/*:Date*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.PUBLICATION_DATE);
  }/*

  public*/ function getEditor()/*:User*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.EDITOR);
  }/*

  public*/ function getApprover()/*:User*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.APPROVER);
  }/*

  public*/ function getPublisher()/*:User*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.PUBLISHER);
  }/*

  public*/ function getVersionNumber()/*:int*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.VERSION_NUMBER);
  }/*

  public*/ function isLatestApprovedVersion()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION);
  }/*

  public*/ function isLatestPublishedVersion()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION);
  }/*

  public*/ function isLatestVersion()/*:Boolean*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION);
  }/*

  public*/ function getContainingContent()/*:Content*/ {
    return this.get(com.coremedia.cap.content.VersionPropertyNames.CONTAINING_CONTENT);
  }/*

  override public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION && !this.contentLatestApprovedVersionExpression$TTvH) {
      this.contentLatestApprovedVersionExpression$TTvH = this.makeContentLatestApprovedVersionExpression$TTvH();
      this.contentLatestApprovedVersionExpression$TTvH.addChangeListener(AS3.bind(this,"contentLatestApprovedVersionChanged$TTvH"));
      this.contentLatestApprovedVersionChanged$TTvH();
    }
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION && !this.contentLatestPublishedVersionExpression$TTvH) {
      this.contentLatestPublishedVersionExpression$TTvH = this.makeContentLatestPublishedVersionExpression$TTvH();
      this.contentLatestPublishedVersionExpression$TTvH.addChangeListener(AS3.bind(this,"contentLatestPublishedVersionChanged$TTvH"));
      this.contentLatestPublishedVersionChanged$TTvH();
    }
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION && !this.contentLatestVersionExpression$TTvH) {
      this.contentLatestVersionExpression$TTvH = this.makeContentLatestVersionExpression$TTvH();
      this.contentLatestVersionExpression$TTvH.addChangeListener(AS3.bind(this,"contentLatestVersionChanged$TTvH"));
      this.contentLatestVersionChanged$TTvH();
    }
    com.coremedia.cap.content.impl.ContentObjectImpl.prototype.addPropertyChangeListener.call(this,property, onChange);
  }/*

  private*/ function makeContentLatestApprovedVersionExpression()/*:ValueExpression*/ {
    var expression/*:String*/ = com.coremedia.cap.content.VersionPropertyNames.CONTAINING_CONTENT + '.' + com.coremedia.cap.content.ContentPropertyNames.LATEST_APPROVED_VERSION;
    return com.coremedia.ui.data.ValueExpressionFactory.create(expression, this);
  }/*

  private*/ function makeContentLatestPublishedVersionExpression()/*:ValueExpression*/ {
    var expression/*:String*/ = com.coremedia.cap.content.VersionPropertyNames.CONTAINING_CONTENT + '.' + com.coremedia.cap.content.ContentPropertyNames.LATEST_PUBLISHED_VERSION;
    return com.coremedia.ui.data.ValueExpressionFactory.create(expression, this);
  }/*

  private*/ function makeContentLatestVersionExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:**/ {
      var content/*:Content*/ = this$.getContainingContent();
      if (!content) {
        return undefined;
      }
      return content.getCheckedInVersion() || content.getCheckedOutVersion();
    });
  }/*

  override public*/ function removePropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    com.coremedia.cap.content.impl.ContentObjectImpl.prototype.removePropertyChangeListener.call(this,property, onChange);
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION && !this.hasListener(com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION)) {
      this.contentLatestApprovedVersionExpression$TTvH.removeChangeListener(AS3.bind(this,"contentLatestApprovedVersionChanged$TTvH"));
      this.contentLatestApprovedVersionExpression$TTvH = null;
    }
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION && !this.hasListener(com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION)) {
      this.contentLatestPublishedVersionExpression$TTvH.removeChangeListener(AS3.bind(this,"contentLatestPublishedVersionChanged$TTvH"));
      this.contentLatestPublishedVersionExpression$TTvH = null;
    }
    if (property === com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION && !this.hasListener(com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION)) {
      this.contentLatestVersionExpression$TTvH.removeChangeListener(AS3.bind(this,"contentLatestVersionChanged$TTvH"));
      this.contentLatestVersionExpression$TTvH = null;
    }
  }/*

  private*/ function contentLatestApprovedVersionChanged()/*:void*/ {
    this.setInternal(com.coremedia.cap.content.VersionPropertyNames.LATEST_APPROVED_VERSION, this.contentLatestApprovedVersionExpression$TTvH.getValue() === this);
  }/*

  private*/ function contentLatestPublishedVersionChanged()/*:void*/ {
    this.setInternal(com.coremedia.cap.content.VersionPropertyNames.LATEST_PUBLISHED_VERSION, this.contentLatestPublishedVersionExpression$TTvH.getValue() === this);
  }/*

  private*/ function contentLatestVersionChanged()/*:void*/ {
    this.setInternal(com.coremedia.cap.content.VersionPropertyNames.LATEST_VERSION, this.contentLatestVersionExpression$TTvH.getValue() === this);
  }/*

  override protected*/ function beforeUpdateProperty()/*:void*/ {
    com.coremedia.ui.logging.Logger.error('Can not update Version.');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentObjectImpl",
      mixins: ["com.coremedia.cap.content.Version"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{id:[0-9]+}/versions/{version:[0-9]+}"
        ]
      ]},
      contentLatestApprovedVersionExpression$TTvH: null,
      contentLatestPublishedVersionExpression$TTvH: null,
      contentLatestVersionExpression$TTvH: null,
      constructor: VersionImpl$,
      super$TTvH: function() {
        com.coremedia.cap.content.impl.ContentObjectImpl.prototype.constructor.apply(this, arguments);
      },
      get: get,
      getEditionDate: getEditionDate,
      getApprovalDate: getApprovalDate,
      getPublicationDate: getPublicationDate,
      getEditor: getEditor,
      getApprover: getApprover,
      getPublisher: getPublisher,
      getVersionNumber: getVersionNumber,
      isLatestApprovedVersion: isLatestApprovedVersion,
      isLatestPublishedVersion: isLatestPublishedVersion,
      isLatestVersion: isLatestVersion,
      getContainingContent: getContainingContent,
      addPropertyChangeListener: addPropertyChangeListener,
      makeContentLatestApprovedVersionExpression$TTvH: makeContentLatestApprovedVersionExpression,
      makeContentLatestPublishedVersionExpression$TTvH: makeContentLatestPublishedVersionExpression,
      makeContentLatestVersionExpression$TTvH: makeContentLatestVersionExpression,
      removePropertyChangeListener: removePropertyChangeListener,
      contentLatestApprovedVersionChanged$TTvH: contentLatestApprovedVersionChanged,
      contentLatestPublishedVersionChanged$TTvH: contentLatestPublishedVersionChanged,
      contentLatestVersionChanged$TTvH: contentLatestVersionChanged,
      beforeUpdateProperty: beforeUpdateProperty,
      requires: [
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.content.VersionPropertyNames",
        "com.coremedia.cap.content.impl.ContentObjectImpl",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
