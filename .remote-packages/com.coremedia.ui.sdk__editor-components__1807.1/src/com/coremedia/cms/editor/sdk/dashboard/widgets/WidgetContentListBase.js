Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContentListBase", function(WidgetContentListBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.store.BeanRecord;

import ext.Ext;
import ext.Template;
import ext.XTemplate;
import ext.dd.DragZone;
import ext.event.Event;
import ext.view.DataView;

import js.HTMLElement;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class WidgetContentListBase extends DataView {

  internal var dragZone:DragZone;

  protected static const LIST_BLOCK:BEMBlock =*/function LIST_BLOCK$static_(){WidgetContentListBase.LIST_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("widget-content-list"));}/*;
  protected static const LIST_ELEMENT_ENTRY:BEMElement =*/function LIST_ELEMENT_ENTRY$static_(){WidgetContentListBase.LIST_ELEMENT_ENTRY=( WidgetContentListBase.LIST_BLOCK.createElement("entry"));}/*;
  protected static const LIST_ELEMENT_ICON:BEMElement =*/function LIST_ELEMENT_ICON$static_(){WidgetContentListBase.LIST_ELEMENT_ICON=( WidgetContentListBase.LIST_BLOCK.createElement("icon"));}/*;
  protected static const LIST_ELEMENT_TEXT:BEMElement =*/function LIST_ELEMENT_TEXT$static_(){WidgetContentListBase.LIST_ELEMENT_TEXT=( WidgetContentListBase.LIST_BLOCK.createElement("text"));}/*;
  protected static const LIST_ELEMENT_STATUS:BEMElement =*/function LIST_ELEMENT_STATUS$static_(){WidgetContentListBase.LIST_ELEMENT_STATUS=( WidgetContentListBase.LIST_BLOCK.createElement("status"));}/*;
  protected static const LIST_MODIFIER_EMPTY:BEMModifier =*/function LIST_MODIFIER_EMPTY$static_(){WidgetContentListBase.LIST_MODIFIER_EMPTY=( WidgetContentListBase.LIST_BLOCK.createModifier("empty"));}/*;
  protected static const ITEM_FOCUSED:BEMBlock =*/function ITEM_FOCUSED$static_(){WidgetContentListBase.ITEM_FOCUSED=( new com.coremedia.ui.models.bem.BEMBlock("x-view-item-focused"));}/*;

  protected static const TEMPLATE:Template =*/function TEMPLATE$static_(){WidgetContentListBase.TEMPLATE=( new Ext.XTemplate(
    '<table class="' + WidgetContentListBase.LIST_BLOCK + '">',
    '  <tpl for=".">',
    '    <tr class="' + WidgetContentListBase.LIST_ELEMENT_ENTRY + '">',
    '      <td class="' + WidgetContentListBase.LIST_ELEMENT_ICON + '">',
    '        <span width="16" height="16" class="',
    '<tpl if="readable">{typeClass}</tpl>',
    '<tpl if="!readable">{[com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.getIconStyleClassForUnreadableContent(values.id)]}</tpl>',
    '"></span>',
    '      </td>',
    '      <td class="' + WidgetContentListBase.LIST_ELEMENT_TEXT + '">',
    '        <tpl if="readable">{name}</tpl>',
    '        <tpl if="!readable"><span>{[com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableNameFromUriPath(values.id)]}</span></tpl>',
    '      </td>',
    '      <td class="' + WidgetContentListBase.LIST_ELEMENT_STATUS + '">',
    '        <span width="16" height="16" class="<tpl if="readable">{statusClass}</tpl>"></span>',
    '      </td>',
    '    </tr>',
    '  </tpl>',
    '</table>'
  ).compile());}/*;

  protected static const EMPTY_TEMPLATE:Template =*/function EMPTY_TEMPLATE$static_(){WidgetContentListBase.EMPTY_TEMPLATE=( new Ext.XTemplate(
    '<div class="' + WidgetContentListBase.LIST_MODIFIER_EMPTY + '">' + mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_emptySearch_text') + '</div>'
  ).compile());}/*;

  public*/ function WidgetContentListBase$(config/*:WidgetContentList = null*/) {if(arguments.length<=0)config=null;
    this.super$LB2H(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.view.View.prototype.afterRender.call(this);

    // listen to click events
    this.on("itemclick", listEntryClicked$static);

    var dragZoneCfg/*:DragZone*/ = AS3.cast(Ext.dd.DragZone,{});
    dragZoneCfg.ddGroup = "ContentLinkDD";
    dragZoneCfg['scroll'] = false;
    dragZoneCfg['getDragData'] = function (e/*:Event*/)/*:**/ {
      var sourceEl/*:HTMLElement*/ = e.getTarget(this$.itemSelector, 10);
      if (sourceEl) {
        var record/*:BeanRecord*/ = AS3.cast(com.coremedia.ui.store.BeanRecord,this$.getRecord(sourceEl));
        var contents/*:Array*/ = [record.getBean()];

        var d/*:**/ = window.document.createElement("DIV");
        d["id"] = Ext.id();
        d.innerHTML = com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback.getHtmlFeedback(contents);
        return {
          sourceEl: sourceEl,
          repairXY: Ext.fly(sourceEl).getXY(),
          ddel: d,
          contents: contents
        };
      }
      return undefined;
    };
    dragZoneCfg['getRepairXY'] = function ()/*:**/ {
      return AS3.cast(Ext.dd.DragZone,this).dragData.repairXY;
    };
    this.dragZone = new Ext.dd.DragZone(this.getEl(), dragZoneCfg);
    this.dragZone.invalidHandleTypes = {};
  }/*

  private static*/ function listEntryClicked$static(dataView/*:DataView*/, record/*:BeanRecord*/, node/*:HTMLElement*/, index/*:Number*/, e/*:Event*/)/*:void*/ {
    // make sure only text element can be clicked
    if (e.getTarget(WidgetContentListBase.LIST_ELEMENT_TEXT.getCSSSelector(), null, true) ||
        (Ext.event.Event.ENTER === e.getKey() && e.getTarget(WidgetContentListBase.ITEM_FOCUSED.getCSSSelector(), null, true))) {
      var content/*:Content*/ =AS3.as( record.getBean(),  com.coremedia.cap.content.Content);
      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.dragZone && this.dragZone.unreg();
    Ext.view.View.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.View",
      dragZone: null,
      constructor: WidgetContentListBase$,
      super$LB2H: function() {
        Ext.view.View.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      beforeDestroy: beforeDestroy,
      statics: {
        LIST_BLOCK: undefined,
        LIST_ELEMENT_ENTRY: undefined,
        LIST_ELEMENT_ICON: undefined,
        LIST_ELEMENT_TEXT: undefined,
        LIST_ELEMENT_STATUS: undefined,
        LIST_MODIFIER_EMPTY: undefined,
        ITEM_FOCUSED: undefined,
        TEMPLATE: undefined,
        EMPTY_TEMPLATE: undefined,
        __initStatics__: function() {
          LIST_BLOCK$static_();
          LIST_ELEMENT_ENTRY$static_();
          LIST_ELEMENT_ICON$static_();
          LIST_ELEMENT_TEXT$static_();
          LIST_ELEMENT_STATUS$static_();
          LIST_MODIFIER_EMPTY$static_();
          ITEM_FOCUSED$static_();
          TEMPLATE$static_();
          EMPTY_TEMPLATE$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.dd.DragZone",
        "Ext.event.Event",
        "Ext.view.View",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.store.BeanRecord",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dragdrop.DragDropVisualFeedback",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
