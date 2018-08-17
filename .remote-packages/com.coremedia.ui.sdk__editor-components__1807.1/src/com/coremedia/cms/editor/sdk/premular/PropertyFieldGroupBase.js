Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldGroupBase", function(PropertyFieldGroupBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;

import ext.form.Labelable;
import ext.panel.Panel;

/**
 * Common helper for the collapsible form panel, provides
 * methods to store the state in the user preferences.
 * /
[PublicApi]
public class PropertyFieldGroupBase extends CollapsiblePanel {

  /**
   * A value expression of the bean that this panel binds to.
   * The value expression is handed through to all child components of the panel.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * An optional value expression which makes the component read-only if it is evaluated to true.
   * /
  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  /**
   * An optional comma-separated list of property names of the bound document.
   * If one of the given document property is not empty the panel will be expanded on first rendering.
   * /
  [Bindable]
  public var expandOnValues:String;

  /**
   * ValueExpression for the premular configuration that contains all prefetched data.
   * /
  [Bindable]
  public var premularConfigurationVE:ValueExpression;

  /**
   * Indicates whether a single container item should hide its label independent of the hideLabel attribute.
   * /
  [Bindable]
  public var hideSingleComponentLabel:Boolean = true;

  protected var stateSaveExpression:ValueExpression;
  private var preventStateSaving:Boolean;

  /**
   * A list of comma separated property names, used if more than one referrer property should be evaluated.
   *
   * Normally, this panel will resolve depending properties from the inner property field editors. But in some cases,
   * this is not suitable (e.g. the property editors does not work on the content directly, but on an internal model.
   * So the properties, which are relevant, can be set here.
   * /
  [Bindable]
  public var propertyNames:Array;

  //internal state used for event catching
  private var collapsedState:Boolean;

  public*/ function PropertyFieldGroupBase$(config/*:PropertyFieldGroup = null*/) {var this$=this;if(arguments.length<=0)config=null;
    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo"));

    if (!AS3.getBindable(config,"bindTo")) {
      throw new AS3.Error("No bindTo expression defined for PropertyFieldGroup '" + this.getItemId() + "'");
    }

    //mandatory to persist the state
    if (!AS3.getBindable(config,"itemId","DUMMY")) {
      throw new AS3.Error("No itemId defined for PropertyFieldGroup with title '" + AS3.getBindable(config,"title","DUMMY") + "'");
    }

    AS3.setBindable(config,"collapsed" , this.getCollapsedStateFromPremularConfig(config));

    if (!config.ariaLabel) {
      config.ariaLabel = AS3.getBindable(config,"title","DUMMY");
    }

    this.super$xU$j(config);

    //may not be used for content/premulars
    var content/*:Content*/ =AS3.as( AS3.getBindable(config,"bindTo").getValue(),  com.coremedia.cap.content.Content);
    if (content && content.getType()) {//too lazy to fix test
      var documentType/*:String*/ = content.getType().getName();
      this.stateSaveExpression = com.coremedia.ui.data.ValueExpressionFactory.create('forms.' + documentType + '.' + this.getItemId(), com.coremedia.cms.editor.sdk.editorContext.getPreferences());
    }

    this.collapsedState$xU$j = AS3.getBindable(config,"collapsed","DUMMY");

    this.on('beforeexpand',AS3.bind( this,"beforeExpand$xU$j"));
    this.on('beforecollapse',AS3.bind( this,"beforeCollapse$xU$j"));
    this.on('add',AS3.bind( this,"checkSingleItem$xU$j"));
    this.on('remove',AS3.bind( this,"checkSingleItem$xU$j"));
    this.checkSingleItem$xU$j();

    AS3.getBindable(this,"premularConfigurationVE") && AS3.getBindable(this,"premularConfigurationVE").loadValue(function ()/*:void*/ {
      this$.refreshExpandState$xU$j();
    });
  }/*

  /**
   * Returns the collapse state for this group from the premular configuration
   * @param config the config of this component
   * @return true if this panel is collapsed
   * /
  protected*/ function getCollapsedStateFromPremularConfig(config/*:PropertyFieldGroup*/)/*:Boolean*/ {
    var premularConfiguration/*:PremularConfiguration*/ = this.getPremularConfiguration$xU$j(config);
    //property field groups are not necessarily part of a premular, e.g. taxonomy editor
    if (premularConfiguration) {
      var expandOnValuesNames/*:Array*/ = [];
      if (AS3.getBindable(config,"expandOnValues")) {
        expandOnValuesNames = AS3.getBindable(config,"expandOnValues").split(',');
      }
      return premularConfiguration.getCollapsedState(AS3.getBindable(config,"itemId","DUMMY"), AS3.getBindable(config,"propertyNames"), expandOnValuesNames, AS3.getBindable(config,"collapsed","DUMMY"), config.collapsible) || false;
    }

    return false;
  }/*

  private*/ function refreshExpandState(shouldExpand/*:Boolean = null*/)/*:void*/ {if(arguments.length<=0)shouldExpand=null;
    if (!(AS3.is(shouldExpand,  Boolean))) {
      shouldExpand = !this.getCollapsedStateFromPremularConfig(AS3.as(this.initialConfig,  com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup));
    }

    this.preventStateSaving$xU$j = true;

    if (!this.rendered) {
      AS3.setBindable(this,"collapsed" , !shouldExpand);
      this.preventStateSaving$xU$j = false;
      return;
    }

    if (shouldExpand) {
      if (AS3.getBindable(this,"collapsed","DUMMY")) {
        // Explicitly set componentLayout's lastCollapsedState as otherwise timing issues may occur
        this.componentLayout['lastCollapsedState'] = "top";
      }
      this.expand(true);
      com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.afterExpand.call(this,true);
      //workaround as ext sets the height of the field sometimes wrongly after it is expanded.
      if (!this.manageHeight && this.getEl().dom.style.height) {
        this.getEl().dom.style.height = "auto";
      }
    } else {
      this.collapse("top", true);
    }

    this.preventStateSaving$xU$j = false;
  }/*

  /**
   * If the PremularConfiguration object is not available for the given group, we access the parent
   * configuration until we find a component that has it.
   * /
  private*/ function getPremularConfiguration(config/*:PropertyFieldGroupBase = null*/)/*:PremularConfiguration*/ {if(arguments.length<=0)config=null;
    if (!config) {
      config =AS3.as( this.initialConfig,  PropertyFieldGroupBase);
    }

    if (AS3.getBindable(config,"premularConfigurationVE")) {
      return AS3.getBindable(config,"premularConfigurationVE").getValue();
    }

    var parentConfig/*:Object*/ = config;
    while (parentConfig['$initParent'] && parentConfig['$initParent'].config) {
      if (parentConfig.premularConfigurationVE) {
        return parentConfig.premularConfigurationVE.getValue();
      }
      parentConfig = parentConfig['$initParent'].config;
    }
    return null;
  }/*

  private*/ function beforeExpand()/*:void*/ {
    if (!this.preventStateSaving$xU$j) {
      this.saveStateToExpression$xU$j(false);
    }
  }/*

  private*/ function beforeCollapse()/*:void*/ {
    if (!this.preventStateSaving$xU$j) {
      this.saveStateToExpression$xU$j(true);
    }
  }/*

  /**
   * Writes the status of this collapsible into the user preferences.
   * /
  private*/ function saveStateToExpression(isCollapsed/*:Boolean*/)/*:void*/ {
    //avoid stackoverflow
    if (this.collapsedState$xU$j !== isCollapsed) {
      this.collapsedState$xU$j = isCollapsed;

      if (this.stateSaveExpression) {
        this.stateSaveExpression.setValue(isCollapsed);
      }

      //notify state change for differencing view
      var parent/*:Panel*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.xtype),  com.coremedia.cms.editor.sdk.premular.DocumentTabPanel);
      if (parent) {
        parent.fireEvent('collapsibleChanged', this.getItemId(), !isCollapsed);
      }
    }
  }/*

  protected*/ function saveReusabilityState()/*:Object*/ {
    return {
      collapsed: AS3.getBindable(this,"collapsed","DUMMY")
    };
  }/*

  protected*/ function applyReusabilityState(state/*:Object*/)/*:void*/ {
    if (state.collapsed !== undefined) {
      var shouldExpand/*:Boolean*/ = state.collapsed !== "top";
      this.refreshExpandState$xU$j(shouldExpand);
    } else {
      this.refreshExpandState$xU$j();
    }
  }/*

  /**
   * If this container only contains one item, we hide its label to avoid two titles.
   * /
  private*/ function checkSingleItem()/*:void*/ {
    if (this.itemCollection.getCount() > 0) {
      var c1/*:Component*/ =AS3.as( this.itemCollection.getAt(0),  Ext.Component);
      if (c1) {
        var l1/*:Labelable*/ =AS3.as( c1,  Ext.form.Labelable);
        if (l1) {
          if (AS3.getBindable(this,"hideSingleComponentLabel") && this.itemCollection.getCount() === 1) {
            l1["setHideLabel"](true);
          } else {
            var hideLabel1/*:Boolean*/ = (AS3.as(c1.initialConfig.hideLabel,  Boolean)) || false;
            l1["setHideLabel"](hideLabel1);
          }
        }
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      metadata: {"": ["PublicApi"]},
      stateSaveExpression: null,
      preventStateSaving$xU$j: false,
      collapsedState$xU$j: false,
      constructor: PropertyFieldGroupBase$,
      super$xU$j: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      getCollapsedStateFromPremularConfig: getCollapsedStateFromPremularConfig,
      refreshExpandState$xU$j: refreshExpandState,
      getPremularConfiguration$xU$j: getPremularConfiguration,
      beforeExpand$xU$j: beforeExpand,
      beforeCollapse$xU$j: beforeCollapse,
      saveStateToExpression$xU$j: saveStateToExpression,
      saveReusabilityState: saveReusabilityState,
      applyReusabilityState: applyReusabilityState,
      checkSingleItem$xU$j: checkSingleItem,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        expandOnValues: null,
        premularConfigurationVE: null,
        hideSingleComponentLabel: true,
        propertyNames: null
      },
      requires: [
        "AS3.Error",
        "Ext.Component",
        "Ext.form.Labelable",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup"
      ]
    };
});
