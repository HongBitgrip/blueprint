Ext.define("mx.resources.ResourceBundle", function(ResourceBundle) {/* /**
 * Created by fwienber on 08.04.2016.
 * /
package mx.resources {
import ext.Ext;

public class ResourceBundle implements IResourceBundle {

  public*/ function ResourceBundle$(locale/*:String*/, bundleName/*:String*/, content/*:Object*/) {
    Ext.apply(this, {
      locale: locale,
      bundleName: bundleName,
      content: content
    });
  }/*

  /**
   * @inheritDoc
   * /
  public native function get locale():String;

  /**
   * @inheritDoc
   * /
  public native function get bundleName():String;

  /**
   * @inheritDoc
   * /
  public native function get content():Object;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["mx.resources.IResourceBundle"],
      constructor: ResourceBundle$,
      requires: ["mx.resources.IResourceBundle"],
      uses: ["Ext"]
    };
});
