Ext.define("com.coremedia.cms.editor.sdk.util.StoreUtil", function(StoreUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Model;
import ext.data.Store;
import ext.util.Collection;

/**
 * Utility class to work with {@link Store}s and {@link BeanRecord}s
 * /
public class StoreUtil {

  /**
   * Ensures that the given array is a contains only bean records and they can be added to the given store.
   *
   * @param recordsOrBeans an array containing records, bean records or beans
   * @param store the store the bean records shall be added to
   * @return the bean records addable to the given store
   * /
  public static*/ function asBeanRecords$static(recordsOrBeans/*:Array*/, store/*:Store*/)/*:Array*/ {
    var newRecords/*:Array*/ = [];
    // create fresh recordType to be able to insert records into the store
    var recordType/*:Class*/ = com.coremedia.ui.store.BeanRecord.create(AS3.getBindable(store,"model","DUMMY").fields, false);
    for/* each*/(var $1=0;$1</* in*/ recordsOrBeans.length;++$1) {var recordOrBean/*:**/ =recordsOrBeans[$1];
      var beanRecord/*:BeanRecord*/ =AS3.as( recordOrBean,  com.coremedia.ui.store.BeanRecord);
      if (beanRecord && beanRecord.getStore() === store) {
        newRecords.push(beanRecord);
      } else {
        // Determine bean wrapped in recordOrBean.
        var bean/*:Bean*/ =AS3.as( recordOrBean,  com.coremedia.ui.data.Bean);
        if (!bean) {
          if (beanRecord) {
            bean = beanRecord.getBean();
          } else {
            bean = com.coremedia.ui.data.beanFactory.getRemoteBean(recordOrBean.id);
          }
        }
        if (bean) {
          beanRecord = new recordType({bean: bean});
          newRecords.push(beanRecord);
        }
      }
    }
    return newRecords;
  }/*

  /**
   * Get all beans represented by bean records in a given store.
   *
   * @param store the store the beans shall be retrieved from
   * @return an array of extracted beans in the order the store provided them.
   * /
  public static*/ function getBeans$static(store/*:Store*/)/*:Array*/ {
    var beanRecords/*:Array*/ = [];
    getUnfilteredRecords$static(store).each(function (record/*:Model*/)/*:void*/ {
      if (AS3.as(record,  com.coremedia.ui.store.BeanRecord)) {
        beanRecords.push(AS3.cast(com.coremedia.ui.store.BeanRecord,record).getBean());
      }
    });
    return beanRecords;
  }/*

  private static*/ function getUnfilteredRecords$static(store/*:Store*/)/*:Collection*/ {
    var data/*:Collection*/ = store.getData();
    return store.isFiltered() ? data.getSource() : data;
  }/*



}*/function StoreUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StoreUtil$,
      statics: {
        asBeanRecords: asBeanRecords$static,
        getBeans: getBeans$static
      },
      requires: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.store.BeanRecord"
      ]
    };
});
