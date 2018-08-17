Ext.define("com.coremedia.cms.editor.sdk.premular.CollapsiblePanelBase", function(CollapsiblePanelBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.ILazyItemsContainerMixin;
import com.coremedia.ui.skins.PanelSkin;

import ext.Component;
import ext.Ext;
import ext.panel.Panel;

/**
 * Common collapsible panel
 * /
[PublicApi]
public class CollapsiblePanelBase extends Panel implements ILazyItemsContainerMixin {
  private static const*/var CLS_COLLAPSIBLE_PANEL$static/*:String*/;/* =*/function CLS_COLLAPSIBLE_PANEL$static_(){CLS_COLLAPSIBLE_PANEL$static=( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());};/*
  private static const*/var CLS_COLLAPSIBLE_NESTED_PANEL$static/*:String*/;/* =*/function CLS_COLLAPSIBLE_NESTED_PANEL$static_(){CLS_COLLAPSIBLE_NESTED_PANEL$static=( com.coremedia.ui.skins.PanelSkin.CARD_NESTED.getSkin());};/*
  private static const*/var CLS_MULTILINE_TITLE$static/*:String*/ = "cm-multiline-title";/*

  public*/ function CollapsiblePanelBase$(config/*:CollapsiblePanel = null*/) {if(arguments.length<=0)config=null;
    this.ariaCheck(config);
    this.super$dSij(config);

    if (AS3.getBindable(config,"multilineTitle")) {
      this.addCls(CLS_MULTILINE_TITLE$static);
    }

    if (!AS3.getBindable(config,"collapsed","DUMMY")
            || AS3.getBindable(config,"collapsed","DUMMY") && !AS3.getBindable(this,"collapsed","DUMMY")) { // In the second case, the StateManager sets collapsed to 'false' during super() call
      this.fireEvent("beforeexpand", this);
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);

    if (this.collapsible && this.titleCollapse) {
      this.applyTitleCollapseStyle();
    }

    // apply dom listeners for handling the special click events for panel and title
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isSubCollapsible$dSij")).loadValue(AS3.bind(this,"applySubCollapsible$dSij"));
  }/*

  protected*/ function applyTitleCollapseStyle()/*:void*/ {
    this.header && this.header.setStyle("cursor", "pointer");
  }/*

  /**
   * Calculates if this collapsible is inside another collapsible.
   * /
  private*/ function isSubCollapsible()/*:Boolean*/ {
    var parent/*:Component*/ = this.findParentByType(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.xtype, false);
    return parent !== undefined && parent !== null;
  }/*

  /**
   * Checks the aria config for collapsible panels
   * @param config
   * /
  protected*/ function ariaCheck(config/*:CollapsiblePanel*/)/*:void*/ {
    if(!config.ariaLabel && AS3.getBindable(config,"title","DUMMY")) {
      config.ariaLabel = AS3.getBindable(config,"title","DUMMY");
    }

    if(config.ariaLabel) {
      return;
    }

    if(config.header === false) {
      return;
    }

    Ext['ariaWarn']('No aria-label set for collapsible panel with itemid ' + AS3.getBindable(config,"itemId","DUMMY"));
  }/*

  /**
   * Applies additional styles depending if this is a nested collapsible or not.
   * /
  private*/ function applySubCollapsible(isSubCollapsible/*:Boolean*/)/*:void*/ {
    if (this.initialConfig.ui === CLS_COLLAPSIBLE_PANEL$static) {
      if (isSubCollapsible) {
        this.setUI(CLS_COLLAPSIBLE_NESTED_PANEL$static);
      }
      else {
        this.setUI(CLS_COLLAPSIBLE_PANEL$static);
      }
    }
  }/*

  /** @private * /
  public native function itemsAreLazy():Boolean;

  /** @private * /
  public native function get itemsLazyUntilEvent():String;

  /** @private * /
  public native function set itemsLazyUntilEvent(eventName:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.ui.mixins.LazyItemsContainerMixin"],
      metadata: {"": ["PublicApi"]},
      constructor: CollapsiblePanelBase$,
      super$dSij: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      applyTitleCollapseStyle: applyTitleCollapseStyle,
      isSubCollapsible$dSij: isSubCollapsible,
      ariaCheck: ariaCheck,
      applySubCollapsible$dSij: applySubCollapsible,
      statics: {
        CLS_COLLAPSIBLE_PANEL: undefined,
        CLS_COLLAPSIBLE_NESTED_PANEL: undefined,
        __initStatics__: function() {
          CLS_COLLAPSIBLE_PANEL$static_();
          CLS_COLLAPSIBLE_NESTED_PANEL$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.skins.PanelSkin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.CollapsiblePanel"]
    };
});
