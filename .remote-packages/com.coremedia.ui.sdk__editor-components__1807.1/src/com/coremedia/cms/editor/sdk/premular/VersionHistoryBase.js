Ext.define("com.coremedia.cms.editor.sdk.premular.VersionHistoryBase", function(VersionHistoryBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.ui.bem.LinkListBEMEntities;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.EventUtil;

import ext.DateUtil;
import ext.data.Store;
import ext.grid.GridPanel;

import js.HTMLElement;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class VersionHistoryBase extends PropertyFieldGroup {

  private var versionHistoryListView:GridPanel;
  private var _selectedValuesExpression:ValueExpression;
  private var _selectedSingleValueExpression:ValueExpression;
  private const STATUS_WAS_PUBLISHED:String = "was_published";


  public*/ function VersionHistoryBase$(config/*:VersionHistory = null*/) {if(arguments.length<=0)config=null;
    this.super$ehSl(config);
    if (!(AS3.as(this,  com.coremedia.ui.mixins.LazyItemsContainerMixin)).itemsAreLazy()) {
      this.afterLazyItemsAdded$ehSl();
    } else {
      this.addListener(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT,AS3.bind( this,"afterLazyItemsAdded$ehSl"));
    }
  }/*

  private*/ function afterLazyItemsAdded()/*:void*/ {
    this.versionHistoryListView$ehSl =AS3.as( this.queryById("versionHistory"),  Ext.grid.Panel);
    if (this.versionHistoryListView$ehSl) {
      this.versionHistoryListView$ehSl.addListener("afterrender",AS3.bind( this,"afterViewRender$ehSl"));
      this.versionHistoryListView$ehSl.getStore().addListener("load",AS3.bind( this,"attachVersionRowTooltips$ehSl"));
      this.versionHistoryListView$ehSl.getStore().addListener("datachanged",AS3.bind( this,"attachVersionRowTooltips$ehSl"));
      this.versionHistoryListView$ehSl.getStore().addListener("update",AS3.bind( this,"attachVersionRowTooltips$ehSl"));
    }
  }/*

  private*/ function afterViewRender()/*:void*/ {
    this.versionHistoryListView$ehSl.getHeaderContainer().addCls(com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_HEADER.getCSSClass());
  }/*

  /**
   * Returns the localized text that describes the lifecyclestatus.
   * @param status current status
   * @param data version
   * /
  internal*/ function lifecycleStatusDescription(status/*:String*/, data/*:Version*/)/*:String*/ {
    if (data.isLatestPublishedVersion()) {
      return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_latestPublished_text');
    }
    else {
      if (data.isLatestApprovedVersion()) {
        return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_latestApproved_text');
      } else if (data.getVersionNumber() == 1) {
        return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_initial_text');
      }
      else if (data.isLatestVersion()) {
        return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_latest_text');
      }
      else if (data.getPublisher()) {
        return this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_formerlyPublished_text');
      }
    }
    return "";
  }/*

  /**
   * Calculates the lifecyle status
   * @param status
   * @param data the data to Convert
   * @return lifecycle status of the version or was-published when publisher is set but not he latest published version
   * /
  internal*/ function lifecycleStatus(status/*:String*/, data/*:Version*/)/*:String*/ {
    var version/*:Version*/ =AS3.as( data,  com.coremedia.cap.content.Version);
    if (version) {
      if (version.getPublisher() && !version.isLatestPublishedVersion()) {
        return this.STATUS_WAS_PUBLISHED$ehSl;
      }
    }
    return status;
  }/*

  public*/ function  get$selectedValuesExpression()/*:ValueExpression*/ {
    if (!this._selectedValuesExpression$ehSl) {
      this._selectedValuesExpression$ehSl = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this._selectedValuesExpression$ehSl;
  }/*

  public*/ function  get$selectedSingleValueExpression()/*:ValueExpression*/ {
    if (!this._selectedSingleValueExpression$ehSl) {
      this._selectedSingleValueExpression$ehSl = com.coremedia.ui.data.ValueExpressionFactory.createSingleItemValueExpression(this.selectedValuesExpression);
    }
    return this._selectedSingleValueExpression$ehSl;
  }/*

  private*/ function attachVersionRowTooltips(st/*:Store*/)/*:void*/ {var this$=this;
    st.getData().each(function (rec/*:BeanRecord*/)/*:void*/ {
      (AS3.as(rec.getBean(),  com.coremedia.cap.content.Version)).load(function ()/*:void*/ {
        this$.attachVersionRowTooltip$ehSl(rec);
      });
    });
  }/*

  private*/ function attachVersionRowTooltip(rec/*:BeanRecord*/)/*:void*/ {var this$=this;
    var version/*:Version*/ =AS3.as( rec.getBean(),  com.coremedia.cap.content.Version);
    if (version.isDestroyed()) {
      return;
    }

    if (rec.getStore()) {
      var indexOfRecord/*:int*/ = rec.getStore().indexOf(rec);

      var text/*:String*/ = "";
      if (version.getApprover()) {
        text = text +
                "<tr>" +
                "<td>" + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_lastApprovedBy_text') + " </td>" +
                "<td>" + com.coremedia.ui.util.EncodingUtil.encodeForHTML(version.getApprover().getName()) + "</td>" +
                "<td>" + com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(version.getApprovalDate(), this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'))) + "</td>" +
                "</tr>";
      }
      if (version.getPublisher()) {
        text = text +
                "<tr>" +
                "<td>" + this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_history_state_lastPublishedBy_text') + " </td>" +
                "<td>" + com.coremedia.ui.util.EncodingUtil.encodeForHTML(version.getPublisher().getName()) + "</td>" +
                "<td>" + com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(version.getPublicationDate(), this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'))) + "</td>" +
                "</tr>";
      }
      if (text != "") {
        // Invoke later to give the list row some time to get ready. Otherwise, the 'qtip' property gets lost.
        com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
          var node/*:HTMLElement*/ = this$.versionHistoryListView$ehSl.getView().getNode(indexOfRecord);
          if (node) {
            node.setAttribute("data-qtip", "<table cellspacing='5' cellpadding='5'>" + text + "</table>");
          }
        });
      }
    }
  }/*

  protected*/ function getActiveHistoryContainerExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var content/*:Content*/ = AS3.getBindable(this$,"bindTo").getValue();
      if (content.getVersionHistory() === undefined || content.getVersionHistory().getItems() === undefined) {
        return undefined;
      }

      if (content.getVersionHistory().getItems().length > 0) {
        return com.coremedia.cms.editor.sdk.premular.VersionHistory.VERSIONS_CONTAINER_ITEM_ID;
      }

      return com.coremedia.cms.editor.sdk.premular.VersionHistory.EMPTY_VERSIONS_CONTAINER_ITEM_ID;
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      metadata: {"": ["PublicApi"]},
      versionHistoryListView$ehSl: null,
      _selectedValuesExpression$ehSl: null,
      _selectedSingleValueExpression$ehSl: null,
      STATUS_WAS_PUBLISHED$ehSl: "was_published",
      constructor: VersionHistoryBase$,
      super$ehSl: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      afterLazyItemsAdded$ehSl: afterLazyItemsAdded,
      afterViewRender$ehSl: afterViewRender,
      lifecycleStatusDescription: lifecycleStatusDescription,
      lifecycleStatus: lifecycleStatus,
      attachVersionRowTooltips$ehSl: attachVersionRowTooltips,
      attachVersionRowTooltip$ehSl: attachVersionRowTooltip,
      getActiveHistoryContainerExpression: getActiveHistoryContainerExpression,
      __accessors__: {
        selectedValuesExpression: {get: get$selectedValuesExpression},
        selectedSingleValueExpression: {get: get$selectedSingleValueExpression}
      },
      requires: [
        "Ext.Date",
        "Ext.grid.Panel",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.VersionHistory"]
    };
});
