Ext.define("com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory", function(QuickCreateEditorFactory) {/*package com.coremedia.blueprint.base.components.quickcreate.editors {

import com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.foldercombo.FolderCombo;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.event.Event;

import mx.resources.IResourceBundle;
import mx.resources.ResourceManager;

/**
 * The editor registry, defines which editors to create depending on the name of the property.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreate')]
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings')]
[ResourceBundle('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo')]
public class QuickCreateEditorFactory {
  internal static const NAME:String = 'createContentNameField';
  private static*/ var editorRegistry$static/*:Bean*/;/* =*/function editorRegistry$static_(){editorRegistry$static=( com.coremedia.ui.data.beanFactory.createLocalBean());};/*

  private static const*/var TEXT_EDITOR_BUFFER_TIME_MILLIS$static/*:int*/ = 10;/*

  /**
   * Creates a new property editor for the given property name.
   * The creation order works in the following order:
   * - find editor for custom properties
   * - find editor in editorRegistry
   * - try to create default editor depending on the type of the property.
   * @param propertyName The name of the property to create the editor for.
   * @param data The data the user input will be stored into.
   * @param callback The callback the created editor is passed to.
   * @param bindTo Used if the dialog is called from a link list
   * /
  public static*/ function createEditor$static(bindTo/*:ValueExpression*/, propertyName/*:String*/, data/*:ProcessingData*/, callback/*:Function*/, enterPressed/*:Function*/)/*:void*/ {
    var contentTypeName/*:String*/ = data.getContentType().getName();

    //i18n of label and empty text
    var editorLabel/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedString(contentTypeName, propertyName, com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.LABEL);
    var emptyTextLabel/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedString(contentTypeName, propertyName, com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.EMPTY_TEXT);
    var properties/*:Object*/ = {propertyName: propertyName, label: editorLabel, model: data, emptyText: emptyTextLabel, bindTo: bindTo};

    //some editors work site depending, so pass the VE as default
    properties.siteExpression = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.SITE_PROPERTY, data);

    if (propertyName == com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.NAME_PROPERTY) {
      var textEditorConfig/*:TextEditor*/ = AS3.cast(com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor,properties);
      AS3.setBindable(textEditorConfig,"label" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'name_label'));
      AS3.setBindable(textEditorConfig,"emptyText" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'name_empty_text'));
      textEditorConfig.itemId = QuickCreateEditorFactory.NAME;
      textEditorConfig.allowBlank = false;
      textEditorConfig.checkChangeBuffer = TEXT_EDITOR_BUFFER_TIME_MILLIS$static;
      addEnterListener$static(textEditorConfig, enterPressed);
      var nameEditor/*:TextEditor*/ = new com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor(textEditorConfig);
      callback.call(null, nameEditor, propertyName);
    }
    else if (propertyName == com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.FOLDER_PROPERTY) {
      var folderVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(propertyName, data);
      var homeFolderExpression/*:ValueExpression*/ = getHomeFolderExpression$static(contentTypeName, bindTo);
      var folderComboConfig/*:FolderCombo*/ = AS3.cast(com.coremedia.cms.editor.sdk.foldercombo.FolderCombo,properties);
      AS3.setBindable(folderComboConfig,"emptyText" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo', 'FolderCombo_emptyText'));
      AS3.setBindable(folderComboConfig,"contentType" , contentTypeName);
      AS3.setBindable(folderComboConfig,"folderPathsExpression" , homeFolderExpression);
      AS3.setBindable(folderComboConfig,"bindTo" , folderVE);
      folderComboConfig.allowBlank = false;
      var fc/*:FolderCombo*/ = new com.coremedia.cms.editor.sdk.foldercombo.FolderCombo(folderComboConfig);
      callback.call(null, fc, propertyName);
    }
    else if (isTextProperty$static(data) && !isCustomEditor$static(contentTypeName, propertyName)) {
      var config/*:TextEditor*/ = AS3.cast(com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor,properties);
      config.checkChangeBuffer = TEXT_EDITOR_BUFFER_TIME_MILLIS$static;
      addEnterListener$static(config, enterPressed);
      callback.call(null, new com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor(config), propertyName);
    }
    else if (isCustomEditor$static(contentTypeName, propertyName)) {
      var factory/*:Function*/ = editorRegistry$static.get(contentTypeName + '_' + propertyName) || editorRegistry$static.get(propertyName);
      var editor/*:Component*/ =AS3.as( factory.call(null, data, properties, enterPressed),  Ext.Component);
      callback.call(null, editor, propertyName);
    }
    else {
      throw AS3.cast(AS3.Error,'No property editor found for dialog property "' + propertyName + "', " +
              "maybe the property does not exists or it's type is not supported yet.");
    }
  }/*

  private static*/ function addEnterListener$static(config/*:Object*/, enterPressed/*:Function*/)/*:void*/ {
    config.listeners = {specialkey: function (component/*:Component*/, e/*:Event*/)/*:void*/ {
      if (e.getKey() == Ext.event.Event.ENTER) {
        e.stopEvent();
        component.el.blur();
        com.coremedia.ui.util.EventUtil.invokeLater(enterPressed);
      }
    }};
  }/*


  /**
   * Get the default home folder for the given content type.
   * To that end, first a site is determined: If bindTo evaluates to content, the root folder of the
   * site this content belongs to is used, otherwise, the preferred site is used.
   * If a setting bundle named "Content Creation" is available for the thusly determined site, and a setting
   * named paths.<content_type_name> is available and points to a folder, this folder is used as the default
   * root folder.
   *
   * If no such setting is found by the logic above, a bundle property named <content_type_name>_home_folder is
   * checked.
   *
   * If no such bundle property exists either, the site's root folder is taken.
   *
   * If no site could be determined (because neither bindTo evaluated to some content nor a preferred site was
   * chosen by the user), null is returned.
   *
   * @return an expression evaluating to and array of path strings, or null.
   * /
  private static*/ function getHomeFolderExpression$static(contentTypeName/*:String*/, bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function (name/*:String*/, bindTo/*:ValueExpression*/)/*:Array*/ {
      var site/*:Site*/;

      if (bindTo) {
        var content/*:Content*/ =AS3.as( bindTo.getValue(),  com.coremedia.cap.content.Content);
        if (content) {
          site = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
        }
      }

      if (!site) {
        site = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
      }
      
      if (!site || !site.getSiteRootFolder()) {
        return undefined;
      }

      //TODO mfa use StudioConfigurationUtil again after moved to bp-base
      var contentCreationSettings = site.getSiteRootFolder().getChild("Options/Settings/Content Creation");
      if (contentCreationSettings) {
        if (!contentCreationSettings.isLoaded()) {
          contentCreationSettings.load();
          return undefined;
        }

        var configurationStruct/*:**/ = contentCreationSettings.getProperties().get("settings");
        if (configurationStruct && !configurationStruct.isLoaded()) {
          configurationStruct.load();
          return undefined;
        }

        var pathsStruct/*:**/ = configurationStruct.get("paths");
        if (pathsStruct && pathsStruct.get(contentTypeName)) {
          var pathContent/*:Content*/ = pathsStruct.get(contentTypeName);
          if (!pathContent.isLoaded()) {
            pathContent.load();
            return undefined;
          }
          return [pathContent.getPath()];
        }
      }

      var docTypeDefault/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', contentTypeName + '_home_folder');
      if (docTypeDefault) {
        if (docTypeDefault.indexOf('/') === 0) {
          return [docTypeDefault];
        }
        if (site) {
          return [site.getSiteRootFolder().getPath() + '/' + docTypeDefault];
        }
      }

      if (site) {
        return [site.getSiteRootFolder().getPath()];
      }

      return null;

    }, contentTypeName, bindTo);
  }/*

  /**
   * Checks if a custom editor is defined for the given name and the given content type.
   * @param contentType
   * @param propertyName
   * @return
   * /
  private static*/ function isCustomEditor$static(contentType/*:String*/, propertyName/*:String*/)/*:Boolean*/ {
    var key/*:String*/ = contentType + '_' + propertyName;
    if (editorRegistry$static.get(key) || editorRegistry$static.get(propertyName)) {
      return true;
    }
    return false;
  }/*

  /**
   * Checks if the given property name is a text property.
   * @param data The current user input.
   * @return
   * /
  private static*/ function isTextProperty$static(data/*:ProcessingData*/)/*:Boolean*/ {
    var descriptors/*:Array*/ = data.getContentType().getDescriptors();
    for (var i/*:int*/ = 0; i < descriptors.length; i++) {
      var desc/*:Object*/ = descriptors[i];
      if (desc.type === com.coremedia.cap.common.CapPropertyDescriptorType.STRING) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Adds an editor factory call method to the editor factory.
   * @param contentType The name of the content type the editor property is for.
   * @param property The name of the property to create the editor for.
   * @param factoryMethod The method that returns a property editor.
   * @param position the position of the editor in the dialog with respect to the items that come from the setting properties.
   * /
  public static*/ function addEditor$static(contentType/*:String*/, property/*:String*/, factoryMethod/*:Function = undefined*/, position/*:Number = undefined*/)/*:void*/ {
    var bundle/*:IResourceBundle*/ = mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings');
    if (!mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'item_' + contentType)) {
      bundle.content['item_' + contentType] = property;
    }
    else {
      var properties/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'item_' + contentType);
      var propertiesArray/*:Array*/ = properties.split(",");
      if (propertiesArray.indexOf(property)>=0) {
        // already contained the property
        return;
      }
      if (position === undefined || position < 0) {
        position = propertiesArray.length-1;
      }
      propertiesArray.splice(position, 0, property);
      bundle.content['item_' + contentType] = propertiesArray.join(",");
    }

    property = contentType + '_' + property;
    editorRegistry$static.set(property, factoryMethod);
  }/*
}*/function QuickCreateEditorFactory$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: QuickCreateEditorFactory$,
      statics: {
        NAME: 'createContentNameField',
        editorRegistry: undefined,
        createEditor: createEditor$static,
        addEditor: addEditor$static,
        __initStatics__: function() {
          editorRegistry$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.Component",
        "Ext.event.Event",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo_properties",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.quickcreate.editors.TextEditor",
        "com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData"
      ]
    };
});
