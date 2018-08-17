Ext.define("com.coremedia.cms.editor.sdk.premular.fields.SingleLinkField", function(SingleLinkField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;
import com.coremedia.ui.plugins.ContextMenuPlugin;

    [ResourceBundle("com.coremedia.ui.ckeditor.CKEditor")]
/**
 A field containing a link (or nothing). The value expression
 associated with this field should result in an array containing
 zero or one contents.
 * /
public class SingleLinkField extends SingleLinkFieldBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.singleLinkField";

    public*/function SingleLinkField$(config/*:SingleLinkField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase,{});
    var defaults_$1/*:SingleLinkField*/ =AS3.cast(SingleLinkField,{});
    AS3.setBindable(defaults_$1,"contentVariableName" , "content");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"dropAreaHandler" ,AS3.bind( this,"openCollectionView"));
    AS3.setBindable(config_$1,"dropAreaText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'internalLinkMenuDragText')));
    AS3.setBindable(config_$1,"replaceOnDrop" , true);
    AS3.setBindable(config_$1,"selectedValuesExpression" , this.getSelectedVE());
    AS3.setBindable(config_$1,"showThumbnails" , false);
    var editor_MemoryLinkListWrapper_37_5_$1/*:com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
    AS3.setBindable(editor_MemoryLinkListWrapper_37_5_$1,"linksVE" , AS3.getBindable(config,"valueExpression"));
    AS3.setBindable(editor_MemoryLinkListWrapper_37_5_$1,"linkTypeName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"linkContentType")));
    AS3.setBindable(editor_MemoryLinkListWrapper_37_5_$1,"maxCardinality" , 1);
    AS3.setBindable(config_$1,"linkListWrapper" , new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(editor_MemoryLinkListWrapper_37_5_$1));
    var ui_ContextMenuPlugin_43_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_PropertyFieldContextMenu_45_9_$1/*: com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu,{});
    AS3.setBindable(editor_PropertyFieldContextMenu_45_9_$1,"selectedItemsVE" , this.getSelectedVE());
    AS3.setBindable(ui_ContextMenuPlugin_43_5_$1,"contextMenu" , editor_PropertyFieldContextMenu_45_9_$1);
    config_$1.plugins = [ui_ContextMenuPlugin_43_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$U3pb(config_$1);
  }/*

    /**
     The variable name for the content that this component is operating on.
     The content is used to open the collection in the content's site's root folder.
     * /
    [Bindable]
    public var contentVariableName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.singleLinkField",
      constructor: SingleLinkField$,
      super$U3pb: function() {
        com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {contentVariableName: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkFieldBase",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper"
      ]
    };
});
