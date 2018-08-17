Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPlugin", function(ListViewBindListPlugin) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.collectionview.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.store.DataField;
/**

 A variant of the bind list plugin that adds data fields configured in
 <code>editorContext.getListViewDataFields()</code> to the given fields. The fields
 in the config object should be considered standard fields that are
 always present.

 * /
public class ListViewBindListPlugin extends ListViewBindListPluginBase{

    import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;

    import mx.resources.ResourceManager;

    public*/function ListViewBindListPlugin$(config/*:ListViewBindListPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase,{});
    var defaults_$1/*:ListViewBindListPlugin*/ =AS3.cast(ListViewBindListPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"lazy" , AS3.getBindable(config,"lazy","DUMMY") || true);
    var ui_DataField_31_5_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_31_5_$1.name = "type";
    ui_DataField_31_5_$1.mapping = "type.name";
    ui_DataField_31_5_$1.ifError = "";
    ui_DataField_31_5_$1.ifUnreadable = "";
    ui_DataField_31_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    var ui_DataField_36_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_36_5_$1.name = "typeCls";
    ui_DataField_36_5_$1.mapping = "type";
    ui_DataField_36_5_$1.ifError = "";
    ui_DataField_36_5_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    ui_DataField_36_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType;
    var ui_DataField_41_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_41_5_$1.name = "name";
    ui_DataField_41_5_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    ui_DataField_41_5_$1.encode = true;
    ui_DataField_41_5_$1.ifError = "";
    ui_DataField_41_5_$1.sortType = function(s/*:String*/)/*:String*/{return s?s.toLowerCase():s;};
    var ui_DataField_46_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_46_5_$1.name = "nameClass";
    ui_DataField_46_5_$1.ifUnreadable = "";
    ui_DataField_46_5_$1.ifError = "";
    ui_DataField_46_5_$1.mapping = "";
    ui_DataField_46_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.AccessControlUtil.calculateCSSClasses;
    var ui_DataField_51_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_51_5_$1.name = "creationDate";
    ui_DataField_51_5_$1.ifUnreadable = "";
    ui_DataField_51_5_$1.ifError = "";
    var ui_DataField_54_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_54_5_$1.name = "status";
    ui_DataField_54_5_$1.ifUnreadable = "";
    ui_DataField_54_5_$1.ifError = "";
    ui_DataField_54_5_$1.mapping = "";
    ui_DataField_54_5_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus;
    var ui_DataField_59_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_59_5_$1.name = "editor";
    ui_DataField_59_5_$1.ifUnreadable = "";
    ui_DataField_59_5_$1.ifError = "";
    ui_DataField_59_5_$1.mapping = "editor.name";
    var ui_DataField_63_5_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_63_5_$1.name = "freshness";
    ui_DataField_63_5_$1.ifUnreadable = "";
    ui_DataField_63_5_$1.ifError = "";
    ui_DataField_63_5_$1.mapping = "modificationDate";
    AS3.setBindable(config_$1,"fields" , [ui_DataField_31_5_$1, ui_DataField_36_5_$1, ui_DataField_41_5_$1, ui_DataField_46_5_$1, ui_DataField_51_5_$1, ui_DataField_54_5_$1, ui_DataField_59_5_$1, ui_DataField_63_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$jD8G(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase",
      constructor: ListViewBindListPlugin$,
      super$jD8G: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.list.ListViewBindListPluginBase",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
