Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.OpenDifferencesWindowButtonBase", function(OpenDifferencesWindowButtonBase) {/*package com.coremedia.cms.editor.sdk.premular.differencing {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.validation.IssuesButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.IssueImpl;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

public class OpenDifferencesWindowButtonBase extends IssuesButton implements IValidationStateMixin {
  private var issuesExpression:ValueExpression;

  public*/ function OpenDifferencesWindowButtonBase$(config/*:OpenDifferencesWindowButtonBase = null*/) {if(arguments.length<=0)config=null;
    this.super$E6Sj(config);
  }/*

  /**
   * Retrieve the issues to be displayed in this window. By default, the bindTo expression
   * is evaluated and the contained content (if any) is asked for all its issues.
   *
   * @return the issues
   * /
  protected*/ function getIssues(config/*:OpenDifferencesWindowButton*/)/*:Array*/ {
    var content/*:Content*/ = AS3.getBindable(config,"diffManager").getContent();
    if (!content) {
      return [];
    }
    var contentType/*:ContentType*/ = content.getType();
    if (!contentType) {
      return [];
    }
    var contentTypeName/*:String*/ = contentType.getName();

    var changedProperties/*:Array*/ = AS3.getBindable(config,"diffManager").getChangedProperties();
    var result/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < changedProperties.length; i++) {
      var propertyName/*:String*/ = changedProperties[i];

      if (AS3.getBindable(config,"premular").getReadOnlyPropertyFieldRegistry().getPropertyField("properties." + propertyName, contentTypeName)) {
        result.push(new com.coremedia.ui.data.impl.IssueImpl({
          entity: content,
          property: propertyName,
          code: ""
        }));
      }
    }
    return result;
  }/*

  protected*/ function getIssuesExpression(config/*:OpenDifferencesWindowButton*/)/*:ValueExpression*/ {
    if (!this.issuesExpression$E6Sj) {
      this.issuesExpression$E6Sj = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getIssues"), config);
    }
    return this.issuesExpression$E6Sj;
  }/*

  override protected*/ function transformValidationState(issues/*:Array*/)/*:ValidationState*/ {
    if (issues.length) {
      return com.coremedia.ui.mixins.ValidationState.SUCCESS;
    }
    return null;
  }/*

  override protected*/ function transformIconCls(issues/*:Array*/)/*:String*/ {
    return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenDifferencesWindow_btn_icon');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.validation.IssuesButton",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      issuesExpression$E6Sj: null,
      constructor: OpenDifferencesWindowButtonBase$,
      super$E6Sj: function() {
        com.coremedia.cms.editor.sdk.validation.IssuesButton.prototype.constructor.apply(this, arguments);
      },
      getIssues: getIssues,
      getIssuesExpression: getIssuesExpression,
      transformValidationState: transformValidationState,
      transformIconCls: transformIconCls,
      requires: [
        "com.coremedia.cms.editor.sdk.validation.IssuesButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.IssueImpl",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
