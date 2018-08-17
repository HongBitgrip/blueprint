Ext.define("com.coremedia.blueprint.base.components.pictures.spinner.OpenCreateSpinnerWindowAction", function(OpenCreateSpinnerWindowAction) {/*package com.coremedia.blueprint.base.components.pictures.spinner{
import com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction;
import net.jangaroo.ext.Exml;
import com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerWindow;

    [ResourceBundle('com.coremedia.blueprint.base.components.pictures.spinner.Spinner')]
/**
 Action for opening the spinner window.
 * /
public class OpenCreateSpinnerWindowAction extends OpenCreateFromPicturesWindowAction{

    import mx.resources.ResourceManager;

    public*/function OpenCreateSpinnerWindowAction$(config/*:OpenCreateSpinnerWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction,{});
    var defaults_$1/*:OpenCreateSpinnerWindowAction*/ =AS3.cast(OpenCreateSpinnerWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_icon_cls')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_text')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.components.pictures.spinner.Spinner', 'CreateSpinnerAction_tooltip'));
    AS3.setBindable(config_$1,"multiSelect" , true);
    var bpb$components_CreateSpinnerWindow_25_5_$1/*:com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerWindow*/ =AS3.cast(com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerWindow,{});
    AS3.setBindable(config_$1,"windowConfig" , bpb$components_CreateSpinnerWindow_25_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yErt(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
      constructor: OpenCreateSpinnerWindowAction$,
      super$yErt: function() {
        com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.blueprint.base.components.pictures.OpenCreateFromPicturesWindowAction",
        "com.coremedia.blueprint.base.components.pictures.spinner.Spinner_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.pictures.spinner.CreateSpinnerWindow"]
    };
});
