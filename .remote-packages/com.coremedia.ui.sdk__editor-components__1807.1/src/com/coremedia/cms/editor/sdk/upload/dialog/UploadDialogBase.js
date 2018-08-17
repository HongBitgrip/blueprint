Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadDialogBase", function(UploadDialogBase) {/*package com.coremedia.cms.editor.sdk.upload.dialog {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.components.html5.BrowsePlugin;
import com.coremedia.cms.editor.sdk.foldercombo.FolderCombo;
import com.coremedia.cms.editor.sdk.upload.FileWrapper;
import com.coremedia.cms.editor.sdk.upload.UploadManager;
import com.coremedia.cms.editor.sdk.upload.UploadSettings;
import com.coremedia.cms.editor.sdk.util.ContentCreationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.MessageBox;
import ext.container.Container;
import ext.form.field.Checkbox;

/**
 * Base class of the upload dialog, contains the current
 * items marked for uploading
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class UploadDialogBase extends StudioDialog {
  protected static const UPLOAD_AREA_HEIGHT:int = 30;
  protected static const UPLOAD_AREA_COLLAPSED_HEIGHT:int = 25;
  protected static const UPLOAD_WINDOW_HEIGHT:int = 453;
  protected static const UPLOAD_WINDOW_WIDTH:int = 430;

  private static const*/var DROP_ZONE_COLLAPSED_CSS$static/*:String*/ = 'dialog-upload-helptext-collapsed';/*

  /**
   * The selected content if dialog opened from library or null
   * /
  [Bindable]
  public var content:Content;

  /**
   * The selected content if dialog opened from library or null
   * /
  [Bindable]
  public var file:FileWrapper;

  /**
   * Custom factory method for creating a custom FileWrapper object
   * that is used for uploading.
   * /
  [Bindable]
  public var customFileWrapperFactoryMethod:Function;

  /**
   * Function to call when finished uploading
   * /
  [Bindable]
  public var callback:Function;

  private var fileContainers:FileContainersObservable;
  private var dropAreaCollapsed:Boolean = false;
  private var pathCombo:FolderCombo;
  private var validationExpression:ValueExpression;

  /**
   * The settings used for this dialog.
   * /
  [Bindable]
  public var settings:UploadSettings;

  public*/ function UploadDialogBase$(config/*:UploadDialogBase = null*/) {if(arguments.length<=0)config=null;
    this.super$Hjuj(config);
  }/*

  /**
   * Some dialog initializations after setup...
   * /
  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);

    if (AS3.getBindable(this,"settings")) {
      var openInTabCheckbox/*:Checkbox*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.OPEN_IN_TAB_CHECKBOX),  Ext.form.field.Checkbox);
      openInTabCheckbox.setValue(AS3.getBindable(this,"settings").getOpenInTab());
    }

    this.pathCombo$Hjuj =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.FOLDER_COMBOBOX),  com.coremedia.cms.editor.sdk.foldercombo.FolderCombo);
  }/*

  protected*/ function getFolders()/*:Array*/ {
    var baseFolder/*:String*/ = this.baseFolderCalculation$Hjuj();
    if (baseFolder) {
      return [baseFolder];
    }
    return [];
  }/*

  private*/ function baseFolderCalculation()/*:String*/ {
    var path/*:String*/ = "/";
    if (AS3.getBindable(this,"content")) {
      path = AS3.getBindable(this,"content").getPath();
    }
    return path;
  }/*

  /**
   * Removes the given file container from the list of uploading files.
   * @param fileContainer
   * /
  public*/ function removeFileContainer(fileContainer/*:FileContainer*/)/*:void*/ {
    this.fileContainers$Hjuj.remove(fileContainer);
    //expand drop zone again?
    if (this.fileContainers$Hjuj.isEmpty()) {
      this.toggleDropZoneStatus$Hjuj();
    }
  }/*

  /**
   * The upload button handler, converts the selected files to FileWrapper objects.
   * @param browsePlugin the browse plugin used for the file selection and contains the file selection.
   * /
  protected*/ function uploadButtonHandler(browsePlugin/*:BrowsePlugin*/)/*:void*/ {
    var fileWrappers/*:Array*/ = [];
    var fileList/*:**/ = browsePlugin.getFileList();
    for (var i/*:int*/ = 0; i < fileList.length; i++) {
      var fileObject/*:**/ = fileList.item(i);
      fileWrappers.push(this.createFileWrapper$Hjuj(fileObject));
    }
    this.handleDrop(fileWrappers);
  }/*

  /**
   * Allows the creation of custom file objects using
   * the factory method passed as config param
   * @param fileObject the HTML5 file object
   * @return the FileWrapper object used for uploading
   * /
  private*/ function createFileWrapper(fileObject/*:**/)/*:FileWrapper*/ {
    if (AS3.getBindable(this,"customFileWrapperFactoryMethod")) {
      return AS3.getBindable(this,"customFileWrapperFactoryMethod")(fileObject);
    }
    return new com.coremedia.cms.editor.sdk.upload.FileWrapper(fileObject);
  }/*

  /**
   * Fired when a file object has been dropped on the target drop area.
   * The file drop plugin fire an event for each file that is dropped
   * and the corresponding action is handled here.
   * /
  protected*/ function handleDrop(files/*:Array*/)/*:void*/ {var this$=this;
    Ext.MessageBox.show({
      title: this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_progress_title'),
      msg: this.resourceManager.getString('com.coremedia.cms.editor.sdk.upload.Upload', 'Upload_progress_msg'),
      closable: false,
      width: 300
    });
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {//otherwise the progress bar does not appear :(
      for (var i/*:int*/ = 0; i < files.length; i++) {
        var fc/*:FileContainer*/ = AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.FileContainer,{});
        AS3.setBindable(fc,"file" , files[i]);
        AS3.setBindable(fc,"settings" , AS3.getBindable(this$,"settings"));
        AS3.setBindable(fc,"removeFileHandler" ,AS3.bind( this$,"removeFileContainer"));
        var fileContainer/*:FileContainer*/ = new com.coremedia.cms.editor.sdk.upload.dialog.FileContainer(fc);
        this$.fileContainers$Hjuj.add(fileContainer);
      }
      Ext.MessageBox.hide();
      this$.refreshUploadList$Hjuj();
    });
  }/*

  /**
   * Returns the value expression that enables/disables the upload button.
   * the status of the buttons depends on if all file panels on this dialog are valid.
   * @return
   * /
  protected*/ function getUploadButtonDisabledExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.validationExpression$Hjuj) {
      this.validationExpression$Hjuj = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        if (!this$.fileContainers$Hjuj) {
          this$.fileContainers$Hjuj = new com.coremedia.cms.editor.sdk.upload.dialog.FileContainersObservable();
          this$.fileContainers$Hjuj.getInvalidityExpression().setValue(true);
        }

        if (this$.fileContainers$Hjuj.getInvalidityExpression().getValue()) {
          return true;
        }


        if (!this$.pathCombo$Hjuj) {
          return true;
        }

        return !this$.pathCombo$Hjuj.getValidationExpression().getValue();
      });
    }
    return this.validationExpression$Hjuj;
  }/*

  //noinspection JSUnusedLocalSymbols
  /**
   * Stores the openInTab option into the settings bean
   * @param checkbox
   * @param checked
   * /
  protected*/ function openInTabHandler(checkbox/*:Checkbox*/, checked/*:Boolean*/)/*:void*/ {
    AS3.getBindable(this,"settings").setOpenInTab(checked);
  }/*

  /**
   * Rebuilds all panels representing a future upload.
   * /
  private*/ function refreshUploadList()/*:void*/ {
    //collapse the drop area if there are upload containers
    if (!this.fileContainers$Hjuj.isEmpty() && !this.dropAreaCollapsed$Hjuj) {
      this.toggleDropZoneStatus$Hjuj();
    }

    //clear and add list of upload containers
    var list/*:Container*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.UPLOAD_LIST),  Ext.container.Container);
    var fileContainer/*:FileContainer*/ = null;
    for (var i/*:int*/ = 0; i < this.fileContainers$Hjuj.size(); i++) {
      fileContainer = this.fileContainers$Hjuj.getAt(i);
      list.add(fileContainer);
    }
  }/*

  /**
   * Expands or collapses the drop zone status.
   * /
  private*/ function toggleDropZoneStatus()/*:void*/ {
    var dropArea/*:Container*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.DROP_BOX),  Ext.container.Container);
    if (!this.dropAreaCollapsed$Hjuj) {
      this.dropAreaCollapsed$Hjuj = true;
      dropArea.setHeight(UploadDialogBase.UPLOAD_AREA_COLLAPSED_HEIGHT);
      Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.DROP_LABEL).addCls(DROP_ZONE_COLLAPSED_CSS$static);
    }
    else {
      this.dropAreaCollapsed$Hjuj = false;
      dropArea.setHeight(UploadDialogBase.UPLOAD_AREA_HEIGHT);
      Ext.getCmp(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog.DROP_LABEL).removeCls(DROP_ZONE_COLLAPSED_CSS$static);
    }
  }/*

  protected*/ function getDefaultContentType(config/*:UploadDialog*/)/*:String*/ {
    if (AS3.getBindable(config,"settings")) {
      return AS3.getBindable(config,"settings").getDefaultContentType();
    }
    return null;
  }/*

  /**
   * Opens the progress upload and passes all the file wrapper and the upload dir to it.
   * /
  protected*/ function okPressed()/*:void*/ {
    var uploadDirectory/*:String*/ = this.pathCombo$Hjuj.getValue();
    if (!this.pathCombo$Hjuj.isVisible()) {
      uploadDirectory = null;
    }
    if (uploadDirectory && AS3.getBindable(this,"settings")) {
      com.coremedia.cms.editor.sdk.util.ContentCreationUtil.updateLastUsedBean(null, AS3.getBindable(this,"settings").getDefaultContentType(), uploadDirectory);
    }

    this.close();
    com.coremedia.cms.editor.sdk.upload.UploadManager.bulkUpload(AS3.getBindable(this,"settings"), uploadDirectory, this.fileContainers$Hjuj.getFiles(), false, AS3.getBindable(this,"callback"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      fileContainers$Hjuj: null,
      dropAreaCollapsed$Hjuj: false,
      pathCombo$Hjuj: null,
      validationExpression$Hjuj: null,
      constructor: UploadDialogBase$,
      super$Hjuj: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getFolders: getFolders,
      baseFolderCalculation$Hjuj: baseFolderCalculation,
      removeFileContainer: removeFileContainer,
      uploadButtonHandler: uploadButtonHandler,
      createFileWrapper$Hjuj: createFileWrapper,
      handleDrop: handleDrop,
      getUploadButtonDisabledExpression: getUploadButtonDisabledExpression,
      openInTabHandler: openInTabHandler,
      refreshUploadList$Hjuj: refreshUploadList,
      toggleDropZoneStatus$Hjuj: toggleDropZoneStatus,
      getDefaultContentType: getDefaultContentType,
      okPressed: okPressed,
      config: {
        content: null,
        file: null,
        customFileWrapperFactoryMethod: null,
        callback: null,
        settings: null
      },
      statics: {
        UPLOAD_AREA_HEIGHT: 30,
        UPLOAD_AREA_COLLAPSED_HEIGHT: 25,
        UPLOAD_WINDOW_HEIGHT: 453,
        UPLOAD_WINDOW_WIDTH: 430
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.window.MessageBox",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo",
        "com.coremedia.cms.editor.sdk.upload.FileWrapper",
        "com.coremedia.cms.editor.sdk.upload.UploadManager",
        "com.coremedia.cms.editor.sdk.upload.dialog.FileContainer",
        "com.coremedia.cms.editor.sdk.upload.dialog.FileContainersObservable",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog",
        "com.coremedia.cms.editor.sdk.util.ContentCreationUtil"
      ]
    };
});
