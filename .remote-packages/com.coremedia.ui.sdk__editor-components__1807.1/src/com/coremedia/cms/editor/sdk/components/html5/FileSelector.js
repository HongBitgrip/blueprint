Ext.define("com.coremedia.cms.editor.sdk.components.html5.FileSelector", function(FileSelector) {/*package com.coremedia.cms.editor.sdk.components.html5 {
import ext.dom.Element;

// This interface describes the interaction of the Uploader and the BrowsePlugin.
// Don't blame us. We don't know how this works, either. But at least it is
// done in a defined way.
public interface FileSelector {
  /**
   * Detaches the input file associated with this FileSelector so that it can be used for other purposed (e.g. uploading).
   * The returned input file has all listeners and tooltips applied to it by this class removed.
   * @param {Boolean} no_create whether to create a new input file element for this FileSelector after detaching.
   * True will prevent creation.  Defaults to false.
   * @return {ext.dom.Element} the detached input file element.
   * /
  function detachInputFile(no_create:Boolean = false):Element;

  /**
   * @return the input file element
   * /
  function getInputFile():Element;

  /**
   * get file name
   * @return {String}
   * /
  function getFileName():String;

  /**
   * returns file class based on name extension
   * @return {String} class to use for file type icon
   * /
  function getFileCls():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
