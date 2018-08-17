Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase", function(SetLocalizedPluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins{
import com.coremedia.cms.editor.sdk.premular.fields.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A base class for plugins that configure property fields dependent on the displayed content's type and the
 configured localization properties.
 * /


/*exml:cfg name="bindTo" type="com.coremedia.ui.data.ValueExpression">
  <exml:description>
    A property path expression to the Content whose type is used to find the right localization key prefix.
  </exml:description>
</exml:cfg * /
public class SetLocalizedPluginBase extends SetLocalizedPluginBaseBase{

    public*/function SetLocalizedPluginBase$(config/*:SetLocalizedPluginBase = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase,{});
    var defaults_$1/*:SetLocalizedPluginBase*/ =AS3.cast(SetLocalizedPluginBase,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Q57_(config_$1);
  }/*

    /**
     The name of the property.
     * /
    [Bindable]
    public var propertyName:String;


    /**
     The label property to be set at the component.
     * /
    [Bindable]
    public var labelProperty:String;


    /**

     The suffix to add to the computed localization key.
     Should be one of the String constants in &lt;code>PropertyEditorUtil&lt;/code>.

     @see com.coremedia.cms.editor.sdk.util.PropertyEditorUtil#LABEL
     @see com.coremedia.cms.editor.sdk.util.PropertyEditorUtil#EMPTY_TEXT
     @see com.coremedia.cms.editor.sdk.util.PropertyEditorUtil#TOOL_TIP

     * /
    [Bindable]
    public var keySuffix:String;


    /**

     The string to return when no localized string can be found; defaults to the &lt;code>propertyName&lt;/code>.

     * /
    [Bindable]
    public var defaultString:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase",
      metadata: {"": ["PublicApi"]},
      constructor: SetLocalizedPluginBase$,
      super$Q57_: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        propertyName: null,
        labelProperty: null,
        keySuffix: null,
        defaultString: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBaseBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
