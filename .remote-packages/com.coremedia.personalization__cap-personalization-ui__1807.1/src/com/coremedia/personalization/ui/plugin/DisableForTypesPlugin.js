Ext.define("com.coremedia.personalization.ui.plugin.DisableForTypesPlugin", function(DisableForTypesPlugin) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;

/**
 * Plugin that disables a PersonaSelector if the content shown in the
 * respective Studio tab is among a set of preconfigured types.
 * /
public class DisableForTypesPlugin implements Plugin {
  // array containing all content types for which profile selection is
  // to be disabled
  private var disabledTypes:Array =*/function disabledTypes_(){this.disabledTypes$$WFA=( []);}/*;

  /**
   * @cfg {Array} types array of content type names for which profile selection is to be disabled
   * /
  public*/ function DisableForTypesPlugin$(config/*:Disablefortypes = null*/) {disabledTypes_.call(this);if(arguments.length<=0)config=null;
    this.disabledTypes$$WFA = com.coremedia.ui.util.ArrayUtils.asArray(config['types']);
  }/*

  private*/ function isComponentDisabledForType(type/*:ContentType*/)/*:Boolean*/ {
    for (var i/*:Number*/ = 0; i < this.disabledTypes$$WFA.length; i++) {/*
      const*/var disType/*:ContentType*/ = this.disabledTypes$$WFA[i];
      if (type.isSubtypeOf(disType)) {
        return true;
      }
    }
    return false;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    // figure out whether the type of the content shown in the associated premular is
    // among the types for which the selector should be disabled
    //
    // This implementation assumes that a PersonaSelector is only rendered
    // when an "active content" exists!
    var valueExpression/*:ValueExpression*/ = com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.extendBy('type');
    var handler/*:Function*/ = function()/*:void*/ {
      valueExpression.loadValue(function(value/*:**/)/*:void*/{/*
        const*/var documentType/*:ContentType*/ =AS3.as( value,  com.coremedia.cap.content.ContentType);
        component.setDisabled(this$.isComponentDisabledForType$$WFA(documentType));
      });
    };
    valueExpression.addChangeListener(handler);
    handler();
    component.addListener('beforedestroy',function(){valueExpression.removeChangeListener(handler);});
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      constructor: DisableForTypesPlugin$,
      isComponentDisabledForType$$WFA: isComponentDisabledForType,
      init: init,
      requires: [
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ]
    };
});
