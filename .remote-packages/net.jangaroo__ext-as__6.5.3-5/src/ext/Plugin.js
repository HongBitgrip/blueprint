Ext.define("ext.Plugin", function(Plugin) {/*package ext {

/**
 * A Plugin provides custom functionality for a component.
 * <p>The only requirement for a valid plugin is that it contain an →<code>init()</code> method that accepts a reference
 * of type →<code>ext.Component</code>. When a component
 * is created, if any plugins are available, the component will call the init method on each plugin, passing a
 * reference to itself. Each plugin can then call methods or respond to events on the component as needed to provide
 * its functionality.</p>
 * <p>Plugins can be added to component by either directly referencing the plugin instance:</p>
 * <pre>plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],
 * </pre>
 * <p>By using config object with ptype:</p>
 * <pre>plugins: [{ptype: 'cellediting', clicksToEdit: 1}],
 * </pre>
 * <p>Or with just a ptype:</p>
 * <pre>plugins: ['cellediting', 'gridviewdragdrop'],
 * </pre>
 * @since 2.3.0
 * @see #init()
 * @see ext.Component
 * @see ext.Component#plugins
 * @see ext.plugin.IAbstractPlugin
 * /
public interface Plugin {

  /**
   * The init method is invoked to formally associate the host component and the plugin.
   * <p>Subclasses should perform initialization and set up any requires links between the
   * plugin and its host Component in their own implementation of this method.</p>
   * @param host The host Component which owns this plugin.
   * /
  function init(host:Component):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
