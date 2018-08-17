Ext.define("com.coremedia.cms.editor.sdk.columns.grid.IconColumn", function(IconColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import com.coremedia.cms.editor.sdk.columns.grid.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**
 A column object that displays the icon defined in config "iconCls".
 "name" has to exist in store in order to generate a tooltip and specifiy the required dataIndex for columns.

 In order to add custom styling to the IconColumn used the provided {@link IconColumn#modifier} configuration to
 adjust the class that is added to the rendering and use the attached class in CSS rules.
 * /
public class IconColumn extends IconColumnBase{

    public static const DEFAULT_WIDTH:Number = 24;

    public*/function IconColumn$(config/*:IconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase,{});
    var defaults_$1/*:IconColumn*/ =AS3.cast(IconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'icon_header'));
    AS3.setBindable(config_$1,"width" , IconColumn.DEFAULT_WIDTH);
    config_$1.fixed = true;
    config_$1.stateId = "icon";
    config_$1.dataIndex = "name";
    config_$1.renderer =AS3.bind( this,"getRenderer");
    config_$1.tpl = com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase.getXTemplate();
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9WGi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase",
      metadata: {"": ["PublicApi"]},
      constructor: IconColumn$,
      super$9WGi: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase.prototype.constructor.apply(this, arguments);
      },
      statics: {DEFAULT_WIDTH: 24},
      requires: [
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
