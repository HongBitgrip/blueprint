Ext.define("com.coremedia.cms.editor.sdk.sites.CloneSiteProcessMonitor", function(CloneSiteProcessMonitor) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.TaskPropertyNames;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.LocalesService;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.PropertyPathExpression;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class CloneSiteProcessMonitor {
  private static const*/var ERROR_TITLE$static/*:String*/;/* =*/function ERROR_TITLE$static_(){ERROR_TITLE$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteError_title'));};/*

  private var process:Process;
  private var sitesService:ExtendedSitesServiceImpl;

  private var derivedSiteDummy:SiteImpl;
  private var valueExpressions:Array =*/function valueExpressions_(){this.valueExpressions$0UmJ=( []);}/*;

  private var masterSite:Site;
  private var targetLocale:Locale;

  private var abortedMessage:String;
  private var escalatedMessage:String;

  public*/ function CloneSiteProcessMonitor$(process/*:Process*/, sitesService/*:ExtendedSitesServiceImpl*/) {valueExpressions_.call(this);
    this.process$0UmJ = process;
    this.sitesService$0UmJ = sitesService;

    this.masterSite$0UmJ = sitesService.getSite(process.getProperties().get('masterSiteId'));
    this.targetLocale$0UmJ = getLocale$static(process.getProperties().get('targetLocale'));

    this.abortedMessage$0UmJ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteError_aborted'),
            this.masterSite$0UmJ.getName(), this.targetLocale$0UmJ.getDisplayName());
    this.escalatedMessage$0UmJ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteError_escalated'),
            this.masterSite$0UmJ.getName(), this.targetLocale$0UmJ.getDisplayName());

    process.addValueChangeListener(AS3.bind(this,"processChanged$0UmJ"));

    this.addListener$0UmJ(com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.workflow.ProcessPropertyNames.COMPLETED, process),AS3.bind( this,"processCompleted$0UmJ"));
    this.addListener$0UmJ(com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.workflow.ProcessPropertyNames.ABORTED, process),AS3.bind( this,"processAborted$0UmJ"));

    for (var i/*:int*/ = 0; i < process.getTasks().length; i++) {
      var task/*:Task*/ = process.getTasks()[i];
      this.addListener$0UmJ(com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.workflow.TaskPropertyNames.ESCALATED, task),AS3.bind( this,"taskEscalated$0UmJ"));
      this.addListener$0UmJ(com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.workflow.TaskPropertyNames.ABORTED, task),AS3.bind( this,"taskAborted$0UmJ"));
    }
  }/*

  private*/ function addListener(valueExpression/*:ValueExpression*/, listener/*:Function*/)/*:void*/ {
    valueExpression.addChangeListener(listener);
    this.valueExpressions$0UmJ.push({valueExpression: valueExpression, listener: listener});
  }/*

  private*/ function removeListeners()/*:void*/ {
    this.process$0UmJ.removeValueChangeListener(AS3.bind(this,"processChanged$0UmJ"));

    for (var i/*:int*/ = 0; i < this.valueExpressions$0UmJ.length; i++) {
      var obj/*:Object*/ = this.valueExpressions$0UmJ[i];
      AS3.cast(com.coremedia.ui.data.ValueExpression,obj.valueExpression).removeChangeListener(obj.listener);
    }
    this.valueExpressions$0UmJ = [];
  }/*

  private*/ function processChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    if (event.oldValue && !event.oldValue.derivedSiteId &&
            event.newValue && event.newValue.derivedSiteId) {
      var derivedSiteId/*:String*/ = event.newValue.derivedSiteId;
      this.createSiteDummy$0UmJ(derivedSiteId);
    }

    if (!this.process$0UmJ.getState().exists) {
      this.destroySiteDummy$0UmJ();
      this.removeListeners$0UmJ();
    } else if (this.process$0UmJ.isAborted()) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(ERROR_TITLE$static, this.abortedMessage$0UmJ,AS3.bind( this,"destroySiteDummy$0UmJ"));
      this.removeListeners$0UmJ();
    } else if (!this.process$0UmJ.isRunning() || this.process$0UmJ.isNotRunning() || this.process$0UmJ.isCompleted() || this.process$0UmJ.isClosed()) {
      this.destroySiteDummy$0UmJ();
      this.removeListeners$0UmJ();
    }
  }/*

  private*/ function processCompleted(source/*:ValueExpression*/)/*:void*/ {
    if (source.getValue()) {
      this.destroySiteDummy$0UmJ();
      this.removeListeners$0UmJ();
    }
  }/*

  private*/ function processAborted(source/*:ValueExpression*/)/*:void*/ {
    if (source.getValue()) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(ERROR_TITLE$static, this.abortedMessage$0UmJ,AS3.bind( this,"destroySiteDummy$0UmJ"));
      this.removeListeners$0UmJ();
    }
  }/*

  private*/ function taskAborted(source/*:PropertyPathExpression*/)/*:void*/ {var this$=this;
    if (source.getValue()) {
      this.removeListeners$0UmJ();

      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(ERROR_TITLE$static, this.abortedMessage$0UmJ,
              function ()/*:void*/ {
                this$.destroySiteDummy$0UmJ();
                this$.process$0UmJ.abort();
              });
    }
  }/*

  private*/ function taskEscalated(source/*:PropertyPathExpression*/)/*:void*/ {var this$=this;
    if (source.getValue()) {
      this.removeListeners$0UmJ();

      var task/*:Task*/ =AS3.as( source.getBean(),  com.coremedia.cap.workflow.Task);
      new com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialog(AS3.cast(com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialog,{title: ERROR_TITLE$static, task: task, message: this.escalatedMessage$0UmJ,
        callback: function ()/*:void*/ {
          this$.destroySiteDummy$0UmJ();
          this$.process$0UmJ.abort();
        }
      })).show();
    }
  }/*

  private*/ function createSiteDummy(derivedSiteId/*:String*/)/*:void*/ {var this$=this;
    this.process$0UmJ.load(function ()/*:void*/ {
      this$.derivedSiteDummy$0UmJ = new com.coremedia.cms.editor.sdk.sites.SiteImpl(derivedSiteId, null, this$.masterSite$0UmJ.getId(), null, null,
              this$.masterSite$0UmJ.getName(), this$.targetLocale$0UmJ, null, false, true);
      this$.sitesService$0UmJ.addSiteUnderConstruction(this$.derivedSiteDummy$0UmJ);
    });
  }/*

  private*/ function destroySiteDummy()/*:void*/ {
    if (this.derivedSiteDummy$0UmJ) {
      this.sitesService$0UmJ.removeSiteUnderConstruction(this.derivedSiteDummy$0UmJ);
      this.derivedSiteDummy$0UmJ = null;
    }
  }/*

  private static*/ function getLocale$static(localeTag/*:String*/)/*:Locale*/ {
    var localesService/*:LocalesService*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getLocalesService();
    return localesService.getLocale(localeTag) || com.coremedia.ui.data.Locale.forLanguageTag(localeTag);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      process$0UmJ: null,
      sitesService$0UmJ: null,
      derivedSiteDummy$0UmJ: null,
      masterSite$0UmJ: null,
      targetLocale$0UmJ: null,
      abortedMessage$0UmJ: null,
      escalatedMessage$0UmJ: null,
      constructor: CloneSiteProcessMonitor$,
      addListener$0UmJ: addListener,
      removeListeners$0UmJ: removeListeners,
      processChanged$0UmJ: processChanged,
      processCompleted$0UmJ: processCompleted,
      processAborted$0UmJ: processAborted,
      taskAborted$0UmJ: taskAborted,
      taskEscalated$0UmJ: taskEscalated,
      createSiteDummy$0UmJ: createSiteDummy,
      destroySiteDummy$0UmJ: destroySiteDummy,
      statics: {
        ERROR_TITLE: undefined,
        __initStatics__: function() {
          ERROR_TITLE$static_();
        }
      },
      requires: [
        "Ext.String",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.TaskPropertyNames",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.data.Locale",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.CloneSiteErrorDialog",
        "com.coremedia.cms.editor.sdk.sites.SiteImpl",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
