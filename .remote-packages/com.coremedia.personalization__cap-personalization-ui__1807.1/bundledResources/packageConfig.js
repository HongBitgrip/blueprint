(function(){
// START - Registering package dependency order
Ext.manifest.packageDependencyOrder.push('com.coremedia.personalization__cap-personalization-ui');
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
  'p13n_searchQueryHelper-help-de': resolveAbsolutePath('com.coremedia.personalization__cap-personalization-ui', 'p13n-search-query-help/SearchFunctionsHelp_de.html'),
  'p13n_searchQueryHelper-help-en': resolveAbsolutePath('com.coremedia.personalization__cap-personalization-ui', 'p13n-search-query-help/SearchFunctionsHelp.html')
});
// END - Adding global resources to ext manifest
}());
