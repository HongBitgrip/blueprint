Ext.define("com.coremedia.cms.editor.sdk.util.OpenHomepageAction", function(OpenHomepageAction) {/*package com.coremedia.cms.editor.sdk.util{
import com.coremedia.cms.editor.sdk.util.*;
import net.jangaroo.ext.Exml;
public class OpenHomepageAction extends OpenHomepageActionBase{

    public*/function OpenHomepageAction$(config/*:OpenHomepageAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase,{});
    var defaults_$1/*:OpenHomepageAction*/ =AS3.cast(OpenHomepageAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2sM0(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase",
      constructor: OpenHomepageAction$,
      super$2sM0: function() {
        com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
