(function () {
  'use strict';

  var PLUGIN_NAME = 'cmmagicline';

  if (typeof CKEDITOR.coremedia === 'undefined') {
    // Create CoreMedia Namespace
    CKEDITOR.coremedia = {};
  }

  CKEDITOR.config.magicline_color = '#C41313';

  CKEDITOR.plugins.add(PLUGIN_NAME, {
    requires: ['magicline']
  });
})();