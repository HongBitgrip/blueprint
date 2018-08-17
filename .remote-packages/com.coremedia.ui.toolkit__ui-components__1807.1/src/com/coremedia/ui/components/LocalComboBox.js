Ext.define("com.coremedia.ui.components.LocalComboBox", function(LocalComboBox) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 <p>
 A combo box that is pre-configured for use in CoreMedia Studio.
 Deriving from this class ensures that a combo box behaves
 essentially like all other combo boxes of Studio.
 </p>
 <ul>
 <li>Changes to the combo box are propagated as change events immediately.</li>
 <li>Clicking into the combo box opens the drop-down immediately.</li>
 <li>The text field is editable.</li>
 <li>
 Once a valid value has been set, it become impossible to return
 to an invalid empty value.
 </li>
 <li>List filters are reset when the field blurs.</li>
 <li>Pressing the tab key stores the currently proposed value, if any.</li>
 <li>
 Moving left and right in the field using the cursor keys is possible even if the
 combo box is nested in a menu.
 </li>
 <li>
 Contrary to the default behavior of Ext JS, the attribute
 <code>forceSelection</code> defaults to <code>true</code>.
 Set this attribute to <code>false</code> if needed.
 </li>
 </ul>
 <p>
 Subclasses must still take care of binding the value
 to the model and providing a store or using the bindListPlugin.
 Subclasses can set editable='false' if they are sure that
 the set of options is small and filtering would not be helpful.
 </p>

 * /
public class LocalComboBox extends LocalComboBoxBase{

    public static const xtype:String = "com.coremedia.ui.config.localComboBox";

    /**
     * The mode for filtering the available entries so that the remaining entries
     * must start with the typed string.
     * /
    public static const FILTER_MODE_PREFIX:String = "prefix";

    /**
     * The CSS class to attach to rendered combo box items in the combo box template
     * /
    public static const COMBO_BOX_TPL_ITEM_CLASS:String = "x-boundlist-item";

    public*/function LocalComboBox$(config/*:LocalComboBox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.LocalComboBoxBase*/ =AS3.cast(com.coremedia.ui.components.LocalComboBoxBase,{});
    var defaults_$1/*:LocalComboBox*/ =AS3.cast(LocalComboBox,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.queryMode = "local";
    config_$1.triggerAction = "all";
    config_$1["ariaRole"] = "combobox";
    config_$1.forceSelection = true;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jn6K(config_$1);
  }/*

    /**
     Whether to encode the display field for HTML before rendering its value
     into the drop-down menu.
     Ignored if the <code>tpl</code> property is set.
     Defaults to false.
     * /
    [Bindable]
    public var encodeItems:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBoxBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.localComboBox",
      constructor: LocalComboBox$,
      super$jn6K: function() {
        com.coremedia.ui.components.LocalComboBoxBase.prototype.constructor.apply(this, arguments);
      },
      config: {encodeItems: false},
      statics: {
        FILTER_MODE_PREFIX: "prefix",
        COMBO_BOX_TPL_ITEM_CLASS: "x-boundlist-item"
      },
      requires: [
        "com.coremedia.ui.components.LocalComboBoxBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
