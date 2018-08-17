Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreate", function(QuickCreate) {/*package com.coremedia.blueprint.base.components.quickcreate {
import com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory;
import com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;

/**
 * Used to apply additional content types, properties and editors to the quick create dialog.
 * /
public class QuickCreate {

  private static*/ var iconClassMap$static/*:Bean*/;/* =*/function iconClassMap$static_(){iconClassMap$static=( com.coremedia.ui.data.beanFactory.createLocalBean());};/*

  /**
   * Adds a property editor to the quick create dialog, shown if the dialog is shown for the given content type.
   * @param contentType The content type to apply the new editor for.
   * @param property The property to apply the editor value for.
   * @param editorFactory The factory method that created the editor widget of undefined if it is a standard property.
   * /
  public static*/ function addQuickCreateDialogProperty$static(contentType/*:String*/, property/*:String*/, editorFactory/*:Function = undefined*/, position/*:Number = undefined*/)/*:void*/ {
    com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory.addEditor(contentType, property, editorFactory, position);
  }/*


  /**
   * Adds a success handler for the given document type.
   * @param contentType The document type to add the handler for.
   * @param onSuccess The method to call after successful content creation.
   * /
  public static*/ function addSuccessHandler$static(contentType/*:String*/, onSuccess/*:Function*/)/*:void*/ {
    com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory.addSuccessHandler(contentType, onSuccess);
  }/*
}*/function QuickCreate$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: QuickCreate$,
      statics: {
        iconClassMap: undefined,
        addQuickCreateDialogProperty: addQuickCreateDialogProperty$static,
        addSuccessHandler: addSuccessHandler$static,
        __initStatics__: function() {
          iconClassMap$static_();
        }
      },
      requires: ["com.coremedia.ui.data.beanFactory"],
      uses: [
        "com.coremedia.blueprint.base.components.quickcreate.editors.QuickCreateEditorFactory",
        "com.coremedia.blueprint.base.components.quickcreate.processing.ProcessorFactory"
      ]
    };
});
