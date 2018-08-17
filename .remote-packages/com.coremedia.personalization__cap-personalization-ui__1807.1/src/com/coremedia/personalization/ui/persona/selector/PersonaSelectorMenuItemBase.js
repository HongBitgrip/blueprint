Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuItemBase", function(PersonaSelectorMenuItemBase) {/*package com.coremedia.personalization.ui.persona.selector {

import com.coremedia.cap.content.Content;
import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.form.field.Radio;

public class PersonaSelectorMenuItemBase extends Container {
  private var personaContent:Content;
  private var personaModel:PersonaModel;

  private var displayNameAndAgeValueExp:ValueExpression;
  private var radioBtn:Radio;
  private var parentMenu:PersonaSelectorMenuBase;
  private var personaActivator:PersonaActivator;
  private var personaInfo:Container;

  public static const RADIO_BUTTON_NAME_SUFFIX:String = "-radioName";

  protected static const RADIO_BUTTON_VALUE_SUFFIX:String = "-radioValue";
  protected static const RADIO_BUTTON_ITEM_ID_PREFIX:String = "radioItem-";
  protected static const EMPTY_PERSONA_PIC_SRC:String = "persona_empty_icon_neutral_50.png";
  protected static const EMPTY_PERSONA_PIC_PACKAGE_NAME:String = "com.coremedia.personalization__cap-personalization-ui";
  protected static const EDIT_BUTTON_ITEM_ID:String = "editButton";
  protected static const PERSONA_INFO_ITEM_ID:String = "personaInfo";

  public*/ function PersonaSelectorMenuItemBase$(config/*:PersonaSelectorMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.personaContent$j_nx = AS3.getBindable(config,"personaContent");
    this.personaActivator$j_nx = AS3.getBindable(config,"personaActivator");
    this.super$j_nx(config);

    this.personaModel$j_nx = com.coremedia.personalization.ui.persona.selector.PersonaModels.forContent(this.personaContent$j_nx);
  }/*


  override protected*/ function initComponent()/*:void*/ {var this$=this;
    Ext.container.Container.prototype.initComponent.call(this);

    this.mon(this.getPersonaInfo$j_nx(), "afterrender", function ()/*:void*/ {
      this$.mon(this$.getPersonaInfo$j_nx().getEl(), "click",AS3.bind( this$,"selectRadioButton"));
    });
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.container.Container.prototype.afterRender.call(this);

    this.getRadioBtn$j_nx().setValue(this.personaActivator$j_nx.isActive(this.personaContent$j_nx));

    // Ensure focus if radio gets focused.
    // Can only happen as a result to user input, so this should not be confusing (no other elements loses its focus unexpectedly).
    if (this.getRadioBtn$j_nx().getValue()) {
      this.getRadioBtn$j_nx().focus();
    }

    // Ensure checked state on focus.
    this.mon(this.getRadioBtn$j_nx(), "focus", function ()/*:void*/ {
      this$.getRadioBtn$j_nx().setValue(true);
    });

    this.mon(this.getRadioBtn$j_nx(), "change", function (radio/*:Radio*/, newValue/*:Boolean*/)/*:void*/ {
      //only activate the radio button when the click event wasn't triggered by a button (e.g. the open in tab button)
      if (newValue) {
        this$.personaActivator$j_nx.setActive(this$.personaContent$j_nx);
      }
    });
  }/*

  protected*/ function getDisplayNameAndAgeValueExpression(config/*:PersonaSelectorMenuItem*/)/*:ValueExpression*/ {
    if (!this.displayNameAndAgeValueExp$j_nx) {
      this.displayNameAndAgeValueExp$j_nx = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(computeDisplayNameAndAge$static, AS3.getBindable(config,"personaContent"));
    }
    return this.displayNameAndAgeValueExp$j_nx;
  }/*

  private static*/ function computeDisplayNameAndAge$static(personaContent/*:Content*/)/*: String*/ {
    var personaModel/*:PersonaModel*/ = com.coremedia.personalization.ui.persona.selector.PersonaModels.forContent(personaContent);
    var result/*:String*/ = personaModel.getDisplayName();
    if (personaModel.getAge() !== undefined) {
      result = result.concat(', ' + personaModel.getAge());
    }
    return result;
  }/*

  private*/ function getRadioBtn()/*:Radio*/ {
    if (!this.radioBtn$j_nx) {
      this.radioBtn$j_nx =AS3.as( this.queryById(PersonaSelectorMenuItemBase.RADIO_BUTTON_ITEM_ID_PREFIX + (AS3.as(this.personaContent$j_nx,  Object)).getNumericId()),  Ext.form.field.Radio);
    }
    return this.radioBtn$j_nx;
  }/*

  /**
   * Returns the model that this menu item represents.
   * @return com.coremedia.personalization.ui.persona.selector.PersonaModel
   * /
  public*/ function getPersonaModel()/*:PersonaModel*/ {
    return this.personaModel$j_nx;
  }/*

  protected*/ function getParentMenu()/*:PersonaSelectorMenuBase*/ {
    if (!this.parentMenu$j_nx) {
      this.parentMenu$j_nx =AS3.as( this.findParentByType(com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu.xtype),  com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase);
    }
    return this.parentMenu$j_nx;

  }/*

  private*/ function getPersonaInfo()/*:Container*/ {
    if (!this.personaInfo$j_nx) {
      this.personaInfo$j_nx =AS3.as( this.queryById(PersonaSelectorMenuItemBase.PERSONA_INFO_ITEM_ID),  Ext.container.Container);
    }
    return this.personaInfo$j_nx;
  }/*

  protected*/ function selectRadioButton()/*:void*/ {
    var radioButton/*:Radio*/ = this.getRadioBtn$j_nx();
    radioButton.setValue(true);
    radioButton.focus();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      personaContent$j_nx: null,
      personaModel$j_nx: null,
      displayNameAndAgeValueExp$j_nx: null,
      radioBtn$j_nx: null,
      parentMenu$j_nx: null,
      personaActivator$j_nx: null,
      personaInfo$j_nx: null,
      constructor: PersonaSelectorMenuItemBase$,
      super$j_nx: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      afterRender: afterRender,
      getDisplayNameAndAgeValueExpression: getDisplayNameAndAgeValueExpression,
      getRadioBtn$j_nx: getRadioBtn,
      getPersonaModel: getPersonaModel,
      getParentMenu: getParentMenu,
      getPersonaInfo$j_nx: getPersonaInfo,
      selectRadioButton: selectRadioButton,
      statics: {
        RADIO_BUTTON_NAME_SUFFIX: "-radioName",
        RADIO_BUTTON_VALUE_SUFFIX: "-radioValue",
        RADIO_BUTTON_ITEM_ID_PREFIX: "radioItem-",
        EMPTY_PERSONA_PIC_SRC: "persona_empty_icon_neutral_50.png",
        EMPTY_PERSONA_PIC_PACKAGE_NAME: "com.coremedia.personalization__cap-personalization-ui",
        EDIT_BUTTON_ITEM_ID: "editButton",
        PERSONA_INFO_ITEM_ID: "personaInfo"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Radio",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.selector.PersonaModels",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenuBase"
      ]
    };
});
