Ext.define("com.coremedia.cap.impl.CapImpl", function(CapImpl) {/*package com.coremedia.cap.impl {

import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.common.impl.CapConnectionImpl;
import com.coremedia.cap.common.impl.CapLoginServiceImpl;
import com.coremedia.cap.common.infos.impl.CapSystemInfoImpl;
import com.coremedia.cap.content.authorization.impl.ContentRights;
import com.coremedia.cap.content.impl.ContentImpl;
import com.coremedia.cap.content.impl.ContentIssuesImpl;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl;
import com.coremedia.cap.content.impl.ContentTypeImpl;
import com.coremedia.cap.content.impl.VersionHistoryImpl;
import com.coremedia.cap.content.impl.VersionImpl;
import com.coremedia.cap.content.impl.VersionStructRemoteBeanImpl;
import com.coremedia.cap.content.search.impl.SearchResultImpl;
import com.coremedia.cap.content.search.impl.SuggestionResultImpl;
import com.coremedia.cap.user.impl.GroupImpl;
import com.coremedia.cap.user.impl.UserImpl;
import com.coremedia.cap.user.impl.UserRepositoryImpl;
import com.coremedia.cap.workflow.ProcessState;
import com.coremedia.cap.workflow.TaskDefinitionType;
import com.coremedia.cap.workflow.TaskState;
import com.coremedia.cap.workflow.authorization.impl.ProcessDefinitionRights;
import com.coremedia.cap.workflow.authorization.impl.ProcessRights;
import com.coremedia.cap.workflow.authorization.impl.TaskRights;
import com.coremedia.cap.workflow.impl.ProcessDefinitionImpl;
import com.coremedia.cap.workflow.impl.ProcessImpl;
import com.coremedia.cap.workflow.impl.TaskDefinitionImpl;
import com.coremedia.cap.workflow.impl.TaskImpl;
import com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.ProblemDescriptionImpl;

//noinspection JSUnusedGlobalSymbols
public class CapImpl {

  //noinspection JSUnusedGlobalSymbols
  public static*/ function prepare$static(callback/*:Function*/)/*:void*/ {
    var beanFactoryImpl/*:BeanFactoryImpl*/ = com.coremedia.ui.data.impl.BeanFactoryImpl.initBeanFactory();
    beanFactoryImpl.registerRemoteBeanClasses(
            com.coremedia.cap.common.impl.CapConnectionImpl,
            com.coremedia.cap.common.impl.CapLoginServiceImpl,
            com.coremedia.cap.content.impl.ContentRepositoryImpl,
            com.coremedia.cap.content.impl.ContentImpl,
            com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl,
            com.coremedia.cap.content.impl.VersionStructRemoteBeanImpl,
            com.coremedia.cap.content.impl.VersionHistoryImpl,
            com.coremedia.cap.content.impl.ContentIssuesImpl,
            com.coremedia.cap.content.impl.VersionImpl,
            com.coremedia.cap.content.authorization.impl.ContentRights,
            com.coremedia.cap.content.impl.ContentTypeImpl,
            com.coremedia.cap.content.search.impl.SearchResultImpl,
            com.coremedia.cap.content.search.impl.SuggestionResultImpl,
            com.coremedia.cap.user.impl.UserRepositoryImpl,
            com.coremedia.cap.user.impl.UserImpl,
            com.coremedia.cap.user.impl.GroupImpl,
            com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl,
            com.coremedia.cap.workflow.impl.ProcessDefinitionImpl,
            com.coremedia.cap.workflow.impl.TaskDefinitionImpl,
            com.coremedia.cap.workflow.impl.ProcessImpl,
            com.coremedia.cap.workflow.impl.TaskImpl,
            com.coremedia.cap.workflow.authorization.impl.ProcessDefinitionRights,
            com.coremedia.cap.workflow.authorization.impl.TaskRights,
            com.coremedia.cap.workflow.authorization.impl.ProcessRights,
            com.coremedia.cap.common.infos.impl.CapSystemInfoImpl);
    com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.registerResolver();
    // Make sure enum classes are loaded
    com.coremedia.cap.workflow.ProcessState.NOT_STARTED;
    com.coremedia.cap.workflow.TaskState.NOT_STARTED;
    com.coremedia.cap.workflow.TaskDefinitionType.AUTOMATED;

    // Make sure ProblemDescriptionImpl is loaded
    new com.coremedia.ui.data.impl.ProblemDescriptionImpl({});

    com.coremedia.cap.common.impl.CapConnectionImpl.getInstance().load(function (connection/*:CapConnection*/)/*:void*/ {
      connection.getLoginService().load(function ()/*:void*/ {
        callback(connection);
      });
    });
  }/*

}*/function CapImpl$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CapImpl$,
      statics: {prepare: prepare$static},
      requires: [
        "com.coremedia.cap.workflow.ProcessState",
        "com.coremedia.cap.workflow.TaskDefinitionType",
        "com.coremedia.cap.workflow.TaskState",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.ProblemDescriptionImpl"
      ],
      uses: [
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.common.impl.CapConnectionImpl",
        "com.coremedia.cap.common.impl.CapLoginServiceImpl",
        "com.coremedia.cap.common.infos.impl.CapSystemInfoImpl",
        "com.coremedia.cap.content.authorization.impl.ContentRights",
        "com.coremedia.cap.content.impl.ContentImpl",
        "com.coremedia.cap.content.impl.ContentIssuesImpl",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cap.content.impl.ContentStructRemoteBeanImpl",
        "com.coremedia.cap.content.impl.ContentTypeImpl",
        "com.coremedia.cap.content.impl.VersionHistoryImpl",
        "com.coremedia.cap.content.impl.VersionImpl",
        "com.coremedia.cap.content.impl.VersionStructRemoteBeanImpl",
        "com.coremedia.cap.content.search.impl.SearchResultImpl",
        "com.coremedia.cap.content.search.impl.SuggestionResultImpl",
        "com.coremedia.cap.user.impl.GroupImpl",
        "com.coremedia.cap.user.impl.UserImpl",
        "com.coremedia.cap.user.impl.UserRepositoryImpl",
        "com.coremedia.cap.workflow.authorization.impl.ProcessDefinitionRights",
        "com.coremedia.cap.workflow.authorization.impl.ProcessRights",
        "com.coremedia.cap.workflow.authorization.impl.TaskRights",
        "com.coremedia.cap.workflow.impl.ProcessDefinitionImpl",
        "com.coremedia.cap.workflow.impl.ProcessImpl",
        "com.coremedia.cap.workflow.impl.TaskDefinitionImpl",
        "com.coremedia.cap.workflow.impl.TaskImpl",
        "com.coremedia.cap.workflow.impl.WorkflowRepositoryImpl"
      ]
    };
});
