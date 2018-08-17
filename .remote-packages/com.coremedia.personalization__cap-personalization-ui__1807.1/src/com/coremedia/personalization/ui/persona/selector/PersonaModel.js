Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaModel", function(PersonaModel) {/*package com.coremedia.personalization.ui.persona.selector {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper;
import com.coremedia.personalization.ui.util.PersonaContextHelper;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.util.Observable;

public class PersonaModel extends Observable {
  private var content:Content;
  private var profileSettingsDataValueExpression:ValueExpression;
  private var profileExtensionRemoteBean:RemoteBean;

  private var loaded:Boolean = false;

  private var personaName:String;
  private var givenName:String;
  private var familyName:String;
  private var location:String;
  private var birthday:Date;
  private var profileSettings:Bean;
  private var profileSettingsAsGroupArray:Array;
  private var personaImageValueExp:ValueExpression;
  private var explicitInterestValueExp:ValueExpression;
  private var implicitInterestValueExp:ValueExpression;
  /**
   * The personaProfileBean extends the standard profileSettings by some custom values (e.g. the DisplayName)
   * /
  private var personaProfileBean:Bean;

  public static const PROPERTY_DISPLAYNAME:String = "displayName";
  public static const PROPERTY_AGE:String = "age";
  public static const PROPERTY_PERSONAL_GIVENNAME:String = "personal!givenname";
  public static const PROPERTY_PERSONAL_FAMILYNAME:String = "personal!familyname";
  public static const PROPERTY_LOCATION_CITY:String = "location!city";
  public static const PROPERTY_PERSONAL_BIRTHDAY:String = "personal!dateofbirth";
  public static const PROPERTY_PERSONA_IMAGE:String = "image";

  private static const*/var STRUCT_PROPERTY_PROFILE_PICTURE$static/*:String*/ = 'profileImage';/*
  private static const*/var STRUCT_PROPERTY_PROFILE_EXPLICIT_INTEREST$static/*:String*/ = 'explicit';/*
  private static const*/var STRUCT_PROPERTY_PROFILE_IMPLICIT_INTEREST$static/*:String*/ = 'subjectTaxonomies';/*
  private static const*/var STRUCT_PROPERTY_PROFILE_IMPLICIT_INTEREST_VALUE$static/*:String*/ = 'subjectTaxonomies_count';/*

  public*/ function PersonaModel$(content/*:Content*/) {this.super$fGnG();
    this.content$fGnG = content;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "content", null, content);

