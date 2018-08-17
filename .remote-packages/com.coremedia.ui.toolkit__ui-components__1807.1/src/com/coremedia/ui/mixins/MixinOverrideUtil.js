Ext.define("com.coremedia.ui.mixins.MixinOverrideUtil", {
  singleton: true,

  /**
   * Explicitly apply all overridden functions (must list manually - unsure how to retrieve a list of overrides)
   * @param mixinClass the mixin class whose members are to be reapplied
   * @param overriddenMembers an array of the names (string) of all members to be reapplied
   */
  reapplyMembers: function(mixinClass, overriddenMembers) {
    // Overridden method has to be copied to all prototypes of classes that have already received this mixin.
    // See https://www.sencha.com/forum/showthread.php?299783-Override-a-mixin-in-Extjs-5
    var mixinId = mixinClass.prototype.mixinId;

    Ext.Object.each(Ext.ClassManager.classes, function (name, cls) {
      if (cls && cls.prototype && cls.prototype.mixins && cls.prototype.mixins.hasOwnProperty(mixinId)) {
        Ext.copy(cls.prototype, mixinClass.prototype, overriddenMembers);
      }
    });
  }
});
