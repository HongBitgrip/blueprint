Ext.define("com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapter", function(MetadataToContributionActionAdapter) {/*package com.coremedia.elastic.social.studio.actions{
import com.coremedia.elastic.social.studio.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adapter that implements a MetadataAction based on a backing ContributionAction.

 All critical methods are delegated to the backing ContributionAction after extracting
 a contribution from the underlying metadata. If no contribution can be obtained from
 the MetadataTreeNode (or one of it's parents if useParentNode is enabled), the
 backing ContributionAction is configured with an empty contributions array.

 @see com.coremedia.elastic.social.studio.actions.ContributionAction

 * /
public class MetadataToContributionActionAdapter extends MetadataToContributionActionAdapterBase{

    public*/function MetadataToContributionActionAdapter$(config/*:MetadataToContributionActionAdapter = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase,{});
    var defaults_$1/*:MetadataToContributionActionAdapter*/ =AS3.cast(MetadataToContributionActionAdapter,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JuV8(config_$1);
  }/*

    /**
     Backing ContributionAction.
     * /
    [Bindable]
    public var backingAction:com.coremedia.elastic.social.studio.actions.ContributionAction;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase",
      metadata: {"": ["PublicApi"]},
      constructor: MetadataToContributionActionAdapter$,
      super$JuV8: function() {
        com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase.prototype.constructor.apply(this, arguments);
      },
      config: {backingAction: null},
      requires: [
        "com.coremedia.elastic.social.studio.actions.MetadataToContributionActionAdapterBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
