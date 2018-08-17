Ext.define("com.coremedia.personalization.ui.plugin.ActivateTestContextOnSelectPlugin", function(ActivateTestContextOnSelectPlugin) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.preview.PreviewPanelBase;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.util.IdUtil;

import ext.Component;
import ext.Plugin;
import ext.form.field.ComboBox;

/**
 * A plugin that uses the current selection of a {@link ext.form.field.ComboBox} to fill in the test-context parameters
 * of the preview panel. Assumes that the values of the ComboBox are CoreMedia Content IDs and that
 * the ComboBox into which it is installed is located in a {@link PreviewPanel}.
 *
 * This plugin is used to implement the {@link PersonaSelector}.
 * /
internal class ActivateTestContextOnSelectPlugin implements Plugin {
  /**
   * @ptype activatetestcontextonselect
   * /

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;/*
    const*/var box/*:ComboBox*/ =AS3.as( component,  Ext.form.field.ComboBox);
    if (!box) {
      throw AS3.cast(AS3.Error,"plugin is applicable only to components of type ComboBox");
    }/*

    const*/var preview/*:PreviewPanelBase*/ =AS3.as( box.findParentByType(com.coremedia.cms.editor.sdk.preview.PreviewPanel.xtype),  com.coremedia.cms.editor.sdk.preview.PreviewPanelBase);
    if (!preview) {
      throw new AS3.Error("plugin can only be applied to a component that has a PreviewPanel as its parent");
    }

    box.addListener('select', function()/*:void*/ { this$.activateTestContext$rVht(box.getValue(), preview);});
    this.activateTestContext$rVht(box.getValue(), preview);
  }/*

  private*/ function activateTestContext(cmId/*:String*/, previewPanel/*:PreviewPanelBase*/)/*:void*/ {
    if (cmId) {/*
      const*/var params/*:Bean*/ = previewPanel.getUrlParameterBean();
      params.set('p13n_test', 'true');
      params.set('p13n_testcontext', com.coremedia.ui.util.IdUtil.parseContentId(cmId));
    }
  }/*
}*/function ActivateTestContextOnSelectPlugin$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      init: init,
      activateTestContext$rVht: activateTestContext,
      constructor: ActivateTestContextOnSelectPlugin$,
      requires: [
        "AS3.Error",
        "Ext.form.field.ComboBox",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.ui.util.IdUtil",
        "ext.Plugin"
      ]
    };
});
