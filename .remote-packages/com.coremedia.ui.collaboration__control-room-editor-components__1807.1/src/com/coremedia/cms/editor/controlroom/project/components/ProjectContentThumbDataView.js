Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataView", function(ProjectContentThumbDataView) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import ext.data.field.DateDataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
public class ProjectContentThumbDataView extends ProjectContentThumbDataViewBase{

    import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.cms.editor.sdk.util.SiteUtil;
    import com.coremedia.ui.data.ValueExpression;

    import ext.LoadMask;

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentThumbDataView";

    public*/function ProjectContentThumbDataView$(config/*:ProjectContentThumbDataView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase,{});
    var defaults_$1/*:ProjectContentThumbDataView*/ =AS3.cast(ProjectContentThumbDataView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.multiSelect = true;
    config_$1.itemSelector =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.LIST_ELEMENT_ITEM.getCSSSelector());
    config_$1.deferEmptyText = false;
    config_$1.loadingText =net.jangaroo.ext.Exml.asString( Ext.LoadMask['prototype']['msg']);
    var ui_BindListPlugin_51_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_51_5_$1,"bindTo" , AS3.getBindable(config,"bindTo","DUMMY"));
    AS3.setBindable(ui_BindListPlugin_51_5_$1,"lazy" , false);
    AS3.setBindable(ui_BindListPlugin_51_5_$1,"initialViewLimit" , AS3.getBindable(config,"initialViewLimit"));
    AS3.setBindable(ui_BindListPlugin_51_5_$1,"viewLimitIncrement" , AS3.getBindable(config,"viewLimitIncrement"));
    var ui_DataField_56_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_56_9_$1.name = "name";
    ui_DataField_56_9_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    ui_DataField_56_9_$1.ifError = "";
    ui_DataField_56_9_$1.sortType = function(s/*:String*/)/*:String*/{return s?s.toLowerCase():s;};
    var ui_DataField_60_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_60_9_$1.name = "shortName";
    ui_DataField_60_9_$1.mapping = "name";
    ui_DataField_60_9_$1.ifError = "";
    ui_DataField_60_9_$1.ifUnreadable = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromBeanRecord;
    var ui_DataField_64_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_64_9_$1.name = "typeCls";
    ui_DataField_64_9_$1.mapping = "type.name";
    ui_DataField_64_9_$1.ifError = "";
    ui_DataField_64_9_$1.ifUnreadable = "";
    ui_DataField_64_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    var ui_DataField_69_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_69_9_$1.name = "docTypeClass";
    ui_DataField_69_9_$1.mapping = "type.name";
    ui_DataField_69_9_$1.ifError = "";
    ui_DataField_69_9_$1.ifUnreadable = mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
    ui_DataField_69_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentTypeName;
    var ui_DataField_74_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_74_9_$1.name = "imageUri";
    ui_DataField_74_9_$1.mapping = "type.name";
    ui_DataField_74_9_$1.ifError = "";
    ui_DataField_74_9_$1.ifUnreadable = "";
    ui_DataField_74_9_$1["convert"] = com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase.computeThumbnailImage;
    var ui_DataField_79_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_79_9_$1.name = "siteName";
    ui_DataField_79_9_$1.mapping = "";
    ui_DataField_79_9_$1.ifUnreadable = "";
    ui_DataField_79_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteNameFor;
    var ui_DataField_83_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_83_9_$1.name = "siteLocale";
    ui_DataField_83_9_$1.mapping = "";
    ui_DataField_83_9_$1.ifUnreadable = "";
    ui_DataField_83_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteLocaleNameFor;
    var data_DateField_88_9_$1/*:ext.data.field.DateDataField*/ =AS3.cast(Ext.data.field.Date,{});
    data_DateField_88_9_$1.name = "freshness";
    data_DateField_88_9_$1.mapping = "modificationDate";
    data_DateField_88_9_$1.dateFormat = "d.m.Y - G:i";
    var ui_DataField_92_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_92_13_$1.ifUnreadable = "";
    ui_DataField_92_13_$1.ifError = "";

    delete ui_DataField_92_13_$1['xtype'];
    delete ui_DataField_92_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(data_DateField_88_9_$1, ui_DataField_92_13_$1);
    var ui_DataField_96_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_96_9_$1.name = "creationDate";
    ui_DataField_96_9_$1.ifUnreadable = "";
    ui_DataField_96_9_$1.ifError = "";
    var ui_DataField_99_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_99_9_$1.name = "status";
    ui_DataField_99_9_$1.ifUnreadable = "";
    ui_DataField_99_9_$1.ifError = "";
    ui_DataField_99_9_$1.mapping = "";
    ui_DataField_99_9_$1["convert"] = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.getDetailedLifecycleStatus;
    var ui_DataField_104_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_104_9_$1.name = "editor";
    ui_DataField_104_9_$1.ifUnreadable = "";
    ui_DataField_104_9_$1.ifError = "";
    ui_DataField_104_9_$1.mapping = "editor.name";
    AS3.setBindable(ui_BindListPlugin_51_5_$1,"fields" , [ui_DataField_56_9_$1, ui_DataField_60_9_$1, ui_DataField_64_9_$1, ui_DataField_69_9_$1, ui_DataField_74_9_$1, ui_DataField_79_9_$1, ui_DataField_83_9_$1, data_DateField_88_9_$1, ui_DataField_96_9_$1, ui_DataField_99_9_$1, ui_DataField_104_9_$1]);
    var ui_BindSelectionPlugin_110_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_110_5_$1,"selectedValues" , AS3.getBindable(config,"selectedItemsValueExpression","DUMMY"));
    config_$1.plugins = [ui_BindListPlugin_51_5_$1, ui_BindSelectionPlugin_110_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$DWHU(config_$1);
  }/*

    /**

     The initial limit for the number of search results for to show initially.
     This avoids big and sluggish DOM rendering of empty rows or divs.
     When the user scrolls to the end of the list, the view limit is automatically incremented by the
     value given in config option &lt;code>viewLimitIncrement&lt;/code>.
     Default is to not limit the view.

     * /
    [Bindable]
    public var initialViewLimit:int;


    /**

     The maximum number of additional search results to show every time the user scrolls to the end of
     the list. Default is 100.
     @see #initialViewLimit

     * /
    [Bindable]
    public var viewLimitIncrement:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentThumbDataView",
      constructor: ProjectContentThumbDataView$,
      super$DWHU: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        initialViewLimit: 0,
        viewLimitIncrement: 0
      },
      requires: [
        "Ext.LoadMask",
        "Ext.data.field.Date",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentThumbDataViewBase",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase",
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.SiteUtil",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.store.DataField",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
