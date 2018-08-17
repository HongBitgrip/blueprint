Ext.define("com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPlugin", function(ConfigureProjectListViewPlugin) {/*package com.coremedia.cms.editor.controlroom.project{
import com.coremedia.cms.editor.controlroom.project.*;
import net.jangaroo.ext.Exml;
public class ConfigureProjectListViewPlugin extends ConfigureProjectListViewPluginBase{

    public*/function ConfigureProjectListViewPlugin$(config/*:ConfigureProjectListViewPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase,{});
    var defaults_$1/*:ConfigureProjectListViewPlugin*/ =AS3.cast(ConfigureProjectListViewPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pqlw(config_$1);
  }/*

    [Bindable]
    public var projectListViewDataFields:Array;


    [Bindable]
    public var projectListViewColumns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase",
      constructor: ConfigureProjectListViewPlugin$,
      super$pqlw: function() {
        com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        projectListViewDataFields: null,
        projectListViewColumns: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.ConfigureProjectListViewPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
