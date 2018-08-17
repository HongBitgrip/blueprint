Ext.define("com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerAction", function(CreateSpinnerAction) {/*package com.coremedia.blueprint.base.components.pictures.spinner{
import com.coremedia.blueprint.base.components.pictures.spinner.*;
import net.jangaroo.ext.Exml;
public class CreateSpinnerAction extends CreateSpinnerActionBase{

    public*/function CreateSpinnerAction$(config/*:CreateSpinnerAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase,{});
    var defaults_$1/*:CreateSpinnerAction*/ =AS3.cast(CreateSpinnerAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$YeVH(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase",
      constructor: CreateSpinnerAction$,
      super$YeVH: function() {
        com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
