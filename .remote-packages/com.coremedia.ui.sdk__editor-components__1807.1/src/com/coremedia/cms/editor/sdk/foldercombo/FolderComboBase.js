Ext.define("com.coremedia.cms.editor.sdk.foldercombo.FolderComboBase", function(FolderComboBase) {/*package com.coremedia.cms.editor.sdk.foldercombo {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.Premular;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.cms.editor.sdk.util.ContentCreationUtil;
import com.coremedia.cms.editor.sdk.util.PathFormatter;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;
import ext.panel.Panel;

/**
 * Superclass of the folder combo that allows to input or selected previously used folders.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo')]
public class FolderComboBase extends LocalComboBox {
  private var availableFolderPathsExpression:ValueExpression;
  private var validationExpression:ValueExpression;
  private var config:FolderCombo;

  private static*/ var lookupMethods$static/*:Array*/;/* =*/function lookupMethods$static_(){lookupMethods$static=( []);};/*

  public*/ function FolderComboBase$(config/*:FolderCombo = null*/) {if(arguments.length<=0)config=null;
    if (!AS3.getBindable(config,"fieldLabel","DUMMY")) {
      AS3.setBindable(config,"fieldLabel" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo', 'FolderCombo_title'));
    }
    this.config$yEJ9 = config;

    this.super$yEJ9(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.LocalComboBox.prototype.afterRender.call(this);
    var available/*:ValueExpression*/ = this.getAvailablePathsExpression();
    this.selectFirst$yEJ9(available);
    this.getAvailablePathsExpression().addChangeListener(AS3.bind(this,"selectFirst$yEJ9"));
    this.addListener('value',AS3.bind( this,"validateFolder$yEJ9"));
    this.validateFolder$yEJ9();
  }/*

  private*/ function validateFolder()/*:void*/ {var this$=this;
    AS3.setBindable(this,"validationState" , null);
    AS3.setBindable(this,"validationMessage" , null);
    this.getValidationExpression().setValue(true);

    var path/*:String*/ = this.getValue();
    if (!path) {
      AS3.setBindable(this,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
      AS3.setBindable(this,"validationMessage" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo', 'FolderCombo_emptyText'));
      this.getValidationExpression().setValue(false);
      return;
    }

    var child/*:Content*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getChild(path);
    if (child) {
      child.load(function (loadedChild/*:Content*/)/*:void*/ {
        if (com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(loadedChild)) {
          AS3.setBindable(this$,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
          AS3.setBindable(this$,"validationMessage" , this$.resourceManager.getString('com.coremedia.cms.editor.sdk.foldercombo.FolderCombo', 'FolderCombo_readOnlyText'));
          this$.getValidationExpression().setValue(false);
        }
      });
    }
  }/*

  public*/ function getValidationExpression()/*:ValueExpression*/ {
    if (!this.validationExpression$yEJ9) {
      this.validationExpression$yEJ9 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    }
    return this.validationExpression$yEJ9;
  }/*

  private*/ function selectFirst(source/*:ValueExpression*/)/*:void*/ {
    var value/*:Array*/ = source.getValue();
    if (value && value.length > 0) {
      var selected/*:String*/ = value[0];
      this.setValue(selected);
      AS3.getBindable(this.config$yEJ9,"bindTo").setValue(selected);
    }
  }/*

  public static*/ function addLookupMethod$static(lookup/*:Function*/)/*:void*/ {
    lookupMethods$static.push(lookup);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getAvailablePathsExpression().removeChangeListener(AS3.bind(this,"selectFirst$yEJ9"));
    com.coremedia.ui.components.LocalComboBox.prototype.onDestroy.call(this);
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Returns the store that contains the last used folders concatenated with the configured default folders.
   *
   * @param config the folderCombo config
   * @return the store
   * /
  protected*/ function createFoldersStore(config/*:FolderCombo*/)/*:Array*/ {
    // not strictly necessary, left in for compatibility reasons
    var paths/*:Array*/ = this.getAvailablePathsExpression().getValue();
    if (paths && paths.length > 0) {
      return paths.map(function (item/*:Object*/)/*:String*/ {
        return item.path;
      });
    }
    return [];
  }/*

  internal*/ function getAvailablePathsExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.availableFolderPathsExpression$yEJ9) {
      this.availableFolderPathsExpression$yEJ9 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var result/*:Array*/ = [];

        var contentType/*:ContentType*/ = getContentType$static(this$.config$yEJ9);
        var content/*:Content*/ = null;
        var premular/*:Panel*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  Ext.panel.Panel);
        if (premular &&AS3.is( premular,  com.coremedia.cms.editor.sdk.premular.Premular)) {
          content = (AS3.as(premular,  com.coremedia.cms.editor.sdk.premular.Premular)).getContent();
        }

        for/* each*/(var $1=0;$1</* in*/ lookupMethods$static.length;++$1) {var method/*:Function*/ =lookupMethods$static[$1];
          var defaultFolder/*:**/ = method.call(null, content, contentType);
          if (!defaultFolder) {
            continue;
          }
          if (AS3.as(defaultFolder,  String)) {
            result = result.concat(makeRecords$static([defaultFolder]));
          } else if (AS3.as(defaultFolder,  Array)) {
            result = result.concat(makeRecords$static(defaultFolder));
          }
        }

        if (getContentType$static(this$.config$yEJ9)) {
          var lastUsedFolders/*:Array*/ = com.coremedia.cms.editor.sdk.util.ContentCreationUtil.getLastUsedFolders(getContentType$static(this$.config$yEJ9));
          if (lastUsedFolders && lastUsedFolders.length > 0) {
            result = result.concat(makeRecords$static(lastUsedFolders));
          }
        }

        var defaults/*:Array*/ = getDefaultFolders$static(this$.config$yEJ9);
        if (defaults) {
          result = defaults.concat(result);
        }
        if (result.length === 0) {
          return undefined;
        }

        var additionalPaths/*:Struct*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(com.coremedia.cms.editor.sdk.editorContext.getPreferences(), "contentCreationPaths", null);
        if (additionalPaths != null) {
          var additionalFolders/*:Array*/ = findFolders$static(additionalPaths, contentType);
          if (additionalFolders) {
            for (var j/*:int*/ = 0; j < additionalFolders.length; j++) {
              var additionalFolderPath/*:String*/ = additionalFolders[j].getPath();
              if (additionalFolderPath === undefined) {
                continue;
              }
              if (additionalFolderPath && result.indexOf(additionalFolderPath) === -1) {
                result = result.concat(makeRecords$static([additionalFolderPath]));
              }
            }
          }
        }
        if (result.length === 0) {
          return undefined;
        }

        var uniqueResult/*:Array*/ = [];
        Ext.each(result, function (elem/*:Object*/, idx/*:int*/)/*:void*/ {
          var found/*:Boolean*/ = false;
          Ext.each(uniqueResult, function (innerElem/*:Object*/, idx/*:int*/)/*:Boolean*/ {
            if (elem.path === innerElem.path) {
              found = true;
              return false;
            }
            return true;
          });
          if (!found) {
            uniqueResult.push(elem);
          }
        });

        return uniqueResult.map(function (item/*:Object*/)/*:String*/ {
          return item.path;
        });
      });
    }
    return this.availableFolderPathsExpression$yEJ9;
  }/*

  private static*/ function findFolders$static(additionalPaths/*:Struct*/, contentType/*:CapType*/)/*:Array*/ {
    var paths/*:Array*/ = com.coremedia.ui.util.ObjectUtils.getPropertyAt(additionalPaths, contentType.getName(), null);
    if (paths != null) {
      return paths;
    } else if (contentType.getParent() != null) {
      return findFolders$static(additionalPaths, contentType.getParent());
    } else {
      return [];
    }
  }/*

  private static*/ function getContentType$static(config/*:FolderCombo*/)/*:ContentType*/ {
    var contentType/*:String*/ = AS3.getBindable(config,"contentType");
    if (!contentType) {
      if (AS3.getBindable(config,"contentTypeExpression")) {
        contentType = AS3.getBindable(config,"contentTypeExpression").getValue();
      }
    }

    if (!contentType) {
      AS3.trace("neither 'contentType' nor 'contentTypeExpression' available to determine target folder");
      return null;
    }

    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentType);
  }/*

  private static*/ function getDefaultFolders$static(config/*:FolderCombo*/)/*:Array*/ {
    var formattedFolders/*:Array*/ = [];
    if (AS3.getBindable(config,"folderPathsExpression")) {
      var defaults/*:Array*/ = AS3.getBindable(config,"folderPathsExpression").getValue();
      if (defaults === undefined) {
        return undefined;
      }
      return makeRecords$static(defaults);
    } else {
      var configFolders/*:Array*/ =AS3.as( AS3.getBindable(config,"folders"),  Array);
      if (configFolders) {
        formattedFolders = makeRecords$static(configFolders.map(function (path/*:String*/)/*:String*/ {
          return com.coremedia.cms.editor.sdk.util.PathFormatter.formatSitePath(path);
        }));
      }
    }
    return formattedFolders || [];
  }/*

  private static*/ function makeRecords$static(paths/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    Ext.each(paths, function (path/*:String*/, idx/*:int*/)/*:Object*/ {
      result.push({id: idx, path: path});
    });
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      availableFolderPathsExpression$yEJ9: null,
      validationExpression$yEJ9: null,
      config$yEJ9: null,
      constructor: FolderComboBase$,
      super$yEJ9: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      validateFolder$yEJ9: validateFolder,
      getValidationExpression: getValidationExpression,
      selectFirst$yEJ9: selectFirst,
      onDestroy: onDestroy,
      createFoldersStore: createFoldersStore,
      getAvailablePathsExpression: getAvailablePathsExpression,
      statics: {
        lookupMethods: undefined,
        addLookupMethod: addLookupMethod$static,
        __initStatics__: function() {
          lookupMethods$static_();
        }
      },
      requires: [
        "AS3.trace",
        "Ext",
        "Ext.panel.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.foldercombo.FolderCombo_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ContentCreationUtil",
        "com.coremedia.cms.editor.sdk.util.PathFormatter"
      ]
    };
});
