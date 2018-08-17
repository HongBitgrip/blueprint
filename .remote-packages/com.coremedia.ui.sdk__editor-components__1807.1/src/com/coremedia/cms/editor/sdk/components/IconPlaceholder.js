Ext.define("com.coremedia.cms.editor.sdk.components.IconPlaceholder", function(IconPlaceholder) {/*package com.coremedia.cms.editor.sdk.components {

/**
 * Switches the given element to a placeholder. This is meant especially for img elements. If applied
 * the title and src attribute of the element will be set, and a class "icon-placeholder" will be added.
 * On reset, the marker class will be removed and title as well as src attribute will be removed.
 * /
internal class IconPlaceholder {
  /**
   * Style to add for the icon placeholders. We must not use the class attribute as this will be written
   * to the server.
   * /
  private static const*/var PLACEHOLDER_STYLE$static/*:String*/ = 'width:24px;height:24px';/*
  private var _originalTitle:String;
  private var _originalSrc:String;
  private var _title:String;
  private var _placeholderResourcePath:String;

  /**
   * Sets placeholder attributes.
   * /
  public*/ function apply(element/*:**/)/*:void*/ {
    com.coremedia.cms.editor.sdk.components.DomElementUtils.appendOrSetAttribute(element, 'style', PLACEHOLDER_STYLE$static, ';');
    this._originalTitle$zvSy = com.coremedia.cms.editor.sdk.components.DomElementUtils.getAttribute(element, 'title');
    this._originalSrc$zvSy = com.coremedia.cms.editor.sdk.components.DomElementUtils.getAttribute(element, 'src');
    if (this._title$zvSy) {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(element, 'title', this._title$zvSy);
    }
    if (this._placeholderResourcePath$zvSy) {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(element, 'src', this._placeholderResourcePath$zvSy);
    }
  }/*

  /**
   * Removes placeholder attributes.
   * /
  public*/ function reset(element/*:**/)/*:void*/ {
    com.coremedia.cms.editor.sdk.components.DomElementUtils.reduceOrRemoveAttribute(element, 'style', PLACEHOLDER_STYLE$static, ';');
    if (! !this._originalTitle$zvSy) {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(element, 'title', this._originalTitle$zvSy);
    } else {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.removeAttribute(element, 'title');
    }
    if (! !this._originalSrc$zvSy) {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.setAttribute(element, 'src', this._originalSrc$zvSy);
    } else {
      com.coremedia.cms.editor.sdk.components.DomElementUtils.removeAttribute(element, 'src');
    }
  }/*

  public*/ function  set$title(title/*:String*/)/*:void*/ {
    this._title$zvSy = title;
  }/*

  public*/ function  get$title()/*:String*/ {
    return this._title$zvSy;
  }/*

  public*/ function  set$placeholderResourcePath(placeholderResourcePath/*:String*/)/*:void*/ {
    this._placeholderResourcePath$zvSy = placeholderResourcePath;
  }/*

  public*/ function  get$placeholderResourcePath()/*:String*/ {
    return this._placeholderResourcePath$zvSy;
  }/*

}*/function IconPlaceholder$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      _originalTitle$zvSy: null,
      _originalSrc$zvSy: null,
      _title$zvSy: null,
      _placeholderResourcePath$zvSy: null,
      apply: apply,
      reset: reset,
      constructor: IconPlaceholder$,
      __accessors__: {
        title: {
          get: get$title,
          set: set$title
        },
        placeholderResourcePath: {
          get: get$placeholderResourcePath,
          set: set$placeholderResourcePath
        }
      },
      uses: ["com.coremedia.cms.editor.sdk.components.DomElementUtils"]
    };
});
