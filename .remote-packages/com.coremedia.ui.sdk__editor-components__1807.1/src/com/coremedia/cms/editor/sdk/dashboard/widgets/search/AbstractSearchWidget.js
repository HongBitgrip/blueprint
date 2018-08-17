Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidget", function(AbstractSearchWidget) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.search{
import com.coremedia.cms.editor.sdk.dashboard.widgets.search.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList;
import ext.container.Container;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class AbstractSearchWidget extends AbstractSearchWidgetBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.abstractSearchWidget";

    public static const CONTENT_LIST_ITEM_ID:String = "contentList";

    public static const MORE_BUTTON_ITEM_ID:String = "moreButton";

    public*/function AbstractSearchWidget$(config/*:AbstractSearchWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase,{});
    var defaults_$1/*:AbstractSearchWidget*/ =AS3.cast(AbstractSearchWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_WidgetContentList_27_5_$1/*:com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList,{});
    editor_WidgetContentList_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( AbstractSearchWidget.CONTENT_LIST_ITEM_ID);
    AS3.setBindable(editor_WidgetContentList_27_5_$1,"contentList" , this.getContentValueExpression());
    config_$1.items = [editor_WidgetContentList_27_5_$1];
    var container_31_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_31_5_$1,"dock" , "bottom");
    var button_33_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_33_9_$1.itemId =net.jangaroo.ext.Exml.asString( AbstractSearchWidget.MORE_BUTTON_ITEM_ID);
    button_33_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_33_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'show_all_text')));
    AS3.setBindable(button_33_9_$1,"handler" ,AS3.bind( this,"showLibrary"));
    container_31_5_$1.items = [button_33_9_$1];
    config_$1.dockedItems = [container_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$0MX(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.abstractSearchWidget",
      constructor: AbstractSearchWidget$,
      super$$0MX: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTENT_LIST_ITEM_ID: "contentList",
        MORE_BUTTON_ITEM_ID: "moreButton"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.search.AbstractSearchWidgetBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentList"]
    };
});
