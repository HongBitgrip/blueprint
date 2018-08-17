Ext.define("com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType", function(PremularWorkAreaTabType) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.Premular;
public class PremularWorkAreaTabType extends PremularWorkAreaTabTypeBase{

    import com.coremedia.cap.content.Content;

    /**
     * The tab type ID of the Premular tab type.
     * /
    public static const TAB_TYPE_ID:String =*/function TAB_TYPE_ID$static_(){PremularWorkAreaTabType.TAB_TYPE_ID=( com.coremedia.cms.editor.sdk.premular.Premular.xtype);}/*;

    public*/function PremularWorkAreaTabType$(config/*:PremularWorkAreaTabType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase,{});
    var defaults_$1/*:PremularWorkAreaTabType*/ =AS3.cast(PremularWorkAreaTabType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"entityProperty" , "content");
    AS3.setBindable(config_$1,"entityType" , com.coremedia.cap.content.Content);
    AS3.setBindable(config_$1,"ddGroup" , "ContentLinkDD");
    var editor_Premular_25_5_$1/*:com.coremedia.cms.editor.sdk.premular.Premular*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.Premular,{});
    AS3.setBindable(config_$1,"tabComponent" , editor_Premular_25_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$W_WJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase",
      constructor: PremularWorkAreaTabType$,
      super$W_WJ: function() {
        com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TAB_TYPE_ID: undefined,
        __initStatics__: function() {
          TAB_TYPE_ID$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabTypeBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.Premular"]
    };
});
