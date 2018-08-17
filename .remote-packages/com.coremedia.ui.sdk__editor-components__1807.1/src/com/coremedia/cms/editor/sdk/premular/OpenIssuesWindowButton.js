Ext.define("com.coremedia.cms.editor.sdk.premular.OpenIssuesWindowButton", function(OpenIssuesWindowButton) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import com.coremedia.cms.editor.sdk.validation.IssuesButton;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**

 A button that can open a window showing validation issues.
 This component detects a surrounding td element, attaching
 an appropriate style class if issues were found.

 * /
public class OpenIssuesWindowButton extends IssuesButton{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.openIssuesWindowButton";

    private var allIssuesVE:ValueExpression;

    public*/function OpenIssuesWindowButton$(config/*:OpenIssuesWindowButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.validation.IssuesButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.IssuesButton,{});
    var defaults_$1/*:OpenIssuesWindowButton*/ =AS3.cast(OpenIssuesWindowButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scale" , "medium");
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenIssuesWindow_btn_text')));
    AS3.setBindable(config_$1,"issuesVE" , this.getAllIssuesVE(config.bindTo));
    config_$1.hasIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenIssuesWindow_btn_errorMessage'));
    config_$1.hasNoIssuesText =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'OpenIssuesWindow_btn_tooltip'));
    var editor_OpenReferenceWindowAction_63_5_$1/*:com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction,{});
    AS3.setBindable(editor_OpenReferenceWindowAction_63_5_$1,"toggleDialog" , true);
    AS3.setBindable(editor_OpenReferenceWindowAction_63_5_$1,"activateOnToggle" , true);
    AS3.setBindable(editor_OpenReferenceWindowAction_63_5_$1,"useActionAsAnimationTarget" , true);
    var editor_IssuesWindow_67_9_$1/*: com.coremedia.cms.editor.sdk.premular.IssuesWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.IssuesWindow,{});
    AS3.setBindable(editor_IssuesWindow_67_9_$1,"bindTo" , this.getAllIssuesVE(config.bindTo));
    AS3.setBindable(editor_IssuesWindow_67_9_$1,"premular" , AS3.getBindable(config,"premular"));
    AS3.setBindable(editor_IssuesWindow_67_9_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    AS3.setBindable(editor_OpenReferenceWindowAction_63_5_$1,"dialog" , editor_IssuesWindow_67_9_$1);
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction(editor_OpenReferenceWindowAction_63_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NEke(config_$1);
  }/*

    protected*/ function getAllIssuesVE(bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
      if (!this.allIssuesVE$NEke) {
        this.allIssuesVE$NEke = bindTo.extendBy("issues.all");
      }
      return this.allIssuesVE$NEke;
    }/*

    /**
     * the property field registry for locating fields
     * /
    [Bindable]
    public var propertyFieldRegistry:PropertyFieldRegistry;

    /**
     * The value expression that this plugin binds to. It evaluates
     * to the content object whose issues are supposed to be visualized.
     * /
    public var bindTo:ValueExpression;

    /**
     The premular.
     * /
    [Bindable]
    public var premular:com.coremedia.cms.editor.sdk.premular.Premular;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.validation.IssuesButton",
      alias: "widget.com.coremedia.cms.editor.sdk.config.openIssuesWindowButton",
      allIssuesVE$NEke: null,
      constructor: OpenIssuesWindowButton$,
      super$NEke: function() {
        com.coremedia.cms.editor.sdk.validation.IssuesButton.prototype.constructor.apply(this, arguments);
      },
      getAllIssuesVE: getAllIssuesVE,
      bindTo: null,
      config: {
        propertyFieldRegistry: null,
        premular: null
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.validation.IssuesButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenReferenceWindowAction",
        "com.coremedia.cms.editor.sdk.premular.IssuesWindow"
      ]
    };
});
