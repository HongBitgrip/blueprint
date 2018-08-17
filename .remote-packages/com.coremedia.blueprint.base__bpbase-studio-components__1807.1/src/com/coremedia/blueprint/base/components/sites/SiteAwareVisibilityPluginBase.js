Ext.define("com.coremedia.blueprint.base.components.sites.SiteAwareVisibilityPluginBase", function(SiteAwareVisibilityPluginBase) {/*package com.coremedia.blueprint.base.components.sites {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.plugins.BindVisibilityPlugin;

/**
 * Baseclass for the SiteAwareStudioFeatureVisibilityPlugin.
 * /
public class SiteAwareVisibilityPluginBase extends BindVisibilityPlugin {

  /**
   * The content to determine the site for. If not given, the user's preferred site is used instead.
   * /
  [Bindable]
  public var contentValueExpression:ValueExpression;

  internal var feature:String;
  internal var ifUndefined:Boolean;

  public*/ function SiteAwareVisibilityPluginBase$(config/*:SiteAwareVisibilityPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$FwJV(config);
    this.feature = AS3.getBindable(config,"feature");
    AS3.setBindable(this,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    this.ifUndefined = AS3.getBindable(config,"ifUndefined");
  }/*

  /**
   * provides the ValueExpression which calculates the visibility of the component.
   * @return A ValueExpression which evaluates to a Boolean value.
   * /
  internal*/ function getCalculateVisibilityValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateIsVisible"));
  }/*

  /**
   * Calculates the visibility of the component the plugin is bind to, based on the features configuration in the the
   * site, where the content in contentValueExpression belongs to.
   * @return true, if the component should be shown, else false
   * /
  internal*/ function calculateIsVisible()/*:Boolean*/ {
    var featureEnabledVE/*:ValueExpression*/ = com.coremedia.blueprint.base.components.sites.SiteAwareFeatureUtil.createFeatureEnabledVE(AS3.getBindable(this,"contentValueExpression"), this.feature);

    if (featureEnabledVE.getValue() === undefined) {
      return this.ifUndefined || false;
    }

    return featureEnabledVE.getValue();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindVisibilityPlugin",
      feature: null,
      ifUndefined: false,
      constructor: SiteAwareVisibilityPluginBase$,
      super$FwJV: function() {
        com.coremedia.ui.plugins.BindVisibilityPlugin.prototype.constructor.apply(this, arguments);
      },
      getCalculateVisibilityValueExpression: getCalculateVisibilityValueExpression,
      calculateIsVisible: calculateIsVisible,
      config: {contentValueExpression: null},
      requires: [
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindVisibilityPlugin"
      ],
      uses: ["com.coremedia.blueprint.base.components.sites.SiteAwareFeatureUtil"]
    };
});
