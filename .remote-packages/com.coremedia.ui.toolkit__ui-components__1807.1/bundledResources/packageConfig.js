(function(){
// START - Registering package dependency order
Ext.manifest.packageDependencyOrder.push('com.coremedia.ui.toolkit__ui-components');
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
  'ckeditor.plugin.classstyles': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/classstyles/plugin.js'),
  'ckeditor.plugin.cmbase': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/cmbase/plugin.js'),
  'ckeditor.plugin.cmmagicline': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/cmmagicline/plugin.js'),
  'ckeditor.plugin.cmrichtextdataprocessor': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/cmrichtextdataprocessor/plugin.js'),
  'ckeditor.plugin.cmstyles': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/cmstyles/plugin.js'),
  'ckeditor.plugin.cmsymbolfontmapper': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/plugins/cmsymbolfontmapper/plugin.js'),
  'ckeditor.skin.coremedia': resolveAbsolutePath('com.coremedia.ui.toolkit__ui-components', 'ckeditor/skins/coremedia/')
});
// END - Adding global resources to ext manifest
}());
