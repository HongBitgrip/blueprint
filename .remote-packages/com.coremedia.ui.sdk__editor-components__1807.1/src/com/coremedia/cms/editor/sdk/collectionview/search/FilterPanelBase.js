Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.FilterPanelBase", function(FilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.ObjectUtils;

/**
 * The base class for FilterPanel implementing most of the interface methods
 * and preparing most of the UI. See the description of FilterPanel
 * if you want to implement a custom filter panel.
 *
 * @see FilterPanel
 * /
public class FilterPanelBase extends CollapsiblePanel implements SearchFilter, IValidationStateMixin {

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){FilterPanelBase.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-filter-panel"));}/*;
  public static const ELEMENT_HEADER:BEMElement =*/function ELEMENT_HEADER$static_(){FilterPanelBase.ELEMENT_HEADER=( FilterPanelBase.BLOCK.createElement("header"));}/*;
  public static const ELEMENT_BODY:BEMElement =*/function ELEMENT_BODY$static_(){FilterPanelBase.ELEMENT_BODY=( FilterPanelBase.BLOCK.createElement("body"));}/*;
  public static const ELEMENT_RESET:BEMElement =*/function ELEMENT_RESET$static_(){FilterPanelBase.ELEMENT_RESET=( FilterPanelBase.BLOCK.createElement("reset"));}/*;
  public static const MODIFIER_CUSTOMIZED:BEMModifier =*/function MODIFIER_CUSTOMIZED$static_(){FilterPanelBase.MODIFIER_CUSTOMIZED=( FilterPanelBase.BLOCK.createModifier("customized"));}/*;

  public static const GRID_200:Number = 12; // padding of parent container

  private var stateBean:Bean;
  private var validationStateVE:ValueExpression;
  private var modifierVE:ValueExpression;

  /**
   * Do not call directly. Rather, create a subclass of FilterPanel as described
   * in that class and instantiate that subclass.
   *
   * @param config the config object
   * /
  public*/ function FilterPanelBase$(config/*:FilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$F7x8(config);
    this.getStateBean().updateProperties(this.getDefaultState());
    this.initValidationStateMixin();
  }/*

  protected*/ function getValidationStateVE()/*:ValueExpression*/ {var this$=this;
    if (!this.validationStateVE$F7x8) {
      this.validationStateVE$F7x8 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:ValidationState*/ {
        return this$.isInDefaultState() ? null : com.coremedia.ui.mixins.ValidationState.SUCCESS;
      });
    }
    return this.validationStateVE$F7x8;
  }/*

  protected*/ function getModifierVE()/*:ValueExpression*/ {var this$=this;
    if (!this.modifierVE$F7x8) {
      this.modifierVE$F7x8 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (this$.isInDefaultState()) {
          return [];
        } else {
          return [FilterPanelBase.MODIFIER_CUSTOMIZED.getIdentifier()];
        }
      });
    }
    return this.modifierVE$F7x8;
  }/*

  protected*/ function resetFilter()/*:void*/ {
    this.getStateBean().updateProperties(this.getDefaultState());
  }/*

  /**
   * Return whether this filter is in its default state. The standard implementation
   * compares the current state with the state returned by getDefaultState().
   *
   * @return whether this filter is in its default state.
   *
   * @see #getDefaultState
   * /
  protected*/ function isInDefaultState()/*:Boolean*/ {
    return com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(this.getStateBean().toObject(), this.getDefaultState());
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getStateBean()/*:Bean*/ {
    if (!this.stateBean$F7x8) {
      this.stateBean$F7x8 = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.stateBean$F7x8;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function buildQuery()/*:String*/ {
    throw new AS3.Error("buildQuery() must be overridden in subclasses");
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getFilterId()/*:String*/ {
    return this.getItemId();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDefaultState()/*:Object*/ {
    throw new AS3.Error("getDefaultState() must be overridden in subclasses");
  }/*

  /**
   * Transform a state object before it is applied to the model bean.
   * This allows to detect states that have been saved as a search folder
   * using earlier versions of this search filter, rewriting them as needed.
   * An implementation may return the argument object, possibly modified,
   * but it may also return a new object.
   * <p>This implementation simply returns that argument object, unchanged.</p>
   *
   * @param state the state to rewrite
   * @return the rewritten state
   * /
  public*/ function transformState(state/*:Object*/)/*:Object*/ {
    return state;
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      mixins: [
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      stateBean$F7x8: null,
      validationStateVE$F7x8: null,
      modifierVE$F7x8: null,
      constructor: FilterPanelBase$,
      super$F7x8: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      getValidationStateVE: getValidationStateVE,
      getModifierVE: getModifierVE,
      resetFilter: resetFilter,
      isInDefaultState: isInDefaultState,
      getStateBean: getStateBean,
      buildQuery: buildQuery,
      getFilterId: getFilterId,
      getDefaultState: getDefaultState,
      transformState: transformState,
      statics: {
        BLOCK: undefined,
        ELEMENT_HEADER: undefined,
        ELEMENT_BODY: undefined,
        ELEMENT_RESET: undefined,
        MODIFIER_CUSTOMIZED: undefined,
        GRID_200: 12,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_HEADER$static_();
          ELEMENT_BODY$static_();
          ELEMENT_RESET$static_();
          MODIFIER_CUSTOMIZED$static_();
        }
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
