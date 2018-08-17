Ext.define("ext.mixin.AdvancedFocusableContainerMixin", function(AdvancedFocusableContainerMixin) {/*package ext.mixin {
import ext.ClassManager;
import ext.Component;
import ext.ObjectUtil;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.BaseField;
import ext.layout.container.BoxLayout;
import ext.util.KeyMap;

import joo.getQualifiedObject;

public class AdvancedFocusableContainerMixin extends FocusableContainer implements IAdvancedFocusableContainerMixin {

  /**
   * Tab navigation disabled.
   *
   * @see #tabNavigationMode
   * /
  public static const TAB_NAVIGATION_MODE_DISABLE:int = -1;
  /**
   * Tab navigation enabled (possibly in addition to arrow key navigation).
   *
   * @see #tabNavigationMode
   * /
  public static const TAB_NAVIGATION_MODE_ENABLE:int = 0;
  /**
   * Only tab navigation allowed, arrow key navigation disabled.
   *
   * @see #tabNavigationMode
   * /
  public static const TAB_NAVIGATION_MODE_ONLY:int = 1;

  /** @inheritDoc * /
  public native function get excludeInputFields():Boolean;

  /** @private * /
  public native function set excludeInputFields(nested:Boolean):void;

  /** @inheritDoc * /
  public native function get getFocusablesFn():Function;

  /** @private * /
  public native function set getFocusablesFn(fn:Function):void;

  /** @inheritDoc * /
  public native function get ignoreInputFields():Boolean;

  /** @private * /
  public native function set ignoreInputFields(nested:Boolean):void;

  /** @inheritDoc * /
  public native function get nestedFocusableItems():Boolean;

  /** @private * /
  public native function set nestedFocusableItems(nested:Boolean):void;

  /** @inheritDoc * /
  public native function get tabNavigationMode():int;

  /** @private * /
  public native function set tabNavigationMode(mode:int):void;

  [ExtPrivate]
  [ArrayElementType("ext.Component")]
  override internal*/ function getFocusables()/*:Array*/ {
    if (this.nestedFocusableItems !== false) {
      // Not too nice. But the BoxLayout puts the menuTrigger directly into the DOM without letting the container know anything of it.
      // So we have to make the menuTrigger known to the getFocusables function.
      var mixinClient/*:ext.container.Container*/ = AS3.cast(Ext.container.Container,this);
      var focusables/*:Array*/ = this.getFocusablesFn ? this.getFocusablesFn() : mixinClient.query();
      var layout/*:BoxLayout*/ =AS3.as( mixinClient.layout,  Ext.layout.container.Box);
      if (layout && AS3.getBindable(layout,"overflowHandler") && AS3.getBindable(layout,"overflowHandler").menuTrigger) {
        focusables.push(AS3.getBindable(layout,"overflowHandler").menuTrigger);
      }

      return focusables;
    }
    return Ext.mixin.FocusableContainer.prototype.getFocusables.call(this);
  }/*

  [ExtPrivate]
  override internal*/ function processFocusableContainerKeyEvent(e/*:Event*/)/*:Event*/ {
    if (this.ignoreInputFields === false) {
      return e;
    }
    return Ext.mixin.FocusableContainer.prototype.processFocusableContainerKeyEvent.call(this,e);
  }/*

  private*/ function onFocusableContainerTabKeyNavigate(keyCode/*:Number*/, event/*:Event*/)/*:**/ {
    event.preventDefault();
    return this.moveChildFocus(event, !event.shiftKey);
  }/*

  [ExtPrivate]
  override internal*/ function initFocusableContainerKeyNav(el/*:Element*/)/*:void*/ {
    Ext.mixin.FocusableContainer.prototype.initFocusableContainerKeyNav.call(this,el);

    if (this.tabNavigationMode === undefined) {
      return;
    }

    var keyMap/*:KeyMap*/ = this.focusableKeyNav['map'];
    keyMap.ignoreInputFields = this.ignoreInputFields;
    var bindings/*:Array*/ = keyMap['bindings'];
    function removeBindings(keyCode/*:String*/)/*:void*/ {
      for/* each*/ (var $1=0;$1</* in*/ bindings.length;++$1) {var binding/*:Object*/ =bindings[$1];
        if (binding.key === keyCode) {
          keyMap.removeBinding(binding);
        }
      }
    }

    removeBindings(Ext.event.Event.TAB);

    if (this.tabNavigationMode ===AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY || this.tabNavigationMode === AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ENABLE) {
      // Tab navigation enabled (possibly in addition to arrow key navigation)
      keyMap.addBinding({
        key: Ext.event.Event.TAB,
        handler:AS3.bind( this,"onFocusableContainerTabKeyNavigate$vFKs"),
        ctrl: false,
        shift: false,
        alt: false
      });
      keyMap.addBinding({
        key: Ext.event.Event.TAB,
        handler:AS3.bind( this,"onFocusableContainerTabKeyNavigate$vFKs"),
        ctrl: false,
        shift: true,
        alt: false
      });
      if (this.tabNavigationMode ===AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY) {
        // Tab navigation only (no arrow key navigation)
        ([Ext.event.Event.UP, Ext.event.Event.DOWN, Ext.event.Event.LEFT, Ext.event.Event.RIGHT]).forEach(removeBindings);
      }
    } else if (this.tabNavigationMode !== AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_DISABLE) {
      throw new AS3.Error("Fatal: Unknown value for tabNavigationMode: " + this.tabNavigationMode);
    }
  }/*

  [MixinHook(after="constructor")]
  private*/ function afterConstructor()/*:void*/ {var this$=this;
    if (!this.focusableContainer) {
      return;
    }

    // Listen to add / remove of items at any depth and call onFocusableChildAdd / onFocusableChildRemove (FocusableContainer mixin).
    this.getFocusables().forEach(function (item/*:Component*/)/*:void*/ {
      this$.onFocusableChildAdd(item);
    });
    AS3.cast(Ext.container.Container,this).on("add", function (ct/*:ext.container.Container*/, item/*:Component*/)/*:void*/ {
      this$.onFocusableChildAdd(item);

      var containerItem/*:ext.container.Container*/ =AS3.as( item,  Ext.container.Container);
      if (containerItem) {
        containerItem.query().forEach(function (child/*:Component*/)/*:void*/ {
          this$.onFocusableChildAdd(child);
        });
      }
    });
  }/*

  [MixinHook(after="onBeforeAdd")]
  private*/ function beforeAdd(component/*:Component*/)/*:void*/ {
    if (this.excludeInputFields) {
      component['__needArrowKeys'] = component['needArrowKeys'];
      component['needArrowKeys'] = false;
    }
  }/*

  [MixinHook(after="onAdd")]
  private*/ function afterAdd(component/*:Component*/)/*:void*/ {
    if (this.excludeInputFields) {
      component['needArrowKeys'] = component['__needArrowKeys'];
    }
  }/*

  [ExtPrivate]
  override internal*/ function findNextFocusableChild(options/*:Object*/)/*:Component*/ {
    var focusableChild/*:Component*/ = Ext.mixin.FocusableContainer.prototype.findNextFocusableChild.call(this,options);
    if (options.hasOwnProperty("child") && options.hasOwnProperty("step") && this.excludeInputFields &&AS3.is( focusableChild,  Ext.form.field.Base)) {
      var step/*:int*/ = options.step === true ? 1 : options.step === false ? -1 : options.step;
      focusableChild = options.child;
      while (true) {
        var previousChild/*:Component*/ = Ext.mixin.FocusableContainer.prototype.findNextFocusableChild.call(this,{
          child: focusableChild,
          step: -step // search in opposite direction!
        });
        if (!previousChild || (AS3.is(previousChild,  Ext.form.field.Base))) {
          break;
        }
        focusableChild = previousChild;
      }
    }
    return focusableChild;
  }/*

  [ExtPrivate]
  override internal*/ function deactivateFocusable(child/*:Component*/)/*:void*/ {
    if (this.excludeInputFields && (AS3.is(child,  Ext.form.field.Base))) {
      return;
    }
    Ext.mixin.FocusableContainer.prototype.deactivateFocusable.call(this,child);
  }/*

  [ExtPrivate]
  override internal*/ function beforeFocusableChildFocus(child/*:Component*/)/*:void*/ {
    Ext.mixin.FocusableContainer.prototype.beforeFocusableChildFocus.call(this,child);

    if (child['needArrowKeys']) {
      this.guardFocusableChild$vFKs(child);
      if (AS3.is(child,  Ext.form.field.Base)) {
        AS3.cast(Ext.container.Container,this).mon(child, "change",AS3.bind( this,"listenToInputFieldChanges$vFKs"));
      }
    }
  }/*

  [ExtPrivate]
  override internal*/ function afterFocusableChildBlur(child/*:Component*/)/*:void*/ {
    Ext.mixin.FocusableContainer.prototype.afterFocusableChildBlur.call(this,child);

    if (child['needArrowKeys']) {
      if (AS3.is(child,  Ext.form.field.Base)) {
        AS3.cast(Ext.container.Container,this).mun(child, "change",AS3.bind( this,"listenToInputFieldChanges$vFKs"));
      }
    }
  }/*

  private*/ function guardFocusableChild(child/*:Component*/)/*:void*/ {
    this.tryGuardFocusableChild$vFKs(child, false);
    this.tryGuardFocusableChild$vFKs(child, true);
  }/*

  private*/ function tryGuardFocusableChild(child/*:Component*/, forward/*:Boolean*/)/*:void*/ {
    var guard/*:Component*/ = this.findNextFocusableChild({child: child, step: forward});
    if (guard) {
      guard.setTabIndex(this.activeChildTabIndex);
    }
  }/*

  private*/ function listenToInputFieldChanges(component/*:Component*/)/*:void*/ {var this$=this;
    function handleInputFieldChanges()/*:void*/ {
      this$.guardFocusableChild$vFKs(component);
    }

    // AsyncObserver here: We need to wait until all other items of the
    // FocusableContainer have updated their status in (possible) reaction
    // to the change event from the input field component.
    // Sorry about the forward reference to a CoreMedia utility class. :-(
    // At least, it is robust against not being available.
    var AsyncObserver/*:**/ = joo.getQualifiedObject("com.coremedia.ui.util.AsyncObserver");
    if (AsyncObserver) {
      AsyncObserver.complete(handleInputFieldChanges);
    } else {
      window.setTimeout(handleInputFieldChanges, 10);
    }
  }/*

  private static*/ function patchOverriddenMixinMethods$static(/*...patchedMethods*/)/*:void*/ {var patchedMethods=Array.prototype.slice.call(arguments);
    var proto/*:**/ = AdvancedFocusableContainerMixin["prototype"];
    var mixinId/*:String*/ = proto.mixinId;

    // find and patch all classes that already have the mixin we extend:
    Ext.Object.each(Ext.ClassManager['classes'], function (name/*:String*/, cls/*:Class*/)/*:void*/ {
      var clsProto/*:**/ = cls && cls.prototype;
      if (hasMixin$static(clsProto, mixinId)) {
        patchedMethods.forEach(function (patchedMethod/*:String*/)/*:void*/ {
          if (clsProto.hasOwnProperty(patchedMethod)) {
            // Overwrite the original method with our mixin method:
            clsProto[patchedMethod] = proto[patchedMethod];
          }
        });
      }
    });
  }/*

  private static*/ function hasMixin$static(clsProto/*:**/, mixinId/*:String*/)/*:Boolean*/ {
    while (clsProto) {
      if (clsProto.mixins && clsProto.mixins.hasOwnProperty(mixinId)) {
        return true;
      }
      clsProto = clsProto.superclass;
    }
    return false;
  }function static$0(){

  patchOverriddenMixinMethods$static(
          "getFocusables",
          "processFocusableContainerKeyEvent",
          "initFocusableContainerKeyNav",
          "findNextFocusableChild",
          "deactivateFocusable",
          "beforeFocusableChildFocus",
          "afterFocusableChildBlur");}/*
}*/function AdvancedFocusableContainerMixin$() {this.super$vFKs();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.mixin.FocusableContainer",
      mixinConfig: {after: {
        constructor: "afterConstructor$vFKs",
        onBeforeAdd: "beforeAdd$vFKs",
        onAdd: "afterAdd$vFKs"
      }},
      onFocusableContainerTabKeyNavigate$vFKs: onFocusableContainerTabKeyNavigate,
      afterConstructor$vFKs: afterConstructor,
      beforeAdd$vFKs: beforeAdd,
      afterAdd$vFKs: afterAdd,
      guardFocusableChild$vFKs: guardFocusableChild,
      tryGuardFocusableChild$vFKs: tryGuardFocusableChild,
      listenToInputFieldChanges$vFKs: listenToInputFieldChanges,
      super$vFKs: function() {
        Ext.mixin.FocusableContainer.prototype.constructor.apply(this, arguments);
      },
      constructor: AdvancedFocusableContainerMixin$,
      privates: {
        getFocusables: getFocusables,
        processFocusableContainerKeyEvent: processFocusableContainerKeyEvent,
        initFocusableContainerKeyNav: initFocusableContainerKeyNav,
        findNextFocusableChild: findNextFocusableChild,
        deactivateFocusable: deactivateFocusable,
        beforeFocusableChildFocus: beforeFocusableChildFocus,
        afterFocusableChildBlur: afterFocusableChildBlur
      },
      statics: {
        TAB_NAVIGATION_MODE_DISABLE: -1,
        TAB_NAVIGATION_MODE_ENABLE: 0,
        TAB_NAVIGATION_MODE_ONLY: 1,
        __initStatics__: function() {
          static$0();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.mixin.FocusableContainer"
      ],
      uses: [
        "Ext.ClassManager",
        "Ext.Object",
        "Ext.container.Container",
        "Ext.event.Event",
        "Ext.form.field.Base",
        "Ext.layout.container.Box"
      ]
    };
});
