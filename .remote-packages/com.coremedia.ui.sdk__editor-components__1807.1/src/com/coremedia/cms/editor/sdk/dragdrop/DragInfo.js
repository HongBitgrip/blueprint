Ext.define("com.coremedia.cms.editor.sdk.dragdrop.DragInfo", function(DragInfo) {/*package com.coremedia.cms.editor.sdk.dragdrop {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Model;

public class DragInfo {

  private var contents:Array;

  public*/ function DragInfo$(contents/*:Array*/) {
    this.contents$h4TJ = contents;
  }/*

  /**
   * Create a drag info object for the drag gesture described by the argument.
   *
   * @param data the drag data provided by the drag source
   * @return the drag info
   * /
  public static*/ function makeDragInfo$static(data/*:Object*/)/*:DragInfo*/ {
    if (! !data) {
      var contents/*:Array*/ =AS3.as( data.contents,  Array);
      var node/*:Model*/ =AS3.as( data.node,  Ext.data.Model);
      var records/*:Array*/ =AS3.as( data.records,  Array);

      if (!contents && node) {
        contents = [com.coremedia.ui.data.beanFactory.getRemoteBean(node.getId())];
      }
      if (!contents && records) {
        // contents is empty, generate it from records
        contents = records
                .filter(function (model/*:Model*/)/*:Boolean*/ {
                  return AS3.is( model,  com.coremedia.ui.store.BeanRecord);
                }).map(function (beanRecord/*:BeanRecord*/)/*:Bean*/ {
                  return beanRecord.getBean();
                }).filter(isNotFalsy$static);
        if (contents.length > 0) {
          return new DragInfo(contents);
        }
      }
      if (contents && contents.length > 0) {
        return new DragInfo(contents);
      }
    }
    return undefined;
  }/*

  private static*/ function isNotFalsy$static(value/*:**/)/*:Boolean*/ {
    return ! !value;
  }/*

  public*/ function getContents()/*:Array*/ {
    return this.contents$h4TJ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      contents$h4TJ: null,
      constructor: DragInfo$,
      getContents: getContents,
      statics: {makeDragInfo: makeDragInfo$static},
      requires: [
        "Ext.data.Model",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
