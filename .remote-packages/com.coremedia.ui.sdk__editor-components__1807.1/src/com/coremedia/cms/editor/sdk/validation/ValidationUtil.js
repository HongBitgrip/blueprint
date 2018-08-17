Ext.define("com.coremedia.cms.editor.sdk.validation.ValidationUtil", function(ValidationUtil) {/*package com.coremedia.cms.editor.sdk.validation {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.mixins.ValidationState;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.validation.Validators')]
public class ValidationUtil {

  private static const*/var TO_NUMBER$static/*:Object*/;/* =*/function TO_NUMBER$static_(){TO_NUMBER$static=( {
    INFO:1,
    WARN:2,
    ERROR:3
  });};/*

  public static const TO_VALIDATION_STATE:Object =*/function TO_VALIDATION_STATE$static_(){ValidationUtil.TO_VALIDATION_STATE=( {
    INFO: com.coremedia.ui.mixins.ValidationState.INFO,
    WARN: com.coremedia.ui.mixins.ValidationState.WARNING,
    ERROR: com.coremedia.ui.mixins.ValidationState.ERROR
  });}/*;

  private static const*/var TO_VALIDATION_ICON$static/*:Object*/;/* =*/function TO_VALIDATION_ICON$static_(){TO_VALIDATION_ICON$static=( {
    INFO: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_info_icon'),
    WARN: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_warn_icon'),
    ERROR: mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_error_icon')
  });};/*

  /**
   * Format a description for the given issue.
   *
   * @param issue the issue
   * @return the description
   * /
  public static*/ function formatText$static(issue/*:Issue*/)/*:String*/ {
    return format$static(issue, '_text');
  }/*

  private static*/ function format$static(issue/*:Issue*/, suffix/*:String*/)/*:**/ {
    var code/*:String*/ = issue.code;
    var property/*:String*/ = issue.property;
    var pattern/*:String*/ = null;
    
    var content/*:Content*/ =AS3.as( issue.entity,  com.coremedia.cap.content.Content);
    if (content) {
      var contentType/*:CapType*/ = content.getType();
      while (contentType && !pattern) {
        pattern = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'ContentValidator_' + contentType.getName() + '_' + property + '_' + code + suffix);
        contentType = contentType.getParent();
      }
    }
    if (!pattern) {
      pattern = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'PropertyValidator_' + property + '_' + code + suffix);
    }
    if (!pattern) {
      pattern = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_' + code + suffix);
    }
    if (!pattern) {
      pattern = code;
    }
    return formatWithIssueArguments$static(pattern, issue);
  }/*

  private static*/ function formatWithIssueArguments$static(pattern/*:String*/, issue/*:Issue*/)/*:**/ {
    var args/*:Array*/ = [pattern].concat(issue.arguments);
    return com.coremedia.cms.editor.sdk.util.FormatUtil.format.apply(null, args);
  }/*

  /**
   * Return whether the first given severity is more severe than the second given severity.
   * Severities not listed as constants in this class (especially <code>null</code>)
   * are considered least severe.
   *
   * @param severity1 the first severity to compare
   * @param severity2 the second severity to compare
   * @return whether the first given severity is more severe than the second given severity
   * /
  private static*/ function isMoreSevereThan$static(severity1/*:String*/, severity2/*:String*/)/*:Boolean*/ {
    return (TO_NUMBER$static[severity1 || ""] || 0) > (TO_NUMBER$static[severity2 || ""] || 0);
  }/*

  /**
   * From the array of issues, return the highest severity. If the argument is
   * null or empty, null is returned
   *
   * @param issues an array of issues
   * @return the highest severity
   * /
  public static*/ function computeMaximumSeverity$static(issues/*:Array*/)/*:String*/ {
    var maxSeverity/*:String*/ = null;
    if (issues) {
      for (var i/*:uint*/ = 0; i < issues.length; i++) {
        var issue/*:Issue*/ =AS3.as( issues[i],  com.coremedia.ui.data.validation.Issue);
        if (isMoreSevereThan$static(issue.severity, maxSeverity)) {
          maxSeverity = issue.severity;
        }
      }
    }
    return maxSeverity;
  }/*

  /**
   * Return whether the issue has the severity WARN.
   *
   * @param issue the issue
   * @return whether the issue has the severity WARN
   * /
  public static*/ function isWarnIssue$static(issue/*:Issue*/)/*:Boolean*/ {
    return issue.severity === com.coremedia.ui.data.validation.Severity.WARN;
  }/*

  /**
   * Return whether the issue has the severity ERROR.
   *
   * @param issue the issue
   * @return whether the issue has the severity ERROR
   * /
  public static*/ function isErrorIssue$static(issue/*:Issue*/)/*:Boolean*/ {
    return issue.severity === com.coremedia.ui.data.validation.Severity.ERROR;
  }/*

  /**
   * Calculates a {@link ValidationState} based on the issues provided in the array.
   * If there are no issues provided or no issue has a severity greater than zero, validation state returns null.
   *
   * @param issues
   * @return see description.
   * /
  public static*/ function computeValidationState$static(issues/*:Array*/)/*:ValidationState*/ {
    var severity/*:String*/ = ValidationUtil.computeMaximumSeverity(issues);
    return AS3.as( ValidationUtil.TO_VALIDATION_STATE[severity],  com.coremedia.ui.mixins.ValidationState) || null;
  }/*

  /**
   * Calculates an icon class for a validator based on the issues provided in the array.
   * If there are no issues provided or no issue has a severity greater than zero,
   * the value of property <code>Validator_icon</code> of resource bundle
   * <code>com.coremedia.cms.editor.sdk.validation.Validators</code> is returned.
   *
   * @param issues
   * @return see description.
   * /
  public static*/ function computeValidationIconCls$static(issues/*:Array*/)/*:String*/ {
    var severity/*:String*/ = ValidationUtil.computeMaximumSeverity(issues);
    return AS3.as( TO_VALIDATION_ICON$static[severity || ""],  String) || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.validation.Validators', 'Validator_icon');
  }/*
}*/function ValidationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ValidationUtil$,
      statics: {
        TO_NUMBER: undefined,
        TO_VALIDATION_STATE: undefined,
        TO_VALIDATION_ICON: undefined,
        formatText: formatText$static,
        computeMaximumSeverity: computeMaximumSeverity$static,
        isWarnIssue: isWarnIssue$static,
        isErrorIssue: isErrorIssue$static,
        computeValidationState: computeValidationState$static,
        computeValidationIconCls: computeValidationIconCls$static,
        __initStatics__: function() {
          TO_NUMBER$static_();
          TO_VALIDATION_STATE$static_();
          TO_VALIDATION_ICON$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.validation.Validators_properties",
        "com.coremedia.ui.data.validation.Issue",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.mixins.ValidationState",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.FormatUtil"]
    };
});
