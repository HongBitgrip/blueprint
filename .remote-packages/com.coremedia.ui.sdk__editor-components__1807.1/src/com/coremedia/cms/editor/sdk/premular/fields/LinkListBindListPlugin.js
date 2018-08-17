Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPlugin", function(LinkListBindListPlugin) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.store.DataField;
/**

 A variant of the bind list plugin that defines default data fields for link list items.
 Additional data fields can be added using <code>additionalFields</code>.

 * /
public class LinkListBindListPlugin extends LinkListBindListPluginBase{

    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

    import mx.resources.ResourceManager;

    public*/function LinkListBindListPlugin$(config/*:LinkListBindListPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase,{});
    var defaults_$1/*:LinkListBindListPlugin*/ =AS3.cast(LinkListBindListPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_DataField_36_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_36_5_$1.name = "thumbnailUrl";
    ui_DataField_36_5_$1.mapping = "";
    ui_DataField_36_5_$1.ifUnreadable = "";
    var ui_DataField_39_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_39_5_$1.name = "type";
    ui_DataField_39_5_$1.mapping = "type.name";
    ui_DataField_39_5_$1.ifError = "";
    ui_DataField_39_5_$1.ifUnreadable = "";
    ui_DataField_39_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    var ui_DataField_44_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_44_5_$1.name = "typeCls";
    ui_DataField_44_5_$1.mapping = "type";
    ui_DataField_44_5_$1.ifError = "";
    ui_DataField_44_5_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    ui_DataField_44_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    var ui_DataField_49_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_49_5_$1.name = "name";
    ui_DataField_49_5_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    ui_DataField_49_5_$1.ifError = "";
    ui_DataField_49_5_$1.sortType = function(s/*:String*/)/*:String*/{return s.toLowerCase();};
    var ui_DataField_53_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_53_5_$1.name = "status";
    ui_DataField_53_5_$1.ifUnreadable = "";
    ui_DataField_53_5_$1.ifError = "";
    ui_DataField_53_5_$1.mapping = "";
    ui_DataField_53_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus;
    var ui_DataField_58_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_58_5_$1.name = "editor";
    ui_DataField_58_5_$1.ifUnreadable = "";
    ui_DataField_58_5_$1.ifError = "";
    ui_DataField_58_5_$1.mapping = "editor.name";
    AS3.setBindable(config_$1,"fields" , [ui_DataField_36_5_$1, ui_DataField_39_5_$1, ui_DataField_44_5_$1, ui_DataField_49_5_$1, ui_DataField_53_5_$1, ui_DataField_58_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wOUP(config_$1);
  }/*

    /**
     The data fields to be added to the store underlying the link list grid view..
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var additionalFields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase",
      constructor: LinkListBindListPlugin$,
      super$wOUP: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {additionalFields: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListBindListPluginBase",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
