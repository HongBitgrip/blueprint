Ext.define("com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel", function(ContentIssuesPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
/**
 A component for showing content issues.
 Do not use the bindTo configuration option for this component.
 It is internally derived from the issuesValueExpression configuration option.
 * /
public class ContentIssuesPanel extends ContentIssuesPanelBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.contentIssuesPanel";

    public*/function ContentIssuesPanel$(config/*:ContentIssuesPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase,{});
    var defaults_$1/*:ContentIssuesPanel*/ =AS3.cast(ContentIssuesPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getIssueModels"), AS3.getBindable(config,"issuesValueExpression")));
    AS3.setBindable(config_$1,"issuesTemplate" , com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.getIssuesTemplate());
    AS3.setBindable(config_$1,"store" , this.getIssuesStore());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$N9RJ(config_$1);
  }/*

    /**
     * The value expression that this plugin binds to. It must evaluate
     * to the array of issues to display.
     * /
    [Bindable]
    public var issuesValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.contentIssuesPanel",
      constructor: ContentIssuesPanel$,
      super$N9RJ: function() {
        com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {issuesValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.IssuesPanelBase"]
    };
});
