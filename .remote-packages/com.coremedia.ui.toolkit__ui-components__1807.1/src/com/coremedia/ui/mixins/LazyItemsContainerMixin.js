Ext.define('com.coremedia.ui.mixins.LazyItemsContainerMixin', {
  extend: 'Ext.Mixin',

  mixinConfig: {
    before: {
      initItems: 'beforeInitItems',
      add: 'beforeAdd'
    }
  },

  beforeInitItems: function () {
    if (this.itemsLazyUntilEvent) {
      this.addItemReplays = [];

      this.on(this.itemsLazyUntilEvent, function () {
        this.addLazyItems();
      }, this, {single: true});
    }
  },

  beforeAdd: function () {
    if (this.itemsAreLazy()) {
      this.addItemReplays.push(arguments);
      return false;
    }
  },

  itemsAreLazy: function () {
    return !!this.addItemReplays;
  },

  addLazyItems: function () {
    if (this.itemsAreLazy()) {
      var me = this;

      var replays = this.addItemReplays.concat();
      delete this.addItemReplays;

      replays.forEach(function (replay) {
        me.add.apply(me, replay);
      });

      this.fireEvent("lazyItemsAdded", this, this.items);
    }
  },

  statics: {
    LAZY_ITEMS_ADDED_EVENT: "lazyItemsAdded",

    unfoldLazyItems: function (ct) {
      var lazyItemsCtType = com.coremedia.ui.mixins.LazyItemsContainerMixin;

      Ext.suspendLayouts();
      try {
        if (AS3.is(ct, lazyItemsCtType)) {
          ct.addLazyItems();
        }

        ct.items.each(function (item) {
          if (AS3.is(item, Ext.container.Container)) {
            lazyItemsCtType.unfoldLazyItems(item);
          }
        });
      } finally {
        Ext.resumeLayouts(true);
      }
    }
  }
});
