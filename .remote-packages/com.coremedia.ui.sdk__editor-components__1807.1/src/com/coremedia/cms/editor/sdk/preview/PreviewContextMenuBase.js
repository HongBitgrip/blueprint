Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase", function(PreviewContextMenuBase) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb;
import com.coremedia.cms.editor.sdk.components.breadcrumb.BreadcrumbElement;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeModel;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;

import ext.Ext;
import ext.button.Button;
import ext.dom.Element;

import ext.event.Event;

import ext.menu.Menu;
import ext.panel.Panel;

public class PreviewContextMenuBase extends Menu {

  public*/ function PreviewContextMenuBase$(config/*:PreviewContextMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$zc6t(config);
    // This is an ugly hack. We do not want to focus the context menu once it is shown
    // because this would blur all the property fields.
    this['doFocus'] = function()/*:void*/ {
      // DO NOTHING
    };
  }/*

  private var currentPreviewContent:Content;

  override protected*/ function afterRender()/*:void*/ {
    Ext.menu.Menu.prototype.afterRender.call(this);

    this.mon(this.getEl(), "contextmenu", function(evt/*:Event*/)/*:void*/ {
      evt.preventDefault();
    });
  }/*

  /**
   * CMS-8978 + CMS-9611
   * Clicking an enabled element in the breadcrumb triggers a focus of the
   * corresponding property field in the document form. This focus loss
   * hides the context menu.
   *
   * The following is a hack:
   * We take Menu.onFocusLeave() and leave out the last part where the menu is hidden.
   *
   * TODO: The clean solution would be to not focus (!)
   * property fields that cannot be focused anyways (when they are not inputs,
   * which goes hand in hand with the preview context menu appearing)
   * but instead just highlight (!) them.
   * /
  override protected*/ function onFocusLeave(e/*:Event*/)/*:void*/ {
    Ext.panel.Panel['prototype'].onFocusLeave.call(this, e);

    this['lastFocusedChild'] = null;

    this['mixins'].focusablecontainer.onFocusLeave.call(this, e);
  }/*

  [InjectFromExtParent(variable='currentPreviewContent')]
  public*/ function setCurrentPreviewContent(content/*:Content*/)/*:void*/ {
    this.currentPreviewContent$zc6t = content;
  }/*

  internal*/ function disableBreadcrumbElementStrategy(elementId/*:String*/, treeModel/*:MetadataTreeModel*/)/*:Boolean*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( treeModel.getNodeModel(elementId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    return !metadataNode || com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(metadataNode) || com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(metadataNode) === this.currentPreviewContent$zc6t;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {setCurrentPreviewContent: [
        "InjectFromExtParent",
        [
          "variable",
          "currentPreviewContent"
        ]
      ]},
      constructor: PreviewContextMenuBase$,
      super$zc6t: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      currentPreviewContent$zc6t: null,
      afterRender: afterRender,
      onFocusLeave: onFocusLeave,
      setCurrentPreviewContent: setCurrentPreviewContent,
      disableBreadcrumbElementStrategy: disableBreadcrumbElementStrategy,
      requires: [
        "Ext.menu.Menu",
        "Ext.panel.Panel"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode"
      ]
    };
});