    content.load(AS3.bind(this,"contentLoaded$fGnG"));
  }/*

  private*/ function getContent()/*:Content*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "content");
    return this.content$fGnG;
  }/*

  // Loading and listener registration.

  private*/ function contentLoaded()/*:void*/ {
    this.content$fGnG.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.NAME,AS3.bind( this,"updateName$fGnG"));
    this.updateName$fGnG();

    this.profileExtensionRemoteBean$fGnG =AS3.as( this.content$fGnG.getProperties().get("profileExtensions"),  com.coremedia.ui.data.RemoteBean);
    this.profileExtensionRemoteBean$fGnG.load(AS3.bind(this,"profileExtensionsLoaded"));
  }/*

  public*/ function profileExtensionsLoaded()/*:void*/ {
    this.profileExtensionRemoteBean$fGnG.addValueChangeListener(AS3.bind(this,"updateProfileExtensions"));
    this.updateProfileExtensions();

    var profileSettingsBlob/*:Blob*/ =AS3.as( this.content$fGnG.getProperties().get("profileSettings"),  com.coremedia.ui.data.Blob);
    if (profileSettingsBlob) {
      profileSettingsBlob.loadData(AS3.bind(this,"profileSettingsBlobLoaded$fGnG"));
    } else {
      this.profileSettingsBlobLoaded$fGnG();
    }
  }/*

  private*/ function profileSettingsBlobLoaded()/*:void*/ {
    this.profileSettingsDataValueExpression$fGnG = com.coremedia.ui.data.ValueExpressionFactory.create("profileSettings.data", this.content$fGnG.getProperties());
    this.profileSettingsDataValueExpression$fGnG.addChangeListener(AS3.bind(this,"updateProfileSettingsBlob"));
    this.updateProfileSettingsBlob();

    this.loaded$fGnG = true;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "loaded", false, true);
  }/*

  // Continuous updates.

  private*/ function updateName()/*:void*/ {
    this.setPersonaName$fGnG(this.content$fGnG.getName());
  }/*

  public*/ function updateProfileExtensions()/*:void*/ {
    if (this.profileExtensionRemoteBean$fGnG && this.profileExtensionRemoteBean$fGnG.get('properties')) {
      var properties/*:Struct*/ = this.profileExtensionRemoteBean$fGnG.get('properties');

      this.updatePersonaImage$fGnG(properties.get(STRUCT_PROPERTY_PROFILE_PICTURE$static));
    }
  }/*

  public*/ function updateProfileSettingsBlob()/*:void*/ {
    var profileSettings/*:**/ = this.profileSettingsDataValueExpression$fGnG.getValue();

    var oldPersonaProfileBean/*:Bean*/ = this.personaProfileBean$fGnG;
    if (profileSettings) {
      this.personaProfileBean$fGnG = com.coremedia.personalization.ui.util.PersonaContextHelper.beanFromPropertiesString(profileSettings.toString());

      var oldProfileSettingsAsGroupArray/*:Array*/ = this.profileSettingsAsGroupArray$fGnG;
      this.profileSettingsAsGroupArray$fGnG = com.coremedia.personalization.ui.util.PersonaContextHelper.groupArrayFromPropertiesString(profileSettings);
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "profileSettingsAsGroupArray", oldProfileSettingsAsGroupArray, this.profileSettingsAsGroupArray$fGnG);

    } else {
      this.personaProfileBean$fGnG = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();
    }

    // update some properties for easy accessing (e.g. personaModel.getGivenName())
    this.setGivenName$fGnG(this.personaProfileBean$fGnG.get(PersonaModel.PROPERTY_PERSONAL_GIVENNAME));
    this.setFamilyName$fGnG(this.personaProfileBean$fGnG.get(PersonaModel.PROPERTY_PERSONAL_FAMILYNAME));
    this.setBirthdayFromString$fGnG(this.personaProfileBean$fGnG.get(PersonaModel.PROPERTY_PERSONAL_BIRTHDAY));
    this.setCityLocation$fGnG(this.personaProfileBean$fGnG.get(PersonaModel.PROPERTY_LOCATION_CITY));
    this.personaProfileBean$fGnG.set(PersonaModel.PROPERTY_DISPLAYNAME, this.getDisplayName());
    this.personaProfileBean$fGnG.set(PersonaModel.PROPERTY_AGE, this.getAge());

    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "personaProfileBean", oldPersonaProfileBean, this.personaProfileBean$fGnG);
  }/*

  private*/ function extendPersonaProfileBeanBy(propertyName/*:String*/, propertyValue/*:**/)/*:void*/ {
    if (!this.personaProfileBean$fGnG) {
      // create the personaProfileBean if it doesn't exist
      this.personaProfileBean$fGnG = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean();
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "personaProfileBean", undefined, this.personaProfileBean$fGnG);
    }
    this.personaProfileBean$fGnG.set(propertyName, propertyValue);
  }/*

  // Notifications and and accessors.

  public*/ function load(callback/*:Function*/)/*:void*/ {
    if (this.loaded$fGnG) {
      callback();
    } else {
      this.on("loaded", callback, null, {single:true});
    }
  }/*

  public*/ function getPersonaProfileBean()/*:Bean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "personaProfileBean");
    return this.personaProfileBean$fGnG;
  }/*

  public*/ function getPersonaName()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "personaName");
    return (this.personaName$fGnG === null) ? undefined : this.personaName$fGnG;
  }/*

  private*/ function setPersonaName(personaName/*:String*/)/*:void*/ {
    var oldPersonaName/*:String*/ = this.personaName$fGnG;
    this.personaName$fGnG = personaName;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "personaName", oldPersonaName, personaName);
  }/*

  public*/ function getGivenName()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "givenName");
    return (this.givenName$fGnG === null) ? undefined : this.givenName$fGnG;
  }/*

  private*/ function setGivenName(givenName/*:String*/)/*:void*/ {
    var oldGivenName/*:String*/ = this.givenName$fGnG;
    this.givenName$fGnG = givenName;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "givenName", oldGivenName, givenName);
  }/*

  public*/ function getFamilyName()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "familyName");
    return (this.familyName$fGnG === null) ? undefined : this.familyName$fGnG;
  }/*

  private*/ function setFamilyName(familyName/*:String*/)/*:void*/ {
    var oldFamilyName/*:String*/ = this.familyName$fGnG;
    this.familyName$fGnG = familyName;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "familyName", oldFamilyName, familyName);
  }/*

  public*/ function getCityLocation()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "cityLocation");
    return (this.location$fGnG === null) ? undefined : this.location$fGnG;
  }/*

  private*/ function setCityLocation(location/*:String*/)/*:void*/ {
    var oldLocation/*:String*/ = this.location$fGnG;
    this.location$fGnG = location;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "cityLocation", oldLocation, location);
  }/*

  public*/ function getBirthday()/*:Date*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "birthday");
    return (this.birthday$fGnG === null) ? undefined : this.birthday$fGnG;
  }/*

  private*/ function setBirthdayFromString(birthdayString/*:String*/)/*:void*/ {
    if (birthdayString) {
      var oldBirthday/*:Date*/ = this.birthday$fGnG;
      var oldAge/*:Number*/ = this.getAge();
      // need some special parsing (because IE sucks at date parsing)
      var a/*:Array*/ = birthdayString.split("T");
      var d/*:String*/ = a[0].split("-");
      this.birthday$fGnG = new Date(d[0], (d[1] - 1), d[2]);
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "birthday", oldBirthday, this.birthday$fGnG);
      com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "age", oldAge,AS3.bind( this,"getAge"));
    }
  }/*

  public*/ function getAge()/*:Number*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "birthday");
    if (this.birthday$fGnG) {
      return Math.floor(( (new Date().getTime() - this.birthday$fGnG.getTime()) / 1000 / (60 * 60 * 24) ) / 365.25);
    }
    else {
      return undefined;
    }
  }/*

  private*/ function updatePersonaImage(personaImage/*:Array*/)/*:void*/ {var this$=this;
    if (personaImage && personaImage.length === 1) {
      (AS3.as(personaImage[0],  com.coremedia.cap.content.Content)).load(function (bean/*:RemoteBean*/)/*:void*/ {
        var imageBlob/*:Blob*/ = bean.get("properties").get("data");
        imageBlob.loadData(function (blob/*:Blob*/)/*:void*/ {
          this$.getPersonaImageValueExpression().setValue(blob.getUri());
          this$.extendPersonaProfileBeanBy$fGnG(PersonaModel.PROPERTY_PERSONA_IMAGE, blob.getUri());
        });
      });
    }
    else {
      this.extendPersonaProfileBeanBy$fGnG(PersonaModel.PROPERTY_PERSONA_IMAGE, undefined);
    }
  }/*

  private*/ function computeExplicitInterest()/*:String*/ {
    var currentContent/*:Content*/ = this.getContent$fGnG();
    if (!currentContent) {
      return undefined;
    }

    var contentProperties/*:ContentProperties*/ = this.content$fGnG.getProperties();
    if (!contentProperties) {
      return undefined;
    }


    var profileExtensionRemoteBean/*:RemoteBean*/ =AS3.as( contentProperties.get("profileExtensions"),  com.coremedia.ui.data.RemoteBean);
    if (!profileExtensionRemoteBean) {
      return undefined;
    }

    var properties/*:Struct*/ = profileExtensionRemoteBean.get('properties');
    if (!properties) {
      return undefined;
    }

    var explicitInterests/*:Array*/ = properties.get(STRUCT_PROPERTY_PROFILE_EXPLICIT_INTEREST$static);
    if (!explicitInterests || explicitInterests.length === 0) {
      return undefined;
    }

    var nameArray/*:Array*/ = [];
    var returnUndefined/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < explicitInterests.length; i++) {
      var bean/*:Bean*/ = explicitInterests[i];
      var beanProperties/*:Bean*/ = bean.get("properties");
      if (beanProperties) {
        nameArray.push(beanProperties.get("value"));
      } else {
        returnUndefined = true;
      }
    }
    return returnUndefined ? undefined : nameArray.join(', ');
  }/*


  private*/ function computeImplicitInterest()/*:PersonaImplicitInterestHelper*/ {
    var currentContent/*:Content*/ = this.getContent$fGnG();
    if (!currentContent) {
      return undefined;
    }

    var contentProperties/*:ContentProperties*/ = this.content$fGnG.getProperties();
    if (!contentProperties) {
      return undefined;
    }


    var profileExtensionRemoteBean/*:RemoteBean*/ =AS3.as( contentProperties.get("profileExtensions"),  com.coremedia.ui.data.RemoteBean);
    if (!profileExtensionRemoteBean) {
      return undefined;
    }

    var properties/*:Struct*/ = profileExtensionRemoteBean.get('properties');
    if (!properties) {
      return undefined;
    }


    var implicitInterests/*:Array*/ = properties.get(STRUCT_PROPERTY_PROFILE_IMPLICIT_INTEREST$static);
    if (!implicitInterests || implicitInterests.length === 0) {
      return undefined;
    }

    var implicitInterestsValues/*:Array*/ = properties.get(STRUCT_PROPERTY_PROFILE_IMPLICIT_INTEREST_VALUE$static);

    var nameArray/*:Array*/ = [];
    var returnUndefined/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < implicitInterests.length; i++) {
      var bean/*:Bean*/ = implicitInterests[i];
      var beanProperties/*:Bean*/ = bean.get("properties");
      if (beanProperties) {
        nameArray.push(beanProperties.get("value"));
      } else {
        returnUndefined = true;
      }
    }
    return returnUndefined ? undefined : new com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper(nameArray, implicitInterestsValues);
  }/*

  public*/ function getPersonaImageValueExpression()/*:ValueExpression*/ {
    if (!this.personaImageValueExp$fGnG) {
      this.personaImageValueExp$fGnG = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.personaImageValueExp$fGnG;
  }/*

  public*/ function getExplicitInterestValueExpression()/*:ValueExpression*/ {
    if (!this.explicitInterestValueExp$fGnG) {
      this.explicitInterestValueExp$fGnG = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeExplicitInterest$fGnG"));
    }
    return this.explicitInterestValueExp$fGnG;
  }/*

  public*/ function getImplicitInterestValueExpression()/*:ValueExpression*/ {
    if (!this.implicitInterestValueExp$fGnG) {
      this.implicitInterestValueExp$fGnG = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeImplicitInterest$fGnG"));
    }
    return this.implicitInterestValueExp$fGnG;
  }/*

  public*/ function getProfileSettingsAsGroupArray()/*:Array*/ {
    return this.profileSettingsAsGroupArray$fGnG;
  }/*

  /**
   * Returns the full persona name (given name & family name) if available. Otherwise (if nether is provided), the
   * persona file name will be returned.
   * @return String
   * /
  public*/ function getDisplayName()/*:String*/ {
    var fullName/*:String*/ = "";
    this.getGivenName() && (fullName += this.getGivenName() + " ");
    this.getFamilyName() && (fullName += this.getFamilyName());
    return (fullName.length === 0) ? this.getPersonaName() : fullName;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      content$fGnG: null,
      profileSettingsDataValueExpression$fGnG: null,
      profileExtensionRemoteBean$fGnG: null,
      loaded$fGnG: false,
      personaName$fGnG: null,
      givenName$fGnG: null,
      familyName$fGnG: null,
      location$fGnG: null,
      birthday$fGnG: null,
      profileSettings$fGnG: null,
      profileSettingsAsGroupArray$fGnG: null,
      personaImageValueExp$fGnG: null,
      explicitInterestValueExp$fGnG: null,
      implicitInterestValueExp$fGnG: null,
      personaProfileBean$fGnG: null,
      constructor: PersonaModel$,
      super$fGnG: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      getContent$fGnG: getContent,
      contentLoaded$fGnG: contentLoaded,
      profileExtensionsLoaded: profileExtensionsLoaded,
      profileSettingsBlobLoaded$fGnG: profileSettingsBlobLoaded,
      updateName$fGnG: updateName,
      updateProfileExtensions: updateProfileExtensions,
      updateProfileSettingsBlob: updateProfileSettingsBlob,
      extendPersonaProfileBeanBy$fGnG: extendPersonaProfileBeanBy,
      load: load,
      getPersonaProfileBean: getPersonaProfileBean,
      getPersonaName: getPersonaName,
      setPersonaName$fGnG: setPersonaName,
      getGivenName: getGivenName,
      setGivenName$fGnG: setGivenName,
      getFamilyName: getFamilyName,
      setFamilyName$fGnG: setFamilyName,
      getCityLocation: getCityLocation,
      setCityLocation$fGnG: setCityLocation,
      getBirthday: getBirthday,
      setBirthdayFromString$fGnG: setBirthdayFromString,
      getAge: getAge,
      updatePersonaImage$fGnG: updatePersonaImage,
      computeExplicitInterest$fGnG: computeExplicitInterest,
      computeImplicitInterest$fGnG: computeImplicitInterest,
      getPersonaImageValueExpression: getPersonaImageValueExpression,
      getExplicitInterestValueExpression: getExplicitInterestValueExpression,
      getImplicitInterestValueExpression: getImplicitInterestValueExpression,
      getProfileSettingsAsGroupArray: getProfileSettingsAsGroupArray,
      getDisplayName: getDisplayName,
      statics: {
        PROPERTY_DISPLAYNAME: "displayName",
        PROPERTY_AGE: "age",
        PROPERTY_PERSONAL_GIVENNAME: "personal!givenname",
        PROPERTY_PERSONAL_FAMILYNAME: "personal!familyname",
        PROPERTY_LOCATION_CITY: "location!city",
        PROPERTY_PERSONAL_BIRTHDAY: "personal!dateofbirth",
        PROPERTY_PERSONA_IMAGE: "image"
      },
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.helper.PersonaImplicitInterestHelper",
        "com.coremedia.personalization.ui.util.PersonaContextHelper"
      ]
    };
});
