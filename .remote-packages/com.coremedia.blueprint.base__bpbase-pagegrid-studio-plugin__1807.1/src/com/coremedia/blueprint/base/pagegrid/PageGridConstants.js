Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridConstants", function(PageGridConstants) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.content.ContentPropertyNames;

public class PageGridConstants {

  // Property path from layout content to section list.
  public static const LAYOUT_SECTIONS_PROPERTY_PATH:String =*/function LAYOUT_SECTIONS_PROPERTY_PATH$static_(){PageGridConstants.LAYOUT_SECTIONS_PROPERTY_PATH=( com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + ".settings.items");}/*;

  public static const NEW_PLACEMENTS_BASE_PROPERTY:String = "placements_2";
  public static const PLACEMENTS_LIST_PROPERTY:String = "placements";

  public static const SECTION_PROPERTY_NAME:String = "section";
  public static const LOCKED_PROPERTY_NAME:String = "locked";
  public static const VIEWTYPE_PROPERTY_NAME:String = "viewtype";
  public static const LAYOUT_PROPERTY_NAME:String = "layout";
  public static const PLACEMENT_ITEMS_PROPERTY:String = "items";
  public static const PLACEMENT_EXTENDED_ITEMS_PROPERTY:String = "extendedItems";

  public static const SETTINGS_PROPERTY:String = "settings";

  public static const LAYOUT_ROW_COUNT_PROPERTY:String = 'rowCount';
  public static const LAYOUT_ITEMS_PROPERTY:String = 'items';
  public static const LAYOUT_NAME_PROPERTY:String = 'name';
  public static const LAYOUT_DESCRIPTION_PROPERTY:String = 'description';
  public static const LAYOUT_ITEM_ROW_PROPERTY:String = 'row';
  public static const LAYOUT_ITEM_COL_PROPERTY:String = 'col';
  public static const LAYOUT_ITEM_EDITABLE_PROPERTY:String = 'editable';
  public static const LAYOUT_ITEM_ROWSPAN_PROPERTY:String = 'rowspan';
  public static const LAYOUT_ITEM_COLSPAN_PROPERTY:String = 'colspan';
  public static const LAYOUT_ITEM_WIDTH_PROPERTY:String = 'width';
  public static const LAYOUT_ITEM_HEIGHT_PROPERTY:String = 'height';

}*/function PageGridConstants$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PageGridConstants$,
      statics: {
        LAYOUT_SECTIONS_PROPERTY_PATH: undefined,
        NEW_PLACEMENTS_BASE_PROPERTY: "placements_2",
        PLACEMENTS_LIST_PROPERTY: "placements",
        SECTION_PROPERTY_NAME: "section",
        LOCKED_PROPERTY_NAME: "locked",
        VIEWTYPE_PROPERTY_NAME: "viewtype",
        LAYOUT_PROPERTY_NAME: "layout",
        PLACEMENT_ITEMS_PROPERTY: "items",
        PLACEMENT_EXTENDED_ITEMS_PROPERTY: "extendedItems",
        SETTINGS_PROPERTY: "settings",
        LAYOUT_ROW_COUNT_PROPERTY: 'rowCount',
        LAYOUT_ITEMS_PROPERTY: 'items',
        LAYOUT_NAME_PROPERTY: 'name',
        LAYOUT_DESCRIPTION_PROPERTY: 'description',
        LAYOUT_ITEM_ROW_PROPERTY: 'row',
        LAYOUT_ITEM_COL_PROPERTY: 'col',
        LAYOUT_ITEM_EDITABLE_PROPERTY: 'editable',
        LAYOUT_ITEM_ROWSPAN_PROPERTY: 'rowspan',
        LAYOUT_ITEM_COLSPAN_PROPERTY: 'colspan',
        LAYOUT_ITEM_WIDTH_PROPERTY: 'width',
        LAYOUT_ITEM_HEIGHT_PROPERTY: 'height',
        __initStatics__: function() {
          LAYOUT_SECTIONS_PROPERTY_PATH$static_();
        }
      },
      requires: ["com.coremedia.cap.content.ContentPropertyNames"]
    };
});
