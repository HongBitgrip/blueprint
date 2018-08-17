Ext.define("com.coremedia.cms.editor.sdk.premular.IssuesPanel", function(IssuesPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import ext.*;
import ext.data.Store;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.container.Container;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.view.DataView;
/**
 A panel showing a list of issues.
 * /
public class IssuesPanel extends IssuesPanelBase{

    import ext.Ext;
    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.issuesPanel";

    public*/function IssuesPanel$(config/*:IssuesPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.IssuesPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.IssuesPanelBase,{});
    var defaults_$1/*:IssuesPanel*/ =AS3.cast(IssuesPanel,{});
    AS3.setBindable(defaults_$1,"itemSelector" , com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.ELEMENT_ITEM.getCSSSelector());
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindPropertyPlugin_46_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_46_5_$1.componentProperty = "title";
    ui_BindPropertyPlugin_46_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    ui_BindPropertyPlugin_46_5_$1.transformer = function(issues/*:Array*/)/*:String*/ {
                                      return Ext.String.format(AS3.getBindable(config,"titlePattern"), issues.length);
                                   };
    config_$1.plugins = [ui_BindPropertyPlugin_46_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_53_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_53_5_$1.itemId = "noIssues";
    AS3.setBindable(container_53_5_$1,"html" , AS3.getBindable(config,"noIssuesMessage"));
    var ui_BindVisibilityPlugin_56_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_56_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(ui_BindVisibilityPlugin_56_9_$1,"transformer" , function(issues/*:Array*/)/*:Boolean*/ {
                                      return issues.length === 0;
                                   });
    container_53_5_$1.plugins = [ui_BindVisibilityPlugin_56_9_$1];
    var dataView_62_5_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    dataView_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.DATA_VIEW_ITEM_ID);
    dataView_62_5_$1["ariaRole"] = null;
    dataView_62_5_$1.itemSelector =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"itemSelector"));
    dataView_62_5_$1.tpl = AS3.getBindable(config,"issuesTemplate");
    dataView_62_5_$1["focusable"] = false;
    AS3.setBindable(dataView_62_5_$1,"tabIndex" , -1.0);
    dataView_62_5_$1["onFocusEnter"] = Ext.emptyFn;
    dataView_62_5_$1["onFocusLeave"] = Ext.emptyFn;
    AS3.setBindable(dataView_62_5_$1,"store" , AS3.getBindable(config,"store"));
    var ui_BindVisibilityPlugin_72_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_72_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    AS3.setBindable(ui_BindVisibilityPlugin_72_9_$1,"transformer" , function(issues/*:Array*/)/*:Boolean*/ {
                                      return issues.length > 0;
                                   });
    dataView_62_5_$1.plugins = [ui_BindVisibilityPlugin_72_9_$1];
    config_$1.items = [container_53_5_$1, dataView_62_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vb08(config_$1);
  }/*

    /**
     A message appearing when no issues are present.
     * /
    [Bindable]
    public var noIssuesMessage:String;

    /**
     The XTemplate to use for displaying the issues.
     * /
    [Bindable]
    public var issuesTemplate:ext.XTemplate;

    /**
     The store to use for the issues. Needs to fit to the issuesTemplate.
     * /
    [Bindable]
    public var store:ext.data.Store;

    /**
     The selector to identify clickable items of the embedded issue panels.
     * /
    [Bindable]
    public var itemSelector:String;

    /**
     A pattern for formatting the title of this panel.
     * /
    [Bindable]
    public var titlePattern:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.IssuesPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.issuesPanel",
      constructor: IssuesPanel$,
      super$vb08: function() {
        com.coremedia.cms.editor.sdk.premular.IssuesPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        noIssuesMessage: null,
        issuesTemplate: null,
        store: null,
        itemSelector: null,
        titlePattern: null
      },
      requires: [
        "Ext",
        "Ext.String",
        "Ext.container.Container",
        "Ext.view.View",
        "com.coremedia.cms.editor.sdk.premular.IssuesPanelBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
