Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction", function(SetScaleModeAction) {/*package com.coremedia.cms.editor.sdk.preview.zoom{
import com.coremedia.cms.editor.sdk.preview.zoom.*;
import net.jangaroo.ext.Exml;
public class SetScaleModeAction extends SetScaleModeActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function SetScaleModeAction$(config/*:SetScaleModeAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase,{});
    var defaults_$1/*:SetScaleModeAction*/ =AS3.cast(SetScaleModeAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"scaleModeHandler"));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$q8aS(config_$1);
  }/*

    /**
     * Value expression holding the scale state
     * /
    [Bindable]
    public var scaleModeValueExpression:ValueExpression;

    /**
     The scale state established using this action
     * /
    [Bindable]
    public var value:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase",
      constructor: SetScaleModeAction$,
      super$q8aS: function() {
        com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        scaleModeValueExpression: null,
        value: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
