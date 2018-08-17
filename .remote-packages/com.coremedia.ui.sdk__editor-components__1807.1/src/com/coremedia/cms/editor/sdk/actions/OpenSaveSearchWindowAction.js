Ext.define("com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction", function(OpenSaveSearchWindowAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.SaveSearchWindow;
public class OpenSaveSearchWindowAction extends OpenSaveSearchWindowActionBase{

    public*/function OpenSaveSearchWindowAction$(config/*:OpenSaveSearchWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase,{});
    var defaults_$1/*:OpenSaveSearchWindowAction*/ =AS3.cast(OpenSaveSearchWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"toggleDialog" , true);
    AS3.setBindable(config_$1,"useActionAsAnimationTarget" , true);
    var editor_SaveSearchWindow_17_5_$1/*:com.coremedia.cms.editor.sdk.desktop.SaveSearchWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SaveSearchWindow,{});
    editor_SaveSearchWindow_17_5_$1.modal = true;
    AS3.setBindable(config_$1,"dialog" , editor_SaveSearchWindow_17_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ydm0(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase",
      constructor: OpenSaveSearchWindowAction$,
      super$Ydm0: function() {
        com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.SaveSearchWindow"]
    };
});
