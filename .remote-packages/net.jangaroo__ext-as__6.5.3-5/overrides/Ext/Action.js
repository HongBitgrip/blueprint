Ext.define('JooOverrides.Ext.Action', {
  override: 'Ext.Action',

  requires: [
    "mx.resources.ResourceManager"
  ],

  // patch constructor to avoid Actions being copied when their Component is added to a Container:
  constructor:  function(config) {
    delete config.xclass; // prevent xclass from being applied to the component!
    config.baseAction = this; // self-reference, so that button references me, not my copy!
    if (!("handler" in config) && typeof this.handle === "function" && !this.handle.$emptyFn) {
      config.handler = AS3.bind(this, "handle");
    }
    this.actionId = config.actionId || this.self.ACTION_ID;
    this.callParent(arguments);
  },
  handle: Ext.emptyFn,
  // patch for Actions being added to a Component via config's baseAction:
  addComponent: function(component) {
    component.setDisabled(this.isDisabled());
    component.setHidden(this.isHidden());
    return this.callParent(arguments);
  },
  /**
   * Sets the tooltip to be displayed by all components configured by this Action.
   * @param {String} tooltip The tooltip to display
   */
  setTooltip : function(tooltip){
    this.initialConfig.tooltip = tooltip;
    this.callEach('setTooltip', [tooltip]);
  },

  /**
   * Gets the tooltip currently displayed by all components configured by this Action.
   */
  getTooltip : function(){
    return this.initialConfig.tooltip;
  }

}, function () {
  Ext.Action.prototype.resourceManager = mx.resources.ResourceManager.getInstance();
});
