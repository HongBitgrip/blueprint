Ext.define("ext.events.ComponentEvent", function(ComponentEvent) {/*package ext.events {
import ext.Component;

import net.jangaroo.ext.FlExtEvent;

public class ComponentEvent extends FlExtEvent {
  /**
   * Fires after a Component has been visually activated.
   * <p><b>Note</b> This event is only fired if this Component is a child of a →<code>ext.container.Container</code>
   * that uses →<code>ext.layout.container.CardLayout</code> as it's layout or this Component is a floating Component.</p>
   * @see ext.container.Container
   * @see ext.layout.container.CardLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-activate Original Ext JS documentation of 'activate'
   * @see ext.Component
   * @eventType onActivate
   * /
  public static const ACTIVATE:String = "onActivate";
  /**
   * This event first after a component's layout has been updated by a layout that
   * included animation (e.g., a <i>panel</i> (→<code>ext.panel.Panel</code>) in an
   * <i>accordion</i> (→<code>ext.layout.container.AccordionLayout</code>) layout).
   * @since 6.0.0
   * @see ext.panel.Panel
   * @see ext.layout.container.AccordionLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-afterlayoutanimation Original Ext JS documentation of 'afterlayoutanimation'
   * @see ext.Component
   * @eventType onAfterLayoutAnimation
   * /
  public static const AFTER_LAYOUT_ANIMATION:String = "onAfterLayoutAnimation";
  /**
   * Fires after the component rendering is finished.
   * <p>The <code>→event:onAfterRender</code> event is fired after this Component has been →<code>rendered</code>, been post-processed by any
   * <code>→afterRender()</code> method defined for the Component.</p>
   * @since 3.4.0
   * @see ext.Component#event:onAfterRender
   * @see ext.Component#rendered
   * @see ext.Component#afterRender()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-afterrender Original Ext JS documentation of 'afterrender'
   * @see ext.Component
   * @eventType onAfterRender
   * /
  public static const AFTER_RENDER:String = "onAfterRender";
  /**
   * Fires before a Component has been visually activated. Returning <code>false</code> from an event listener can prevent
   * the activate from occurring.
   * <p><b>Note</b> This event is only fired if this Component is a child of a →<code>ext.container.Container</code>
   * that uses →<code>ext.layout.container.CardLayout</code> as it's layout.</p>
   * @see ext.container.Container
   * @see ext.layout.container.CardLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforeactivate Original Ext JS documentation of 'beforeactivate'
   * @see ext.Component
   * @eventType onBeforeActivate
   * /
  public static const BEFORE_ACTIVATE:String = "onBeforeActivate";
  /**
   * Fires before a Component has been visually deactivated. Returning <code>false</code> from an event listener can
   * prevent the deactivate from occurring.
   * <p><b>Note</b> This event is only fired if this Component is a child of a →<code>ext.container.Container</code>
   * that uses →<code>ext.layout.container.CardLayout</code> as it's layout.</p>
   * @see ext.container.Container
   * @see ext.layout.container.CardLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforedeactivate Original Ext JS documentation of 'beforedeactivate'
   * @see ext.Component
   * @eventType onBeforeDeactivate
   * /
  public static const BEFORE_DEACTIVATE:String = "onBeforeDeactivate";
  /**
   * Fires before the component is destroyed.
   * <p><b>Note:</b> This event should not be used to try to veto the destruction sequence by returning
   * <code>false</code>, even though this is often permitted in other "before" events. Doing so will have
   * unpredictable side-effects and can result in partially destroyed objects. Instead look to
   * other events like →<code>ext.panel.Panel.event:onBeforeClose</code> that occur prior to
   * the call to the →<code>ext.Base.destroy()</code> method.</p>
   * @since 1.1.0
   * @see ext.panel.Panel#event:onBeforeClose
   * @see ext.Base#destroy()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforedestroy Original Ext JS documentation of 'beforedestroy'
   * @see ext.Component
   * @eventType onBeforeDestroy
   * /
  public static const BEFORE_DESTROY:String = "onBeforeDestroy";
  /**
   * Fires before the component is hidden when calling the →<code>ext.Component.hide()</code> method. Return <code>false</code> from an event
   * handler to stop the hide.
   * @since 1.1.0
   * @see ext.Component#hide()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforehide Original Ext JS documentation of 'beforehide'
   * @see ext.Component
   * @eventType onBeforeHide
   * /
  public static const BEFORE_HIDE:String = "onBeforeHide";
  /**
   * Fires before the component is →<code>rendered</code>. Return <code>false</code> from an event handler to stop the
   * →<code>render()</code>.
   * @since 1.1.0
   * @see ext.Component#rendered
   * @see ext.Component#render()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforerender Original Ext JS documentation of 'beforerender'
   * @see ext.Component
   * @eventType onBeforeRender
   * /
  public static const BEFORE_RENDER:String = "onBeforeRender";
  /**
   * Fires before the component is shown when calling the →<code>ext.Component.show()</code> method. Return <code>false</code> from an event
   * handler to stop the show.
   * @since 1.1.0
   * @see ext.Component#show()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-beforeshow Original Ext JS documentation of 'beforeshow'
   * @see ext.Component
   * @eventType onBeforeShow
   * /
  public static const BEFORE_SHOW:String = "onBeforeShow";
  /**
   * Fires after a Component has been visually deactivated.
   * <p><b>Note</b> This event is only fired if this Component is a child of a →<code>ext.container.Container</code>
   * that uses →<code>ext.layout.container.CardLayout</code> as it's layout or this Component is a floating Component.</p>
   * @see ext.container.Container
   * @see ext.layout.container.CardLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-deactivate Original Ext JS documentation of 'deactivate'
   * @see ext.Component
   * @eventType onDeactivate
   * /
  public static const DEACTIVATE:String = "onDeactivate";
  /**
   * Fires after the component is →<code>destroy()</code>ed.
   * @since 1.1.0
   * @see ext.Component#destroy()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-destroy Original Ext JS documentation of 'destroy'
   * @see ext.Component
   * @eventType onDestroy
   * /
  public static const DESTROY:String = "onDestroy";
  /**
   * Fires after the component is disabled.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-disable Original Ext JS documentation of 'disable'
   * @see ext.Component
   * @eventType onDisable
   * /
  public static const DISABLE:String = "onDisable";
  /**
   * Fires after the component is enabled.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-enable Original Ext JS documentation of 'enable'
   * @see ext.Component
   * @eventType onEnable
   * /
  public static const ENABLE:String = "onEnable";
  /**
   * Fires after the component is hidden. Fires after the component is hidden when calling the →<code>ext.Component.hide()</code>
   * method.
   * @since 1.1.0
   * @see ext.Component#hide()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-hide Original Ext JS documentation of 'hide'
   * @see ext.Component
   * @eventType onHide
   * /
  public static const HIDE:String = "onHide";
  /**
   * Fires after the component markup is →<code>rendered</code>.
   * @since 1.1.0
   * @see ext.Component#rendered
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-render Original Ext JS documentation of 'render'
   * @see ext.Component
   * @eventType onRender
   * /
  public static const RENDER:String = "onRender";
  /**
   * Fires after the component is shown when calling the →<code>ext.Component.show()</code> method.
   * @since 1.1.0
   * @see ext.Component#show()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-show Original Ext JS documentation of 'show'
   * @see ext.Component
   * @eventType onShow
   * /
  public static const SHOW:String = "onShow";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ComponentEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function ComponentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$bjqb(type, arguments);
  }/*

  public native function get source():Component;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ComponentEvent$,
      super$bjqb: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTIVATE: "onActivate",
        AFTER_LAYOUT_ANIMATION: "onAfterLayoutAnimation",
        AFTER_RENDER: "onAfterRender",
        BEFORE_ACTIVATE: "onBeforeActivate",
        BEFORE_DEACTIVATE: "onBeforeDeactivate",
        BEFORE_DESTROY: "onBeforeDestroy",
        BEFORE_HIDE: "onBeforeHide",
        BEFORE_RENDER: "onBeforeRender",
        BEFORE_SHOW: "onBeforeShow",
        DEACTIVATE: "onDeactivate",
        DESTROY: "onDestroy",
        DISABLE: "onDisable",
        ENABLE: "onEnable",
        HIDE: "onHide",
        RENDER: "onRender",
        SHOW: "onShow",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
