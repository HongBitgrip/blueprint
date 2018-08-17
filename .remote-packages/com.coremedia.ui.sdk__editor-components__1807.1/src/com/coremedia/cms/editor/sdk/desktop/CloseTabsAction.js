Ext.define("com.coremedia.cms.editor.sdk.desktop.CloseTabsAction", function(CloseTabsAction) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
/**

 Action for closing tabs. Actions of this type can be plugged into a
 TabContextMenu. Note that the action respects the closable configuration of the tab.

 In addition, this action imposes certain requirements for tabs to work properly in the case
 that multiple tabs shall be closed in a bulk close operation. Tabs that need to handle their closing
 asynchronously for certain cases (e.g. show a confirmation dialogue for the user prior to closing)
 need to implement the interface AsynchronouslyClosable.

 It is possible to exclude tabs from closing via the 'excludedTypes' configuration parameter.

 @see com.coremedia.ui.components.TabContextMenu
 @see com.coremedia.ui.components.AsynchronouslyClosable.

 * /
public class CloseTabsAction extends CloseTabsActionBase{

    public static const CLOSE_TAB_MODE:String = "closeTab";

    public static const CLOSE_OTHER_TABS_MODE:String = "closeOtherTabs";

    public static const CLOSE_ALL_TABS_MODE:String = "closeAllTabs";

    public*/function CloseTabsAction$(config/*:CloseTabsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase,{});
    var defaults_$1/*:CloseTabsAction*/ =AS3.cast(CloseTabsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Php0(config_$1);
  }/*

    /**

     This parameter determines, which closing mode is to be used for the action. Three modes are available:
     (1) Closing just the context-clicked tab, (2) Closing all tabs other than the context-clicked
     one, (3) Closing all tabs. These modes are chosen via the parameter values
     CLOSE_TAB_MODE,
     CLOSE_OTHER_TABS_MODE,
     CLOSE_ALL_TABS_MODE respectively.

     * /
    [Bindable]
    public var mode:String;



    [Bindable]
    public var asShortcut:Boolean;


    /**

     A list of xtype identifiers for tab types that are not to be closed by the action.
     This list can be used as a fallback for tab types that need asynchronous closing management
     but do not fulfil the requirements imposed by this action (see action description).

     * /
    [Bindable]
    public var excludedTypes:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase",
      constructor: CloseTabsAction$,
      super$Php0: function() {
        com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        mode: null,
        asShortcut: false,
        excludedTypes: null
      },
      statics: {
        CLOSE_TAB_MODE: "closeTab",
        CLOSE_OTHER_TABS_MODE: "closeOtherTabs",
        CLOSE_ALL_TABS_MODE: "closeAllTabs"
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.CloseTabsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
