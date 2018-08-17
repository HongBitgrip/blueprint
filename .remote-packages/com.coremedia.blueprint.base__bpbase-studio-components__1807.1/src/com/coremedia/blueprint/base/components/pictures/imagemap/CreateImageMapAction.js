Ext.define("com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapAction", function(CreateImageMapAction) {/*package com.coremedia.blueprint.base.components.pictures.imagemap{
import com.coremedia.blueprint.base.components.pictures.imagemap.*;
import net.jangaroo.ext.Exml;
public class CreateImageMapAction extends CreateImageMapActionBase{

    public*/function CreateImageMapAction$(config/*:CreateImageMapAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapActionBase,{});
    var defaults_$1/*:CreateImageMapAction*/ =AS3.cast(CreateImageMapAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8$7p(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapActionBase",
      constructor: CreateImageMapAction$,
      super$8$7p: function() {
        com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.imagemap.CreateImageMapActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
