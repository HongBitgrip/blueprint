Ext.define("com.coremedia.cms.editor.sdk.premular.IssuesWindowBase", function(IssuesWindowBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class IssuesWindowBase extends StudioDialog {
  private var warnIssueModelsExpression:ValueExpression;
  private var errorIssueModelsExpression:ValueExpression;

  public*/ function IssuesWindowBase$(config/*:IssuesWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$FBjT(config);
  }/*

  /**
   * The value expression that this plugin binds to. It evaluates
   * to the content object whose issues are supposed to be visualized.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The Premular.
   * /
  [Bindable]
  public var premular:Premular;

  private*/ function getFilteredIssues(predicate/*:Function*/)/*:Array*/ {
    return this.getIssues().filter(predicate);
  }/*

  /**
   * Retrieve the issues to be displayed in this window. By default, the bindTo expression
   * is evaluated and the contained content (if any) is asked for all its issues.
   *
   * @return the issues
   * /
  protected*/ function getIssues()/*:Array*/ {
    return AS3.getBindable(this,"bindTo").getValue() || [];
  }/*

  /**
   * Return an array of all issue models for issues at level warn.
   * @return the models
   * /
  protected*/ function getWarnIssues()/*:Array*/ {
    return this.getFilteredIssues$FBjT(com.coremedia.cms.editor.sdk.validation.ValidationUtil.isWarnIssue);
  }/*

  /**
   * Return an array of all issue models for issues at level error.
   * @return the models
   * /
  protected*/ function getErrorIssues()/*:Array*/ {
    return this.getFilteredIssues$FBjT(com.coremedia.cms.editor.sdk.validation.ValidationUtil.isErrorIssue);
  }/*

  protected*/ function getWarnIssuesExpression()/*:ValueExpression*/ {
    if (!this.warnIssueModelsExpression$FBjT) {
      this.warnIssueModelsExpression$FBjT = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getWarnIssues"));
    }
    return this.warnIssueModelsExpression$FBjT;
  }/*

  protected*/ function getErrorIssuesExpression()/*:ValueExpression*/ {
    if (!this.errorIssueModelsExpression$FBjT) {
      this.errorIssueModelsExpression$FBjT = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getErrorIssues"));
    }
    return this.errorIssueModelsExpression$FBjT;
  }/*

  protected*/ function globalIssueClicked(issueModel/*:IssueModel*/)/*:void*/ {var this$=this;
    if (issueModel.code === 'master_updated') {
      com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Version*/ {
        var content/*:Content*/ = AS3.getBindable(this$,"premular").getContent();
        if (!content) {
          return null;
        }
        // Open latest version. (Not the content itself. This issue
        // reports differences compared to checked-in versions.)
        var master/*:Content*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getMaster(content);
        if (master === undefined) {
          return undefined;
        }
        if (master === null) {
          return null;
        }
        return master.getCheckedInVersion() || master.getCheckedOutVersion();
      }).loadValue(function(master/*:Version*/)/*:void*/ {
        if (master) {
          AS3.getBindable(this$,"premular").openInReadOnlyDocumentPanel(master);
        }
      });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      warnIssueModelsExpression$FBjT: null,
      errorIssueModelsExpression$FBjT: null,
      constructor: IssuesWindowBase$,
      super$FBjT: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      getFilteredIssues$FBjT: getFilteredIssues,
      getIssues: getIssues,
      getWarnIssues: getWarnIssues,
      getErrorIssues: getErrorIssues,
      getWarnIssuesExpression: getWarnIssuesExpression,
      getErrorIssuesExpression: getErrorIssuesExpression,
      globalIssueClicked: globalIssueClicked,
      config: {
        bindTo: null,
        premular: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil"
      ]
    };
});
