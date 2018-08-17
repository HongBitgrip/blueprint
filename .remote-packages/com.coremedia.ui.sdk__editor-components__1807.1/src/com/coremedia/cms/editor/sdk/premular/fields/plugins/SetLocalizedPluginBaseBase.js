Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase", function(SetLocalizedPluginBaseBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.plugins.BindPlugin;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;

/**
 * A base class for plugins that configure property fields dependent on the
 * displayed content's type and the configured localization properties.
 * /
[PublicApi]
public class SetLocalizedPluginBaseBase extends BindPlugin {

  /**
   * A base class for plugins that configure property fields dependent on the
   * displayed content's type and the configured localization properties.
   * You must pass at least a value expression evaluating to the content bean in the configuration parameter
   * <code>bindTo</code> and the displayed property in the configuration parameter
   * <code>propertyName</code>.
   *
   * @param config the configuration object
   * /
  public*/ function SetLocalizedPluginBaseBase$(config/*:SetLocalizedPluginBase = null*/) {if(arguments.length<=0)config=null;
    var superConfig/*:BindPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPlugin,Ext.apply({}, config));
    superConfig.bindTo = config.bindTo.extendBy('type.name');
    superConfig.boundValueChanged = function (component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
      var value/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedString(valueExpression.getValue(), AS3.getBindable(config,"propertyName"), AS3.getBindable(config,"keySuffix"), AS3.getBindable(config,"defaultString"));

      //todo: invoke setComponentProperty of the super class instead. Currently the internal functions cannot be overridden
      //because the super class is not in the same package
      SetLocalizedPluginBaseBase.setProperty(component, AS3.getBindable(config,"labelProperty"), value);
    };

    this.super$yftl(superConfig);
  }/*

  //todo: the following 3 functions are implemented in BindPlugin and could be removed
  // if the classes are in the same package
  internal static*/ function setProperty$static(component/*:Component*/, componentProperty/*:String*/, value/*:**/)/*:void*/ {
    if (component.rendered) {
      SetLocalizedPluginBaseBase.setPropertyUsingSetter(component, componentProperty, value);
    } else {
      //maybe it is too late to set the value in the config in "beforerender". so lets do it now
      SetLocalizedPluginBaseBase.setPropertyDirectly(component, componentProperty, value);
      //STUDIO-71: wait till the component is being rendered. Before that setter method will fail in some cases.
      component.addListener('beforerender', function()/*:void*/ {
        try {
          SetLocalizedPluginBaseBase.setPropertyUsingSetter(component, componentProperty, value);
        } catch (e/*:**/) {
          AS3.trace(component.toString() + " does not accept the value '" + value + "' for the property '" + componentProperty +
                  "' using a setter. The value is now set to the plain javascript property.");
          SetLocalizedPluginBaseBase.setPropertyDirectly(component, componentProperty, value);
        }
      }, null, { single: true });
    }
  }/*

  internal static*/ function setPropertyDirectly$static(component/*:Component*/, componentProperty/*:String*/, value/*:**/)/*:void*/ {
    //todo guess this initial data is never garbage collected?
    component.initialConfig[componentProperty] = value;
    component[componentProperty] = value;
  }/*

  internal static*/ function setPropertyUsingSetter$static(component/*:Component*/, componentProperty/*:String*/, value/*:String*/)/*:void*/ {
    var componentValue/*:**/ = com.coremedia.ui.util.ObjectUtils.getProperty(component, componentProperty);
    if (componentValue !== value) {
      com.coremedia.ui.util.ObjectUtils.setProperty(component, componentProperty, value);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: SetLocalizedPluginBaseBase$,
      super$yftl: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        setProperty: setProperty$static,
        setPropertyDirectly: setPropertyDirectly$static,
        setPropertyUsingSetter: setPropertyUsingSetter$static
      },
      requires: [
        "AS3.trace",
        "Ext",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
