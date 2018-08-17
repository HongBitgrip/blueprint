Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayStyleSelectorBase", function(TeaserOverlayStyleSelectorBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser {
import com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase;
import com.coremedia.cms.editor.sdk.util.TeaserOverlayStyleDescriptor;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;

import ext.Template;
import ext.XTemplate;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.TeaserOverlay')]
public class TeaserOverlayStyleSelectorBase extends LocalComboBox {

  protected static const VALUE_FIELD_NAME:String = "value";
  protected static const TITLE_FIELD_NAME:String = "title";
  protected static const DESCRIPTION_FIELD_NAME:String = "description";
  protected static const SITE_FIELD_NAME:String = "site";
  protected static const HAS_PREVIEW_FIELD_NAME:String = "hasPreview";
  protected static const COLOR_FIELD_NAME:String = "color";
  protected static const BACKGROUND_COLOR_FIELD_NAME:String = "backgroundColor";

  private static const*/var TEASER_OVERLAY_PREVIEW_BLOCK$static/*:BEMBlock*/;/* =*/function TEASER_OVERLAY_PREVIEW_BLOCK$static_(){TEASER_OVERLAY_PREVIEW_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-teaser-overlay-preview"));};/*
  private static const*/var TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT$static/*:BEMElement*/;/* =*/function TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT$static_(){TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT$static=( TEASER_OVERLAY_PREVIEW_BLOCK$static.createElement("text"));};/*

  protected static*/ function getTemplate$static()/*:Template*/ {
    var title/*:String*/ = '<span class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_NAME + '">{' + TeaserOverlayStyleSelectorBase.TITLE_FIELD_NAME + '}</span>';
    var description/*:String*/  = '<span class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_DESCRIPTION + '">{' + TeaserOverlayStyleSelectorBase.DESCRIPTION_FIELD_NAME + '}</span>';
    var site/*:String*/ = '<span class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_SITE + '">{' + TeaserOverlayStyleSelectorBase.SITE_FIELD_NAME + '}</span>';
    var backgroundColor/*:String*/ = '<tpl if="' + TeaserOverlayStyleSelectorBase.BACKGROUND_COLOR_FIELD_NAME + '">background-color:{' + TeaserOverlayStyleSelectorBase.BACKGROUND_COLOR_FIELD_NAME + '};</tpl>';
    var color/*:String*/ = '<tpl if="' + TeaserOverlayStyleSelectorBase.COLOR_FIELD_NAME + '">color:{' + TeaserOverlayStyleSelectorBase.COLOR_FIELD_NAME + '};</tpl>';
    var defaultBackgroundString/*:String*/ = 'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAG0lEQVQYlWM4cezYf3SMDTAMBYXYBLFpHgoKAaOvbX5FJ+m0AAAAAElFTkSuQmCC) repeat;';

    return new Ext.XTemplate(
            '<div class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.LIST_BLOCK + '">',
            '  <tpl for=".">',
            '    <div class=" ' + com.coremedia.ui.components.LocalComboBox.COMBO_BOX_TPL_ITEM_CLASS + ' ' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.LIST_ELEMENT_ITEM + ' ' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_BLOCK + '">',
            '      <tpl if="' + TeaserOverlayStyleSelectorBase.HAS_PREVIEW_FIELD_NAME + '">',
            '        <div class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_LEFT + '">',
            '           <div style="' + defaultBackgroundString + '">',
            '             <div class="' + TEASER_OVERLAY_PREVIEW_BLOCK$static + '" style="' + backgroundColor + '">',
            '             <div class="' + TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT$static + '" style="' + color + '">Example Text</div>',
            '           </div>',
            '         </div>',
            '        </div>',
            '      </tpl>',
            '      <div class="' + com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.ITEM_ELEMENT_RIGHT + '">',
            title,
            description,
            site,
            '      </div>',
            '    </div>',
            '  </tpl>',
            '</div>'
    ).compile();
  }/*

  public*/ function TeaserOverlayStyleSelectorBase$(config/*:TeaserOverlayStyleSelectorBase = null*/) {if(arguments.length<=0)config=null;
    this.super$TFAi(config);
  }/*

  internal static*/ function localizeTitle$static(styleDescriptor/*:TeaserOverlayStyleDescriptor*/)/*:String*/ {
    if(!styleDescriptor) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_style_no_selection');
    }
    // make sure that  no empty string is provided, otherwise the empty text of the combo box will be shown
    return styleDescriptor.title || mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.TeaserOverlay', 'TeaserOverlay_style_no_title');
  }/*

  internal static*/ function localizeDescription$static(styleDescriptor/*:TeaserOverlayStyleDescriptor*/)/*:String*/ {
    if(!styleDescriptor) {
      return "";
    }

    return styleDescriptor.description || "";
  }/*

  internal static*/ function hasPreview$static(styleDescriptor/*:TeaserOverlayStyleDescriptor*/)/*:Boolean*/ {
    return ! !styleDescriptor;
  }/*

  internal static*/ function resolveColor$static(styleDescriptor/*:TeaserOverlayStyleDescriptor*/)/*:String*/ {
    if(!styleDescriptor) {
      return "";
    }

    return styleDescriptor.style.color;
  }/*

  internal static*/ function resolveBackgroundColor$static(styleDescriptor/*:TeaserOverlayStyleDescriptor*/)/*:String*/ {
    if(!styleDescriptor) {
      return "";
    }

    return styleDescriptor.style.backgroundColor;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      metadata: {"": ["PublicApi"]},
      constructor: TeaserOverlayStyleSelectorBase$,
      super$TFAi: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      statics: {
        VALUE_FIELD_NAME: "value",
        TITLE_FIELD_NAME: "title",
        DESCRIPTION_FIELD_NAME: "description",
        SITE_FIELD_NAME: "site",
        HAS_PREVIEW_FIELD_NAME: "hasPreview",
        COLOR_FIELD_NAME: "color",
        BACKGROUND_COLOR_FIELD_NAME: "backgroundColor",
        TEASER_OVERLAY_PREVIEW_BLOCK: undefined,
        TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT: undefined,
        getTemplate: getTemplate$static,
        localizeTitle: localizeTitle$static,
        localizeDescription: localizeDescription$static,
        hasPreview: hasPreview$static,
        resolveColor: resolveColor$static,
        resolveBackgroundColor: resolveBackgroundColor$static,
        __initStatics__: function() {
          TEASER_OVERLAY_PREVIEW_BLOCK$static_();
          TEASER_OVERLAY_PREVIEW_ELEMENT_TEXT$static_();
        }
      },
      requires: [
        "Ext.XTemplate",
        "com.coremedia.cms.editor.TeaserOverlay_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.models.bem.BEMBlock",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase"]
    };
});
