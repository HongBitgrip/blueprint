Ext.define("com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory", function(ProcessorFactory) {/*package com.coremedia.blueprint.base.components.quickcreate.processing {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResult;
import com.coremedia.cms.editor.sdk.util.ContentCreationUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.logging.Logger;

import mx.resources.ResourceManager;

/**
 * Factory for executing the post processing, depending on the given document type the
 * quick create dialog has been initialized with.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings')]
public class ProcessorFactory {
  public static var onSuccessHandlers:Bean =*/function onSuccessHandlers$static_(){ProcessorFactory.onSuccessHandlers=( com.coremedia.ui.data.beanFactory.createLocalBean());}/*;

  /**
   * Creates the content and invoked the post processor (if available).
   * @param data The user input.
   * @param callback The callback to call when processing is finished.
   * /
  public static*/ function process$static(data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {
    resolvePath$static(data, function(path/*:String*/)/*:void*/ {
    //first ensure that all folders exist
    com.coremedia.cms.editor.sdk.util.ContentCreationUtil.createRequiredSubfolders(path, function (result/*:FolderCreationResult*/)/*:void*/ {
      if (result.success) {
          AS3.trace('[INFO]', 'Quick create finished creation of path ' + path);

        //apply the folder instance to the processing data
        data.set(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.FOLDER_PROPERTY, result.baseFolder);

        //and create the content itself.
        com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Content*/ {
          var folder/*:**/ = data.getFolder();
          if(AS3.is(folder,  com.coremedia.cap.content.Content)) {
            return folder;
          }
          if(AS3.is(folder,  Function)) {
            return folder.call(null);
          }
        }).loadValue(function(parent/*:Content*/)/*:void*/ {
          com.coremedia.cms.editor.sdk.util.ContentCreationUtil.createContent(parent, false, data.doSkipInitializers(), data.getName(), data.getContentType(), function (content/*:Content*/)/*:void*/ {
            content.load(function ()/*:void*/ {
              //apply the created content to the processing data for post processing
              data.setContent(content);

              //sets the default values like string properties
              executeDefaultProcessing$static(data);

              //execute general custom handlers
              executeCustomPostProcessing$static(data, function ()/*:void*/ {
                //execute one time success handlers
                executeOnSuccessCall$static(data, function ()/*:void*/ {
                  AS3.trace('[INFO]', 'Quick create post processing finished, invoking callback with data: ' + data);
                  callback.call(null, data);
                });
              });
            });
          }, ProcessorFactory.onError);
        });
      }
    }, true);
    });
  }/*

  /**
   * Default error message with the given error
   * @param error the given remote error
   * /
  public static*/ function onError$static(error/*:RemoteError*/)/*:void*/ {
    com.coremedia.ui.logging.Logger.error('Request failed: ' + error.errorName + '/' + error.errorCode);
  }/*


  /**
   * Checks the folder property of the processing data.
   * Instead of a fix path a function can be passed that resolved the folder
   * depending on the given processing data.
   * @param data the current quick create data
   * @param callback the callback where the path value is passed.
   * /
  private static*/ function resolvePath$static(data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {
    AS3.trace('[INFO]', 'Quick create is resolving target path...');
    var path/*:String*/ =AS3.as( data.get(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.FOLDER_PROPERTY),  String);
    if(path) {
      callback.call(null, path);
    }
    else {
      var pathFunction/*:Function*/ =AS3.as( data.get(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.FOLDER_PROPERTY),  Function);
      pathFunction.call(null, data, callback);
    }
  }/*

  /**
   * Executes the success handler that has been declared for the content type.
   * These type of success handlers are executed for every content creation.
   * @param data
   * @param callback
   * /
  private static*/ function executeCustomPostProcessing$static(data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {
    var handlers/*:Array*/ = ProcessorFactory.onSuccessHandlers.get(data.getContentType().getName());
    if(handlers && handlers.length > 0) {
      var count/*:int*/ = handlers.length;
      AS3.trace('[INFO]', 'Executing ' + count + ' success handler(s) for content type ' + data.getContentType().getName());
      executeProcessorsSequential$static(0, data, handlers, callback);
    }
    else {
      callback.call(null);
    }
  }/*

  private static*/ function executeProcessorsSequential$static(count/*:int*/, data/*:ProcessingData*/, handlers/*:Array*/, callback/*:Function*/)/*:void*/ {
    if(count < handlers.length) {
      AS3.trace('INFO', "Finished sequential execution of post processor on position " + (count+1));
      executeSuccessHandler$static(handlers[count], data, function()/*:void*/ {
        count++;
        executeProcessorsSequential$static(count, data, handlers, callback);
      });
    }
    else {
      callback.call(null);
    }
  }/*

  /**
   * Executes the success handler declared for this dialog only. The handler has been passed
   * to the processing data, so it is only executed once.
   * @param data
   * @param callback
   * /
  private static*/ function executeOnSuccessCall$static(data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {
    var handler/*:Function*/ = data.getOnSuccessCall();
    AS3.trace('[INFO]', 'Executing success handler');
    executeSuccessHandler$static(handler, data, callback);
  }/*

  /**
   * Executes the given post processing handler.
   * @param handler
   * @param data
   * @param callback
   * /
  private static*/ function executeSuccessHandler$static(handler/*:Function*/, data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {
    if (handler) {
      handler.call(null, data.getContent(), data, function ()/*:void*/ {
        callback.call(null);
      });
    }
    else {
      callback.call(null);
    }
  }/*

  /**
   * Executes the default processing the standard properties of the content.
   * @param data The data instance that contains all user input.
   * /
  private static*/ function executeDefaultProcessing$static(data/*:ProcessingData*/)/*:void*/ {
    var content/*:Content*/ = data.getContent();
    var properties/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'item_' + content.getType().getName());
    if (properties) { //ok, there are custom properties defined for the content type
      //create property-names array
      var propertiesArray/*:Array*/ = properties.split(",");
      for (var i/*:int*/ = 0; i < propertiesArray.length; i++) {
        var propertyName/*:String*/ = propertiesArray[i];
        if (content.getType().getDescriptor(propertyName)) {
          var value/*:**/ = data.get(propertyName);
          if (value) {
            content.getProperties().set(propertyName, value);
          }
        }
        else {
          AS3.trace('[INFO]', 'Skipped processing of "' + propertyName + '": not a content property.');
        }
      }
    }
  }/*

  /**
   * Adds a success handler for the given content type, that is executed after the default processing.
   * @param contentType The content type to apply the success handler for.
   * @param onSuccess The method to call when the content has been created successfully.
   * /
  public static*/ function addSuccessHandler$static(contentType/*:String*/, onSuccess/*:Function*/)/*:void*/ {
    var handlers/*:Array*/ = ProcessorFactory.onSuccessHandlers.get(contentType) || [];
    handlers.push(onSuccess);
    ProcessorFactory.onSuccessHandlers.set(contentType, handlers);
  }/*
}*/function ProcessorFactory$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ProcessorFactory$,
      statics: {
        onSuccessHandlers: undefined,
        process: process$static,
        onError: onError$static,
        addSuccessHandler: addSuccessHandler$static,
        __initStatics__: function() {
          onSuccessHandlers$static_();
        }
      },
      requires: [
        "AS3.trace",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.util.ContentCreationUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.logging.Logger",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData"]
    };
});
