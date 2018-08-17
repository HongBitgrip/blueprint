Ext.define("com.coremedia.personalization.ui.editors.RuleListPanelBase", function(RuleListPanelBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.IdUtil;

import ext.Component;
import ext.Ext;
import ext.MessageBox;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.form.field.TextArea;
import ext.panel.Panel;
import ext.window.MessageBoxWindow;

import joo.debug;

/**
 * The panel within the RuleListEditor that lists the rules. It contains a list of RulePanels.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')] class RuleListPanelBase extends Panel {
  /**
   * as opposed to just one panel, the rule list editor now has a panel, which holds four container
   * components. The first container is only used to style round corners on top, we call it the header.
   * The rules are still in the RuleListEditor Panel instance which is now part of another panel
   * The rules container is followed by a static drop box container, which extends a container so we can
   * use it as a DropTarget.
   * Last, another container follows to style round corners at the bottom, we call it footer.
   * /

  // expression if this editor is read-only
  private var readOnlyValueExpression:ValueExpression;

  // ui elements
  private var activeRuleEditingField:TextArea;
  private var activeRuleEditingDisplayField:DisplayField;

  // condition types with which all contained RulePanels are to be configured
  private var conditionItems:Array;

  // name of the content type that can be dropped into rules
  private var allowedContentType:String;

  // set to true to enable the thumbnail preview column
  private var showThumbnails:Boolean;

  /**
   * Creates a new RuleListPanel instance.
   *
   * @cfg {Object} bindTo expression referencing the bean whose property is to be edited (required)
   * @cfg {String} propertyName name of the property containing the selection rules to be edited. The prefix
   *   'properties.' will be appended to this name to retrieve the property value from the bean referenced
   *   by bindTo (required)
   * @cfg {Array} conditionItems UI condition components to be used for editing rule constraints (required)
   * @cfg {String} allowedContentType name of the content type that may be dropped into this box. If not set,
   *  any type is allowed
   * /
  public*/ function RuleListPanelBase$(config/*:RuleListPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$9J9P(config);

    // config the access to the rule-list property
    if (!AS3.getBindable(config,"bindTo")) {
      throw new AS3.Error("com.coremedia.personalization.ui.editors.RuleListPanel " + this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_beanValueExpression'));
    }
    if (!AS3.getBindable(config,"propertyName")) {
      throw new AS3.Error("com.coremedia.personalization.ui.editors.RuleListPanel " + this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_propertyName'));
    }

    this.readOnlyValueExpression$9J9P = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression"));

    if (!AS3.getBindable(config,"conditionItems")) {
      throw new AS3.Error("com.coremedia.personalization.ui.editors.RuleListPanel " + this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_conditionItems'));
    }
    this.conditionItems$9J9P = AS3.getBindable(config,"conditionItems");

    this.allowedContentType$9J9P = AS3.getBindable(config,"allowedContentType");
    this.showThumbnails$9J9P = AS3.getBindable(config,"showThumbnails");

    // make sure condition-items is of type Array. This is required because if this
    // component is configured using ext-xml, we'll receive an Array of items only if
    // more than one item is used
    if (!(AS3.is(this.conditionItems$9J9P,  Array))) {
      this.conditionItems$9J9P = [this.conditionItems$9J9P];
    }

    // listener for changes in the read-only state of this container and adapt the state of the child component accordingly
    this.readOnlyValueExpression$9J9P.addChangeListener(AS3.bind(this,"onReadOnlyChanged$9J9P"));
    this.onReadOnlyChanged$9J9P(this.readOnlyValueExpression$9J9P);
  }/*

  // called when the read-only state of this container containing the selection rules changes state
  private*/ function onReadOnlyChanged(expr/*:ValueExpression*/)/*:void*/ {/*
      // change the state of all ruleBeans
      const*/var value/*:Boolean*/ = expr.getValue();
      if(joo.debug) {
        AS3.trace("propagating readOnly state", value);
      }
      if(this.itemCollection) {
        this.itemCollection.each(function(rp/*:RulePanel*/)/*:Boolean*/ {
          //may be undefined in text debug mode
          if(rp['_ruleBean']) {
            rp['_ruleBean'].set('readOnly', value);
          }
          return true;
        });
      }
      // change the state of the activeRuleEditingField, if available
      if (this.activeRuleEditingField$9J9P) {
        this.activeRuleEditingField$9J9P.setDisabled(value);
      }
  }/*

  /**
   * Adds a new rule for the supplied content. The created rule doesn't contain any conditions.
   *
   * @param content the content to create a rule for. May be null.
   * /
  public*/ function addRuleForContent(content/*:Content*/)/*:void*/ {
    if (content) {/*
      const*/var contentId/*:int*/ = com.coremedia.ui.util.IdUtil.parseContentId(content.getId());/*
      const*/var rule/*:String*/ = com.coremedia.personalization.ui.util.SelectionRuleHelper.createContentSelectionRule(contentId, []);/*
      const*/var rulePanel/*:RulePanel*/ = this.addRulePanel$9J9P(rule);
      rulePanel.toggleConditionsPanelCollapsed();
      this.fireChangeEvent$9J9P();
    } else if(joo.debug) {
      AS3.trace("[INFO] ignoring rule request for null;");
    }
  }/*

  /**
   * Provide a 'change' event so that this component can be used with a 'bindBlobPropertyPlugin'
   * /
  private*/ function fireChangeEvent()/*:void*/ {
    this.fireEvent('change');
  }/*


  /* -------------------------------------------------------

   Drag-and-Drop

   ------------------------------------------------------- * /

  /**
   * Overridden to configure events for D'n'D.
   * /
  override protected*/ function initComponent()/*:void*/ {
    Ext.panel.Panel.prototype.initComponent.call(this);
  }

  /**
   * Moves a rule from startPos to endPos and adapts the
   * UI correspondingly.
   */
  function moveRule(startPos/*:int*/, endPos/*:int*/)/*:void*/ {/*
    const*/var rp/*:**/ = this.itemCollection.removeAt(startPos); // we use * because insert accepts String or Component as second argument!
    this.itemCollection.insert(endPos, rp);
    this.fireChangeEvent$9J9P();
  }/*

  /**
   * Setter to be bound by a 'bindBlobPropertyPlugin'
   * @param s the converted conditions blob value
   * /
  public*/ function setValue(s/*:String*/){var this$=this;
    if(this.rendered) {
      this.buildRuleListFromString$9J9P(s);
    }
    else {
      com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
        this$.buildRuleListFromString$9J9P(s);
      });
    }
  }/*

  /**
   * Getter to be bound by a 'bindBlobPropertyPlugin'
   * @return the current value of the ruleListPanel
   * /
  public*/ function getValue()/*:String*/{
    return this.activeRuleEditingField$9J9P != null ? this.activeRuleEditingField$9J9P.getValue() :
            com.coremedia.personalization.ui.util.SelectionRuleHelper.createSelectionRuleList(this.getRules$9J9P());
  }/*

  /* -------------------------------------------------------


  ------------------------------------------------------- * /

  private*/ function buildRuleListFromString(rules/*:String*/)/*:void*/ {var this$=this;
    if(joo.debug) {
      AS3.trace('[INFO]: (re)building rule list from ',rules);
    }

    if (rules) { // not "" | null | undefined

      if (!com.coremedia.personalization.ui.util.SelectionRuleHelper.isValidRuleList(rules)) {
        this.removeAll(true);
        // the rules are in a format we cannot processes, so show a simple editing field as a work-around
        this.showInTextEditingField$9J9P(rules);
      } else {/*
        const*/var arr/*:Array*/ = com.coremedia.personalization.ui.util.SelectionRuleHelper.splitRules(rules);

        // create RulePanel instances for the given rules.
        Ext.each(arr, function(string/*:String*/, index/*:int*/)/*:Boolean*/{
          return this$.addRulePanel$9J9P(string, index) != null;
        });/*
        const*/var toBeRemoved/*:Array*/ = this.itemCollection.getRange(arr.length);

        // remove dangling rule panels
        Ext.each(toBeRemoved, function(cmp/*:Component*/)/*:Boolean*/ {
          if(joo.debug) {
            AS3.trace("removing rule panel", cmp ? cmp.getId() : null);
          }
          return this$.remove(cmp, true) != null;
        });
      }
    } else {
      this.removeAll(true);
    }
  }/*

  // shows the supplied rules in a newly created text editing field
  private*/ function showInTextEditingField(rules/*:String*/)/*:void*/ {

    var activeRuleEditingDisplayContainerCfg/*:Container*/ = AS3.cast(Ext.container.Container,{});
    AS3.setBindable(activeRuleEditingDisplayContainerCfg,"layout" , "vbox");
    var activeRuleEditingDisplayContainer/*:Container*/ = this.add(activeRuleEditingDisplayContainerCfg);

    var activeRuleEditingDisplayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(activeRuleEditingDisplayFieldCfg,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_ruleParsingError'));
    this.activeRuleEditingDisplayField$9J9P = activeRuleEditingDisplayContainer.add(activeRuleEditingDisplayFieldCfg);

    var activeRuleEditingFieldCfg/*:TextArea*/ = AS3.cast(Ext.form.field.TextArea,{});
    activeRuleEditingFieldCfg.enableKeyEvents = true;
    AS3.setBindable(activeRuleEditingFieldCfg,"value" , rules);
    AS3.setBindable(activeRuleEditingFieldCfg,"width" , "100%");
    AS3.setBindable(activeRuleEditingFieldCfg,"height" , 200);
    this.activeRuleEditingField$9J9P = activeRuleEditingDisplayContainer.add(activeRuleEditingFieldCfg);
    this.activeRuleEditingField$9J9P.addListener('keyup',AS3.bind( this,"fireChangeEvent$9J9P"));
  }/*

  // adds a new RulePanel to the editor. Includes creating a bean representing the rule in the model of this component.
  private*/ function addRulePanel(rule/*:String*/, index/*:int = -1*/)/*:RulePanel*/ {var this$=this;if(arguments.length<=1)index=-1;
    var rp/*:RulePanel*/;

    if(index > -1) {
      rp =AS3.as( this.itemCollection.getAt(index),  com.coremedia.personalization.ui.editors.RulePanel);
      if(rp && rp['_ruleBean'].get('rule') === rule) {
        if(joo.debug) {
          AS3.trace("re-using rule panel for rule", rule);
        }
        return rp;
      } else {
        if(joo.debug) {
          AS3.trace("discarding old rulepanel for rule", rule);
        }
        this.remove(rp, true);
      }
    }

    if(joo.debug) {
      AS3.trace("creating new rule panel for rule ", rule);
    }/*

    const*/var ruleBean/*:Bean*/ = this.beanFromRule$9J9P(rule);
    this.addRuleBean$9J9P(ruleBean);/*
    const*/var ruleBeanExpr/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create("", ruleBean);
    var rulePanelCfg/*:RulePanel*/ = AS3.cast(com.coremedia.personalization.ui.editors.RulePanel,{});
    AS3.setBindable(rulePanelCfg,"bindTo" , ruleBeanExpr);
    AS3.setBindable(rulePanelCfg,"contentPropertyName" , 'content');
    AS3.setBindable(rulePanelCfg,"conditionsPropertyName" , 'conditions');
    AS3.setBindable(rulePanelCfg,"deleteHandler" , function ()/*:void*/ {
      this$.deleteRule$9J9P(rp);
    });
    AS3.setBindable(rulePanelCfg,"conditionItems" , this.conditionItems$9J9P);
    AS3.setBindable(rulePanelCfg,"allowedContentType" , this.allowedContentType$9J9P);
    AS3.setBindable(rulePanelCfg,"showThumbnails" , this.showThumbnails$9J9P);
    rp = new com.coremedia.personalization.ui.editors.RulePanel(rulePanelCfg);
    rp['_ruleBean'] = ruleBean;
    ruleBean['_rulePanel'] = rp;
    if (index > -1 && index < this.itemCollection.length) {
      if(joo.debug) {
        AS3.trace("inserting panel for rule", rule, "at index", index);
      }
      this.insert(index, rp);
    } else {
      if(joo.debug) {
        AS3.trace("adding panel for rule", rule);
      }
      this.add(rp);
    }
    return rp;
  }/*

  internal*/ function onRuleDrop(dropPosition/*:int*/, draggedItem/*:RulePanel*/, dropContainer/*:RuleListPanel*/)/*:void*/ {
    dropContainer.insert(dropPosition, draggedItem);
    this.fireChangeEvent$9J9P();
  }/*

  // deletes the given rule (represented by the supplied panel) from this editor if the user reconfirms the delete action.
  // This method is supplied to sub-components as a callback.
  private*/ function deleteRule(panel/*:RulePanel*/)/*:void*/ {var this$=this;

    Ext.MessageBox.buttonText.yes = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_confirm_yes');
    Ext.MessageBox.buttonText.no = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_confirm_no');

    Ext.MessageBox.show({title: this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_deleteRule'),
      msg: this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_confirmDeleteRule'),
      buttons: Ext.window.MessageBox.YESNO,
      fn: function(btn/*:String*/, text/*:String*/)/*:void*/ {
              if (btn === 'yes') {
                this$.removeRuleBean$9J9P(panel['_ruleBean']);
                this$.remove(panel, true);
                this$.fireChangeEvent$9J9P();
              }},
      icon: Ext.window.MessageBox.INFO
    });
  }/*

  // adds a new RuleBean to the model of the component
  private*/ function addRuleBean(bean/*:Bean*/)/*:void*/ {
    // register listeners so we'll be notified if the rule bean is being modified
    bean.addPropertyChangeListener('content',AS3.bind( this,"fireChangeEvent$9J9P"));
    bean.addPropertyChangeListener('conditions',AS3.bind( this,"fireChangeEvent$9J9P"));
  }/*

  // removes a RuleBean from the model of this component
  private*/ function removeRuleBean(bean/*:Bean*/)/*:void*/ {
    bean.removePropertyChangeListener('content',AS3.bind( this,"fireChangeEvent$9J9P"));
    bean.removePropertyChangeListener('conditions',AS3.bind( this,"fireChangeEvent$9J9P"));
  }/*

  // converts a string containing a rule to a corresponding bean
  private*/ function beanFromRule(rule/*:String = ""*/)/*:Bean*/ {if(arguments.length<=0)rule="";/*
    const*/var ruleBean/*:Bean*/ = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();/*

    // retrieve the content bean associated with the rule
    const*/var intId/*:int*/ = com.coremedia.personalization.ui.util.SelectionRuleHelper.contentIdFromSelectionRule(rule);
    if (intId > 0) {/*
      const*/var beanUri/*:String*/ = com.coremedia.ui.util.IdUtil.formatContentBean(intId);/*
      const*/var bean/*:Bean*/ = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().getRemoteBean(beanUri);
      ruleBean.set('content', [bean]);
    } else {
      ruleBean.set('content', []);
    }
    ruleBean.set('rule', rule);
    ruleBean.set('conditions', com.coremedia.personalization.ui.util.SelectionRuleHelper.conditionsExprFromSelectionRule(rule));
    ruleBean.set('readOnly', this.readOnlyValueExpression$9J9P.getValue());

    return ruleBean;
  }/*

  // converts a bean representing a rule into the corresponding string
  private*/ function ruleFromBean(bean/*:Bean*/)/*:String*/ {
    var beanId/*:int*/ = com.coremedia.ui.util.IdUtil.MISSING_CONTENT_ID;/*
    const*/var content/*:Array*/ = bean.get('content');
    if (content != null && content.length > 0) {
      beanId = com.coremedia.ui.util.IdUtil.parseContentId(content[0].getId());
    }
    return com.coremedia.personalization.ui.util.SelectionRuleHelper.createContentSelectionRuleFromConditionsExpr(beanId, bean.get('conditions'));
  }/*

  // collects the rules from the RulePanels. Used when saving rules.
  private*/ function getRules()/*:Array*/ {var this$=this;/*
    const*/var rules/*:Array*/ = [];
    if(this.itemCollection) {
      this.itemCollection.each(function(rp/*:RulePanel*/)/*:Boolean*/ {/*
        const*/var ruleBean/*:Bean*/ = rp['_ruleBean'];/*
        const*/var rule/*:String*/ = this$.ruleFromBean$9J9P(ruleBean);
        // make sure the rule is up to date
        ruleBean.set('rule', rule);
        rules.push(rule);
        return true;
      });
    }
    return rules;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      readOnlyValueExpression$9J9P: null,
      activeRuleEditingField$9J9P: null,
      activeRuleEditingDisplayField$9J9P: null,
      conditionItems$9J9P: null,
      allowedContentType$9J9P: null,
      showThumbnails$9J9P: false,
      constructor: RuleListPanelBase$,
      super$9J9P: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onReadOnlyChanged$9J9P: onReadOnlyChanged,
      addRuleForContent: addRuleForContent,
      fireChangeEvent$9J9P: fireChangeEvent,
      initComponent: initComponent,
      moveRule: moveRule,
      setValue: setValue,
      getValue: getValue,
      buildRuleListFromString$9J9P: buildRuleListFromString,
      showInTextEditingField$9J9P: showInTextEditingField,
      addRulePanel$9J9P: addRulePanel,
      onRuleDrop: onRuleDrop,
      deleteRule$9J9P: deleteRule,
      addRuleBean$9J9P: addRuleBean,
      removeRuleBean$9J9P: removeRuleBean,
      beanFromRule$9J9P: beanFromRule,
      ruleFromBean$9J9P: ruleFromBean,
      getRules$9J9P: getRules,
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.TextArea",
        "Ext.panel.Panel",
        "Ext.window.MessageBox",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.IdUtil"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.RulePanel",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
