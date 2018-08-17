Ext.define("com.coremedia.ui.actions.OpenDialogAction", function(OpenDialogAction) {/*package com.coremedia.ui.actions{
import com.coremedia.ui.actions.*;
import ext.window.Window;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 An action to open a window dialog.
 It provides several properties to control to which container the window should be rendered to.
 * /
public class OpenDialogAction extends OpenDialogActionBase{

    import ext.container.Container;

    /**
     * The config class of the parent to which the dialog should be rendered to:
     * The first parent of the given type is searched for, whereby it is a parent of the component which triggers the action.
     * /
    [ExtConfig(create=false)]
    public var renderToParent:Container;

    public*/function OpenDialogAction$(config/*:OpenDialogAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.actions.OpenDialogActionBase*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogActionBase,{});
    var defaults_$1/*:OpenDialogAction*/ =AS3.cast(OpenDialogAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$nTwT(config_$1);
  }/*

    /**
     The dialog component to instantiate and open.
     * /
    [Bindable]
    public var dialog:ext.window.Window;


    /**
     The default configuration for the dialog.
     * /
    [Bindable]
    public var dialogDefaults:ext.window.Window;


    /**
     Function to compute the element to which the dialog should rendered to.
     This applies if no renderToParent is specified.
     The argument is the component which triggers the action.
     * /
    [Bindable]
    public var computeRenderTo:Function;


    /**
     Close the dialog on click if the dialog is already open. Defaults to false.
     * /
    [Bindable]
    public var toggleDialog:Boolean;


    /**
     If true and the dialog is visible but not active, the dialog is not closed but brought to front.
     Only applies if toggleDialog is true. Defaults to false.
     * /
    [Bindable]
    public var activateOnToggle:Boolean;


    /**
     If true the dialog open/close animations use the component that this action is bound to as animationTarget.
     Defaults to false.
     * /
    [Bindable]
    public var useActionAsAnimationTarget:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.OpenDialogActionBase",
      metadata: {"": ["PublicApi"]},
      renderToParent: null,
      constructor: OpenDialogAction$,
      super$nTwT: function() {
        com.coremedia.ui.actions.OpenDialogActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dialog: null,
        dialogDefaults: null,
        computeRenderTo: null,
        toggleDialog: false,
        activateOnToggle: false,
        useActionAsAnimationTarget: false
      },
      requires: [
        "com.coremedia.ui.actions.OpenDialogActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
