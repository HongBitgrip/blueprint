Ext.define("com.coremedia.ui.util.IComponentSelector", function(IComponentSelector) {/*package com.coremedia.ui.util {
/**
 * Convenience component selector instance which is used as a selector for the <code>ext.ComponentQuery</code> in Ext JS 6.
 * The component selector uses the builder pattern to combine selector options.
 *
 * For example the following code will give the first child component in a <code>ext.container.Container</code> at any depth
 * which is of the xtype <code>com.coremedia.ui.components.IconDisplayField.xtype</code>:
 * <code>container.down(createComponentSelector()._xtype(IconDisplayField.xtype).build());</code>
 * To get all icon labels with the property 'text' as 'foo':
 * <code>container.query(createComponentSelector()._xtype(IconDisplayField.xtype).attr('text', 'foo').build());</code>
 *
 * @see ext.ComponentQuery
 * @see ext.container.Container
 * @see com.coremedia.ui.util.createComponentSelector
 * /
[PublicApi]
public interface IComponentSelector {
  /**
   * Enrich the component selector with the xtype option.
   * @param xtype the xtype to be matched.
   * @param shallow optional value. Set it to true to search for components whose xtype matches the exact xtype and not a descendant xtype.
   * @return the same component selector instance enriched with the xtype option.
   * /
  function _xtype(xtype:String, shallow:Boolean=false):IComponentSelector;

  /**
   * Enrich the component selector with the id option.
   * @param id the id of the component to be matched.
   * @return the same component selector instance enriched with the id option.
   * /
  function id(id:String):IComponentSelector;

  /**
   * Enrich the component selector with the itemId option.
   * @param itemId the item id of the component to be matched.
   * @return the same component selector instance enriched with the itemId option.
   * /
  function itemId(itemId:String):IComponentSelector;

  /**
   * Enrich the component selector with the attribute option.
   * @param name the name of the attribute to be matched for
   * @param value the value of the attribute to be matched for.
   * @return the same component selector instance enriched with the attribute option.
   * /
  function attr(name:String, value:String):IComponentSelector;

  /**
   * Enrich the component selector with a pseudo class.
   * @param name the name of the pseudo class to be matched for
   * @return the same component selector instance enriched with the attribute option.
   * /
  function pseudoClass(name:String):IComponentSelector;

  /**
   * Enrich the component selector with the pseudo class "focusable".
   * @return the same component selector instance enriched with the attribute option.
   * /
  function focusable():IComponentSelector;

  /**
   * Enrich the component selector with the pseudo class ":canfocus".
   * @return the same component selector instance enriched with the attribute option.
   * /
  function canfocus():IComponentSelector;

  /**
   * Builds the selector string
   * @return the selector string
   * /
  function build():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
