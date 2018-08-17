Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksActionBase", function(DeleteSelectedLinksActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction")]
[PublicApi]
public class DeleteSelectedLinksActionBase extends AbstractModifyLinksAction {
  private var selectedPositionsExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function DeleteSelectedLinksActionBase$(config/*:DeleteSelectedLinksAction = null*/) {if(arguments.length<=0)config=null;
    var selectedPositionsExpression/*:ValueExpression*/ = AS3.getBindable(config,"selectedPositionsExpression");
    this.setSelectedPositionsExpression(selectedPositionsExpression ? selectedPositionsExpression : com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]));
    this.super$R_ll(AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "deleteSelectedLinks", {handler:AS3.bind( this,"deleteSelectedLinks$R_ll")})));
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='selectedPositionsVariableName')]
  public*/ function setSelectedPositions(positions/*:Array*/)/*:void*/ {
    this.selectedPositionsExpression$R_ll.setValue(positions);
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedPositionsExpression(expression/*:ValueExpression*/)/*:void*/ {
    // Switch to new expression.
    this.selectedPositionsExpression$R_ll = expression;
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.isDisabledFor.call(this,contents) || this.isNothingSelected$R_ll();
  }/*

  private*/ function isNothingSelected()/*:Boolean*/ {
    var selectedPositions/*:Array*/ = this.selectedPositionsExpression$R_ll.getValue();
    return !selectedPositions || selectedPositions.length === 0;
  }/*

  private*/ function deleteSelectedLinks()/*:void*/ {
    var links/*:Array*/ = this.getLinks();
    var originalValue/*:**/ = this.getPropertyValueExpression().getValue();

    if (!links || this.isNothingSelected$R_ll()) {
      // Should not happen, but be cautious.
      return;
    }

    var isStringProperty/*:Boolean*/ =AS3.is( originalValue,  String);
    if (isStringProperty) {
      links = String(originalValue).split(',');
    }

    var selectedPositions/*:Array*/ = this.selectedPositionsExpression$R_ll.getValue();
    var newValue/*:**/ = links.filter(function(val/*:**/, pos/*:Number*/)/*:Boolean*/ {
      return selectedPositions.indexOf(pos) < 0;
    });

    if (isStringProperty) {
      newValue = newValue.join(',');
    }
    this.setLinks(newValue);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction",
      metadata: {
        "": [
          "Deprecated",
          [
            "since",
            "1710.1",
            "replacement",
            "com.coremedia.cms.editor.sdk.actions.LinkListRemoveAction"
          ],
          "PublicApi"
        ],
        setSelectedPositions: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "selectedPositionsVariableName"
          ]
        ]
      },
      selectedPositionsExpression$R_ll: null,
      constructor: DeleteSelectedLinksActionBase$,
      super$R_ll: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.constructor.apply(this, arguments);
      },
      setSelectedPositions: setSelectedPositions,
      setSelectedPositionsExpression: setSelectedPositionsExpression,
      isDisabledFor: isDisabledFor,
      isNothingSelected$R_ll: isNothingSelected,
      deleteSelectedLinks$R_ll: deleteSelectedLinks,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksAction"
      ]
    };
});
