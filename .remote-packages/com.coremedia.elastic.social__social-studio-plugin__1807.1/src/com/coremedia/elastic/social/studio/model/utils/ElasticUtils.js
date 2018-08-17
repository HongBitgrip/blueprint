Ext.define("com.coremedia.elastic.social.studio.model.utils.ElasticUtils", function(ElasticUtils) {/*package com.coremedia.elastic.social.studio.model.utils {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.store.BeanRecord;

import ext.data.Store;

public class ElasticUtils {
  public*/ function ElasticUtils$() {
  }/*

  public static*/ function toggleStarMarker$static(label/*:String*/, isEmailSent/*:Boolean*/)/*:String*/ {
    var buttonText/*:String*/ = label;
    if (isEmailSent) {
      if (buttonText.charAt(buttonText.length - 1) !== "*") {
        buttonText += "*";
      }
    } else {
      if (buttonText.charAt(buttonText.length - 1) === "*") {
        buttonText = buttonText.replace("*", "");
      }
    }

    return buttonText;
  }/*


  public static*/ function findBeanRecordIndex$static(store/*:Store*/, bean/*:Bean*/)/*:Number*/ {
    if (bean && store) {
      return store.findBy(function (record/*:BeanRecord*/)/*:Boolean*/ {
        return record.getBean() === bean;
      });
    }
    return -1;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ElasticUtils$,
      statics: {
        toggleStarMarker: toggleStarMarker$static,
        findBeanRecordIndex: findBeanRecordIndex$static
      }
    };
});
