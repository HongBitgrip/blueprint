Ext.define("com.coremedia.cms.editor.controlroom.workflow.AssignMembersPanelBase", function(AssignMembersPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cms.editor.sdk.member.MemberSearchField;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.createComponentSelector;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class AssignMembersPanelBase extends CollapsiblePanel {

  public static const RADIO_GROUP_OFFER:String = "radioGroupOffer";

  public static const RADIO_GROUP_ASSIGNMENT:String = "radioGroupAssign";

  private static const*/var RADIO_GROUP_NAME$static/*:String*/ = "assignMembersRadioGroup";/*

  /**
   * Value Expression holding the list of members to show.
   * /
  [Bindable]
  public var assignedMembersValueExpression:ValueExpression;

  private var isModeOfferVE:ValueExpression;
  private var selectedMembersVE:ValueExpression;

  private var memberSearchFieldCmp:MemberSearchField; //selected members in SelectMembersContainer

  public native function get forceReadOnlyValueExpression():ValueExpression;

  public*/ function AssignMembersPanelBase$(config/*:AssignMembersPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$$IBU(config);

    this.memberSearchFieldCmp$$IBU =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.editor.sdk.member.MemberSearchField.xtype).build()),  com.coremedia.cms.editor.sdk.member.MemberSearchField);
  }/*
  
  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.afterRender.call(this);
    this.mon(this.memberSearchFieldCmp$$IBU, "blur",AS3.bind( this,"modeAndMemberSelectionChanged$$IBU"));

    this.getSelectedMembersVE().addChangeListener(AS3.bind(this,"modeAndMemberSelectionChanged$$IBU"));
    this.getIsModeOfferVE().addChangeListener(AS3.bind(this,"modeAndMemberSelectionChanged$$IBU"));
    AS3.getBindable(this,"assignedMembersValueExpression").addChangeListener(AS3.bind(this,"assignedMembersChanged$$IBU"));
    this.assignedMembersChanged$$IBU(null);
  }/*

  public*/ function isOfferMode()/*:Boolean*/ {
    return this.getIsModeOfferVE().getValue();
  }/*

  protected*/ function getRadioGroupName()/*:String*/ {
    return this.getId() + "_" + RADIO_GROUP_NAME$static;
  }/*

  private*/ function assignedMembersChanged(ve/*:ValueExpression*/)/*:void*/ {
    if (AS3.getBindable(this,"assignedMembersValueExpression").getValue()) {
      if((AS3.as(AS3.getBindable(this,"assignedMembersValueExpression").getValue(),  Array)).length > 0) {
        this.isModeOfferVE$$IBU.setValue(false);
        this.getSelectedMembersVE().setValue(AS3.getBindable(this,"assignedMembersValueExpression").getValue());
      } else if ((AS3.as(AS3.getBindable(this,"assignedMembersValueExpression").getValue(),  Array)).length === 0) {
        if (!ve || (this.getSelectMembersContainerDisabledVE() && this.getSelectMembersContainerDisabledVE().getValue() &&AS3.as( ve.getValue(),  Array)).length === 0) {
          this.isModeOfferVE$$IBU.setValue(true);
        }
        this.getSelectedMembersVE().setValue(AS3.getBindable(this,"assignedMembersValueExpression").getValue());
      }
    }

    if (!this.getIsModeOfferVE().getValue() && (!AS3.getBindable(this,"assignedMembersValueExpression").getValue() || (AS3.as(AS3.getBindable(this,"assignedMembersValueExpression").getValue(),  Array)).length === 0)) {
      this.memberSearchFieldCmp$$IBU.applyValidationResult(false, this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AssignMembersPanel_noUsersAssigned_error'));
    } else {
      this.memberSearchFieldCmp$$IBU.applyValidationResult(true);
    }
  }/*

  private*/ function modeAndMemberSelectionChanged()/*:void*/ {
    if (this.getIsModeOfferVE().getValue()) {
      AS3.getBindable(this,"assignedMembersValueExpression").setValue([]);
    } else {
      AS3.getBindable(this,"assignedMembersValueExpression").setValue(this.getSelectedMembersVE().getValue());
    }

    if (!this.getIsModeOfferVE().getValue() && (AS3.as(this.getSelectedMembersVE().getValue(),  Array)).length === 0) {
      this.memberSearchFieldCmp$$IBU.applyValidationResult(false, this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'AssignMembersPanel_noUsersAssigned_error'));
    } else {
      this.memberSearchFieldCmp$$IBU.applyValidationResult(true);
    }
  }/*

  protected*/ function getIsModeOfferVE()/*:ValueExpression*/ {
    if (!this.isModeOfferVE$$IBU) {
      this.isModeOfferVE$$IBU = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    }
    return this.isModeOfferVE$$IBU;
  }/*

  protected static*/ function transformIsModeOffer$static(inputValue/*:String*/)/*:Boolean*/ {
    return inputValue === undefined || inputValue === AssignMembersPanelBase.RADIO_GROUP_OFFER;
  }/*

  protected*/ function getSelectMembersContainerDisabledVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      var readOnly/*:Boolean*/ = this$.forceReadOnlyValueExpression && this$.forceReadOnlyValueExpression.getValue();
      if (readOnly === true) {
        return readOnly;
      }
      return this$.getIsModeOfferVE().getValue();
    });
  }/*

  protected*/ function getRadioGroupDisabledVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      if (this$.forceReadOnlyValueExpression) {
        return this$.forceReadOnlyValueExpression.getValue();
      }
      return false;
    });
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function getSelectedMembersVE()/*:ValueExpression*/ {
    if (!this.selectedMembersVE$$IBU) {
      this.selectedMembersVE$$IBU = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }

    return this.selectedMembersVE$$IBU;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getSelectedMembersVE().removeChangeListener(AS3.bind(this,"modeAndMemberSelectionChanged$$IBU"));
    this.getIsModeOfferVE().removeChangeListener(AS3.bind(this,"modeAndMemberSelectionChanged$$IBU"));
    AS3.getBindable(this,"assignedMembersValueExpression").removeChangeListener(AS3.bind(this,"assignedMembersChanged$$IBU"));
    com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      isModeOfferVE$$IBU: null,
      selectedMembersVE$$IBU: null,
      memberSearchFieldCmp$$IBU: null,
      constructor: AssignMembersPanelBase$,
      super$$IBU: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      isOfferMode: isOfferMode,
      getRadioGroupName: getRadioGroupName,
      assignedMembersChanged$$IBU: assignedMembersChanged,
      modeAndMemberSelectionChanged$$IBU: modeAndMemberSelectionChanged,
      getIsModeOfferVE: getIsModeOfferVE,
      getSelectMembersContainerDisabledVE: getSelectMembersContainerDisabledVE,
      getRadioGroupDisabledVE: getRadioGroupDisabledVE,
      getSelectedMembersVE: getSelectedMembersVE,
      beforeDestroy: beforeDestroy,
      config: {assignedMembersValueExpression: null},
      statics: {
        RADIO_GROUP_OFFER: "radioGroupOffer",
        RADIO_GROUP_ASSIGNMENT: "radioGroupAssign",
        transformIsModeOffer: transformIsModeOffer$static
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.member.MemberSearchField",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.createComponentSelector"
      ]
    };
});
