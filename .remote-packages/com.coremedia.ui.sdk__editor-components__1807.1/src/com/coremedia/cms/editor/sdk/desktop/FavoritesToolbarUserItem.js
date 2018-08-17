Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItem", function(FavoritesToolbarUserItem) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class FavoritesToolbarUserItem extends FavoritesToolbarUserItemBase{

    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.favoritesToolbarUserItem";

    public*/function FavoritesToolbarUserItem$(config/*:FavoritesToolbarUserItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase,{});
    var defaults_$1/*:FavoritesToolbarUserItem*/ =AS3.cast(FavoritesToolbarUserItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_ShowCollectionViewInSearchStateAction_23_5_$1/*:com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction,{});
    AS3.setBindable(editor_ShowCollectionViewInSearchStateAction_23_5_$1,"state" , config.state);
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction(editor_ShowCollectionViewInSearchStateAction_23_5_$1);
    var ui_BindPropertyPlugin_26_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_26_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeText"));
    ui_BindPropertyPlugin_26_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_26_5_$1.componentProperty = "text";
    var ui_BindPropertyPlugin_29_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_29_5_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeDisabled"));
    ui_BindPropertyPlugin_29_5_$1.componentProperty = "disabled";
    config_$1.plugins = [ui_BindPropertyPlugin_26_5_$1, ui_BindPropertyPlugin_29_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zMFk(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.favoritesToolbarUserItem",
      constructor: FavoritesToolbarUserItem$,
      super$zMFk: function() {
        com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction"]
    };
});
