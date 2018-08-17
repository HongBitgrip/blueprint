Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridLayoutSelectorBase", function(PageGridLayoutSelectorBase) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

import ext.Template;

public class PageGridLayoutSelectorBase extends ComboBoxLinkPropertyField {

  private var structPropertyName:String;

  private var layoutChooser:LocalComboBox;

  private var deletedPlacements:Object =*/function deletedPlacements_(){this.deletedPlacements$FnpS=( {});}/*;

  protected static const DISPLAY_FIELD_NAME:String = "localizedNameUnencoded";
  protected static const TITLE_FIELD_NAME:String = "localizedName";
  protected static const DESCRIPTION_FIELD_NAME:String = "localizedDescription";
  protected static const SITE_FIELD_NAME:String = "localizedSiteInfo";
  protected static const THUMBNAIL_FIELD_NAME:String = "layoutPreviewHtml";

  protected static const COMBO_BOX_TEMPLATE:Template =*/function COMBO_BOX_TEMPLATE$static_(){PageGridLayoutSelectorBase.COMBO_BOX_TEMPLATE=( com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.getExtendedComboBoxTpl(PageGridLayoutSelectorBase.TITLE_FIELD_NAME, PageGridLayoutSelectorBase.DESCRIPTION_FIELD_NAME, null, null, PageGridLayoutSelectorBase.SITE_FIELD_NAME, PageGridLayoutSelectorBase.THUMBNAIL_FIELD_NAME));}/*;
  protected static const DISPLAY_TEMPLATE:Template =*/function DISPLAY_TEMPLATE$static_(){PageGridLayoutSelectorBase.DISPLAY_TEMPLATE=( com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.getExtendedDisplayTpl(PageGridLayoutSelectorBase.TITLE_FIELD_NAME, PageGridLayoutSelectorBase.DESCRIPTION_FIELD_NAME, null, null, PageGridLayoutSelectorBase.SITE_FIELD_NAME, PageGridLayoutSelectorBase.THUMBNAIL_FIELD_NAME));}/*;

  public*/ function PageGridLayoutSelectorBase$(config/*:PageGridLayoutSelector = null*/) {if(arguments.length<=0)config=null;
    this.super$FnpS(config);deletedPlacements_.call(this);;

    this.layoutChooser$FnpS =AS3.as( this.getComponent(com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField.COMBO_BOX_ITEM_ID),  com.coremedia.ui.components.LocalComboBox);

    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo","DUMMY"));
    AS3.setBindable(this,"propertyName" , AS3.getBindable(config,"propertyName","DUMMY"));
    this.structPropertyName$FnpS = AS3.getBindable(config,"structPropertyName");

    this.mon(this.layoutChooser$FnpS, "change",AS3.bind( this,"cleanupPlacements$FnpS"));
  }/*

  internal static*/ function createAvailableLayoutsValueExpression$static(config/*:PageGridLayoutSelector*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(computeAvailableLayouts$static, config);
  }/*

  override public*/ function setFieldLabel(label/*:String*/)/*:void*/ {
    //workaround for CMS-9992
    if (this.hideLabel) {
      return;
    }
    com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField.prototype.setFieldLabel.call(this,label);
  }/*

  private static*/ function computeAvailableLayouts$static(config/*:PageGridLayoutSelector*/)/*:Array*/ {
    var referenceContent/*:Content*/ = AS3.getBindable(config,"bindTo","DUMMY").getValue();
    if (!referenceContent) {
      return undefined;
    }
    return com.coremedia.blueprint.base.pagegrid.PageGridUtil.getAvailableLayoutsFor(referenceContent, AS3.getBindable(config,"layoutPaths"));
  }/*

  private*/ function cleanupPlacements()/*:void*/ {
    var layoutContent/*:Content*/ =AS3.as( this.layoutChooser$FnpS.getValue(),  com.coremedia.cap.content.Content);
    var content/*:Content*/ =AS3.as( AS3.getBindable(this,"bindTo","DUMMY").getValue(),  com.coremedia.cap.content.Content);
    if (!content) {
      return;
    }
    var placements/*:Struct*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(content, [
      com.coremedia.cap.content.ContentPropertyNames.PROPERTIES,
      AS3.getBindable(this,"propertyName","DUMMY").split(".")[0],
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.NEW_PLACEMENTS_BASE_PROPERTY,
      com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENTS_LIST_PROPERTY
    ]);
    if (placements) {
      var descriptors/*:Array*/ = placements.getType().getDescriptors();
      if (!layoutContent) {
        layoutContent = com.coremedia.blueprint.base.pagegrid.PageGridUtil.getDefaultLayout(content);
      }

      var sections/*:Array*/ = layoutContent ? com.coremedia.blueprint.base.pagegrid.PageGridUtil.getSections(layoutContent) : [];
      if (!sections) {
        return;
      }

      var sectionIds/*:Array*/ = sections.map(toSectionId$static);
      for/* each*/ (var $1=0;$1</* in*/ descriptors.length;++$1) {var descriptor/*:CapPropertyDescriptor*/ =descriptors[$1];
        var sectionId/*:String*/ = descriptor.name;
        if (sectionIds.indexOf(sectionId) === -1) {
          this.deletedPlacements$FnpS[sectionId] = AS3.cast(com.coremedia.cap.struct.Struct,placements.get(sectionId)).toObject();
          placements.getType().removeProperty(sectionId);
        }
      }

      for/* each*/ (var $2=0;$2</* in*/ sectionIds.length;++$2) {var expectedSectionId/*:String*/ =sectionIds[$2];
        var deletedPlacement/*:Object*/ = this.deletedPlacements$FnpS[expectedSectionId];
        if (deletedPlacement) {
          var newPlacementStruct/*:Struct*/ = placements.instantiate(expectedSectionId);
          newPlacementStruct.updateProperties(deletedPlacement);
        }
      }
    }
  }/*

  private static*/ function toSectionId$static(section/*:Content*/)/*:String*/ {
    return section.getUriPath();
  }/*

  internal*/ function renderLayoutPreviewIcon(layoutContent/*:Content*/)/*:String*/ {
    return com.coremedia.blueprint.base.pagegrid.LayoutPreviewRenderer.renderLayoutPreviewIcon(layoutContent, AS3.getBindable(this,"bindTo","DUMMY").getValue(), this.structPropertyName$FnpS, true);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField",
      structPropertyName$FnpS: null,
      layoutChooser$FnpS: null,
      constructor: PageGridLayoutSelectorBase$,
      super$FnpS: function() {
        com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField.prototype.constructor.apply(this, arguments);
      },
      setFieldLabel: setFieldLabel,
      cleanupPlacements$FnpS: cleanupPlacements,
      renderLayoutPreviewIcon: renderLayoutPreviewIcon,
      statics: {
        DISPLAY_FIELD_NAME: "localizedNameUnencoded",
        TITLE_FIELD_NAME: "localizedName",
        DESCRIPTION_FIELD_NAME: "localizedDescription",
        SITE_FIELD_NAME: "localizedSiteInfo",
        THUMBNAIL_FIELD_NAME: "layoutPreviewHtml",
        COMBO_BOX_TEMPLATE: undefined,
        DISPLAY_TEMPLATE: undefined,
        createAvailableLayoutsValueExpression: createAvailableLayoutsValueExpression$static,
        __initStatics__: function() {
          COMBO_BOX_TEMPLATE$static_();
          DISPLAY_TEMPLATE$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.LayoutPreviewRenderer",
        "com.coremedia.blueprint.base.pagegrid.PageGridConstants",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil"
      ]
    };
});
