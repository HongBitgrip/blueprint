Ext.define("com.coremedia.personalization.ui.editors.ConditionsEditorBase", function(ConditionsEditorBase) {/*package com.coremedia.personalization.ui.editors{
import com.coremedia.personalization.ui.editors.*;
import net.jangaroo.ext.Exml;
/**
 Base class of the segment conditions editor. It's a thin wrapper around a ConditionsPanel that provides a bean for storing the string-representation of segment conditions. The bean is the model for the contained ConditionsPanel.
 * /
public class ConditionsEditorBase extends ConditionsEditorBaseBase{

    public static const xtype:String = "com.coremedia.personalization.ui.config.conditionsEditorBase";

    public*/function ConditionsEditorBase$(config/*:ConditionsEditorBase = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase*/ =AS3.cast(com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase,{});
    var defaults_$1/*:ConditionsEditorBase*/ =AS3.cast(ConditionsEditorBase,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KeNu(config_$1);
  }/*

    /**
     the condition items to be supplied to the contained ConditionsPanel
     * /
    [Bindable]
    public var conditionItems:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase",
      alias: "widget.com.coremedia.personalization.ui.config.conditionsEditorBase",
      constructor: ConditionsEditorBase$,
      super$KeNu: function() {
        com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase.prototype.constructor.apply(this, arguments);
      },
      config: {conditionItems: null},
      requires: [
        "com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
