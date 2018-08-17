Ext.define("com.coremedia.cms.editor.sdk.actions.ContentActionBase", function(ContentActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxy;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.actions.ValueExpressionAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Ext;

/**
 * <p>An abstract <code>ext.Action</code> that performs a read-only operation on the configured contents.</p>
 * <p>Extend this class for an content action which requires only read access on the content.</p>
 * <p>The action is disabled when there is no configured content.</p>
 * <p>Override the method <code>isDisabledFor</code> to provide a more specific disable behaviour.</p>
 * <p>See <code>ContentUpdateAction</code> for a content action with write access.</p>
 *
 * @see com.coremedia.cms.editor.sdk.actions.ContentAction
 * @see com.coremedia.cms.editor.sdk.actions.ContentUpdateAction
 * /
[PublicApi]
public class ContentActionBase extends DependencyTrackedAction implements ValueExpressionAction {

  private var contentValueExpression:ValueExpression;
  private var hideOnDisable:Boolean;
  private var hideForContentProxy:Boolean;
  private var doHide:Boolean;

  /**
   * @param config the config object
   * /
  public*/ function ContentActionBase$(config/*:ContentAction = null*/) {if(arguments.length<=0)config=null;
    this.doHide$XQfr = config.hidden || false;
    if (AS3.getBindable(config,"contentValueExpression"))  {
      //If the contentValueExpression is configured...
      //...then take that
      this.contentValueExpression$XQfr = AS3.getBindable(config,"contentValueExpression");
    } else {
      //...otherwise create a content value expression
      this.contentValueExpression$XQfr = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }

    if (AS3.getBindable(config,"contents")) {
      //... set the value of content value expression to the contents
      this.contentValueExpression$XQfr.setValue(AS3.getBindable(config,"contents"));
    }

    this.hideOnDisable$XQfr = AS3.getBindable(config,"hideOnDisable");
    //hideForContentProxy is hidden (no-public-api) config parameter
    this.hideForContentProxy$XQfr = config['hideForContentProxy'];

    this.super$XQfr(config);
  }/*


  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.DependencyTrackedAction.prototype.addComponent.call(this,comp);
    //if the contentValueExpression is based on IOC and the action is managed, we wait until the component is build
    this.contentValueExpression$XQfr.addChangeListener(AS3.bind(this,"changeTextForContentProxy$XQfr"));
    this.contentValueExpression$XQfr.addChangeListener(AS3.bind(this,"changeTooltipForContentProxy$XQfr"));
  }/*

  override public*/ function setDisabled(disabled/*:Boolean*/)/*:void*/ {
    if (this.hideOnDisable$XQfr) {
      this.setHidden(disabled);
    } else {
      com.coremedia.ui.actions.DependencyTrackedAction.prototype.setDisabled.call(this,disabled);
    }
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var contents/*:Array*/ = this.getContents();
    return !contents || contents.length === 0 || this.isDisabledFor(contents);
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    if(this.doHide$XQfr) {
      return true;
    }
    var entities/*:Array*/ = this.getEntities$XQfr();
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(entities, !this.hideForContentProxy$XQfr);
    if (contents.length < entities.length) {
      // Any non-Content in the current value? Hide me!
      return true;
    }
    return this.isHiddenFor(contents);
  }/*

  /**
   * @private
   * /
  public*/ function getValueExpression()/*:ValueExpression*/ {
    return this.contentValueExpression$XQfr;
  }/*
  
  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='contentVariableName')]
  public*/ function setContents(contents/*:**/)/*:void*/ {
    this.contentValueExpression$XQfr.setValue(contents);
  }/*

  /**
   * Changes the text of the action's parent component dynamically when the first entity is a content proxy.
   * /
  private*/ function changeTextForContentProxy()/*:void*/ {
    var defaultText/*:String*/ = this.initialConfig.text;
    var proxyText/*:String*/ = this.initialConfig.textForContextProxy;
    if (defaultText && proxyText) {
      Ext.each(this['items'],
              // toggle text only unless text is explicitly set to ''
              this.updateComponentFunction$XQfr('setText', defaultText, proxyText, 'text')
      );
    }
  }/*

  /**
   * Changes the tooltip of the action's parent component dynamically when the first entity is a content proxy.
   * /
  private*/ function changeTooltipForContentProxy()/*:void*/ {
    var defaultTooltip/*:String*/ = this.initialConfig.tooltip;
    var proxyTooltip/*:String*/ = this.initialConfig.tooltipForContextProxy;
    if (defaultTooltip && proxyTooltip) {
      Ext.each(this['items'],
              // try to toggle tooltip
              this.updateComponentFunction$XQfr('setTooltip', defaultTooltip, proxyTooltip)
      );
    }
  }/*

  private*/ function updateComponentFunction(setter/*:String*/, defaultText/*:String*/, proxyText/*:String*/, initialValueProperty/*:String = null*/)/*:Function*/ {var this$=this;if(arguments.length<=3)initialValueProperty=null;
    return function (component/*:Component*/)/*:void*/ {
      if (component[setter] && (!initialValueProperty || component[initialValueProperty])) {
        var entities/*:Array*/ = this$.getEntities$XQfr();
        if (entities && entities.length > 0 &&AS3.is( entities[0],  com.coremedia.cap.content.ContentProxy)) {
          component[setter](proxyText);
        } else {
          component[setter](defaultText);
        }
      }
    };
  }/*

  /**
   * Return whether this action is disabled for the given array of content.
   * Override this method to implement more specific disable behaviour.
   *
   * @param contents the array of content: never empty.
   * @return whether this action is disabled
   * /
  protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  /**
   * Return whether this action is hidden for the given array of content.
   * Override this method to implement more specific hide behaviour.
   * By default, this method returns <code>false</code>.
   *
   * @param contents the array of content
   * @return whether this action is hidden
   * /
  protected*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  /**
   * Return the content on which this action operates.
   *
   * @deprecated all actions should work on multiple contents
   * @private
   * /
  protected*/ function getContent()/*:Content*/ {
    return this.getContents()[0];
  }/*

  /**
   * Return the contents on which this action operates.
   * If there is no content it returns an empty array.
   * /
  [ArrayElementType("com.coremedia.cap.content.Content")]
  protected*/ function getContents()/*:Array*/ {
    return com.coremedia.cap.content.ContentProxyHelper.getContents(this.getEntities$XQfr());
  }/*

  private*/ function getEntities()/*:Array*/ {
    return com.coremedia.ui.util.ArrayUtils.asArray(this.contentValueExpression$XQfr.getValue());
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      mixins: ["com.coremedia.ui.actions.ValueExpressionAction"],
      metadata: {
        "": ["PublicApi"],
        setContents: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "contentVariableName"
          ]
        ]
      },
      contentValueExpression$XQfr: null,
      hideOnDisable$XQfr: false,
      hideForContentProxy$XQfr: false,
      doHide$XQfr: false,
      constructor: ContentActionBase$,
      super$XQfr: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      addComponent: addComponent,
      setDisabled: setDisabled,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      getValueExpression: getValueExpression,
      setContents: setContents,
      changeTextForContentProxy$XQfr: changeTextForContentProxy,
      changeTooltipForContentProxy$XQfr: changeTooltipForContentProxy,
      updateComponentFunction$XQfr: updateComponentFunction,
      isDisabledFor: isDisabledFor,
      isHiddenFor: isHiddenFor,
      getContent: getContent,
      getContents: getContents,
      getEntities$XQfr: getEntities,
      requires: [
        "Ext",
        "com.coremedia.cap.content.ContentProxy",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.actions.ValueExpressionAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
