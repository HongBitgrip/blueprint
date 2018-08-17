Ext.define("com.coremedia.cms.editor.sdk.desktop.TabTooltipInfo", function(TabTooltipInfo) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.ui.data.impl.BeanImpl;

public class TabTooltipInfo extends BeanImpl{

  public static const TITLE:String = "title";
  public static const SITE:String = "site";
  public static const LOCALE:String = "locale";
  public static const CONTENT_LOCALE:String = "contentLocale";

  private var toolTipEntries:Array =*/function toolTipEntries_(){this.toolTipEntries$Lgoe=( []);}/*;
  public*/ function addTooltipEntry(name/*:String*/, localizedName/*:String*/, value/*:String*/)/*:void*/ {
    this.toolTipEntries$Lgoe.push(new com.coremedia.cms.editor.sdk.desktop.TabTooltipEntry(name, localizedName, value));
  }/*

  public*/ function getTooltipEntries()/*:Array*/ {
    return this.toolTipEntries$Lgoe;
  }/*

  public*/ function addTooltipEntries(additionalTabTooltipEntries/*:Array*/)/*:void*/ {var this$=this;
    additionalTabTooltipEntries.forEach(function(tooltipEntry/*:TabTooltipEntry*/)/*:void*/ {
      this$.toolTipEntries$Lgoe.push(tooltipEntry);
    });
  }/*
}*/function TabTooltipInfo$() {this.super$Lgoe();toolTipEntries_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      addTooltipEntry: addTooltipEntry,
      getTooltipEntries: getTooltipEntries,
      addTooltipEntries: addTooltipEntries,
      super$Lgoe: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      constructor: TabTooltipInfo$,
      statics: {
        TITLE: "title",
        SITE: "site",
        LOCALE: "locale",
        CONTENT_LOCALE: "contentLocale"
      },
      requires: ["com.coremedia.ui.data.impl.BeanImpl"],
      uses: ["com.coremedia.cms.editor.sdk.desktop.TabTooltipEntry"]
    };
});
