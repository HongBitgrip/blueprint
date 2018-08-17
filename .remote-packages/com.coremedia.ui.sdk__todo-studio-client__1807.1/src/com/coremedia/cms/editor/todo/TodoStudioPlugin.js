Ext.define("com.coremedia.cms.editor.todo.TodoStudioPlugin", function(TodoStudioPlugin) {/*package com.coremedia.cms.editor.todo{
import com.coremedia.cms.editor.todo.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.configuration.RegisterRestResource;
/**
 A plugin that enables Studio Todos for the current Studio.

 @see Todo
 * /
public class TodoStudioPlugin extends TodoStudioPluginBase{

    import com.coremedia.cms.editor.todo.rest.impl.TodoImpl;
    import com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl;

    public*/function TodoStudioPlugin$(config/*:TodoStudioPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.todo.TodoStudioPluginBase*/ =AS3.cast(com.coremedia.cms.editor.todo.TodoStudioPluginBase,{});
    var defaults_$1/*:TodoStudioPlugin*/ =AS3.cast(TodoStudioPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_RegisterRestResource_31_5_$1/*:com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_31_5_$1,"beanClass" , com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl);
    var editor_RegisterRestResource_32_5_$1/*: com.coremedia.cms.editor.configuration.RegisterRestResource*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterRestResource,{});
    AS3.setBindable(editor_RegisterRestResource_32_5_$1,"beanClass" , com.coremedia.cms.editor.todo.rest.impl.TodoImpl);
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_31_5_$1), new com.coremedia.cms.editor.configuration.RegisterRestResource(editor_RegisterRestResource_32_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kV5H(config_$1);
  }/*

    /**
     Lists additional resource bundles where properties for todo text localizations
     and todo icon CSS classes can be found.
     * /
    [Bindable]
    public var resourceBundles:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.todo.TodoStudioPluginBase",
      constructor: TodoStudioPlugin$,
      super$kV5H: function() {
        com.coremedia.cms.editor.todo.TodoStudioPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {resourceBundles: null},
      requires: [
        "com.coremedia.cms.editor.configuration.RegisterRestResource",
        "com.coremedia.cms.editor.todo.TodoStudioPluginBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.todo.rest.impl.TodoImpl",
        "com.coremedia.cms.editor.todo.rest.impl.TodoRepositoryImpl"
      ]
    };
});
