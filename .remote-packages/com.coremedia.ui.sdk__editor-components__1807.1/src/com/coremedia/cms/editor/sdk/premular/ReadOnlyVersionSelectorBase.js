Ext.define("com.coremedia.cms.editor.sdk.premular.ReadOnlyVersionSelectorBase", function(ReadOnlyVersionSelectorBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.AriaUtils;
import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;
import ext.button.Button;
import ext.menu.CheckItem;
import ext.menu.Item;
import ext.menu.Separator;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ReadOnlyVersionSelectorBase extends Button {
  private var versionValueExpression:ValueExpression;
  private var versionHistoryValueExpression:ValueExpression;
  private var mainMenuItemsValueExpression:ValueExpression;
  private var versionInfoValueExpression:ValueExpression;
  private var versionTooltipValueExpression:ValueExpression;

  /**
   * A value expression to the Content shown in the read-only form.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * The premular containing this toolbar.
   * /
  [Bindable]
  public var premular:Premular;

  /**
   * Whether to show the selected version in the main menu; default: true.
   * /
  [Bindable]
  public var showSelectedVersion:Boolean = true;

  /**
   * Whether to show the versions surrounding the selected version in the main menu; default: true.
   * /
  [Bindable]
  public var showSurroundingVersions:Boolean = true;

  public*/ function ReadOnlyVersionSelectorBase$(config/*:ReadOnlyVersionSelector = null*/) {if(arguments.length<=0)config=null;
    config.ariaLabel = com.coremedia.ui.util.AriaUtils.DUMMY_TEXT;
    this.super$5yCa(config);
  }/*

  protected*/ function getContent()/*:Content*/ {
    return AS3.getBindable(this,"bindTo") &&AS3.as( AS3.getBindable(this,"bindTo").getValue(),  com.coremedia.cap.content.Content);
  }/*

  protected*/ function getVersionInfoValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.versionInfoValueExpression$5yCa) {
      this.versionInfoValueExpression$5yCa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var version/*:Version*/ = this$.getVersionValueExpression$5yCa().getValue();
        if (version === undefined) { return undefined; }
        if (!version) { return ""; }

        var pattern/*:String*/ = version.isLatestPublishedVersion() ?
                this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_version_latestPublished_text') :
                this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_version_default_text');

        var inVersionComparisonMode/*:Boolean*/ = AS3.getBindable(this$,"premular").isInVersionComparisonMode();
        if (!inVersionComparisonMode) {
          pattern = version === AS3.getBindable(this$,"premular").getMasterVersionValueExpression().getValue() ?
                  this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_version_latestTranslated_text') :
                  version === com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getVersionToBeTranslated(version.getContainingContent()) ?
                          this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_version_toBeTranslated_text') : pattern;

        }

        return com.coremedia.cms.editor.sdk.util.FormatUtil.format(pattern, version.getVersionNumber());
      });
    }

    return this.versionInfoValueExpression$5yCa;
  }/*

  protected*/ function getVersionTooltipValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.versionTooltipValueExpression$5yCa) {
      this.versionTooltipValueExpression$5yCa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var version/*:Version*/ = this$.getVersionValueExpression$5yCa().getValue();
        if (version === undefined) { return undefined; }
        if (!version) { return ""; }

        return com.coremedia.cms.editor.sdk.util.FormatUtil.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_versionTooltip_text'),
                version.getVersionNumber(),
                com.coremedia.ui.util.EncodingUtil.encodeForHTML(version.getEditor().getName()),
                com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(version.getEditionDate(),
                        this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'))),
                com.coremedia.ui.util.EncodingUtil.encodeForHTML(this$.computeStateString$5yCa(version)));
      });
    }

    return this.versionTooltipValueExpression$5yCa;
  }/*

  private*/ function computeStateString(version/*:Version*/)/*:String*/ {
    var latestTranslatedKey/*:String*/ = version === AS3.getBindable(this,"premular").getMasterVersionValueExpression().getValue() ?
            '_latestTranslated' :
    version === com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getVersionToBeTranslated(version.getContainingContent()) ?
            '_toBeTranslated' : '';

    var publishedKey/*:String*/;
    if (version.isLatestPublishedVersion()) {
      publishedKey = '_latestPublished';
    } else if (version.getPublisher()) {
      publishedKey = '_published';
    } else {
      publishedKey = '_notPublished';
    }

    var pattern/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_versionTooltip_state' +
        latestTranslatedKey + publishedKey);

    var publisherName/*:String*/ = '';
    var publicationDateString/*:String*/ = '';

    if (version.getPublicationDate()) {
      publisherName = version.getPublisher().getName();
      publicationDateString = Ext.Date.format(version.getPublicationDate(),
              this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
    }

    return com.coremedia.cms.editor.sdk.util.FormatUtil.format(pattern, publisherName, publicationDateString);
  }/*

  protected*/ function getMainMenuItemsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.mainMenuItemsValueExpression$5yCa) {
      this.mainMenuItemsValueExpression$5yCa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var allVersions/*:Array*/ = this$.getVersionHistoryValueExpression$5yCa().getValue();
        if (allVersions === undefined) { return undefined; }
        if (!allVersions) { return []; }

        var importantVersionItemIds/*:Array*/ = this$.computeImportantVersionItemIds$5yCa(allVersions);
        var mainMenuItems/*:Array*/ = [];
        var unimportantVersionItems/*:Array*/;

        for (var i/*:int*/ = 0; i < allVersions.length; i++) {
          var currentVersion/*:Version*/ = allVersions[i];
          var currentVersionItemId/*:String*/ = importantVersionItemIds[i] || computeItemId$static(currentVersion);
          var versionItem/*:VersionComparisonMenuItem*/ = this$.createVersionItem$5yCa(currentVersion, currentVersionItemId);

          if (importantVersionItemIds[i]) {
            addUnimportantVersions();
            mainMenuItems.push(versionItem);
          } else {
            if (!unimportantVersionItems) {
              unimportantVersionItems = [];
            }
            unimportantVersionItems.push(versionItem);
          }
        }

        addUnimportantVersions();

        var menuSeparatorCfg/*:Separator*/ = AS3.cast(Ext.menu.Separator,{});
        menuSeparatorCfg.itemId = 'enableDifferencingCheckBoxSeparator';
        mainMenuItems.push(menuSeparatorCfg);

        mainMenuItems.push(this$.createEnableDifferencingCheckItem$5yCa());

        return mainMenuItems;

        function addUnimportantVersions()/*:void*/ {
          if (unimportantVersionItems) {
            if (unimportantVersionItems.length < 2) {
              mainMenuItems = mainMenuItems.concat(unimportantVersionItems);
              unimportantVersionItems = null;
            } else {
              mainMenuItems.push(this$.createVersionSubMenu$5yCa(unimportantVersionItems));
              unimportantVersionItems = null;
            }
          }
        }
      });
    }

    return this.mainMenuItemsValueExpression$5yCa;
  }/*

  private*/ function computeImportantVersionItemIds(allVersions/*:Array*/)/*:Array*/ {
    var importantVersionIds/*:Array*/ = [];
    var importantVersions/*:Object*/ = this.computeImportantVersionMap$5yCa();

    for (var i/*:int*/ = 0; i < allVersions.length; i++) {
      var currentVersion/*:Version*/ = allVersions[i];
      var selectedVersionAdded/*:Boolean*/ = false;

      for (var key/*:String*/ in importantVersions) {
        if (currentVersion === importantVersions[key]) {
          if (!importantVersionIds[i]) {
            importantVersionIds[i] = computeItemId$static(currentVersion);
          }
          // make itemId unique for usage with bindItemsPlugin & reuseComponents:
          // newest, latest published / translated version have a different visualization than ordinary versions.
          importantVersionIds[i] += '_' + key;
          if (key === 'selected') {
            selectedVersionAdded = true;
          }
        }
      }

      if (AS3.getBindable(this,"showSelectedVersion") && AS3.getBindable(this,"showSurroundingVersions") && selectedVersionAdded) {
        var previousIndex/*:int*/ = i - 1;
        if (previousIndex >= 0 && !importantVersionIds[previousIndex]) {
          importantVersionIds[previousIndex] = computeItemId$static(AS3.cast(com.coremedia.cap.content.Version,allVersions[previousIndex]));
        }
        var nextIndex/*:int*/ = i + 1;
        if (nextIndex < allVersions.length && !importantVersionIds[nextIndex]) {
          importantVersionIds[nextIndex] = computeItemId$static(AS3.cast(com.coremedia.cap.content.Version,allVersions[nextIndex]));
        }
      }
    }

    return importantVersionIds;
  }/*

  private static*/ function computeItemId$static(version/*:Version*/)/*:String*/ {
    return version.getUriPath().replace(/\//g, '-');
  }/*

  private*/ function computeImportantVersionMap()/*:Object*/ {
    var importantVersions/*:Object*/ = {};

    var selectedVersion/*:Version*/ = this.getVersionValueExpression$5yCa().getValue();
    if (selectedVersion === undefined) { return undefined; }
    if (!selectedVersion) { return importantVersions; }

    var content/*:Content*/ = AS3.getBindable(this,"premular").getContent();
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

    var selectedContent/*:Content*/ = selectedVersion.getContainingContent();
    var newestVersion/*:Version*/ = selectedContent.getCheckedInVersion() || selectedContent.getCheckedOutVersion();
    var latestPublishedVersion/*:Version*/ = selectedContent.getLatestPublishedVersion();
    var latestTranslatedVersion/*:Version*/ = AS3.getBindable(this,"premular").isInVersionComparisonMode() ? null :
            sitesService.getMasterVersion(content);
    var toBeTranslatedVersion/*:Version*/ = AS3.getBindable(this,"premular").isInVersionComparisonMode() ? null :
            com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getVersionToBeTranslated(selectedContent);

    importantVersions['newest'] = newestVersion;
    importantVersions['latestPublished'] = latestPublishedVersion;
    importantVersions['latestTranslated'] = latestTranslatedVersion;
    importantVersions['toBeTranslated'] = toBeTranslatedVersion;

    if (sitesService.getMasterVersionNumber(content) < 0) {
      importantVersions['derivedFrom'] = sitesService.getMasterVersionOrDerivedFromVersion(content);
    }

    if (AS3.getBindable(this,"showSelectedVersion")) {
      importantVersions['selected'] = selectedVersion;
    }

    return importantVersions;
  }/*

  private*/ function createVersionItem(version/*:Version*/, itemId/*:String*/)/*:VersionComparisonMenuItem*/ {
    var versionComparisonMenuItemCfg/*:VersionComparisonMenuItem*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItem,{});
    versionComparisonMenuItemCfg.itemId = itemId;
    AS3.setBindable(versionComparisonMenuItemCfg,"premular" , AS3.getBindable(this,"premular"));
    AS3.setBindable(versionComparisonMenuItemCfg,"version" , version);
    return versionComparisonMenuItemCfg;
  }/*

  private*/ function createVersionSubMenu(currentSubMenuItems/*:Array*/)/*:Item*/ {
    var startVersionNumber/*:int*/ = AS3.cast(com.coremedia.cap.content.Version,currentSubMenuItems[0].version).getVersionNumber();
    var endVersionNumber/*:int*/ = AS3.cast(com.coremedia.cap.content.Version,currentSubMenuItems[currentSubMenuItems.length - 1].version).getVersionNumber();

    var menuItemCfg/*:Item*/ = AS3.cast(Ext.menu.Item,{});
    menuItemCfg.itemId = 'subMenu_' + startVersionNumber + '-' + endVersionNumber + '_' + currentSubMenuItems.length;
    AS3.setBindable(menuItemCfg,"text" , com.coremedia.cms.editor.sdk.util.FormatUtil.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_versionSubMenu_text'), startVersionNumber, endVersionNumber, currentSubMenuItems.length));
    var lazyAutoScrollMenuCfg/*:LazyAutoScrollMenu*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.LazyAutoScrollMenu,{});
    AS3.setBindable(lazyAutoScrollMenuCfg,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(currentSubMenuItems));
    AS3.setBindable(lazyAutoScrollMenuCfg,"premular" , AS3.getBindable(this,"premular"));
    AS3.setBindable(menuItemCfg,"menu" , lazyAutoScrollMenuCfg);
    return menuItemCfg;
  }/*

  private*/ function createEnableDifferencingCheckItem()/*:CheckItem*/ {
    var menuCheckItemCfg/*:CheckItem*/ = AS3.cast(Ext.menu.CheckItem,{});
    menuCheckItemCfg.itemId = 'enableDifferencingCheckBox';
    AS3.setBindable(menuCheckItemCfg,"checked" , !(AS3.getBindable(this,"premular").getDiffManager().isPaused()));
    AS3.setBindable(menuCheckItemCfg,"text" , AS3.getBindable(this,"premular").isInVersionComparisonMode() ?
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_enableDifferencing_versionComparison_text') :
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionSelector_enableDifferencing_masterComparison_text'));
    var enableDifferencingActionCfg/*:EnableDifferencingAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction,{});
    AS3.setBindable(enableDifferencingActionCfg,"premular" , AS3.getBindable(this,"premular"));
    menuCheckItemCfg.baseAction = new com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction(enableDifferencingActionCfg);
    return menuCheckItemCfg;
  }/*

  private*/ function getVersionValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.versionValueExpression$5yCa) {
      this.versionValueExpression$5yCa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Version*/ {
        var content/*:Content*/ = this$.getContent();
        if (!content) {
          return null;
        }

        var version/*:Version*/;
        if (AS3.is(content,  com.coremedia.cms.editor.sdk.premular.HistoricContent)) {
          version =  AS3.cast(com.coremedia.cms.editor.sdk.premular.HistoricContent,content).getVersion();
        } else {
          version = content.getCheckedInVersion() || content.getCheckedOutVersion();
        }

        if (!version) {
          return null;
        }
        if (version.isDestroyed() === undefined) {
          version.load();
          return undefined;
        }

        if (version.isDestroyed()) {
          return null;
        }

        return version;
      });
    }

    return this.versionValueExpression$5yCa;
  }/*

  private*/ function getVersionHistoryValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.versionHistoryValueExpression$5yCa) {
      this.versionHistoryValueExpression$5yCa = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var content/*:Content*/ = this$.getContent();
        if (!content) {
          return undefined;
        }

        var versionHistory/*:com.coremedia.cap.content.VersionHistory*/ = content.getVersionHistory();
        if (!versionHistory) {
          return undefined;
        }

        var items/*:Array*/ =AS3.as( versionHistory.getItems(),  Array);
        return items ? items.concat().reverse() : undefined;
      });
    }

    return this.versionHistoryValueExpression$5yCa;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.button.Button",
      versionValueExpression$5yCa: null,
      versionHistoryValueExpression$5yCa: null,
      mainMenuItemsValueExpression$5yCa: null,
      versionInfoValueExpression$5yCa: null,
      versionTooltipValueExpression$5yCa: null,
      constructor: ReadOnlyVersionSelectorBase$,
      super$5yCa: function() {
        Ext.button.Button.prototype.constructor.apply(this, arguments);
      },
      getContent: getContent,
      getVersionInfoValueExpression: getVersionInfoValueExpression,
      getVersionTooltipValueExpression: getVersionTooltipValueExpression,
      computeStateString$5yCa: computeStateString,
      getMainMenuItemsValueExpression: getMainMenuItemsValueExpression,
      computeImportantVersionItemIds$5yCa: computeImportantVersionItemIds,
      computeImportantVersionMap$5yCa: computeImportantVersionMap,
      createVersionItem$5yCa: createVersionItem,
      createVersionSubMenu$5yCa: createVersionSubMenu,
      createEnableDifferencingCheckItem$5yCa: createEnableDifferencingCheckItem,
      getVersionValueExpression$5yCa: getVersionValueExpression,
      getVersionHistoryValueExpression$5yCa: getVersionHistoryValueExpression,
      config: {
        bindTo: null,
        premular: null,
        showSelectedVersion: true,
        showSurroundingVersions: true
      },
      requires: [
        "Ext.Date",
        "Ext.button.Button",
        "Ext.menu.CheckItem",
        "Ext.menu.Item",
        "Ext.menu.Separator",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.Version",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.AriaUtils",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.cms.editor.sdk.premular.LazyAutoScrollMenu",
        "com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItem",
        "com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction",
        "com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil",
        "com.coremedia.cms.editor.sdk.util.FormatUtil"
      ]
    };
});
