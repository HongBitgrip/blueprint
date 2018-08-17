Ext.define("com.coremedia.cms.editor.sdk.premular.MetaDataPanel", function(MetaDataPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.DocumentForm;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.DocumentInfo;
import com.coremedia.cms.editor.sdk.premular.VersionHistory;
import com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher;
public class MetaDataPanel extends DocumentForm{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.metaDataPanel";
    /**
     * The itemId of the document path link.
     * /
    public static const DOCUMENT_INFO_ID:String = "documentInfo";
    /**
     * The itemId of the version history list.
     * /
    public static const VERSION_HISTORY_ID:String = "versionHistory";

    public*/function MetaDataPanel$(config/*:MetaDataPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentForm*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentForm,{});
    var defaults_$1/*:MetaDataPanel*/ =AS3.cast(MetaDataPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_DocumentInfo_23_5_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentInfo*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentInfo,{});
    editor_DocumentInfo_23_5_$1.itemId =net.jangaroo.ext.Exml.asString( MetaDataPanel.DOCUMENT_INFO_ID);
    editor_DocumentInfo_23_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_VersionHistory_26_5_$1/*:com.coremedia.cms.editor.sdk.premular.VersionHistory*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.VersionHistory,{});
    editor_VersionHistory_26_5_$1.itemId =net.jangaroo.ext.Exml.asString( MetaDataPanel.VERSION_HISTORY_ID);
    AS3.setBindable(editor_VersionHistory_26_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    var editor_DocumentMetaDataFormDispatcher_28_5_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher,{});
    AS3.setBindable(editor_DocumentMetaDataFormDispatcher_28_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    config_$1.items = [editor_DocumentInfo_23_5_$1, editor_VersionHistory_26_5_$1, editor_DocumentMetaDataFormDispatcher_28_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7xaJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentForm",
      alias: "widget.com.coremedia.cms.editor.sdk.config.metaDataPanel",
      constructor: MetaDataPanel$,
      super$7xaJ: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentForm.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DOCUMENT_INFO_ID: "documentInfo",
        VERSION_HISTORY_ID: "versionHistory"
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.DocumentForm",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentInfo",
        "com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher",
        "com.coremedia.cms.editor.sdk.premular.VersionHistory"
      ]
    };
});
