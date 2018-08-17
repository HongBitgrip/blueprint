Ext.define("com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase", function(ComboBoxLinkPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;

import ext.Ext;
import ext.Template;
import ext.XTemplate;

/**
 * The base class for combo boxes editing link lists.
 * /
public class ComboBoxLinkPropertyFieldBase extends AdvancedFieldContainer {

  public static const LIST_BLOCK:BEMBlock =*/function LIST_BLOCK$static_(){ComboBoxLinkPropertyFieldBase.LIST_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-combo-box-list"));}/*;
  public static const LIST_ELEMENT_ITEM:BEMElement =*/function LIST_ELEMENT_ITEM$static_(){ComboBoxLinkPropertyFieldBase.LIST_ELEMENT_ITEM=( ComboBoxLinkPropertyFieldBase.LIST_BLOCK.createElement("item"));}/*;

  public static const ITEM_BLOCK:BEMBlock =*/function ITEM_BLOCK$static_(){ComboBoxLinkPropertyFieldBase.ITEM_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-combo-box-item"));}/*;
  public static const ITEM_ELEMENT_LEFT:BEMElement =*/function ITEM_ELEMENT_LEFT$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_LEFT=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("left"));}/*;
  public static const ITEM_ELEMENT_RIGHT:BEMElement =*/function ITEM_ELEMENT_RIGHT$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_RIGHT=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("right"));}/*;
  public static const ITEM_ELEMENT_THUMBNAIL:BEMElement =*/function ITEM_ELEMENT_THUMBNAIL$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_THUMBNAIL=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("thumbnail"));}/*;
  public static const ITEM_ELEMENT_NAME:BEMElement =*/function ITEM_ELEMENT_NAME$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_NAME=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("name"));}/*;
  public static const ITEM_ELEMENT_DESCRIPTION:BEMElement =*/function ITEM_ELEMENT_DESCRIPTION$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_DESCRIPTION=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("description"));}/*;
  public static const ITEM_ELEMENT_SITE:BEMElement =*/function ITEM_ELEMENT_SITE$static_(){ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_SITE=( ComboBoxLinkPropertyFieldBase.ITEM_BLOCK.createElement("site"));}/*;

  private var linkValueExpression:ValueExpression;

  public*/ function ComboBoxLinkPropertyFieldBase$(config/*:ComboBoxLinkPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$3XxC(config);
  }/*

  protected*/ function getLinkValueExpression(config/*:ComboBoxLinkPropertyField*/)/*:ValueExpression*/ {
    if (!this.linkValueExpression$3XxC) {
      this.linkValueExpression$3XxC = com.coremedia.cms.editor.sdk.util.LinkListUtil.createLinkValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"propertyName"),
              AS3.getBindable(config,"linkTypeName"), true,
              AS3.getBindable(config,"fallbackForNullValueExpression"));
    }
    return this.linkValueExpression$3XxC;
  }/*

  protected static*/ function getDefaultDisplayTpl$static(displayField/*:String*/)/*:Template*/ {
    return new Ext.XTemplate('<div class="' + ComboBoxLinkPropertyFieldBase.LIST_BLOCK + '"><tpl for="."><div class="' + ComboBoxLinkPropertyFieldBase.LIST_ELEMENT_ITEM + '">{' + displayField + '}</div></tpl></div>').compile();
  }/*

  private static*/ function getExtendedTemplate$static(forComboBox/*:Boolean*/,
                                              titleField/*:String = null*/,
                                              descriptionField/*:String = null*/,
                                              thumbnailUriField/*:String = null*/,
                                              thumbnailTooltipField/*:String = null*/,
                                              siteField/*:String = null*/,
                                              thumbnailField/*:String = null*/)/*:Template*/ {switch(Math.max(arguments.length,1)){case 1:titleField=null;case 2:descriptionField=null;case 3:thumbnailUriField=null;case 4:thumbnailTooltipField=null;case 5:siteField=null;case 6:thumbnailField=null;}
    var additionalCls/*:String*/ = forComboBox ? com.coremedia.ui.components.LocalComboBox.COMBO_BOX_TPL_ITEM_CLASS + ' ' : '';

    var title/*:String*/ = "";
    var description/*:String*/ = "";
    var site/*:String*/ = "";
    var thumbnail/*:String*/ = "";

    if (titleField) {
      title = '<span class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_NAME + '">{' + titleField + '}</span>';
    }
    if (descriptionField) {
      description = '<span class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_DESCRIPTION + '">{' + descriptionField + '}</span>';
    }
    if (siteField) {
      site = '<span class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_SITE + '">{' + siteField + '}</span>';
    }
    if (thumbnailField) {
      thumbnail = '{' + thumbnailField + '}';
    } else {
      if (thumbnailUriField) {
        var thumbnailTooltip/*:String*/ = "";
        if (thumbnailTooltipField) {
          thumbnailTooltip = ' data-qtip="{' + thumbnailTooltipField + '}"';
        }
        thumbnail = '<img class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_THUMBNAIL + '"'
                + '<tpl if="' + thumbnailUriField + '">src="{' + thumbnailUriField + '}"</tpl>'
                + '<tpl if="!' + thumbnailUriField + '">src="' + Ext.BLANK_IMAGE_URL + '""</tpl>'
                + thumbnailTooltip
                + '/>';
      }
    }

    return new Ext.XTemplate(
            '<div class="' + ComboBoxLinkPropertyFieldBase.LIST_BLOCK + '">',
            '<tpl for=".">',
            '<div class=" ' + additionalCls + ComboBoxLinkPropertyFieldBase.LIST_ELEMENT_ITEM + ' ' + ComboBoxLinkPropertyFieldBase.ITEM_BLOCK + '">',
            '<div class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_LEFT + '">',
            thumbnail,
            '</div>',
            '<div class="' + ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_RIGHT + '">',
            title,
            description,
            site,
            '</div>',
            '</div>',
            '</tpl>',
            '</div>'
    ).compile();
  }/*

  protected static*/ function getExtendedComboBoxTpl$static(titleField/*:String = null*/,
                                                   descriptionField/*:String = null*/,
                                                   thumbnailUriField/*:String = null*/,
                                                   thumbnailTooltipField/*:String = null*/,
                                                   siteField/*:String = null*/,
                                                   thumbnailField/*:String = null*/)/*:Template*/ {switch(arguments.length){case 0:titleField=null;case 1:descriptionField=null;case 2:thumbnailUriField=null;case 3:thumbnailTooltipField=null;case 4:siteField=null;case 5:thumbnailField=null;}
    return getExtendedTemplate$static(true, titleField, descriptionField, thumbnailUriField, thumbnailTooltipField, siteField, thumbnailField);
  }/*

  protected static*/ function getExtendedDisplayTpl$static(titleField/*:String = null*/,
                                                  descriptionField/*:String = null*/,
                                                  thumbnailUriField/*:String = null*/,
                                                  thumbnailTooltipField/*:String = null*/,
                                                  siteField/*:String = null*/,
                                                  thumbnailField/*:String = null*/)/*:Template*/ {switch(arguments.length){case 0:titleField=null;case 1:descriptionField=null;case 2:thumbnailUriField=null;case 3:thumbnailTooltipField=null;case 4:siteField=null;case 5:thumbnailField=null;}
    return getExtendedTemplate$static(false, titleField, descriptionField, thumbnailUriField, thumbnailTooltipField, siteField, thumbnailField);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      linkValueExpression$3XxC: null,
      constructor: ComboBoxLinkPropertyFieldBase$,
      super$3XxC: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      getLinkValueExpression: getLinkValueExpression,
      statics: {
        LIST_BLOCK: undefined,
        LIST_ELEMENT_ITEM: undefined,
        ITEM_BLOCK: undefined,
        ITEM_ELEMENT_LEFT: undefined,
        ITEM_ELEMENT_RIGHT: undefined,
        ITEM_ELEMENT_THUMBNAIL: undefined,
        ITEM_ELEMENT_NAME: undefined,
        ITEM_ELEMENT_DESCRIPTION: undefined,
        ITEM_ELEMENT_SITE: undefined,
        getDefaultDisplayTpl: getDefaultDisplayTpl$static,
        getExtendedComboBoxTpl: getExtendedComboBoxTpl$static,
        getExtendedDisplayTpl: getExtendedDisplayTpl$static,
        __initStatics__: function() {
          LIST_BLOCK$static_();
          LIST_ELEMENT_ITEM$static_();
          ITEM_BLOCK$static_();
          ITEM_ELEMENT_LEFT$static_();
          ITEM_ELEMENT_RIGHT$static_();
          ITEM_ELEMENT_THUMBNAIL$static_();
          ITEM_ELEMENT_NAME$static_();
          ITEM_ELEMENT_DESCRIPTION$static_();
          ITEM_ELEMENT_SITE$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.models.bem.BEMBlock"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.LinkListUtil"]
    };
});
