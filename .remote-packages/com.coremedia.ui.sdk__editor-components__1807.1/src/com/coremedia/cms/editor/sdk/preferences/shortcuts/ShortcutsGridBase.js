Ext.define("com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGridBase", function(ShortcutsGridBase) {/*package com.coremedia.cms.editor.sdk.preferences.shortcuts {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.store.BeanRecord;

import ext.Ext;
import ext.event.Event;
import ext.grid.GridPanel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.shortcuts.Shortcut')]
[ResourceBundle('com.coremedia.cms.editor.sdk.shortcuts.ShortcutLocalization')]
public class ShortcutsGridBase extends GridPanel {

  public*/ function ShortcutsGridBase$(config/*:ShortcutsGridBase = null*/) {if(arguments.length<=0)config=null;
    this.super$XJcp(config);
  }/*

  //noinspection JSUnusedLocalSymbols
  /**
   * Renders the HTML of the shortcut command.
   * For i18n and OS dependencies we have to convert some values.
   * /
  internal static*/ function shortcutCommandColRenderer$static(value/*:**/, metaData/*:**/, record/*:BeanRecord*/)/*:String*/ {
    var descriptor/*:Object*/ = record.getBean().get(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid.COMMAND_COLUMN);

    var html/*:Array*/ = [];
    if (descriptor.keyCode) {
      var modifierGlyphs/*:Object*/ = Ext.event.Event['modifierGlyphs'];
      if (descriptor.ctrlKey) {
        html.push(Ext.isMac ? modifierGlyphs.ctrlKey : localizeKey$static(Ext.event.Event.CTRL));
      }
      if (descriptor.altKey) {
        html.push(Ext.isMac ? modifierGlyphs.altKey : localizeKey$static(Ext.event.Event.ALT));
      }
      if (descriptor.metaKey) {
        html.push(modifierGlyphs.metaKey);
      }
      if (descriptor.shiftKey) {
        html.push(modifierGlyphs.shiftKey);
      }
      var key/*:String*/ = localizeKey$static(descriptor.keyCode);
      html.push("<kbd title=\"" + key + "\">" + key + "</kbd>");
    }
    return html.join(Ext.isMac ? "" : "<span>&nbsp;&#43;&nbsp;</span>");
  }/*

  private static const*/var SHORTCUT_LOCALIZATION$static/*:Object*/;/* =*/function SHORTCUT_LOCALIZATION$static_(){SHORTCUT_LOCALIZATION$static=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, "com.coremedia.cms.editor.sdk.shortcuts.ShortcutLocalization").content);};/*

  /**
   * Compute localized string representation of the given keyCode.
   * @param keyCode integer or Event constant name
   * @return string representation of the key
   * /
  private static*/ function localizeKey$static(keyCode/*:**/)/*:String*/ {
    // try with the numeric value first:
    var value/*:String*/ = SHORTCUT_LOCALIZATION$static[keyCode];
    if (!value &&AS3.is( keyCode,  AS3.int_)) {
      // now try with the constant name:
      keyCode = Ext.event.Event['prototype'].keyCodes[keyCode];
      value = SHORTCUT_LOCALIZATION$static[keyCode];
    }
    return value || String(keyCode);
  }/*

  /**
   * Creates the bean record for the bind list plugin.
   * We create the data entries using the shortcut properties file which
   * contains also the description of the shortcuts and additional ExtJS standard shortcuts.
   * @return the array with bean records.
   * /
  internal static*/ function getShortCuts$static()/*:Array*/ {
    var result/*:Array*/ = [];
    var keyMap/*:Object*/ = AS3.getBindable(com.coremedia.cms.editor.sdk.editorContext.getKeyboardShortcutManager(),"keyMap","DUMMY");
    for (var keyDescriptor/*:String*/ in keyMap) {
      var handlerDescriptor/*:Object*/ = keyMap[keyDescriptor] && keyMap[keyDescriptor][0];
      if (!handlerDescriptor) {
        continue;
      }
      var description/*:String*/ = handlerDescriptor.description;
      if (description) {
        //create record
        var entry/*:Bean*/ = com.coremedia.ui.data.beanFactory.createLocalBean();
        entry.set(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid.COMMAND_COLUMN, handlerDescriptor);
        entry.set(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid.DESCRIPTION_COLUMN, description);
        result.push(entry);
      }
    }
    result.sort(compareRecords$static);
    return result;
  }/*

  private static*/ function compareRecords$static(a/*:Bean*/, b/*:Bean*/)/*:int*/ {
    var handlerDescriptorA/*:**/ = a.get(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid.COMMAND_COLUMN);
    var handlerDescriptorB/*:**/ = b.get(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid.COMMAND_COLUMN);
    var modifierDiff/*:int*/ = 
            AS3.int_(handlerDescriptorA.ctrlKey) - AS3.int_(handlerDescriptorB.ctrlKey) +
            2*(AS3.int_(handlerDescriptorA.altKey) - AS3.int_(handlerDescriptorB.altKey)) +
            4*(AS3.int_(handlerDescriptorA.metaKey) - AS3.int_(handlerDescriptorB.metaKey));
      return modifierDiff ||
              handlerDescriptorA.keyCode - handlerDescriptorB.keyCode ||
              AS3.int_(handlerDescriptorA.shiftKey) - AS3.int_(handlerDescriptorB.shiftKey);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      constructor: ShortcutsGridBase$,
      super$XJcp: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      statics: {
        shortcutCommandColRenderer: shortcutCommandColRenderer$static,
        SHORTCUT_LOCALIZATION: undefined,
        getShortCuts: getShortCuts$static,
        __initStatics__: function() {
          SHORTCUT_LOCALIZATION$static_();
        }
      },
      requires: [
        "AS3.int_",
        "Ext",
        "Ext.event.Event",
        "Ext.grid.Panel",
        "com.coremedia.cms.editor.sdk.shortcuts.ShortcutLocalization_properties",
        "com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties",
        "com.coremedia.ui.data.beanFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid"
      ]
    };
});
