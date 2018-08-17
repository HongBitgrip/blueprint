Ext.define("com.coremedia.ui.util.AriaUtils", function(AriaUtils) {/*package com.coremedia.ui.util {
import ext.Component;
import ext.Ext;
import ext.dom.DomHelper;
import ext.dom.Element;
import ext.form.Labelable;

/**
 * Collection of helper methods for ARIA support.
 * /
public class AriaUtils {

  public static const ROLE_ATTRIBUTE:String = "role";

  public static const LABELLED_BY_ATTRIBUTE:String = "aria-labelledby";
  public static const DESCRIBED_BY_ATTRIBUTE:String = "aria-describedby";

  public static const LIVE_ATTRIBUTE:String = "aria-live";

  public static const ROLE_GROUP:String = "group";

  public static const POLITENESS_SETTING_OFF:String = "off";
  public static const POLITENESS_SETTING_POLITE:String = "polite";
  public static const POLITENESS_SETTING_ASSERTIVE:String = "assertive";

  // used dummy aria labels, if their value is set later
  public static const DUMMY_TEXT:String = "dummy";

  public static*/ function setRole$static(el/*:Element*/, ariaRole/*:String*/)/*:void*/ {
    var attributes/*:Object*/ = {};
    attributes[AriaUtils.ROLE_ATTRIBUTE] = ariaRole;
    el.set(attributes);
  }/*

  private static*/ function getTargetElementForAriaElements$static(cmp/*:Component*/)/*:Element*/ {
    var labelable/*:Labelable*/ =AS3.as( cmp,  Ext.form.Labelable);
    if (labelable) {
      return labelable.bodyEl;
    }
    return cmp.getEl();
  }/*

  private static*/ function createAriaEl$static(cmp/*:Component*/, childElName/*:String*/, attributes/*:String*/)/*:Element*/ {
    var targetEl/*:Element*/ = getTargetElementForAriaElements$static(cmp);
    if (targetEl) {
      var id/*:String*/ = cmp.getId();
      var innerHtml/*:String*/ = '<span id="' + id + '-' + childElName + '" aria-hidden="true" ' + attributes + '></span>';
      var ariaEl/*:Element*/ = Ext.get(Ext.dom.Helper.createDom(innerHtml));
      cmp.on("destroy", function ()/*:void*/ {
        ariaEl.destroy();
      });
      targetEl.appendChild(ariaEl);
      return ariaEl;
    }

    return null;
  }/*

  /**
   * Create child {@link Element} for an {@link Component} that can be references by aria attributes like
   * 'aria-labelledby' and 'aria-describedby'. The child will be automatically removed when the component is destroyed.
   *
   * @param cmp The component the element will be inserted to
   * @param childElName A unique child element name used in the id of the newly created element
   * @return the newly created element
   * /
  public static*/ function createReferenceableAriaEl$static(cmp/*:Component*/, childElName/*:String*/)/*:Element*/ {
    return createAriaEl$static(cmp, childElName, 'class="' + Ext.baseCSSPrefix + 'hidden-offsets"');
  }/*

  /**
   * Create child {@link Element} for an {@link Component} that is used as an aria live region using 'aria-live'
   * attribute. The child will be automatically removed when the component is destroyed.
   *
   * @param cmp The component the element will be inserted to
   * @param childElName A unique child element name used in the id of the newly created element
   * @param politeness the politeness setting to use
   * @return the newly created element
   * /
  public static*/ function createAriaLiveRegionEl$static(cmp/*:Component*/, childElName/*:String*/, politeness/*:String = AriaUtils.POLITENESS_SETTING_POLITE*/)/*:Element*/ {if(arguments.length<=2)politeness=AriaUtils.POLITENESS_SETTING_POLITE;
    return createAriaEl$static(cmp, childElName, AriaUtils.LIVE_ATTRIBUTE + '="' + politeness + '" class="' + Ext.baseCSSPrefix + 'hidden-clip"');
  }/*

  private static*/ function getIds$static(attributeName/*:String*/, el/*:Element*/)/*:Array*/ {
    var labelledBy/*:String*/ =AS3.as( el.getAttribute(attributeName),  String);
    return labelledBy ? labelledBy.split(" ") : [];
  }/*

  private static*/ function setIds$static(attributeName/*:String*/, el/*:Element*/, ids/*:Array*/)/*:void*/ {
    var attributes/*:Object*/ = {};
    attributes[attributeName] = ids.length > 0 ? ids.join(" ") : null;
    el.set(attributes);
  }/*

  /**
   * Adds a given id to the 'aria-labelledby' attribute of the given element. Existing ids will be kept. If the id
   * is already references no modification is done.
   *
   * @param el the element having/getting the 'aria-labelledby' attribute
   * @param labelledBy the id to add
   * /
  public static*/ function addLabelledBy$static(el/*:Element*/, labelledBy/*:String*/)/*:void*/ {
    var ids/*:Array*/ = getIds$static(AriaUtils.LABELLED_BY_ATTRIBUTE, el);
    if (ids.indexOf(labelledBy) === -1) {
      ids.push(labelledBy);
      setIds$static(AriaUtils.LABELLED_BY_ATTRIBUTE, el, ids);
    }
  }/*

  /**
   * Removes a given id from the 'aria-labelledby' attribute of the given element. Other ids will be kept. If the id
   * does not exist no modification is done.
   *
   * @param el the element having/getting the 'aria-labelledby' attribute
   * @param labelledBy the id to remove
   * /
  public static*/ function removeLabelledBy$static(el/*:Element*/, labelledBy/*:String*/)/*:void*/ {
    var ids/*:Array*/ = getIds$static(AriaUtils.LABELLED_BY_ATTRIBUTE, el);
    var indexOf/*:int*/ = ids.indexOf(labelledBy);
    if (indexOf > -1) {
      ids.splice(indexOf, 1);
      setIds$static(AriaUtils.LABELLED_BY_ATTRIBUTE, el, ids);
    }
  }/*

  /**
   * Adds a given id to the 'aria-describedby' attribute of the given element. Existing ids will be kept. If the id
   * is already references no modification is done.
   *
   * @param el the element having/getting the 'aria-describedby' attribute
   * @param describedBy the id to add
   * /
  public static*/ function addDescribedBy$static(el/*:Element*/, describedBy/*:String*/)/*:void*/ {
    var ids/*:Array*/ = getIds$static(AriaUtils.DESCRIBED_BY_ATTRIBUTE, el);
    if (ids.indexOf(describedBy) === -1) {
      ids.push(describedBy);
      setIds$static(AriaUtils.DESCRIBED_BY_ATTRIBUTE, el, ids);
    }
  }/*

  /**
   * Removes a given id from the 'aria-describedby' attribute of the given element. Other ids will be kept. If the id
   * does not exist no modification is done.
   *
   * @param el the element having/getting the 'aria-describedby' attribute
   * @param describedBy the id to remove
   * /
  public static*/ function removeDescribedBy$static(el/*:Element*/, describedBy/*:String*/)/*:void*/ {
    var ids/*:Array*/ = getIds$static(AriaUtils.DESCRIBED_BY_ATTRIBUTE, el);
    var indexOf/*:int*/ = ids.indexOf(describedBy);
    if (indexOf > -1) {
      ids.splice(indexOf, 1);
      setIds$static(AriaUtils.DESCRIBED_BY_ATTRIBUTE, el, ids);
    }
  }/*
}*/function AriaUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: AriaUtils$,
      statics: {
        ROLE_ATTRIBUTE: "role",
        LABELLED_BY_ATTRIBUTE: "aria-labelledby",
        DESCRIBED_BY_ATTRIBUTE: "aria-describedby",
        LIVE_ATTRIBUTE: "aria-live",
        ROLE_GROUP: "group",
        POLITENESS_SETTING_OFF: "off",
        POLITENESS_SETTING_POLITE: "polite",
        POLITENESS_SETTING_ASSERTIVE: "assertive",
        DUMMY_TEXT: "dummy",
        setRole: setRole$static,
        createReferenceableAriaEl: createReferenceableAriaEl$static,
        createAriaLiveRegionEl: createAriaLiveRegionEl$static,
        addLabelledBy: addLabelledBy$static,
        removeLabelledBy: removeLabelledBy$static,
        addDescribedBy: addDescribedBy$static,
        removeDescribedBy: removeDescribedBy$static
      },
      requires: [
        "Ext",
        "Ext.dom.Helper",
        "Ext.form.Labelable"
      ]
    };
});
