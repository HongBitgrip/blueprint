Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowIssuesPanelBase", function(WorkflowIssuesPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.IssuesPanel;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.EventManager;
import ext.Ext;
import ext.StringUtil;
import ext.XTemplate;
import ext.event.Event;
import ext.panel.Panel;
import ext.view.DataView;

import js.HTMLCollection;
import js.HTMLElement;
import js.KeyEvent;

import mx.resources.ResourceManager;

public class WorkflowIssuesPanelBase extends IssuesPanel {

  private static const*/var CM_CONTENT_URI_HTML_ATTRIBUTE$static/*:String*/ = "cm-content-uri";/*
  private static const*/var EXTENDED_CONTENT_WARNING_ATTRIBUTE$static/*:String*/ = "extended-content-warning";/*

  [Bindable]
  public var cmOwnerCt:Component;

  public*/ function WorkflowIssuesPanelBase$(config/*:WorkflowIssuesPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$bPG9(config);

    this.getView().addListener("itemclick",AS3.bind( this,"issuesClicked$bPG9"));
  }/*


  override protected*/ function afterRender()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.premular.IssuesPanel.prototype.afterRender.call(this);

    Ext.EventManager.on(this.getView().getEl(), 'keyup', function (evt/*:KeyEvent*/, t/*:**/, o/*:**/)/*:void*/ {
      if (evt.keyCode === KeyEvent.DOM_VK_ENTER || evt.keyCode === KeyEvent.DOM_VK_RETURN || evt.keyCode === KeyEvent.DOM_VK_SPACE) {
        var element/*:HTMLElement*/ = Ext.getDom(evt.target);
        //the only criteria we know is the attribute name, so we filter for it
        var elements/*:HTMLCollection*/ = element.getElementsByTagName("*");
        for (var i/*:int*/ = 0; i < elements.length; i++) {
          if (elements[i].getAttribute(CM_CONTENT_URI_HTML_ATTRIBUTE$static)) {
            this$.nodeClicked$bPG9(elements[i]);
          }
        }
      }
    });
  }/*

  protected static*/ function getWorkflowIssuesTemplate$static()/*:XTemplate*/ {
    return new Ext.XTemplate('<div class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.BLOCK + '">{[this.renderWorkflowIssues(values)]}</div>', {
      renderWorkflowIssues: WorkflowIssuesPanelBase.renderWorkflowIssues
    });
  }/*

  public static*/ function renderWorkflowIssues$static(values/*:Array*/)/*:String*/ {
    return com.coremedia.ui.util.ArrayUtils.reduce(values, function (previous/*:String*/, current/*:WorkflowIssueModel*/)/*:String*/ {
      return previous + renderWorkflowIssue$static(current);
    }, "");
  }/*

  private static*/ function renderWorkflowIssue$static(model/*:WorkflowIssueModel*/)/*:String*/ {
    var code/*:String*/ = model.code;
    var message/*:String*/ = model.message;
    var contents/*:Array*/ = model.contents;
    var users/*:Array*/ = model.users;
    var contentMultiplicity/*:String*/ = (contents.length > 1) ? "pl_text" : "sg_text";

    var codeDescription/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', "workflow_contentSetIssue_" + code + "_" + contentMultiplicity);
    if (!codeDescription) {
      if (mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.publication.Publisher', 'publicationResult_error_' + code + "_" + contentMultiplicity)) {
        codeDescription = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.publication.Publisher', 'publicationResult_error_' + code + "_" + contentMultiplicity), contents.length);
      }
    }
    if (!codeDescription) {
      codeDescription = code;
    }

    if (code === com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.WARNING_CODE_EXTENDED_WORKFLOW_EXCEEDED) {
      contentMultiplicity = contents > 1 ? "pl_text" : "sg_text";
      codeDescription = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.actions.ContentSetErrors', "workflow_contentSetIssue_" + code + "_" + contentMultiplicity, [contents]);
    }

    var renderedContentList/*:String*/ = "";
    var renderedUserList/*:String*/ = "";

    if (code === com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.INFO_CODE_EXTENDED_WORKFLOW) {
      codeDescription = '<div tabIndex="0" role="button" class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_LINK + '" ' + EXTENDED_CONTENT_WARNING_ATTRIBUTE$static + '="#">'
              + codeDescription + '</div>';
    } else if (users.length > 0) {
      renderedUserList = renderUserList$static(users);
    } else if (contents.length > 0) {
      renderedContentList = renderContentList$static(contents);
    } else if (code === com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues.ERROR_CODE_INTERNAL_ERROR && message && message !== "") {
      codeDescription = codeDescription + " [" + message + "]";
    }

    return '<div class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ELEMENT_ITEM + ' ' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_BLOCK + ' ' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_MODIFIER_WITH_LIST + '">' +
            addCodeDescription$static(codeDescription) +
            renderedUserList +
            renderedContentList +
            '</div>';
  }/*

  private static*/ function addCodeDescription$static(codeDescription/*:String*/)/*:String*/ {
    if (codeDescription.indexOf("<") === 0) {
      return codeDescription;
    } else {
      return '<div class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_TEXT + '">' + codeDescription + '</div>';
    }
  }/*

  private static*/ function renderUserList$static(users/*:Array*/)/*:String*/ {
    return '<ul class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_LIST + '">' +
            com.coremedia.ui.util.ArrayUtils.reduce(users, function (previous/*:String*/, user/*:User*/)/*:String*/ {
              var encodedName/*:String*/ = com.coremedia.ui.util.EncodingUtil.encodeForHTML(user.getName());
              return previous + '<li class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_TEXT + '">' + encodedName + '</li>';
            }, '') +
            '</ul>';
  }/*

  private static*/ function renderContentList$static(contents/*:Array*/)/*:String*/ {
    return '<ul class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_LIST + '">' +
            com.coremedia.ui.util.ArrayUtils.reduce(contents, function (previous/*:String*/, content/*:Content*/)/*:String*/ {
              var encodedName/*:String*/ = content.getState().readable ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(content.getName() || '') : com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);
              if (content.getState().readable) {
                return previous + '<li tabIndex="0" role="button" class="' + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_LINK + '"' + CM_CONTENT_URI_HTML_ATTRIBUTE$static + '=' + content.getUriPath() + '>' + encodedName + '</li>';
              } else {
                content.load();
                return previous + '<li>' + encodedName + '</li>';
              }
            }, '') +
            '</ul>';
  }/*


  private*/ function getExtentedContentSetCollapsiblePanel()/*:Panel*/ {
    return AS3.as( AS3.getBindable(this,"cmOwnerCt").findParentByType(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel.xtype).queryById(com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel.EXTENDED_CONTENTS_COLLAPSIBLE_ITEM_ID),  Ext.panel.Panel);
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function issuesClicked(v/*:DataView*/, record/*:BeanRecord*/, item/*:HTMLElement*/, index/*:int*/, e/*:Event*/)/*:void*/ {
    var node/*:HTMLElement*/ = e.getTarget();
    this.nodeClicked$bPG9(node);
  }/*

  private*/ function nodeClicked(node/*:HTMLElement*/)/*:void*/ {
    if (AS3.getBindable(this,"cmOwnerCt") && node.getAttribute(EXTENDED_CONTENT_WARNING_ATTRIBUTE$static)) {
      var collapsiblePanel/*:Panel*/ = this.getExtentedContentSetCollapsiblePanel$bPG9();
      if (collapsiblePanel && AS3.getBindable(collapsiblePanel,"collapsed","DUMMY")) {
        collapsiblePanel.expand(false);
      }
    }

    if (node.getAttribute(CM_CONTENT_URI_HTML_ATTRIBUTE$static)) {
      var contentUri/*:String*/ =AS3.as( node.getAttribute(CM_CONTENT_URI_HTML_ATTRIBUTE$static),  String);
      var content/*:Content*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(contentUri),  com.coremedia.cap.content.Content);
      if (content.isFolder()) {
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(content);
      } else {
        com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.IssuesPanel",
      constructor: WorkflowIssuesPanelBase$,
      super$bPG9: function() {
        com.coremedia.cms.editor.sdk.premular.IssuesPanel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getExtentedContentSetCollapsiblePanel$bPG9: getExtentedContentSetCollapsiblePanel,
      issuesClicked$bPG9: issuesClicked,
      nodeClicked$bPG9: nodeClicked,
      config: {cmOwnerCt: null},
      statics: {
        getWorkflowIssuesTemplate: getWorkflowIssuesTemplate$static,
        renderWorkflowIssues: renderWorkflowIssues$static
      },
      requires: [
        "Ext",
        "Ext.EventManager",
        "Ext.String",
        "Ext.XTemplate",
        "Ext.panel.Panel",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanel",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanelBase",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel"]
    };
});
