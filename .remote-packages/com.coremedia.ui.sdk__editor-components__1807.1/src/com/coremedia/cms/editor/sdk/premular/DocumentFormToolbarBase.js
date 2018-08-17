Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentFormToolbarBase", function(DocumentFormToolbarBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.authorization.Right;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.WorkflowContentService;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.StatefulQuickTip;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.StringUtil;
import ext.toolbar.Toolbar;
import ext.util.Format;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DocumentFormToolbarBase extends Toolbar {

  private var checkedOutValueExpression:ValueExpression;
  private var localeNameValueExpression:ValueExpression;

  private var lockedByWorkflowTextClickHandler:Function;

  private var checkedOutStatusClickHandler:Function;

  public static const LOCALE_NAME_ITEM_ID:String = "localName";
  public static const DOCUMENT_TOOLBAR_TEXT_CONTAINER_ITEM_ID:String = "documentToolbarTextContainer";


  /**
   * Create a new instance.
   * /
  public*/ function DocumentFormToolbarBase$(config/*:Toolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$BxwB(config);
  }/*

  /**
   * A value expression to the Content to find a form for.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  protected*/ function getContent()/*:Content*/ {
    return AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.cap.content.Content);
  }/*

  protected*/ function getCheckedOutValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.checkedOutValueExpression$BxwB) {
      this.checkedOutValueExpression$BxwB = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
        var content/*:Content*/ = this$.getContent();
        var text/*:String*/ = '';
        var helpTitle/*:String*/;
        var helpText/*:String*/ = '';
        var clickHandler/*:Function*/;
        var clickHandlerArgs/*:Array*/;

        if (content) {
          if (content.isCheckedOut()) {
            if (content.isCheckedOutByCurrentSession()) {
              text = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOut_text');
              helpText = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOut_info');
            } else {
              var editor/*:User*/ = content.getEditor();
              var name/*:String*/ = editor ? editor.getName() : "???";
              if (content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.WRITE)) {
                text = name ? Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOutByOther_mayWrite_text'), name) : '';
                helpText = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOutByOther_mayWrite_info');
              } else {
                text = name ? Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOutByOther_noRights_text'), name) : '';
                helpText = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_checkedOutByOther_noRights_info');
              }
            }
          } else if (!(content.getRepository().getAccessControl().mayPerform(content, com.coremedia.cap.content.authorization.Right.WRITE))) {
            text = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_noRights_text');
            helpText = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_noRights_info');
          } else {
            var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
            if (workflowRepository) {
              var workflowContentService/*:WorkflowContentService*/ = workflowRepository.getWorkflowContentService();
              // check if content is currently in a running locking workflow and show a locking message
              var isLockedForUser/*:Boolean*/ = workflowContentService.isLockedForUser(content);
              if (isLockedForUser) {
                var processArray/*:Array*/ = workflowContentService.getLockingProcesses(content);
                var workflowName/*:String*/ = "Workflow";
                if (processArray && processArray.length > 0) {
                  // we want to find the name of the process
                  processArray.forEach(function (process/*:Process*/)/*:void*/ {
                    if (process && process.getProperties()) {
                      if (process.getProperties().get("subject")) {
                        workflowName = process.getProperties().get("subject");
                      }
                    }
                  });
                }
                text = Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_locked_workflow_text'));
                helpTitle = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_locked_workflow_helpTitle');
                helpText = Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DocumentFormToolbar_state_locked_workflow_helpText'), workflowName);
                clickHandler = this$.lockedByWorkflowTextClickHandler$BxwB;
                clickHandlerArgs = [processArray[0]];
              }
            }
          }
        }

        var help/*:StatefulQuickTip*/ = null;
        if (helpText) {
          if (!helpTitle) {
            helpTitle = text;
          }
          help = AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
          AS3.setBindable(help,"title" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(helpTitle));
          help.text = com.coremedia.ui.util.EncodingUtil.encodeForHTML(helpText);
        }
        return {
          visible: ! !text,
          text: com.coremedia.ui.util.EncodingUtil.encodeForHTML(text),
          clickHandler: clickHandler,
          clickHandlerArgs: clickHandlerArgs,
          help: help ? help : ""
        };
      });
    }
    return this.checkedOutValueExpression$BxwB;
  }/*

  internal*/ function getLocaleValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.localeNameValueExpression$BxwB) {
      this.localeNameValueExpression$BxwB = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {

        var content/*:Content*/ = this$.getContent();
        if (content) {
          var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
          if (null !== workflowRepository) {
            var workflowContentService/*:WorkflowContentService*/ = workflowRepository.getWorkflowContentService();
            var isLockedForUser/*:Boolean*/ = workflowContentService.isLockedForUser(content);
            if (isLockedForUser) {
              return {text: '', help: '', visible: false};
            }
          }
        }

        if (!(content && content.getCheckedInVersion())) {
          return {text: '', help: '', visible: false};  // preserve space - do not show locale for checked-out content
        }
        var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
        if (site === undefined) {
          return undefined;
        }
        if (site && site.getLocale()) {
          var displayName/*:String*/ = site.getLocale().getDisplayName();
          return {text: displayName, help: displayName, visible: true};
        } else {
          return {text: '', help: '', visible: false};
        }
      });
    }
    return this.localeNameValueExpression$BxwB;
  }/*

  private*/ function attachCheckedOutStatusClickHandler(iconDisplayField/*:IconDisplayField*/)/*:void*/ {
    this.mon(iconDisplayField.inputEl, "click", this.checkedOutStatusClickHandler$BxwB);
    iconDisplayField.inputEl.setStyle("cursor", "pointer");
    iconDisplayField.textEl.setStyle("text-decoration", "underline");
  }/*

  private*/ function detachCheckedOutStatusClickHandler(iconDisplayField/*:IconDisplayField*/)/*:void*/ {
    iconDisplayField.textEl.setStyle("text-decoration", null);
    iconDisplayField.inputEl.setStyle("cursor", null);
    this.mun(iconDisplayField.inputEl, "click", this.checkedOutStatusClickHandler$BxwB);
  }/*

  public*/ function changeDisplayField(extendedDisplayField/*:ExtendedDisplayField*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var model/*:Object*/ = valueExpression.getValue();

    if (model) {
      if (model.visible !== !extendedDisplayField.hidden) {
        extendedDisplayField.setVisible(model.visible);
      }
      AS3.setBindable(extendedDisplayField,"value" , model.text);
      AS3.setBindable(extendedDisplayField,"tooltip" , model.help);
    }
  }/*

  public*/ function changeCheckedOutStatus(iconDisplayField/*:IconDisplayField*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    this.changeDisplayField(iconDisplayField, valueExpression);

    var model/*:Object*/ = valueExpression.getValue();

    if (model) {
      var clickHandler/*:Function*/ =AS3.as( model.clickHandler,  Function);
      if (this.checkedOutStatusClickHandler$BxwB) {
        if (iconDisplayField.rendered) {
          this.detachCheckedOutStatusClickHandler$BxwB(iconDisplayField);
        }
        this.checkedOutStatusClickHandler$BxwB = null;
      }
      if (clickHandler) {
        this.checkedOutStatusClickHandler$BxwB = function ()/*:void*/ {
          clickHandler.apply(null, model.clickHandlerArgs);
        };
        if (this.rendered) {
          this.attachCheckedOutStatusClickHandler$BxwB(iconDisplayField);
        } else {
          iconDisplayField.on("afterrender",AS3.bind( this,"attachCheckedOutStatusClickHandler$BxwB"));
        }
      }
    }
  }/*

  public*/ function changeLocale(extendedDisplayField/*:ExtendedDisplayField*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    this.changeDisplayField(extendedDisplayField, valueExpression);
  }/*

  public static*/ function changeType$static(iconDisplayField/*:IconDisplayField*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var cType/*:ContentType*/;
    try {
      cType =AS3.as( valueExpression.getValue(),  com.coremedia.cap.content.ContentType);
    } catch(e){if(AS3.is (e,AS3.Error)) {
      // Unreadable? Destroyed?
      cType = null;
    }else throw e;}
    if (cType) {
      AS3.setBindable(iconDisplayField,"iconCls" , com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(cType).toLowerCase());
      var labelForContentType/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLabelForContentType(cType);
      AS3.setBindable(iconDisplayField,"value" , Ext.util.Format.ellipsis(labelForContentType, 10, false));
      // if no tooltip is defined, fall back to unabbreviated content type name
      var tooltip/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getToolTipForContentType(cType) || labelForContentType;
      // for consistency, always show tooltip even if it does not add information.
      AS3.setBindable(iconDisplayField,"tooltip" , tooltip);
    }
  }/*

  public*/ function setLockedByWorkflowTextClickHandler(handler/*:Function*/)/*:void*/ {
    this.lockedByWorkflowTextClickHandler$BxwB = handler;
  }/*

  internal static*/ function changeLifecycleStatus$static(icon/*:IconDisplayField*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var status/*:String*/ = valueExpression.getValue();
    AS3.setBindable(icon,"tooltip" , com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLocalizedLifecycleStatus(status));
    AS3.setBindable(icon,"iconCls" , com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForStatus(status));
    // show only for "approved" and "published"
    icon.setVisible(status === com.coremedia.cap.content.LifecycleStatus.APPROVED || status === com.coremedia.cap.content.LifecycleStatus.PUBLISHED);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      checkedOutValueExpression$BxwB: null,
      localeNameValueExpression$BxwB: null,
      lockedByWorkflowTextClickHandler$BxwB: null,
      checkedOutStatusClickHandler$BxwB: null,
      constructor: DocumentFormToolbarBase$,
      super$BxwB: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      getContent: getContent,
      getCheckedOutValueExpression: getCheckedOutValueExpression,
      getLocaleValueExpression: getLocaleValueExpression,
      attachCheckedOutStatusClickHandler$BxwB: attachCheckedOutStatusClickHandler,
      detachCheckedOutStatusClickHandler$BxwB: detachCheckedOutStatusClickHandler,
      changeDisplayField: changeDisplayField,
      changeCheckedOutStatus: changeCheckedOutStatus,
      changeLocale: changeLocale,
      setLockedByWorkflowTextClickHandler: setLockedByWorkflowTextClickHandler,
      config: {bindTo: null},
      statics: {
        LOCALE_NAME_ITEM_ID: "localName",
        DOCUMENT_TOOLBAR_TEXT_CONTAINER_ITEM_ID: "documentToolbarTextContainer",
        changeType: changeType$static,
        changeLifecycleStatus: changeLifecycleStatus$static
      },
      requires: [
        "AS3.Error",
        "Ext.String",
        "Ext.toolbar.Toolbar",
        "Ext.util.Format",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cap.content.authorization.Right",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
