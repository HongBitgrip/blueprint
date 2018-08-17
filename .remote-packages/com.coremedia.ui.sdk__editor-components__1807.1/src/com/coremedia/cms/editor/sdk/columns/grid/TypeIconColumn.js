Ext.define("com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn", function(TypeIconColumn) {/*package com.coremedia.cms.editor.sdk.columns.grid{
import com.coremedia.cms.editor.sdk.columns.grid.IconColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**
 A column object that displays the content type of a content as an
 icon, optionally accompanied by the type's name.
 This column expects that the field type
 represents the type's name.
 * /
public class TypeIconColumn extends IconColumn{

    import ext.Ext;

    import ext.data.Model;
    import ext.data.Store;

    public*/function TypeIconColumn$(config/*:TypeIconColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.IconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.IconColumn,{});
    var defaults_$1/*:TypeIconColumn*/ =AS3.cast(TypeIconColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'type_header'));
    AS3.setBindable(config_$1,"width" , AS3.getBindable(config,"showTypeName") ? 75 : com.coremedia.cms.editor.sdk.columns.grid.IconColumn.DEFAULT_WIDTH);
    config_$1.fixed = !AS3.getBindable(config,"showTypeName");
    AS3.setBindable(config_$1,"iconOnly" , !AS3.getBindable(config,"showTypeName"));
    config_$1.stateId = "type";
    config_$1.dataIndex = "typeCls";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$qcY6(config_$1);
  }/*

    /** @private * /
    override protected*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return AS3.as( value,  String);
    }/*

    /** @private * /
    override protected*/ function calculateIconText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      var data/*:**/ = Ext.apply({}, record.data, record.getAssociatedData());
      return AS3.as( data.type,  String);
    }/*

    /** @private * /
    override protected*/ function calculateToolTipText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
      return this.calculateIconText(value, metadata, record, rowIndex, colIndex, store);
    }/*

    /**
     Show the document type name after the icon or just as a tooltip; defaults to false.
     * /
    [Bindable]
    public var showTypeName:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
      metadata: {"": ["PublicApi"]},
      constructor: TypeIconColumn$,
      super$qcY6: function() {
        com.coremedia.cms.editor.sdk.columns.grid.IconColumn.prototype.constructor.apply(this, arguments);
      },
      calculateIconCls: calculateIconCls,
      calculateIconText: calculateIconText,
      calculateToolTipText: calculateToolTipText,
      config: {showTypeName: false},
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.IconColumn",
        "net.jangaroo.ext.Exml"
      ]
    };
});
