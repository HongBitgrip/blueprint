Ext.define("com.coremedia.cms.editor.sdk.layouts.ExtendedBorderLayout", function(ExtendedBorderLayout) {/*package com.coremedia.cms.editor.sdk.layouts{
import ext.layout.container.BorderLayout;
import net.jangaroo.ext.Exml;
/**

 Patch for the BorderLayout which allows to see the titles and icons in the collapsed bars.
 You can define which region should have a title via the layout config 'showCollapsedTitles', i.e:

 showCollapsedTitles = ['east', 'west']

 would enable the collapsed panels with region west and east for showing their title. Title will have the
 style class: 'x-collapsed-title-&lt;region>' ,
 icons will have the style class: 'x-panel-inline-icon x-collapsed-icon x-collapsed-icon-&lt;region>'

 * /
public class ExtendedBorderLayout extends BorderLayout{

    public*/function ExtendedBorderLayout$(config/*:ExtendedBorderLayout = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.layout.container.BorderLayout*/ =AS3.cast(Ext.layout.container.Border,{});
    var defaults_$1/*:ExtendedBorderLayout*/ =AS3.cast(ExtendedBorderLayout,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$j3qk(config_$1);
  }/*

    /**

     Defines which region should have a title via the layout config 'showCollapsedTitles', i.e:

     showCollapsedTitles = ['east', 'west']

     would enable the collapsed panels with region west and east for showing their title. Title will have the
     style class: 'x-collapsed-title-&amp;lt;region>' ,
     icons will have the style class: 'x-panel-inline-icon x-collapsed-icon x-collapsed-icon-&amp;lt;region>'

     * /
    [Bindable]
    public var showCollapsedTitles:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.layout.container.Border",
      constructor: ExtendedBorderLayout$,
      super$j3qk: function() {
        Ext.layout.container.Border.prototype.constructor.apply(this, arguments);
      },
      config: {showCollapsedTitles: null},
      requires: [
        "Ext.layout.container.Border",
        "net.jangaroo.ext.Exml"
      ]
    };
});
