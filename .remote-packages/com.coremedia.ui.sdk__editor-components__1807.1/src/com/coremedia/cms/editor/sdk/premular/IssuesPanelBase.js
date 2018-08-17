Ext.define("com.coremedia.cms.editor.sdk.premular.IssuesPanelBase", function(IssuesPanelBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

import ext.Ext;
import ext.XTemplate;
import ext.data.Store;
import ext.dom.Element;
import ext.event.Event;
import ext.view.DataView;

public class IssuesPanelBase extends CollapsiblePanel {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){IssuesPanelBase.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-issues"));}/*;
  public static const ELEMENT_ITEM:BEMElement =*/function ELEMENT_ITEM$static_(){IssuesPanelBase.ELEMENT_ITEM=( IssuesPanelBase.BLOCK.createElement("item"));}/*;

  public static const ISSUE_BLOCK:BEMBlock =*/function ISSUE_BLOCK$static_(){IssuesPanelBase.ISSUE_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-issue"));}/*;
  public static const ISSUE_ELEMENT_LINK:BEMElement =*/function ISSUE_ELEMENT_LINK$static_(){IssuesPanelBase.ISSUE_ELEMENT_LINK=( IssuesPanelBase.ISSUE_BLOCK.createElement("link"));}/*;
  public static const ISSUE_ELEMENT_TEXT:BEMElement =*/function ISSUE_ELEMENT_TEXT$static_(){IssuesPanelBase.ISSUE_ELEMENT_TEXT=( IssuesPanelBase.ISSUE_BLOCK.createElement("text"));}/*;
  public static const ISSUE_ELEMENT_LIST:BEMElement =*/function ISSUE_ELEMENT_LIST$static_(){IssuesPanelBase.ISSUE_ELEMENT_LIST=( IssuesPanelBase.ISSUE_BLOCK.createElement("list"));}/*;
  public static const ISSUE_MODIFIER_WITH_LIST:BEMModifier =*/function ISSUE_MODIFIER_WITH_LIST$static_(){IssuesPanelBase.ISSUE_MODIFIER_WITH_LIST=( IssuesPanelBase.ISSUE_BLOCK.createModifier("with-list"));}/*;

  private static const*/var ISSUE_LINK_BLOCK$static/*:BEMBlock*/;/* =*/function ISSUE_LINK_BLOCK$static_(){ISSUE_LINK_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-issue-link"));};/*
  private static const*/var ISSUE_LINK_MODIFIER_FOCUSED$static/*:BEMModifier*/;/* =*/function ISSUE_LINK_MODIFIER_FOCUSED$static_(){ISSUE_LINK_MODIFIER_FOCUSED$static=( ISSUE_LINK_BLOCK$static.createModifier("focused"));};/*

  public static const DATA_VIEW_ITEM_ID:String = "issues";

  /**
   * The value expression that this plugin binds to. It must evaluate
   * to the array of issue models to display.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  private var focusedLink:Element;

  public*/ function IssuesPanelBase$(config/*:IssuesPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$peRv(config);

    AS3.getBindable(this,"bindTo").addChangeListener(AS3.bind(this,"issuesChanged$peRv"));
    this.issuesChanged$peRv();
  }/*

  protected static*/ function getIssuesTemplate$static()/*:XTemplate*/ {
    return new Ext.XTemplate(
            '<div class="' + IssuesPanelBase.BLOCK + '">',
            '<tpl for=".">',
            '<div class="' + IssuesPanelBase.ELEMENT_ITEM + ' ' + IssuesPanelBase.ISSUE_BLOCK + '">',
            '<div tabIndex="0" role="button" class="' + IssuesPanelBase.ISSUE_ELEMENT_LINK + '">{propertyLabel}</div>',
            '<div class="' + IssuesPanelBase.ISSUE_ELEMENT_TEXT + '">{text:htmlEncode}</div>',
            '</div>',
            '</tpl>',
            '</div>');
  }/*

  public*/ function getView()/*:DataView*/ {
    return AS3.as( this.queryById(IssuesPanelBase.DATA_VIEW_ITEM_ID),  Ext.view.View);
  }/*

  private*/ function issuesChanged()/*:void*/ {
    var issueModels/*:Array*/ = AS3.getBindable(this,"bindTo").getValue();
    var store/*:Store*/ =AS3.as( this.getView().getStore(),  Ext.data.Store);
    store.loadData(issueModels);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"issuesChanged$peRv"));
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.onDestroy.call(this);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.afterRender.call(this);

    this.mon(this.getEl(), "focusmove",AS3.bind( this,"focusLink$peRv"));
  }/*

  private*/ function focusLink(evt/*:Event*/)/*:void*/ {
    if (this.focusedLink$peRv) {
      this.focusedLink$peRv.removeCls(ISSUE_LINK_MODIFIER_FOCUSED$static.getCSSClass());
      this.focusedLink$peRv = null;
    }

    var target/*:Element*/ = Ext.get(evt.target);
    if (target && target.hasCls(IssuesPanelBase.ISSUE_ELEMENT_LINK.getCSSClass())) {
      this.focusedLink$peRv = target;
      this.focusedLink$peRv.addCls(ISSUE_LINK_MODIFIER_FOCUSED$static.getCSSClass());
    }
  }/*

  override protected*/ function onFocusEnter(evt/*:Event*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.onFocusEnter.call(this,evt);

    this.focusLink$peRv(evt);
  }/*

  override protected*/ function onFocusLeave(evt/*:Event*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.onFocusLeave.call(this,evt);

    if (this.focusedLink$peRv) {
      this.focusedLink$peRv.removeCls(ISSUE_LINK_MODIFIER_FOCUSED$static.getCSSClass());
      this.focusedLink$peRv = null;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      focusedLink$peRv: null,
      constructor: IssuesPanelBase$,
      super$peRv: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      getView: getView,
      issuesChanged$peRv: issuesChanged,
      onDestroy: onDestroy,
      afterRender: afterRender,
      focusLink$peRv: focusLink,
      onFocusEnter: onFocusEnter,
      onFocusLeave: onFocusLeave,
      config: {bindTo: null},
      statics: {
        BLOCK: undefined,
        ELEMENT_ITEM: undefined,
        ISSUE_BLOCK: undefined,
        ISSUE_ELEMENT_LINK: undefined,
        ISSUE_ELEMENT_TEXT: undefined,
        ISSUE_ELEMENT_LIST: undefined,
        ISSUE_MODIFIER_WITH_LIST: undefined,
        ISSUE_LINK_BLOCK: undefined,
        ISSUE_LINK_MODIFIER_FOCUSED: undefined,
        DATA_VIEW_ITEM_ID: "issues",
        getIssuesTemplate: getIssuesTemplate$static,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_ITEM$static_();
          ISSUE_BLOCK$static_();
          ISSUE_ELEMENT_LINK$static_();
          ISSUE_ELEMENT_TEXT$static_();
          ISSUE_ELEMENT_LIST$static_();
          ISSUE_MODIFIER_WITH_LIST$static_();
          ISSUE_LINK_BLOCK$static_();
          ISSUE_LINK_MODIFIER_FOCUSED$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.data.Store",
        "Ext.view.View",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.models.bem.BEMBlock"
      ]
    };
});
