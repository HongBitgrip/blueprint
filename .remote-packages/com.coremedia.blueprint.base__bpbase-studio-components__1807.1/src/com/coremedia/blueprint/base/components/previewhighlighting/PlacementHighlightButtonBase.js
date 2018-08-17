Ext.define("com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase", function(PlacementHighlightButtonBase) {/*package com.coremedia.blueprint.base.components.previewhighlighting {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.messageService;
import com.coremedia.cms.editor.sdk.premular.Premular;
import com.coremedia.cms.editor.sdk.preview.PreviewIFrame;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.Ext;
import ext.panel.Panel;

import js.Window;

[ResourceBundle('com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton')]
[ResourceBundle('com.coremedia.cms.editor.ContentTypes')]
public class PlacementHighlightButtonBase extends IconButton {

  private var metadataService:IMetadataService;
  private var previewPanelField:PreviewPanel;
  private var placementHighlightMetadata:PlacementHighlightMetadata;
  private var showFragments:Boolean;
  private var previousMetadatatreeRoot:MetadataTreeNode;

  internal static const PLACEMENT_LOCAL_IDENTIFIER:String = "CMChannel_placement-";
  internal static const PLACEMENT_LOCAL_TEXT:String = "_text";
  internal static const PLACEMENTHIGHLIGHTING_LOCAL_IDENTIFIER:String = "PlacementHighlighting_";
  internal static const LOCAL_STARAGE_PLACEMENTHIGHLIGHTED:String = 'preview.placementHighlighted';


  public*/ function PlacementHighlightButtonBase$(config/*:PlacementHighlightButton = null*/) {if(arguments.length<=0)config=null;
    this.super$8ApM(config);
    this.showFragments$8ApM = readButtonSelection$static();
    this.toggle(this.showFragments$8ApM);
    this.hide();
    this.on('afterrender',AS3.bind( this,"initButton$8ApM"));
    this.addListener('click',AS3.bind( this,"handleButtonClick$8ApM"));
  }/*

  private*/ function handleButtonClick()/*:void*/ {
    this.showFragments$8ApM = !this.showFragments$8ApM;
    this.sendHighlightEvent$8ApM();
  }/*

  private*/ function sendHighlightEvent()/*:void*/ {
    var frame/*:PreviewIFrame*/ =AS3.as( this.getPreviewPanel$8ApM().findByType(com.coremedia.cms.editor.sdk.preview.PreviewIFrame)[0],  com.coremedia.cms.editor.sdk.preview.PreviewIFrame);
    var targetWindow/*:Window*/ = frame.getContentWindow();
    if (this.showFragments$8ApM) {
      var returnMap = this.buildPlacementsMap$8ApM(this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.ContentTypes').content);
      Ext.apply(returnMap, this.buildPlacementDescriptionMap$8ApM(this.resourceManager.getResourceBundle(null, 'com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton').content));
      com.coremedia.cms.editor.sdk.messageService.sendMessage(targetWindow, com.coremedia.blueprint.base.components.previewhighlighting.PreviewHighlightingMessageTypes.TO_HIGHLIGHT_MODE, returnMap);
    }
    else {
      com.coremedia.cms.editor.sdk.messageService.sendMessage(targetWindow, com.coremedia.blueprint.base.components.previewhighlighting.PreviewHighlightingMessageTypes.TO_DEFAULT_MODE , {});
    }
    storeButtonSelection$static(this.showFragments$8ApM);
  }/*

  private*/ function buildPlacementsMap(localizations/*:Object*/)/*:Object*/ {
    var placementsMap/*:Object*/ = new Object();
    for (var key/*:String*/ in localizations) {
      if(key.indexOf(PlacementHighlightButtonBase.PLACEMENT_LOCAL_IDENTIFIER) >= 0 && key.indexOf(PlacementHighlightButtonBase.PLACEMENT_LOCAL_TEXT) >= 0){
        var technicalKey = key.substr(PlacementHighlightButtonBase.PLACEMENT_LOCAL_IDENTIFIER.length);
        technicalKey = technicalKey.substr(0, technicalKey.indexOf(PlacementHighlightButtonBase.PLACEMENT_LOCAL_TEXT));
        placementsMap[technicalKey] = localizations[key];
      }
    }
    return placementsMap;
  }/*

  private*/ function buildPlacementDescriptionMap(localizations/*:Object*/)/*:Object*/ {
    var descriptionsMap/*:Object*/ = new Object();
    for (var key/*:String*/ in localizations) {
      if(key.indexOf(PlacementHighlightButtonBase.PLACEMENTHIGHLIGHTING_LOCAL_IDENTIFIER) >= 0){
        descriptionsMap[key] = localizations[key];
      }
    }
    return descriptionsMap;
  }/*

  private*/ function initButton()/*:void*/ {var this$=this;
    var metadataLoadedVE/*:ValueExpression*/;
    metadataLoadedVE = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var ms/*:IMetadataService*/ = this$.getMetadataService();
      if(!ms) {
        return undefined;
      }
      var metadataTree/*:MetadataTree*/ = ms.getMetadataTree();
      return metadataTree.getRoot() ? true : false;
    });

    var metadataPreviousLoadedRootVE/*:ValueExpression*/;
    metadataPreviousLoadedRootVE = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:MetadataTreeNode*/ {
      var ms/*:IMetadataService*/ = this$.getMetadataService();
      if(!ms) {
        return undefined;
      }
      var metadataTree/*:MetadataTree*/ = ms.getMetadataTree();
      return metadataTree.getRoot();
    });

    if (!metadataLoadedVE.getValue()) {
      // metadata not yet loaded
      metadataLoadedVE.addChangeListener(AS3.bind(this,"reevaluateButtonState$8ApM"));
    }
    else {
      this.reevaluateButtonState$8ApM();
    }

    metadataPreviousLoadedRootVE.addChangeListener(function (currentNode/*:ValueExpression*/)/*:void*/ {
      if (currentNode.getValue() !== this$.previousMetadatatreeRoot$8ApM) {
        this$.reevaluateButtonState$8ApM();
      }
      this$.previousMetadatatreeRoot$8ApM = currentNode.getValue();
    });
  }/*


  private*/ function reevaluateButtonState()/*:void*/ {
    var containsPlacements/*:Boolean*/ = this.getPlacementHighlightMetadata$8ApM().previewContainsPlacementMetadata();

    if (containsPlacements) {
      this.show();
    }
    else {
      this.hide();
    }
  }/*

  private*/ function getPlacementHighlightMetadata()/*:PlacementHighlightMetadata*/ {
    if (!this.placementHighlightMetadata$8ApM) {
      this.placementHighlightMetadata$8ApM = new com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightMetadata(this.getMetadataService());
    }
    return this.placementHighlightMetadata$8ApM;
  }/*

  private*/ function getPreviewPanel()/*:PreviewPanel*/ {
    if (!this.previewPanelField$8ApM) {
      var activeTab/*:Panel*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  Ext.panel.Panel);
      if (activeTab) {
        this.previewPanelField$8ApM =AS3.as( activeTab.findByType(com.coremedia.cms.editor.sdk.preview.PreviewPanel.xtype)[0],  com.coremedia.cms.editor.sdk.preview.PreviewPanel);
        if (this.previewPanelField$8ApM) {
          this.previewPanelField$8ApM.addListener('previewUrl',AS3.bind( this,"sendHighlightEvent$8ApM"));
        }
      }
    }
    return this.previewPanelField$8ApM;
  }/*

  public*/ function getMetadataService()/*:IMetadataService*/ {
    if (!this.metadataService$8ApM) {
      var previewPanel/*:PreviewPanel*/ = this.getPreviewPanel$8ApM();
      if(previewPanel) {
        this.metadataService$8ApM = previewPanel.getMetadataService();
      }
    }
    return this.metadataService$8ApM;
  }/*

  private static*/ function storeButtonSelection$static(state/*:Boolean*/)/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(PlacementHighlightButtonBase.LOCAL_STARAGE_PLACEMENTHIGHLIGHTED, state.toString());
  }/*

  private static*/ function readButtonSelection$static()/*:Boolean*/ {
    return(com.coremedia.ui.util.LocalStorageUtil.getItem(PlacementHighlightButtonBase.LOCAL_STARAGE_PLACEMENTHIGHLIGHTED) === 'true');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      metadataService$8ApM: null,
      previewPanelField$8ApM: null,
      placementHighlightMetadata$8ApM: null,
      showFragments$8ApM: false,
      previousMetadatatreeRoot$8ApM: null,
      constructor: PlacementHighlightButtonBase$,
      super$8ApM: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      handleButtonClick$8ApM: handleButtonClick,
      sendHighlightEvent$8ApM: sendHighlightEvent,
      buildPlacementsMap$8ApM: buildPlacementsMap,
      buildPlacementDescriptionMap$8ApM: buildPlacementDescriptionMap,
      initButton$8ApM: initButton,
      reevaluateButtonState$8ApM: reevaluateButtonState,
      getPlacementHighlightMetadata$8ApM: getPlacementHighlightMetadata,
      getPreviewPanel$8ApM: getPreviewPanel,
      getMetadataService: getMetadataService,
      statics: {
        PLACEMENT_LOCAL_IDENTIFIER: "CMChannel_placement-",
        PLACEMENT_LOCAL_TEXT: "_text",
        PLACEMENTHIGHLIGHTING_LOCAL_IDENTIFIER: "PlacementHighlighting_",
        LOCAL_STARAGE_PLACEMENTHIGHLIGHTED: 'preview.placementHighlighted'
      },
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton_properties",
        "com.coremedia.cms.editor.ContentTypes_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.messageService",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrame",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightMetadata",
        "com.coremedia.blueprint.base.components.previewhighlighting.PreviewHighlightingMessageTypes"
      ]
    };
});
