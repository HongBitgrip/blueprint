Ext.define("com.coremedia.ui.ckeditor.RichTextMenuCheckItemBase", function(RichTextMenuCheckItemBase) {/*package com.coremedia.ui.ckeditor {
import ext.menu.CheckItem;

[PublicApi]
public class RichTextMenuCheckItemBase extends CheckItem {
  public*/ function RichTextMenuCheckItemBase$(config/*:RichTextMenuCheckItem = null*/) {if(arguments.length<=0)config=null;
    config.ariaLabel = config.baseAction.initialConfig.text;
    this.super$Zi0F(config);

    /* Overwrite onClick from BaseItem to avoid setting the checked state twice.
     *
     * RichTextActionBase#syncState is called before handleClick so that the checked state set by syncState
     * was reverted by handleClick.
     * To avoid this, we have disabled the state change event temporarily while the onClick event is active
     */

    //TODO: EXT6_API
    var originalOnClick/*:Function*/ = this['onClick'];

    this['onClick'] = function (e/*:**/)/*:void*/ {
      var richTextAction/*:RichTextAction*/ =AS3.as( this.baseAction,  com.coremedia.ui.ckeditor.RichTextAction);
      richTextAction && richTextAction.setSyncStateEnabled(false);
      try {
        originalOnClick.apply(this, [e]);
      } finally {
        richTextAction && richTextAction.setSyncStateEnabled(true);
      }

      richTextAction && richTextAction.syncState();
    };
  }/*


}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.CheckItem",
      metadata: {"": ["PublicApi"]},
      constructor: RichTextMenuCheckItemBase$,
      super$Zi0F: function() {
        Ext.menu.CheckItem.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.menu.CheckItem"],
      uses: ["com.coremedia.ui.ckeditor.RichTextAction"]
    };
});
