Ext.define("com.coremedia.ui.util.TableUtil", function(TableUtil) {/* /**
 * Created by fwienber on 28.07.2016.
 * /
package com.coremedia.ui.util {
import ext.dom.Element;
import ext.grid.CellContext;
import ext.panel.TablePanel;
import ext.view.TableView;

import js.HTMLElement;

public class TableUtil {

  public static*/ function getMainBody$static(table/*:TablePanel*/)/*:Element*/ {
    var view/*:TableView*/ = table.getView();
    return AS3.cast(Ext.dom.Element,view.getEl().down(view.getBodySelector()));
  }/*

  public static*/ function getCell$static(table/*:TablePanel*/, row/*:uint*/, column/*:uint*/)/*:Element*/ {
    return getCellInternal$static(table, row, column, false);
  }/*

  public static*/ function getCellAsDom$static(table/*:TablePanel*/, row/*:uint*/, column/*:uint*/)/*:HTMLElement*/ {
    return getCellInternal$static(table, row, column, true);
  }/*

  private static*/ function getCellInternal$static(table/*:TablePanel*/, row/*:uint*/, column/*:uint*/, returnDom/*:Boolean*/)/*:**/ {
    return new Ext.grid.CellContext(table.getView()).setPosition(row, column).getCell(returnDom);
  }/*

}*/function TableUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TableUtil$,
      statics: {
        getMainBody: getMainBody$static,
        getCell: getCell$static,
        getCellAsDom: getCellAsDom$static
      },
      requires: [
        "Ext.dom.Element",
        "Ext.grid.CellContext"
      ]
    };
});
