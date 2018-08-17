Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetSitesGridPanelBase", function(TargetSitesGridPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EncodingUtil;

import ext.Ext;
import ext.dom.Element;
import ext.grid.GridPanel;
import ext.selection.CheckboxSelectionModel;
import ext.selection.SelectionModel;

public class TargetSitesGridPanelBase extends GridPanel {
  private var selectionModel:SelectionModel;
  private var viewReady:Boolean = false;
  private var sitesToSelect:Array;
  private var allSitesSelected:Boolean = true;

  [Bindable]
  public var selectedSitesValueExpression:ValueExpression;

  [Bindable]
  public var sitesValueExpression:ValueExpression;

  public*/ function TargetSitesGridPanelBase$(config/*:TargetSitesGridPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$y8Xa(config);

    AS3.getBindable(this,"sitesValueExpression").addChangeListener(AS3.bind(this,"sitesChanged$y8Xa"));
    this.sitesChanged$y8Xa();

    this.on('viewready',AS3.bind( this,"onViewReady"));

    // when clicking on the header (checkbox or label) select / deselect all
    this.on('headerclick', function (ct, column, e, t, eOpts)/*:void*/ {
      var selectionModel/*:SelectionModel*/ = this$.getCheckboxSelectionModel();
      var el/*:Element*/ = this$.getHeaderContainer().getEl().selectNode('.x-column-header-checkbox', false);
      var headerChecked/*:Boolean*/ = el.hasCls(Ext.baseCSSPrefix + 'grid-hd-checker-on');
      headerChecked ? selectionModel.deselectAll() : selectionModel.selectAll(false);
    });
  }/*

  protected*/ function getCheckboxSelectionModel()/*:SelectionModel*/ {
    if (!this.selectionModel$y8Xa) {
      this.selectionModel$y8Xa = Ext.create(Ext.selection.CheckboxModel, {mode: 'SIMPLE'});
      // disable default CheckboxModel behavior on header click:
      this.selectionModel$y8Xa['onHeaderClick'] = Ext.emptyFn;
    }

    return this.selectionModel$y8Xa;
  }/*

  protected*/ function onViewReady()/*:void*/ {
    this.viewReady$y8Xa = true;
    if (this.sitesToSelect$y8Xa) {
      // Before the view is ready, the selected sites must not be set
      // or the style classes indicating the selection would get lost
      // when rendering the view.
      AS3.getBindable(this,"selectedSitesValueExpression").setValue(this.sitesToSelect$y8Xa);
    }
  }/*

  protected*/ function tooltipRenderer(value/*:String*/, metadata/*:Object*/, record/*:**/)/*:String*/ {
    var site/*:Site*/ = record.getBean();
    if (site) {
      metadata.tdAttr = 'data-qtip="' + com.coremedia.ui.util.EncodingUtil.encodeForHTML(site.getName()) + '"';
    }
    return value;
  }/*

  private*/ function sitesChanged()/*:void*/ {
    var sites/*:Array*/ = AS3.getBindable(this,"sitesValueExpression").getValue();

    var selectedSitesCount/*:uint*/ = 0;
    if (AS3.as(AS3.getBindable(this,"selectedSitesValueExpression").getValue(),  Array)) {
      selectedSitesCount = (AS3.as(AS3.getBindable(this,"selectedSitesValueExpression").getValue(),  Array)).length;
    }

    // If all sites of the previous site list were selected, select all sites again.
    if (this.allSitesSelected$y8Xa) {
      if (this.viewReady$y8Xa) {
        AS3.getBindable(this,"selectedSitesValueExpression").setValue(sites);
      } else {
        this.sitesToSelect$y8Xa = sites;
      }
    }
    this.allSitesSelected$y8Xa = selectedSitesCount === sites.length;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"sitesValueExpression").removeChangeListener(AS3.bind(this,"sitesChanged$y8Xa"));
    Ext.grid.Panel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      selectionModel$y8Xa: null,
      viewReady$y8Xa: false,
      sitesToSelect$y8Xa: null,
      allSitesSelected$y8Xa: true,
      constructor: TargetSitesGridPanelBase$,
      super$y8Xa: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      getCheckboxSelectionModel: getCheckboxSelectionModel,
      onViewReady: onViewReady,
      tooltipRenderer: tooltipRenderer,
      sitesChanged$y8Xa: sitesChanged,
      beforeDestroy: beforeDestroy,
      config: {
        selectedSitesValueExpression: null,
        sitesValueExpression: null
      },
      requires: [
        "Ext",
        "Ext.grid.Panel",
        "Ext.selection.CheckboxModel",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
