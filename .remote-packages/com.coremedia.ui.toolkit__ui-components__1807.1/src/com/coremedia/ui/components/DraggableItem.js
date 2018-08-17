Ext.define("com.coremedia.ui.components.DraggableItem", function(DraggableItem) {/*package com.coremedia.ui.components{
import com.coremedia.ui.plugins.*;
import ext.container.Container;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.Component;
public class DraggableItem extends Container{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.models.bem.BEMModifier;
    import com.coremedia.ui.util.createComponentSelector;

    import ext.Ext;
    import ext.container.Container;

    public static const xtype:String = "com.coremedia.ui.components.DraggableItem";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){DraggableItem.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-draggable-item"));}/*;
    public static const ELEMENT_DND:BEMElement =*/function ELEMENT_DND$static_(){DraggableItem.ELEMENT_DND=( DraggableItem.BLOCK.createElement("dnd"));}/*;
    public static const ELEMENT_CONTAINER:BEMElement =*/function ELEMENT_CONTAINER$static_(){DraggableItem.ELEMENT_CONTAINER=( DraggableItem.BLOCK.createElement("container"));}/*;
    public static const MODIFIER_DISABLED:BEMModifier =*/function MODIFIER_DISABLED$static_(){DraggableItem.MODIFIER_DISABLED=( DraggableItem.BLOCK.createModifier("disabled"));}/*;

    public static const DND_ITEM_ID:String = "dnd";
    public static const INNER_CT_ITEM_ID:String = "innerCt";

    [Bindable]
    public var configBeanParameterName:String;

    [Bindable]
    public var bean:Bean;

    [Bindable]
    public var innerCtTemplate:Object;

    [Bindable]
    public var enabledVE:ValueExpression;

    [Bindable]
    public var additionalModifiersFunction:Function;

    public*/function DraggableItem$(config/*:DraggableItem = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:DraggableItem*/ =AS3.cast(DraggableItem,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(DraggableItem.INNER_CT_ITEM_ID).build());
    var layout_HBox_86_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_86_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_86_5_$1);
    var plugins_BEMPlugin_89_5_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(plugins_BEMPlugin_89_5_$1,"block" , DraggableItem.BLOCK);
    AS3.setBindable(plugins_BEMPlugin_89_5_$1,"modifier" , this.getModifierVE$P0Ni(config));
    config_$1.plugins = [plugins_BEMPlugin_89_5_$1];
    var box_93_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_93_5_$1.itemId =net.jangaroo.ext.Exml.asString( DraggableItem.DND_ITEM_ID);
    var plugins_BEMMixin_95_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(plugins_BEMMixin_95_9_$1,"bemElement" , DraggableItem.ELEMENT_DND);

    delete plugins_BEMMixin_95_9_$1['xtype'];
    delete plugins_BEMMixin_95_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(box_93_5_$1, plugins_BEMMixin_95_9_$1);
    config_$1.items = [box_93_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$P0Ni(config_$1);
  }/*

    private var modifierVE:ValueExpression;

    override protected*/ function initComponent()/*:void*/ {
      Ext.container.Container.prototype.initComponent.call(this);

      var beanCfg/*:Object*/ = {};
      beanCfg.itemId = DraggableItem.INNER_CT_ITEM_ID;
      beanCfg["bemElement"] = DraggableItem.ELEMENT_CONTAINER;
      beanCfg[AS3.getBindable(this,"configBeanParameterName")] = AS3.getBindable(this,"bean");
      var innerCt/*:Container*/ =AS3.as( Ext.apply({}, AS3.getBindable(this,"innerCtTemplate"), beanCfg),  Ext.container.Container);
      this.add(innerCt);
    }/*

    public*/ function getInnerCt()/*:Container*/ {
      return AS3.as( this.queryById(DraggableItem.INNER_CT_ITEM_ID),  Ext.container.Container);
    }/*

    private*/ function getModifierVE(config/*:DraggableItem*/)/*:ValueExpression*/ {var this$=this;
      if (!this.modifierVE$P0Ni) {
        this.modifierVE$P0Ni = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
          var modifiers/*:Array*/ = [];
          if (!AS3.getBindable(config,"enabledVE") || AS3.getBindable(config,"enabledVE").getValue() !== true) {
            modifiers.push(DraggableItem.MODIFIER_DISABLED);
          }
          if (AS3.getBindable(this$,"additionalModifiersFunction")) {
            var additionalModifiers/*:Array*/ = AS3.getBindable(this$,"additionalModifiersFunction")(AS3.getBindable(config,"bean"));
            if (additionalModifiers === undefined) {
              return undefined;
            }
            modifiers = modifiers.concat(modifiers, additionalModifiers);
          }
          return modifiers;
        });
      }
      return this.modifierVE$P0Ni;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.ui.components.DraggableItem",
      constructor: DraggableItem$,
      super$P0Ni: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      modifierVE$P0Ni: null,
      initComponent: initComponent,
      getInnerCt: getInnerCt,
      getModifierVE$P0Ni: getModifierVE,
      config: {
        configBeanParameterName: null,
        bean: null,
        innerCtTemplate: null,
        enabledVE: null,
        additionalModifiersFunction: null
      },
      statics: {
        BLOCK: undefined,
        ELEMENT_DND: undefined,
        ELEMENT_CONTAINER: undefined,
        MODIFIER_DISABLED: undefined,
        DND_ITEM_ID: "dnd",
        INNER_CT_ITEM_ID: "innerCt",
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_DND$static_();
          ELEMENT_CONTAINER$static_();
          MODIFIER_DISABLED$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.util.createComponentSelector"
      ]
    };
});
