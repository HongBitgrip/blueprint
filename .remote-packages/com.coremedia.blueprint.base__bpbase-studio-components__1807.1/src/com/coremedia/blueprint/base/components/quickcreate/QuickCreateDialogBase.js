Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialogBase", function(QuickCreateDialogBase) {/*package com.coremedia.blueprint.base.components.quickcreate {

import com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory;
import com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData;
import com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory;
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.components.StatefulTextField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.ComponentQuery;
import ext.StringUtil;
import ext.form.field.BaseField;
import ext.form.field.Field;
import ext.panel.Panel;
import ext.window.Window;

/**
 * The base class of the quick create dialog creates all widgets for the
 * dialog, depending on the selected content type.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreate')]
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings')]
public class QuickCreateDialogBase extends StudioDialog {
  public static const OFFSET:int = 10;
  public static var DEFAULT_X:int = 120;
  public static var DEFAULT_Y:int = 110;

  public static const EDITOR_CONTAINER_ITEM_ID:String = "editorContainer";

  /**
   * The content type of the newly created content, optional if the content type name is set.
   * /
  [Bindable]
  public var contentTypeExpression:ValueExpression;

  /**
   * An optional callback that the Dialog will invoke when content creation was successfully completed.
   * Signature: function(createdContent:Content, data:ProcessingData, callback:Function):void
   * /
  [Bindable]
  public var onSuccess:Function;

  /**
   * If true the default initializers are skipped after content creation. Default is false. -->
   * /
  [Bindable]
  public var skipInitializers:Boolean;

  /**
   * Default properties to be used, allows to overwrite the name and folder properties (CSV format).
   * /
  [Bindable]
  public var defaultProperties:String;

  /**
   * If true, the newly created content will be appended to the end of the given linklist.
   * By default, this option is set to 'false' so that new content items will be inserted at the beginning.
   * /
  [Bindable]
  public var appendResultAtEnd:Boolean;

  /**
   * If true, the new content will be opened in a new tab. Default is true.
   * /
  [Bindable]
  public var openInTab:Boolean = true;

  /**
   * The content type of the content to create.
   * /
  [Bindable]
  public var contentType:String;

  /**
   * Contains the active content.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
   * but to override this or provide an initial value for link properties in Structs that are created by this
   * property field, you may specify a custom link type.
   * /
  [Bindable]
  public var linkType:String;

  /**
   * Optional model for which the dialog editors wil be created.
   * If not specified a model will be created internally.
   * /
  [Bindable]
  public var model:ProcessingData;

  /**
   * The content property name of the list to bind the newly created content to.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * Optional: if set to false the property editors will not be inherited from the super document types.
   * Default is true, i.e. the property editors are inherited.
   * /
  [Bindable]
  public var inheritEditors:Boolean = true;

  /**
   * The value expression contains default name that should be used for the dialog.
   * If undefined, the default new document name will be used.
   * /
  [Bindable]
  public var defaultNameExpression:ValueExpression;

  /**
   * Optional function for creating a custom model for each menu item. The method can be used to apply
   * default for some quick create properties without displaying a component for it.
   * Method signature: function(contentType:String, bindTo:ValueExpression)
   * /
  [Bindable]
  public var processingDataFactory:Function;

  /**
   * Optional ValueExpression of the original link list,
   * needed when the original link list is not a plain content array.
   * When passed, the configs for bindTo, linkType and propertyName are not needed.
   * /
  [Bindable]
  public var sourceLinkListVE:ValueExpression;

  private var disabledExpression:ValueExpression;
  private var editorRegistry:Array;

  public*/ function QuickCreateDialogBase$(config/*:QuickCreateDialogBase = null*/) {if(arguments.length<=0)config=null;
    this.editorRegistry$KFPH = [];
    if (!AS3.getBindable(config,"contentType")) {
      AS3.setBindable(config,"contentType" , AS3.getBindable(config,"contentTypeExpression").getValue());
    }
    if (!AS3.getBindable(config,"model")) {
      AS3.setBindable(config,"model" , new com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData());
    }
    if (!AS3.getBindable(config,"defaultProperties")) {
      AS3.setBindable(config,"defaultProperties" , this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'default_properties'));
    }
    positionWindow$static(config);
    this.super$KFPH(config);
    this.on("beforedestroy",AS3.bind( this,"cleanup$KFPH"));
  }/*

  private static*/ function positionWindow$static(config/*:Window*/)/*:void*/ {
    var typeString/*:String*/ = config.stateId;

    if (!AS3.getBindable(config,"x","DUMMY") || !AS3.getBindable(config,"y","DUMMY")) {
      AS3.setBindable(config,"x" , QuickCreateDialogBase.DEFAULT_X);
      AS3.setBindable(config,"y" , QuickCreateDialogBase.DEFAULT_Y);
    }

    var result/*:Array*/ = Ext.ComponentQuery.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialog.xtype).build());
    AS3.setBindable(config,"x" , AS3.getBindable(config,"x","DUMMY") + (result.length*QuickCreateDialogBase.OFFSET));
    AS3.setBindable(config,"y" , AS3.getBindable(config,"y","DUMMY") + (result.length*QuickCreateDialogBase.OFFSET));
  }/*

  /**
   * Init dialog
   * /
  override protected*/ function initComponent()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.initComponent.call(this);

    if(AS3.getBindable(this,"processingDataFactory")) {
      com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:ProcessingData*/ {
        return AS3.as( AS3.getBindable(this$,"processingDataFactory").call(null, AS3.getBindable(this$,"contentType"), AS3.getBindable(this$,"bindTo")),  com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData);
      }).loadValue(function(data/*:ProcessingData*/)/*:void*/ {
        AS3.setBindable(this$,"model" , data);
        this$.initUI$KFPH();
        // as initialization of the UI is delayed because the ValueExpression is evaluated asynchronously
        // the focus needs to be set to the QuickCreateDialog once again. It would be better to only show it when it
        // is ready but changing this might have a too big impact.
        this$.focus();
      });
    }
    else {
      this.initUI$KFPH();
    }
  }/*

  private*/ function initUI()/*:void*/ {var this$=this;
    AS3.getBindable(this,"model").addValueChangeListener(AS3.bind(this,"modelChangeListener$KFPH"));

    AS3.getBindable(this,"model").setContentType(AS3.getBindable(this,"contentType"));
    if (AS3.getBindable(this,"onSuccess")) {
      AS3.getBindable(this,"model").set(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.ON_SUCCESS, function(content/*:Content*/, data/*:ProcessingData*/, callback/*:Function*/)/*:void*/ {AS3.getBindable(this$,"onSuccess").call(null, content, data, callback); this$.destroy();});
    }
    if (AS3.getBindable(this,"skipInitializers") && AS3.getBindable(this,"skipInitializers") === true) {
      AS3.getBindable(this,"model").set(com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData.SKIP_INITIALIZERS, AS3.getBindable(this,"skipInitializers"));
    }

    /**
     * Add content type specific property editor.
     */
    var propertiesString/*:String*/ = AS3.getBindable(this,"defaultProperties");
    var additionalProperties/*:String*/ = this.resolvePropertiesForContentType$KFPH(AS3.getBindable(this,"inheritEditors"));
    if (additionalProperties) {
      if(propertiesString.length > 0) {
        propertiesString = propertiesString + "," + additionalProperties;
      }
      else {
        propertiesString = additionalProperties;
      }
    }
    var properties/*:Array*/ = propertiesString.split(',');

    var editContainer/*:Panel*/ =AS3.as( this.queryById(QuickCreateDialogBase.EDITOR_CONTAINER_ITEM_ID),  Ext.panel.Panel);
    for (var i/*:int*/ = 0; i < properties.length; i++) {
      com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory.createEditor(AS3.getBindable(this,"bindTo"), properties[i], AS3.getBindable(this,"model"), function (editor/*:Component*/, propertyName/*:String = null*/)/*:void*/ {if(arguments.length<=1)propertyName=null;
        this$.editorRegistry$KFPH.push(editor);
        if (editor) {
          editContainer.add(editor);
          if (AS3.is(editor,  Ext.form.field.Field)) {
            this$.mon(editor, "validitychange",AS3.bind( this$,"modelChangeListener$KFPH"));
          }
          if(propertyName) {
            var nameField/*:StatefulTextField*/ =AS3.as( this$.down(com.coremedia.ui.util.createComponentSelector().attr('name', propertyName).build()),  com.coremedia.ui.components.StatefulTextField);
            if (nameField) {
              if (AS3.getBindable(this$,"defaultNameExpression") && AS3.getBindable(this$,"defaultNameExpression").getValue()) {
                nameField.setValue(AS3.getBindable(this$,"defaultNameExpression").getValue());
                AS3.getBindable(this$,"model").setName(AS3.getBindable(this$,"defaultNameExpression").getValue());
              }
            }
          }
        }
      },AS3.bind( this,"enterPressed"));
    }
    this.modelChangeListener$KFPH();
  }/*

  /**
   * Recursive resolving of content properties so that super types
   * are also allowed for property definitions.
   * @return
   * /
  private*/ function resolvePropertiesForContentType(recursively/*:Boolean = true*/)/*:String*/ {if(arguments.length<=0)recursively=true;
    var ctTypes/*:Array*/ = [AS3.getBindable(this,"contentType")];
    if (recursively) {
      ctTypes = getContentTypeHierarchy$static(AS3.getBindable(this,"contentType"));
    }
    var properties/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < ctTypes.length; i++) {
      var prop/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'item_' + ctTypes[i]);
      if (prop && properties.indexOf(prop) === -1) {
        properties.push(prop);
      }
    }

    if (properties.length > 0) {
      return properties.join(',');
    }
    return undefined;
  }/*


  /**
   * Returns an array of all content types names that are part of the given content type hierarchy.
   * @param contentType the content type
   * @return an array of all content types names that are part of the given content type hierarchy
   * /
  private static*/ function getContentTypeHierarchy$static(contentType/*:String*/)/*:Array*/ {
    var ctTypes/*:Array*/ = [];
    ctTypes.push(contentType);
    var ctType/*:CapType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentType);
    while (ctType.getParent()) {
      var parent/*:CapType*/ = ctType.getParent();
      ctTypes.push(parent.getName());
      ctType = parent;
    }
    return ctTypes;
  }/*


  public*/ function enterPressed()/*:void*/ {
    if (!this.getDisabledExpression().getValue()) {
      this.handleSubmit();
    }
  }/*

  /**
   * Invokes the post processing and closes the dialog
   * /
  protected*/ function handleSubmit()/*:void*/ {var this$=this;
    com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory.process(AS3.getBindable(this,"model"), function (data/*:ProcessingData*/)/*:void*/ {
      var c/*:Content*/ = data.getContent();

      var sourceLinklist/*:ValueExpression*/;

      if (AS3.getBindable(this$,"sourceLinkListVE")) {
        sourceLinklist = AS3.getBindable(this$,"sourceLinkListVE");
      } else if (AS3.getBindable(this$,"bindTo") && AS3.getBindable(this$,"propertyName")) {
        sourceLinklist = com.coremedia.cms.editor.sdk.util.LinkListUtil.createLinkValueExpression(AS3.getBindable(this$,"bindTo"), AS3.getBindable(this$,"propertyName"), AS3.getBindable(this$,"linkType"), false);
      }
      if (sourceLinklist) {
        var oldValue/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(sourceLinklist.getValue());
        if (oldValue.indexOf(c) === -1) {
          if(AS3.getBindable(this$,"appendResultAtEnd")) {
            sourceLinklist.setValue(oldValue.concat(c));
          }
          else {
            var newValue/*:Array*/ = [];
            newValue.push(c);
            sourceLinklist.setValue(newValue.concat(oldValue));
          }
        }
      }

      //maybe there has been server side processing, so invalidate the content first
      c.invalidate(function ()/*:void*/ {
        var initializer/*:Function*/ = com.coremedia.cms.editor.sdk.editorContext.lookupContentInitializer(c.getType());
        if (initializer) {
          initializer(c);
        }

        if(AS3.getBindable(this$,"openInTab")) {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(c);
          this$.openAdditionalContent$KFPH(data);
        }
        this$.destroy();
      });
    });
  }/*

  private*/ function openAdditionalContent(data/*:ProcessingData*/)/*:void*/ {
    var additionalContent/*:Array*/ = data.getAdditionalContent();
    var reloadCount/*:int*/ = additionalContent.length;
    for (var i/*:int*/ = 0; i < additionalContent.length; i++) {
      var additional/*:Content*/ = additionalContent[i];
      //the same here: there may have been server side post processing, so invalidate the content.
      additional.invalidate(function ()/*:void*/ {
        reloadCount--;
        if (reloadCount === 0) {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocuments(additionalContent, true);
        }
      });
    }
  }/*

  private*/ function modelChangeListener()/*:void*/ {var this$=this;
    this.getDisabledExpression().setValue(false);
    //TODO: this is workaround to fix CMS-7492
    //Unfortunately the folderComboBox remains invalid until the underlying store is loaded and an item is selected
    //Just then the rawValue is set and #isValid returns true but it is too late for this listener
    com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
      for (var i/*:int*/ = 0; i < this$.editorRegistry$KFPH.length; i++) {
        var editor/*:BaseField*/ =AS3.as( this$.editorRegistry$KFPH[i],  Ext.form.field.Base);
        if (editor && !editor.destroyed) {
          var statefulEditor/*:IValidationStateMixin*/ =AS3.as( editor,  com.coremedia.ui.mixins.ValidationStateMixin);
          if (!editor.isValid()) {
            this$.getDisabledExpression().setValue(true);
            if (statefulEditor) {
              AS3.setBindable(statefulEditor,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
            }
          }
          else {
            if (statefulEditor) {
              AS3.setBindable(statefulEditor,"validationState" , undefined);
            }
          }
        }
      }
    });
  }/*


  private*/ function cleanup()/*:void*/ {
    AS3.getBindable(this,"model").removeValueChangeListener(AS3.bind(this,"modelChangeListener$KFPH"));
  }/*

  /**
   * Formats the title for the dialog depending on the content type.
   * @param ct The content type name.
   * @return
   * /
  protected*/ function createTitle(ct/*:String*/, contentTypeExpression/*:ValueExpression*/)/*:String*/ {
    var contentName/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(ct || contentTypeExpression.getValue());
    return Ext.String.format(this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreate', 'dialog_title'), contentName);
  }/*

  /**
   * Calculates if the mandatory input is given.
   * @return
   * /
  protected*/ function getDisabledExpression()/*:ValueExpression*/ {
    if (!this.disabledExpression$KFPH) {
      this.disabledExpression$KFPH = com.coremedia.ui.data.ValueExpressionFactory.create('disabled', com.coremedia.ui.data.beanFactory.createLocalBean());
      this.disabledExpression$KFPH.setValue(true);
    }
    return this.disabledExpression$KFPH;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      disabledExpression$KFPH: null,
      editorRegistry$KFPH: null,
      constructor: QuickCreateDialogBase$,
      super$KFPH: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      initUI$KFPH: initUI,
      resolvePropertiesForContentType$KFPH: resolvePropertiesForContentType,
      enterPressed: enterPressed,
      handleSubmit: handleSubmit,
      openAdditionalContent$KFPH: openAdditionalContent,
      modelChangeListener$KFPH: modelChangeListener,
      cleanup$KFPH: cleanup,
      createTitle: createTitle,
      getDisabledExpression: getDisabledExpression,
      config: {
        contentTypeExpression: null,
        onSuccess: null,
        skipInitializers: false,
        defaultProperties: null,
        appendResultAtEnd: false,
        openInTab: true,
        contentType: null,
        bindTo: null,
        linkType: null,
        model: null,
        propertyName: null,
        inheritEditors: true,
        defaultNameExpression: null,
        processingDataFactory: null,
        sourceLinkListVE: null
      },
      statics: {
        OFFSET: 10,
        DEFAULT_X: 120,
        DEFAULT_Y: 110,
        EDITOR_CONTAINER_ITEM_ID: "editorContainer"
      },
      requires: [
        "Ext.ComponentQuery",
        "Ext.String",
        "Ext.form.field.Base",
        "Ext.form.field.Field",
        "Ext.panel.Panel",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties",
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.ui.components.StatefulTextField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialog",
        "com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory",
        "com.coremedia.blueprint.base.components.quickcreate.processing.ProcessingData",
        "com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory"
      ]
    };
});
