Ext.define("ext.dd.IDDScrollConfig", function(IDDScrollConfig) {/*package ext.dd {

/**
 * Scroll configuration of a DOM element, implemented and used by <code>ScrollManager</code>.
 * @see ScrollManager
 * /
public interface IDDScrollConfig {
  /**
   * The animation duration in seconds - MUST BE less than →<code>ext.dd.ScrollManager.frequency</code>!
   * @default 0.4
   * @see ext.dd.ScrollManager#frequency
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-animDuration Original Ext JS documentation of 'animDuration'
   * /
  function get animDuration():Number;

  function set animDuration(value:Number):void;

  /**
   * True to animate the scroll
   * @default true
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-animate Original Ext JS documentation of 'animate'
   * /
  function get animated():Boolean;

  function set animated(value:Boolean):void;

  /**
   * The named drag drop <i>group</i> (→<code>ext.dd.DragSource.ddGroup</code>) to which this container belongs. If a ddGroup is
   * specified, then container scrolling will only occur when a dragged object is in the same ddGroup.
   * @default undefined
   * @see ext.dd.DragSource#ddGroup
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-ddGroup Original Ext JS documentation of 'ddGroup'
   * /
  function get ddGroup():String;

  function set ddGroup(value:String):void;

  /**
   * The frequency of scrolls in milliseconds
   * @default 500
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-frequency Original Ext JS documentation of 'frequency'
   * /
  function get frequency():Number;

  function set frequency(value:Number):void;

  /**
   * The number of pixels from the right or left edge of a container the pointer needs to be to trigger scrolling
   * @default 25 * (window.devicePixelRatio || 1)
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-hthresh Original Ext JS documentation of 'hthresh'
   * /
  function get hthresh():Number;

  function set hthresh(value:Number):void;

  /**
   * The number of pixels to scroll in each scroll increment
   * @default 100
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-increment Original Ext JS documentation of 'increment'
   * /
  function get increment():Number;

  function set increment(value:Number):void;

  /**
   * The number of pixels from the top or bottom edge of a container the pointer needs to be to trigger scrolling
   * @default 25 * (window.devicePixelRatio || 1)
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.ScrollManager.html#property-vthresh Original Ext JS documentation of 'vthresh'
   * /
  function get vthresh():Number;

  function set vthresh(value:Number):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
