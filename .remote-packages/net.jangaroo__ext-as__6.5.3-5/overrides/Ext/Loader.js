// @override Ext.Loader

(function () {
  var oldGetPath = Ext.Loader.getPath;

  if (typeof oldGetPath === "function") {
    // extended path lookup mechanism by taking Ext.manifest.loadOrder into account (normally only used by Microloader
    // in a development build), so Ext classes can be loaded dynamically without using an explicit Ext.require statement
    // as long as they are on any Ext module the application depends on (or the app itself).
    Ext.Loader.getPath = function (className) {
      var me = this,
          manifest = Ext.manifest,
          manager = Ext.ClassManager;

      if (!manager.isCreated(className)) {
        if (manifest && manifest.classes && manifest.loadOrder) {
          var classEntry = manifest.classes[className];
          if (classEntry && classEntry.idx) {
            var path = manifest.loadOrder[classEntry.idx].path;
            if (path) {
              me.setPath(className, path);
            }
          }
        }
      }
      return oldGetPath.apply(me, arguments);
    }
  }
})();