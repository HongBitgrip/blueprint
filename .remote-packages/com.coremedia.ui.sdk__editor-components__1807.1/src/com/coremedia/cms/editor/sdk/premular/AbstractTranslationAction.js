Ext.define("com.coremedia.cms.editor.sdk.premular.AbstractTranslationAction", function(AbstractTranslationAction) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
public class AbstractTranslationAction extends AbstractTranslationActionBase{

    public*/function AbstractTranslationAction$(config/*:AbstractTranslationAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase,{});
    var defaults_$1/*:AbstractTranslationAction*/ =AS3.cast(AbstractTranslationAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ACHZ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase",
      constructor: AbstractTranslationAction$,
      super$ACHZ: function() {
        com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.AbstractTranslationActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
