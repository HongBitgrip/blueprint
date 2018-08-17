Ext.define("com.coremedia.personalization.ui.plugin.AddPathFromHomeFolderPlugin", function(AddPathFromHomeFolderPlugin) {/*package com.coremedia.personalization.ui.plugin {
import com.coremedia.cap.common.SESSION;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.Plugin;

/**
 * Plugin that adds a path relative to the current user's home folder to a {@link PersonaSelector}.
 * /
public class AddPathFromHomeFolderPlugin implements Plugin {

  /**
   * @ptype addpathfromhomefolder
   * /

  private var pathInHomeFolder:String;
  private var labelSuffix:String;

  /**
   * @cfg {String} relativePath relative path within the users home folder that will be added to a 'PersonaSelector'
   * @cfg {String} labelSuffix optional suffix that will be appended to the labels of the content objects
   *  retrieved from the path
   *
   * @param config the config object
   * /
  public*/ function AddPathFromHomeFolderPlugin$(config/*:Addpathfromhomefolder = null*/) {if(arguments.length<=0)config=null;
    this.pathInHomeFolder$UVmF = config['relativePath'];
    this.labelSuffix$UVmF = config['labelSuffix'];
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    if (!(AS3.is(component,  com.coremedia.personalization.ui.plugin.ContentSelector))) {
      throw AS3.cast(AS3.Error,"plugin is only applicable to components of type 'TestProfileSelectorBase'");
    }/*
    const*/var testProfileSelector/*:ContentSelector*/ =AS3.as( component,  com.coremedia.personalization.ui.plugin.ContentSelector);/*
    const*/var homeFolderPathExpr/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create("homeFolder.path", com.coremedia.cap.common.SESSION.getUser());
    homeFolderPathExpr.loadValue(function(path/*:String*/)/*:void*/ {/*
      const*/var personaPath/*:String*/ = path + "/" + this$.pathInHomeFolder$UVmF;
      testProfileSelector.addPath(personaPath, this$.labelSuffix$UVmF);
    });
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      pathInHomeFolder$UVmF: null,
      labelSuffix$UVmF: null,
      constructor: AddPathFromHomeFolderPlugin$,
      init: init,
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "ext.Plugin"
      ],
      uses: ["com.coremedia.personalization.ui.plugin.ContentSelector"]
    };
});
