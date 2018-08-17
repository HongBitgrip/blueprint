Ext.define("com.coremedia.personalization.ui.plugin.Activatetestcontextonselect", function(Activatetestcontextonselect) {/*package com.coremedia.personalization.ui.plugin{
import com.coremedia.personalization.ui.plugin.*;
/**
 A plugin that uses the current selection of a ComboBox to fill in the test-context parameters of the preview panel. Assumes that the values of the ComboBox are CoreMedia Content IDs and that the ComboBox into which it is installed is located in a PreviewPanel. This plugin is used to implement the PersonaSelector.
 * /
public class Activatetestcontextonselect extends ActivateTestContextOnSelectPlugin{

    public*/function Activatetestcontextonselect$(config/*:Activatetestcontextonselect = null*/){this.super$hLga();if(arguments.length<=0)config=null;
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.plugin.ActivateTestContextOnSelectPlugin",
      constructor: Activatetestcontextonselect$,
      super$hLga: function() {
        com.coremedia.personalization.ui.plugin.ActivateTestContextOnSelectPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.personalization.ui.plugin.ActivateTestContextOnSelectPlugin"]
    };
});
