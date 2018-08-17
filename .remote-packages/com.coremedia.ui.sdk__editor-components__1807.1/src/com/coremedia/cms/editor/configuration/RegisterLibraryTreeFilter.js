Ext.define("com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilter", function(RegisterLibraryTreeFilter) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
/**
 Register a tree filter instance to check if the given model should be displayed in the library.
 The plugin can be used to filter specific folder or document types from the library tree.
 * /
public class RegisterLibraryTreeFilter extends RegisterLibraryTreeFilterBase{

    public*/function RegisterLibraryTreeFilter$(config/*:RegisterLibraryTreeFilter = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase,{});
    var defaults_$1/*:RegisterLibraryTreeFilter*/ =AS3.cast(RegisterLibraryTreeFilter,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$15fG(config_$1);
  }/*

    /**
     * The filter that is called for every tree node that is currently loaded.
     * If the method returns true, the node and all its children won't appear in the library tree.
     * /
    [Bindable]
    public var filter:TreeFilter;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase",
      constructor: RegisterLibraryTreeFilter$,
      super$15fG: function() {
        com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase.prototype.constructor.apply(this, arguments);
      },
      config: {filter: null},
      requires: [
        "com.coremedia.cms.editor.configuration.RegisterLibraryTreeFilterBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
