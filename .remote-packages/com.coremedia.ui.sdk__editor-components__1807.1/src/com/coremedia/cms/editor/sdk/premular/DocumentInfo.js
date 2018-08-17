Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentInfo", function(DocumentInfo) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.cms.editor.sdk.premular.DocumentPath;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/* A container that shows some standard document information like id, path, creator etc.. * /
public class DocumentInfo extends CollapsibleFormPanel{

    import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentInfo";

    /**
     * The itemId of the document path link.
     * /
    public static const DOCUMENT_PATH_ITEM_ID:String = "documentPath";

    /**
     * The itemId of the localized type name item.
     * /
    public static const TYPE_NAME_ITEM_ID:String = "typeName";

    /**
     * The itemId of the creator name item.
     * /
    public static const CREATOR_NAME_ITEM_ID:String = "creatorName";

    /**
     * The itemId of the document id item.
     * /
    public static const DOCUMENT_ID_ITEM_ID:String = "documentId";

    /**
     * The itemId of the parent folder id item.
     * /
    public static const PARENT_FOLDER_ID_ITEM_ID:String = "parentFolderId";

    [ExtConfig]
    public var bindTo:ValueExpression;

    public*/function DocumentInfo$(config/*:DocumentInfo = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel,{});
    var defaults_$1/*:DocumentInfo*/ =AS3.cast(DocumentInfo,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_filing_text'));
    config_$1.itemId = "documentInfo";
    var editor_PropertyFieldPlugin_55_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_55_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( DocumentInfo.xtype));
    config_$1.plugins = [editor_PropertyFieldPlugin_55_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_DocumentPath_59_5_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentPath*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPath,{});
    editor_DocumentPath_59_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentInfo.DOCUMENT_PATH_ITEM_ID);
    AS3.setBindable(editor_DocumentPath_59_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_path_text')));
    AS3.setBindable(editor_DocumentPath_59_5_$1,"bindTo" , config.bindTo);
    var displayField_62_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentInfo.CREATOR_NAME_ITEM_ID);
    AS3.setBindable(displayField_62_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_creator_text')));
    var ui_BindPropertyPlugin_65_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_65_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_65_9_$1.bindTo = config.bindTo.extendBy('creator.name');
    displayField_62_5_$1.plugins = [ui_BindPropertyPlugin_65_9_$1];
    var displayField_69_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_69_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentInfo.DOCUMENT_ID_ITEM_ID);
    AS3.setBindable(displayField_69_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_documentId_text')));
    var ui_BindPropertyPlugin_72_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_72_9_$1.bindTo = config.bindTo.extendBy('id');
    ui_BindPropertyPlugin_72_9_$1.transformer = function(value/*:String*/)/*:String*/ {return value ? value.substr(25) : '';};
    displayField_69_5_$1.plugins = [ui_BindPropertyPlugin_72_9_$1];
    var displayField_77_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_77_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentInfo.TYPE_NAME_ITEM_ID);
    AS3.setBindable(displayField_77_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_contentType_text')));
    var ui_BindPropertyPlugin_80_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_80_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_80_9_$1.bindTo = config.bindTo.extendBy('type.name');
    ui_BindPropertyPlugin_80_9_$1.transformer = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName;
    displayField_77_5_$1.plugins = [ui_BindPropertyPlugin_80_9_$1];
    var displayField_85_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_85_5_$1.itemId =net.jangaroo.ext.Exml.asString( DocumentInfo.PARENT_FOLDER_ID_ITEM_ID);
    AS3.setBindable(displayField_85_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MetaDataPanel_parentFolderId_text')));
    var ui_BindPropertyPlugin_88_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_88_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_88_9_$1.bindTo = config.bindTo.extendBy('parent.id');
    ui_BindPropertyPlugin_88_9_$1.transformer = function(value/*:String*/)/*:String*/ {return value ? value.substr(25) : '';};
    displayField_85_5_$1.plugins = [ui_BindPropertyPlugin_88_9_$1];
    config_$1.items = [editor_DocumentPath_59_5_$1, displayField_62_5_$1, displayField_69_5_$1, displayField_77_5_$1, displayField_85_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$u3EB(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentInfo",
      bindTo: null,
      constructor: DocumentInfo$,
      super$u3EB: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DOCUMENT_PATH_ITEM_ID: "documentPath",
        TYPE_NAME_ITEM_ID: "typeName",
        CREATOR_NAME_ITEM_ID: "creatorName",
        DOCUMENT_ID_ITEM_ID: "documentId",
        PARENT_FOLDER_ID_ITEM_ID: "parentFolderId"
      },
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentPath",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
