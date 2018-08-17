Ext.define("com.coremedia.cms.editor.sdk.premular.SwitchDifferencingButtonBase", function(SwitchDifferencingButtonBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.button.Button;
import ext.container.Container;
import ext.menu.Item;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SwitchDifferencingButtonBase extends Container {
  protected static const MAIN_BUTTON_ITEM_ID:String = "mainButton";
  protected static const MASTER_COMPARISON_MENU_ITEM_ID:String = "master";
  protected static const VERSION_COMPARISON_MENU_ITEM_ID:String = "version";

  private var buttonStateValueExpression:ValueExpression;

  private var mainButton:Button =*/function mainButton_(){this.mainButton$JRhp=( AS3.cast(Ext.button.Button,this.getComponent(0)));}/*;
  private var masterComparisonMenuItem:Item;
  private var versionComparisonMenuItem:Item;

  private var sitesService:SitesService;

  public*/ function SwitchDifferencingButtonBase$(config/*:SwitchDifferencingButton = null*/) {if(arguments.length<=0)config=null;
    this.super$JRhp(config);mainButton_.call(this);;

    this.sitesService$JRhp = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

    this.mainButton$JRhp = AS3.cast(Ext.button.Button,this.getComponent(SwitchDifferencingButtonBase.MAIN_BUTTON_ITEM_ID));

    this.masterComparisonMenuItem$JRhp = AS3.cast(Ext.menu.Item,AS3.getBindable(this.mainButton$JRhp,"menu","DUMMY").getComponent(SwitchDifferencingButtonBase.MASTER_COMPARISON_MENU_ITEM_ID));
    this.versionComparisonMenuItem$JRhp = AS3.cast(Ext.menu.Item,AS3.getBindable(this.mainButton$JRhp,"menu","DUMMY").getComponent(SwitchDifferencingButtonBase.VERSION_COMPARISON_MENU_ITEM_ID));
    this.addMenuItemTooltip$JRhp(this.masterComparisonMenuItem$JRhp, this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_master_tooltip'));
    this.addMenuItemTooltip$JRhp(this.versionComparisonMenuItem$JRhp, this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_version_tooltip'));

    this.buttonStateValueExpression$JRhp = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeButtonState$JRhp"));
    this.buttonStateValueExpression$JRhp.addChangeListener(AS3.bind(this,"updateButton$JRhp"));

    this.mainButton$JRhp.setHandler(AS3.bind(this,"mainButtonClicked$JRhp"));
  }/*

  /**
   * The premular.
   * /
  [Bindable]
  public var premular:PremularBase;

  private*/ function addMenuItemTooltip(item/*:Item*/, tooltip/*:String*/)/*:void*/ {
    item.on("afterrender", function()/*:void*/ {
      item.el.dom.setAttribute("data-qtip", com.coremedia.ui.util.EncodingUtil.encodeForHTML(tooltip));
    });
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.updateButton$JRhp();
  }/*

  /*
   * Button state:
   * 0 - button disabled (Boolean)
   * 1 - mode (String, 'master', 'version')
   * 2 - read-only panel visible (Boolean)
   * 3 - master comparison menu item disabled (Boolean)
   * 4 - version comparison menu item disabled (Boolean)
   * /
  private*/ function computeButtonState()/*:Array*/ {
    var disabled/*:Boolean*/;
    var mode/*:String*/;
    var open/*:Boolean*/;
    var masterComparisonMenuItemDisabled/*:Boolean*/;
    var versionComparisonMenuItemDisabled/*:Boolean*/;

    open = AS3.getBindable(this,"premular").isReadOnlyDocumentPanelVisible();

    // Check UI state first.
    if (open) {
      versionComparisonMenuItemDisabled = AS3.getBindable(this,"premular").isInVersionComparisonMode();
      masterComparisonMenuItemDisabled = !versionComparisonMenuItemDisabled;
    } else {
      masterComparisonMenuItemDisabled = false;
      versionComparisonMenuItemDisabled = false;
    }

    // Then disable if comparison is not possible.
    if (!masterComparisonMenuItemDisabled) {
      var readOnlyContentObject/*:ContentObject*/ = this.computeMasterContentObjectToCompare$JRhp();
      if (!readOnlyContentObject) {
        masterComparisonMenuItemDisabled = true;
      }
    }
    if (!versionComparisonMenuItemDisabled) {
      var version/*:Version*/ = this.computeVersionToCompare$JRhp();
      if (!version) {
        versionComparisonMenuItemDisabled = true;
      }
    }

    if (AS3.getBindable(this,"premular").isInVersionComparisonMode()) {
      // Version comparison.
      if (!open && versionComparisonMenuItemDisabled && !masterComparisonMenuItemDisabled) {
        mode = 'master';
        disabled = false;
      } else {
        mode = 'version';
        disabled = !open && versionComparisonMenuItemDisabled;
      }
    } else {
      // Master comparison.
      if (!open && masterComparisonMenuItemDisabled && !versionComparisonMenuItemDisabled) {
        mode = 'version';
        disabled = false;
      } else {
        mode = 'master';
        disabled = !open && masterComparisonMenuItemDisabled;
      }
    }

    return [disabled, mode, open, masterComparisonMenuItemDisabled, versionComparisonMenuItemDisabled];
  }/*

  private*/ function updateButton()/*:void*/ {
    var buttonState/*:Array*/ = this.buttonStateValueExpression$JRhp.getValue();
    if (!buttonState) {
      return;
    }

    var disabled/*:Boolean*/ = buttonState[0];
    var mode/*:String*/ = buttonState[1];
    var open/*:Boolean*/ = buttonState[2];
    var masterComparisonMenuItemDisabled/*:Boolean*/ = buttonState[3];
    var versionComparisonMenuItemDisabled/*:Boolean*/ = buttonState[4];

    this.setDisabled(disabled);

    this.mainButton$JRhp.setIconCls(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_' + mode + '_icon'));

    var text/*:String*/;
    if (open) {
      text = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_hide_tooltip');
    } else {
      text = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SwitchDifferencingButton_' + mode + '_tooltip');
    }
    // TODO: setAriaLabel introduced in ButtonAriaReadyOverride, needs to be in EXT AS API
    // We do not use setText() to avoid layout run.
    this.mainButton$JRhp['setAriaLabel'](text);
    this.mainButton$JRhp.setTooltip(text);

    this.masterComparisonMenuItem$JRhp.setDisabled(masterComparisonMenuItemDisabled);
    this.versionComparisonMenuItem$JRhp.setDisabled(versionComparisonMenuItemDisabled);
  }/*

  private*/ function mainButtonClicked()/*:void*/ {
    var buttonState/*:Array*/ = this.computeButtonState$JRhp();

    var disabled/*:Boolean*/ = buttonState[0];
    var mode/*:String*/ = buttonState[1];
    var open/*:Boolean*/ = buttonState[2];

    if (disabled) {
      return;
    }

    this.mon(AS3.getBindable(this,"premular"), com.coremedia.cms.editor.sdk.premular.PremularBase.STATE_EVENT_NAME,AS3.bind( this,"restoreFocus"));

    if (open) {
      this.mainButton$JRhp.setPressed(false);
      AS3.getBindable(this,"premular").closeReadOnlyDocumentPanel();
    } else {
      this.mainButton$JRhp.setPressed(true);
      if (mode === 'master') {
        this.openMasterComparison();
      } else {
        this.openVersionComparison();
      }
    }
  }/*

  public*/ function restoreFocus()/*:void*/ {var this$=this;
    this.on("afterlayout", function ()/*:void*/ {
      this$.mainButton$JRhp.focus();
    },this, {single:true});
  }/*

  protected*/ function openMasterComparison()/*:void*/ {var this$=this;
    this.mainButton$JRhp.setPressed(true);
    if (!AS3.getBindable(this,"premular").getReadOnlyContent() || AS3.getBindable(this,"premular").isInVersionComparisonMode()) {
      var masterExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeMasterContentObjectToCompare$JRhp"));
      masterExpression.loadValue(function(masterContentObject/*:ContentObject*/)/*:void*/ {
        if (masterContentObject) {
          AS3.getBindable(this$,"premular").openInReadOnlyDocumentPanel(masterContentObject);
        }
      });
    } else {
      AS3.getBindable(this,"premular").openInReadOnlyDocumentPanel();
    }
  }/*

  protected*/ function openVersionComparison()/*:void*/ {var this$=this;
    this.mainButton$JRhp.setPressed(true);
    if (!AS3.getBindable(this,"premular").getReadOnlyContent() || !AS3.getBindable(this,"premular").isInVersionComparisonMode()) {
      var versionExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeVersionToCompare$JRhp"));
      versionExpression.loadValue(function(version/*:Version*/)/*:void*/ {
        if (version) {
          AS3.getBindable(this$,"premular").openInReadOnlyDocumentPanel(version);
        }
      });
    } else {
      AS3.getBindable(this,"premular").openInReadOnlyDocumentPanel();
    }
  }/*

  /**
   * Return the translated master version or the current master content if any.
   * If something on the way is not loaded, it is loaded and undefined is returned.
   *
   * @return the master version, master content, null or undefined
   * /
  private*/ function computeMasterContentObjectToCompare()/*:ContentObject*/ {
    var content/*:Content*/ = AS3.getBindable(this,"premular").getContent();

    var masterContent/*:Content*/ = this.sitesService$JRhp.getMaster(content);
    if (masterContent === undefined) {
      return undefined;
    }
    if (masterContent === null) {
      return null;
    }
    if (!masterContent.isLoaded()) {
      masterContent.load();
      return undefined;
    }
    if (!masterContent.getState().readable) {
      return null;
    }

    var toBeTranslatedVersion/*:Version*/ = com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getVersionToBeTranslated(masterContent);
    if (toBeTranslatedVersion === undefined) {
      return undefined;
    }
    if (toBeTranslatedVersion) {
      return toBeTranslatedVersion;
    }

    var masterVersion/*:Version*/ = this.sitesService$JRhp.getMasterVersionOrDerivedFromVersion(content);
    if (masterVersion === undefined) {
      return undefined;
    }
    if (masterVersion) {
      return masterVersion;
    }

    return masterContent.getCheckedInVersion() || masterContent.getCheckedOutVersion();
  }/*

  /**
   * Return the latest published version or the latest checked-in version if checked-out
   * or the previous version if checked-in, or null if no version exists.
   * If something on the way is not loaded, it is loaded and undefined is returned.
   *
   * @return the version to compare, null or undefined
   * /
  private*/ function computeVersionToCompare()/*:Version*/ {
    var content/*:Content*/ = AS3.getBindable(this,"premular").getContent();
    var latestPublishedVersion/*:Version*/ = content.getLatestPublishedVersion();
    if (latestPublishedVersion) {
      return latestPublishedVersion;
    }

    var versionHistory/*:com.coremedia.cap.content.VersionHistory*/ = content.getVersionHistory();
    if (!versionHistory || !versionHistory.isLoaded()) {
      versionHistory && versionHistory.load();
      return undefined;
    }

    var versions/*:Vector.<Version>*/ = versionHistory.getItems();
    if (!versions || versions.length === 0) {
      return null;
    }

    if (versions.length === 1) {
      return versions[0];
    }
    if (content.isCheckedIn()) {
      return versions[versions.length - 2];
    } else {
      return versions[versions.length - 1];
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.buttonStateValueExpression$JRhp.removeChangeListener(AS3.bind(this,"updateButton$JRhp"));

    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      buttonStateValueExpression$JRhp: null,
      masterComparisonMenuItem$JRhp: null,
      versionComparisonMenuItem$JRhp: null,
      sitesService$JRhp: null,
      constructor: SwitchDifferencingButtonBase$,
      super$JRhp: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      addMenuItemTooltip$JRhp: addMenuItemTooltip,
      afterRender: afterRender,
      computeButtonState$JRhp: computeButtonState,
      updateButton$JRhp: updateButton,
      mainButtonClicked$JRhp: mainButtonClicked,
      restoreFocus: restoreFocus,
      openMasterComparison: openMasterComparison,
      openVersionComparison: openVersionComparison,
      computeMasterContentObjectToCompare$JRhp: computeMasterContentObjectToCompare,
      computeVersionToCompare$JRhp: computeVersionToCompare,
      beforeDestroy: beforeDestroy,
      config: {premular: null},
      statics: {
        MAIN_BUTTON_ITEM_ID: "mainButton",
        MASTER_COMPARISON_MENU_ITEM_ID: "master",
        VERSION_COMPARISON_MENU_ITEM_ID: "version"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.menu.Item",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularBase",
        "com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil"
      ]
    };
});
