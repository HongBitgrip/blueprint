Ext.define("com.coremedia.cms.editor.EditorMain", function(EditorMain) {/*package com.coremedia.cms.editor {

import com.coremedia.cap.Cap;
import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cap.common.CapSession;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.CapConnectionImpl;
import com.coremedia.cap.user.Group;
import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.EditorPluginDescriptor;
import com.coremedia.cms.editor.sdk.LocalesService;
import com.coremedia.cms.editor.sdk.LocalesServiceImpl;
import com.coremedia.cms.editor.sdk.MessageServiceImpl;
import com.coremedia.cms.editor.sdk.RemoteErrorHandlers;
import com.coremedia.cms.editor.sdk.desktop.Startup;
import com.coremedia.cms.editor.sdk.desktop.SystemMessageUtil;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl;
import com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.login.AutoLogout;
import com.coremedia.cms.editor.sdk.login.LoginScreenBase;
import com.coremedia.cms.editor.sdk.login.LoginUtil;
import com.coremedia.cms.editor.sdk.remotecontrol.RemoteControlHandlerRegistryImpl;
import com.coremedia.cms.editor.sdk.sites.SitesServiceImpl;
import com.coremedia.cms.editor.sdk.util.LocaleUtilInternal;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.BrowserContextMenuManager;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.AsyncObserver;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.LayoutUtil;
import com.coremedia.ui.util.QtipUtil;
import com.coremedia.ui.util.RequestCounter;
import com.coremedia.ui.util.ReusableComponentsServiceImpl;
import com.coremedia.ui.util.UrlUtil;
import com.coremedia.ui.util.WindowUtil;
import com.coremedia.ui.util.testMode;

import ext.Component;
import ext.EventManager;
import ext.Ext;
import ext.MessageBox;
import ext.StringUtil;
import ext.dom.Element;
import ext.form.field.TimeField;
import ext.state.StateManager;
import ext.tip.QuickTipManager;

import joo.DynamicClassLoader;
import joo.getQualifiedObject;

import js.Event;
import js.KeyEvent;

import mx.resources.ResourceManager;

/**
 * Generic Editor startup
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class EditorMain {
  private static*/ var config$static/*:Object*/=null;/*
  private static*/ var invalidationRetrievalFailedErrorShown$static/*:Boolean*/ = false;/*


  /**
   * @private
   * A list of all plugins that have been loaded, having checked for
   * license and group constraints first.
   * /
  public static const loadedPlugins:Array =*/function loadedPlugins$static_(){EditorMain.loadedPlugins=( []);}/*;

  public static*/ function main$static(theConfig/*:Object = null*/)/*:void*/ {if(arguments.length<=0)theConfig=null;
    config$static = theConfig || {};
    checkTestMode$static();

    // Enable XTemplate extensions.
    com.coremedia.ui.util.QtipUtil.registerQtipFormatter();
    // Make sure that QuickTips are hidden when a context menu is opened.
    com.coremedia.ui.util.QtipUtil.registerQtipHider();

    if (com.coremedia.ui.util.testMode) {
      Ext.tip.QuickTipManager.disable();
    }

    /* TODO Ext6, see CMS-7874
    // ExtJS does not use the standard XmlHttpRequest callback to learn about a completed request
    // but uses polling instead. The standard poll interval of 50ms seems rather slow given that
    // the average network response time can be way less than 10ms.
    window.ext.lib.Ajax.pollInterval = 10;
     */

    // Disable auto linking for IE browsers as it produces invalid richtext (CMS-3442)
    if (window.document.execCommand) {
      window.document.execCommand("AutoUrlDetect", false, false);
    }

    // Workaround for CMS-2649.
    // See http://minds.coremedia.com/2014/12/03/midnight-in-moscow/ for details.
    Ext.form.field.Time['prototype']['initDate'] = "2/2/2008";

    // Workaround for memory leak when registering mousewheel event listeners.
    // Such listeners also register an unload listener, which causes a memory leak.
    // This code tricks the EventManager to ignore add requests for unload listeners
    // while a mousewheel listener is added. Ths has become quite convoluted because
    // the function in which the unload listener is registered cannot be patched.
    //
    // This code has been copied from Ext JS's EventManager class.
    var orgAddListener/*:Function*/ = Ext.EventManager['addListener'];
    var propRe/*:RegExp*/ = /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate)$/;
    var attachingMousewheelListener/*:Number*/ = 0;
    Ext.EventManager['addListener'] = function addListener(element/*:**/, eventName/*:**/, fn/*:**/, scope/*:**/, options/*:**/)/*:void*/ {
      if (attachingMousewheelListener && eventName === "unload") {
        return;
      }

      if (typeof eventName == 'object') {
        var o/*:**/ = eventName, val/*:**/;
        for (var e/*:String*/ in o) {
          val = o[e];
          if (!propRe.test(e)) {
            if (Ext.isFunction(val)) {
              Ext.EventManager.addListener(element, e, val, o.scope, o);
            } else {
              Ext.EventManager.addListener(element, e, undefined, undefined, options);
            }
          }
        }
      } else {
        var incr/*:Number*/ = eventName === "mousewheel" ? 1 : 0;
        attachingMousewheelListener += incr;
        try {
          orgAddListener(element, eventName, fn, scope, options);
        } finally {
          attachingMousewheelListener -= incr;
        }
      }
    };
    Ext.EventManager['on'] = Ext.EventManager['addListener'];
    if (Ext.dom.Element) {
      if (Ext.dom.Element['prototype']) {
        if (Ext.isGecko) {
          // DOMMouseScroll does not work for FF, so use MozMousePixelScroll
          Ext.dom.Element['prototype']['eventMap']['mousewheel'] = 'MozMousePixelScroll';
        }
        else if (Ext.isChrome || Ext.isSafari) {
          // Wheel break Studio for chrome, so use mousewheel instead
          // maybe this is based upon invalid wheel event on dom?
          Ext.dom.Element['prototype']['eventMap']['wheel'] = 'mousewheel';
        }
      }
    }

    // CMS-9374: added window listener for 'keydown' that will prevent the default behaviour when pressing delete or
    // backspace for non-editable components which would be modifing the current selection in window.getSelection()
    window.addEventListener("keydown", function (event/*:KeyEvent*/)/*:Boolean*/ {
      if (event.keyCode === KeyEvent.DOM_VK_BACK_SPACE || event.keyCode === KeyEvent.DOM_VK_DELETE) {
        var doPrevent/*:Boolean*/ = true;
        var from/*:**/ = event.srcElement || event.target;
        var disabled/*:Boolean*/ = from.getAttribute("readonly") || from.getAttribute("disabled");
        if (!disabled) {
          doPrevent = from.getAttribute("contenteditable") !== true
                  && from.getAttribute("contenteditable") !== "true"
                  && from.tagName.toLowerCase() !== "input"
                  && from.tagName.toLowerCase() !== "textarea";
        }
        if (doPrevent) {
          event.preventDefault();
          return false;
        }
      }
    }, true);

    com.coremedia.cms.editor.sdk.EditorContextImpl.initEditorContext();

    com.coremedia.ui.util.ReusableComponentsServiceImpl.initReusableComponentsService();

    com.coremedia.cms.editor.sdk.MessageServiceImpl.initMessageService();
    // register built-in remote error handlers
    com.coremedia.cms.editor.sdk.RemoteErrorHandlers.registerRemoteErrorHandlers(com.coremedia.cms.editor.sdk.editorContext.getRemoteErrorRegistry());
    com.coremedia.cms.editor.sdk.remotecontrol.RemoteControlHandlerRegistryImpl.initRemoteControlHandlerRegistry();

    //set the window title to localized name combined with version number from jangaroo-modules.js
    window.document.title = Ext.String.format(
      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'studio_window_title') || "CoreMedia Studio", coremediaStudioVersion
    );

    // show standard browser context menu for some ext components only
    com.coremedia.ui.BrowserContextMenuManager.getInstance().registerWindowListener();

    com.coremedia.cap.impl.CapImpl.prepare(function(connection/*:CapConnection*/)/*:void*/ {
      Ext.MessageBox.on("hide", function()/*:void*/ {
        // Wait a little before re-showing the dialog, so that listeners can react
        // to the hide/close event.
        com.coremedia.ui.util.EventUtil.invokeLater(showInvalidationsRetrievalFailedIfNecessary$static);
      });
      
      var capConnectionImpl/*:CapConnectionImpl*/ = AS3.cast(com.coremedia.cap.common.impl.CapConnectionImpl,connection);
      capConnectionImpl.setInvalidationsRetrievalStateHandler(invalidationRetrievalStateUpdated$static);

      // We need to ensure that we track all requests from the start.
      com.coremedia.ui.util.AsyncObserver.start();

      var loginService/*:CapLoginService*/ = connection.getLoginService();
      loginService.retrieveSession(function(session/*:CapSession*/)/*:void*/ {
        if (session) {
          EditorMain.startPolling();
        } else {
          loginService.load(function()/*:void*/ {
            // If so configured, redirect to external login URL.
            var loginUrl/*:String*/ = loginService.get("loginUrl");
            if (loginUrl) {
              window.location.href = loginUrl;
            } else {
              com.coremedia.cms.editor.sdk.login.LoginUtil.autoLogin(loginService, function (session/*:CapSession*/)/*:void*/ {
                if (session) {
                  EditorMain.startPolling();
                } else {
                  com.coremedia.cms.editor.sdk.login.LoginScreenBase.openLoginScreen(loginService, EditorMain.startPolling);
                }
              });
            }
          });
        }
      });
    });
  }/*

  private static*/ function checkTestMode$static()/*:void*/ {
    var testModeStr/*:String*/ = com.coremedia.ui.util.UrlUtil.getHashParam("testMode");
    com.coremedia.ui.util.testMode = ! !testModeStr && testModeStr.toLowerCase() !== "false";
  }/*

  private static*/ var lastInvalidationsOk$static/*:Boolean*/ = true;/*

  private static*/ function invalidationRetrievalStateUpdated$static(invalidationsOk/*:Boolean*/, error/*:RemoteError*/)/*:void*/ {
    // Control subsequent network traffic.
    if (!lastInvalidationsOk$static && invalidationsOk) {
      com.coremedia.ui.util.RequestCounter.networkProblemResolved();
    }
    if (lastInvalidationsOk$static && !invalidationsOk) {
      com.coremedia.ui.util.RequestCounter.networkProblemDetected();
    }
    lastInvalidationsOk$static = invalidationsOk;

    // Show message.
    if (invalidationsOk) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.hideIf(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidationsRetrievalFailed_title'),
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'invalidationsRetrievalFailed_text'),
              false);
    } else {
      // If the session has been definitively lost without any hope of recovering,
      // that message takes precedence.
      com.coremedia.cms.editor.sdk.RemoteErrorHandlers.handleSessionLost(error);

      // Otherwise show a wait dialog, but in any case make sure that a session loss error will never go away.
      showInvalidationsRetrievalFailedIfNecessary$static();
      error.setHandled(true);
    }
  }/*

  private static*/ function showInvalidationsRetrievalFailedIfNecessary$static()/*:void*/ {
    if (!lastInvalidationsOk$static && !Ext.MessageBox.isVisible()) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal.showWait(com.coremedia.cms.editor.EditorErrors_properties.INSTANCE.invalidationsRetrievalFailed_title,
              com.coremedia.cms.editor.EditorErrors_properties.INSTANCE.invalidationsRetrievalFailed_text, false);
    }
  }/*

  public static*/ function startPolling$static()/*:void*/ {
    // Start event fetching.
    AS3.cast(com.coremedia.cap.common.impl.CapConnectionImpl,com.coremedia.cap.common.SESSION.getConnection()).setAutomaticInvalidations(true, EditorMain.loadSystemInfos);
  }/*

  private static const*/var CONFIGURATION_RESOURCE_PATH$static/*:String*/ = "configuration";/*

  public static*/ function loadSystemInfos$static()/*:void*/ {
    com.coremedia.cap.common.SESSION.getConnection().getSystemInfo().load(EditorMain.loadConfiguration);
  }/*

  public static*/ function loadConfiguration$static()/*:void*/ {
    new com.coremedia.ui.data.impl.RemoteServiceMethod(CONFIGURATION_RESOURCE_PATH$static, "GET").request(null, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      com.coremedia.cms.editor.sdk.EditorContextImpl.getInstance().setConfiguration(response.getResponseJSON());
      EditorMain.preloadWorkflow();
    });
  }/*

  public static*/ function preloadWorkflow$static()/*:void*/ {
    var workflowRepository/*:RemoteBean*/ =AS3.as( com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository(),  com.coremedia.ui.data.RemoteBean);
    if(workflowRepository) {
      workflowRepository.load(EditorMain.loadSites);
    } else {
      com.coremedia.ui.logging.Logger.warn("Workflow repository not available");
      EditorMain.loadSites();
    }
  }/*

  public static*/ function loadSites$static()/*:void*/ {
    // Load sites resource.
    AS3.cast(com.coremedia.cms.editor.sdk.sites.SitesServiceImpl,com.coremedia.cms.editor.sdk.editorContext.getSitesService()).load(EditorMain.startEditor);
  }/*

  public static*/ function startEditor$static()/*:void*/ {
    Ext.state.Manager.setProvider(new com.coremedia.cms.editor.LocalStorageProvider());
    com.coremedia.ui.util.LayoutUtil.runWithLayouts(function ()/*:void*/ {
      Ext.MessageBox.progress(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'message_box_title'),
              mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'EditorMain_loading_text'));
    });
    Ext.MessageBox.updateProgress(0.001, "", mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'EditorMain_loading_text'));
    Ext.MessageBox['progressBar'].setMinWidth(370);
    Ext.MessageBox.center();

    Ext.tip.QuickTipManager.init(true);
    // Apply a set of config properties to the singleton
    Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
        showDelay: 500,
        dismissDelay: 20000
    });

    // don't activate unload warning if in debug or test mode
    com.coremedia.ui.util.WindowUtil.registerBeforeUnloadHandlerIfPossible(beforeUnload$static);

    // Make sure the standard objects are loaded.
    com.coremedia.cms.editor.sdk.login.LoginUtil.preload(loadLocales$static);
  }/*

  private static*/ function beforeUnload$static()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'studio_on_unload');
  }/*

  private static*/ function loadLocales$static()/*:void*/ {
    com.coremedia.cms.editor.sdk.util.LocaleUtilInternal.setPreferredLocale(); // may reload the application if preferred and current locale don't match!

    var localesService/*:LocalesService*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getLocalesService();
    AS3.cast(com.coremedia.cms.editor.sdk.LocalesServiceImpl,localesService).init(loadSiteStructure$static);
  }/*

  private static*/ function loadSiteStructure$static()/*:void*/ {
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
      return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSitesById();
    }).loadValue(loadPreferredSite$static);
  }/*

  private static*/ function loadPreferredSite$static()/*:void*/ {
    var preferredSite/*:String*/ = com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesProperty(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.PREFERRED_SITE);
    var preferredSiteExpression/*:ValueExpression*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteIdExpression();
    preferredSiteExpression.setValue(preferredSite);
    preferredSiteExpression.addChangeListener(savePreferredSite$static);

    loadPlugins$static();
  }/*

  private static*/ function savePreferredSite$static(source/*:ValueExpression*/)/*:void*/ {
    var preferredSiteId/*:String*/ = source.getValue();
    // Only store the preferred site when it is given. It might happen that there
    // is no current site while the site structure is loaded or while the
    // sites are reorganized.
    if (preferredSiteId) {
      com.coremedia.cms.editor.sdk.editorContext.getPreferences().set(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.PREFERRED_SITE, preferredSiteId);
    }
  }/*

  /**
   * instantiate all plugin classes and call their lifecycle method:
   * /
  private static*/ function loadPlugins$static()/*:void*/ {
    // start with the first plugin and progress to the next plugin when one plugin is really finished
    var packageDependencyOrder/*:Array*/ = Ext.manifest.packageDependencyOrder;

    var coremediaEditorPlugins/*:Array*/ = [];
    if (isCloudEnabled$static()) {
      coremediaEditorPlugins.push({
        "mainClass": "com.coremedia.cms.editor.sdk.cloud.CloudStudioPlugin",
        "name": "Cloud"
      });
    }

    for/* each*/ (var $1=0;$1</* in*/ packageDependencyOrder.length;++$1) {var packageName/*:String*/ =packageDependencyOrder[$1];
      var pluginJsonManifest/*:**/ = Ext.manifest.packages[packageName];
      var studioPlugins/*:Array*/ = pluginJsonManifest.studioPlugins;
      if (studioPlugins && studioPlugins.length) {
        studioPlugins.forEach(function (studioPlugin/*:Object*/)/*:void*/ {
          if (pluginJsonManifest.initWithoutRequestsComplete) {
            studioPlugin.initWithoutRequestsComplete = true;
          }
        });
        coremediaEditorPlugins = coremediaEditorPlugins.concat(studioPlugins);
      }
    }
    var appStudioPlugins/*:Array*/ = Ext.manifest.studioPlugins;
    if (appStudioPlugins && appStudioPlugins.length) {
      coremediaEditorPlugins = coremediaEditorPlugins.concat(appStudioPlugins);
    }

    checkPlugin$static(coremediaEditorPlugins, 0);
  }/*

  private static*/ function isCloudEnabled$static()/*:Boolean*/ {
    var cloudConfiguration/*:**/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()['cloud'];
    return cloudConfiguration && cloudConfiguration['enable'];
  }/*

  /**
   * A 'new' plugin descriptor should look like this:
   * {mainClass: 'classname', name: 'human readable name'}
   *
   * If it is still the 'old' style (a String), this function creates a descriptor for it.
   * @param descriptor the descriptor or a String with the mainClass
   * @return the descriptor
   * /
  private static*/ function parsePluginDescriptor$static(descriptor/*:Object*/)/*:EditorPluginDescriptor*/ {
    if (AS3.is(descriptor,  String)) {
      var editorPluginClassName/*:String*/ =AS3.as( descriptor,  String);
      var pluginName/*:String*/ = getPluginNameFromClassName$static(editorPluginClassName);
      var result/*:EditorPluginDescriptor*/ = new com.coremedia.cms.editor.sdk.EditorPluginDescriptor({
        mainClass: editorPluginClassName,
        name: pluginName
      });
      return result;
    }
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorPluginDescriptor,descriptor);
  }/*

  private static*/ function getPluginNameFromClassName$static(editorPluginClassName/*:String*/)/*:String*/ {
    return editorPluginClassName.substring(editorPluginClassName.lastIndexOf(".") + 1, editorPluginClassName.length);
  }/*

  private static*/ function checkPlugin$static(editorPlugins/*:Array*/, index/*:int*/)/*:void*/ {
    if (index === editorPlugins.length) {
      afterPluginsInitialized$static();
      return;
    }

    var pluginDescriptor/*:EditorPluginDescriptor*/ = parsePluginDescriptor$static(editorPlugins[index]);
    var feature/*:String*/ = pluginDescriptor.requiredLicenseFeature;
    if (feature && com.coremedia.cap.common.SESSION.getConnection().getSystemInfo().getLicenseFeatures().indexOf(feature) === -1) {
      com.coremedia.ui.logging.Logger.debug("Plugin " + pluginDescriptor.mainClass + " skipped, because it is not licensed.");
      // Avoid deep recursion.
      com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
        // Next plugin.
        checkPlugin$static(editorPlugins, index + 1);
      });
      return;
    }

    var requiredGroupName/*:String*/ = pluginDescriptor.requiredGroup;
    if (requiredGroupName) {
      com.coremedia.cap.common.SESSION.getConnection().getUserRepository().getGroupByName(requiredGroupName, function(requiredGroup/*:Group*/)/*:void*/ {
        if (requiredGroup) {
          com.coremedia.cap.common.SESSION.getUser().isMemberOf(requiredGroup, function(isMember/*:Boolean*/)/*:void*/ {
            if (isMember) {
              loadPlugin$static(editorPlugins, index, pluginDescriptor);
            } else {
              com.coremedia.ui.logging.Logger.debug("Plugin " + pluginDescriptor.mainClass + " skipped, because it is only activated for members of group '" + requiredGroupName + "'.");
              checkPlugin$static(editorPlugins, index + 1);
            }
          });
        } else {
          com.coremedia.ui.logging.Logger.debug("Plugin " + pluginDescriptor.mainClass + " skipped, because it is only activated for group '" + requiredGroupName + "', which does not exist.");
          checkPlugin$static(editorPlugins, index + 1);
        }
      });
    } else {
      loadPlugin$static(editorPlugins, index, pluginDescriptor);
    }
  }/*

  private static*/ function loadPlugin$static(editorPlugins/*:Array*/, index/*:int*/, pluginDescriptor/*:EditorPluginDescriptor*/)/*:void*/ {
    updateLoadingWindow$static(editorPlugins, index, pluginDescriptor);

    var editorPluginClassName/*:String*/ = pluginDescriptor.mainClass;
    com.coremedia.ui.logging.Logger.info("Loading plugin " + editorPluginClassName + "...");
    // let Jangaroo load plugin class:
    joo.DynamicClassLoader.INSTANCE.import_(editorPluginClassName);
    joo.DynamicClassLoader.INSTANCE.complete(function (imports/*:Object*/)/*:void*/ {
      // TODO Ext6, see CMS-7874
      try {
        var editorPlugin/*:EditorPlugin*/ =AS3.as( new (joo.getQualifiedObject(editorPluginClassName)),  com.coremedia.cms.editor.sdk.EditorPlugin);
        if (!editorPlugin) {
          throw new AS3.Error("Editor plugin classes must implement com.coremedia.cms.editor.sdk.EditorPlugin: " + editorPluginClassName);
        }
        editorPlugin.init(com.coremedia.cms.editor.sdk.editorContext);

        if (pluginDescriptor.initWithoutRequestsComplete) {
          com.coremedia.ui.util.AsyncObserver.completeEvents(function ()/*:void*/ {
            com.coremedia.ui.logging.Logger.debug("Plugin " + editorPluginClassName + " loaded and initialized.");
            checkPlugin$static(editorPlugins, index + 1);
          });
        } else {
          com.coremedia.ui.util.AsyncObserver.complete(function ()/*:void*/ {
            com.coremedia.ui.logging.Logger.debug("Plugin " + editorPluginClassName + " loaded and initialized.");
            checkPlugin$static(editorPlugins, index + 1);
          });
        }
      } catch(e){if(AS3.is (e,AS3.Error)) {
        // TODO Ext6, see CMS-7874
        AS3.trace("[WARN] ignoring error while loading ", editorPluginClassName, e);
        checkPlugin$static(editorPlugins, index + 1);
      }else throw e;}
    });
  }/*

  private static*/ function updateLoadingWindow$static(editorPlugins/*:Array*/, index/*:int*/, pluginDescriptor/*:EditorPluginDescriptor*/)/*:void*/ {
    var progress/*:Number*/ = (0.999/editorPlugins.length) * (index + 1.0);
    var pluginName/*:String*/ = pluginDescriptor.name ? pluginDescriptor.name : getPluginNameFromClassName$static(pluginDescriptor.mainClass);

    // Remember that the plugin has been loaded.
    EditorMain.loadedPlugins.push(pluginName);

    // Update the UI.
    if (pluginName.length > 35) {
      pluginName = pluginName.substr(0, 35) + "...";
    }
    var progressText/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'EditorMain_loadingProgress_text'), index + 1, editorPlugins.length);
    Ext.MessageBox.updateProgress(progress, progressText,  Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'EditorMain_loadingPlugin_text'),  pluginName));
  }/*


  private static*/ function afterPluginsInitialized$static()/*:void*/ {
    // Create a startup component, so that plugins registered with the component
    // get a chance to initialize the Studio.
    var startupComponent/*:Startup*/ = new com.coremedia.cms.editor.sdk.desktop.Startup();
    // The plugins have done their job. Do not keep the startup component around.
    startupComponent.destroy();

    // The plugins might have asynchronous operations running.
    com.coremedia.ui.util.AsyncObserver.complete(afterStartupComponentPluginInitialized$static);
  }/*

  private static*/ function afterStartupComponentPluginInitialized$static()/*:void*/ {
    com.coremedia.ui.logging.Logger.debug("Creating main view...");
    Ext.MessageBox.updateProgress(1,"",mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'EditorMain_loadingMainView_text'));
    config$static.listeners = {afterrender: com.coremedia.cms.editor.sdk.remotecontrol.RemoteControlHandlerRegistryImpl.startObserving};
    var editorMainView/*:String*/ = window['coremediaEditorMainView'] || "com.coremedia.cms.editor.sdk.desktop.EditorMainView";
    joo.DynamicClassLoader.INSTANCE.import_(editorMainView);
    joo.DynamicClassLoader.INSTANCE.complete(function()/*:void*/ {
      var mainView/*:Component*/ = new (joo.getQualifiedObject(editorMainView))(config$static);

      //prevent dragging of files into the browser; uses HTML5 data transfer feature for that.
      var el/*:Element*/ = mainView.getEl();
      mainView.mon(el, 'dragover', function(e/*:Event*/)/*:Boolean*/ {
        if(e['browserEvent']['dataTransfer']) {
          e['browserEvent']['dataTransfer'].dropEffect = 'none';
          e.stopPropagation();
          e.preventDefault();
          return false;
        } else {
          return true;
        }
      });

      AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl,com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager).init();

      //MessageBox recycles the window for new alerts, so
      //only close the message box if it is still the loading screen.
      if (Ext.MessageBox.isVisible() && Ext.MessageBox.getTitle() === mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'message_box_title')) {
        Ext.MessageBox.hide();
      }
      com.coremedia.ui.logging.Logger.debug("Main view created.");

      com.coremedia.cms.editor.sdk.desktop.SystemMessageUtil.attachSystemMessageListener();
      com.coremedia.ui.logging.Logger.debug("Listening to system messages.");

      com.coremedia.cms.editor.sdk.login.AutoLogout.init();
    });
  }/*
}*/function EditorMain$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: EditorMain$,
      statics: {
        loadedPlugins: undefined,
        main: main$static,
        startPolling: startPolling$static,
        loadSystemInfos: loadSystemInfos$static,
        loadConfiguration: loadConfiguration$static,
        preloadWorkflow: preloadWorkflow$static,
        loadSites: loadSites$static,
        startEditor: startEditor$static,
        __initStatics__: function() {
          loadedPlugins$static_();
        }
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.EventManager",
        "Ext.String",
        "Ext.dom.Element",
        "Ext.form.field.Time",
        "Ext.state.Manager",
        "Ext.tip.QuickTipManager",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.CapConnectionImpl",
        "com.coremedia.cap.impl.CapImpl",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.BrowserContextMenuManager",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.AsyncObserver",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.LayoutUtil",
        "com.coremedia.ui.util.QtipUtil",
        "com.coremedia.ui.util.RequestCounter",
        "com.coremedia.ui.util.ReusableComponentsServiceImpl",
        "com.coremedia.ui.util.UrlUtil",
        "com.coremedia.ui.util.WindowUtil",
        "com.coremedia.ui.util.testMode",
        "joo.DynamicClassLoader",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.LocalStorageProvider",
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.cms.editor.sdk.EditorPluginDescriptor",
        "com.coremedia.cms.editor.sdk.LocalesServiceImpl",
        "com.coremedia.cms.editor.sdk.MessageServiceImpl",
        "com.coremedia.cms.editor.sdk.RemoteErrorHandlers",
        "com.coremedia.cms.editor.sdk.desktop.Startup",
        "com.coremedia.cms.editor.sdk.desktop.SystemMessageUtil",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelManagerImpl",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.sidePanelManager",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.login.AutoLogout",
        "com.coremedia.cms.editor.sdk.login.LoginScreenBase",
        "com.coremedia.cms.editor.sdk.login.LoginUtil",
        "com.coremedia.cms.editor.sdk.remotecontrol.RemoteControlHandlerRegistryImpl",
        "com.coremedia.cms.editor.sdk.sites.SitesServiceImpl",
        "com.coremedia.cms.editor.sdk.util.LocaleUtilInternal",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtilInternal",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
