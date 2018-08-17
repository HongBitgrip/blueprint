Ext.define("com.coremedia.cms.editor.sdk.actions.AbstractModifyLinksActionBase", function(AbstractModifyLinksActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ArrayUtils;

[PublicApi]
public class AbstractModifyLinksActionBase extends ContentUpdateAction {
  private var propertyName:String;
  private var maxCardinality:int;
  private var linkType:String;
  private var propertyValueExpression:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function AbstractModifyLinksActionBase$(config/*:AbstractModifyLinksAction = null*/) {if(arguments.length<=0)config=null;
    this.super$N8iP(config);
    this.propertyName$N8iP = AS3.getBindable(config,"propertyName");
    this.maxCardinality$N8iP = AS3.getBindable(config,"maxCardinality");
    this.linkType$N8iP = AS3.getBindable(config,"linkType");
    this.propertyValueExpression$N8iP = com.coremedia.cms.editor.sdk.util.LinkListUtil.createLinkValueExpression(this.getValueExpression(), this.propertyName$N8iP, this.linkType$N8iP, this.maxCardinality$N8iP === 1);
  }/*

  protected*/ function getPropertyName()/*:String*/ {
    return this.propertyName$N8iP;
  }/*

  protected*/ function getMaxCardinality()/*:int*/ {
    return this.maxCardinality$N8iP;
  }/*

  protected*/ function getLinkType()/*:ContentType*/ {
    return com.coremedia.cms.editor.sdk.util.LinkListUtil.getTargetContentType(this.getValueExpression(), this.propertyName$N8iP, this.linkType$N8iP);
  }/*

  protected*/ function getLinks()/*:Array*/ {
    var value/*:**/ = this.propertyValueExpression$N8iP.getValue();
    return value === undefined ? undefined : com.coremedia.ui.util.ArrayUtils.asArray(value);
  }/*

  protected*/ function setLinks(links/*:Array*/)/*:void*/ {
    var newValue/*:**/ = com.coremedia.cms.editor.sdk.util.LinkListUtil.isAtomic(this.getValueExpression(), this.propertyName$N8iP, this.maxCardinality$N8iP)
            ? links[0] || null : links;
    this.propertyValueExpression$N8iP.setValue(newValue);
  }/*

  protected*/ function getPropertyValueExpression()/*:ValueExpression*/ {
    return this.propertyValueExpression$N8iP;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction",
      metadata: {"": ["PublicApi"]},
      propertyName$N8iP: null,
      maxCardinality$N8iP: 0,
      linkType$N8iP: null,
      propertyValueExpression$N8iP: null,
      constructor: AbstractModifyLinksActionBase$,
      super$N8iP: function() {
        com.coremedia.cms.editor.sdk.actions.ContentUpdateAction.prototype.constructor.apply(this, arguments);
      },
      getPropertyName: getPropertyName,
      getMaxCardinality: getMaxCardinality,
      getLinkType: getLinkType,
      getLinks: getLinks,
      setLinks: setLinks,
      getPropertyValueExpression: getPropertyValueExpression,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.ContentUpdateAction",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.LinkListUtil"]
    };
});
