Ext.define("com.coremedia.elastic.social.studio.actions.ContributionActionBase", function(ContributionActionBase) {/*package com.coremedia.elastic.social.studio.actions {
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.actions.ValueExpressionAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class ContributionActionBase extends DependencyTrackedAction implements ValueExpressionAction {
  private var contributionValueExpression:ValueExpression;

  private var hideOnDisable:Boolean;

  /**
   * @param config the config object
   * /
  public*/ function ContributionActionBase$(config/*:ContributionAction = null*/) {if(arguments.length<=0)config=null;
    if (AS3.getBindable(config,"contributionValueExpression"))  {
      this.contributionValueExpression$dBSE = AS3.getBindable(config,"contributionValueExpression");
    } else {
      this.contributionValueExpression$dBSE = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }

    //If contributions are configured...
    if (AS3.getBindable(config,"contributions")) {
      //... set the value of contribution value expression to the contributions
      this.contributionValueExpression$dBSE.setValue(AS3.getBindable(config,"contributions"));
    }

    this.hideOnDisable$dBSE = AS3.getBindable(config,"hideOnDisable");

    this.super$dBSE(config);

  }/*

  override public*/ function setDisabled(disabled/*:Boolean*/)/*:void*/ {
    if (this.hideOnDisable$dBSE) {
      this.setHidden(disabled);
    } else {
      com.coremedia.ui.actions.DependencyTrackedAction.prototype.setDisabled.call(this,disabled);
    }
  }/*

  /**
   * @private
   * /
  public*/ function getValueExpression()/*:ValueExpression*/ {
    return this.contributionValueExpression$dBSE;
  }/*

  /**
   * Return whether this action is disabled for the given array of contributions.
   * Override this method to implement more specific disable behaviour.
   *
   * @param contributions the array of contributions: never empty.
   * @return whether this action is disabled
   * /
  protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  /**
   * Return whether this action is hidden for the given array of contribution.
   * Override this method to implement more specific hide behaviour.
   * By default, this method returns <code>false</code>.
   *
   * @param contributions the array of contribution or undefined
   * @return whether this action is hidden
   * /
  protected*/ function isHiddenFor(contributions/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var contributions/*:Array*/ = this.getContributions();
    return !contributions || contributions.length === 0 || this.isDisabledFor(contributions);
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return this.isHiddenFor(this.getContributions());
  }/*

  /**
   * Return the contributions on which this action operates.
   * If there is no contribution it returns an empty array.
   * /
  protected*/ function getContributions()/*:Array*/ {
    var value/*:**/ = this.contributionValueExpression$dBSE.getValue();
    return AS3.is( value,  com.coremedia.elastic.social.studio.model.Contribution) ? [AS3.as(value,  com.coremedia.elastic.social.studio.model.Contribution)] :AS3.is( value,  Array) ?AS3.as( value,  Array) : [];
  }/*

  public*/ function setContributions(contributions/*:Array*/)/*:void*/ {
    this.contributionValueExpression$dBSE.setValue(contributions);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      contributionValueExpression$dBSE: null,
      hideOnDisable$dBSE: false,
      constructor: ContributionActionBase$,
      super$dBSE: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setDisabled: setDisabled,
      getValueExpression: getValueExpression,
      isDisabledFor: isDisabledFor,
      isHiddenFor: isHiddenFor,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      getContributions: getContributions,
      setContributions: setContributions,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.actions.ValueExpressionAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.Contribution"]
    };
});
