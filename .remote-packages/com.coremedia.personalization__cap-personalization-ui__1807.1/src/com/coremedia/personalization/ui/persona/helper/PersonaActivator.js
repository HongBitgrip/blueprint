Ext.define("com.coremedia.personalization.ui.persona.helper.PersonaActivator", function(PersonaActivator) {/*package com.coremedia.personalization.ui.persona.helper {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;

/**
 * This PersonaActivator is used to handle all persona activation requests. Fore Example: one can tell the
 * PersonaActivator to activate a specific persona by calling <code>setActive(personaContent)</code>.
 * /
public class PersonaActivator {
  public static const NO_PERSONA_ID:int = 0; // invalid content id, so no persona is active
  public static const P13N_TEST_PARAM:String = 'p13n_test';
  public static const P13N_TESTCONTEXT_PARAM:String = 'p13n_testcontext';

  private var urlValueExpression:ValueExpression;
  private var urlParameterBean:Bean;

  /**
   * This PersonaActivator is used to handle all persona activation requests.
   * @param urlValueExpression the ValueExpression that points to the current preview url
   * @param urlParameterBean the Bean that contains all preview url parameter information
   * /
  public*/ function PersonaActivator$(urlValueExpression/*:ValueExpression*/, urlParameterBean/*:Bean*/) {
    this.urlValueExpression$rIND = urlValueExpression;
    this.urlParameterBean$rIND = urlParameterBean;
    this.setNoPersonaActive();
  }/*

  /**
   * Activate a persona by passing its content.
   * @param personaContent the persona content that should be activated
   * /
  public*/ function setActive(personaContent/*:Content*/)/*:void*/ {
    this.urlParameterBean$rIND.set(PersonaActivator.P13N_TEST_PARAM, true);
    this.urlParameterBean$rIND.set(PersonaActivator.P13N_TESTCONTEXT_PARAM, getNumericIdFromContent$static(personaContent));
  }/*

  /**
   * @return <code>true</code> if the given personaContent is active.
   * /
  public*/ function isActive(personaContent/*:Content*/)/*:Boolean*/ {/*
    const*/var personaIdFromGivenContent/*:int*/ = getNumericIdFromContent$static(personaContent);
    if (this.urlParameterBean$rIND.get(PersonaActivator.P13N_TEST_PARAM)) {/*
      const*/var currentActivePersonaId/*:int*/ = this.urlParameterBean$rIND.get(PersonaActivator.P13N_TESTCONTEXT_PARAM);
      return personaIdFromGivenContent === currentActivePersonaId;
    }
    return false;
  }/*

  /**
   * @return <code>true</code> if any persona is currently active.
   * /
  public*/ function isAnyPersonaActive()/*:Boolean*/ {
    if (this.urlParameterBean$rIND.get(PersonaActivator.P13N_TEST_PARAM)) {/*
      const*/var currentActivePersonaId/*:int*/ = this.urlParameterBean$rIND.get(PersonaActivator.P13N_TESTCONTEXT_PARAM);

      return currentActivePersonaId > PersonaActivator.NO_PERSONA_ID;
    }

    return false;
  }/*

  /**
   * Activate no persona. This is used to "deactivate" the personalized preview by setting the 'p13n_testcontext'
   * preview url parameter to '0'.
   * /
  public*/ function setNoPersonaActive()/*:void*/ {
    this.urlParameterBean$rIND.set(PersonaActivator.P13N_TEST_PARAM, true);
    this.urlParameterBean$rIND.set(PersonaActivator.P13N_TESTCONTEXT_PARAM, PersonaActivator.NO_PERSONA_ID);
  }/*

  /**
   * @return the ValueExpression that points to the current preview url
   * /
  public*/ function getUrlParameterBean()/*:Bean*/ {
    return this.urlParameterBean$rIND;
  }/*

  /**
   * @return the Bean that contains all preview url parameter information
   * /
  public*/ function getUrlValueExpression()/*:ValueExpression*/ {
    return this.urlValueExpression$rIND;
  }/*

  private static*/ function getNumericIdFromContent$static(content/*:Content*/)/*:int*/ {
    return (AS3.as(content,  Object)).getNumericId();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      urlValueExpression$rIND: null,
      urlParameterBean$rIND: null,
      constructor: PersonaActivator$,
      setActive: setActive,
      isActive: isActive,
      isAnyPersonaActive: isAnyPersonaActive,
      setNoPersonaActive: setNoPersonaActive,
      getUrlParameterBean: getUrlParameterBean,
      getUrlValueExpression: getUrlValueExpression,
      statics: {
        NO_PERSONA_ID: 0,
        P13N_TEST_PARAM: 'p13n_test',
        P13N_TESTCONTEXT_PARAM: 'p13n_testcontext'
      }
    };
});
