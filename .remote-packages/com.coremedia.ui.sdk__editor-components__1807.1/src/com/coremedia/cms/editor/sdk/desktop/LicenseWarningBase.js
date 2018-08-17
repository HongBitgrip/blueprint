Ext.define("com.coremedia.cms.editor.sdk.desktop.LicenseWarningBase", function(LicenseWarningBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.infos.CapSystemInfo;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.Ext;

import ext.container.Container;

import mx.resources.ResourceManager;

/**
 * Retrieves information about licensed and to be licensed features from the server and matches them.
 * Not licensed features will lead to a warning on the Studio's start panel.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.sdk.desktop.LicenseNames')]
public class LicenseWarningBase extends Container {

  protected static var LICENSE_WARNING_FIELD_ITEMID:String = "licenseWarningFieldItemId";

  public*/ function LicenseWarningBase$(config/*:Container = null*/) {if(arguments.length<=0)config=null;
    this.super$JPku(config);
    this.addListener('afterrender',AS3.bind( this,"initLabel$JPku"));
  }/*

  private var notLicensedComponentsVE:ValueExpression;

  /**
   * Loads license information from the server and determines not licensed components as a value expression.
   * @return The not licensed components as a value expression which returns the license ids as an Array of Strings.
   * /
  protected*/ function getNotLicensedComponentsVE()/*:ValueExpression*/ {
    if (!this.notLicensedComponentsVE$JPku) {
      this.notLicensedComponentsVE$JPku = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"missingRequiredLicenses$JPku"));
    }
    return this.notLicensedComponentsVE$JPku;
  }/*

  protected*/ function isLicenseWarningVisibleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var missingLicenses/*:Array*/ = this$.missingRequiredLicenses$JPku();
      return !Ext.isEmpty(missingLicenses);
    });
  }/*

  /**
   * Transforms an Array of license identifiers to localized items in a HTML list in order to display them
   * accordingly.
   * @param names The names array to transform.
   * @return An unorders HTML list conteining the localized names oif the components to license.
   * /
  protected static*/ function localizeLicense$static(names/*:Array*/)/*:String*/ {
    var localizedAndFormattedLics/*:String*/ = '<ul>';
    for (var i/*:int*/ = 0; i < names.length; i++) {
      var nameToLocalize/*:**/ = names[i];
      localizedAndFormattedLics =
              localizedAndFormattedLics.concat('<li>',
                      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.desktop.LicenseNames', 'LicenseName_' + nameToLocalize) || nameToLocalize, '</li>');
    }
    localizedAndFormattedLics = localizedAndFormattedLics.concat('</ul>');
    return LicenseWarningBase.getTitle().concat(localizedAndFormattedLics);
  }/*

  protected static*/ function getTitle$static()/*:String*/ {
    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'StartTab_warning_license_header'))
            + '<br />' + com.coremedia.ui.util.EncodingUtil.encodeForHTML(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'StartTab_warning_license_body'));
  }/*

  private*/ function missingRequiredLicenses()/*:Array*/ {
    var systemInfo/*:CapSystemInfo*/ = com.coremedia.cap.common.SESSION.getConnection().getSystemInfo();
    var requiredLicenses/*:Array*/ = systemInfo.getRequiredLicenses();
    if (requiredLicenses === undefined) {
      return undefined;
    }
    var licenseFeatures/*:Array*/ = systemInfo.getLicenseFeatures();

    return requiredLicenses.filter(function (feature/*:String*/)/*:Boolean*/ {
      return licenseFeatures.indexOf(feature) === -1;
    });
  }/*

  private*/ function initLabel()/*:void*/ {
    this.getNotLicensedComponentsVE().addChangeListener(AS3.bind(this,"licenseChanged$JPku"));
    this.licenseChanged$JPku(this.getNotLicensedComponentsVE());
  }/*

  private*/ function licenseChanged(ve/*:ValueExpression*/)/*:void*/ {
    var html/*:String*/ = LicenseWarningBase.localizeLicense(ve.getValue());
    this.getLicenseField$JPku().setValue(html);
  }/*

  private*/ function getLicenseField()/*:IconDisplayField*/ {
    return AS3.as( this.getComponent(LicenseWarningBase.LICENSE_WARNING_FIELD_ITEMID),  com.coremedia.ui.components.IconDisplayField);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    if (this.notLicensedComponentsVE$JPku) {
      this.notLicensedComponentsVE$JPku.removeChangeListener(AS3.bind(this,"licenseChanged$JPku"));
    }
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: LicenseWarningBase$,
      super$JPku: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      notLicensedComponentsVE$JPku: null,
      getNotLicensedComponentsVE: getNotLicensedComponentsVE,
      isLicenseWarningVisibleVE: isLicenseWarningVisibleVE,
      missingRequiredLicenses$JPku: missingRequiredLicenses,
      initLabel$JPku: initLabel,
      licenseChanged$JPku: licenseChanged,
      getLicenseField$JPku: getLicenseField,
      onDestroy: onDestroy,
      statics: {
        LICENSE_WARNING_FIELD_ITEMID: "licenseWarningFieldItemId",
        localizeLicense: localizeLicense$static,
        getTitle: getTitle$static
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.LicenseNames_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
