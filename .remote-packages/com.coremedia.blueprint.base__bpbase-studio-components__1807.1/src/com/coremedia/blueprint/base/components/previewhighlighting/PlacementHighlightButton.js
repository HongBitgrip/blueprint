Ext.define("com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton", function(PlacementHighlightButton) {/*package com.coremedia.blueprint.base.components.previewhighlighting{
import com.coremedia.blueprint.base.components.previewhighlighting.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton')]
public class PlacementHighlightButton extends PlacementHighlightButtonBase{

    import com.coremedia.blueprint.base.components.previewhighlighting.*;

    public static const xtype:String = "com.coremedia.livecontext.studio.config.placementHighlightButton";

    public*/function PlacementHighlightButton$(config/*:PlacementHighlightButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase*/ =AS3.cast(com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase,{});
    var defaults_$1/*:PlacementHighlightButton*/ =AS3.cast(PlacementHighlightButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'placement_view')));
    config_$1.enableToggle = true;
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton', 'PlacementHighlightButton_tooltip')));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton', 'PlacementHighlightButton_tooltip'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$H_nb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase",
      alias: "widget.com.coremedia.livecontext.studio.config.placementHighlightButton",
      constructor: PlacementHighlightButton$,
      super$H_nb: function() {
        com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButtonBase",
        "com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightButton_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
