Ext.define("com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase", function(MetadataToContributionActionAdapterBase) {/*package com.coremedia.elastic.social.studio.actions {
import com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.elastic.social.studio.model.Contribution;

import ext.Ext;

[PublicApi]
public class MetadataToContributionActionAdapterBase extends MetadataBeanAction {

  private var backingContributionAction:ContributionAction;

  public*/ function MetadataToContributionActionAdapterBase$(config/*:MetadataToContributionActionAdapter = null*/) {if(arguments.length<=0)config=null;
    this.backingContributionAction$LTwv = AS3.getBindable(config,"backingAction");

    var newConfig/*:MetadataToContributionActionAdapter*/ = AS3.cast(com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter,Ext.apply({
      iconCls: this.backingContributionAction$LTwv.getIconCls(),
      text: this.backingContributionAction$LTwv.getText(),
      handler:AS3.bind( this,"delegateToBackingAction$LTwv")
    }, config));

    this.super$LTwv(newConfig);
  }/*

  /**
   * @private because MetadataTreeNode parameter is not public API
   * /
  override protected*/ function isDisabledFor(metadata/*:MetadataTreeNode*/)/*:Boolean*/ {
    if (!this.getContributionForMetadata$LTwv(this.getMetadata())) {
      this.hide();
    } else {
      this.show();
    }

    this.updateBackingContributionAction$LTwv(metadata);
    return this.backingContributionAction$LTwv['calculateDisabled']();
  }/*

  private*/ function delegateToBackingAction()/*:void*/ {
    this.updateBackingContributionAction$LTwv(this.getMetadata());
    this.backingContributionAction$LTwv.execute();
  }/*

  private*/ function updateBackingContributionAction(metadata/*:MetadataTreeNode*/)/*:void*/ {
    var metadataContribution/*:Contribution*/ = this.getContributionForMetadata$LTwv(metadata);
    var contributionArray/*:Array*/ = [];
    if (metadataContribution) {
      contributionArray.push(metadataContribution);
    }
    this.backingContributionAction$LTwv.setContributions(contributionArray);
  }/*

  private*/ function getContributionForMetadata(metadata/*:MetadataTreeNode*/)/*:Contribution*/ {
    return AS3.as( this.getBeanForMetadata(metadata),  com.coremedia.elastic.social.studio.model.Contribution);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction",
      metadata: {"": ["PublicApi"]},
      backingContributionAction$LTwv: null,
      constructor: MetadataToContributionActionAdapterBase$,
      super$LTwv: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      delegateToBackingAction$LTwv: delegateToBackingAction,
      updateBackingContributionAction$LTwv: updateBackingContributionAction,
      getContributionForMetadata$LTwv: getContributionForMetadata,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter",
        "com.coremedia.elastic.social.studio.model.Contribution"
      ]
    };
});
