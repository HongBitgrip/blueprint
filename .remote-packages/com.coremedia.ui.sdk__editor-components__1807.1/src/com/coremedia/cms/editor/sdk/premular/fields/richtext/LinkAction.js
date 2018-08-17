Ext.define("com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction", function(LinkAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.richtext{
import com.coremedia.cms.editor.sdk.premular.fields.richtext.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class LinkAction extends LinkActionBase{

    import com.coremedia.ui.data.ValueExpression;

    import mx.resources.ResourceManager;

    public*/function LinkAction$(config/*:LinkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase,{});
    var defaults_$1/*:LinkAction*/ =AS3.cast(LinkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"exec"));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmlink_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmlink_iconCls')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmlink_tooltip'));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Mzx2(config_$1);
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
    public var forceReadOnlyValueExpression:ValueExpression;

    [Bindable]
    public var externalLinkTargetTypeValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: LinkAction$,
      super$Mzx2: function() {
        com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        externalLinkTargetTypeValueExpression: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
