Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowNotesPanelBase", function(WorkflowNotesPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EventUtil;

public class WorkflowNotesPanelBase extends CollapsiblePanel {

  /**
   * A ValueExpression for workflow notes.
   * /
  [Bindable]
  public var notesValueExpression:ValueExpression;

  private var collapseNoText:Boolean;

  public*/ function WorkflowNotesPanelBase$(config/*:WorkflowNotesPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$dgKO(config);
    this.collapseNoText$dgKO = AS3.getBindable(config,"collapseNoText");
    AS3.setBindable(this,"notesValueExpression" , AS3.getBindable(config,"notesValueExpression"));

    this.on("afterlayout",AS3.bind( this,"onAfterLayout"), null, {single:true});
  }/*

  protected*/ function onAfterLayout()/*:void*/ {
    if (AS3.getBindable(this,"notesValueExpression") && this.collapseNoText$dgKO) {
      AS3.getBindable(this,"notesValueExpression").loadValue(AS3.bind(this,"collapseIfNoText$dgKO"));
    }
  }/*

  private*/ function collapseIfNoText()/*:void*/ {var this$=this;
    // invokeLater required here to avoid layout issues
    com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
      if (this$.getEl()) {
        var hasText/*:Boolean*/ = AS3.getBindable(this$,"notesValueExpression") && AS3.getBindable(this$,"notesValueExpression").getValue() &&
                AS3.getBindable(this$,"notesValueExpression").getValue() !== '';
        if (hasText) {
          this$.expand();
        } else {
          this$.collapse();
        }
      }
    });
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.onDestroy.call(this);
    if (AS3.getBindable(this,"notesValueExpression")) {
      AS3.getBindable(this,"notesValueExpression").removeChangeListener(AS3.bind(this,"collapseIfNoText$dgKO"));
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      collapseNoText$dgKO: false,
      constructor: WorkflowNotesPanelBase$,
      super$dgKO: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      onAfterLayout: onAfterLayout,
      collapseIfNoText$dgKO: collapseIfNoText,
      onDestroy: onDestroy,
      config: {notesValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.util.EventUtil"
      ]
    };
});
