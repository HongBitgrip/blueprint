Ext.define("com.coremedia.collaboration.controlroom.rest.PublicationSetIssuesService", function(PublicationSetIssuesService) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.impl.LocalIssuesImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.data.validation.Issue;

public class PublicationSetIssuesService {

  public static*/ function loadPublicationSetIssues$static(changeSet/*:CapList = null*/, assignedMembers/*:Array = null*/, processName/*:String = null*/, callback/*:Function = null*/)/*:WorkflowSetIssues*/ {switch(arguments.length){case 0:changeSet=null;case 1:assignedMembers=null;case 2:processName=null;case 3:callback=null;}
    var requestParameters/*:Object*/ = {
      changeSet: changeSet,
      assignedMembers: assignedMembers,
      processName: processName
    };

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod("publicationSetIssues", 'POST', true, false, null, true);
    rsm.request(requestParameters, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
      if (!requestParameters.changeSet) {
        requestParameters.changeSet = new com.coremedia.collaboration.controlroom.rest.CapListImpl(null, null);
      }
      var remoteIssues/*:Object*/ = com.coremedia.ui.data.impl.RemoteService.resolveResponse(rsmr.response.responseText, "");
      var publicationSetIssues/*:LocalIssuesImpl*/ = new com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues(null);
      if (remoteIssues && remoteIssues['global']) {
        //noinspection JSMismatchedCollectionQueryUpdate
        var remoteIssueArray/*:Array*/ = remoteIssues['global'];
        remoteIssueArray.forEach(function (issue/*:Issue*/)/*:void*/ {
          publicationSetIssues.addFromIssue(issue);
        });
      }

      if (callback) {
        callback(publicationSetIssues);
      }
    });
  }/*
}*/function PublicationSetIssuesService$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PublicationSetIssuesService$,
      statics: {loadPublicationSetIssues: loadPublicationSetIssues$static},
      requires: [
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.collaboration.controlroom.rest.CapListImpl",
        "com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues"
      ]
    };
});
