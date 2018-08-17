Ext.define("com.coremedia.cms.editor.sdk.premular.ContentIssuesPanelBase", function(ContentIssuesPanelBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.cms.editor.sdk.validation.ValidationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.util.AriaUtils;

import ext.EventManager;
import ext.Ext;

import ext.data.JsonStore;
import ext.data.Model;
import ext.data.Store;
import ext.dom.Element;
import ext.view.DataView;

import js.HTMLElement;
import js.KeyEvent;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ContentIssuesPanelBase extends IssuesPanel {

  /**
   * The manager for focusing a given property field.
   * /
  [Bindable]
  public var premularFocusManager:PremularFocusManager;

  /**
   * the property field registry for locating fields
   * /
  [Bindable]
  public var propertyFieldRegistry:PropertyFieldRegistry;

  public*/ function ContentIssuesPanelBase$(config/*:ContentIssuesPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$td14(config);

    this.getView().addListener("itemclick",AS3.bind( this,"issueClicked$td14"));
  }/*


  override protected*/ function afterRender()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.premular.IssuesPanel.prototype.afterRender.call(this);

    Ext.EventManager.on(this.getView().getEl(), 'keyup', function (evt/*:KeyEvent*/, t/*:**/, o/*:**/)/*:void*/ {
      if (evt.keyCode === KeyEvent.DOM_VK_ENTER || evt.keyCode === KeyEvent.DOM_VK_RETURN || evt.keyCode === KeyEvent.DOM_VK_SPACE) {
        this$.issueClicked$td14(this$.getView(), this$.getView().getSelectionModel().getSelection()[0], null, NaN);
      }
    });

    this.mon(this.getView(), "refresh",AS3.bind( this,"addDescribedBys$td14"));
  }/*

  private*/ function addDescribedBys()/*:void*/ {
    var queryResult/*:Array*/ = this.getView().getEl().query("." + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_BLOCK.getCSSClass(), false);
    queryResult.forEach(function (issueEl/*:Element*/)/*:void*/ {
      var textEl/*:Element*/ = issueEl.down("." + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_TEXT.getCSSClass());
      var linkEl/*:Element*/ = issueEl.down("." + com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ISSUE_ELEMENT_LINK.getCSSClass());
      if (textEl && linkEl) {
        textEl.dom.setAttribute("id", Ext.id());
        com.coremedia.ui.util.AriaUtils.addDescribedBy(linkEl,AS3.as( textEl.dom.getAttribute("id"),  String));
      }
    });
  }/*

  /**
   * A function to be called when a global issue is clicked;
   * the function receives an issue model as its single argument
   * /
  [ExtConfig]
  public var onGlobalIssueClick:Function;

  protected*/ function getIssueModels(issuesValueExpression/*:ValueExpression*/)/*:Array*/ {
    var issues/*:Array*/ =AS3.as( issuesValueExpression.getValue(),  Array);
    if (!issues) {
      return [];
    }
    var models/*:Array*/ = issues.map(AS3.bind(this,"toModel$td14"));
    models.sort(compareModels$static);
    for (var i/*:int*/ = 0; i < models.length; i++) {
      models[i].id = '' + i;
    }
    return models;
  }/*

  private*/ function toModel(issue/*:Issue*/)/*:IssueModel*/ {
    var model/*:IssueModel*/ = new com.coremedia.cms.editor.sdk.premular.IssueModel();
    model.entity = issue.entity;
    model.property = issue.property;
    var propertyPath/*:String*/ = com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + '.' + issue.property;
    if (issue.property) {
      var propertyLabel/*:String*/ = this.getPropertyLabel(issue);
      var contentTypeName/*:String*/ = AS3.cast(com.coremedia.cap.content.Content,issue.entity).getType().getName();
      var tabTitle/*:String*/ = AS3.getBindable(this,"propertyFieldRegistry").getTabTitle(propertyPath, contentTypeName);
      if (tabTitle) {
        model.propertyLabel = tabTitle + ' > ' + propertyLabel;
      } else {
        model.propertyLabel = propertyLabel;
      }
      model.itemIndexPath = AS3.getBindable(this,"propertyFieldRegistry").getItemIndexPath(propertyPath, contentTypeName);
    } else {
      model.propertyLabel = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'IssuesWindow_globalProperty_text');
      model.itemIndexPath = [];
    }
    model.text = com.coremedia.cms.editor.sdk.validation.ValidationUtil.formatText(issue);
    model.code = issue.code;
    return model;
  }/*

  //noinspection JSMethodCanBeStatic
  /**
   * Return a localized label for the property indicated in the given issue.
   * By default the issue is assume to refer to a document and the standard
   * localization of content properties applies.
   *
   * @param issue the issue
   * @return the localized property label
   * /
  protected*/ function getPropertyLabel(issue/*:Issue*/)/*:String*/ {
    return com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedLabel((AS3.as(issue.entity,  com.coremedia.cap.content.Content)).getType().getName(), issue.property);
  }/*

  private static*/ function compareModels$static(model1/*:IssueModel*/, model2/*:IssueModel*/)/*:Number*/ {
    // Global issues first;
    if (!model1.property) {
      if (model2.property) {
        return -1;
      }
    } else {
      if (!model2.property) {
        return 1;
      }
      // Both issues are property-specific.
      // Sort by item index path. This implicitly sorts by tab index.
      var prefixLength/*:Number*/ = Math.min(model1.itemIndexPath.length, model2.itemIndexPath.length);
      for (var i/*:uint*/ = 0; i < prefixLength; i++) {
        if (model1.itemIndexPath[i] !== model2.itemIndexPath[i]) {
          return model1.itemIndexPath[i] - model2.itemIndexPath[i];
        }
      }
      // The common prefix of the paths is identical. Shorter path comes first.
      if (model1.itemIndexPath.length < model2.itemIndexPath.length) {
        return -1;
      }
      if (model1.itemIndexPath.length > model2.itemIndexPath.length) {
        return 1;
      }
      // Sort by localized property label, in case the path could not be determined correctly.
      if (model1.propertyLabel < model2.propertyLabel) {
        return -1;
      }
      if (model1.propertyLabel > model2.propertyLabel) {
        return 1;
      }
    }
    // The issues affect the same property.
    // Sort by localized message text.
    if (model1.text < model2.text) {
      return -1;
    }
    if (model1.text > model2.text) {
      return 1;
    }
    return 0;
  }/*

  //noinspection JSMethodCanBeStatic
  protected*/ function getIssuesStore()/*:Store*/ {
    return Ext.create(Ext.data.JsonStore, {
      idProperty: 'id',
      fields: ['id', 'propertyLabel', 'property', 'text']
    });
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function issueClicked(v/*:DataView*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/)/*:void*/ {
    var issueModel/*:IssueModel*/ = (AS3.as(record.data,  com.coremedia.cms.editor.sdk.premular.IssueModel));
    var property/*:String*/ = issueModel.property;
    if (property) {
      var content/*:Content*/ =AS3.as( issueModel.entity,  com.coremedia.cap.content.Content);
      AS3.getBindable(this,"premularFocusManager").focusProperty(content, com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + '.' + property);
    } else if (this.onGlobalIssueClick) {
      this.onGlobalIssueClick(issueModel);
    }
  }/*

  override protected*/ function ariaCheck(config/*:CollapsiblePanel*/)/*:void*/ {
    if (AS3.is(config,  com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel) && AS3.getBindable((AS3.as(config,  com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel)),"titlePattern")) {
      return;
    }
    com.coremedia.cms.editor.sdk.premular.IssuesPanel.prototype.ariaCheck.call(this,config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.IssuesPanel",
      constructor: ContentIssuesPanelBase$,
      super$td14: function() {
        com.coremedia.cms.editor.sdk.premular.IssuesPanel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      addDescribedBys$td14: addDescribedBys,
      onGlobalIssueClick: null,
      getIssueModels: getIssueModels,
      toModel$td14: toModel,
      getPropertyLabel: getPropertyLabel,
      getIssuesStore: getIssuesStore,
      issueClicked$td14: issueClicked,
      ariaCheck: ariaCheck,
      config: {
        premularFocusManager: null,
        propertyFieldRegistry: null
      },
      requires: [
        "Ext",
        "Ext.EventManager",
        "Ext.data.JsonStore",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanel",
        "com.coremedia.ui.util.AriaUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.ContentIssuesPanel",
        "com.coremedia.cms.editor.sdk.premular.IssueModel",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanelBase",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.editor.sdk.validation.ValidationUtil"
      ]
    };
});
