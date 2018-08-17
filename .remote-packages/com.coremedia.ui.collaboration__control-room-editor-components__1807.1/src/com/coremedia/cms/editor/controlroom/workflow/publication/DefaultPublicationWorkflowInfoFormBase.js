Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoFormBase", function(DefaultPublicationWorkflowInfoFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class DefaultPublicationWorkflowInfoFormBase extends WorkflowForm {

  private var notesValueExpression:ValueExpression;

  public*/ function DefaultPublicationWorkflowInfoFormBase$(config/*:DefaultPublicationWorkflowInfoForm = null*/) {if(arguments.length<=0)config=null;
    this.super$EoKY(config);
  }/*

  protected*/ function getContentsValueExpression(processValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var contents/*:Array*/ = [];
      var changeSet/*:Array*/ = processValueExpression.extendBy(
              com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm.TARGET_CONTENTS_PROPERTY_PATH).getValue() || [];

      changeSet.forEach(function (changeSetItem/*:**/)/*:void*/ {
        var content/*:Content*/;
        if (AS3.is(changeSetItem,  com.coremedia.cap.content.Content)) {
          content =AS3.as( changeSetItem,  com.coremedia.cap.content.Content);
        } else {
          var version/*:Version*/ =AS3.as( changeSetItem,  com.coremedia.cap.content.Version);
          if (version) {
            content = version.getContainingContent();
          }
        }
        if (content && contents.indexOf(content) === -1) {
          contents.push(content);
        }
      });
      return contents;
    });
  }/*

  public*/ function getNotesValueExpression(bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.notesValueExpression$EoKY) {
      this.notesValueExpression$EoKY = bindTo.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants.COMMENT_VARIABLE);
    }
    return this.notesValueExpression$EoKY;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
      notesValueExpression$EoKY: null,
      constructor: DefaultPublicationWorkflowInfoFormBase$,
      super$EoKY: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowForm.prototype.constructor.apply(this, arguments);
      },
      getContentsValueExpression: getContentsValueExpression,
      getNotesValueExpression: getNotesValueExpression,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.publication.DefaultPublicationWorkflowInfoForm",
        "com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants"
      ]
    };
});
