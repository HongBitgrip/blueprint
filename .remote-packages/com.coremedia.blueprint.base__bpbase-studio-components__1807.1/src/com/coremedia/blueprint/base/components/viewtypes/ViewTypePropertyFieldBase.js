Ext.define("com.coremedia.blueprint.base.components.viewtypes.ViewTypePropertyFieldBase", function(ViewTypePropertyFieldBase) {/*package com.coremedia.blueprint.base.components.viewtypes {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Template;

public class ViewTypePropertyFieldBase extends ComboBoxLinkPropertyField {
  private var availableViewTypesExpression:ValueExpression;

  public static const DEFAULT_PATHS:Array =*/function DEFAULT_PATHS$static_(){ViewTypePropertyFieldBase.DEFAULT_PATHS=( ['/Settings/Options/Viewtypes/', 'Options/Viewtypes/']);}/*;

  /**
   * Whether to hide this property field when the combo box would offer only a single choice.
   *
   * Default: false.
   * /
  [ExtConfig]
  public var hideForSingleChoice:Boolean;

  protected static const DISPLAY_FIELD_NAME:String = "titleUnencoded";
  protected static const TITLE_FIELD_NAME:String = "title";
  protected static const DESCRIPTION_FIELD_NAME:String = "description";
  protected static const THUMBNAIL_URI_FIELD_NAME:String = "thumbnailUri";
  protected static const THUMBNAIL_TOOLTIP_FIELD_NAME:String = "thumbnailTooltip";
  protected static const SITE_FIELD_NAME:String = "site";

  protected static const COMBO_BOX_TEMPLATE:Template =*/function COMBO_BOX_TEMPLATE$static_(){ViewTypePropertyFieldBase.COMBO_BOX_TEMPLATE=( com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.getExtendedComboBoxTpl(ViewTypePropertyFieldBase.TITLE_FIELD_NAME, ViewTypePropertyFieldBase.DESCRIPTION_FIELD_NAME, ViewTypePropertyFieldBase.THUMBNAIL_URI_FIELD_NAME, ViewTypePropertyFieldBase.THUMBNAIL_TOOLTIP_FIELD_NAME, ViewTypePropertyFieldBase.SITE_FIELD_NAME));}/*;
  protected static const DISPLAY_TEMPLATE:Template =*/function DISPLAY_TEMPLATE$static_(){ViewTypePropertyFieldBase.DISPLAY_TEMPLATE=( com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase.getExtendedDisplayTpl(ViewTypePropertyFieldBase.TITLE_FIELD_NAME, ViewTypePropertyFieldBase.DESCRIPTION_FIELD_NAME, ViewTypePropertyFieldBase.THUMBNAIL_URI_FIELD_NAME, ViewTypePropertyFieldBase.THUMBNAIL_TOOLTIP_FIELD_NAME, ViewTypePropertyFieldBase.SITE_FIELD_NAME));}/*;
  private var visibleVE:ValueExpression;

  public*/ function ViewTypePropertyFieldBase$(config/*:ViewtypePropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$nyHH(config);

    this.getVisibleVE(config).addChangeListener(AS3.bind(this,"showOrHidePropFieldGroupParent$nyHH"));
    this.showOrHidePropFieldGroupParent$nyHH(this.getVisibleVE(config));
  }/*

  private*/ function showOrHidePropFieldGroupParent(ve/*:ValueExpression*/)/*:void*/ {
    // do not show grey boxes if there is nothing to change in the viewtype combo
    var parent/*:PropertyFieldGroup*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.xtype, false),  com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup);
    if (!parent) {
      return;
    }
    var visible/*:Boolean*/ = ve.getValue();
    if (visible) {
      parent.show();
    } else {
      parent.hide();
    }
  }/*

  protected*/ function getAvailableViewTypesExpression(config/*:ViewtypePropertyField*/, excludedDocTypes/*:Array = null*/)/*:ValueExpression*/ {if(arguments.length<=1)excludedDocTypes=null;
    if (!this.availableViewTypesExpression$nyHH) {
      this.availableViewTypesExpression$nyHH = AS3.getBindable(config,"handler") ? AS3.getBindable(config,"handler").call(null, config, excludedDocTypes) : com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil.createAvailableViewtypesExpression(AS3.getBindable(config,"bindTo","DUMMY"), AS3.getBindable(config,"viewtypesFolderPaths"), AS3.getBindable(config,"paths"), excludedDocTypes);
    }
    return this.availableViewTypesExpression$nyHH;
  }/*

  protected*/ function computeVisible(config/*:ViewtypePropertyField*/)/*:Boolean*/ {
    if (!config.hideForSingleChoice) {
      // The field must not be hidden.
      return true;
    }

    var selectedViewType/*:Content*/ = this.getLinkValueExpression(config).getValue();
    if (selectedViewType) {
      // A link is set. The field by remain visible to allow a removal
      // of the potentially incorrect link.
      return true;
    }

    // Show the view types if there is more than the null view type.
    var availableViewTypes/*:Array*/ = this.getAvailableViewTypesExpression(config).getValue();
    if (availableViewTypes) {
      return availableViewTypes.length > 1;
    }
  }/*

  protected*/ function getVisibleVE(config/*:ViewtypePropertyField*/)/*:ValueExpression*/ {
    if (!this.visibleVE$nyHH) {
      this.visibleVE$nyHH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeVisible"), config);
    }

    return this.visibleVE$nyHH;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    if (this.hideForSingleChoice) {
      this.getVisibleVE(AS3.as(this.initialConfig,  com.coremedia.blueprint.base.components.viewtypes.ViewtypePropertyField)).removeChangeListener(AS3.bind(this,"showOrHidePropFieldGroupParent$nyHH"));
    }

    com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField",
      availableViewTypesExpression$nyHH: null,
      hideForSingleChoice: false,
      visibleVE$nyHH: null,
      constructor: ViewTypePropertyFieldBase$,
      super$nyHH: function() {
        com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField.prototype.constructor.apply(this, arguments);
      },
      showOrHidePropFieldGroupParent$nyHH: showOrHidePropFieldGroupParent,
      getAvailableViewTypesExpression: getAvailableViewTypesExpression,
      computeVisible: computeVisible,
      getVisibleVE: getVisibleVE,
      onDestroy: onDestroy,
      statics: {
        DEFAULT_PATHS: undefined,
        DISPLAY_FIELD_NAME: "titleUnencoded",
        TITLE_FIELD_NAME: "title",
        DESCRIPTION_FIELD_NAME: "description",
        THUMBNAIL_URI_FIELD_NAME: "thumbnailUri",
        THUMBNAIL_TOOLTIP_FIELD_NAME: "thumbnailTooltip",
        SITE_FIELD_NAME: "site",
        COMBO_BOX_TEMPLATE: undefined,
        DISPLAY_TEMPLATE: undefined,
        __initStatics__: function() {
          DEFAULT_PATHS$static_();
          COMBO_BOX_TEMPLATE$static_();
          DISPLAY_TEMPLATE$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.ComboBoxLinkPropertyFieldBase",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypePropertyField",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil"
      ]
    };
});
