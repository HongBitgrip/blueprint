Ext.define("com.coremedia.cms.editor.sdk.upload.FileDropPluginBase", function(FileDropPluginBase) {/*package com.coremedia.cms.editor.sdk.upload {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Plugin;
import ext.container.Container;
import ext.dom.Element;
import ext.util.Observable;

/**
 * Fire notification to the passed drop event handler
 * if a file has been dropped to the container this plugin has been bind to.
 * /
public class FileDropPluginBase extends Observable implements Plugin {
  private var blobBoxCmp:Container;

  [Bindable]
  public var folderValueExpression:ValueExpression;

  [Bindable]
  public var uploadDisabledExpression:ValueExpression;

  /**
   * The function invoked when a file has been dropped to the panel the plugin has been added to.
   * /
  [Bindable]
  public var dropHandler:Function;

  [Bindable]
  public var onDragOverHandler:Function;

  [Bindable]
  public var onDragEndHandler:Function;

  /**
   * Custom factory method for creating a custom FileWrapper object
   * that is used for uploading.
   * /
  [Bindable]
  public var customFileWrapperFactoryMethod:Function;

  public*/ function FileDropPluginBase$(config/*:FileDropPluginBase = null*/) {this.super$Zho2();if(arguments.length<=0)config=null;
    AS3.setBindable(this,"dropHandler" , AS3.getBindable(config,"dropHandler") ||AS3.bind( this,"defaultDropHandler"));
    AS3.setBindable(this,"folderValueExpression" , AS3.getBindable(config,"folderValueExpression"));
    AS3.setBindable(this,"uploadDisabledExpression" , AS3.getBindable(config,"uploadDisabledExpression"));
    AS3.setBindable(this,"onDragOverHandler" , AS3.getBindable(config,"onDragOverHandler"));
    AS3.setBindable(this,"onDragEndHandler" , AS3.getBindable(config,"onDragEndHandler"));
    AS3.setBindable(this,"customFileWrapperFactoryMethod" , AS3.getBindable(config,"customFileWrapperFactoryMethod"));
  }/*

  public*/ function defaultDropHandler(files/*:Array*/, settings/*:UploadSettings*/)/*:void*/ {
    if (!AS3.getBindable(this,"folderValueExpression")) {
      throw new AS3.Error("No folderValueExpression configured for file upload plugin.");
    }

    var folder/*:Content*/ = AS3.getBindable(this,"folderValueExpression").getValue();
    com.coremedia.cms.editor.sdk.upload.UploadManager.upload(files, folder, settings);
  }/*

  /**
   * Adds the drop listener for the component the plugin has been added to.
   * @param cmp The component to register the listener for.
   * /
  public*/ function init(cmp/*:Component*/)/*:void*/ {
    this.blobBoxCmp$Zho2 =AS3.as( cmp,  Ext.container.Container);

    cmp.mon(cmp, "afterrender",AS3.bind( this,"initFileDrop$Zho2"), this);
  }/*

  /**
   * Add the concrete drag and drop listener for the element of the given component.
   * The listeners have to registered after render so that the element exists.
   * @param cmp The component to register the listeners for.
   * /
  private*/ function initFileDrop(cmp/*:Component*/)/*:void*/ {
    var el/*:Element*/ = cmp.getEl();
    el.on("dragover",AS3.bind( this,"onDragOver$Zho2"), this);
    el.on("dragend",AS3.bind( this,"onDragEnd$Zho2"), this);
    el.on("dragleave",AS3.bind( this,"onDragEnd$Zho2"), this);
    el.on("drop",AS3.bind( this,"onDrop$Zho2"), this);
  }/*

  private*/ function onDragEnd(e/*:**/)/*:void*/ {
    if (AS3.getBindable(this,"onDragEndHandler")) {
      AS3.getBindable(this,"onDragEndHandler")(e);
    }
  }/*

  /**
   * Event handler for the drag over events.
   * @param e The drag event object.
   * /
  private*/ function onDragOver(e/*:**/)/*:void*/ {
    if (AS3.getBindable(this,"uploadDisabledExpression") && AS3.getBindable(this,"uploadDisabledExpression").getValue()) {
      return;
    }

    //check write permissions
    if (AS3.getBindable(this,"folderValueExpression") && AS3.getBindable(this,"folderValueExpression").getValue()) {
      var folder/*:Content*/ = AS3.getBindable(this,"folderValueExpression").getValue();
      if (AS3.is(folder,  com.coremedia.cap.content.Content) && com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(folder)) {
        return;
      }
    }

    if (e.browserEvent && e.browserEvent.dataTransfer) {
      e.browserEvent.dataTransfer.dropEffect = 'copy';
    }
    e.stopEvent();
    this.blobBoxCmp$Zho2.fireEvent("dragover", this.blobBoxCmp$Zho2, e);

    if (AS3.getBindable(this,"onDragOverHandler")) {
      AS3.getBindable(this,"onDragOverHandler")(e);
    }
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
   * The event handler for the drop event.
   * @param e The drop event.
   * /
  private*/ function onDrop(e/*:**/)/*:void*/ {var this$=this;
    if (AS3.getBindable(this,"uploadDisabledExpression") && AS3.getBindable(this,"uploadDisabledExpression").getValue()) {
      return;
    }

    e.stopEvent(); //prevent additional events.

    var cmp/*:Component*/ = this.blobBoxCmp$Zho2,
            browserEvent/*:**/ = e.browserEvent,
            dataTransfer/*:**/ = browserEvent.dataTransfer,
            files/*:Array*/ = dataTransfer.files,
            numFiles/*:Number*/ = files.length,
            i/*:Number*/ = 0,
            file/*:**/;

    cmp.fireEvent("drop", cmp, e);

    //create a file wrapper for every dropped file object.
    var wrappers/*:Array*/ = [];
    for (; i < numFiles; i++) {
      file = files[i];
      var wrapper/*:FileWrapper*/ = this.createFileWrapper$Zho2(file);
      wrappers.push(wrapper);
    }

    var settings/*:UploadSettings*/ = new com.coremedia.cms.editor.sdk.upload.UploadSettings();
    settings.load(function ()/*:void*/ {
      AS3.getBindable(this$,"dropHandler").call(null, wrappers, settings);
    });


    if (AS3.getBindable(this,"onDragEndHandler")) {
      AS3.getBindable(this,"onDragEndHandler")(e);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["ext.Plugin"],
      blobBoxCmp$Zho2: null,
      constructor: FileDropPluginBase$,
      super$Zho2: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      defaultDropHandler: defaultDropHandler,
      init: init,
      initFileDrop$Zho2: initFileDrop,
      onDragEnd$Zho2: onDragEnd,
      onDragOver$Zho2: onDragOver,
      createFileWrapper$Zho2: createFileWrapper,
      onDrop$Zho2: onDrop,
      config: {
        folderValueExpression: null,
        uploadDisabledExpression: null,
        dropHandler: null,
        onDragOverHandler: null,
        onDragEndHandler: null,
        customFileWrapperFactoryMethod: null
      },
      requires: [
        "AS3.Error",
        "Ext.container.Container",
        "Ext.util.Observable",
        "com.coremedia.cap.content.Content",
        "ext.Plugin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.upload.FileWrapper",
        "com.coremedia.cms.editor.sdk.upload.UploadManager",
        "com.coremedia.cms.editor.sdk.upload.UploadSettings",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil"
      ]
    };
});
