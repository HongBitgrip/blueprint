Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataActionBase", function(MetadataActionBase) {/*package com.coremedia.cms.editor.sdk.actions.metadata {
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.actions.ValueExpressionAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * <p>An abstract <code>ext.Action</code> that performs a read-only operation on the configured metadata.</p>
 * <p>The action is disabled when there is no configured metadata.</p>
 * <p>Override the method <code>isDisabledFor</code> to provide a more specific disable behaviour.</p>
 *
 * @see com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction
 * /
[PublicApi]
public class MetadataActionBase extends DependencyTrackedAction implements ValueExpressionAction {
  private var metadataValueExpression:ValueExpression;

  private var hideOnDisable:Boolean;

  /**
   * @param config the config object
   * /
  public*/ function MetadataActionBase$(config/*:MetadataAction = null*/) {if(arguments.length<=0)config=null;
    this.super$tNpA(config);

    //...otherwise create a metadata value expression
    this.metadataValueExpression$tNpA = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();

    //If metadata is configured...
    if (AS3.getBindable(config,"metadata")) {
      //... set the value of metadata value expression to the metadata
      this.metadataValueExpression$tNpA.setValue(AS3.getBindable(config,"metadata"));
    }

    this.hideOnDisable$tNpA = AS3.getBindable(config,"hideOnDisable") ? AS3.getBindable(config,"hideOnDisable") : false;
  }/*

  /**
   * @private
   * /
  public*/ function getValueExpression()/*:ValueExpression*/ {
    return this.metadataValueExpression$tNpA;
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='metadataVariableName')]
  public*/ function setMetadata(metadata/*:**/)/*:void*/ {
    this.metadataValueExpression$tNpA.setValue(metadata);
  }/*

  /**
   * Return whether this action is disabled on the given metadata.
   * Override this method to implement more specific disable behaviour.
   *
   * @param metadata the metadata tree node.
   * @return whether this action is disabled
   * @private because MetadataTreeNode parameter is not public API
   * /
  protected*/ function isDisabledFor(metadata/*:MetadataTreeNode*/)/*:Boolean*/ {
    return false;
  }/*

  private*/ function isDisabledOrNoMetadata()/*:Boolean*/ {
    var metadata/*:MetadataTreeNode*/ = this.getMetadata();
    return !metadata || this.isDisabledFor(metadata);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return !this.hideOnDisable$tNpA && this.isDisabledOrNoMetadata$tNpA();
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return this.hideOnDisable$tNpA && this.isDisabledOrNoMetadata$tNpA();
  }/*

  /**
   * Return the metadata on which this action operates.
   * If there is no metadata it returns undefined.
   *
   * @private because MetadataTreeNode is not public API
   * /
  protected*/ function getMetadata()/*:MetadataTreeNode*/ {
    return AS3.as( this.metadataValueExpression$tNpA.getValue(),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      metadata: {
        "": ["PublicApi"],
        setMetadata: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "metadataVariableName"
          ]
        ]
      },
      metadataValueExpression$tNpA: null,
      hideOnDisable$tNpA: false,
      constructor: MetadataActionBase$,
      super$tNpA: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      getValueExpression: getValueExpression,
      setMetadata: setMetadata,
      isDisabledFor: isDisabledFor,
      isDisabledOrNoMetadata$tNpA: isDisabledOrNoMetadata,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      getMetadata: getMetadata,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.actions.ValueExpressionAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode"]
    };
});
