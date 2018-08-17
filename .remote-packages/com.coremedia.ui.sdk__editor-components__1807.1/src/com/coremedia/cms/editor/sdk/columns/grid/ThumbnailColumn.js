Ext.define("com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn", function(ThumbnailColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import ext.grid.column.Column;
import net.jangaroo.ext.Exml;

    [PublicApi]
/**
 A column object that displays a thumbnail of a content as image. If not thumbnail is found it used the icon
 associated with the content type.
 * /
public class ThumbnailColumn extends Column{

    import com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer;

    public*/function ThumbnailColumn$(config/*:ThumbnailColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    var defaults_$1/*:ThumbnailColumn*/ =AS3.cast(ThumbnailColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.stateId = "thumbnail";
    AS3.setBindable(config_$1,"width" , 96);
    config_$1.resizable = false;
    config_$1.sortable = false;
    config_$1.dataIndex = "thumbnailUrl";
    config_$1.renderer = com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer.thumbColRenderer;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9dw5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: ThumbnailColumn$,
      super$9dw5: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.grid.column.Column",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer"]
    };
});
