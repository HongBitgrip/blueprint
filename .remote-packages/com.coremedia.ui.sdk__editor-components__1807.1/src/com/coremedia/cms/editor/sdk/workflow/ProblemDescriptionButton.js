Ext.define("com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton", function(ProblemDescriptionButton) {/*package com.coremedia.cms.editor.sdk.workflow{
import com.coremedia.cms.editor.sdk.workflow.*;
import net.jangaroo.ext.Exml;
/**
 Renders a ProblemDescription:
 The error code of the problem description is rendered as localized text
 (see resource bundle com.coremedia.cms.editor.ErrorCodes).
 The first content to appear in the arguments of the problem description
 is rendered as hyperlink after the error code.
 A click on the link executes the configured contentAction.
 * /
public class ProblemDescriptionButton extends ProblemDescriptionButtonBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.Template;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.problemDescriptionButton";

    public*/function ProblemDescriptionButton$(config/*:ProblemDescriptionButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase,{});
    var defaults_$1/*:ProblemDescriptionButton*/ =AS3.cast(ProblemDescriptionButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemSelector = "div";
    config_$1.tpl = 
    new Ext.Template(
    '<div>',
    '{text}',
    '</div>');
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wYIa(config_$1);
  }/*

    /**
     * Holds the problem description.
     * /
    [Bindable]
    public var problemDescriptionValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.problemDescriptionButton",
      constructor: ProblemDescriptionButton$,
      super$wYIa: function() {
        com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {problemDescriptionValueExpression: null},
      requires: [
        "Ext.Template",
        "com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
