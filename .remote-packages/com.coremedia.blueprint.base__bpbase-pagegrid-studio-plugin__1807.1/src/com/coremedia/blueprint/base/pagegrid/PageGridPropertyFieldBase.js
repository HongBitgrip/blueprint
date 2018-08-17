Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridPropertyFieldBase", function(PageGridPropertyFieldBase) {/*package com.coremedia.blueprint.base.pagegrid {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;

[PublicApi]
public class PageGridPropertyFieldBase extends Container {

  /**
   * The link type of links in the PlacementField. Defaults to "CMTeasable".
   * /
  [Bindable]
  public var placementLinkType:String = "CMTeasable";

  public*/ function PageGridPropertyFieldBase$(config/*:PageGridPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$s8iK(config);
  }/*

  internal*/ function createPlacementsConfigListValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computePlacementsConfigList$s8iK"));
  }/*

  private*/ function computePlacementsConfigList()/*:Array*/ {
    var config/*:PageGridPropertyField*/ = AS3.cast(com.coremedia.blueprint.base.pagegrid.PageGridPropertyField,this.initialConfig);
    var content/*:Content*/ = AS3.getBindable(config,"bindTo").getValue();
    if (!content) {
      return undefined;
    }
    var propertyName/*:String*/ = AS3.getBindable(config,"propertyName");

    var layout/*:Content*/ = com.coremedia.blueprint.base.pagegrid.PageGridUtil.getLayout(content, propertyName);
    if (!layout) {
      return undefined;
    }

    var sections/*:Array*/ = com.coremedia.blueprint.base.pagegrid.PageGridUtil.getSections(layout);
    if (!sections) {
      return undefined;
    }

    var duplicates/*:Object*/ = {};
    var configs/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ sections.length;++$1) {var section/*:Content*/ =sections[$1];
      var sectionId/*:String*/ = section.getId();
      if (!duplicates[sectionId]) {
        duplicates[sectionId] = true;
        var placementFieldConfig/*:PlacementField*/ = this.getPlacementFieldConfig$s8iK(section);
        configs.push(placementFieldConfig);
      }
    }

    return configs;
  }/*

  /*
   * Walk up the navigation tree until a placement layout setting is found and return it.
   * Returns undefined if no layout setting can be found in the hierarchy.
   * /
  private*/ function getPlacementFieldConfig(section/*:Content*/)/*:PlacementField*/ {
    var config/*:PageGridPropertyField*/ = AS3.cast(com.coremedia.blueprint.base.pagegrid.PageGridPropertyField,this.initialConfig);
    var result/*:PlacementField*/ = AS3.cast(com.coremedia.blueprint.base.pagegrid.PlacementField,{});
    AS3.setBindable(result,"section" , section);
    result.itemId = section.getUriPath().replace(/\//g, "-");
    AS3.setBindable(result,"propertyName" , com.coremedia.blueprint.base.pagegrid.PageGridUtil.getPlacementPropertyPath(AS3.getBindable(config,"propertyName"), section));
    var placementPropertyName/*:String*/ = AS3.getBindable(config,"propertyName").split(".")[0];
    // section is guaranteed to be loaded by PageGridUtil.getSections():
    var sectionName/*:String*/ = section.getName();
    AS3.setBindable(result,"propertyFieldName" , placementPropertyName + "-" + sectionName);
    AS3.setBindable(result,"collapsed" , true);
    if (AS3.getBindable(config,"fallbackPropertyName")) {
      AS3.setBindable(result,"fallbackPropertyName" , com.coremedia.blueprint.base.pagegrid.PageGridUtil.getPlacementPropertyPath(AS3.getBindable(config,"fallbackPropertyName"), section));
      var fallbackPlacementPropertyName/*:String*/ = AS3.getBindable(config,"fallbackPropertyName").split(".")[0];
      AS3.setBindable(result,"fallbackPropertyFieldName" , fallbackPlacementPropertyName + "-" + sectionName);
    }
    AS3.setBindable(result,"linkType" , AS3.getBindable(this,"placementLinkType"));
    return result;
  }/*

  }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      constructor: PageGridPropertyFieldBase$,
      super$s8iK: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      createPlacementsConfigListValueExpression: createPlacementsConfigListValueExpression,
      computePlacementsConfigList$s8iK: computePlacementsConfigList,
      getPlacementFieldConfig$s8iK: getPlacementFieldConfig,
      config: {placementLinkType: "CMTeasable"},
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.blueprint.base.pagegrid.PageGridPropertyField",
        "com.coremedia.blueprint.base.pagegrid.PageGridUtil",
        "com.coremedia.blueprint.base.pagegrid.PlacementField"
      ]
    };
});
