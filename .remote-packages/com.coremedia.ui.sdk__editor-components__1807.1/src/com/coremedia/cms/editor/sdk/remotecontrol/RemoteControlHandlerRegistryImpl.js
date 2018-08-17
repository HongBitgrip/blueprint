Ext.define("com.coremedia.cms.editor.sdk.remotecontrol.RemoteControlHandlerRegistryImpl", function(RemoteControlHandlerRegistryImpl) {/*package com.coremedia.cms.editor.sdk.remotecontrol {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.WindowUtil;

import ext.Ext;

import joo.getOrCreatePackage;

import mx.resources.ResourceManager;

import net.jangaroo.net.URI;
import net.jangaroo.net.URIUtils;

/**
 * Remote control related stuff goes here.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RemoteControlHandlerRegistryImpl implements IRemoteControlHandlerRegistry {

  private const REMOTE_CONTROL_HANDLERS:Array =*/function REMOTE_CONTROL_HANDLERS_(){this.REMOTE_CONTROL_HANDLERS$beU1=( []);}/*;

  /**
   * This is the name of the parameter that is used for sending commands.
   * /
  public static const PARAMETERNAME_COMMAND:String = "command";

  /**
   * the name of the command open the content. It needs the parameter #PARAMETERNAME_BEAN
   * for the id of the element to open
   * /
  public static const COMMANDNAME_OPEN:String = "open";

  /**
   * the parameter for the bean id
   * /
  public static const PARAMETERNAME_BEAN:String = "bean";

  /**
   * the remote control html URI
   * /
  internal static const REMOTE_CONTROL_HTML:URI =*/function REMOTE_CONTROL_HTML$static_(){RemoteControlHandlerRegistryImpl.REMOTE_CONTROL_HTML=( net.jangaroo.net.URIUtils.parse("remoteControl.html"));}/*;*/

  function RemoteControlHandlerRegistryImpl$() {REMOTE_CONTROL_HANDLERS_.call(this);
  }/*

  /**
   * Initialize the current remote control handler service instance.
   * /
  public static*/ function initRemoteControlHandlerRegistry$static()/*:IRemoteControlHandlerRegistry*/ {
    if (!com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry) {
      com.coremedia.ui.logging.Logger.info(RemoteControlHandlerRegistryImpl + ": initializing singleton");
      joo.getOrCreatePackage("com.coremedia.cms.editor.sdk.remotecontrol").remoteControlHandlerRegistry = new RemoteControlHandlerRegistryImpl();
      com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry.registerRemoteControlHandler(RemoteControlHandlerRegistryImpl.handleContentRemotely);
    }
    return com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry;
  }/*

  public*/ function registerRemoteControlHandler(remoteControlHandler/*:Function*/)/*:void*/ {/*
    const*/var index/*:int*/ = this.REMOTE_CONTROL_HANDLERS$beU1.indexOf(remoteControlHandler);
    if (index < 0) {
      this.REMOTE_CONTROL_HANDLERS$beU1.push(remoteControlHandler);
    } else {
      com.coremedia.ui.logging.Logger.info(RemoteControlHandlerRegistryImpl + ": error handler already registered at index " + index);
    }
  }/*

  public static*/ function startObserving$static()/*: void*/ {/*
    const*/var self/*:RemoteControlHandlerRegistryImpl*/ = AS3.cast(RemoteControlHandlerRegistryImpl,com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry);/*
    const*/var hashParamsModel/*:Object*/ = com.coremedia.ui.util.WindowUtil.getHashParamsAsObject();
    // parse the URL to detect remote control commands in the fragment part of the URL
    self.handleRemoteControlCommands(hashParamsModel);
    com.coremedia.ui.util.WindowUtil.addHashChangeListener(function()/*:void*/ {
      self.handleRemoteControlCommands(com.coremedia.ui.util.WindowUtil.getHashParamsAsObject());
    });
  }/*

  internal*/ function handleRemoteControlCommands(hashParamsModel/*:Object*/)/*:void*/ {
    // check for the open command
    var command/*:String*/ = hashParamsModel[RemoteControlHandlerRegistryImpl.PARAMETERNAME_COMMAND];
    if (command) {
      if (command === RemoteControlHandlerRegistryImpl.COMMANDNAME_OPEN) {

        var remoteBeanURI/*:String*/ = hashParamsModel[RemoteControlHandlerRegistryImpl.PARAMETERNAME_BEAN];
        // we've read the interesting parts, so cleanup the URL
        removeRemoteControlCommands$static(hashParamsModel);

        if (remoteBeanURI) {
          var remoteBean/*:RemoteBean*/ = com.coremedia.ui.data.beanFactory.getRemoteBean(remoteBeanURI);
          // the first remoteControl function that can handle the remote command wins
          var remoteBeanInvalid/*:Boolean*/ = this.REMOTE_CONTROL_HANDLERS$beU1.every(function (remoteCaller/*:Function*/)/*:Boolean*/ {
            return !remoteCaller(remoteBean);
          });
          if (remoteBeanInvalid) {
            com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_item_not_exists'));
          }
        } else {
          // content id could not be extracted as int parameter from the url
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_document_not_specified'));
        }
      } else {
        com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_unknown_command_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_unknown_command_error'));
      }
    } // else no command gien
  }/*

  private static*/ function removeRemoteControlCommands$static(hashParamsModel/*:Object*/)/*:void*/ {
    delete hashParamsModel[RemoteControlHandlerRegistryImpl.PARAMETERNAME_COMMAND];
    delete hashParamsModel[RemoteControlHandlerRegistryImpl.PARAMETERNAME_BEAN];
    window.location.hash = '#' + Ext.urlEncode(hashParamsModel);
  }/*

  public*/ function createRemoteControlUrl(bean/*:RemoteBean*/)/*:String*/ {
    var uri/*:URI*/ = net.jangaroo.net.URIUtils.parse(window.location.toString()).resolve(RemoteControlHandlerRegistryImpl.REMOTE_CONTROL_HTML);/*
    const*/var commands/*:Object*/ = {};
    commands[RemoteControlHandlerRegistryImpl.PARAMETERNAME_COMMAND] = RemoteControlHandlerRegistryImpl.COMMANDNAME_OPEN;
    commands[RemoteControlHandlerRegistryImpl.PARAMETERNAME_BEAN] = bean.getUriPath();
    uri['fragment'] = Ext.urlEncode(commands);
    return uri.toString();
  }/*

  /**
   * Remote command handler for Content beans.
   *
   * @param content the RemoteBean to open
   * @return  true if the RemoteBean can be handled
   * /
  protected static*/ function handleContentRemotely$static(content/*:RemoteBean*/)/*:Boolean*/ {
    var contentToOpen/*:Content*/ =AS3.as( content,  com.coremedia.cap.content.Content);
    if (contentToOpen) {
      contentToOpen.load(function ()/*:void*/ {
        if (contentToOpen.isDestroyed()) {
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_item_not_exists'));
        } else if (contentToOpen.isFolder()) {
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_document_is_folder'));
        } else if (!content.getState().readable) {
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_document_is_not_readable'));
        } else if (contentToOpen.isDeleted()) {
          com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'RemoteControl_openContent_error_document_deleted'));
        } else {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(contentToOpen);
        }
      });
      return true;
    }
    return false;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.remotecontrol.IRemoteControlHandlerRegistry"],
      constructor: RemoteControlHandlerRegistryImpl$,
      registerRemoteControlHandler: registerRemoteControlHandler,
      handleRemoteControlCommands: handleRemoteControlCommands,
      createRemoteControlUrl: createRemoteControlUrl,
      statics: {
        PARAMETERNAME_COMMAND: "command",
        COMMANDNAME_OPEN: "open",
        PARAMETERNAME_BEAN: "bean",
        REMOTE_CONTROL_HTML: undefined,
        initRemoteControlHandlerRegistry: initRemoteControlHandlerRegistry$static,
        startObserving: startObserving$static,
        handleContentRemotely: handleContentRemotely$static,
        __initStatics__: function() {
          REMOTE_CONTROL_HTML$static_();
        }
      },
      requires: [
        "Ext",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.remotecontrol.IRemoteControlHandlerRegistry",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.WindowUtil",
        "mx.resources.ResourceManager",
        "net.jangaroo.net.URIUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
