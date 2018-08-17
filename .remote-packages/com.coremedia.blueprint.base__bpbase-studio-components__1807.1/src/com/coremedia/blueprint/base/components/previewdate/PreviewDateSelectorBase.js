Ext.define("com.coremedia.blueprint.base.components.previewdate.PreviewDateSelectorBase", function(PreviewDateSelectorBase) {/*package com.coremedia.blueprint.base.components.previewdate {

import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpression;

import ext.DateUtil;
import ext.container.Container;

/**
 * The preview date selector will be added to the toolbar
 * of the preview and allows the have a look on the preview for a
 * specific time range.
 * /
public class PreviewDateSelectorBase extends Container {

  private var previewPanel:PreviewPanel;
  private var dateValueExpression:ValueExpression;

  public*/ function PreviewDateSelectorBase$(config/*:PreviewDateSelector = null*/) {if(arguments.length<=0)config=null;
    this.super$WEM2(config);
    this.previewPanel$WEM2 = AS3.getBindable(config,"previewPanel");
    this.dateValueExpression$WEM2 = AS3.getBindable(config,"dateValueExpression");
    this.dateValueExpression$WEM2.addChangeListener(AS3.bind(this,"dateChanged$WEM2"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.container.Container.prototype.onDestroy.call(this);
    this.dateValueExpression$WEM2.removeChangeListener(AS3.bind(this,"dateChanged$WEM2"));
  }/*

  /**
   * Invoked when one of the date combos has been changed.
   * /
  private*/ function dateChanged()/*:void*/ {
    var value/*:Calendar*/ = this.dateValueExpression$WEM2.getValue();/*
    const*/var params/*:Bean*/ = this.previewPanel$WEM2.getUrlParameterBean();
    if (value) {
      var dateString/*:String*/ = formatCalendar$static(value);
      params.set('previewDate', dateString);
    }
    else {
      params.set('previewDate', null);
    }
  }/*

  /**
   * Formats a calendar string
   * @param value
   * @return String with format yyyy-mm-dd hh:mm T
   * /
  private static*/ function formatCalendar$static(value/*:Calendar*/)/*:String*/ {
    var date/*:Date*/ = value.getDateWithoutOffset();
    var format/*:String*/ = 'd-m-Y H:i';
    var dateString/*:String*/ = Ext.Date.format(date, format) + ' ' + value.getTimeZone();
    return dateString;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      previewPanel$WEM2: null,
      dateValueExpression$WEM2: null,
      constructor: PreviewDateSelectorBase$,
      super$WEM2: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      dateChanged$WEM2: dateChanged,
      requires: [
        "Ext.Date",
        "Ext.container.Container"
      ]
    };
});
