Ext.define("com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction", function(OpenInBrowserTabAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
public class OpenInBrowserTabAction extends OpenInBrowserTabActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function OpenInBrowserTabAction$(config/*:OpenInBrowserTabAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase,{});
    var defaults_$1/*:OpenInBrowserTabAction*/ =AS3.cast(OpenInBrowserTabAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hbKz(config_$1);
  }/*

    [Bindable]
    public var urlValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase",
      constructor: OpenInBrowserTabAction$,
      super$hbKz: function() {
        com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {urlValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
