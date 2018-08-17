Ext.define("com.coremedia.personalization.ui.persona.form.PersonaMainContainerBase", function(PersonaMainContainerBase) {/*package com.coremedia.personalization.ui.persona.form {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.personalization.ui.util.PersonaContextHelper;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.container.Container;

import joo.debug;

/**
 * The PersonaMainContainer is used to show and edit persona properties.
 *
 * @xtype com.coremedia.personalization.ui.plugin.PersonaMainContainer
 * /
public class PersonaMainContainerBase extends Container {

  private var localBean:Bean; // the bean representation of the plaintext blob
  private var updateInProgress:Boolean; // flag to prevent blob updates if internal model update is in progress

  /**
   * Creates a new PersonaMainContainer.
   * A local bean is generated and populated with properties parsed from the profileSettings-blob.
   * If there is an invalid syntax, an error-screen will popup where one can view and edit the
   * pure blob-value in a textarea.
   *
   * @cfg {String} profileSettingsExpression {@link ValueExpression} that qualifies the BLOB-property containing the profile settings
   *
   * @param config configuration of this instance
   * /
  public*/ function PersonaMainContainerBase$(config/*:PersonaMainContainer = null*/) {if(arguments.length<=0)config=null;
    if (!AS3.getBindable(config,"profileSettingsExpression")) {
      throw new AS3.Error("Configuration parameter 'profileSettingsExpression' must be supplied");
    }

    this.super$$_4R(config);
  }/*

  /**
   * This transformer is used to convert the persona ProfileSettings textBlob to a Bean (in order to work with
   * bindPropertyPlugins).
   * Therefore, after every property change, a new bean is created and returned. But this led into a major disadvantage:
   * If a property (e.g. 'name') is not only changed, but removed (e.g. from 'name=horst'), the bindPropertyPlugins
   * won't be notified. To solve this, we had to look at the "oldBean" and compare it with new "newBean" (where [maybe]
   * the property is removed).
   * We need to extend the newBean with the removed propertyName and add an empty string as value ('name=') if the
   * oldBean contains a property, that is not available within the newBean.
   * That's what this transformer is handling as well.
   * @see #PERSO-327
   * @see #PERSO-378
   *
   * @param personaProfileSettingsTextBlob
   * @return converted Bean from ProfileSettings
   * /
  protected*/ function transformer(personaProfileSettingsTextBlob/*:String*/)/*:Bean*/ {
    // convert the text blob to a bean
    var newBean/*:Bean*/ = com.coremedia.personalization.ui.util.PersonaContextHelper.beanFromPropertiesString(personaProfileSettingsTextBlob);
    // remember the current bean for later comparing
    var oldBean/*:Bean*/ = this.getValue();

    if (oldBean) {
      // iterate through each property of the current (old) bean
      com.coremedia.ui.util.ObjectUtils.getPropertyNames(oldBean.toObject()).forEach(function (propertyName/*:String*/)/*:void*/ {
        // only extend the newBean when it doesn't contain this propertyName
        if (oldBean.get(propertyName) && !newBean.get(propertyName)) {
          // set the newBean's property to an empty string, so that the listening bindProperty plugins get notified that
          // this property has been removed
          newBean.set(propertyName, "");
        }
      });
    }

    // return the newBean (which will become the new oldBean at the next transformation call)
    return newBean;
  }/*

  protected*/ function getLocalBean()/*:Bean*/ {
    if (!this.localBean$$_4R) {
      this.localBean$$_4R = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();
    }
    return this.localBean$$_4R;
  }/*

  private*/ function updateModel(transformedValue/*:Bean*/)/*:void*/ {
    if (transformedValue) {
      if (com.coremedia.ui.util.ObjectUtils.equal(transformedValue, com.coremedia.personalization.ui.util.PersonaContextHelper.INVALID_VALUE)) {
        // invalid blob
        if (joo.debug) {
          AS3.trace("[WARN]: transformed blob data is invalid", transformedValue);
        }
        this.getPersonaErrorScreen$$_4R().setVisible(true);
      } else {
        this.getLocalBean().updateProperties(transformedValue.toObject());
        this.getPersonaErrorScreen$$_4R().setVisible(false);
      }
    } else {
      // blob is not set or empty
      this.getPersonaErrorScreen$$_4R().setVisible(false);
    }
  }/*

  private*/ function getPersonaErrorScreen()/*:PersonaErrorScreen*/ {
    return AS3.as( this.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.personalization.ui.persona.form.PersonaErrorScreen.xtype).build())[0],  com.coremedia.personalization.ui.persona.form.PersonaErrorScreen);
  }/*

  public*/ function getValue()/*:Bean*/ {
    return this.getLocalBean();
  }/*

  public*/ function setValue(transformedValue/*:Bean*/)/*:void*/ {var this$=this;
    this.updateInProgress$$_4R = true;

    if (transformedValue == null) {
      // If the transformedValue is null, the personaProfileSettingsTextBlob is null,
      // and the transformer was not called by the BindBlobPropertyPlugin - but the code therein handles
      // property updates, esp. property removal, so we call it ourselves here
      transformedValue = this.transformer(null);
    }
    this.updateModel$$_4R(transformedValue);
    // enable change events
    if (this.localBean$$_4R.set(com.coremedia.personalization.ui.util.PersonaContextHelper.HIDDEN_PROPERTY_NAME, "true")) {
      this.localBean$$_4R.addValueChangeListener(function ()/*:void*/ {
        if (!this$.updateInProgress$$_4R) {
          this$.fireEvent('change');
        }
      });
    }
    this.updateInProgress$$_4R = false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      localBean$$_4R: null,
      updateInProgress$$_4R: false,
      constructor: PersonaMainContainerBase$,
      super$$_4R: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      transformer: transformer,
      getLocalBean: getLocalBean,
      updateModel$$_4R: updateModel,
      getPersonaErrorScreen$$_4R: getPersonaErrorScreen,
      getValue: getValue,
      setValue: setValue,
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.form.PersonaErrorScreen",
        "com.coremedia.personalization.ui.util.PersonaContextHelper"
      ]
    };
});
