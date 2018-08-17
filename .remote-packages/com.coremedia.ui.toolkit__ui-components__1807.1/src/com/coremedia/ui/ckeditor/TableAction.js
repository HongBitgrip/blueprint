Ext.define("com.coremedia.ui.ckeditor.TableAction", function(TableAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class TableAction extends TableActionBase{

    import mx.resources.ResourceManager;

    public*/function TableAction$(config/*:TableAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.ckeditor.TableActionBase*/ =AS3.cast(com.coremedia.ui.ckeditor.TableActionBase,{});
    var defaults_$1/*:TableAction*/ =AS3.cast(TableAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"exec"));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmtable_title_text')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', 'cmtable_iconCls')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BsMF(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.TableActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: TableAction$,
      super$BsMF: function() {
        com.coremedia.ui.ckeditor.TableActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.TableActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
