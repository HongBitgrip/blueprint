Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.PublicationWorkflowConstants", function(PublicationWorkflowConstants) {/*package com.coremedia.cms.editor.controlroom.workflow.publication {
public class PublicationWorkflowConstants {
  public static const PUBLICATION_PROCESS_CATEGORY:String = "Publication";

  public static const SIMPLE_PUBLICATION_WORKFLOW_TYPE:String = "StudioSimplePublication";
  public static const TWO_STEP_PUBLICATION_WORKFLOW_TYPE:String = "StudioTwoStepPublication";

  public static const COMPOSE_TASK_NAME:String = "Compose";
  public static const APPROVE_TASK_NAME:String = "Approve";
  public static const PUBLISH_TASK_NAME:String = "Publish";

  public static const COMMENT_VARIABLE:String = "comment";
  public static const SUBJECT_VARIABLE:String = "subject";
  public static const CHANGESET_VARIABLE:String = "changeSet";
}*/function PublicationWorkflowConstants$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PublicationWorkflowConstants$,
      statics: {
        PUBLICATION_PROCESS_CATEGORY: "Publication",
        SIMPLE_PUBLICATION_WORKFLOW_TYPE: "StudioSimplePublication",
        TWO_STEP_PUBLICATION_WORKFLOW_TYPE: "StudioTwoStepPublication",
        COMPOSE_TASK_NAME: "Compose",
        APPROVE_TASK_NAME: "Approve",
        PUBLISH_TASK_NAME: "Publish",
        COMMENT_VARIABLE: "comment",
        SUBJECT_VARIABLE: "subject",
        CHANGESET_VARIABLE: "changeSet"
      }
    };
});
