Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorBase", function(PersonaSelectorBase) {/*package com.coremedia.personalization.ui.persona.selector {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.cms.editor.sdk.preview.PreviewPanelBase;
import com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar;
import com.coremedia.personalization.ui.persona.helper.PersonaActivator;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.button.Button;
import ext.event.Event;

public class PersonaSelectorBase extends Button implements IValidationStateMixin{

  public static const MENU_ACTIVATED_EVENT:String = "menuActivated";
  public static const MENU_DEACTIVATED_EVENT:String = "menuDeactivated";
  internal static const PERSONA_CHANGED_EVENT:String = "personaChanged";

  private var myPersonaSelector:PersonaSelectorMenu;
  private var personaActivator:PersonaActivator;

  private var currentContent:Content;
  private var currentContentValueExpression:ValueExpression;
  private var disabledValueExpression:ValueExpression;
  private var activePersonaValueExpression:ValueExpression;

  public*/ function PersonaSelectorBase$(config/*:PersonaSelector = null*/) {if(arguments.length<=0)config=null;
    this.currentContentValueExpression$yWn9 = AS3.getBindable(config,"contentValueExpression");
    this.super$yWn9(config);
    this.initValidationStateMixin();

    this.activePersonaValueExpression$yWn9 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.personalization.ui.persona.helper.PersonaActivator.P13N_TESTCONTEXT_PARAM, this.getPersonaActivator().getUrlParameterBean());
    this.activePersonaValueExpression$yWn9.addChangeListener(AS3.bind(this,"personaChanged$yWn9"));
  }/*

  private*/ function personaChanged()/*:void*/ {
    this.fireEvent(PersonaSelectorBase.PERSONA_CHANGED_EVENT);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.button.Button.prototype.afterRender.call(this);
    this.listenToEvents$yWn9();
  }/*

  override public*/ function showMenu(clickEvent/*:Object*/)/*:void*/ {
    Ext.button.Button.prototype.showMenu.call(this,clickEvent);
    this.getPersonaSelectorMenu$yWn9().fireEvent(PersonaSelectorBase.MENU_ACTIVATED_EVENT);
  }/*


  //don't hide the menu when losing the focus by clicking on a not focusable components like the persona images.
  override protected*/ function onFocusLeave(e/*:Event*/)/*:void*/ {
    //do nothing
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.activePersonaValueExpression$yWn9.removeChangeListener(AS3.bind(this,"personaChanged$yWn9"));
    this.getPersonaActivator() && this.getPersonaActivator().getUrlValueExpression() && this.getPersonaActivator().getUrlValueExpression().removeChangeListener(AS3.bind(this,"handlePreviewUrlChange$yWn9"));
    Ext.button.Button.prototype.onDestroy.call(this);
  }/*

  private*/ function listenToEvents()/*:void*/ {var this$=this;
    this.mon(this.getPersonaSelectorMenu$yWn9(), "hide", function ()/*:void*/ {
      this$.indicateActiveContextButton$yWn9(this$.getPersonaActivator().isAnyPersonaActive());
      this$.getPersonaSelectorMenu$yWn9().fireEvent(PersonaSelectorBase.MENU_DEACTIVATED_EVENT);
    });

    this.getPersonaActivator().getUrlValueExpression().addChangeListener(AS3.bind(this,"handlePreviewUrlChange$yWn9"));
  }/*

  private*/ function handlePreviewUrlChange()/*:void*/ {
    this.indicateActiveContextButton$yWn9(this.getPersonaActivator().isAnyPersonaActive());
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='contentVariableName')]
  public*/ function setContent(content/*:Content*/)/*:void*/ {
    this.currentContent$yWn9 = content;
    this.getCurrentContentValueExpression$yWn9().setValue(this.currentContent$yWn9);
  }/*

  private*/ function getCurrentContentValueExpression()/*:ValueExpression*/ {
    if (!this.currentContentValueExpression$yWn9) {
      this.currentContentValueExpression$yWn9 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.currentContent$yWn9);
    }
    return this.currentContentValueExpression$yWn9;
  }/*

  protected*/ function getDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.disabledValueExpression$yWn9) {
      this.disabledValueExpression$yWn9 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var value/*:**/ = this$.getCurrentContentValueExpression$yWn9().getValue();
        return (value ? false : true);
      });
    }
    return this.disabledValueExpression$yWn9;
  }/*


  /**
   * Add a blue line indicator at the buttons bottom if there is a selected persona. Mark the button as "pressed" as
   * well.
   * @param isActive
   * /
  private*/ function indicateActiveContextButton(isActive/*:Boolean*/)/*:void*/ {
    if (isActive) {
      AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
      this.setPressed(true);
    } else {
      this.setPressed(false);
      AS3.setBindable(this,"validationState" , undefined);
    }
  }/*

  private*/ function getPersonaSelectorMenu()/*:PersonaSelectorMenu*/ {
    if (!this.myPersonaSelector$yWn9) {
      this.myPersonaSelector$yWn9 =AS3.as( AS3.getBindable(this,"menu","DUMMY"),  com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu);
    }
    return this.myPersonaSelector$yWn9;
  }/*

  public*/ function getPersonaActivator()/*:PersonaActivator*/ {
    if (!this.personaActivator$yWn9) {
      var previewPanelToolbarComp/*:PreviewPanelToolbar*/ = AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar,this.findParentByType(com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar.xtype));

      if(previewPanelToolbarComp) {
        var urlValueExpression/*:ValueExpression*/ =AS3.getBindable(previewPanelToolbarComp,"urlValueExpression","DUMMY");
        var urlParameterBean/*:Bean*/ = AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelBase,this.findParentByType(com.coremedia.cms.editor.sdk.preview.PreviewPanel.xtype)).getUrlParameterBean();
        this.personaActivator$yWn9 = new com.coremedia.personalization.ui.persona.helper.PersonaActivator(urlValueExpression, urlParameterBean);
      }
    }
    return this.personaActivator$yWn9;

  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Called from the P13NStudioPlugin.exml (cm7 workspace).
   * @param path the path to lookup for personas (if there are personas, they are added to this personaMenu)
   * @param groupHeaderLabel the label that is displayed as groupHeader inside this personaMenu
   * /
  public*/ function addPath(path/*:String*/, groupHeaderLabel/*:String = ''*/)/*:void*/ {if(arguments.length<=1)groupHeaderLabel='';
    //delegate to SelectorMenu
    this.getPersonaSelectorMenu$yWn9().addAdditionalPath(path, groupHeaderLabel);
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Remove all provided paths from the selector.
   * /
  public*/ function clearPath()/*:void*/ {
    //delegate to SelectorMenu
    this.getPersonaSelectorMenu$yWn9().clearPaths();
  }/*

  internal*/ function applyReusabilityState(state/*:Object*/)/*:void*/ {
    this.activePersonaValueExpression$yWn9.setValue(state.persona);
  }/*

  internal*/ function saveReusabilityState()/*:Object*/ {
    return {persona: this.activePersonaValueExpression$yWn9.getValue()};
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {setContent: [
        "InjectFromExtParent",
        [
          "variableNameConfig",
          "contentVariableName"
        ]
      ]},
      myPersonaSelector$yWn9: null,
      personaActivator$yWn9: null,
      currentContent$yWn9: null,
      currentContentValueExpression$yWn9: null,
      disabledValueExpression$yWn9: null,
      activePersonaValueExpression$yWn9: null,
      constructor: PersonaSelectorBase$,
      super$yWn9: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      personaChanged$yWn9: personaChanged,
      afterRender: afterRender,
      showMenu: showMenu,
      onFocusLeave: onFocusLeave,
      onDestroy: onDestroy,
      listenToEvents$yWn9: listenToEvents,
      handlePreviewUrlChange$yWn9: handlePreviewUrlChange,
      setContent: setContent,
      getCurrentContentValueExpression$yWn9: getCurrentContentValueExpression,
      getDisabledValueExpression: getDisabledValueExpression,
      indicateActiveContextButton$yWn9: indicateActiveContextButton,
      getPersonaSelectorMenu$yWn9: getPersonaSelectorMenu,
      getPersonaActivator: getPersonaActivator,
      addPath: addPath,
      clearPath: clearPath,
      applyReusabilityState: applyReusabilityState,
      saveReusabilityState: saveReusabilityState,
      statics: {
        MENU_ACTIVATED_EVENT: "menuActivated",
        MENU_DEACTIVATED_EVENT: "menuDeactivated",
        PERSONA_CHANGED_EVENT: "personaChanged"
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: [
        "com.coremedia.personalization.ui.persona.helper.PersonaActivator",
        "com.coremedia.personalization.ui.persona.selector.PersonaSelectorMenu"
      ]
    };
});
