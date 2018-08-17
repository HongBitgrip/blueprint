Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.AbstractListView", function(AbstractListView) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.collectionview.list.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone;
import com.coremedia.ui.plugins.BindSelectionPlugin;
public class AbstractListView extends AbstractListViewBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.abstractListView";

    public*/function AbstractListView$(config/*:AbstractListView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase,{});
    var defaults_$1/*:AbstractListView*/ =AS3.cast(AbstractListView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_LinkListViewDragZone_21_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone,{});
    AS3.setBindable(config_$1,"dragZoneCfg" , editor_LinkListViewDragZone_21_5_$1);
    var ui_BindSelectionPlugin_25_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_25_5_$1,"selectedValues" , config.selectedItemsValueExpression);
    config_$1.plugins = [ui_BindSelectionPlugin_25_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GMSa(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.abstractListView",
      constructor: AbstractListView$,
      super$GMSa: function() {
        com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.list.AbstractListViewBase",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.LinkListViewDragZone"]
    };
});
