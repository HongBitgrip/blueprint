Ext.define("com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase", function(ConfigureListViewPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cms.editor.sdk.editorContext;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * A plugin for configuring the list view of the library window. You can configure
 * the columns shown in the grid by setting additional data fields and columns.
 * See the config class for an example of how to use this class.
 *
 * @see com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPlugin
 * /
[PublicApi]
public class ConfigureListViewPluginBase extends AbstractPlugin {
  private var listViewDataFields:Array;
  private var repositoryListViewColumns:Array;
  private var searchListViewColumns:Array;
  private var listViewColumns:Array;
  private var instanceName:String;

  /**
   * Create a ConfigureListViewPlugin object.
   *
   * @param config the config object
   * /
  public*/ function ConfigureListViewPluginBase$(config/*:ConfigureListViewPlugin = null*/) {if(arguments.length<=0)config=null;
    this.listViewDataFields$PDF5 = AS3.getBindable(config,"listViewDataFields");
    this.repositoryListViewColumns$PDF5 = AS3.getBindable(config,"repositoryListViewColumns");
    this.searchListViewColumns$PDF5 = AS3.getBindable(config,"searchListViewColumns");
    this.listViewColumns$PDF5 = AS3.getBindable(config,"listViewColumns");
    this.instanceName$PDF5 = AS3.getBindable(config,"instanceName") || "defaultCollectionViewList";
    this.super$PDF5(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (this.listViewDataFields$PDF5) {
      for (var i/*:Number*/ = 0; i < this.listViewDataFields$PDF5.length; i++) {
        com.coremedia.cms.editor.sdk.editorContext.addListViewDataField(this.listViewDataFields$PDF5[i]);
      }
    }
    // Configure repository list view columns in the editor context
    if (this.repositoryListViewColumns$PDF5) {
      com.coremedia.cms.editor.sdk.editorContext.setRepositoryListViewColumns(this.repositoryListViewColumns$PDF5, this.instanceName$PDF5);
    } else if (this.listViewColumns$PDF5) {
      com.coremedia.cms.editor.sdk.editorContext.setRepositoryListViewColumns(this.listViewColumns$PDF5, this.instanceName$PDF5);
    }
    // Configure search list view columns in the editor context
    if (this.searchListViewColumns$PDF5) {
      com.coremedia.cms.editor.sdk.editorContext.setSearchListViewColumns(this.searchListViewColumns$PDF5, this.instanceName$PDF5);
    } else if (this.listViewColumns$PDF5) {
      com.coremedia.cms.editor.sdk.editorContext.setSearchListViewColumns(this.listViewColumns$PDF5, this.instanceName$PDF5);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      listViewDataFields$PDF5: null,
      repositoryListViewColumns$PDF5: null,
      searchListViewColumns$PDF5: null,
      listViewColumns$PDF5: null,
      instanceName$PDF5: null,
      constructor: ConfigureListViewPluginBase$,
      super$PDF5: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
