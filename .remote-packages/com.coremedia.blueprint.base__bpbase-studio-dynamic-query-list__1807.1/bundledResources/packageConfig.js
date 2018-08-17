(function(){
// START - Registering package dependency order
Ext.manifest.packageDependencyOrder.push('com.coremedia.blueprint.base__bpbase-studio-dynamic-query-list');
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
  'dynamic-content-query-help-de': resolveAbsolutePath('com.coremedia.blueprint.base__bpbase-studio-dynamic-query-list', 'dynamic-content-query-help/QuerySearchHelp_de.html'),
  'dynamic-content-query-help-en': resolveAbsolutePath('com.coremedia.blueprint.base__bpbase-studio-dynamic-query-list', 'dynamic-content-query-help/QuerySearchHelp.html')
});
// END - Adding global resources to ext manifest
}());
