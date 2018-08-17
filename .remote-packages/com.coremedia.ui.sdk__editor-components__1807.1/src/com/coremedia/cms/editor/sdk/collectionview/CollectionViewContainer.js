Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainer", function(CollectionViewContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import com.coremedia.cms.editor.sdk.collectionview.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.CardLayout;
import com.coremedia.ui.exml.ValueExpression;
public class CollectionViewContainer extends CollectionViewContainerBase{

    import com.coremedia.ui.data.beanFactory;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collectionViewContainer";

    public static const ID:String = "collection-view-container";

    public*/function CollectionViewContainer$(config/*:CollectionViewContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase,{});
    var defaults_$1/*:CollectionViewContainer*/ =AS3.cast(CollectionViewContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["id"] = CollectionViewContainer.ID;
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().focusable().build());
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_title'));
    config_$1["minWidth"] = 380;
    config_$1["minHeight"] = 350;
    AS3.setBindable(config_$1,"width" , 630);
    AS3.setBindable(config_$1,"height" , 489);
    AS3.setBindable(config_$1,"activeItem" , com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID);
    config_$1["docked"] = false;
    var editor_CollectionView_32_5_$1/*: com.coremedia.cms.editor.sdk.collectionview.CollectionView*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionView,{});
    editor_CollectionView_32_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID);
    editor_CollectionView_32_5_$1.flex = 1.0;
    config_$1.items = [editor_CollectionView_32_5_$1];
    var layout_Card_36_5_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    layout_Card_36_5_$1.deferredRender = true;
    AS3.setBindable(config_$1,"layout" , layout_Card_36_5_$1);
    var ui_ValueExpression_39_5_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_39_5_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID));
    AS3.setBindable(ui_ValueExpression_39_5_$1,"context" , com.coremedia.ui.data.beanFactory.createLocalBean());
    AS3.setBindable(config_$1,"activeItemValueExpression" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_39_5_$1));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6KgD(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.collectionViewContainer",
      constructor: CollectionViewContainer$,
      super$6KgD: function() {
        com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase.prototype.constructor.apply(this, arguments);
      },
      statics: {ID: "collection-view-container"},
      requires: [
        "Ext.layout.container.Card",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionView"]
    };
});
