Ext.define("com.coremedia.cms.editor.sdk.actions.OpenTabAction", function(OpenTabAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 <p>An <code>ext.Action</code> that opens a tab in the workarea. The tab is then the active tab.</p>
 <p>The tab will be restored after reload.</p>

 * /
public class OpenTabAction extends OpenTabActionBase{

    public*/function OpenTabAction$(config/*:OpenTabAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenTabActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenTabActionBase,{});
    var defaults_$1/*:OpenTabAction*/ =AS3.cast(OpenTabAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$kiHs(config_$1);
  }/*

    /**
     If set true only one instance of the xtype of the given tab will be opened. Default is false.
     * /
    [Bindable]
    public var singleton:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenTabActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenTabAction$,
      super$kiHs: function() {
        com.coremedia.cms.editor.sdk.actions.OpenTabActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {singleton: false},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenTabActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
