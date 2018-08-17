Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanelBase", function(BulkResultPanelBase) {/*package com.coremedia.cms.editor.sdk.bulkOperation {

import com.coremedia.cap.content.results.BulkOperationResultItem;

import ext.Component;

import ext.Ext;
import ext.StringUtil;
import ext.panel.Panel;

public class BulkResultPanelBase extends Panel {
  /**
   * Show only the content of each result item.
   * /
  public static const CONTENT_MODE:String = "Content";
  /**
   * Show content and impediment of each result item, content on the left.
   * /
  public static const CONTENT_BEFORE_IMPEDIMENT_MODE:String = "ContentBeforeImpediment";
  /**
   * Show content and impediment of each result item, content on the right.
   * /
  public static const CONTENT_AFTER_IMPEDIMENT_MODE:String = "ContentAfterImpediment";

  /**
   * @param config the config object
   * /
  public*/ function BulkResultPanelBase$(config/*:BulkResultPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$kMYJ(config);
  }/*

  /**
   * A list of publication errors.
   * /
  [Bindable]
  public var bulkResultItems:Array;

  /**
   * A description of the error sections to display.
   * /
  [Bindable]
  public var sectionSpecs:Array;

  /**
   * The resource bundle for the current operation.
   * /
  [Bindable]
  public var resourceBundle:Object;

  /**
   * The prefix to use for properties in the resource bundle.
   * /
  [Bindable]
  public var resourcePrefix:String;

  /**
   * The message pattern for the panel title.
  * /
  [Bindable]
  public var titlePattern:String;

  /**
   * A component to render when the publicationResultItems are empty.
   * /
  [Bindable]
  public var emptyListPanel:Component;

  /**
   * Whether to show the publisher-related menu items in the context menus; default true.
   * /
  [Bindable]
  public var showPublisherMenuItems:Boolean = true;

  private*/ function indexResultSetsByResultCode()/*:Object*/ {
    var alreadyProcessed/*:Object*/ = {};
    var resultSetsByResultCode/*:Object*/ = {};
    AS3.getBindable(this,"bulkResultItems").forEach(function(resultItem/*:BulkOperationResultItem*/)/*:void*/ {
      var key/*:String*/ = resultItem.resultCode + "|" +
              (resultItem.content ? resultItem.content.getUriPath() : "") + "|" +
              (resultItem.impediment ? resultItem.impediment.getUriPath() : "");
      if (!alreadyProcessed[key]) {
        alreadyProcessed[key] = true;
        var resultCode/*:String*/ = resultItem.resultCode;
        if (!(resultCode in resultSetsByResultCode)) {
          resultSetsByResultCode[resultCode] = [];
        }
        (AS3.as(resultSetsByResultCode[resultCode],  Array)).push(resultItem);
      }
    });
    return resultSetsByResultCode;
  }/*

  override protected*/ function initComponent()/*:void*/ {var this$=this;
    Ext.panel.Panel.prototype.initComponent.call(this);

    var resultSetsByResultCode/*:Object*/ = this.indexResultSetsByResultCode$kMYJ();
    // Determine the total number of result items to display.
    var messageCount/*:int*/ = this.getMessageCount$kMYJ(resultSetsByResultCode);

    if (AS3.getBindable(this,"titlePattern")) {
      // Compute and set the title showing the number of items.
      var title/*:String*/ = Ext.String.format(AS3.getBindable(this,"titlePattern"), messageCount);
      AS3.setBindable(this,"title" , title);
      this.setTitle(title);
    }

    if (AS3.getBindable(this,"emptyListPanel") && messageCount === 0) {
      // If there are no result items to display, show a message.
      this.add(AS3.getBindable(this,"emptyListPanel"));
      return; // fast path
    }

    // For each result code add a component showing the associated result items.
    var collapse/*:Boolean*/ = false;
    AS3.getBindable(this,"sectionSpecs").forEach(function(sectionSpec/*:Object*/)/*:void*/ {
      var resultCode/*:String*/ = getResultCode$static(sectionSpec);
      var mode/*:String*/ = getMode$static(sectionSpec);
      var resultSet/*:Array*/ = resultSetsByResultCode[resultCode];

      if (resultSet) {
        // Build configurations for the individual report fragments.
        var resultSetConfig/*:BulkResultItemSetBase*/;
        if (mode === BulkResultPanelBase.CONTENT_MODE) {
          resultSetConfig = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSet,{});
        } else {
          var pairResultSetConfig/*:PairBulkResultItemSet*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.PairBulkResultItemSet,{});
          if (mode === BulkResultPanelBase.CONTENT_BEFORE_IMPEDIMENT_MODE) {
            AS3.setBindable(pairResultSetConfig,"leftPropertyPath" , 'content');
            AS3.setBindable(pairResultSetConfig,"rightPropertyPath" , 'impediment');
          } else {
            AS3.setBindable(pairResultSetConfig,"leftPropertyPath" , 'impediment');
            AS3.setBindable(pairResultSetConfig,"rightPropertyPath" , 'content');
          }
          resultSetConfig = pairResultSetConfig;
        }
        AS3.setBindable(resultSetConfig,"resourceBundle" , AS3.getBindable(this$,"resourceBundle"));
        AS3.setBindable(resultSetConfig,"resourcePrefix" , AS3.getBindable(this$,"resourcePrefix"));
        AS3.setBindable(resultSetConfig,"showPublisherMenuItems" , AS3.getBindable(this$,"showPublisherMenuItems"));
        resultSetConfig.itemId = resultCode;
        AS3.setBindable(resultSetConfig,"resultCode" , resultCode);
        AS3.setBindable(resultSetConfig,"resultItems" , resultSet);

        // collapse all but the first panel:
        AS3.setBindable(resultSetConfig,"collapsed" , collapse);
        collapse = true;

        this$.add(resultSetConfig);
      }
    });
  }/*

  private*/ function getMessageCount(resultSetsByResultCode/*:Object*/)/*:int*/ {
    var messageCount/*:int*/ = 0;
    AS3.getBindable(this,"sectionSpecs").forEach(function (sectionSpec/*:Object*/)/*:void*/ {
      var resultCode/*:String*/ = getResultCode$static(sectionSpec);
      //noinspection JSMismatchedCollectionQueryUpdate
      var resultSet/*:Array*/ = resultSetsByResultCode[ resultCode];
      if (resultSet) {
        messageCount += resultSet.length;
      }
    });
    return messageCount;
  }/*

  private static*/ function getResultCode$static(sectionSpec/*:Object*/)/*:String*/ {
    return Ext.isString(sectionSpec) ? String(sectionSpec) : sectionSpec.resultCode;
  }/*

  private static*/ function getMode$static(sectionSpec/*:Object*/)/*:String*/ {
    return Ext.isString(sectionSpec) ? BulkResultPanelBase.CONTENT_MODE : sectionSpec.mode;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      constructor: BulkResultPanelBase$,
      super$kMYJ: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      indexResultSetsByResultCode$kMYJ: indexResultSetsByResultCode,
      initComponent: initComponent,
      getMessageCount$kMYJ: getMessageCount,
      config: {
        bulkResultItems: null,
        sectionSpecs: null,
        resourceBundle: null,
        resourcePrefix: null,
        titlePattern: null,
        emptyListPanel: null,
        showPublisherMenuItems: true
      },
      statics: {
        CONTENT_MODE: "Content",
        CONTENT_BEFORE_IMPEDIMENT_MODE: "ContentBeforeImpediment",
        CONTENT_AFTER_IMPEDIMENT_MODE: "ContentAfterImpediment"
      },
      requires: [
        "Ext",
        "Ext.String",
        "Ext.panel.Panel"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultItemSet",
        "com.coremedia.cms.editor.sdk.bulkOperation.PairBulkResultItemSet"
      ]
    };
});
