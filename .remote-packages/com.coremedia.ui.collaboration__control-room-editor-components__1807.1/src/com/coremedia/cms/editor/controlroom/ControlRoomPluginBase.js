Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomPluginBase", function(ControlRoomPluginBase) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.cap.workflow.Process;
import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase;
import com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils;
import com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.premular.DocumentFormToolbar;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;

import ext.panel.Panel;

public class ControlRoomPluginBase extends StudioPlugin {

  private var filterWfReqBatchSize:int;

  public*/ function ControlRoomPluginBase$(config/*:ControlRoomPlugin = null*/) {if(arguments.length<=0)config=null;
    if(!com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance()) {
      AS3.trace("[WARN] cap list repository is not available, disabling control room");
      return;
    }

    this.super$MJv0(config);

    this.filterWfReqBatchSize$MJv0 = config.filterWfRequestBatchSize;
  }/*

  override public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    com.coremedia.cms.editor.controlroom.ControlRoomContextImpl.initControlRoomContext();

    com.coremedia.cms.editor.controlroom.controlRoomContext.setFilterWFObjectsRequestBatchSize(this.filterWfReqBatchSize$MJv0);

    if(!com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance()) {
      AS3.trace("[WARN] control room is disabled, skipping initialization");
      return;
    }
    // register an error handler for the control room
    editorContext.getRemoteErrorRegistry().registerErrorHandler(com.coremedia.cms.editor.controlroom.RemoteErrorHandler.handleError);
    com.coremedia.cms.editor.configuration.StudioPlugin.prototype.init.call(this,editorContext);
  }/*

  protected*/ function initPublicationLockingListener(workArea/*:WorkArea*/)/*:void*/ {
    workArea.addListener("tabchange", function (wa/*:WorkArea*/, tab/*:Panel*/)/*:void*/ {
      com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.invalidateWorkflowContentLockingForActivePremular();
    });
  }/*

  protected*/ function initCheckedOutStatusLabelClickHandling(toolbar/*:DocumentFormToolbar*/)/*:void*/ {
    toolbar.setLockedByWorkflowTextClickHandler(function (process/*:Process*/)/*:void*/ {
      com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase.showProcessInfoWindow(process, AS3.cast(com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm,{}));
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      filterWfReqBatchSize$MJv0: 0,
      constructor: ControlRoomPluginBase$,
      super$MJv0: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      initPublicationLockingListener: initPublicationLockingListener,
      initCheckedOutStatusLabelClickHandling: initCheckedOutStatusLabelClickHandling,
      requires: [
        "AS3.trace",
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.ControlRoomContextImpl",
        "com.coremedia.cms.editor.controlroom.RemoteErrorHandler",
        "com.coremedia.cms.editor.controlroom.controlRoomContext",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils",
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm"
      ]
    };
});
