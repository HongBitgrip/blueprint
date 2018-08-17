Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopupBase", function(PersonaPopupBase) {/*package com.coremedia.personalization.ui.persona.popup {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.personalization.ui.persona.selector.PersonaModel;

import ext.grid.GridPanel;

public class PersonaPopupBase extends StudioDialog {

  private var personaModel:PersonaModel;
  protected static const GRID_ITEM_ID:String = "grid";

  public*/ function PersonaPopupBase$(config/*:PersonaPopup = null*/) {if(arguments.length<=0)config=null;
    this.super$5gbF(config);

    this.personaModel$5gbF = AS3.getBindable(config,"personaModel");
    this.updateGridStoreValueExpression$5gbF();

    this.personaModel$5gbF.getPersonaProfileBean().addValueChangeListener(AS3.bind(this,"updateGridStoreValueExpression$5gbF"));
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    this.personaModel$5gbF.getPersonaProfileBean().removeValueChangeListener(AS3.bind(this,"updateGridStoreValueExpression$5gbF"));
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
  }/*

  internal*/ function getMyId(config/*:PersonaPopup*/)/*:String*/ {
    return com.coremedia.personalization.ui.persona.popup.PersonaPopupManager.getEntityId(AS3.getBindable(config,"entityExpression").getValue());
  }/*
  /**
   * Find the grid by itemId and update its store by loading the personaModel.getProfileSettingsAsGroupArray()
   * /
  private*/ function updateGridStoreValueExpression()/*:void*/ {
    var grid/*:GridPanel*/ =AS3.as( this.queryById(PersonaPopupBase.GRID_ITEM_ID),  Ext.grid.Panel);
    var data/*:Array*/ = this.personaModel$5gbF.getProfileSettingsAsGroupArray() ? this.personaModel$5gbF.getProfileSettingsAsGroupArray() : null;

    if (data && grid) {
      grid.getStore().loadData(data);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      personaModel$5gbF: null,
      constructor: PersonaPopupBase$,
      super$5gbF: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      getMyId: getMyId,
      updateGridStoreValueExpression$5gbF: updateGridStoreValueExpression,
      statics: {GRID_ITEM_ID: "grid"},
      requires: [
        "Ext.grid.Panel",
        "com.coremedia.cms.editor.sdk.components.StudioDialog"
      ],
      uses: ["com.coremedia.personalization.ui.persona.popup.PersonaPopupManager"]
    };
});
