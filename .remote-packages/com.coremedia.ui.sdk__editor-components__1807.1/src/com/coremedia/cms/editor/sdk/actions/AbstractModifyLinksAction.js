Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksAction", function(AbstractModifyLinksAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 An abstract <code>contentUpdateAction</code> that modifies the given LinkList, Link or String property.
 When the property is a String Property then it is assumed to be a comma-separated list of items.
 See <code>contentAction</code> for how to configure the content.
 See <code>contentUpdateAction</code> for how to configure the the read-only status of the action.
 @see com.coremedia.cms.editor.sdk.config.contentAction
 @see com.coremedia.cms.editor.sdk.config.contentUpdateAction
 @see com.coremedia.cms.editor.sdk.config.pasteLinkAction
 @see com.coremedia.cms.editor.sdk.config.cutSelectedLinksAction

 * /
public class AbstractModifyLinksAction extends AbstractModifyLinksActionBase{

    public*/function AbstractModifyLinksAction$(config/*:AbstractModifyLinksAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase,{});
    var defaults_$1/*:AbstractModifyLinksAction*/ =AS3.cast(AbstractModifyLinksAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MsGe(config_$1);
  }/*

    /**
     Name of the LinkList, Link or String property to modify.
     * /
    [Bindable]
    public var propertyName:String;


    /** Optional. The maximum cardinality that the link list property should hold.
   If not specified the maximum cardinality of the property descriptor of the link list property will be applied.
     * /
    [Bindable]
    public var maxCardinality:int;


    /**
     The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
     but to override this or provide an initial value for link properties in Structs that are created by this
     property field, you may specify a custom link type.
     * /
    [Bindable]
    public var linkType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractModifyLinksAction$,
      super$MsGe: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        propertyName: null,
        maxCardinality: 0,
        linkType: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
