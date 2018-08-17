Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.SearchFieldBase", function(SearchFieldBase) {/*package com.coremedia.elastic.social.studio.usermanagement.list {

import com.coremedia.cap.content.search.SearchSuggestionsParameters;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.RemoteService;

import ext.Ext;

import ext.XTemplate;
import ext.data.JsonStore;
import ext.data.proxy.AjaxProxy;
import ext.data.reader.JsonReader;
import ext.form.field.ComboBox;

public class SearchFieldBase extends ComboBox {

  private var tenantAwareUrlPrefixVE:ValueExpression;
  private var moderation:Moderation;
  private var suggestionSegment:String;
  private var httpProxy:AjaxProxy;
  private static*/ var lastSearch$static/*:String*/ = "";/*

  internal static var autoSuggestResultTpl:XTemplate =*/function autoSuggestResultTpl$static_(){SearchFieldBase.autoSuggestResultTpl=( new Ext.XTemplate(
          '<tpl for="."><div class="search-item" style="font-weight:bold;">',
          '{' + com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_VALUE + ':htmlEncode} ({' + com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTION_COUNT + ':htmlEncode})</span>',
          '</div></tpl>'
  ));}/*;

  public*/ function SearchFieldBase$(config/*:SearchField = undefined*/) {
    this.super$Vw_D(config);
    this.suggestionSegment$Vw_D = config.suggestionSegment;
    this.moderation$Vw_D = AS3.getBindable(config,"moderation");
  }/*


  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.form.field.ComboBox.prototype.afterRender.call(this);
    (AS3.as(this.moderation$Vw_D,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(function ()/*:void*/ {
      this$.tenantAwareUrlPrefixVE$Vw_D = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return (AS3.as(this$.moderation$Vw_D,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix();
      });
      this$.updateStoreProxyUrl$Vw_D();
    });
    this.tenantAwareUrlPrefixVE$Vw_D.addChangeListener(AS3.bind(this,"updateStoreProxyUrl$Vw_D"));
    this.focus(false, 500);

    if(lastSearch$static) {
      this.setValue(lastSearch$static);
      this.selectText(0, lastSearch$static.length);
    }

    this.addListener('change',AS3.bind( this,"onChange$Vw_D"));
  }/*

  private*/ function onChange(combo/*:ComboBox*/, newValue/*:**/)/*:void*/ {
    lastSearch$static = newValue;
  }/*

  public*/ function getSearchSuggestionsDataProxy(moderation/*:Moderation*/)/*:AjaxProxy*/ {var this$=this;
    if (!this.httpProxy$Vw_D) {
      var reader/*:JsonReader*/ = AS3.cast(Ext.data.reader.Json,{});
      AS3.setBindable(reader,"rootProperty" , com.coremedia.cap.content.search.SearchSuggestionsParameters.SUGGESTIONS);
      this.httpProxy$Vw_D = Ext.create(Ext.data.proxy.Ajax, {
        afterRequest: function (request/*:**/, success/*:Boolean*/)/*:void*/ {
          lastSearch$static = this$.getValue();
        },
        method: "GET",
        url: this.buildStoreProxyUrl$Vw_D(moderation),
        reader: reader
      });
    }

    return this.httpProxy$Vw_D;
  }/*

  private*/ function buildStoreProxyUrl(moderation/*:Moderation*/)/*:String*/ {
    var uri/*:String*/ = "";
    if ((AS3.as(moderation,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix()) {
      uri += (AS3.as(moderation,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix();
    }
    if (this.suggestionSegment$Vw_D) {
      uri += this.suggestionSegment$Vw_D;
    }
    return getValidUri$static(uri);
  }/*

  private*/ function updateStoreProxyUrl()/*:void*/ {
    // api/tenant/elastic/social/archive/suggestions
    var jsonStore/*:JsonStore*/ =AS3.as( this.getStore(),  Ext.data.JsonStore);
    var storeUrl/*:String*/ = getValidUri$static(this.tenantAwareUrlPrefixVE$Vw_D.getValue() + this.suggestionSegment$Vw_D);
    (AS3.as(AS3.getBindable((jsonStore),"proxy","DUMMY"),  Ext.data.proxy.Ajax)).setUrl(storeUrl);
    // clear the Store on tenant change
    jsonStore.removeAll();
  }/*

  private static*/ function getValidUri$static(path/*:String*/)/*:String*/ {
    return com.coremedia.ui.data.impl.RemoteService.APPLICATION_URI.relativize(com.coremedia.ui.data.impl.RemoteService.calculateAbsoluteURI(path)).path;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.removeListener('change',AS3.bind( this,"onChange$Vw_D"));
    if(this.tenantAwareUrlPrefixVE$Vw_D) {
      this.tenantAwareUrlPrefixVE$Vw_D.removeChangeListener(AS3.bind(this,"updateStoreProxyUrl$Vw_D"));
    }
    Ext.form.field.ComboBox.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.ComboBox",
      tenantAwareUrlPrefixVE$Vw_D: null,
      moderation$Vw_D: null,
      suggestionSegment$Vw_D: null,
      httpProxy$Vw_D: null,
      constructor: SearchFieldBase$,
      super$Vw_D: function() {
        Ext.form.field.ComboBox.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onChange$Vw_D: onChange,
      getSearchSuggestionsDataProxy: getSearchSuggestionsDataProxy,
      buildStoreProxyUrl$Vw_D: buildStoreProxyUrl,
      updateStoreProxyUrl$Vw_D: updateStoreProxyUrl,
      beforeDestroy: beforeDestroy,
      statics: {
        autoSuggestResultTpl: undefined,
        __initStatics__: function() {
          autoSuggestResultTpl$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.XTemplate",
        "Ext.data.JsonStore",
        "Ext.data.proxy.Ajax",
        "Ext.data.reader.Json",
        "Ext.form.field.ComboBox",
        "com.coremedia.cap.content.search.SearchSuggestionsParameters",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteService"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.impl.ModerationImpl"]
    };
});
