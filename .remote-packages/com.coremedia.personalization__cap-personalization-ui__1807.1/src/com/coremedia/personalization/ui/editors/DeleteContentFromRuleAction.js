Ext.define("com.coremedia.personalization.ui.editors.DeleteContentFromRuleAction", function(DeleteContentFromRuleAction) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
/**
 An action that removes the association between a content object and a selection rule. The reason for this very narrow use is the very specific GUI configuration (icon, text, tooltip). If this configuration would be made...well...configurable, the class would be of more general use.
 * /
public class DeleteContentFromRuleAction extends DeleteContentFromRuleActionBase{

    public*/function DeleteContentFromRuleAction$(config/*:DeleteContentFromRuleAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase,{});
    var defaults_$1/*:DeleteContentFromRuleAction*/ =AS3.cast(DeleteContentFromRuleAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$h5u8(config_$1);
  }/*

    /**
     a property path expression that leads to the bean representing a rule
     * /
    [Bindable]
    public var bindTo:Object;


    /**
     name of the property containing the content bean associated with the rule
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase",
      constructor: DeleteContentFromRuleAction$,
      super$h5u8: function() {
        com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null
      },
      requires: [
        "com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
