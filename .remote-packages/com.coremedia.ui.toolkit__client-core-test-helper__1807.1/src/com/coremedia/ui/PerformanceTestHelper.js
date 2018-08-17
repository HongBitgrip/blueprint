Ext.define("com.coremedia.ui.PerformanceTestHelper", function(PerformanceTestHelper) {/*package com.coremedia.ui {
import ext.Component;
import ext.ComponentManager;

import joo.getOrCreatePackage;

public class PerformanceTestHelper {

  public static var TEST_RUNNING:Boolean = false;
  private static*/ var EXPECTED_RICH_TEXT_AREAS$static/*:Number*/ = 0;/*

  public*/ function PerformanceTestHelper$() {
  }/*

  public static*/ function openAllInTab$static(list/*:Array*/)/*:void*/ {
    PerformanceTestHelper.TEST_RUNNING = true;

    function next()/*:void*/ {
      EXPECTED_RICH_TEXT_AREAS$static += 2;
      var contentId/*:Number*/ = list.shift();
      openContentInTab$static(contentId);
      AS3.trace(PerformanceTestHelper, "opening content", contentId, "left for opening", list);
    }

    function waitForContentOpened()/*:void*/ {
      var mc/*:Array*/ = Ext.ComponentManager.getAll().filter(function (cmp/*:Component*/)/*:Boolean*/ {
        return cmp.xtype === 'com.coremedia.ui.config.richTextArea';
      });
      if (mc.length == EXPECTED_RICH_TEXT_AREAS$static &&
              AS3.cast(Ext.Component,mc[mc.length - 1]).rendered) {
        // ok, next if any
        if (list.length > 0) {
          next();
        } else {
          AS3.trace(PerformanceTestHelper, "all contents opened");
          window.clearInterval(interval);
          PerformanceTestHelper.TEST_RUNNING = false;
        }
      }
    }

    next();
    var interval/*:Object*/ = window.setInterval(waitForContentOpened, 100);
  }/*

  private static*/ function openContentInTab$static(contentId/*:Number*/)/*:void*/ {
    var data/*:Object*/ = joo.getOrCreatePackage("com.coremedia.ui.data");
    var sdk/*:Object*/ = joo.getOrCreatePackage("com.coremedia.cms.editor.sdk");
    sdk.editorContext.getContentTabManager().openDocument(data.beanFactory.getRemoteBean('content/' + contentId));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PerformanceTestHelper$,
      statics: {
        TEST_RUNNING: false,
        openAllInTab: openAllInTab$static
      },
      requires: [
        "AS3.trace",
        "Ext.Component",
        "Ext.ComponentManager"
      ]
    };
});
