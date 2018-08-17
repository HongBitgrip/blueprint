Ext.define("com.coremedia.cms.editor.sdk.LocalesServiceImpl", function(LocalesServiceImpl) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cms.editor.sdk.util.LocaleUtil;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;

import ext.Ext;

/**
 * @inheritDoc
 * /
public class LocalesServiceImpl implements LocalesService {

  private var availableLocalesExpression:ValueExpression/*<Object>* /;

  private var contentPath:String;
  private var propertyPath:String;

  /**
   * @inheritDoc
   * /
  public*/ function init(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    AS3.cast(com.coremedia.ui.data.impl.BeanFactoryImpl,com.coremedia.cms.editor.sdk.editorContext.getBeanFactory()).registerRemoteObjectResolver("$Locale",AS3.bind( this,"resolve$ngXs"));
    var localExpression/*:ValueExpression*/ = this.getAvailableLocalesExpression();
    if (callback) {
      localExpression.loadValue(callback);
    }
  }/*

  private*/ function resolve(property/*:String*/, json/*:Object*/)/*:Locale*/ {
    var languageTag/*:String*/ = json[property];
    return this.getLocale(languageTag) || com.coremedia.ui.data.Locale.forLanguageTag(languageTag);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getAvailableLocalesExpression()/*:ValueExpression*//*<Object>*/ {
    if (!this.availableLocalesExpression$ngXs) {
      this.availableLocalesExpression$ngXs = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
      this.loadAvailableLocales$ngXs();
    }

    return this.availableLocalesExpression$ngXs;
  }/*

  private*/ function loadAvailableLocales()/*:void*/ {var this$=this;
    var contentRepository/*:ContentRepositoryImpl*/ =AS3.as( com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl);

    // fetch and inspect configuration
    this.contentPath$ngXs = contentRepository.getAvailableLocalesContentPath();
    this.propertyPath$ngXs = contentRepository.getAvailableLocalesPropertyPath();

    if(Ext.isEmpty(this.contentPath$ngXs) || Ext.isEmpty(this.propertyPath$ngXs)) {
      com.coremedia.ui.logging.Logger.warn('locale service configuration is empty');

      this.availableLocalesExpression$ngXs.setValue([]);
      return;
    }

    if (this.propertyPath$ngXs.indexOf("properties") !== 0) {
      this.propertyPath$ngXs = "properties." + this.propertyPath$ngXs;
    }

    contentRepository.getChild(this.contentPath$ngXs,
            function (child/*:Content*/, absolutePath/*:String = null*/, error/*:RemoteError = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:absolutePath=null;case 2:error=null;}
              this$.createPropertyPathExpression$ngXs(child, error);
            }
    );
  }/*

  private*/ function createPropertyPathExpression(content/*:Content*/, error/*:RemoteError*/)/*:void*/ {var this$=this;
    if (!this.checkArguments$ngXs(content, error)) {
      // no content -> null
      this.availableLocalesExpression$ngXs.setValue([]);
      return;
    }

    var propertyPathExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(this.propertyPath$ngXs, content);

    // add a change listener to propertyPathExpression that also fires when all beans in the path are loaded
    // and the value of the expression is still undefined
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(
            function ()/*:**/ {
              if (!propertyPathExpression.isLoaded()) {
                return undefined;
              }

              var value/*:**/ = propertyPathExpression.getValue();
              if (value === undefined) {
                // propertyPathExpression is loaded but still undefined -> there is no such property in the given content -> null
                com.coremedia.ui.logging.Logger.warn('LocalesService#createPropertyPathExpression - No property found in content ' + this$.contentPath$ngXs
                        + ' at property path ' + this$.propertyPath$ngXs);
                return null;
              } else {
                return value;
              }
            }
    ).addChangeListener(
            function (source/*:ValueExpression*/)/*:void*/ {
              var locales/*:Array*/ = source.getValue();
              if (!locales) {
                this$.availableLocalesExpression$ngXs.setValue(locales);

              } else {
                var map/*:Object*/ = {};

                for (var i/*:int*/ = 0; i < locales.length; i++) {
                  var languageTag/*:String*/ = locales[i];
                  map[languageTag] = undefined; // undefined for now; filled with Locale objects in #loadLocaleRepresentations
                }
                this$.availableLocalesExpression$ngXs.setValue(map);
                this$.loadLocaleRepresentations$ngXs();
              }
            }
    );

  }/*

  private*/ function checkArguments(child/*:Content*/, error/*:RemoteError*/)/*:Boolean*/ {
    if (error) {
      com.coremedia.ui.logging.Logger.warn('LocalesService - Error retrieving content at path ' + this.contentPath$ngXs + ' : ' + error);
    }
    if (!child) {
      com.coremedia.ui.logging.Logger.error('LocalesService - Could not find content at path ' + this.contentPath$ngXs);
      return false;
    }

    return true;
  }/*

  private*/ function loadLocaleRepresentations()/*:void*/ {var this$=this;
    var locales/*:Object*/ = this.availableLocalesExpression$ngXs.getValue();
    var targetLocale/*:String*/ = com.coremedia.cms.editor.sdk.util.LocaleUtil.getLocale();

    if (!locales || !targetLocale) {
      return;
    }

    var languageTags/*:Array*/ = [];
    for (var tag/*:String*/ in locales) {
      if (locales.hasOwnProperty(tag)) {
        languageTags.push(tag);
      }
    }

    new com.coremedia.ui.data.impl.RemoteServiceMethod('locales', 'POST', true, false, null, true).request(
            {
              'locales': languageTags,
              'targetLocale': targetLocale
            },

            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var result/*:Object*/ = {};

              var responseJSON/*:Object*/ = (response.getResponseJSON());
              for (var languageTag/*:String*/ in  responseJSON) {
                if (responseJSON.hasOwnProperty(languageTag)) {
                  result[languageTag] = responseJSON[languageTag];
                }
              }

              this$.availableLocalesExpression$ngXs.setValue(result);
            },

            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              com.coremedia.ui.logging.Logger.warn('LocalesService - Could not get locales');
            }

    );
  }/*

  public*/ function getLocale(languageTag/*:String*/)/*:Locale*/ {
    var availableLocales/*:**/ = this.getAvailableLocalesExpression().getValue();
    if (availableLocales === undefined) {
      return undefined;
    }
    return availableLocales[languageTag] || null;
  }/*
}*/function LocalesServiceImpl$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.LocalesService"],
      availableLocalesExpression$ngXs: null,
      contentPath$ngXs: null,
      propertyPath$ngXs: null,
      init: init,
      resolve$ngXs: resolve,
      getAvailableLocalesExpression: getAvailableLocalesExpression,
      loadAvailableLocales$ngXs: loadAvailableLocales,
      createPropertyPathExpression$ngXs: createPropertyPathExpression,
      checkArguments$ngXs: checkArguments,
      loadLocaleRepresentations$ngXs: loadLocaleRepresentations,
      getLocale: getLocale,
      constructor: LocalesServiceImpl$,
      requires: [
        "Ext",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.sdk.LocalesService",
        "com.coremedia.ui.data.Locale",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.LocaleUtil"
      ]
    };
});
