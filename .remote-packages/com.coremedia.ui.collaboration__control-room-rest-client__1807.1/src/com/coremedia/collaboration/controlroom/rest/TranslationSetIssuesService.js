Ext.define("com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService", function(TranslationSetIssuesService) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.impl.LocalIssuesImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.data.validation.Issue;

public class TranslationSetIssuesService {

  public static*/ function loadTranslationSetIssues$static(changeSet/*:CapList*/, assignedSites/*:Array*/, validationCode/*:String*/, callback/*:Function = null*/)/*:WorkflowSetIssues*/ {if(arguments.length<=3)callback=null;
    var requestParameters/*:Object*/ = {
      changeSet: changeSet,
      assignedSites: assignedSites,
      validationCode: validationCode
    };

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod("translationSetIssues", 'POST', true, false, null, true);
    rsm.request(requestParameters, function(rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var remoteIssues/*:Object*/ = com.coremedia.ui.data.impl.RemoteService.resolveResponse(rsmr.response.responseText, "");
      var translationSetIssues/*:LocalIssuesImpl*/ = new com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues(null);
      if (remoteIssues && remoteIssues['global']) {
        //noinspection JSMismatchedCollectionQueryUpdate
        var remoteIssueArray/*:Array*/ = remoteIssues['global'];
        remoteIssueArray.forEach(function(issue/*:Issue*/)/*:void*/ {
          translationSetIssues.addFromIssue(issue);
        });
      }

      if (callback) {
        callback(translationSetIssues);
      }
    });
  }/*
}*/function TranslationSetIssuesService$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationSetIssuesService$,
      statics: {loadTranslationSetIssues: loadTranslationSetIssues$static},
      requires: [
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues"]
    };
});
