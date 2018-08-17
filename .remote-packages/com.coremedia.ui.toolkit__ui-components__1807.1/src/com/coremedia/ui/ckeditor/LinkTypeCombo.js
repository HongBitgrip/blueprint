Ext.define("com.coremedia.ui.ckeditor.LinkTypeCombo", function(LinkTypeCombo) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.components.LocalComboBox;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class LinkTypeCombo extends LocalComboBox{

    public static const xtype:String = "com.coremedia.ui.config.linkTypeCombo";

    public*/function LinkTypeCombo$(config/*:LinkTypeCombo = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    var defaults_$1/*:LinkTypeCombo*/ =AS3.cast(LinkTypeCombo,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.name = "target.type";
    AS3.setBindable(config_$1,"encodeItems" , true);
    AS3.setBindable(config_$1,"store" , [
                               ['new',this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'target_new')],
                               ['replace',this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'target_replace')],
                               ['embed',this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'target_embed')],
                               ['other',this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'target_other')]
                             ]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XtB5(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      alias: "widget.com.coremedia.ui.config.linkTypeCombo",
      constructor: LinkTypeCombo$,
      super$XtB5: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "net.jangaroo.ext.Exml"
      ]
    };
});
