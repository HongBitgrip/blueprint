Ext.define("com.coremedia.cap.workflow.impl.ProcessDefinitionImpl", function(ProcessDefinitionImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.impl.CapTypeImpl;
import com.coremedia.cap.workflow.*;
import com.coremedia.cap.workflow.results.impl.ProcessCreateResultImpl;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="workflow/processdefinition/{id:[0-9]+}")]
/**
 * ProcessDefinition represents a Unified API ProcessDefinition. It is be used as template
 * for new process instances.
 * /
public class ProcessDefinitionImpl extends CapTypeImpl implements ProcessDefinition {

  private static const*/var CREATE_URI$static/*:String*/ = 'createUri';/*

  public*/ function ProcessDefinitionImpl$(path/*:String*/, vars/*:Object*/) {
    var id/*:**/ = vars['id'];
    this.super$WZVn(path);
    var numericId/*:int*/ = parseInt(id, 10);
    this.setId("coremedia:///processdefinition/" + numericId);
  }/*

  public*/ function isSubprocessOnly()/*:Boolean*/ {
    return this.get("subprocessOnly");
  }/*

  /**
   * Returns whether this process definition is enabled or not
   * @return process definition enabled or not
   * /
  public*/ function isEnabled()/*:Boolean*/ {
    return this.get("enabled");
  }/*

  public*/ function isDisabled()/*:Boolean*/ {
    return this.get("disabled");
  }/*

  public*/ function isLatest()/*:Boolean*/ {
    return this.get("latest");
  }/*

  public*/ function isSuperseded()/*:Boolean*/ {
    return this.get("superseded");
  }/*

  public*/ function getStartTaskDefinition()/*:TaskDefinition*/ {
    return this.get("startTaskDefinition");
  }/*

  public*/ function getTaskDefinition(name/*:String*/)/*:TaskDefinition*/ {
    var taskDefinitionsByName/*:**/ = this.get("taskDefinitionsByName");
    return taskDefinitionsByName ? taskDefinitionsByName[name] || null : undefined;
  }/*

  public*/ function getTaskDefinitions()/*:Array*/ {
    return this.get("taskDefinitions");
  }/*

  public*/ function create(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.load(function()/*:void*/ {
      var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(CREATE_URI$static), "POST", true);
      rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
        var error/*:RemoteError*/ = rsmr.getError();
        var process/*:Process*/ = error ? null : AS3.cast(com.coremedia.cap.workflow.Process,com.coremedia.ui.data.impl.RemoteService.resolveResponse(rsmr.response.responseText, ""));
        if (callback) {
          callback(new com.coremedia.cap.workflow.results.impl.ProcessCreateResultImpl(error, rsmr.success, process));
        }
      });
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.CapTypeImpl",
      mixins: ["com.coremedia.cap.workflow.ProcessDefinition"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow/processdefinition/{id:[0-9]+}"
        ]
      ]},
      constructor: ProcessDefinitionImpl$,
      super$WZVn: function() {
        com.coremedia.cap.common.impl.CapTypeImpl.prototype.constructor.apply(this, arguments);
      },
      isSubprocessOnly: isSubprocessOnly,
      isEnabled: isEnabled,
      isDisabled: isDisabled,
      isLatest: isLatest,
      isSuperseded: isSuperseded,
      getStartTaskDefinition: getStartTaskDefinition,
      getTaskDefinition: getTaskDefinition,
      getTaskDefinitions: getTaskDefinitions,
      create: create,
      requires: [
        "com.coremedia.cap.common.impl.CapTypeImpl",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.ProcessDefinition",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: ["com.coremedia.cap.workflow.results.impl.ProcessCreateResultImpl"]
    };
});
