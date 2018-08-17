(function(){
// START - Registering package dependency order
Ext.manifest.packageDependencyOrder.push('com.coremedia.elastic.social__social-studio-plugin');
// END - Registering package dependency order
// START - Adding global resources to ext manifest
function resolveAbsolutePath(packageName, resourcePath) {
  var resolvedPath = Ext.resolveResource('<@' + packageName + '>' + resourcePath);
  if (resolvedPath.indexOf('/') !== 0) {
    var pathname = window.location.pathname;
    resolvedPath = pathname.substring(0, pathname.lastIndexOf('/') + 1) + resolvedPath;
  }
  return resolvedPath;
};
Ext.apply(Ext.manifest.globalResources, {
  'ckeditor.plugin.elasticbbcode': resolveAbsolutePath('com.coremedia.elastic.social__social-studio-plugin', 'ckeditor/plugins/elasticbbcode/plugin.js')
});
// END - Adding global resources to ext manifest
}());
