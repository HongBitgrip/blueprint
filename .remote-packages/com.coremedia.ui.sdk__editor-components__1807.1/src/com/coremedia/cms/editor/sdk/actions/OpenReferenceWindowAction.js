Ext.define("com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction", function(OpenReferenceWindowAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.ui.actions.OpenDialogAction;
import net.jangaroo.ext.Exml;
import ext.window.Window;
import com.coremedia.cms.editor.sdk.premular.Premular;
[PublicApi]
/**
 An action to open a reference window.
 A reference window is dependent on the premular tab where it is opened:
 The window disappears when the tab is closed or another tab is selected. The window appears again when the tab is reselected.
 A CSS class is applied to the window as a default.
 * /
public class OpenReferenceWindowAction extends OpenDialogAction{

    public*/function OpenReferenceWindowAction$(config/*:OpenReferenceWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    var defaults_$1/*:OpenReferenceWindowAction*/ =AS3.cast(OpenReferenceWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var window_22_5_$1/*:ext.window.Window*/ =AS3.cast(Ext.window.Window,{});
    window_22_5_$1.constrainHeader = true;
    window_22_5_$1.constrain = true;
    AS3.setBindable(config_$1,"dialogDefaults" , window_22_5_$1);
    var editor_Premular_26_5_$1/*:com.coremedia.cms.editor.sdk.premular.Premular*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.Premular,{});
    config_$1.renderToParent = editor_Premular_26_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$zBy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.OpenDialogAction",
      metadata: {"": ["PublicApi"]},
      constructor: OpenReferenceWindowAction$,
      super$$zBy: function() {
        com.coremedia.ui.actions.OpenDialogAction.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.window.Window",
        "com.coremedia.ui.actions.OpenDialogAction",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.Premular"]
    };
});
