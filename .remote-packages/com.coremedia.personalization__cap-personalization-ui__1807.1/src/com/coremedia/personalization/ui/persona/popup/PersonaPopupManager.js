Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopupManager", function(PersonaPopupManager) {/*package com.coremedia.personalization.ui.persona.popup {

import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTab;
import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
import com.coremedia.personalization.ui.persona.selector.PersonaModel;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Ext;

/**
 * This manager handles the personaPopup windows by remembering their reference. Therefore, it is only possible to
 * open a popup for a persona once per tab.
 * /
public class PersonaPopupManager {

  /**
   * Stores all current open personaPopups
   * /
  private var popupMap:Object;*/

  /**
   * This manager handles the personaPopup windows by remembering their reference. Therefore, it is only possible to
   * open a popup for a persona once per tab.
   */
  function PersonaPopupManager$() {
    this.popupMap$ldHl = {};
  }/*

  /**
   * Only show the personaPopup for the given parameters if no other popup exists for this persona inside this active
   * content tab.
   *
   * @param entityExpression the expression denoting the tab entity for which popups are managed
   * @param personaContent the actual persona content
   * @param personaModel the loaded persona Model
   * @param trigger the component that is the trigger of a personaPopup (usually a button)
   * @param personaActivator
   * /
  public*/ function showPersonaPopupForPersonaContent(entityExpression/*:ValueExpression*/, personaContent/*:Content*/, personaModel/*:PersonaModel*/, trigger/*:Component*/, personaActivator/*:PersonaActivator*/)/*:void*/ {var this$=this;
    var entity/*:Object*/ = entityExpression.getValue();
    var popupIdentifier/*:String*/ = personaContent.getId() + "#" + PersonaPopupManager.getEntityId(entity);

    if (!this.popupMap$ldHl[popupIdentifier]) {

      var workAreaTab/*:WorkAreaTab*/ =AS3.as( trigger.findParentByType(com.coremedia.cms.editor.sdk.desktop.WorkAreaTab.xtype),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);

      var personaPopupConfig/*:PersonaPopup*/ = AS3.cast(com.coremedia.personalization.ui.persona.popup.PersonaPopup,{});
      AS3.setBindable(personaPopupConfig,"entityExpression" , entityExpression);
      AS3.setBindable(personaPopupConfig,"personaContent" , personaContent);
      AS3.setBindable(personaPopupConfig,"personaModel" , personaModel);
      AS3.setBindable(personaPopupConfig,"personaActivator" , personaActivator);
      personaPopupConfig.renderTo = workAreaTab.getLayout().getTarget();
      personaPopupConfig.animateTarget = trigger.getEl();
      var personaDetailWindow/*:PersonaPopup*/ = new com.coremedia.personalization.ui.persona.popup.PersonaPopup(personaPopupConfig);
      personaDetailWindow.show();
      personaDetailWindow.addListener('destroy', function ()/*:void*/ {
        delete this$.popupMap$ldHl[popupIdentifier];
      });
      workAreaTab.on("deactivate", function ()/*:void*/ {
        personaDetailWindow.hide();
      });

      this.popupMap$ldHl[popupIdentifier] = personaDetailWindow;
    }
    else {
      (AS3.as(this.popupMap$ldHl[popupIdentifier],  com.coremedia.personalization.ui.persona.popup.PersonaPopup)).show();
    }
  }/*

  public static*/ function getEntityId$static(entity/*:Object*/)/*:String*/ {
    var entityId/*:String*/;
    if (AS3.is(entity,  com.coremedia.cap.content.Content)) {
      entityId = String(com.coremedia.cap.common.IdHelper.parseContentId(AS3.cast(com.coremedia.cap.content.Content,entity)));
    } else if (AS3.is(entity,  com.coremedia.ui.data.RemoteBean)) {
      //Only letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".") are allowed as id
      entityId = AS3.cast(com.coremedia.ui.data.RemoteBean,entity).getUriPath().replace(/[^\w\-\:\.]/g, "-");
    }
    return entityId;
  }/*

  public*/ function destroy()/*:void*/ {
    for (var id/*:String*/ in this.popupMap$ldHl) {
      if (this.popupMap$ldHl.hasOwnProperty(id)) {
        Ext.destroy(this.popupMap$ldHl[id]);
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      popupMap$ldHl: null,
      constructor: PersonaPopupManager$,
      showPersonaPopupForPersonaContent: showPersonaPopupForPersonaContent,
      destroy: destroy,
      statics: {getEntityId: getEntityId$static},
      requires: [
        "Ext",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.ui.data.RemoteBean"
      ],
      uses: ["com.coremedia.personalization.ui.persona.popup.PersonaPopup"]
    };
});
