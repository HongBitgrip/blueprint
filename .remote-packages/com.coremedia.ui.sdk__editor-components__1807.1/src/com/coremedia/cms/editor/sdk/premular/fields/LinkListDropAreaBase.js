Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase", function(LinkListDropAreaBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.ui.components.ExtendedContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.util.createComponentSelector;

import ext.grid.GridPanel;
import ext.util.KeyMap;
import ext.view.AbstractView;

/**
 * The application logic for editor that edits link lists.
 * Links can be limited to documents of a given type.
 * /
public class LinkListDropAreaBase extends ExtendedContainer {

  /**
   * The link list wrapper the data is written to.
   * /
  [Bindable]
  public var linkListWrapper:ILinkListWrapper;

  /**
   * The handler to be triggered when the drop area is clicked or Space or Enter key is typed.
   * Will not be triggered if the drop area was disabled (e.g. by #readOnlyValueExpression)
   * /
  [Bindable]
  public var handler:Function;

  /**
   * An optional ValueExpression which makes the component read-only if it is evaluated to true.
   * /
  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  /**
   * The ddGroups the drop zone created in the drop area belongs to.
   * /
  [Bindable]
  public var ddGroups:Array;

  /**
   * The handler to be triggered when valid content is dropped to the drop area. The validity is determined by the given
   * {@link ILinkListWrapper} using {@link ILinkListWrapper#acceptsLinks} and {@link ILinkListWrapper#getFreeCapacity}.
   * Will not be triggered if the drop area was disabled (e.g. by #readOnlyValueExpression)
   * /
  [Bindable]
  public var dropHandler:Function;

  /**
   * Specifies if the links of a valid drop operation will be automatically appended to the existing links in the
   * given {@link #linkListWrapper}.
   *
   * @default true
   * /
  [Bindable]
  public var appendOnDrop:Boolean = true;

  private var dropTarget:LinkListDropAreaTarget;

  public*/ function LinkListDropAreaBase$(config/*:LinkListDropAreaBase = null*/) {if(arguments.length<=0)config=null;
    if (AS3.getBindable(config,"readOnlyValueExpression")) {
      var bindPropertyPlugin/*:BindPropertyPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
      bindPropertyPlugin.bindTo = AS3.getBindable(config,"readOnlyValueExpression");
      bindPropertyPlugin.componentProperty = "disabled";
      config.plugins = config.plugins || [];
      config.plugins.push(bindPropertyPlugin);
    }

    this.super$ZidO(config);
  }/*


  override protected*/ function initComponent()/*:void*/ {
    com.coremedia.ui.components.ExtendedContainer.prototype.initComponent.call(this);

    AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").addChangeListener(AS3.bind(this,"updateCursor$ZidO"));
    this.updateCursor$ZidO();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.ExtendedContainer.prototype.afterRender.call(this);
    this.attachHandler();
    this.setupDropZone$ZidO();
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").removeChangeListener(AS3.bind(this,"updateCursor$ZidO"));
    this.dropTarget$ZidO && this.dropTarget$ZidO.unreg();
    com.coremedia.ui.components.ExtendedContainer.prototype.onDestroy.call(this);
  }/*

  private*/ function updateCursor()/*:void*/ {
    var cursor/*:String*/ =  "pointer";
    if (!AS3.getBindable(this,"handler") || (AS3.getBindable(this,"readOnlyValueExpression") && AS3.getBindable(this,"readOnlyValueExpression").getValue())) {
      cursor = "default";
    }
    this.setStyle("cursor", cursor);
  }/*

  protected*/ function attachHandler()/*:void*/ {
    this.el.addListener("click",AS3.bind( this,"invokeHandler"));
    var keyMapConfig/*:KeyMap*/ = AS3.cast(Ext.util.KeyMap,{});
    keyMapConfig.target = this.el;
    var keyMap/*:KeyMap*/ = new Ext.util.KeyMap(keyMapConfig);
    keyMap.addBinding({key: [13, 32], handler:AS3.bind(this,"invokeHandler"), scope:this.el});
  }/*

  protected*/ function invokeHandler()/*:void*/ {
    if (!this.disabled) {
      AS3.getBindable(this,"handler") && AS3.getBindable(this,"handler")();
    }
  }/*

  private*/ function handleEnter(dropAllowed/*:Boolean*/)/*:void*/ {
    AS3.setBindable(this,"highlighted" , dropAllowed);
  }/*

  private*/ function handleOver(dropAllowed/*:Boolean*/)/*:void*/ {
    AS3.setBindable(this,"highlighted" , dropAllowed);
  }/*

  //noinspection JSUnusedLocalSymbols callback signature
  private*/ function handleOut(dropAllowed/*:Boolean*/)/*:void*/ {
    AS3.setBindable(this,"highlighted" , false);
  }/*

  private*/ function handleDrop(dropAllowed/*:Boolean*/, links/*:Array*/, sourceView/*:AbstractView*/)/*:void*/ {
    AS3.setBindable(this,"highlighted" , false);
    if (dropAllowed) {
      if (AS3.getBindable(this,"appendOnDrop")) {
        // no acceptsLinks check needed here
        AS3.getBindable(this,"linkListWrapper").addLinks(links);
      }
      AS3.getBindable(this,"dropHandler") && AS3.getBindable(this,"dropHandler")(links, sourceView);
    }
  }/*

  private*/ function setupDropZone()/*:void*/ {
    var gridPanel/*:GridPanel*/ =AS3.as( this.up(com.coremedia.ui.util.createComponentSelector()._xtype("gridpanel").build()),  Ext.grid.Panel);
    var boundView/*:AbstractView*/ = gridPanel ? gridPanel.getView() : null;
    this.dropTarget$ZidO = new com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaTarget(
            this,
            AS3.getBindable(this,"linkListWrapper"),
            AS3.getBindable(this,"ddGroups"),
            boundView,AS3.bind(
            this,"handleEnter$ZidO"),AS3.bind(
            this,"handleOver$ZidO"),AS3.bind(
            this,"handleOut$ZidO"),AS3.bind(
            this,"handleDrop$ZidO")
    );
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendedContainer",
      dropTarget$ZidO: null,
      constructor: LinkListDropAreaBase$,
      super$ZidO: function() {
        com.coremedia.ui.components.ExtendedContainer.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      afterRender: afterRender,
      onDestroy: onDestroy,
      updateCursor$ZidO: updateCursor,
      attachHandler: attachHandler,
      invokeHandler: invokeHandler,
      handleEnter$ZidO: handleEnter,
      handleOver$ZidO: handleOver,
      handleOut$ZidO: handleOut,
      handleDrop$ZidO: handleDrop,
      setupDropZone$ZidO: setupDropZone,
      config: {
        linkListWrapper: null,
        handler: null,
        readOnlyValueExpression: null,
        ddGroups: null,
        dropHandler: null,
        appendOnDrop: true
      },
      requires: [
        "Ext.grid.Panel",
        "Ext.util.KeyMap",
        "com.coremedia.ui.components.ExtendedContainer",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaTarget"]
    };
});
