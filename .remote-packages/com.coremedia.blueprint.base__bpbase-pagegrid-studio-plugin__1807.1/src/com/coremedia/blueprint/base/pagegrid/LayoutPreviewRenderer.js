Ext.define("com.coremedia.blueprint.base.pagegrid.LayoutPreviewRenderer", function(LayoutPreviewRenderer) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.util.EncodingUtil;

import ext.XTemplate;

public class LayoutPreviewRenderer {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){LayoutPreviewRenderer.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-layout-preview"));}/*;
  public static const ELEMENT_CELL:BEMElement =*/function ELEMENT_CELL$static_(){LayoutPreviewRenderer.ELEMENT_CELL=( LayoutPreviewRenderer.BLOCK.createElement("cell"));}/*;
  public static const ELEMENT_CELL_HIGHLIGHTED:BEMElement =*/function ELEMENT_CELL_HIGHLIGHTED$static_(){LayoutPreviewRenderer.ELEMENT_CELL_HIGHLIGHTED=( LayoutPreviewRenderer.BLOCK.createElement("cell-highlighted"));}/*;
  public static const ELEMENT_CELL_READ_ONLY:BEMElement =*/function ELEMENT_CELL_READ_ONLY$static_(){LayoutPreviewRenderer.ELEMENT_CELL_READ_ONLY=( LayoutPreviewRenderer.BLOCK.createElement("cell-read-only"));}/*;

  private static const*/var LAYOUT_PREVIEW_ICON_TEMPLATE$static/*:XTemplate*/;/* =*/function LAYOUT_PREVIEW_ICON_TEMPLATE$static_(){LAYOUT_PREVIEW_ICON_TEMPLATE$static=( new Ext.XTemplate(
          '<table class="' + LayoutPreviewRenderer.BLOCK + '">',
          '<tpl for=".">',
          '<tr>',
          '<tpl for=".">',
          '<td class="',
          '<tpl if="readOnly">' + LayoutPreviewRenderer.ELEMENT_CELL_READ_ONLY,
          '<tpl elseif="highlighted">' + LayoutPreviewRenderer.ELEMENT_CELL_HIGHLIGHTED,
          '<tpl else>' + LayoutPreviewRenderer.ELEMENT_CELL + '</tpl>',
          '" ',
          '<tpl if="rowspan">rowSpan="{rowspan}" </tpl>',
          '<tpl if="colspan">colSpan="{colspan}" </tpl>',
          'width="{width}%" height="{height}%" {sectionName:unsafeQtip}></td>',
          '</tpl>',
          '</tr>',
          '</tpl>',
          '</table>'
  ));};/*

  public static*/ function getLayoutPreviewIconRendererForSection$static(section/*:Content*/, bindTo/*:ValueExpression*/, propertyName/*:String*/, tooltips/*:Boolean*/)/*:Function*/ {
    // currying!
    return function(layoutContent/*:Content*/)/*:String*/ {
      return LayoutPreviewRenderer.renderLayoutPreviewIcon(layoutContent, bindTo.getValue(), propertyName, tooltips, section);
    };
  }/*

  public static*/ function renderLayoutPreviewIcon$static(layoutContent/*:Content*/, storingContent/*:Content*/, propertyName/*:String*/, tooltips/*:Boolean*/, highlightSection/*:Content = null*/)/*:String*/ {if(arguments.length<=4)highlightSection=null;
    if (layoutContent === undefined) {
      return undefined;
    }
    if (layoutContent === null) {
      return "";
    }

    if (storingContent === undefined) {
      return undefined;
    }
    var storingContentType/*:ContentType*/ = storingContent.getType();
    if (storingContentType === undefined) {
      return undefined;
    }
    var storingContentTypeName/*:String*/ = storingContentType.getName();

    var properties/*:ContentProperties*/ = layoutContent.getProperties();
    if (properties) {
      var layout/*:Struct*/ = properties.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.SETTINGS_PROPERTY);
      if (layout) {
        var items/*:Array*/ = layout.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEMS_PROPERTY);
        if (items) {
          var rows/*:Number*/ = layout.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ROW_COUNT_PROPERTY);
          var returnUndefined/*:Boolean*/ = false;

          var templateModel/*:Array*/ = [];
          for (var i/*:int*/ = 0; i < rows; i++) {
            templateModel.push([]);
          }
          for/* each*/ (var $1=0;$1</* in*/ items.length;++$1) {var rowItem/*:Struct*/ =items[$1];
            var rowIndex/*:int*/ = parseInt(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_ROW_PROPERTY), 10) - 1;
            if (rowIndex >= 0 && rowIndex < rows) {
              var section/*:Content*/ =AS3.as( rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.SECTION_PROPERTY_NAME),  com.coremedia.cap.content.Content);
              // only use items that actually link to a section:
              if (section) {
                var sectionContentName/*:String*/ = section.getName();
                if (sectionContentName === undefined) {
                  returnUndefined = true;
                } else {
                  var sectionName/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedLabel(storingContentTypeName, propertyName + '-' + sectionContentName);
                  var readOnly/*:Boolean*/ = rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_EDITABLE_PROPERTY) === false;
                  var item/*:Object*/ = {
                    readOnly: readOnly,
                    highlighted: (highlightSection === null) || (section === highlightSection),
                    rowspan: parseInt(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_ROWSPAN_PROPERTY), 10),
                    col: parseInt(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_COL_PROPERTY), 10),
                    colspan: parseInt(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_COLSPAN_PROPERTY), 10),
                    // Width and height might be strings, so that they have to be encoded
                    // to prevent script injection.
                    width: com.coremedia.ui.util.EncodingUtil.encodeForHTML(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_WIDTH_PROPERTY)),
                    height: com.coremedia.ui.util.EncodingUtil.encodeForHTML(rowItem.get(com.coremedia.blueprint.base.pagegrid.PageGridConstants.LAYOUT_ITEM_HEIGHT_PROPERTY)),
                    // Yes, Virginia, you have to escape the section name twice,
                    // because it is eventually rendered into a qtip attribute,
                    // which is unescaped when turning it into a tooltip.
                    sectionName: !readOnly && tooltips ? com.coremedia.ui.util.EncodingUtil.encodeForHTML(com.coremedia.ui.util.EncodingUtil.encodeForHTML(sectionName)) : ""
                  };
                  var row/*:Array*/ = templateModel[rowIndex];
                  row.push(item);
                }
              }
            }
          }
          if (returnUndefined) {
            return undefined;
          }
          for/* each*/ (var $2=0;$2</* in*/ templateModel.length;++$2) {var unsortedRow/*:Array*/ =templateModel[$2];
            unsortedRow.sort(compareCol$static);
          }
          return LAYOUT_PREVIEW_ICON_TEMPLATE$static.apply(templateModel);
        }
      }
    }
    return undefined;
  }/*

  private static*/ function compareCol$static(item1/*:Object*/, item2/*:Object*/)/*:int*/ {
    return item1.col - item2.col;
  }/*

}*/function LayoutPreviewRenderer$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LayoutPreviewRenderer$,
      statics: {
        BLOCK: undefined,
        ELEMENT_CELL: undefined,
        ELEMENT_CELL_HIGHLIGHTED: undefined,
        ELEMENT_CELL_READ_ONLY: undefined,
        LAYOUT_PREVIEW_ICON_TEMPLATE: undefined,
        getLayoutPreviewIconRendererForSection: getLayoutPreviewIconRendererForSection$static,
        renderLayoutPreviewIcon: renderLayoutPreviewIcon$static,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_CELL$static_();
          ELEMENT_CELL_HIGHLIGHTED$static_();
          ELEMENT_CELL_READ_ONLY$static_();
          LAYOUT_PREVIEW_ICON_TEMPLATE$static_();
        }
      },
      requires: [
        "Ext.XTemplate",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: ["com.coremedia.blueprint.base.pagegrid.PageGridConstants"]
    };
});
