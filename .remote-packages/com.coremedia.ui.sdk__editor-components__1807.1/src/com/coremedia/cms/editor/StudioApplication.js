Ext.define("com.coremedia.cms.editor.StudioApplication", function(StudioApplication) {/* /**
 * The Studio Application that bootstraps Studio start.
 * Essentially, it delegates to EditorMain.main().
 * /
package com.coremedia.cms.editor {
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;

import ext.Ext;
import ext.app.Application;
import ext.container.Container;

//noinspection JSUnusedGlobalSymbols
public class StudioApplication extends Application {

  //noinspection ReservedWordAsName
  public const namespace:String = 'com.coremedia';

  //noinspection JSUnusedGlobalSymbols
  public*/ function StudioApplication$() {
    Ext.USE_NATIVE_JSON = true;
    var config/*:Application*/ = AS3.cast(Ext.app.Application,{});
    AS3.setBindable(config,"name" , "Studio");
    this.super$cphq(config);
  }/*

  override public*/ function launch(profile/*:String*/)/*:Boolean*/ {
    com.coremedia.cms.editor.EditorMain.main();
    return false;
  }/*

  override public*/ function getMainView()/*:Container*/ {
    // override needed here, as we never set the EditorMainView as the main view using {@link Application#setMainView()
    // using this method has much impact as additional tasks are performed.
    return AS3.cast(Ext.container.Container,Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.ID));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.app.Application",
      namespace: 'com.coremedia',
      constructor: StudioApplication$,
      super$cphq: function() {
        Ext.app.Application.prototype.constructor.apply(this, arguments);
      },
      launch: launch,
      getMainView: getMainView,
      requires: [
        "Ext",
        "Ext.app.Application",
        "Ext.container.Container"
      ],
      uses: [
        "com.coremedia.cms.editor.EditorMain",
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView"
      ]
    };
});
