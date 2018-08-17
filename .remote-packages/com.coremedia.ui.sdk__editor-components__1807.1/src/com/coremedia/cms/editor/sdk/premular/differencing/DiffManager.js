Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.DiffManager", function(DiffManager) {/*package com.coremedia.cms.editor.sdk.premular.differencing {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.impl.Difference;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.HistoricContent;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;

public class DiffManager {
  private var thePremular:PremularBase;

  /**
   * A value expression evaluating to the parameters for the differencing operation.
   * /
  private var diffParametersValueExpression:ValueExpression;

  private var overviewDiffComputation:OverviewDiffComputation;
  private var propertyDiffComputations:Object =*/function propertyDiffComputations_(){this.propertyDiffComputations$bLAM=( {});}/*;

  private var pausedValueExpression:ValueExpression;

  public*/ function DiffManager$(thePremular/*:PremularBase*/) {propertyDiffComputations_.call(this);
    this.thePremular$bLAM = thePremular;
  }/*

  public*/ function initialize()/*:void*/ {
    this.diffParametersValueExpression$bLAM = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeDiffParameters$bLAM"));
    this.overviewDiffComputation$bLAM = new com.coremedia.cms.editor.sdk.premular.differencing.OverviewDiffComputation(this.thePremular$bLAM, this.diffParametersValueExpression$bLAM);
  }/*

  public*/ function getPausedValueExpression()/*:ValueExpression*/ {
    if (!this.pausedValueExpression$bLAM) {
      this.pausedValueExpression$bLAM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.pausedValueExpression$bLAM;
  }/*

  public*/ function isPaused()/*:Boolean*/ {
    return this.getPausedValueExpression().getValue();
  }/*

  public*/ function getContent()/*:Content*/ {
    var contentInForm/*:Content*/ = this.thePremular$bLAM.getReadOnlyContent();
    if (AS3.is(contentInForm,  com.coremedia.cms.editor.sdk.premular.HistoricContent)) {
      contentInForm = AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,contentInForm).getContent();
    }
    return contentInForm;
  }/*

  public*/ function getVersion()/*:Version*/ {
    var contentInForm/*:Content*/ = this.thePremular$bLAM.getReadOnlyContent();
    if (AS3.is(contentInForm,  com.coremedia.cms.editor.sdk.premular.HistoricContent)) {
      return AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,contentInForm).getVersion();
    }
    return null;
  }/*

  public*/ function isPropertyChanged(propertyName/*:String*/)/*:Difference*/ {
    if (this.isPaused()) {
      return null;
    }

    var diffs/*:Object*/ = this.overviewDiffComputation$bLAM.getValue();
    return diffs ? diffs[propertyName] : null;
  }/*

  public*/ function getChangedProperties()/*:Array*/ {
    if (this.isPaused()) {
      return [];
    }

    var diffs/*:Object*/ = this.overviewDiffComputation$bLAM.getValue();
    return com.coremedia.ui.util.ObjectUtils.getPropertyNames(diffs);
  }/*

  public*/ function getMarkupDiff(comp/*:Component*/, propertyName/*:String*/)/*:Blob*/ {
    if (this.isPaused()) {
      return null;
    }

    var key/*:String*/ = comp.getId();
    if (!this.propertyDiffComputations$bLAM[key]) {
      this.propertyDiffComputations$bLAM[key] = new com.coremedia.cms.editor.sdk.premular.differencing.MarkupDiffComputation(comp, propertyName, this.diffParametersValueExpression$bLAM);
    }
    return AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.MarkupDiffComputation,this.propertyDiffComputations$bLAM[key]).getValue();
  }/*

  private*/ function computeDiffParameters()/*:Object*/ {
    // Do not compute diff parameters while the diff computation is paused.
    if (this.isPaused()) {
      return null;
    }

    // Get the premular content and make sure it is loaded.
    var content/*:Content*/ = this.thePremular$bLAM.getContent();
    if (!content) {
      return null;
    }
    if (content.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
      return null;
    }

    var readOnlyContent/*:Content*/ = this.thePremular$bLAM.getReadOnlyContent();
    if (!readOnlyContent) {
      return null;
    }
    if (AS3.is(readOnlyContent,  com.coremedia.cms.editor.sdk.premular.HistoricContent)) {
      // A version is specified. Make sure it is loaded.
      var readOnlyVersion/*:Version*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,readOnlyContent).getVersion();
      if (readOnlyVersion.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
        readOnlyVersion.load();
        return null;
      }

      if (AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,readOnlyContent).getContent() === content) {
        // A specific version of the form content is specified.
        // Compare it to the current content.
        return {
          start: readOnlyVersion,
          end: content
        };
      } else {
        // A version of another content is specified. This can only be the master content.
        // Compare it to the master version.
        return computeDiffParametersForMaster$static(readOnlyVersion, content);
      }
    } else {
      // A content is specified. This can only be the master content.
      // Compare it to the master version.
      return computeDiffParametersForMaster$static(readOnlyContent, content);
    }
  }/*

  private static*/ function computeDiffParametersForMaster$static(readOnlyContentObject/*:ContentObject*/, content/*:Content*/)/*:Object*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var masterVersion/*:Version*/ = sitesService.getMasterVersionOrDerivedFromVersion(content);

    if (!masterVersion) {
      return null;
    }
    if (masterVersion.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
      masterVersion.load();
      return null;
    }

    return {
      start: masterVersion,
      end: readOnlyContentObject
    };
  }/*

  public*/ function destroy()/*:void*/ {
    if (this.overviewDiffComputation$bLAM) {
      this.overviewDiffComputation$bLAM.dispose();
    }
    for (var property/*:String*/ in this.propertyDiffComputations$bLAM) {
      if (this.propertyDiffComputations$bLAM.hasOwnProperty(property)) {
        var computation/*:AbstractDiffComputation*/ = this.propertyDiffComputations$bLAM[property];
        computation.dispose();
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      thePremular$bLAM: null,
      diffParametersValueExpression$bLAM: null,
      overviewDiffComputation$bLAM: null,
      pausedValueExpression$bLAM: null,
      constructor: DiffManager$,
      initialize: initialize,
      getPausedValueExpression: getPausedValueExpression,
      isPaused: isPaused,
      getContent: getContent,
      getVersion: getVersion,
      isPropertyChanged: isPropertyChanged,
      getChangedProperties: getChangedProperties,
      getMarkupDiff: getMarkupDiff,
      computeDiffParameters$bLAM: computeDiffParameters,
      destroy: destroy,
      requires: [
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.cms.editor.sdk.premular.differencing.MarkupDiffComputation",
        "com.coremedia.cms.editor.sdk.premular.differencing.OverviewDiffComputation"
      ]
    };
});
