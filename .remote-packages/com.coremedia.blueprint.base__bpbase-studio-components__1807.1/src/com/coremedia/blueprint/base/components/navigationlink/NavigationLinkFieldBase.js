Ext.define("com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldBase", function(NavigationLinkFieldBase) {/*package com.coremedia.blueprint.base.components.navigationlink {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.StringUtil;

/**
 * The application logic for the target field displayed in the internal link menu.
 * /
[ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
[ResourceBundle('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField')]
public class NavigationLinkFieldBase extends LinkListGridPanel {


  [Bindable]
  public var siteExpression:ValueExpression;

  [Bindable]
  public var valueExpression:ValueExpression;

  [Bindable]
  public var doctype:String;

  private var listExpression:ValueExpression;
  private var _linkListWrapper:ILinkListWrapper;

  /**
   * @param config the config object
   * /
  public*/ function NavigationLinkFieldBase$(config/*:NavigationLinkFieldBase = null*/) {if(arguments.length<=0)config=null;
    this.super$G9d9(config);
    AS3.getBindable(this,"valueExpression").addChangeListener(AS3.bind(this,"valueChanged$G9d9"));
  }/*

  protected*/ function getLinkListWrapper(config/*:NavigationLinkFieldBase*/)/*:ILinkListWrapper*/ {
    if (!this._linkListWrapper$G9d9) {
      var wrapperCfg/*:MemoryLinkListWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
      AS3.setBindable(wrapperCfg,"linksVE" , this.getListExpression(AS3.getBindable(config,"valueExpression")));
      AS3.setBindable(wrapperCfg,"linkTypeName" , AS3.getBindable(config,"doctype"));
      AS3.setBindable(wrapperCfg,"maxCardinality" , 1);
      this._linkListWrapper$G9d9 = new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(wrapperCfg);
    }
    return this._linkListWrapper$G9d9;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"valueExpression").removeChangeListener(AS3.bind(this,"valueChanged$G9d9"));
    com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.onDestroy.call(this);
  }/*

  private*/ function valueChanged()/*:void*/ {
    this.getTopToolbar().queryById('clearParentList').setDisabled(false);
    if (!this.listExpression$G9d9.getValue() || (AS3.as(this.listExpression$G9d9.getValue(),  Array)).length === 0) {
      this.getTopToolbar().queryById('clearParentList').setDisabled(true);
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.afterRender.call(this);
    this.valueChanged$G9d9();
  }/*

  /**
   * Show the collection view, if this field may be set.
   * /
  protected*/ function openCollectionView()/*:void*/ {var this$=this;
    this.computeBaseFolder$G9d9(function (baseFolder/*:Content*/)/*:void*/ {
      com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearchForType(AS3.getBindable(this$,"doctype"), null, baseFolder);
    });
  }/*

  private*/ function computeBaseFolder(callback/*:Function*/)/*:void*/ {
    var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (!preferredSite) {
      callback(null);
    }

    var navigationRootFolderVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Content*/ {
      var folder/*:Content*/ = com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration("Content Creation", "paths.navigation");
      if (folder === undefined) {
        return undefined;
      }

      return folder;
    });

    navigationRootFolderVE.loadValue(function(value/*:Content*/)/*:void*/ {
      if (!value) {
        callback(preferredSite.getSiteRootFolder());
      }
      value.load(function()/*:void*/ {
        callback(value);
      });
    });
  }/*

  protected*/ function clearList()/*:void*/ {
    this.listExpression$G9d9.setValue([]);
  }/*

  protected*/ function getListExpression(valueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.listExpression$G9d9) {
      this.listExpression$G9d9 = com.coremedia.ui.data.ValueExpressionFactory.create('items', com.coremedia.ui.data.beanFactory.createLocalBean());
      var list/*:Array*/ = [];
      var valueFromVE/*:**/ = valueExpression.getValue();
      if (valueFromVE) {
        list.push(valueFromVE);
      }
      this.listExpression$G9d9.setValue(list);

      this.listExpression$G9d9.addChangeListener(AS3.bind(this,"listChanged$G9d9"));
    }
    return this.listExpression$G9d9;
  }/*

  private*/ function listChanged()/*:void*/ {var this$=this;
    if (this.listExpression$G9d9.getValue() && (AS3.as(this.listExpression$G9d9.getValue(),  Array)).length > 0) {
      var c/*:Content*/ = this.listExpression$G9d9.getValue()[0];
      c.invalidate(function()/*:void*/ {
        if(!c.getType().isSubtypeOf(AS3.getBindable(this$,"doctype"))) {
          this$.listExpression$G9d9.setValue([]);
          return;
        }

        com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:String*/ {
          var site/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteNameFor(c);
          if(site === undefined) {
            return undefined;
          }
          return site;
        }).loadValue(function(site/*:String*/)/*:void*/ {
          if (site !== com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteName()) {
            this$.showErrorMessageSite$G9d9(site);
            this$.listExpression$G9d9.setValue([]);
            return;
          }

          if(c.isCheckedOutByOther()) {
            c.getEditor().load(function()/*:void*/ {
              this$.showErrorMessageCheckedOut$G9d9(c);
              this$.listExpression$G9d9.setValue([]);
            });
          }
          else {
            AS3.getBindable(this$,"valueExpression").setValue(c);
          }
        });

      });
    }
    else {
      AS3.getBindable(this,"valueExpression").setValue(null);
    }
  }/*

  private*/ function showErrorMessageSite(site/*:String*/)/*:void*/ {
    var msg/*:String*/ = Ext.String.format(this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'site_error_msg'), site, com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteName());
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'layout_error'), msg);
  }/*

  private*/ function showErrorMessageCheckedOut(c/*:Content*/)/*:void*/ {
    var msg/*:String*/ = Ext.String.format(this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'layout_error_msg'), c.getEditor().getName());
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(this.resourceManager.getString('com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField', 'layout_error'), msg);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
      listExpression$G9d9: null,
      _linkListWrapper$G9d9: null,
      constructor: NavigationLinkFieldBase$,
      super$G9d9: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel.prototype.constructor.apply(this, arguments);
      },
      getLinkListWrapper: getLinkListWrapper,
      onDestroy: onDestroy,
      valueChanged$G9d9: valueChanged,
      afterRender: afterRender,
      openCollectionView: openCollectionView,
      computeBaseFolder$G9d9: computeBaseFolder,
      clearList: clearList,
      getListExpression: getListExpression,
      listChanged$G9d9: listChanged,
      showErrorMessageSite$G9d9: showErrorMessageSite,
      showErrorMessageCheckedOut$G9d9: showErrorMessageCheckedOut,
      config: {
        siteExpression: null,
        valueExpression: null,
        doctype: null
      },
      requires: [
        "Ext.String",
        "com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ]
    };
});
