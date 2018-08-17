Ext.define("com.coremedia.personalization.ui.plugin.ContentSelectorBase", function(ContentSelectorBase) {/*package com.coremedia.personalization.ui.plugin {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.components.StatefulComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ArrayUtils;

import ext.data.SortTypes;
import ext.form.field.ComboBox;
import ext.util.Observable;

/**
 * A slightly extended {@link ext.form.field.ComboBox} that is used to make a selection among a set of content objects. Content objects
 * are collected from several locations within the repository and the set of objects is updated periodically to reflect
 * any changes in the repository. In addition, each path can be associated with a suffix label, which is appended in the
 * drop-down list to all names of documents retrieved from the path.
 *
 * In addition to the default ComboBox behavior, this class offers management of repository locations (*Paths methods)
 * and provides the retrieval and display logic.
 * /
public class ContentSelectorBase extends StatefulComboBox {

  private var pathsObserver:MultipleRepositoryPathsObserver;
  private var pathSuffixes:Object;

  /**
   * @cfg {Array} paths optional list of repository paths ('/' separated folder names) from which to load content objects
   * @cfg {String} docType name of the document type used to represent test-contexts in the CMS
   * @cfg {int} pollingInterval time interval between requests to the repository. These requests are required to
   *  check whether the set of visible test-context documents has changed and are sent periodically by this component.
   *
   * @param config configuration for this component
   * /
  public*/ function ContentSelectorBase$(config/*:ContentSelector = null*/) {if(arguments.length<=0)config=null;
    if (!AS3.getBindable(config,"docType")) {
      throw new AS3.Error("config property 'docType' has to be supplied");
    }

    this.pathSuffixes$HwXe = {};

    this.internalAddPaths$HwXe(AS3.getBindable(config,"paths"));

    config.valueField = "id";
    AS3.setBindable(config,"displayField" , "suffixedName");
    this.super$HwXe(config);

    this.addListener('beforedestroy',AS3.bind( this,"clearPaths"));

    // reset the current selection if the store has been modified
    this.getStore().addListener('add',AS3.bind( this,"resetSelection$HwXe"));
    this.getStore().addListener('update',AS3.bind( this,"resetSelection$HwXe"));
    this.getStore().addListener('datachanged',AS3.bind( this,"resetSelection$HwXe"));
  }/*

  internal*/ function getBindTo(config/*:ContentSelector*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.personalization.ui.plugin.MultipleRepositoryPathsObserver.VALUE_PROPERTY_NAME, this.getPathsObserver(config));
  }/*

  private*/ function resetSelection()/*:void*/ {/*
    const*/var v/*:**/ = this.getValue();
    if (v && this.getStore().findExact(this.valueField, v) >= 0) {
      this.setValue(v);
    }
  }/*

  private*/ function internalAddPaths(paths/*:Array*/)/*:void*/ {
    if (paths) {
      paths = com.coremedia.ui.util.ArrayUtils.asArray(paths);
      for (var i/*:int*/ = 0; i < paths.length; ++i) {
        this.addPath(paths[i]);
      }
    }
  }/*

  internal*/ function addSuffixToName(name/*:String*/, content/*:Content*/)/*:String*/ {/*
    const*/var suffix/*:String*/ = this.pathSuffixes$HwXe[this.pathsObserver$HwXe.getPathOf(content.getId())];
    return name + (suffix ? suffix : '');
  }/*

  internal*/ function suffixedNameSortType(value/*:String*/)/*:String*/ {
    switch (value) {
      case 'DEFAULT':
        return '';
      default:
        return Ext.data.SortTypes.asUCString(value);
    }
  }/*

  /**
   * Adds a new test-context path to the selector.
   *
   * @param path paths to add
   * @param labelSuffix optional suffix to be added to the names of documents retrieved from the path
   * /
  public*/ function addPath(path/*:String*/, labelSuffix/*:String = ''*/)/*:void*/ {if(arguments.length<=1)labelSuffix='';
    if (!this.pathSuffixes$HwXe[path]) {
      this.pathSuffixes$HwXe[path] = labelSuffix;
      this.pathsObserver$HwXe.addPath(path);
    }
  }/*

  /**
   * Removes a path from this selector.
   *
   * @param path the path to be removed
   * /
  public*/ function removePath(path/*:String*/)/*:void*/ {
    if (this.pathSuffixes$HwXe[path]) {
      this.pathSuffixes$HwXe[path] = undefined;
      this.pathsObserver$HwXe.removePath(path);
    }
  }/*

  /**
   * Removes all paths from this selector.
   * /
  public*/ function clearPaths()/*:void*/ {
    this.pathSuffixes$HwXe = {};
    this.pathsObserver$HwXe.clearPaths();
  }/*

  /**
   * @return the {@link Observable} that contains the documents retrieved from all
   *   registered paths in its 'value' property
   * /
  protected*/ function getPathsObserver(config/*:ContentSelector = null*/)/*:Observable*/ {if(arguments.length<=0)config=null;
    if (!this.pathsObserver$HwXe && config) {
      this.pathsObserver$HwXe = new com.coremedia.personalization.ui.plugin.MultipleRepositoryPathsObserver(AS3.getBindable(config,"docType"), AS3.getBindable(config,"pollingInterval"));
    }
    return this.pathsObserver$HwXe;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulComboBox",
      pathsObserver$HwXe: null,
      pathSuffixes$HwXe: null,
      constructor: ContentSelectorBase$,
      super$HwXe: function() {
        com.coremedia.ui.components.StatefulComboBox.prototype.constructor.apply(this, arguments);
      },
      getBindTo: getBindTo,
      resetSelection$HwXe: resetSelection,
      internalAddPaths$HwXe: internalAddPaths,
      addSuffixToName: addSuffixToName,
      suffixedNameSortType: suffixedNameSortType,
      addPath: addPath,
      removePath: removePath,
      clearPaths: clearPaths,
      getPathsObserver: getPathsObserver,
      requires: [
        "AS3.Error",
        "Ext.data.SortTypes",
        "com.coremedia.ui.components.StatefulComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: ["com.coremedia.personalization.ui.plugin.MultipleRepositoryPathsObserver"]
    };
});
