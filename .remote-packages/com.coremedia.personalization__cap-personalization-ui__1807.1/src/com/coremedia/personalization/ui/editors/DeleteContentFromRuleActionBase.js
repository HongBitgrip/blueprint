Ext.define("com.coremedia.personalization.ui.editors.DeleteContentFromRuleActionBase", function(DeleteContentFromRuleActionBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.Component;

import mx.resources.ResourceManager;

/**
 * An action that removes the association between a content object and a selection rule. The reason for this
 * very narrow use is the very specific GUI configuration (icon, text, tooltip). If this configuration would
 * be made...well...configurable, the class would be of more general use.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')] class DeleteContentFromRuleActionBase extends Action {

  private var propertyValueExpression:ValueExpression;
  internal native function get items():Array;

  /**
   * @cfg {Object} bindTo a property path expression that leads to the bean representing a rule
   * @cfg {String} propertyName name of the property containing the content bean associated with the rule 
   * /
  public*/ function DeleteContentFromRuleActionBase$(config/*:DeleteContentFromRuleAction = null*/) {if(arguments.length<=0)config=null;
    var bindTo/*:ValueExpression*/ = config['bindTo'];
    var propertyName/*:String*/ = config['propertyName'];
    this.propertyValueExpression$tPJv = bindTo.extendBy(propertyName);

    AS3.setBindable(config,"handler" ,AS3.bind( this,"removeProperty$tPJv"));
    AS3.setBindable(config,"iconCls" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_Action_deleteContentFromRule_icon'));
    AS3.setBindable(config,"text" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_Action_deleteContentFromRule_text'));
    AS3.setBindable(config,"tooltip", mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_Action_deleteContentFromRule_tooltip'));
    this.super$tPJv(config);

    this.setDisabled(bindTo.extendBy('readOnly').getValue());
    this.propertyValueExpression$tPJv.addChangeListener(AS3.bind(this,"updateDisabled$tPJv"));
  }/*

  private*/ function updateDisabled(source/*:ValueExpression*/)/*:void*/ {
    this.setDisabled(source.getValue() == null || (AS3.as(source.getValue(),  Array)).length === 0);
  }/*

  private*/ function removeProperty()/*:void*/ {
    this.propertyValueExpression$tPJv.setValue([]);
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      this.propertyValueExpression$tPJv && this.propertyValueExpression$tPJv.removeChangeListener(AS3.bind(this,"updateDisabled$tPJv"));
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      propertyValueExpression$tPJv: null,
      constructor: DeleteContentFromRuleActionBase$,
      super$tPJv: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      updateDisabled$tPJv: updateDisabled,
      removeProperty$tPJv: removeProperty,
      removeComponent: removeComponent,
      requires: [
        "Ext.Action",
        "com.coremedia.personalization.ui.Personalization_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
