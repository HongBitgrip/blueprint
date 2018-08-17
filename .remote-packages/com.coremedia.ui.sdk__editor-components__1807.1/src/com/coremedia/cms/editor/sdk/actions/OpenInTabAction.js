Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInTabAction", function(OpenInTabAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A <code>contentAction</code> that opens the configured content in the tab.
 See <code>contentAction</code> for how to configure the content.
 @see com.coremedia.cms.editor.sdk.config.contentAction

 * /
public class OpenInTabAction extends OpenInTabActionBase{

    public*/function OpenInTabAction$(config/*:OpenInTabAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase,{});
    var defaults_$1/*:OpenInTabAction*/ =AS3.cast(OpenInTabAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$AceH(config_$1);
  }/*

    /**
     if set to true the opened tab will not be the active tab but next to the active tab. Default false
     * /
    [Bindable]
    public var background:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenInTabAction$,
      super$AceH: function() {
        com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {background: false},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
