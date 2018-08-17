Ext.define("com.coremedia.blueprint.base.components.pictures.PictureUtilsPlugin", function(PictureUtilsPlugin) {/*package com.coremedia.blueprint.base.components.pictures{
import com.coremedia.ui.plugins.NestedRulesPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.SearchToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import com.coremedia.ui.components.IconButton;
import com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction;
import ext.Component;
import com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu;
import ext.menu.Separator;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar;
import com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu;
import com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction;
import ext.toolbar.Separator;
import com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction;
public class PictureUtilsPlugin extends NestedRulesPlugin{

    import com.coremedia.cms.editor.sdk.collectionview.ICollectionView;
    private var selectionHolder:ICollectionView;

    // called by generated constructor code
    private*/ function __initialize__(config/*:PictureUtilsPlugin*/)/*:void*/ {
      this.selectionHolder$Y2Zp =AS3.as( AS3.getBindable(config,"cmp","DUMMY"),  com.coremedia.cms.editor.sdk.collectionview.ICollectionView);
    }/*

    public*/function PictureUtilsPlugin$(config/*:PictureUtilsPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$Y2Zp(config);
    var config_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var defaults_$1/*:PictureUtilsPlugin*/ =AS3.cast(PictureUtilsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SearchToolbar_28_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.SearchToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbar,{});
    var ui_AddItemsPlugin_30_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_32_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_32_13_$1.itemId = "createImageGallery";
    var bpb$components_OpenCreateImageGalleryWindowAction_34_17_$1/*:com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageGalleryWindowAction_34_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    ui_IconButton_32_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction(bpb$components_OpenCreateImageGalleryWindowAction_34_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_30_9_$1,"items" , [ui_IconButton_32_13_$1]);
    var component_40_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_40_13_$1.itemId = "saveSearch";
    AS3.setBindable(ui_AddItemsPlugin_30_9_$1,"after" , [component_40_13_$1]);
    editor_SearchToolbar_28_5_$1.plugins = [ui_AddItemsPlugin_30_9_$1];
    editor_SearchToolbar_28_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionSearchContextMenu_46_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    var ui_AddItemsPlugin_48_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuSeparator_50_13_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_51_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_13_$1.itemId = "createImageGallery";
    var bpb$components_OpenCreateImageGalleryWindowAction_53_17_$1/*: com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageGalleryWindowAction_53_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    menuItem_51_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction(bpb$components_OpenCreateImageGalleryWindowAction_53_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_48_9_$1,"items" , [menuSeparator_50_13_$1, menuItem_51_13_$1]);
    var component_59_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_59_13_$1.itemId = "openInTab";
    AS3.setBindable(ui_AddItemsPlugin_48_9_$1,"after" , [component_59_13_$1]);
    editor_CollectionSearchContextMenu_46_5_$1.plugins = [ui_AddItemsPlugin_48_9_$1];
    var editor_RepositoryToolbar_65_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar,{});
    var ui_AddItemsPlugin_67_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_69_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_69_13_$1.itemId = "createImageGallery";
    var bpb$components_OpenCreateImageGalleryWindowAction_71_17_$1/*: com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageGalleryWindowAction_71_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedItemsValueExpression());
    ui_IconButton_69_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction(bpb$components_OpenCreateImageGalleryWindowAction_71_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_67_9_$1,"items" , [ui_IconButton_69_13_$1]);
    var component_77_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_77_13_$1.itemId = "createDocument";
    AS3.setBindable(ui_AddItemsPlugin_67_9_$1,"after" , [component_77_13_$1]);
    editor_RepositoryToolbar_65_5_$1.plugins = [ui_AddItemsPlugin_67_9_$1];
    editor_RepositoryToolbar_65_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionRepositoryContextMenu_83_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var ui_AddItemsPlugin_85_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuSeparator_87_13_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_88_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_88_13_$1.itemId = "createImageGallery";
    var bpb$components_OpenCreateImageGalleryWindowAction_90_17_$1/*: com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageGalleryWindowAction_90_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedRepositoryItemsValueExpression());
    menuItem_88_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction(bpb$components_OpenCreateImageGalleryWindowAction_90_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_85_9_$1,"items" , [menuSeparator_87_13_$1, menuItem_88_13_$1]);
    var component_96_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_96_13_$1.itemId = "openInTab";
    AS3.setBindable(ui_AddItemsPlugin_85_9_$1,"after" , [component_96_13_$1]);
    editor_CollectionRepositoryContextMenu_83_5_$1.plugins = [ui_AddItemsPlugin_85_9_$1];
    var editor_CollectionRepositoryContextMenu_102_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var ui_AddItemsPlugin_104_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_106_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_106_13_$1.itemId = "createImageGallery";
    var bpb$components_OpenCreateImageGalleryWindowAction_108_17_$1/*: com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageGalleryWindowAction_108_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedRepositoryItemsValueExpression());
    menuItem_106_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction(bpb$components_OpenCreateImageGalleryWindowAction_108_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_104_9_$1,"items" , [menuItem_106_13_$1]);
    var component_114_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_114_13_$1.itemId = "openInTab";
    AS3.setBindable(ui_AddItemsPlugin_104_9_$1,"after" , [component_114_13_$1]);
    editor_CollectionRepositoryContextMenu_102_5_$1.plugins = [ui_AddItemsPlugin_104_9_$1];
    var editor_SearchToolbar_123_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbar,{});
    var ui_AddItemsPlugin_125_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_127_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_127_13_$1.itemId = "createImageMap";
    var bpb$components_OpenCreateImageMapWindowAction_129_17_$1/*:com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageMapWindowAction_129_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    ui_IconButton_127_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction(bpb$components_OpenCreateImageMapWindowAction_129_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_125_9_$1,"items" , [ui_IconButton_127_13_$1]);
    var component_135_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_135_13_$1.itemId = "createImageGallery";
    AS3.setBindable(ui_AddItemsPlugin_125_9_$1,"after" , [component_135_13_$1]);
    editor_SearchToolbar_123_5_$1.plugins = [ui_AddItemsPlugin_125_9_$1];
    editor_SearchToolbar_123_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionSearchContextMenu_141_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    var ui_AddItemsPlugin_143_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_145_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_145_13_$1.itemId = "createImageMap";
    var bpb$components_OpenCreateImageMapWindowAction_147_17_$1/*: com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageMapWindowAction_147_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    menuItem_145_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction(bpb$components_OpenCreateImageMapWindowAction_147_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_143_9_$1,"items" , [menuItem_145_13_$1]);
    var component_153_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_153_13_$1.itemId = "showInFolder";
    AS3.setBindable(ui_AddItemsPlugin_143_9_$1,"after" , [component_153_13_$1]);
    editor_CollectionSearchContextMenu_141_5_$1.plugins = [ui_AddItemsPlugin_143_9_$1];
    var editor_RepositoryToolbar_159_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar,{});
    var ui_AddItemsPlugin_161_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_163_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_163_13_$1.itemId = "createImageMap";
    var bpb$components_OpenCreateImageMapWindowAction_165_17_$1/*: com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageMapWindowAction_165_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedItemsValueExpression());
    ui_IconButton_163_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction(bpb$components_OpenCreateImageMapWindowAction_165_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_161_9_$1,"items" , [ui_IconButton_163_13_$1]);
    var component_171_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_171_13_$1.itemId = "createImageGallery";
    AS3.setBindable(ui_AddItemsPlugin_161_9_$1,"after" , [component_171_13_$1]);
    editor_RepositoryToolbar_159_5_$1.plugins = [ui_AddItemsPlugin_161_9_$1];
    editor_RepositoryToolbar_159_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionRepositoryContextMenu_177_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var ui_AddItemsPlugin_179_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_181_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_181_13_$1.itemId = "createImageMap";
    var bpb$components_OpenCreateImageMapWindowAction_183_17_$1/*: com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateImageMapWindowAction_183_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedRepositoryItemsValueExpression());
    menuItem_181_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction(bpb$components_OpenCreateImageMapWindowAction_183_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_179_9_$1,"items" , [menuItem_181_13_$1]);
    var component_189_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_189_13_$1.itemId = "openInTab";
    AS3.setBindable(ui_AddItemsPlugin_179_9_$1,"after" , [component_189_13_$1]);
    editor_CollectionRepositoryContextMenu_177_5_$1.plugins = [ui_AddItemsPlugin_179_9_$1];
    var editor_SearchToolbar_198_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.SearchToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbar,{});
    var ui_AddItemsPlugin_200_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var tbSeparator_202_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    var ui_IconButton_203_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_203_13_$1.itemId = "createSpinner";
    var bpb$components_OpenCreateSpinnerWindowAction_205_17_$1/*:com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateSpinnerWindowAction_205_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    ui_IconButton_203_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction(bpb$components_OpenCreateSpinnerWindowAction_205_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_200_9_$1,"items" , [tbSeparator_202_13_$1, ui_IconButton_203_13_$1]);
    var component_211_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_211_13_$1.itemId = "saveSearch";
    AS3.setBindable(ui_AddItemsPlugin_200_9_$1,"after" , [component_211_13_$1]);
    editor_SearchToolbar_198_5_$1.plugins = [ui_AddItemsPlugin_200_9_$1];
    editor_SearchToolbar_198_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionSearchContextMenu_217_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    var ui_AddItemsPlugin_219_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuSeparator_221_13_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_222_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_222_13_$1.itemId = "createSpinner";
    var bpb$components_OpenCreateSpinnerWindowAction_224_17_$1/*: com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateSpinnerWindowAction_224_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedSearchItemsValueExpression());
    menuItem_222_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction(bpb$components_OpenCreateSpinnerWindowAction_224_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_219_9_$1,"items" , [menuSeparator_221_13_$1, menuItem_222_13_$1]);
    var component_230_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_230_13_$1.itemId = "showInFolder";
    AS3.setBindable(ui_AddItemsPlugin_219_9_$1,"after" , [component_230_13_$1]);
    editor_CollectionSearchContextMenu_217_5_$1.plugins = [ui_AddItemsPlugin_219_9_$1];
    var editor_RepositoryToolbar_236_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar,{});
    var ui_AddItemsPlugin_238_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_240_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_240_13_$1.itemId = "createSpinner";
    var bpb$components_OpenCreateSpinnerWindowAction_242_17_$1/*: com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateSpinnerWindowAction_242_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedItemsValueExpression());
    ui_IconButton_240_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction(bpb$components_OpenCreateSpinnerWindowAction_242_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_238_9_$1,"items" , [ui_IconButton_240_13_$1]);
    var component_248_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_248_13_$1.itemId = "createDocument";
    AS3.setBindable(ui_AddItemsPlugin_238_9_$1,"after" , [component_248_13_$1]);
    editor_RepositoryToolbar_236_5_$1.plugins = [ui_AddItemsPlugin_238_9_$1];
    editor_RepositoryToolbar_236_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_CollectionRepositoryContextMenu_254_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var ui_AddItemsPlugin_256_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuSeparator_258_13_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_259_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_259_13_$1.itemId = "createSpinner";
    var bpb$components_OpenCreateSpinnerWindowAction_261_17_$1/*: com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction,{});
    AS3.setBindable(bpb$components_OpenCreateSpinnerWindowAction_261_17_$1,"contentValueExpression" , this.selectionHolder$Y2Zp.getSelectedRepositoryItemsValueExpression());
    menuItem_259_13_$1.baseAction = new com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction(bpb$components_OpenCreateSpinnerWindowAction_261_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_256_9_$1,"items" , [menuSeparator_258_13_$1, menuItem_259_13_$1]);
    var component_267_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_267_13_$1.itemId = "openInTab";
    AS3.setBindable(ui_AddItemsPlugin_256_9_$1,"after" , [component_267_13_$1]);
    editor_CollectionRepositoryContextMenu_254_5_$1.plugins = [ui_AddItemsPlugin_256_9_$1];
    config_$1.rules = [editor_SearchToolbar_28_5_$1, editor_CollectionSearchContextMenu_46_5_$1, editor_RepositoryToolbar_65_5_$1, editor_CollectionRepositoryContextMenu_83_5_$1, editor_CollectionRepositoryContextMenu_102_5_$1, editor_SearchToolbar_123_5_$1, editor_CollectionSearchContextMenu_141_5_$1, editor_RepositoryToolbar_159_5_$1, editor_CollectionRepositoryContextMenu_177_5_$1, editor_SearchToolbar_198_5_$1, editor_CollectionSearchContextMenu_217_5_$1, editor_RepositoryToolbar_236_5_$1, editor_CollectionRepositoryContextMenu_254_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Y2Zp(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.NestedRulesPlugin",
      selectionHolder$Y2Zp: null,
      __initialize__$Y2Zp: __initialize__,
      constructor: PictureUtilsPlugin$,
      super$Y2Zp: function() {
        com.coremedia.ui.plugins.NestedRulesPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "Ext.menu.Item",
        "Ext.menu.Separator",
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.ICollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar",
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.pictures.gallery.OpenCreateImageGalleryWindowAction",
        "com.coremedia.blueprint.base.components.pictures.imagemap.OpenCreateImageMapWindowAction",
        "com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction"
      ]
    };
});
