Ext.define("com.coremedia.cms.editor.sdk.member.SelectMembersContainer", function(SelectMembersContainer) {/*package com.coremedia.cms.editor.sdk.member{
import com.coremedia.cms.editor.sdk.member.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.VBoxLayout;
/**
 A panel combining a MemberSearchField with a MembersContainer to display the searched and selected members.
 * /
public class SelectMembersContainer extends SelectMembersContainerBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.selectMembersPanel";

    public static const SELECTED_MEMBERS_CT_ITEM_ID:String = "selectMembersCtItemId";

    public static const SELECT_MEMBERS_COMBO_ITEM_ID:String = "membersComboItemId";
    private var computedDisabledValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:SelectMembersContainer*/)/*:void*/ {
      this.computedDisabledValueExpression$GqK_ = AS3.getBindable(config,"disabledValueExpression") ? AS3.getBindable(config,"disabledValueExpression") : com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }/*

    public*/function SelectMembersContainer$(config/*:SelectMembersContainer = null*/){if(arguments.length<=0)config=null;this.__initialize__$GqK_(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase,{});
    var defaults_$1/*:SelectMembersContainer*/ =AS3.cast(SelectMembersContainer,{});
    AS3.setBindable(defaults_$1,"hideLabel" , false);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_MembersContainer_68_5_$1/*: com.coremedia.cms.editor.sdk.member.MembersContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MembersContainer,{});
    editor_MembersContainer_68_5_$1.itemId =net.jangaroo.ext.Exml.asString( SelectMembersContainer.SELECTED_MEMBERS_CT_ITEM_ID);
    AS3.setBindable(editor_MembersContainer_68_5_$1,"membersValueExpression" , AS3.getBindable(config,"membersValueExpression"));
    AS3.setBindable(editor_MembersContainer_68_5_$1,"disabledValueExpression" , this.computedDisabledValueExpression$GqK_);
    AS3.setBindable(editor_MembersContainer_68_5_$1,"maxHeight" , AS3.getBindable(config,"maxMembersCtHeight"));
    AS3.setBindable(editor_MembersContainer_68_5_$1,"afterUpdateCallback" , config.afterUpdateCallback);
    editor_MembersContainer_68_5_$1.anchor =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"innerMembersContainerAnchor") ? AS3.getBindable(config,"innerMembersContainerAnchor") : '');
    var editor_MemberSearchField_74_5_$1/*: com.coremedia.cms.editor.sdk.member.MemberSearchField*/ =AS3.cast(com.coremedia.cms.editor.sdk.member.MemberSearchField,{});
    editor_MemberSearchField_74_5_$1.itemId =net.jangaroo.ext.Exml.asString( SelectMembersContainer.SELECT_MEMBERS_COMBO_ITEM_ID);
    AS3.setBindable(editor_MemberSearchField_74_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"fieldLabel")));
    editor_MemberSearchField_74_5_$1.hideLabel = AS3.getBindable(config,"hideLabel");
    var ui_BindPropertyPlugin_78_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_78_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_78_9_$1.bindTo = this.computedDisabledValueExpression$GqK_;
    editor_MemberSearchField_74_5_$1.plugins = [ui_BindPropertyPlugin_78_9_$1];
    editor_MemberSearchField_74_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [editor_MembersContainer_68_5_$1, editor_MemberSearchField_74_5_$1];
    var ui_VerticalSpacingPlugin_84_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_84_5_$1];
    var layout_VBox_87_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_87_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_87_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GqK_(config_$1);
  }/*

    /**
     * Value Expression holding the list of members to show.
     * /
    [Bindable]
    public var membersValueExpression:ValueExpression;

    /**
     * ValueExpression carrying the disabled status for this AssignedMembersPanel.
     * /
    [Bindable]
    public var disabledValueExpression:ValueExpression;

    /**
     * The maximal height of the members container.
     * /
    [Bindable]
    public var maxMembersCtHeight:int;

    /**
     Very specific option to specify an anchor for the internal MembersContainer.
     * /
    [Bindable]
    public var innerMembersContainerAnchor:String;


    /**
     Field label for search field (optional)
     * /
    [Bindable]
    public var fieldLabel:String;


    /**
     Hide label for search field (optional)
     * /
    [Bindable]
    public var hideLabel:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.selectMembersPanel",
      computedDisabledValueExpression$GqK_: null,
      __initialize__$GqK_: __initialize__,
      constructor: SelectMembersContainer$,
      super$GqK_: function() {
        com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        membersValueExpression: null,
        disabledValueExpression: null,
        maxMembersCtHeight: 0,
        innerMembersContainerAnchor: null,
        fieldLabel: null,
        hideLabel: false
      },
      statics: {
        SELECTED_MEMBERS_CT_ITEM_ID: "selectMembersCtItemId",
        SELECT_MEMBERS_COMBO_ITEM_ID: "membersComboItemId"
      },
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.member.MemberSearchField",
        "com.coremedia.cms.editor.sdk.member.MembersContainer"
      ]
    };
});
