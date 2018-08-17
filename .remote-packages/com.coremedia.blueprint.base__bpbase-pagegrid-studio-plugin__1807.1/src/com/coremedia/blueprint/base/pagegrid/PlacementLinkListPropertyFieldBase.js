Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementLinkListPropertyFieldBase", function(PlacementLinkListPropertyFieldBase) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.ui.data.TreeRelation;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;

public class PlacementLinkListPropertyFieldBase extends Container {

  public static const DEFAULT_CONTAINER:String = "defaultContainer";

  public static const FALLBACK_CONTAINER:String = "fallbackContainer";

  private var storingContentValueExpression:ValueExpression;
  private var structContentLinkListWrapper:ILinkListWrapper;
  private var fallbackStructContentLinkListWrapper:ILinkListWrapper;

  /**
   * Value expression to the Content
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
   * but to override this or provide an initial value for link properties in Structs that are created by this
   * property field, you may specify a custom link type.
   * /
  [Bindable]
  public var linkType:String;

  /**
   * The name of the property edited by this property field.
   * /
  [Bindable]
  public var propertyName:String;

  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  /**
   * The name of the property storing the page grid struct
   * /
  [Bindable]
  public var structPropertyName:String;

  /**
   * the property name of the placement struct.
   * /
  public var fallbackPropertyName:String;

  /**
   * The page tree relation to use for inheritance of section from parent pages
   * and locking of child pages.
   * /
  [Bindable]
  public var pageTreeRelation:TreeRelation;

  /**
   * The placement section
   * /
  [Bindable]
  public var section:Content;

  public*/ function PlacementLinkListPropertyFieldBase$(config/*:PlacementLinkListPropertyFieldBase = null*/) {if(arguments.length<=0)config=null;
    this.super$quL6(config);
  }/*

  internal*/ function getActiveItemValueExpression(config/*:PlacementLinkListPropertyFieldBase*/, containerId/*:String*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      if (!config.fallbackPropertyName) {
        return PlacementLinkListPropertyFieldBase.DEFAULT_CONTAINER === containerId;
      }
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(AS3.as(AS3.getBindable(config,"bindTo").getValue(),  com.coremedia.cap.content.Content));
      if (!(site && site.getSiteRootDocument())) {
      } else {
        var storingContent/*:Content*/ = this$.getStoringContentValueExpression$quL6(config).getValue();
        if (storingContent === site.getSiteRootDocument()) {
          return PlacementLinkListPropertyFieldBase.FALLBACK_CONTAINER === containerId;
        }
      }
      return PlacementLinkListPropertyFieldBase.DEFAULT_CONTAINER === containerId;
    });
  }/*

  internal*/ function getStructContentLinkListWrapper(config/*:PlacementLinkListPropertyFieldBase*/)/*:ILinkListWrapper*/ {
    if (!this.structContentLinkListWrapper$quL6) {
      this.structContentLinkListWrapper$quL6 = com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper.createStructContentLinkListWrapper(
              AS3.getBindable(config,"bindTo"),
              AS3.getBindable(config,"forceReadOnlyValueExpression"),
              AS3.getBindable(config,"linkType"),
              AS3.getBindable(config,"propertyName"),
              com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY
      );
    }
    return this.structContentLinkListWrapper$quL6;
  }/*

  internal*/ function getFallbackStructContentLinkListWrapper(config/*:PlacementLinkListPropertyFieldBase*/)/*:ILinkListWrapper*/ {
    if (!this.fallbackStructContentLinkListWrapper$quL6) {
      this.fallbackStructContentLinkListWrapper$quL6 = com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper.createStructContentLinkListWrapper(
              AS3.getBindable(config,"bindTo"),
              AS3.getBindable(config,"forceReadOnlyValueExpression"),
              AS3.getBindable(config,"linkType"),
              config.fallbackPropertyName,
              com.coremedia.blueprint.base.pagegrid.PageGridConstants.PLACEMENT_EXTENDED_ITEMS_PROPERTY
      );
    }
    return this.fallbackStructContentLinkListWrapper$quL6;
  }/*

  private*/ function getStoringContentValueExpression(config/*:PlacementLinkListPropertyFieldBase*/)/*:ValueExpression*/ {
    if (!this.storingContentValueExpression$quL6) {
      this.storingContentValueExpression$quL6 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(com.coremedia.blueprint.base.pagegrid.PageGridUtil.computePageStoringPlacement,
              AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"pageTreeRelation"), AS3.getBindable(config,"structPropertyName"), AS3.getBindable(config,"section"));
    }
    return this.storingContentValueExpression$quL6;
  }/*

  internal*/ function isFallbackConfigured()/*:Boolean*/ {
    return this.initialConfig.fallbackPropertyName;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      storingContentValueExpression$quL6: null,
      structContentLinkListWrapper$quL6: null,
      fallbackStructContentLinkListWrapper$quL6: null,
      fallbackPropertyName: null,
      constructor: PlacementLinkListPropertyFieldBase$,
      super$quL6: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getActiveItemValueExpression: getActiveItemValueExpression,
      getStructContentLinkListWrapper: getStructContentLinkListWrapper,
      getFallbackStructContentLinkListWrapper: getFallbackStructContentLinkListWrapper,
      getStoringContentValueExpression$quL6: getStoringContentValueExpression,
      isFallbackConfigured: isFallbackConfigured,
      config: {
        bindTo: null,
        linkType: null,
        propertyName: null,
        forceReadOnlyValueExpression: null,
        structPropertyName: null,
        pageTreeRelation: null,
        section: null
      },
      statics: {
        DEFAULT_CONTAINER: "defaultContainer",
        FALLBACK_CONTAINER: "fallbackContainer"
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.AnnotatedLinkListHelper",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridConstants",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil"
      ]
    };
});
