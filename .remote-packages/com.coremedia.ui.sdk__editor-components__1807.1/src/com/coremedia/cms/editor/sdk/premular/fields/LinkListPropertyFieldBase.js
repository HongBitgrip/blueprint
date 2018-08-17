Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldBase", function(LinkListPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.cms.editor.sdk.upload.UploadManager;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.StringUtil;

import mx.resources.ResourceManager;

[PublicApi]
public class LinkListPropertyFieldBase extends AdvancedFieldContainer implements IValidationStateMixin {

  private var selectedPositionsExpression:ValueExpression;
  private var selectedValuesExpression:ValueExpression;
  private var selectedPositions:*;
  private var selectedItems:*;
  private var uploadDisabledExpression:ValueExpression;
  private var internalUploadFolderValueExpression:ValueExpression;

  /**
   * Value expression to the upload target directory
   * /
  [Bindable]
  public var uploadFolderValueExpression:ValueExpression;

  /**
   * Value expression to the Content
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
   * but to override this or provide an initial value for link properties in Structs that are created by this
   * property field, you may specify a custom link type.
   * /
  [Bindable]
  public var linkType:String;

  [Bindable]
  public var rowWidgetsAnnotatedPredicates:Array;

  /**
   * Optional handler for system file drops.
   * /
  [Bindable]
  public var fileDropHandler:Function;

  private var currentlyBoundContent:Content;

  private var forceReadOnlyValueExpression:ValueExpression;
  private var currentReadOnlyState:Boolean;

  private var linkListWrapper:ILinkListWrapper;

  public*/ function LinkListPropertyFieldBase$(config/*:LinkListPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$e7wh(config);

    this.initValidationStateMixin();

    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.getBindable(this,"bindTo").addChangeListener(AS3.bind(this,"updateStoringContent$e7wh"));
    this.updateStoringContent$e7wh();

    this.forceReadOnlyValueExpression$e7wh = AS3.getBindable(config,"forceReadOnlyValueExpression");
    if (this.forceReadOnlyValueExpression$e7wh) {
      this.forceReadOnlyValueExpression$e7wh.addChangeListener(AS3.bind(this,"updateForceReadOnlyStatus$e7wh"));
      this.updateForceReadOnlyStatus$e7wh();
    }

    this.linkListWrapper$e7wh = AS3.getBindable(config,"linkListWrapper");
  }/*

  /**
   * The name of the property edited by this property field.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * Return a value expression evaluating to an array of selected positions (indexes) in the link list.
   * @return a value expression evaluating to an array of selected position
   * /
  public*/ function getSelectedPositionsExpression()/*:ValueExpression*/ {
    return this.selectedPositionsExpression$e7wh || (this.selectedPositionsExpression$e7wh = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.SELECTED_POSITIONS_VARIABLE_NAME, this));
  }/*

  /**
   * Return a value expression evaluating to an array of selected values (elements) in the link list.
   * @return a value expression evaluating to an array of selected values
   * /
  public*/ function getSelectedValuesExpression()/*:ValueExpression*/ {
    return this.selectedValuesExpression$e7wh || (this.selectedValuesExpression$e7wh = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME, this));
  }/*

  /**
   * Returns a value expression that calculates if a system file drop is allowed on this component.
   * @param bindTo the current content
   * @param uploadFolderValueExpression optional custom folder ValueExpression
   * @return a value expression with the disabled state
   * /
  public*/ function getUploadDisabledValueExpression(bindTo/*:ValueExpression*/, uploadFolderValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    if (!this.uploadDisabledExpression$e7wh) {
      this.uploadDisabledExpression$e7wh = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var content/*:Content*/ = bindTo.getValue();
        if (!content.isInProduction()) {
          return true;
        }

        if (com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(content)) {
          return true;
        }

        //check folder permissions
        var folder/*:Content*/ = this$.getUploadFolderExpression(bindTo, uploadFolderValueExpression).getValue();
        if (!folder || com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(folder)) {
          return true;
        }

        return false;
      });
    }
    return this.uploadDisabledExpression$e7wh;
  }/*

  /**
   * Returns the value expression that contains the folder where to upload a system file that
   * has been dropped on this component
   * @param bindTo the current content of the premular
   * @param uploadFolderValueExpression optional custom folder ValueExpression
   * @return the value expression that contains the folder content object
   * /
  public*/ function getUploadFolderExpression(bindTo/*:ValueExpression = null*/, uploadFolderValueExpression/*:ValueExpression = null*/)/*:ValueExpression*/ {switch(arguments.length){case 0:bindTo=null;case 1:uploadFolderValueExpression=null;}
    if (!this.internalUploadFolderValueExpression$e7wh) {
      this.internalUploadFolderValueExpression$e7wh = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Content*/ {
        if (uploadFolderValueExpression) {
          return uploadFolderValueExpression.getValue();
        }

        var content/*:Content*/ = bindTo.getValue();
        return content.getParent();
      });
    }
    return this.internalUploadFolderValueExpression$e7wh;
  }/*

  /**
   * Handles the visual update after the file drop has left this component.
   * /
  protected*/ function onFileDragEnd()/*:void*/ {
    this.setHighlighted(false);
  }/*

  /**
   * Handles the visual update during the file hover
   * /
  protected*/ function onFileDragOver()/*:void*/ {
    this.setHighlighted(true);
  }/*

  /**
   * The default system file drop handler for link lists
   * @param files the FileWrapper objects which contain the HTML5 files
   * @param settings the upload settings
   * /
  protected*/ function linkListFileDropHandler(files/*:Array*/, settings/*:UploadSettings*/)/*:void*/ {var this$=this;
    //check if a custom drop handler has been registered
    if (AS3.getBindable(this,"fileDropHandler")) {
      AS3.getBindable(this,"fileDropHandler").call(null, files, settings);
      return;
    }

    if (!this.isValidUpload$e7wh(files, settings)) {
      return;
    }

    com.coremedia.cms.editor.sdk.upload.UploadManager.upload(files, this.getUploadFolderExpression().getValue(), settings, true, function (result/*:Array*/)/*:void*/ {
      var appendContent/*:Array*/ = [];
      for/* each*/(var $1=0;$1</* in*/ result.length;++$1) {var uploadFile/*:FileWrapper*/ =result[$1];
        var newContent/*:Content*/ =AS3.as( uploadFile.getResultObject(),  com.coremedia.cap.content.Content);
        if (newContent) {
          if (!AS3.getBindable(this$,"linkType") || newContent.getType().isSubtypeOf(AS3.getBindable(this$,"linkType"))) {
            appendContent.push(newContent);
          }
        }
      }

      //update the link list content
      if (this$.linkListWrapper$e7wh) {
        if (this$.linkListWrapper$e7wh.acceptsLinks(appendContent)) {
          this$.linkListWrapper$e7wh.addLinks(appendContent);
        }
      } else {
        var content/*:Content*/ = AS3.getBindable(this$,"bindTo").getValue();
        var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + "." + AS3.getBindable(this$,"propertyName"), content);
        var existingLinks/*:Array*/ = ve.getValue();
        var linkListResult/*:Array*/ = existingLinks.concat(appendContent);
        ve.setValue(linkListResult);
      }

      this$.onFileDragEnd(); //just to be sure
    });
  }/*

  public*/ function setHighlighted(highlighted/*:Boolean*/)/*:void*/ {
    var grid/*:LinkListPropertyFieldGridPanel*/ =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.GRID_ITEM_ID),  com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel);
    AS3.setBindable(grid,"highlighted" , highlighted);
  }/*

  [ProvideToExtChildren]
  public*/ function getSelectedItems()/*:**/ {
    return this.selectedItems$e7wh;
  }/*

  public*/ function setSelectedItems(value/*:**/)/*:void*/ {
    var oldValue/*:**/ = this.selectedItems$e7wh;
    this.selectedItems$e7wh = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  [ProvideToExtChildren]
  public*/ function getSelectedPositions()/*:**/ {
    return this.selectedPositions$e7wh;
  }/*

  public*/ function setSelectedPositions(value/*:**/)/*:void*/ {
    var oldValue/*:**/ = this.selectedPositions$e7wh;
    this.selectedPositions$e7wh = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.SELECTED_POSITIONS_VARIABLE_NAME, oldValue, value);
  }/*

  private*/ function updateStoringContent()/*:void*/ {
    var oldValue/*:Content*/ = this.currentlyBoundContent$e7wh;
    this.currentlyBoundContent$e7wh =AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.cap.content.Content);
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.BOUND_CONTENT_VARIABLE_NAME, oldValue, this.currentlyBoundContent$e7wh);
  }/*

  [ProvideToExtChildren(variable='linkListStoringContent')]
  internal*/ function getStoringContent()/*:**/ {
    return this.currentlyBoundContent$e7wh;
  }/*

  internal*/ function setStoringContent(content/*:**/)/*:void*/ {
    // read only.
  }/*

  /**
   * Validates the file drop
   * @param files the files that have been dropped
   * @param settings the upload settings to verify the target content type
   * @return true if the drop is valid
   * /
  private*/ function isValidUpload(files/*:Array*/, settings/*:UploadSettings*/)/*:Boolean*/ {
    for/* each*/(var $1=0;$1</* in*/ files.length;++$1) {var file/*:FileWrapper*/ =files[$1];
      var mappedDocumentType/*:String*/ = com.coremedia.cms.editor.sdk.upload.UploadManager.getMappedDocumentType(file, settings);
      if (!mappedDocumentType) {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_title'),
                mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_empty_type_error'));
        return false;
      }

      var targetContentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(mappedDocumentType);
      var contentType/*:ContentType*/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.getTargetContentType(AS3.getBindable(this,"bindTo"), AS3.getBindable(this,"propertyName"), AS3.getBindable(this,"linkType"));

      if (!(targetContentType.isSubtypeOf(contentType))) {
        var msgTemplate/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_type_error');
        var sourceContentTypeName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLabelForContentType(contentType);
        var targetContentTypeName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLabelForContentType(targetContentType);
        var msg/*:String*/ = Ext.String.format(msgTemplate, file.getMimeType(), targetContentTypeName, sourceContentTypeName);

        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Blob_uploadError_title'), msg);
        return false;
      }
    }
    return true;
  }/*

  private*/ function updateForceReadOnlyStatus()/*:void*/ {
    var oldValue/*:Boolean*/ = this.currentReadOnlyState$e7wh;
    this.currentReadOnlyState$e7wh =AS3.as( this.forceReadOnlyValueExpression$e7wh.getValue(),  Boolean);
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField.FORCE_READ_ONLY_VARIABLE_NAME, oldValue, this.currentReadOnlyState$e7wh);
  }/*

  [ProvideToExtChildren(variable='linkListForceReadOnly')]
  internal*/ function getForceReadOnlyState()/*:Boolean*/ {
    return this.currentReadOnlyState$e7wh;
  }/*

  internal*/ function setForceReadOnlyState(value/*:**/)/*:void*/ {
    // read only.
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.ui.components.AdvancedFieldContainer.prototype.onDestroy.call(this);
    AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"updateStoringContent$e7wh"));
    if (this.forceReadOnlyValueExpression$e7wh) {
      this.forceReadOnlyValueExpression$e7wh.removeChangeListener(AS3.bind(this,"updateForceReadOnlyStatus$e7wh"));
    }
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {
        "": ["PublicApi"],
        getSelectedItems: ["ProvideToExtChildren"],
        getSelectedPositions: ["ProvideToExtChildren"],
        getStoringContent: [
          "ProvideToExtChildren",
          [
            "variable",
            "linkListStoringContent"
          ]
        ],
        getForceReadOnlyState: [
          "ProvideToExtChildren",
          [
            "variable",
            "linkListForceReadOnly"
          ]
        ]
      },
      selectedPositionsExpression$e7wh: null,
      selectedValuesExpression$e7wh: null,
      selectedPositions$e7wh: undefined,
      selectedItems$e7wh: undefined,
      uploadDisabledExpression$e7wh: null,
      internalUploadFolderValueExpression$e7wh: null,
      currentlyBoundContent$e7wh: null,
      forceReadOnlyValueExpression$e7wh: null,
      currentReadOnlyState$e7wh: false,
      linkListWrapper$e7wh: null,
      constructor: LinkListPropertyFieldBase$,
      super$e7wh: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      getSelectedPositionsExpression: getSelectedPositionsExpression,
      getSelectedValuesExpression: getSelectedValuesExpression,
      getUploadDisabledValueExpression: getUploadDisabledValueExpression,
      getUploadFolderExpression: getUploadFolderExpression,
      onFileDragEnd: onFileDragEnd,
      onFileDragOver: onFileDragOver,
      linkListFileDropHandler: linkListFileDropHandler,
      setHighlighted: setHighlighted,
      getSelectedItems: getSelectedItems,
      setSelectedItems: setSelectedItems,
      getSelectedPositions: getSelectedPositions,
      setSelectedPositions: setSelectedPositions,
      updateStoringContent$e7wh: updateStoringContent,
      getStoringContent: getStoringContent,
      setStoringContent: setStoringContent,
      isValidUpload$e7wh: isValidUpload,
      updateForceReadOnlyStatus$e7wh: updateForceReadOnlyStatus,
      getForceReadOnlyState: getForceReadOnlyState,
      setForceReadOnlyState: setForceReadOnlyState,
      onDestroy: onDestroy,
      config: {
        uploadFolderValueExpression: null,
        bindTo: null,
        linkType: null,
        rowWidgetsAnnotatedPredicates: null,
        fileDropHandler: null,
        propertyName: null
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyFieldGridPanel",
        "com.coremedia.cms.editor.sdk.upload.UploadManager",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
