Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBase", function(WorkAreaTabBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.ValueHolderAdapter;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.mixins.ILazyItemsContainerMixin;

import ext.panel.Panel;

[PublicApi]
public class WorkAreaTabBase extends Panel implements StateHolder, WorkAreaTabTypeAware, ILazyItemsContainerMixin {
  public static const TITLE_BUSY_INDICATOR:String = '&nbsp;\u2026&nbsp;';

  private var entity:Object;
  private var workAreaTabType:EntityWorkAreaTabType;
  private var stateValueExpression:ValueExpression;
  private var entityExpression:ValueExpression;

  public*/ function WorkAreaTabBase$(config/*:WorkAreaTab = null*/) {if(arguments.length<=0)config=null;
    this.entity$L$Gy = AS3.getBindable(config,"entity");
    this.super$L$Gy(config);
  }/*

  /**
   * Return the entity represented by this tab.
   * Changes to this property are dependency-tracked.
   * @return the entity represented by this tab
   * /
  public*/ function getEntity()/*:Object*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "entity");
    return this.entity$L$Gy;
  }/*

  /**
   * @private
   * /
  public*/ function setWorkAreaTabType(workAreaTabType/*:WorkAreaTabType*/)/*:void*/ {
    this.workAreaTabType$L$Gy = AS3.cast(com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType,workAreaTabType);
  }/*

  public*/ function getWorkAreaTabType()/*:EntityWorkAreaTabType*/ {
    return this.workAreaTabType$L$Gy;
  }/*

  protected*/ function getEntityExpression()/*:ValueExpression*/ {
    this.entityExpression$L$Gy = this.entityExpression$L$Gy || com.coremedia.ui.data.ValueExpressionFactory.create("entity", this);
    return this.entityExpression$L$Gy;
  }/*

  /**
   * Change the entity represented by this tab.
   * Optional: may throw error to indicate that setting the entity is not supported for this tab type.
   * @param entity the new entity that this tab shall adapt to
   * /
  public*/ function setEntity(entity/*:Object*/)/*:void*/ {
    if (this.entity$L$Gy !== entity) {
      this.entity$L$Gy = entity;
      this.fireEvent("entity");
    }
  }/*

  public*/ function getStateValueExpression()/*:ValueExpression*/ {
    if (!this.stateValueExpression$L$Gy) {
      this.stateValueExpression$L$Gy = com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(new com.coremedia.ui.data.ValueHolderAdapter(AS3.bind(
              this,"serializeState$L$Gy"),AS3.bind(
              this,"assumeState")
      ));
    }
    return this.stateValueExpression$L$Gy;
  }/*

  private*/ function serializeState()/*:Object*/ {
    var myTabType/*:EntityWorkAreaTabType*/ = this.workAreaTabType$L$Gy;
    return myTabType.createTabState(this.getEntity());
  }/*

  protected*/ function assumeState(tabState/*:Object*/)/*:Boolean*/ {
    var entity/*:Object*/ = this.workAreaTabType$L$Gy.extractEntity(tabState);
    if (entity !== null) {
      this.setEntity(entity);
      return true;
    }
    return false;
  }/*

  public*/ function calculateTitle()/*:String*/ {
    throw new AS3.Error("calculateTitle() must be implemented for the class " + this);
  }/*

  public*/ function calculateTooltip()/*:TabTooltipInfo*/ {
    //calculateTooltip needs to be implemented in sub classes.
    return null;
  }/*


  public*/ function calculateIcon()/*:String*/ {
    return undefined;
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
      mixins: [
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypeAware",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ],
      metadata: {"": ["PublicApi"]},
      entity$L$Gy: null,
      workAreaTabType$L$Gy: null,
      stateValueExpression$L$Gy: null,
      entityExpression$L$Gy: null,
      constructor: WorkAreaTabBase$,
      super$L$Gy: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getEntity: getEntity,
      setWorkAreaTabType: setWorkAreaTabType,
      getWorkAreaTabType: getWorkAreaTabType,
      getEntityExpression: getEntityExpression,
      setEntity: setEntity,
      getStateValueExpression: getStateValueExpression,
      serializeState$L$Gy: serializeState,
      assumeState: assumeState,
      calculateTitle: calculateTitle,
      calculateTooltip: calculateTooltip,
      calculateIcon: calculateIcon,
      statics: {TITLE_BUSY_INDICATOR: '&nbsp;\u2026&nbsp;'},
      requires: [
        "AS3.Error",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypeAware",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.ValueHolderAdapter",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType"]
    };
});
