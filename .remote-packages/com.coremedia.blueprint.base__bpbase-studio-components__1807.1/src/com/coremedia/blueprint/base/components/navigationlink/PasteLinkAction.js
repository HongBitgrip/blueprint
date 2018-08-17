Ext.define("com.coremedia.blueprint.base.components.navigationlink.PasteLinkAction", function(PasteLinkAction) {/*package com.coremedia.blueprint.base.components.navigationlink{
import com.coremedia.blueprint.base.components.navigationlink.*;
import net.jangaroo.ext.Exml;

    [Deprecated(since="1710.1", replacement="com.coremedia.cms.editor.sdk.actions.LinkListPasteAction")]
public class PasteLinkAction extends PasteLinkActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function PasteLinkAction$(config/*:PasteLinkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase*/ =AS3.cast(com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase,{});
    var defaults_$1/*:PasteLinkAction*/ =AS3.cast(PasteLinkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gfql(config_$1);
  }/*

    [Bindable]
    public var contentValueExpression:ValueExpression;

    /** allowed DocTypes for pasting into this editor * /
    [Bindable]
    public var allowedDocTypes:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase",
      metadata: {"": [
        "Deprecated",
        [
          "since",
          "1710.1",
          "replacement",
          "com.coremedia.cms.editor.sdk.actions.LinkListPasteAction"
        ]
      ]},
      constructor: PasteLinkAction$,
      super$gfql: function() {
        com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        allowedDocTypes: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.navigationlink.PasteLinkActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
