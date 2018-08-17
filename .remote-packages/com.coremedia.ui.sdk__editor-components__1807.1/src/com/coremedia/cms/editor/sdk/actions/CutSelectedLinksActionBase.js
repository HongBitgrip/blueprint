Ext.define("com.coremedia.cms.editor.sdk.actions.CutSelectedLinksActionBase", function(CutSelectedLinksActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListCutAction")]
[PublicApi]
public class CutSelectedLinksActionBase extends AbstractModifyLinksAction {
  private var selectedPositionsExpression:ValueExpression;


  /**
   * @param config the config object
   * /
  public*/ function CutSelectedLinksActionBase$(config/*:CutSelectedLinksAction = null*/) {if(arguments.length<=0)config=null;
    var selectedPositionsExpression/*:ValueExpression*/ = AS3.getBindable(config,"selectedPositionsExpression");
    this.setSelectedPositionsExpression(selectedPositionsExpression ? selectedPositionsExpression : com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]));
    this.super$kIAk(AS3.cast(com.coremedia.cms.editor.sdk.actions.CutSelectedLinksAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "cutToClipboard", {handler:AS3.bind( this,"cutSelectedLinks$kIAk")})));
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='selectedPositionsVariableName')]
  public*/ function setSelectedPositions(positions/*:Array*/)/*:void*/ {
    this.selectedPositionsExpression$kIAk.setValue(positions);
  }/*

  /**
   * @private
   * /
  public*/ function setSelectedPositionsExpression(expression/*:ValueExpression*/)/*:void*/ {
    // Switch to new expression.
    this.selectedPositionsExpression$kIAk = expression;
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.isDisabledFor.call(this,contents) || this.isNothingSelected$kIAk() || this.isSomethingNotReadable$kIAk();

  }/*

  private*/ function isNothingSelected()/*:Boolean*/ {
    var selectedPositions/*:Array*/ = this.selectedPositionsExpression$kIAk.getValue();
    return !selectedPositions || selectedPositions.length === 0;
  }/*

  private*/ function isSomethingNotReadable()/*:Boolean*/ {
    var selectedPositions/*:Array*/ = this.selectedPositionsExpression$kIAk.getValue();
    var linkContents/*:Array*/ = this.getLinks();
    if (selectedPositions.length > 0) {
      for (var i/*:int*/ =0; i < selectedPositions.length; i++) {
        var item/*:Content*/ =  linkContents[selectedPositions[i]];
        // In the case of a race condition, the selected positions may still refer to a deleted item.
        if (!item) {
          return true;
        }
        // Make sure the content is loaded eventually.
        item.load();
        // We found something unreadable.
        if (item.getState() !== com.coremedia.ui.data.BeanState.READABLE) {
          return true;
        }
      }
    }

    return !selectedPositions || selectedPositions.length === 0;
  }/*

  private*/ function cutSelectedLinks()/*:void*/ {
    var originalValue/*:Array*/ = this.getLinks();
    if (!originalValue || this.isNothingSelected$kIAk()) {
      // Should not happen, but be cautious.
      return;
    }

    var selectedPositions/*:Array*/ = this.selectedPositionsExpression$kIAk.getValue();
    var newValue/*:Array*/ = originalValue.filter(function(val/*:**/, pos/*:Number*/)/*:Boolean*/ {
      return selectedPositions.indexOf(pos) < 0;
    });
    this.setLinks(newValue);
    var cutValue/*:Array*/ = originalValue.filter(function(val/*:**/, pos/*:Number*/)/*:Boolean*/ {
      return selectedPositions.indexOf(pos) >= 0;
    });
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    clipboard.setValue(cutValue, com.coremedia.cms.editor.sdk.clipboard.Clipboard.CUTLINK);
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
            "com.coremedia.cms.editor.sdk.actions.LinkListCutAction"
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
      selectedPositionsExpression$kIAk: null,
      constructor: CutSelectedLinksActionBase$,
      super$kIAk: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction.prototype.constructor.apply(this, arguments);
      },
      setSelectedPositions: setSelectedPositions,
      setSelectedPositionsExpression: setSelectedPositionsExpression,
      isDisabledFor: isDisabledFor,
      isNothingSelected$kIAk: isNothingSelected,
      isSomethingNotReadable$kIAk: isSomethingNotReadable,
      cutSelectedLinks$kIAk: cutSelectedLinks,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.CutSelectedLinksAction",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard"
      ]
    };
});
