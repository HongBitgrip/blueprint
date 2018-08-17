Ext.define("com.coremedia.ui.util.BEMUtils", function(BEMUtils) {/*package com.coremedia.ui.util {

import com.coremedia.ui.models.bem.BEMDecorator;
import com.coremedia.ui.models.bem.SelectorWithIdentifier;

import ext.dom.Element;

/**
 * Provides Utility functions for the usage of the B.E.M. pattern.
 * /
public class BEMUtils {

  private static const*/var CLASS_SELECTOR$static/*:String*/ = ".";/*

  /**
   * Applies a {@link BEMDecorator} to an existing {@link ext.dom.Element}.
   *
   * @param bemDecorator The BEMDecorator to use
   * @param extElement The element to apply the decoration to
   * /
  public static*/ function undecorateBEM$static(bemDecorator/*:BEMDecorator*/, extElement/*:Element*/)/*:void*/ {
    var blockSelector/*:String*/ = bemDecorator.getBlock().getSelector();
    var blockIdentifier/*:String*/ = bemDecorator.getBlock().getIdentifier();

    // modifiers
    (AS3.as(bemDecorator.getModifiers(),  Array) || []).forEach(function (selectorWithIdentifier/*:SelectorWithIdentifier*/)/*:void*/ {
      var modifierClassName/*:String*/ = BEMUtils.getModifierClassName(blockIdentifier, selectorWithIdentifier.getIdentifier());
      var direct/*:String*/ = selectorWithIdentifier.isDirectSelector() ? "" : " ";
      extElement.select(blockSelector + direct + selectorWithIdentifier.getSelector()).removeCls(modifierClassName);
    });
    // elements
    (AS3.as(bemDecorator.getElements(),  Array) || []).forEach(function (selectorWithIdentifier/*:SelectorWithIdentifier*/)/*:void*/ {
      var elementClassName/*:String*/ = BEMUtils.getElementClassName(blockIdentifier, selectorWithIdentifier.getIdentifier());
      extElement.select(blockSelector + " " + selectorWithIdentifier.getSelector()).removeCls(elementClassName);
    });
    // block
    var target/*:Element*/ = extElement;
    if (blockSelector && blockSelector.length > 0) {
      target = extElement.select(blockSelector);
    }
    target.removeCls(BEMUtils.getBlockClassName(blockIdentifier));
  }/*

  /**
   * Removes a {@link BEMDecorator} from an existing {@link ext.dom.Element}.
   *
   * @param bemDecorator The BEMDecorator to use
   * @param extElement The element to remove the decoration from
   * /
  public static*/ function decorateBEM$static(bemDecorator/*:BEMDecorator*/, extElement/*:Element*/)/*:void*/ {
    var blockIdentifier/*:String*/ = bemDecorator.getBlock().getIdentifier();
    var blockSelector/*:String*/ = bemDecorator.getBlock().getSelector();

    // block
    var target/*:Element*/ = extElement;
    if (blockSelector && blockSelector.length > 0) {
      target = extElement.select(blockSelector);
    }
    target.addCls(BEMUtils.getBlockClassName(blockIdentifier));

    // elements
    (AS3.as(bemDecorator.getElements(),  Array) || []).forEach(function (selectorWithIdentifier/*:SelectorWithIdentifier*/)/*:void*/ {
      var elementClassName/*:String*/ = BEMUtils.getElementClassName(blockIdentifier, selectorWithIdentifier.getIdentifier());
      extElement.select(blockSelector + " " + selectorWithIdentifier.getSelector()).addCls(elementClassName);
    });
    // modifiers
    (AS3.as(bemDecorator.getModifiers(),  Array) || []).forEach(function (selectorWithIdentifier/*:SelectorWithIdentifier*/)/*:void*/ {
      var modifierClassName/*:String*/ = BEMUtils.getModifierClassName(blockIdentifier, selectorWithIdentifier.getIdentifier());
      var direct/*:String*/ = selectorWithIdentifier.isDirectSelector() ? "" : " ";
      extElement.select(blockSelector + direct + selectorWithIdentifier.getSelector()).addCls(modifierClassName);
    });
  }/*

  /**
   * Generates a CSS class name for a given block identifier.
   *
   * @param block the block identifier
   * @return a css class name representing the block
   * /
  public static*/ function getBlockClassName$static(block/*:String*/)/*:String*/ {
    return escapeClassName$static(block);
  }/*

  /**
   * Generates a CSS selector for a given block identifier.
   *
   * @param block the block identifier
   * @return a css selector for the block
   * /
  public static*/ function getBlockSelector$static(block/*:String*/)/*:String*/ {
    return CLASS_SELECTOR$static + BEMUtils.getBlockClassName(block);
  }/*

  /**
   * Generates a CSS class name for a given element identifier.
   *
   * @param block the block identifier the element belongs to
   * @param element the element identifier
   * @return a css class name representing the element
   * /
  public static*/ function getElementClassName$static(block/*:String*/, element/*:String*/)/*:String*/ {
    return escapeClassName$static(block + "__" + element);
  }/*

  /**
   * Generates a CSS selector for a given element identifier.
   *
   * @param block the block identifier the element belongs to
   * @param element the element identifier
   * @return a selector for the element
   * /
  public static*/ function getElementSelector$static(block/*:String*/, element/*:String*/)/*:String*/ {
    return CLASS_SELECTOR$static + BEMUtils.getElementClassName(block, element);
  }/*

  /**
   * Generates a CSS class name for a given modifier identifier.
   *
   * @param block the block identifier the modifier belongs to
   * @param modifier the modifier identifier
   * @return a css class name representing the modifier
   * /
  public static*/ function getModifierClassName$static(block/*:String*/, modifier/*:String*/)/*:String*/ {
    return escapeClassName$static(block + "--" + modifier);
  }/*

  /**
   * Generated a CSS selector for a given modifier identifier.
   *
   * @param block the block identifier the modifier belongs to
   * @param modifier the modifier identifier
   * @return a css selector for the modifier
   * /
  public static*/ function getModifierSelector$static(block/*:String*/, modifier/*:String*/)/*:String*/ {
    return CLASS_SELECTOR$static + BEMUtils.getModifierClassName(block, modifier);
  }/*

  private static*/ function escapeClassName$static(unescapedClassName/*:String*/)/*:String*/ {
    return unescapedClassName.replace(/[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~\s]/g, "");
  }/*
}*/function BEMUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: BEMUtils$,
      statics: {
        undecorateBEM: undecorateBEM$static,
        decorateBEM: decorateBEM$static,
        getBlockClassName: getBlockClassName$static,
        getBlockSelector: getBlockSelector$static,
        getElementClassName: getElementClassName$static,
        getElementSelector: getElementSelector$static,
        getModifierClassName: getModifierClassName$static,
        getModifierSelector: getModifierSelector$static
      }
    };
});
