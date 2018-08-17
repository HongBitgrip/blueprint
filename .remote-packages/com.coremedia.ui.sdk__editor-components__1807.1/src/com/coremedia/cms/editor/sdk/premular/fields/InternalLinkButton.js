Ext.define("com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButton", function(InternalLinkButton) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
/**
 A Button that enables itself when it would be appropriate to open an internal link editing dialog.
 * /
public class InternalLinkButton extends InternalLinkButtonBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.internalLinkButton";

    public*/function InternalLinkButton$(config/*:InternalLinkButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase,{});
    var defaults_$1/*:InternalLinkButton*/ =AS3.cast(InternalLinkButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cminternallink_iconCls')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cminternallink_text')));
    AS3.setBindable(config_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cminternallink_tooltip'));
    config_$1.enableToggle = true;
    config_$1.toggleHandler =AS3.bind( this,"onToggle");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5wmS(config_$1);
  }/*

    /**
     * A property path expression leading to the Bean whose property is edited.
     * This property editor assumes that this bean has a property 'properties'.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.internalLinkButton",
      constructor: InternalLinkButton$,
      super$5wmS: function() {
        com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButtonBase",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "net.jangaroo.ext.Exml"
      ]
    };
});
