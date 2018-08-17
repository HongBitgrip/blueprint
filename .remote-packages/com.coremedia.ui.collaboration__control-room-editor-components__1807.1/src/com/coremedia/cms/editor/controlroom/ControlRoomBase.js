Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomBase", function(ControlRoomBase) {/*package com.coremedia.cms.editor.controlroom {

import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.WorkflowObject;
import com.coremedia.cap.workflow.WorkflowObjectProperties;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;

import ext.Component;
import ext.Ext;
import ext.ExtClass;
import ext.dom.Element;
import ext.panel.Panel;
import ext.util.DelayedTask;

public class ControlRoomBase extends Panel {

  private var clickActionRequested:Boolean = false;

  [ArrayElementType("ext.panel.Panel")]
  private var subPanels:Array;

  public*/ function ControlRoomBase$(config/*:ControlRoom = null*/) {if(arguments.length<=0)config=null;

    this.super$v95j(config);

    this.on("afterlayout",AS3.bind( this,"onAfterRender$v95j"), null, {single: true});
  }/*

  private*/ function onAfterRender()/*:void*/ {
    // Determine all sub panels.
    this.subPanels$v95j = this.itemCollection.getRange().filter(function (component/*:Component*/)/*:Boolean*/ {
      return AS3.is( component,  Ext.panel.Panel) && !component.hidden;
    });

    this.setupHeaderClickHandling$v95j();
  }/*

  /**
   * Set up the handling of single and double clicks on the headers
   * of sub-panels. We need to fully customize this as the desired
   * behaviour is not build-in.
   *
   * Single click should expand/collapse the panel. Double clicks
   * should expand the panel and collapse all other
   * panels.
   *
   * /
  private*/ function setupHeaderClickHandling()/*:void*/ {var this$=this;
    this.subPanels$v95j.forEach(function (panel/*:Panel*/)/*:void*/ {
      var header/*:Element*/ = panel.header.getEl();

      if (header) {
        header.setStyle("cursor", "pointer");

        // Single click should expand/collapse the panel, but only if
        // the single click is not part of a double click. Therefore
        // we use a DelayedTask that executes the expand/collapse
        // only if no other click happens within the next 350ms.
        this$.mon(header, "click", function ()/*:void*/ {
          if (!this$.clickActionRequested$v95j) {
            this$.clickActionRequested$v95j = true;
            var executeSingleClickActionLater/*:DelayedTask*/ = new Ext.util.DelayedTask(function ()/*:void*/ {
              if (this$.clickActionRequested$v95j) {
                this$.clickActionRequested$v95j = false;
                if (panel.getCollapsed()) {
                  panel.expand(false);
                } else {
                  panel.collapse();
                }
              }
            });
            executeSingleClickActionLater.delay(350);
          }
        });

        // Double clicks should expand the panel and collapse all other
        // panels.
        this$.mon(header, "dblclick", function ()/*:void*/ {
          this$.clickActionRequested$v95j = false;
          this$.subPanels$v95j.forEach(function (subPanel/*:Panel*/)/*:void*/ {
            if (subPanel !== panel) {
              subPanel.collapse();
            }
          });
          panel.expand(false);
        });
      }
    });
  }/*

  internal static*/ function extractLanguageDisplayName$static(ignored/*:Object*/, object/*:WorkflowObject*/)/*:String*/ {
    var process/*:Process*/ = object.isProcess() ? AS3.cast(com.coremedia.cap.workflow.Process,object) : AS3.cast(com.coremedia.cap.workflow.Task,object).getContainingProcess();
    if (!process) {
      return undefined;
    }
    var properties/*:WorkflowObjectProperties*/ = process.getProperties();
    if (!properties) {
      return undefined;
    }
    var siteId/*:String*/ = properties.get(com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.TARGET_SITE_ID_VARIABLE) || properties.get(com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.SITE_ID_VARIABLE);

    if (!siteId) {
      return undefined;
    }
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(siteId);
    return site ? site.getLocale().getDisplayName() : '';
  }/*

  protected*/ function getSubPanelGetStateFn(itemId/*:String*/)/*:Object*/ {var this$=this;
    return function ()/*:Object*/ {
      var subPanel/*:Panel*/ =AS3.as( this$.queryById(itemId),  Ext.panel.Panel);
      var clazz/*:ExtClass*/ = Ext.getClass(subPanel);
      var state/*:Object*/ = clazz.prototype['getState'].apply(subPanel);
      state['collapsed'] = AS3.getBindable(subPanel,"collapsed","DUMMY");
      return state;
    };
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      clickActionRequested$v95j: false,
      subPanels$v95j: null,
      constructor: ControlRoomBase$,
      super$v95j: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onAfterRender$v95j: onAfterRender,
      setupHeaderClickHandling$v95j: setupHeaderClickHandling,
      getSubPanelGetStateFn: getSubPanelGetStateFn,
      statics: {extractLanguageDisplayName: extractLanguageDisplayName$static},
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "Ext.util.DelayedTask",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames"
      ]
    };
});
