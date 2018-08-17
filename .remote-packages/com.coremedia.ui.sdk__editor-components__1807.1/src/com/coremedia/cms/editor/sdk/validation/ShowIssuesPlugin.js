Ext.define("com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin", function(ShowIssuesPlugin) {/*package com.coremedia.cms.editor.sdk.validation {

import com.coremedia.cap.content.impl.Difference;
import com.coremedia.cap.content.impl.DifferenceType;
import com.coremedia.cms.editor.sdk.premular.DocumentPanel;
import com.coremedia.cms.editor.sdk.premular.differencing.DiffManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.plugins.BindPlugin;
import com.coremedia.ui.util.ComponentUtil;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.form.Labelable;

import mx.resources.ResourceManager;

/**
 * <p>
 *  A plugin that visualizes validation issues for a property at its surrounding component,
 *  The plugin also visualizes changed properties when necessary.
 *  typically a property field, implementind the IValidationState Mixin Interface.
 *  This plugin assumes that the bindTo configuration option
 *  is a value expression evaluating to a content or a bean providing issues
 *  in the same way as a content. It then sets a validationState to the component or the surrounding
 *   component when the list of issues for the given property changes, which includes the setting of a css-class.
 *  The style class depends on the severity of the issues that were found. Possible style classes are
 *  <code>cm-validation-error</code> and
 *   <code>cm-validation-warning</code> for issues as well as
 *   <code>cm-validation-success</code> for changed properties.
 * </p>
 * <p>
 *  This plugin also makes sure
 *  to show a tooltip when the user hovers the mouse over the surrounding
 * component. The tooltip shows lists all issues associated with the property.
 * </p>
 * /
[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ShowIssuesPlugin extends BindPlugin {

  private static const*/var FIELD_CHANGED_MESSAGE$static/*:String*/;/* =*/function FIELD_CHANGED_MESSAGE$static_(){FIELD_CHANGED_MESSAGE$static=( mx.resources.ResourceManager.getInstance().getString("com.coremedia.cms.editor.Editor", "DifferencingView_fieldChanged_tooltip"));};/*

  /**
   * The name of the property that this field works on.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * The value to assume when a property is not defined for the purpose of
   * computing whether a property has changed in differencing mode.
   * If the server determines that a property has been added or removed,
   * an issue is only shown when the added or removed value differs from the
   * value configured in this option.
   * This option is particularly useful to struct properties, whose absence
   * must be interpreted in a domain-specific way.
   * If a function is given, that function is evaluated and its result is used
   * in the comparison.
   * @private
   * /
  [Bindable]
  public var ifUndefined:*;

  /**
   * Don't show any validation issues. This technically disables the plugin. Defaults to false.
   * Custom property fields using this plugin should themselves provide a hideIssues configuration
   * option and pass it to this plugin.
   * /
  [Bindable]
  public var hideIssues:Boolean;

  /**
   * Don't show a validation message, just the visual indicator.
   * /
  [Bindable]
  public var hideMessage:Boolean;

  private var theDocumentPanel:DocumentPanel;
  private var changeValueExpression:ValueExpression;

  private var issuesValueExpression:ValueExpression;

  private var initialized:Boolean = false;

  public*/ function ShowIssuesPlugin$(config/*:ShowIssuesPlugin = null*/) {if(arguments.length<=0)config=null;
    // use array to allow config.propertyName to be a property path
    this.issuesValueExpression$aSTb = config.bindTo.extendBy(["issues", "byProperty", AS3.getBindable(config,"propertyName")]);

    this.super$aSTb(AS3.cast(com.coremedia.ui.plugins.BindPlugin,{
      bindTo: this.issuesValueExpression$aSTb,
      boundValueChanged:AS3.bind( this,"issuesChanged$aSTb")
    }));

    AS3.setBindable(this,"propertyName" , AS3.getBindable(config,"propertyName"));
    AS3.setBindable(this,"ifUndefined" , AS3.getBindable(config,"ifUndefined"));
    AS3.setBindable(this,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    AS3.setBindable(this,"hideMessage" , AS3.getBindable(config,"hideMessage"));
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    com.coremedia.ui.plugins.BindPlugin.prototype.init.call(this,component);
    component.addListener('removed',AS3.bind( this,"afterRemoved"));

    // the default wraps the error text in another text -> we do not want that by default as calculateIssuesText will
    // already add the error level as the first part of the text. Otherwise output like "Input error. Errors." would be
    // produced.
    var labelable/*:Labelable*/ =AS3.as( component,  Ext.form.Labelable);
    if (labelable) {
      if (!labelable.hasOwnProperty("ariaErrorText")) {
        labelable.ariaErrorText = "{0}";
      }
    }

    this.getComponent().on("afterrender",AS3.bind( this,"onAfterRender$aSTb"));
  }/*

  private*/ function onAfterRender()/*:void*/ {
    com.coremedia.ui.util.ComponentUtil.findAsParentOf(this.getComponent(), com.coremedia.cms.editor.sdk.premular.DocumentPanel.xtype,AS3.bind( this,"initWithDocumentPanel$aSTb"));
  }/*

  private*/ function initWithDocumentPanel(panel/*:DocumentPanel*/)/*:void*/ {
    this.theDocumentPanel$aSTb = panel;
    this.initialized$aSTb = true;

    this.changeValueExpression$aSTb = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isPropertyChanged$aSTb"));
    this.changeValueExpression$aSTb.addChangeListener(AS3.bind(this,"applySuccessStateIfChanged$aSTb"));
    this.applySuccessStateIfChanged$aSTb();

    this.issuesChanged$aSTb();
  }/*

  private*/ function isPropertyChanged()/*:Boolean*/ {
    var diffManager/*:DiffManager*/ = this.theDocumentPanel$aSTb && AS3.getBindable(this.theDocumentPanel$aSTb,"diffManager");
    if (!diffManager) {
      // No differencing.
      return false;
    }
    var difference/*:Difference*/ = diffManager.isPropertyChanged(AS3.getBindable(this,"propertyName"));
    if (!difference) {
      // Property values are equal.
      return false;
    }
    var ifUndefinedResolved/*:**/;
    if (AS3.is(AS3.getBindable(this,"ifUndefined"),  Function)) {
      ifUndefinedResolved = AS3.cast(Function,AS3.getBindable(this,"ifUndefined"))();
    } else {
      ifUndefinedResolved = AS3.getBindable(this,"ifUndefined");
    }
    if (ifUndefinedResolved === undefined) {
      // No default value magic.
      return true;
    }

    var differenceType/*:DifferenceType*/ = difference.differenceType;
    switch (differenceType) {
      case com.coremedia.cap.content.impl.DifferenceType.ADDED:
        return !com.coremedia.ui.util.ObjectUtils.equal(ifUndefinedResolved, difference.endValue);
      case com.coremedia.cap.content.impl.DifferenceType.REMOVED:
        return !com.coremedia.ui.util.ObjectUtils.equal(ifUndefinedResolved, difference.startValue);
      default:
        return true;
    }
  }/*

  private*/ function applySuccessStateIfChanged()/*:void*/ {
    var validationStateMixin/*:IValidationStateMixin*/ =AS3.as( this.getComponent(),  com.coremedia.ui.mixins.ValidationStateMixin);
    if (validationStateMixin) {
      if (! !this.changeValueExpression$aSTb.getValue()) {
        AS3.setBindable(validationStateMixin,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
        AS3.setBindable(validationStateMixin,"validationMessage" , FIELD_CHANGED_MESSAGE$static);
      } else {
        AS3.setBindable(validationStateMixin,"validationMessage" , null);
        AS3.setBindable(validationStateMixin,"validationState" , null);
      }
    }
  }/*


  protected*/ function afterRemoved()/*:void*/ {
    if (this.changeValueExpression$aSTb) {
      this.changeValueExpression$aSTb.removeChangeListener(AS3.bind(this,"applySuccessStateIfChanged$aSTb"));
    }
  }/*

  private*/ function issuesChanged()/*:void*/ {
    if (!this.initialized$aSTb) {
      return;
    }

    var issues/*:Array*/ =AS3.as( this.issuesValueExpression$aSTb.getValue(),  Array);
    if (issues === null) {
      issues = [];
    }
    if (issues && !AS3.getBindable(this,"hideIssues")) {  //only show issues when there are some and it is not disabled
      // Find the highest severity level.
      var maxSeverity/*:String*/ = com.coremedia.cms.editor.sdk.validation.ValidationUtil.computeMaximumSeverity(issues);

      //set the severity on the component
      this.setSeverityOnComponent$aSTb(maxSeverity, issues);
    }
  }/*

  private*/ function setSeverityOnComponent(maxSeverity/*:String*/, issues/*:Array*/)/*:void*/ {
    var issueText/*:String*/ = !AS3.getBindable(this,"hideMessage") ? issuesAsText$static(issues) : "";

    setValidationState$static(AS3.as(this.getComponent(),  com.coremedia.ui.mixins.ValidationStateMixin), maxSeverity, issueText);
  }/*

  /**
   * Replaces any existing validation state on the given component with the new one, if necessary.
   * /
  private static*/ function setValidationState$static(component/*:IValidationStateMixin*/, newSeverity/*:String*/, errorIssuesText/*:String = undefined*/)/*:void*/ {
    if (component) {
      var newValidationState/*:ValidationState*/ = com.coremedia.cms.editor.sdk.validation.ValidationUtil.TO_VALIDATION_STATE[newSeverity];
      if (newValidationState) {
        AS3.setBindable(component,"validationState" , newValidationState);
        AS3.setBindable(component,"validationMessage" , errorIssuesText);
      } else {
        if (AS3.getBindable(component,"validationState","DUMMY") != com.coremedia.ui.mixins.ValidationState.SUCCESS) {
          AS3.setBindable(component,"validationMessage" , null);
          AS3.setBindable(component,"validationState" , null);
        }
      }
    }
  }/*

  private static*/ function issuesAsText$static(issues/*:Array*/)/*:String*/ {
    var text/*:String*/ = calculateIssuesText$static(issues, com.coremedia.ui.data.validation.Severity.ERROR);
    text += calculateIssuesText$static(issues, com.coremedia.ui.data.validation.Severity.WARN);
    text += calculateIssuesText$static(issues, com.coremedia.ui.data.validation.Severity.INFO);
    return text;
  }/*

  private static*/ function calculateIssuesText$static(issues/*:Array*/, severity/*:String*/)/*:String*/ {
    // adding explicit \n after <br> so stripping html tags will not remove spacings between the characters
    //calculate title
    var result/*:String*/ = "<span><b>" + mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', severity) + "</b></span>"
            + "</br>\n";
    //filter issues
    var filteredIssues/*:Array*/ = issues.filter(function (issue/*:Issue*/)/*:Boolean*/ {
      return issue.severity === severity;
    });

    //combine the text, return the empty string
    return filteredIssues.length > 0 ? result + filteredIssues.map(
            function (issue/*:Issue*/)/*:String*/ {
              return com.coremedia.ui.util.EncodingUtil.encodeForHTML(com.coremedia.cms.editor.sdk.validation.ValidationUtil.formatText(issue));
            }).join("<br/>\n") : "";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      theDocumentPanel$aSTb: null,
      changeValueExpression$aSTb: null,
      issuesValueExpression$aSTb: null,
      initialized$aSTb: false,
      constructor: ShowIssuesPlugin$,
      super$aSTb: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      onAfterRender$aSTb: onAfterRender,
      initWithDocumentPanel$aSTb: initWithDocumentPanel,
      isPropertyChanged$aSTb: isPropertyChanged,
      applySuccessStateIfChanged$aSTb: applySuccessStateIfChanged,
      afterRemoved: afterRemoved,
      issuesChanged$aSTb: issuesChanged,
      setSeverityOnComponent$aSTb: setSeverityOnComponent,
      config: {
        propertyName: null,
        ifUndefined: undefined,
        hideIssues: false,
        hideMessage: false
      },
      statics: {
        FIELD_CHANGED_MESSAGE: undefined,
        __initStatics__: function() {
          FIELD_CHANGED_MESSAGE$static_();
        }
      },
      requires: [
        "Ext.form.Labelable",
        "com.coremedia.cap.content.impl.DifferenceType",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.util.ComponentUtil",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentPanel",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil"
      ]
    };
});
