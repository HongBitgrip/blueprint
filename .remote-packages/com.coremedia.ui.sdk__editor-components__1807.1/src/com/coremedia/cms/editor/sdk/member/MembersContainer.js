Ext.define("com.coremedia.cms.editor.sdk.member.MembersContainer", function(MembersContainer) {/*package com.coremedia.cms.editor.sdk.member{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.cms.editor.sdk.member.MemberElement;
import ext.layout.container.AnchorLayout;
/**
 A container that displays a list of members. Each member entry has a button to remove it from the container.
 * /
public class MembersContainer extends Container{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.membersContainer";

    public static const MEMBERS_CT_BODY_ITEM_ID:String = "membersCtBodyItemId";
    private var computedDisabledValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:MembersContainer*/)/*:void*/ {
      this.computedDisabledValueExpression$RTUY = AS3.getBindable(config,"disabledValueExpression") ? AS3.getBindable(config,"disabledValueExpression") : com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }/*

    public*/function MembersContainer$(config/*:MembersContainer = null*/){if(arguments.length<=0)config=null;this.__initialize__$RTUY(config);
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:MembersContainer*/ =AS3.cast(MembersContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var ui_BindPropertyPlugin_82_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_82_5_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_82_5_$1.bindTo = this.computedDisabledValueExpression$RTUY;
    config_$1.plugins = [ui_BindPropertyPlugin_82_5_$1];
    var container_86_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_86_5_$1.itemId =net.jangaroo.ext.Exml.asString( MembersContainer.MEMBERS_CT_BODY_ITEM_ID);
    container_86_5_$1.anchor = "100%";
    var ui_BindComponentsPlugin_89_9_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"valueExpression" , AS3.getBindable(config,"membersValueExpression"));
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"configBeanParameterName" , "member");
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"clearBeforeUpdate" , true);
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"reuseComponents" , false);
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"afterUpdateCallback" , AS3.getBindable(config,"afterUpdateCallback"));
    var editor_MemberElement_95_13_$1/*:com.coremedia.cms.editor.sdk.member.MemberElement*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MemberElement,{});
    AS3.setBindable(editor_MemberElement_95_13_$1,"membersValueExpression" , AS3.getBindable(config,"membersValueExpression"));
    AS3.setBindable(editor_MemberElement_95_13_$1,"memberDisplayTransformer" , AS3.getBindable(config,"memberDisplayTransformer"));
    AS3.setBindable(editor_MemberElement_95_13_$1,"memberReadOnlyPredicate" , AS3.getBindable(config,"memberReadOnlyPredicate"));
    AS3.setBindable(editor_MemberElement_95_13_$1,"memberRemovedHandler" , AS3.getBindable(config,"memberRemovedHandler"));
    AS3.setBindable(editor_MemberElement_95_13_$1,"disabledValueExpression" , this.computedDisabledValueExpression$RTUY);
    AS3.setBindable(ui_BindComponentsPlugin_89_9_$1,"template" , editor_MemberElement_95_13_$1);
    container_86_5_$1.plugins = [ui_BindComponentsPlugin_89_9_$1];
    config_$1.items = [container_86_5_$1];
    var layout_Anchor_107_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_107_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$RTUY(config_$1);
  }/*

    /**
     * Value Expression holding the list of members to show.
     * /
    [Bindable]
    public var membersValueExpression:ValueExpression;

    /**
     * ValueExpression holding the disabled status of this MembersContainer.
     * /
    [Bindable]
    public var disabledValueExpression:ValueExpression;

    /**
     Handler function to call after the member list has been updated.
     * /
    [Bindable]
    public var afterUpdateCallback:Function;


    /**

     Transforms the text display of a member (default is to display the name).
     The transformer function should have the following signature:

     &lt;code>function memberDisplayTransformer(member:Member):String&lt;/code>

     * /
    [Bindable]
    public var memberDisplayTransformer:Function;


    /**

     Determines whether a member shall be displayed as read-only.
     For the read-only case, the remove button (and the expand button for a group)
     is hidden. The predicate should have the following signature:

     &lt;code>function memberReadOnlyPredicate(member:Member):Boolean&lt;/code>

     * /
    [Bindable]
    public var memberReadOnlyPredicate:Function;


    /**

     Custom handler function to call when the delete button for a member is clicked
     (default behaviour is to remove the member from the value of by the
     &lt;code>membersValueExpression&lt;/code>).

     A custom handler function is required to have the following signature:
     &lt;code>function memberRemovedHandler(member:Member, membersValueExpression:ValueExpression):void&lt;/code>

     * /
    [Bindable]
    public var memberRemovedHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.editor.sdk.config.membersContainer",
      computedDisabledValueExpression$RTUY: null,
      __initialize__$RTUY: __initialize__,
      constructor: MembersContainer$,
      super$RTUY: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        membersValueExpression: null,
        disabledValueExpression: null,
        afterUpdateCallback: null,
        memberDisplayTransformer: null,
        memberReadOnlyPredicate: null,
        memberRemovedHandler: null
      },
      statics: {MEMBERS_CT_BODY_ITEM_ID: "membersCtBodyItemId"},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.member.MemberElement"]
    };
});
