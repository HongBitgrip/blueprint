Ext.define("com.coremedia.ui.components.DraggableItemsContainer", function(DraggableItemsContainer) {/*package com.coremedia.ui.components{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.DraggableItemsPlugin;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.components.DraggableItem;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
public class DraggableItemsContainer extends Container{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.DraggableItemsUtils;

    import ext.Component;
    import ext.container.Container;
    import ext.dom.Element;

    public static const xtype:String = "com.coremedia.ui.components.DraggableItemsContainer";

    /**
     * A template representing the inner container that can be dragged (usually the component that is to be wrapped).
     * /
    [Bindable]
    [ExtConfig(create=false)]
    public var innerCtTemplate:Container;

    /**
     * {@see BindComponentsPlugin#valueExpression}
     * /
    [Bindable]
    public var itemsVE:ValueExpression;

    /**
     * {@see BindComponentsPlugin#configBeanParameterName}
     * /
    [Bindable]
    public var itemsConfigBeanParameterName:String;

    /**
     * (optional) {@see BindComponentsPlugin#getKey}
     * /
    [Bindable]
    public var itemsGetKey:Function;

    /**
     * A handler to trigger after a successful drop operation.
     * /
    [Bindable]
    public var dropHandler:Function;

    /**
     * (optional) a {@link ValueExpression} returning if the dragging is enabled.
     * /
    [Bindable]
    public var enabledVE:ValueExpression;

    /**
     * (optional) a function providing more modifiers to be attached to the {@link DraggableItem} which will be used
     * inside a {@link ValueExpression}, so this method registers a dependency with the dependency tracker.
     *
     * Parameters:
     * The bean the draggable item is build from will be passed as the first (and only) parameter.
     *
     * Return:
     * Must return an {@link Array} of {@link String} or {@link com.coremedia.ui.models.bem.BEMModifier} provided to the
     * {@link BEMPlugin}. In case the value can not yet be determined, return undefined.
     * /
    [Bindable]
    public var additionalItemModifiersFunction:Function;

    public*/function DraggableItemsContainer$(config/*:DraggableItemsContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:DraggableItemsContainer*/ =AS3.cast(DraggableItemsContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus = ":first";
    var ui_DraggableItemsPlugin_128_5_$1/*:com.coremedia.ui.plugins.DraggableItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DraggableItemsPlugin,{});
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"ddGroup" , "draggableItemsDDGroup");
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"enabledVE" , AS3.getBindable(config,"enabledVE"));
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"hideGhostWrapper" , true);
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"dragHandler" ,AS3.bind( this,"dragHandler"));
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"dragEndHandler" , DraggableItemsContainer.dragEndHandler);
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"dropHandler" , AS3.getBindable(config,"dropHandler"));
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"itemSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.DraggableItem.BLOCK.getCSSSelector()));
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"handleSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.DraggableItem.ELEMENT_DND.getCSSSelector()));
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"sourcePlaceholderBuilder" , DraggableItemsContainer.createSourcePlaceholder);
    AS3.setBindable(ui_DraggableItemsPlugin_128_5_$1,"targetPlaceholderBuilder" , DraggableItemsContainer.createTargetPlaceholder);
    var ui_BindComponentsPlugin_138_5_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"valueExpression" , AS3.getBindable(config,"itemsVE"));
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"configBeanParameterName" , "bean");
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"reuseComponents" , true);
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"clearBeforeUpdate" , false);
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"getKey" , AS3.getBindable(config,"itemsGetKey"));
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"afterUpdateCallback" ,AS3.bind( this,"reorder"));
    var ui_DraggableItem_145_9_$1/*:com.coremedia.ui.components.DraggableItem*/ =AS3.cast(com.coremedia.ui.components.DraggableItem,{});
    AS3.setBindable(ui_DraggableItem_145_9_$1,"configBeanParameterName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemsConfigBeanParameterName")));
    AS3.setBindable(ui_DraggableItem_145_9_$1,"innerCtTemplate" , AS3.getBindable(config,"innerCtTemplate"));
    AS3.setBindable(ui_DraggableItem_145_9_$1,"enabledVE" , AS3.getBindable(config,"enabledVE"));
    AS3.setBindable(ui_DraggableItem_145_9_$1,"additionalModifiersFunction" , AS3.getBindable(config,"additionalItemModifiersFunction"));
    AS3.setBindable(ui_BindComponentsPlugin_138_5_$1,"template" , ui_DraggableItem_145_9_$1);
    var ui_VerticalSpacingPlugin_151_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_151_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_25);
    config_$1.plugins = [ui_DraggableItemsPlugin_128_5_$1, ui_BindComponentsPlugin_138_5_$1, ui_VerticalSpacingPlugin_151_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fymw(config_$1);
  }/*

    protected static*/ function createSourcePlaceholder$static(dragItem/*:Component*/)/*:Element*/ {
      var placeholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultSourcePlaceholderBuilder(dragItem);
      placeholder.addCls(com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM.getCSSClass());
      return placeholder;
    }/*

    protected static*/ function createTargetPlaceholder$static(dragItem/*:Component*/)/*:Element*/ {
      var placeholder/*:Element*/ = com.coremedia.ui.util.DraggableItemsUtils.defaultTargetPlaceholderBuilder(dragItem);
      placeholder.addCls(com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM.getCSSClass());
      return placeholder;
    }/*


    protected static*/ function dragEndHandler$static(dragData/*:Object*/)/*:void*/ {
      dragData.dragItem.getEl().addCls(com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM.getCSSClass());
    }/*

    protected*/ function dragHandler(dragData/*:Object*/)/*:void*/ {
      // special handling when dragging first item
      if (this.itemCollection.indexOf(dragData.dragItem) === 0) {
        var secondItem/*:Container*/ =AS3.as( this.getComponent(1),  Ext.container.Container);
        if (secondItem) {
          var previousElement/*:Element*/ = secondItem.getEl().prev();
          while (previousElement) {
            if (previousElement.isStyle("display", "none")
                    && previousElement === previousElement.parent().first()) {
              previousElement.removeCls(com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM.getCSSClass());
            } else {
              previousElement.addCls(com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM.getCSSClass());
            }
            previousElement = previousElement.prev();
          }
        }
      }
    }/*

    protected*/ function reorder()/*:void*/ {
      if (this.rendered) {
        // the items are correctly ordered in itemCollection but not in DOM
        var lastElement/*:Element*/ = null;
        for (var itemPosition/*:int*/ = 0; itemPosition < this.itemCollection.length; itemPosition++) {
          var item/*:Container*/ =AS3.as( this.itemCollection.get(itemPosition),  Ext.container.Container);
          var itemElement/*:Element*/ = item.getEl();
          if (itemPosition === 0) {
            this.getEl().insertFirst(itemElement);
          } else {
            itemElement && itemElement.insertAfter(lastElement);
          }
          lastElement = itemElement;
        }
      }
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.ui.components.DraggableItemsContainer",
      constructor: DraggableItemsContainer$,
      super$fymw: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      dragHandler: dragHandler,
      reorder: reorder,
      config: {
        innerCtTemplate: null,
        itemsVE: null,
        itemsConfigBeanParameterName: null,
        itemsGetKey: null,
        dropHandler: null,
        enabledVE: null,
        additionalItemModifiersFunction: null
      },
      statics: {
        createSourcePlaceholder: createSourcePlaceholder$static,
        createTargetPlaceholder: createTargetPlaceholder$static,
        dragEndHandler: dragEndHandler$static
      },
      requires: [
        "Ext.container.Container",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.DraggableItem",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.DraggableItemsPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.util.DraggableItemsUtils"
      ]
    };
});
