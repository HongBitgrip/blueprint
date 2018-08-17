Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction", function(OpenInRepositoryAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that opens the configured content in the repository view of the collection.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class OpenInRepositoryAction extends OpenInRepositoryActionBase{

    public*/function OpenInRepositoryAction$(config/*:OpenInRepositoryAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase,{});
    var defaults_$1/*:OpenInRepositoryAction*/ =AS3.cast(OpenInRepositoryAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RXDw(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenInRepositoryAction$,
      super$RXDw: function() {
        com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenInRepositoryActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
