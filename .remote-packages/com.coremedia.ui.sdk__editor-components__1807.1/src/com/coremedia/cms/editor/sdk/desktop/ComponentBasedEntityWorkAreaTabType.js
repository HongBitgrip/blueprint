Ext.define("com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType", function(ComponentBasedEntityWorkAreaTabType) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cms.editor.sdk.editorContext;

import ext.panel.Panel;

/**
 * An implementation of <code>WorkAreaTabType</code>, which creates a new tab type based on a tab
 * component template (config object) and an entity this tab represents.
 * /
public class ComponentBasedEntityWorkAreaTabType extends ComponentBasedWorkAreaTabType implements EntityWorkAreaTabType {

  [Bindable]
  public var entityProperty:String;
  [Bindable]
  public var entityType:Class;
  [Bindable]
  public var ddGroup:String;
  private var activePanel:Panel;

  public*/ function ComponentBasedEntityWorkAreaTabType$(config/*:ComponentBasedEntityWorkAreaTabType = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"entityProperty" , AS3.getBindable(config,"entityProperty") || "entity");
    AS3.setBindable(this,"entityType" , AS3.getBindable(config,"entityType"));
    AS3.setBindable(this,"ddGroup" , AS3.getBindable(config,"ddGroup"));
    if (config.createTabState) {
      this["createTabState"] =AS3.bind( config,"createTabState");
    }
    if (config.extractEntity) {
      this["extractEntity"] =AS3.bind( config,"extractEntity");
    }
    this.super$WTqi(config);
  }/*

  public*/ function createTabState(entity/*:Object*/)/*:Object*/ {
    var transformedEntity/*:Object*/ = this.transformEntity(entity);
    if (!transformedEntity) {
      return null;
    }
    var state/*:Object*/ = {};
    state[AS3.getBindable(this,"entityProperty")] = transformedEntity;
    return state;
  }/*

  public*/ function extractEntity(tabState/*:Object*/)/*:Object*/ {
    if (tabState) {
      var entity/*:Object*/ = tabState[AS3.getBindable(this,"entityProperty")];
      return this.transformEntity(entity);
    } else {
      return null;
    }
  }/*

  protected*/ function transformEntity(entity/*:Object*/)/*:Object*/ {
    return this.isValidEntity(entity) === false ? null : entity;
  }/*

  protected*/ function isValidEntity(entity/*:Object*/)/*:Boolean*/ {
    return entity === undefined ? undefined : (AS3.is(entity,  AS3.getBindable(this,"entityType")));
  }/*

  override public*/ function createTab(state/*:Object*/, callback/*:Function*/)/*:void*/ {var this$=this;
    if (!this.extractEntity(state)) {
      callback(null, this, state);
      return;
    }

    com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType.prototype.createTab.call(this,state, function(tab/*:Panel*/, tabType/*:WorkAreaTabType*/, state/*:Object*/)/*:void*/ {
      if (tab) {
        tab.addListener('afterrender',AS3.bind( this$,"tabActivated$WTqi"));
        tab.addListener('activate',AS3.bind( this$,"tabActivated$WTqi"));
        tab.addListener(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT,AS3.bind( this$,"tabActivated$WTqi"));
        tab.addListener('deactivate',AS3.bind( this$,"tabDeactivated$WTqi"));
        tab.addListener('remove',AS3.bind( this$,"tabDeactivated$WTqi"));
        tab.addListener('destroy',AS3.bind( this$,"tabDestroyed$WTqi"));
      }

      callback(tab, tabType, state);
    });
  }/*

  private*/ function tabActivated(panel/*:Panel*/)/*:void*/ {
    this.activePanel$WTqi = panel;

    if (AS3.is(panel,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
      com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION.setValue(AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTab,panel).getEntity());
    }
  }/*

  private*/ function tabDeactivated(panel/*:Panel*/)/*:void*/ {
    if (AS3.is(panel,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)) {
      var entity/*:Object*/ = (AS3.as(panel,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getEntity();
      if (entity === com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION.getValue()) {
        com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION.setValue(null);
      }
    }

    if (panel === this.activePanel$WTqi) {
      this.activePanel$WTqi = null;
    }
  }/*

  private*/ function tabDestroyed(panel/*:Panel*/)/*:void*/ {
    panel.removeListener('afterrender',AS3.bind( this,"tabActivated$WTqi"));
    panel.removeListener('activate',AS3.bind( this,"tabActivated$WTqi"));
    panel.removeListener(com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT,AS3.bind( this,"tabActivated$WTqi"));
    panel.removeListener('deactivate',AS3.bind( this,"tabDeactivated$WTqi"));
    panel.removeListener('remove',AS3.bind( this,"tabDeactivated$WTqi"));
    panel.removeListener('destroy',AS3.bind( this,"tabDestroyed$WTqi"));
    // Only trigger deactivate actions if the closed tab was the active tab: STUDIO-622
    if (panel === this.activePanel$WTqi) {
      this.tabDeactivated$WTqi(panel);
    }
  }/*

  public*/ function getDragDropGroup()/*:String*/ {
    return AS3.getBindable(this,"ddGroup");
  }/*

  public static*/ function canBeOpenedInTab$static(entity/*:Object*/)/*:Boolean*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaBase,com.coremedia.cms.editor.sdk.editorContext.getWorkArea()).getEntityTabTypes().some(
            function (entityTabType/*:EntityWorkAreaTabType*/)/*:Boolean*/ {
              return ! !entityTabType.createTabState(entity);
            }
    );
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType",
      mixins: ["com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType"],
      activePanel$WTqi: null,
      constructor: ComponentBasedEntityWorkAreaTabType$,
      super$WTqi: function() {
        com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType.prototype.constructor.apply(this, arguments);
      },
      createTabState: createTabState,
      extractEntity: extractEntity,
      transformEntity: transformEntity,
      isValidEntity: isValidEntity,
      createTab: createTab,
      tabActivated$WTqi: tabActivated,
      tabDeactivated$WTqi: tabDeactivated,
      tabDestroyed$WTqi: tabDestroyed,
      getDragDropGroup: getDragDropGroup,
      config: {
        entityProperty: null,
        entityType: null,
        ddGroup: null
      },
      statics: {canBeOpenedInTab: canBeOpenedInTab$static},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
