Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentForm", function(DocumentForm) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.ui.components.FloatingToolbarContainer;import com.coremedia.ui.mixins.ILazyItemsContainerMixin;
import net.jangaroo.ext.Exml;
import ext.form.field.BaseField;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
[PublicApi]
/**
 This is the base class for all document forms. Subtypes should be named after the content type which the form should edit.
 If used as a standalone document form, the <code>itemId</code> must contain the exact content type of documents for which this form
 is appropriate.
 If used as a tab in a tabbed document form, the <code>title</code> attribute should be set.
 The options <code>bindTo</code>, <code>hideIssues</code>,
 and <code>forceReadOnlyValueExpression</code> are forwarded
 to all nested property fields implicitly.

 @see com.coremedia.cms.editor.sdk.premular.DocumentForm
 * /
public class DocumentForm extends FloatingToolbarContainer implements com.coremedia.ui.mixins.ILazyItemsContainerMixin{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ContainerSkin;

    import ext.dom.Element;
    import ext.layout.container.ContainerLayout;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentForm";

    public*/function DocumentForm$(config/*:DocumentForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.FloatingToolbarContainer*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbarContainer,{});
    var defaults_$1/*:DocumentForm*/ =AS3.cast(DocumentForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["itemsLazyUntilEvent"] = "beforerender";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.DARK_200.getSkin());
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.padding = "12px";
    var field_100_7_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    field_100_7_$1.labelAlign = "top";
    field_100_7_$1.labelSeparator = "";
    var editor_PropertyField_103_11_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_103_11_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyField_103_11_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    AS3.setBindable(editor_PropertyField_103_11_$1,"premularConfigurationVE" , AS3.getBindable(config,"premularConfigurationVE"));
    AS3.setBindable(editor_PropertyField_103_11_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));

    delete editor_PropertyField_103_11_$1['xtype'];
    delete editor_PropertyField_103_11_$1['xclass'];
    net.jangaroo.ext.Exml.apply(field_100_7_$1, editor_PropertyField_103_11_$1);
    config_$1["defaultType"] = field_100_7_$1['xtype'];
    delete field_100_7_$1['xtype'];
    delete field_100_7_$1['xclass'];
    config_$1.defaults = field_100_7_$1;
    var layout_Anchor_111_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_111_5_$1);
    var ui_VerticalSpacingPlugin_114_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_114_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_114_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tjkX(config_$1);
  }/*

    /**
     * A value expression returning the Content to be edited by this form.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The premular configuration VE that holds all prefetched data.
     * /
    [Bindable]
    public var premularConfigurationVE:ValueExpression;

    private var lastScrollTop:Number = NaN;

    public*/ function isAutoHideEnabled()/*:Boolean*/ {
      return AS3.getBindable(this,"autoHide");
    }/*

    override protected*/ function beforeLayout()/*:void*/ {
      var el/*:Element*/ = this.getEl();
      if (el) {
        this.lastScrollTop$tjkX = el.dom.scrollTop;
      }
      com.coremedia.ui.components.FloatingToolbarContainer.prototype.beforeLayout.call(this);
    }/*

    override protected*/ function afterLayout(layout/*:ContainerLayout*/)/*:void*/ {
      com.coremedia.ui.components.FloatingToolbarContainer.prototype.afterLayout.call(this,layout);
      if (!isNaN(this.lastScrollTop$tjkX)) {
        this.getEl().dom.scrollTop = this.lastScrollTop$tjkX;
      }
    }/*

    /** @inheritDoc * /
    public native function itemsAreLazy():Boolean;

    /** @inheritDoc * /
    public native function get itemsLazyUntilEvent():String;

    /** @inheritDoc * /
    public native function set itemsLazyUntilEvent(eventName:String):void;

    /** The title of this form when used as a tab. * /
    [Bindable]
    public var title:String;


    /** Don't show any validation issues on the property fields of this form. * /
    [Bindable]
    public var hideIssues:Boolean;


    /** Automatically hide this tab if the user has this feature enabled in the preferences. * /
    [Bindable]
    public var autoHide:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.FloatingToolbarContainer",
      mixins: ["com.coremedia.ui.mixins.LazyItemsContainerMixin"],
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentForm",
      constructor: DocumentForm$,
      super$tjkX: function() {
        com.coremedia.ui.components.FloatingToolbarContainer.prototype.constructor.apply(this, arguments);
      },
      lastScrollTop$tjkX: NaN,
      isAutoHideEnabled: isAutoHideEnabled,
      beforeLayout: beforeLayout,
      afterLayout: afterLayout,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        premularConfigurationVE: null,
        title: null,
        hideIssues: false,
        autoHide: false
      },
      requires: [
        "Ext.form.field.Base",
        "Ext.layout.container.Anchor",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.FloatingToolbarContainer",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PropertyField"]
    };
});
