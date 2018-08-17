Ext.define("com.coremedia.cms.editor.sdk.actions.ContentUpdateActionBase", function(ContentUpdateActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * <p>An abstract <code>ContentAction</code> that performs a write operation on the configured contents.</p>
 *
 * <p>The action is disabled when at least one of the following conditions is true:</p>
 * <ul>
 *   <li>there is no configured content.</li>
 *   <li>the user has no sufficient right for the configured contents.</li>
 *   <li>the action is configured to be read-only using the <code>forceReadOnly</code> or
 * <code>forceReadOnlyVariableName</code> configuration.</li>
 * </ul>
 *
 * <p>Override the method <code>isDisabledFor</code> to provide a more specific disable behaviour.</p>
 *
 * <p>See <code>ContentAction</code> for a read-only content action.</p>
 *
 * @see com.coremedia.cms.editor.sdk.actions.ContentUpdateAction
 * @see com.coremedia.cms.editor.sdk.actions.ContentAction
 * /
[PublicApi]
public class ContentUpdateActionBase extends ContentAction {

  private var forceReadOnlyValueExpression:ValueExpression;
  private var readOnlyValueExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function ContentUpdateActionBase$(config/*:ContentUpdateAction = null*/) {if(arguments.length<=0)config=null;
    //If the forceReadOnlyValueExpression is configured...
    if (AS3.getBindable(config,"forceReadOnlyValueExpression"))  {
      //...then take that
      this.forceReadOnlyValueExpression$goMU = AS3.getBindable(config,"forceReadOnlyValueExpression");
    } else {
      //...otherwise create a value expression
      this.forceReadOnlyValueExpression$goMU = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }

    //If forceReadOnly is configured...
    if (AS3.getBindable(config,"forceReadOnly")) {
      //... set the value of forceReadOnlyValueExpression to the config
      this.forceReadOnlyValueExpression$goMU.setValue(AS3.getBindable(config,"forceReadOnly"));
    }

    this.super$goMU(config);
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='forceReadOnlyVariableName')]
  public*/ function setForceReadOnly(readOnly/*:Boolean*/)/*:void*/ {
    //If the forceOnly is already set we don't want change it.
    if (this.forceReadOnlyValueExpression$goMU.getValue() === undefined) {
      this.forceReadOnlyValueExpression$goMU.setValue(readOnly);
    }
  }/*

  private*/ function getReadOnlyValueExpression()/*:ValueExpression*/ {
    if (!this.readOnlyValueExpression$goMU) {
      this.readOnlyValueExpression$goMU = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(this.getValueExpression(), this.forceReadOnlyValueExpression$goMU);
    }

    return this.readOnlyValueExpression$goMU;
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return this.getReadOnlyValueExpression$goMU().getValue() || com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateDisabled.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {
        "": ["PublicApi"],
        setForceReadOnly: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "forceReadOnlyVariableName"
          ]
        ]
      },
      forceReadOnlyValueExpression$goMU: null,
      readOnlyValueExpression$goMU: null,
      constructor: ContentUpdateActionBase$,
      super$goMU: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      setForceReadOnly: setForceReadOnly,
      getReadOnlyValueExpression$goMU: getReadOnlyValueExpression,
      calculateDisabled: calculateDisabled,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
