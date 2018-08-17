Ext.define("com.coremedia.personalization.ui.persona.popup.PersonaPopupOverviewPanelBase", function(PersonaPopupOverviewPanelBase) {/*package com.coremedia.personalization.ui.persona.popup {

import com.coremedia.cap.content.Content;
import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
import com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EncodingUtil;

import ext.Ext;

import ext.container.Container;
import ext.panel.Panel;

public class PersonaPopupOverviewPanelBase extends Panel {

  protected static const EMPTY_PERSONA_PIC_SRC:String = "persona_empty_icon_neutral_50.png";
  protected static const EMPTY_PERSONA_PIC_PACKAGE_NAME:String = "com.coremedia.personalization__cap-personalization-ui";
  protected static const EMPTY_PERSONA_PIC_BIG_SRC:String =*/function EMPTY_PERSONA_PIC_BIG_SRC$static_(){PersonaPopupOverviewPanelBase.EMPTY_PERSONA_PIC_BIG_SRC=( Ext.getResourcePath(PersonaPopupOverviewPanelBase.EMPTY_PERSONA_PIC_SRC, null, PersonaPopupOverviewPanelBase.EMPTY_PERSONA_PIC_PACKAGE_NAME));}/*;

  protected static const IMPLICIT_ITEM_CONTAINER_ITEM_ID:String = "implicitContainer";

  protected static const PERSONA_IMPLICIT_INTEREST_EMPTY_FIELD_ITEM_ID:String = "personaImplicitInterestEmptyField";

  protected static const PERSONA_USE_IN_PREVIEW_BUTTON_ITEM_ID:String = 'personaUseInPreviewButton';

  private var implicitContainer:Container;
  private var personaActivator:PersonaActivator;
  private var personaContent:Content;
  private var personaButton:IconButton;

  public*/ function PersonaPopupOverviewPanelBase$(config/*:PersonaPopup = null*/) {if(arguments.length<=0)config=null;
    this.super$lGU_(config);

    this.addAllImplicitInterestItemContainers$lGU_(AS3.getBindable(config,"personaModel").getImplicitInterestValueExpression());

    this.personaActivator$lGU_ = AS3.getBindable(config,"personaActivator");
    this.personaContent$lGU_ = AS3.getBindable(config,"personaContent");
    this.personaButton$lGU_ =AS3.as( this.queryById(PersonaPopupOverviewPanelBase.PERSONA_USE_IN_PREVIEW_BUTTON_ITEM_ID),  com.coremedia.ui.components.IconButton);
  }/*

  private*/ function togglePersonaButton(event/*:PropertyChangeEvent*/)/*:void*/ {
    this.setPersonaButtonState$lGU_(event.newValue === (AS3.as(this.personaContent$lGU_,  Object)).getNumericId());
  }/*

  private*/ function setPersonaButtonState(personaActivated/*:Boolean*/)/*:void*/ {
    this.personaButton$lGU_.setPressed(personaActivated);
    this.personaButton$lGU_.setDisabled(personaActivated);
    //TODO: change the tooltip
  }/*

  private*/ function addAllImplicitInterestItemContainers(valueExp/*:ValueExpression*/)/*:void*/ {
    if (valueExp && valueExp.getValue()) {
      var implicitInterestHelper/*:PersonaImplicitInterestHelper*/ = (AS3.as(valueExp.getValue(),  com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper));
      var implicitNames/*:Array*/ = implicitInterestHelper.getNameArray();

      //remove the field indicating that the implicit interests are empty.
      this.getImplicitContainer$lGU_().remove(PersonaPopupOverviewPanelBase.PERSONA_IMPLICIT_INTEREST_EMPTY_FIELD_ITEM_ID);

      // iterate through the implicitNames and add a new implicitContainer for each available implicitTaxonomy
      for (var i/*:Number*/ = 0; i < implicitNames.length; i++) {
        var personaPopupImplicitContainerCfg/*:PersonaPopupImplicitContainer*/ = AS3.cast(com.coremedia.personalization.ui.persona.popup.PersonaPopupImplicitContainer,{});
        AS3.setBindable(personaPopupImplicitContainerCfg,"implicitName" , implicitNames[i]);
        AS3.setBindable(personaPopupImplicitContainerCfg,"implicitValue" , implicitInterestHelper.getValueForName(implicitNames[i]));
        this.addImplicitInterestItemContainer$lGU_(personaPopupImplicitContainerCfg);
      }

    }
  }/*

  private*/ function getImplicitContainer()/*:Container*/ {
    if (!this.implicitContainer$lGU_) {
      this.implicitContainer$lGU_ =AS3.as( this.queryById(PersonaPopupOverviewPanelBase.IMPLICIT_ITEM_CONTAINER_ITEM_ID),  Ext.container.Container);
    }
    return this.implicitContainer$lGU_;
  }/*

  private*/ function addImplicitInterestItemContainer(implicitInterestContainer/*:PersonaPopupImplicitContainer*/)/*:void*/ {
    this.getImplicitContainer$lGU_().add(implicitInterestContainer);
  }/*


  protected static*/ function replaceQuotesAndEncode$static(value/*:String*/)/*:String*/ {
    if (value) {
      return com.coremedia.ui.util.EncodingUtil.encodeForHTML(value.replace(/"/g, ""));
    }
    return value;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.setPersonaButtonState$lGU_(this.personaActivator$lGU_.isActive(this.personaContent$lGU_));
    this.personaActivator$lGU_.getUrlParameterBean().addPropertyChangeListener(com.coremedia.personalization.ui.persona.helper.PersonaActivator.P13N_TESTCONTEXT_PARAM,AS3.bind( this,"togglePersonaButton$lGU_"));
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    this.personaActivator$lGU_.getUrlParameterBean().removePropertyChangeListener(com.coremedia.personalization.ui.persona.helper.PersonaActivator.P13N_TESTCONTEXT_PARAM,AS3.bind( this,"togglePersonaButton$lGU_"));
    Ext.panel.Panel.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      implicitContainer$lGU_: null,
      personaActivator$lGU_: null,
      personaContent$lGU_: null,
      personaButton$lGU_: null,
      constructor: PersonaPopupOverviewPanelBase$,
      super$lGU_: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      togglePersonaButton$lGU_: togglePersonaButton,
      setPersonaButtonState$lGU_: setPersonaButtonState,
      addAllImplicitInterestItemContainers$lGU_: addAllImplicitInterestItemContainers,
      getImplicitContainer$lGU_: getImplicitContainer,
      addImplicitInterestItemContainer$lGU_: addImplicitInterestItemContainer,
      afterRender: afterRender,
      onDestroy: onDestroy,
      statics: {
        EMPTY_PERSONA_PIC_SRC: "persona_empty_icon_neutral_50.png",
        EMPTY_PERSONA_PIC_PACKAGE_NAME: "com.coremedia.personalization__cap-personalization-ui",
        EMPTY_PERSONA_PIC_BIG_SRC: undefined,
        IMPLICIT_ITEM_CONTAINER_ITEM_ID: "implicitContainer",
        PERSONA_IMPLICIT_INTEREST_EMPTY_FIELD_ITEM_ID: "personaImplicitInterestEmptyField",
        PERSONA_USE_IN_PREVIEW_BUTTON_ITEM_ID: 'personaUseInPreviewButton',
        replaceQuotesAndEncode: replaceQuotesAndEncode$static,
        __initStatics__: function() {
          EMPTY_PERSONA_PIC_BIG_SRC$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.helper.PersonaActivator",
        "com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper",
        "com.coremedia.personalization.ui.persona.popup.PersonaPopupImplicitContainer"
      ]
    };
});
