Ext.define("com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowAction", function(DownloadXliffWorkflowAction) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
/**
 An action that downloads an XLIFF file containing all contents of the translation workflow
 The XLIFF file is prepare to receive a translation for the current content.
 * /
public class DownloadXliffWorkflowAction extends DownloadXliffWorkflowActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function DownloadXliffWorkflowAction$(config/*:DownloadXliffWorkflowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase,{});
    var defaults_$1/*:DownloadXliffWorkflowAction*/ =AS3.cast(DownloadXliffWorkflowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$oF2W(config_$1);
  }/*

    /**
     * The translation workflow process
     * /
    [Bindable]
    public var processValueExpression:ValueExpression;

    /**
     * The translation workflow task
     * /
    [Bindable]
    public var taskValueExpression:ValueExpression;

    /** The name of the variable in the process that contains the derived contents * /
    [Bindable]
    public var derivedContentsVariable:String;


    /** The name of the variable in the process that contains the master content objects * /
    [Bindable]
    public var masterContentObjectsVariable:String;


    /** The name of the variable in the process that contains the file name for the download * /
    [Bindable]
    public var filenameVariable:String;


    /** the name of the variable in the process that contains the comment of the workflow * /
    [Bindable]
    public var commentVariable:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase",
      constructor: DownloadXliffWorkflowAction$,
      super$oF2W: function() {
        com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        processValueExpression: null,
        taskValueExpression: null,
        derivedContentsVariable: null,
        masterContentObjectsVariable: null,
        filenameVariable: null,
        commentVariable: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.DownloadXliffWorkflowActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
