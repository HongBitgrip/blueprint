Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractLinkListAction", function(AbstractLinkListAction) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;

[PublicApi]
public class AbstractLinkListAction extends DependencyTrackedAction {

  [ExtConfig]
  public var linkListWrapper:ILinkListWrapper;

  [ExtConfig]
  public var selectedValuesExpression:ValueExpression;

  [ExtConfig]
  public var selectedPositionsExpression:ValueExpression;

  public*/ function AbstractLinkListAction$(config/*:AbstractLinkListAction = null*/) {if(arguments.length<=0)config=null;
    if (!config.handler) {
      AS3.setBindable(config,"handler" ,AS3.bind( this,"defaultHandler"));
    }
    if (config.iconCls === undefined) {
      AS3.setBindable(config,"iconCls" , this.createIconCls());
    }
    this.super$FCBx(config);
    this.linkListWrapper = config.linkListWrapper;
    this.selectedValuesExpression = config.selectedValuesExpression;
    this.selectedPositionsExpression = config.selectedPositionsExpression;
  }/*

  protected*/ function defaultHandler()/*:void*/ {
    //needs to be overridden by subclass
  }/*

  protected*/ function createIconCls()/*:String*/ {
    return null;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return this.linkListWrapper.isReadOnly();
  }/*

  protected*/ function getSelectedValues()/*:Array*/ {
    return this.selectedValuesExpression.getValue() || [];
  }/*

  protected*/ function getSelectedPositions()/*:Array*/ {
    return this.selectedPositionsExpression.getValue() || [];
  }/*

  protected*/ function isNothingSelected()/*:Boolean*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var selection/*:Array*/ = this.selectedValuesExpression.getValue();
    return !selection || selection.length === 0;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {"": ["PublicApi"]},
      linkListWrapper: null,
      selectedValuesExpression: null,
      selectedPositionsExpression: null,
      constructor: AbstractLinkListAction$,
      super$FCBx: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      defaultHandler: defaultHandler,
      createIconCls: createIconCls,
      calculateDisabled: calculateDisabled,
      getSelectedValues: getSelectedValues,
      getSelectedPositions: getSelectedPositions,
      isNothingSelected: isNothingSelected,
      requires: ["com.coremedia.ui.actions.DependencyTrackedAction"]
    };
});
