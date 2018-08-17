Ext.define("com.coremedia.ui.plugins.BEMPlugin", function(BEMPlugin) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.BEMUtils;

import ext.Component;
import ext.Plugin;
import ext.container.Container;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;

/**
 * A Plugin that applies CSS classes to components following the B.E.M. pattern:
 *
 * - block name must be provided
 * - modifier name(s) is/are optional
 * - element names will be provided via component configuration
 * - elements will only be attached if the plugin is attached to a Container.
 * - defaultElement can be used to define
 *
 * Configuration:
 * see com.coremedia.ui.config.bemPlugin
 * - if the component using the BEMPlugin is a Container, container items (and recursive their items) may contain the
 *   following configuration:
 *   - bemElement:String a name for an element
 *
 * Limitations:
 * - Although the B.E.M. pattern allows modifiers for elements, they are currently not supported
 *
 * For the following pseudo configuration:
 * <pre>
 * {
 *   plugins: {
 *     BEMPlugin: {
 *       block: "button",
 *       modifier: getModifierVE(),
 *     }
 *   }
 *   items: {
 *     somePicture: {
 *       bemElement: "icon"
 *     },
 *     someText: {
 *       bemElement: "label"
 *     }
 *   }
 * }
 * </pre>
 *
 * Assuming getModifierVE().getValue() returns ["important", "disabled"], the following html structure is rendered:
 * <pre>
 *   &lt;button class="button button--important button--disabled"&gt;
 *     &lt;span class="button__icon" /&gt;...&lt;/span&gt;
 *     &lt;span class="button__label"&gt;...&lt;/span&gt;
 *   &lt;/button&gt;
 * </pre>
 *
 *
 * Delegation:
 * The plugin also attached elements recursively.
 *
 * This should only be needed if the component is very complex and needs to be modeled with inner containers. In general
 * it is better to introduce another dedicated block (with a different name) rather than using delegation so you can
 * make the block reusable. If you really don't want to make the block reusable (e.g. if it is too special) delegation
 * is the right choice to reduce overhead.
 *
 * For the following pseudo configuration:
 * <pre>
 * {
 *   plugins: {
 *     BEMPlugin: {
 *       block: "complex-component"
 *     }
 *   }
 *   items: {
 *     container: {
 *       bemElement: "wrapper",
 *       items: {
 *         item1: {
 *           bemElement: "item1"
 *         },
 *         item2: {
 *           bemElement: "item2"
 *         }
 *       }
 *     },
 *     someText: {
 *       bemElement: "label"
 *     }
 *   }
 * }
 * </pre>
 *
 * The following html structure is rendered:
 * <pre>
 *   &lt;div class="complex-component"&gt;
 *     &lt;div class="complex-component__wrapper"&gt;
 *       &lt;div class="complex-component__item1"&gt;...&lt;/div&gt;
 *       &lt;div class="complex-component__item2"&gt;...&lt;/div&gt;
 *     &lt;/div&gt;
 *     &lt;span class="complex-component__label"&gt;...&lt;/span&gt;
 *   &lt;/div&gt;
 * </pre>
 *
 * More Information:
 *
 * http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
 * http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
 * http://atendesigngroup.com/blog/component-element-modifier-design-pattern
 * /
[PublicApi]
public class BEMPlugin extends AbstractPlugin {

  private var _block:String;
  private var _modifier:ValueExpression;
  private var _defaultElement:String;
  private var _includeNested:Boolean = null;
  private var _includeDocked:Boolean = true;
  private var _bodyElement:String;

  /**
   * The block to be used.
   *
   * Can be a {@link BEMBlock} or a String representing the identifier.
   * /
  [Bindable]
  public*/ function set$block(newBlock/*:**/)/*:void*/ {
    this._block$4NzB = normalizeBlock$static(newBlock);
  }/*

  /**
   * @return the block identifier to be used.
   * /
  [Bindable]
  public*/ function get$block()/*:**/ {
    return this._block$4NzB;
  }/*

  /**
   * (optional) The modifier(s) to be used.
   * Multitype, can be {@link BEMModifier}, String, Array, ValueExpression with BEMModifier as value,
   * ValueExpression with String as value or ValueExpression with Array as value. The array can contain either
   * {@link BEMModifier} or String instances.
   * /
  [Bindable]
  public*/ function set$modifier(newModifier/*:**/)/*:void*/ {
    this._modifier$4NzB =AS3.as( newModifier,  com.coremedia.ui.data.ValueExpression) || com.coremedia.ui.data.ValueExpressionFactory.createFromValue(newModifier);
  }/*

  /**
   * @return the modifier(s) to be used.
   * /
  [Bindable]
  public*/ function get$modifier()/*:**/ {
    return this._modifier$4NzB;
  }/*

  /**
   * Only applies if the component the plugin is attached is a {@link Container}.
   *
   * Can be a {@link BEMElement} or a String
   *
   * (optional) A default element identifier to attach to all items of the container that do not have an own
   * bemElement configuration. Affects the default value of includeNested.
   * /
  [Bindable]
  public*/ function set$defaultElement(newDefaultElement/*:**/)/*:void*/ {
    this._defaultElement$4NzB = normalizeElement$static(newDefaultElement);
  }/*

  [Bindable]
  public*/ function get$defaultElement()/*:**/ {
    return this._defaultElement$4NzB;
  }/*

  /**
   * Only applies if the component the plugin is attached is a {@link Panel}.
   *
   * Can be a {@link BEMElement} or a String
   *
   * (optional) An element identifier to attach to the body of a panel.
   * /
  [Bindable]
  public*/ function set$bodyElement(newBodyElement/*:**/)/*:void*/ {
    this._bodyElement$4NzB = normalizeElement$static(newBodyElement);
  }/*

  [Bindable]
  public*/ function get$bodyElement()/*:**/ {
    return this._bodyElement$4NzB;
  }/*

  /**
   * Only applies if the component the plugin is attached is a {@link Container}.
   *
   * If true, all items returned by {@link Container#cascade} can be elements, if false only direct descendants of the
   * container can be elements.
   *
   * If no value is set, the default value depends on the value of {@link #defaultElement}. If there is a defaultElement
   * the default value is false, otherwise true.
   * /
  [Bindable]
  public*/ function set$includeNested(newIncludeNested/*:Boolean*/)/*:void*/ {
    this._includeNested$4NzB = newIncludeNested;
  }/*

  /**
   * @return if items of nested containers should be included.
   * /
  [Bindable]
  public*/ function get$includeNested()/*:Boolean*/ {
    return AS3.is( this._includeNested$4NzB,  Boolean) ? this._includeNested$4NzB : !this._defaultElement$4NzB;
  }/*

  /**
   * Only applies if the component the plugin is attached to uses the mixin {@link ext.container.DockingContainer}.
   *
   * If true, also dockedItems of the {@link ext.container.DockingContainer} can be elements, if false dockedItems are
   * ignored.
   *
   * If {@link #includeNested} is set to true, all items {@link Container}s docked to the
   * {@link ext.container.DockingContainer} can be elements. This does however not enable nesting of docking containers.
   * /
  [Bindable]
  public*/ function set$includeDocked(newIncludeDocked/*:Boolean*/)/*:void*/ {
    this._includeDocked$4NzB = newIncludeDocked;
  }/*

  /**
   * @return if docked items should be included.
   * /
  [Bindable]
  public*/ function get$includeDocked()/*:Boolean*/ {
    return AS3.is( this._includeDocked$4NzB,  Boolean) ? this._includeDocked$4NzB : true;
  }/*

  /**
   * Creates a new BEMPlugin
   *
   * @param config the provided configuration
   * /
  public*/ function BEMPlugin$(config/*:BEMPlugin = undefined*/) {
    this.super$4NzB(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    // block name has to be set in order to let the plugin run without delegate
    if (this._block$4NzB && component) {
      this.attachBlock$4NzB(component);
      if (this._modifier$4NzB) {
        this.setupAndAttachModifiers$4NzB(component);
      }
      this.attachSpecialElements$4NzB(component);
      var ct/*:Container*/ =AS3.as( component,  Ext.container.Container);
      if (ct) {
        this.setupAndAttachElements$4NzB(ct);
      }
    }
  }/*

  private*/ function attachBlock(cmp/*:Component*/)/*:void*/ {
    addClass$static(cmp, com.coremedia.ui.util.BEMUtils.getBlockClassName(this._block$4NzB));
  }/*

  private*/ function setupAndAttachModifiers(cmp/*:Component*/)/*:void*/ {var this$=this;
    var lastModifiers/*:Array*/ = undefined;
    var modifierVEListener/*:Function*/ = function (modifierVE/*:ValueExpression*/)/*:void*/ {
      if (lastModifiers) {
        this$.detachModifiers$4NzB(lastModifiers, cmp);
        lastModifiers = undefined;
      }
      var newModifiers/*:Array*/ = normalizeAndFilterModifiers$static(modifierVE.getValue());
      if (newModifiers) {
        this$.attachModifiers$4NzB(newModifiers, cmp);
        lastModifiers = newModifiers;
      }
    };
    cmp.addListener("removed", function ()/*:void*/ {
      this$._modifier$4NzB.removeChangeListener(modifierVEListener);
    });
    this._modifier$4NzB.addChangeListener(modifierVEListener);
    var newModifiers/*:Array*/ = normalizeAndFilterModifiers$static(this._modifier$4NzB.getValue());
    if (newModifiers) {
      this.attachModifiers$4NzB(newModifiers, cmp);
      lastModifiers = newModifiers;
    }
  }/*

  private*/ function attachModifiers(modifiers/*:Array*/, cmp/*:Component*/)/*:void*/ {var this$=this;
    if (cmp) {
      modifiers.forEach(function (modifier/*:String*/)/*:void*/ {
        this$.attachModifier$4NzB(modifier, cmp);
      });
    }
  }/*

  private*/ function attachModifier(modifier/*:String*/, cmp/*:Component*/)/*:void*/ {
    if (cmp) {
      addClass$static(cmp, com.coremedia.ui.util.BEMUtils.getModifierClassName(this._block$4NzB, modifier));
    }
  }/*

  private*/ function detachModifiers(modifiers/*:Array*/, cmp/*:Component*/)/*:void*/ {var this$=this;
    if (modifiers) {
      modifiers.forEach(function (modifier/*:String*/)/*:void*/ {
        this$.detachModifier$4NzB(modifier, cmp);
      });
    }
  }/*

  private*/ function detachModifier(modifier/*:String*/, cmp/*:Component*/)/*:void*/ {
    if (cmp) {
      cmp.removeCls(com.coremedia.ui.util.BEMUtils.getModifierClassName(this._block$4NzB, modifier));
    }
  }/*

  private*/ function attachSpecialElements(cmp/*:Component*/)/*:void*/ {
    if (this._bodyElement$4NzB) {
      var panel/*:Panel*/ =AS3.as( cmp,  Ext.panel.Panel);
      if (panel) {
        panel.addBodyCls(com.coremedia.ui.util.BEMUtils.getElementClassName(this._block$4NzB, this._bodyElement$4NzB));
      }
    }
  }/*

  /**
   *
   * @param ct
   * /
  private*/ function setupAndAttachElements(ct/*:Container*/)/*:void*/ {var this$=this;
    var itemAddListener/*:Function*/ = function (ownerCt/*:Container*/, item/*:Component*/)/*:void*/ {
      if (this$.isManagedElement$4NzB(item, ct)) {
        this$.attachElements$4NzB(item, ct);
      }
    };
    var itemRemoveListener/*:Function*/ = function (ownerCt/*:Container*/, item/*:Component*/)/*:void*/ {
      if (this$.isManagedElement$4NzB(item, ct)) {
        this$.detachElements$4NzB(item, ct);
      }
    };

    // assuming bubbleEvents for Ext.container.Container has "add", "remove"
    this.attachElements$4NzB(ct, ct);
    ct.addListener("add", itemAddListener);
    ct.addListener("remove", itemRemoveListener);

    // handle DockingContainers
    if (AS3.getBindable(this,"includeDocked")) {
      // adding rootCt as scope to the listener automatically removes the listener if rootCt is destroyed.
      if (ct["dockedItems"]) {
        ct["dockedItems"].each(function (item/*:Component*/)/*:void*/ {
          this$.attachElements$4NzB(item, ct);
          item.addListener("add", itemAddListener, ct);
          item.addListener("remove", itemRemoveListener, ct);
        });

        ct.addListener("dockedadd", function (ownerCt/*:Container*/, item/*:Component*/)/*:void*/ {
          this$.attachElements$4NzB(item, ct);
          item.addListener("add", itemAddListener, ct);
          item.addListener("remove", itemRemoveListener, ct);
        });
        ct.addListener("dockedremove", function (ownerCt/*:Container*/, item/*:Component*/)/*:void*/ {
          item.removeListener("remove", itemRemoveListener, ct);
          item.removeListener("add", itemAddListener, ct);
          this$.detachElements$4NzB(item, ct);
        });
      }
    }
  }/*

  private*/ function attachElements(cmp/*:Component*/, rootCt/*:Container*/)/*:void*/ {var this$=this;
    if (cmp !== rootCt) {
     this.attachElement$4NzB(cmp);
    }
    var ct/*:Container*/ =AS3.as( cmp,  Ext.container.Container);
    ct && ct.cascade(function (item/*:Component*/)/*:Boolean*/ {
      // the first call is always the ct the cascade is called from
      if (item === ct) {
        return true;
      }
      if (this$.isManagedElement$4NzB(item, rootCt)) {
        this$.attachElement$4NzB(item);
        return true;
      }
      return false;
    });
  }/*

  private*/ function detachElements(cmp/*:Component*/, rootCt/*:Container*/)/*:void*/ {var this$=this;
    var ct/*:Container*/ =AS3.as( cmp,  Ext.container.Container);
    ct && ct.cascade(function (item/*:Component*/)/*:Boolean*/ {
      // the first call is always the ct the cascade is called from
      if (item === ct) {
        return true;
      }
      if (this$.isManagedElement$4NzB(item, rootCt)) {
        this$.detachElement$4NzB(item);
        return true;
      }
      return false;
    });
    this.detachElement$4NzB(cmp);
  }/*

  private*/ function attachElement(cmp/*:Component*/)/*:void*/ {
    if (cmp) {
      var element/*:String*/ = this._defaultElement$4NzB;
      if (cmp.hasOwnProperty("bemElement")) {
        element = normalizeElement$static(cmp["bemElement"]);
      }

      if (element) {
        addClass$static(cmp, com.coremedia.ui.util.BEMUtils.getElementClassName(this._block$4NzB, element));
      }
    }
  }/*

  private*/ function detachElement(cmp/*:Component*/)/*:void*/ {
    if (cmp && cmp.rendered) {
      var element/*:String*/ = normalizeElement$static(cmp["bemElement"]) || this._defaultElement$4NzB;

      if (element) {
        cmp.removeCls(com.coremedia.ui.util.BEMUtils.getElementClassName(this._block$4NzB, element));
      }
    }
  }/*

  private*/ function isManagedBlock(cmp/*:Component*/)/*:Boolean*/ {
    var me/*:BEMPlugin*/ = this;
    return (cmp.plugins || []).some(function (plugin/*:Plugin*/)/*:Boolean*/ {
      return plugin === me;
    });
  }/*

  private*/ function isManagedElement(cmp/*:Component*/, rootCt/*:Container*/)/*:Boolean*/ {
    // traverse up the container hierarchy until there is no parent container
    // or the ct is reached
    var currentCmp/*:Component*/ = cmp.up();
    if (AS3.getBindable(this,"includeNested") || currentCmp === rootCt) {
      while (currentCmp) {
        if (hasBEMPlugin$static(currentCmp)) {
          return this.isManagedBlock$4NzB(currentCmp);
        }
        currentCmp = currentCmp.up();
      }
    }
    return false;
  }/*

  private static*/ function normalizeBlock$static(block/*:Object*/)/*:String*/ {
    var bemBlock/*:BEMBlock*/ =AS3.as( block,  com.coremedia.ui.models.bem.BEMBlock);
    return bemBlock ? bemBlock.getIdentifier() :AS3.as( block,  String);
  }/*

  private static*/ function normalizeElement$static(element/*:Object*/)/*:String*/ {
    var bemElement/*:BEMElement*/ =AS3.as( element,  com.coremedia.ui.models.bem.BEMElement);
    return bemElement ? bemElement.getIdentifier() :AS3.as( element,  String);
  }/*

  private static*/ function normalizeModifier$static(modifier/*:Object*/)/*:String*/ {
    var bemModifier/*:BEMModifier*/ =AS3.as( modifier,  com.coremedia.ui.models.bem.BEMModifier);
    return bemModifier ? bemModifier.getIdentifier() :AS3.as( modifier,  String);
  }/*

  private static*/ function normalizeModifiers$static(modifier/*:Object*/)/*:Array*/ {
    var modifierArray/*:Array*/ =AS3.as( modifier,  Array);
    if (modifierArray) {
      return modifierArray.map(normalizeModifier$static);
    }
    return [normalizeModifier$static(modifier)];
  }/*

  private static*/ function normalizeAndFilterModifiers$static(modifier/*:Object*/)/*:Array*/ {
    return normalizeModifiers$static(modifier).filter(function (modifier/*:String*/)/*:Boolean*/ {
      return ! !modifier;
    });
  }/*

  private static*/ function hasBEMPlugin$static(cmp/*:Component*/)/*:Boolean*/ {
    return (cmp.plugins || []).some(function (plugin/*:Plugin*/)/*:Boolean*/ {
      return AS3.is( plugin,  BEMPlugin);
    });
  }/*

  /**
   * Avoids a bug where Ext does not filter duplicate css classes if the element is not rendered yet.
   *
   * @param cmp The Component to add the class to
   * @param cls The CSS class to add
   * /
  private static*/ function addClass$static(cmp/*:Component*/, cls/*:String*/)/*:void*/ {
    var classes/*:Array*/ = (cmp.cls || "").split(" ");
    if (classes.indexOf(cls) === -1) {
      cmp.addCls(cls);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      _block$4NzB: null,
      _modifier$4NzB: null,
      _defaultElement$4NzB: null,
      _includeNested$4NzB: null,
      _includeDocked$4NzB: true,
      _bodyElement$4NzB: null,
      setBlock: set$block,
      getBlock: get$block,
      setModifier: set$modifier,
      getModifier: get$modifier,
      setDefaultElement: set$defaultElement,
      getDefaultElement: get$defaultElement,
      setBodyElement: set$bodyElement,
      getBodyElement: get$bodyElement,
      setIncludeNested: set$includeNested,
      getIncludeNested: get$includeNested,
      setIncludeDocked: set$includeDocked,
      getIncludeDocked: get$includeDocked,
      constructor: BEMPlugin$,
      super$4NzB: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      attachBlock$4NzB: attachBlock,
      setupAndAttachModifiers$4NzB: setupAndAttachModifiers,
      attachModifiers$4NzB: attachModifiers,
      attachModifier$4NzB: attachModifier,
      detachModifiers$4NzB: detachModifiers,
      detachModifier$4NzB: detachModifier,
      attachSpecialElements$4NzB: attachSpecialElements,
      setupAndAttachElements$4NzB: setupAndAttachElements,
      attachElements$4NzB: attachElements,
      detachElements$4NzB: detachElements,
      attachElement$4NzB: attachElement,
      detachElement$4NzB: detachElement,
      isManagedBlock$4NzB: isManagedBlock,
      isManagedElement$4NzB: isManagedElement,
      config: {
        block: undefined,
        modifier: undefined,
        defaultElement: undefined,
        bodyElement: undefined,
        includeNested: undefined,
        includeDocked: undefined
      },
      requires: [
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.models.bem.BEMElement",
        "com.coremedia.ui.models.bem.BEMModifier",
        "com.coremedia.ui.util.BEMUtils"
      ]
    };
});
