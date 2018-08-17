Ext.define("com.coremedia.ui.ckeditor.RichTextAction", function(RichTextAction) {/*package com.coremedia.ui.ckeditor{
import com.coremedia.ui.ckeditor.*;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
/**
 Action performing the configured CKEditor command.
 Currently used commands are listed here as constants.
 For currently used commands invoking a dialog, there are special action classes as listed in "See also".

 @see com.coremedia.ui.config.LinkAction
 @see com.coremedia.ui.config.PasteTextAction
 @see com.coremedia.ui.config.PasteFromWordAction
 @see com.coremedia.ui.config.PropertiesAction
 @see com.coremedia.ui.config.TableAction
 @see com.coremedia.ui.config.RichTextActionToggleButton
 * /

/*
 the commands of the styleGroups have underscores and hyphens in their names
 these are not allowed in the properties fields,
 therefore we "escape" one underscore by two and the hyphen by an underscore and the unicode for the hyphen i.e: "_45"
 * /
public class RichTextAction extends RichTextActionBase{

    import com.coremedia.ui.data.ValueExpression;

    import mx.resources.ResourceManager;

    public static const COMMAND_UNDO:String = "undo";

    public static const COMMAND_REDO:String = "redo";

    public static const COMMAND_PARAGRAPH_HEADING1:String = "style_p_p--heading-1";

    public static const COMMAND_PARAGRAPH_HEADING2:String = "style_p_p--heading-2";

    public static const COMMAND_PARAGRAPH_HEADING3:String = "style_p_p--heading-3";

    public static const COMMAND_PARAGRAPH_HEADING4:String = "style_p_p--heading-4";

    public static const COMMAND_PARAGRAPH_HEADING5:String = "style_p_p--heading-5";

    public static const COMMAND_PARAGRAPH_HEADING6:String = "style_p_p--heading-6";

    public static const COMMAND_PARAGRAPH_REMOVE:String = "style_p__remove";

    public static const COMMAND_BOLD:String = "bold";

    public static const COMMAND_ITALIC:String = "italic";

    public static const COMMAND_BLOCKQUOTE:String = "blockquote";

    public static const COMMAND_UNDERLINE:String = "underline";

    public static const COMMAND_STRIKE:String = "strike";

    public static const COMMAND_SUPERSCRIPT:String = "sup";

    public static const COMMAND_SUBSCRIPT:String = "sub";

    public static const COMMAND_FIND:String = "find";

    public static const COMMAND_REPLACE:String = "replace";

    /**
     * Command to remove external or internal links
     * /
    public static const COMMAND_UNLINK:String = "unlink";

    public static const COMMAND_ALIGN_LEFT:String = "style_align_align--left";

    public static const COMMAND_ALIGN_CENTER:String = "style_align_align--center";

    public static const COMMAND_ALIGN_RIGHT:String = "style_align_align--right";

    public static const COMMAND_ALIGN_JUSTIFIED:String = "style_align_align--justify";

    public static const COMMAND_ALIGN_REMOVE:String = "style_align__remove";

    public static const COMMAND_TABLE_ROW_INSERT_BEFORE:String = "rowInsertBefore";

    public static const COMMAND_TABLE_ROW_INSERT_AFTER:String = "rowInsertAfter";

    public static const COMMAND_TABLE_ROW_DELETE:String = "rowDelete";

    public static const COMMAND_TABLE_COLUMN_INSERT_BEFORE:String = "columnInsertBefore";

    public static const COMMAND_TABLE_COLUMN_INSERT_AFTER:String = "columnInsertAfter";

    public static const COMMAND_TABLE_COLUMN_DELETE:String = "columnDelete";

    public static const COMMAND_TABLE_DELETE:String = "tableDelete";

    public static const COMMAND_CELL_MERGE:String = "cellMerge";

    public static const COMMAND_CELL_MERGE_RIGHT:String = "cellMergeRight";

    public static const COMMAND_CELL_MERGE_DOWN:String = "cellMergeDown";

    public static const COMMAND_CELL_VERTICAL_SPLIT:String = "cellVerticalSplit";

    public static const COMMAND_CELL_HORIZONTAL_SPLIT:String = "cellHorizontalSplit";

    public static const COMMAND_NUMBERED_LIST:String = "numberedlist";

    public static const COMMAND_BULLETED_LIST:String = "bulletedlist";

    public static const COMMAND_OUTDENT:String = "outdent";

    public static const COMMAND_INDENT:String = "indent";
    private var propertyValue:String;

    /**
     * An optional ValueExpression which makes the component disabled if it is evaluated to true.
     * /
    [Bindable]
    public var forceDisabledValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:RichTextAction*/)/*:void*/ {
      this.propertyValue$Q1tq = AS3.getBindable(config,"commandName").replace(/[_\W]/g,
              function (c/*:String*/)/*:String*/ {
                return c === '_' ? '__' : '_' + c.charCodeAt();
              })
      ;
    }/*

    public*/function RichTextAction$(config/*:RichTextAction = null*/){if(arguments.length<=0)config=null;this.__initialize__$Q1tq(config);
    var config_$1/*: com.coremedia.ui.ckeditor.RichTextActionBase*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionBase,{});
    var defaults_$1/*:RichTextAction*/ =AS3.cast(RichTextAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["scale"] = "small";
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', this.propertyValue$Q1tq + '_iconCls')));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', this.propertyValue$Q1tq + '_text')));
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.ui.ckeditor.CKEditor', this.propertyValue$Q1tq + '_tooltip'));
    AS3.setBindable(config_$1,"handler" ,AS3.bind( this,"clickHandler"));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Q1tq(config_$1);
  }/*

    /**
     The name of the desired CKEditor command. An error is thrown if the name is unknown CKEditor command.
     * /
    [Bindable]
    public var commandName:String;


    /**
     Optional data parameter to be passed through to the executed CKEditor command.
     See CKEditor.executeCommand(commandName, commandParameter) for further details.
     * /
    [Bindable]
    public var commandParameter:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextActionBase",
      metadata: {"": ["PublicApi"]},
      propertyValue$Q1tq: null,
      __initialize__$Q1tq: __initialize__,
      constructor: RichTextAction$,
      super$Q1tq: function() {
        com.coremedia.ui.ckeditor.RichTextActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        forceDisabledValueExpression: null,
        commandName: null,
        commandParameter: null
      },
      statics: {
        COMMAND_UNDO: "undo",
        COMMAND_REDO: "redo",
        COMMAND_PARAGRAPH_HEADING1: "style_p_p--heading-1",
        COMMAND_PARAGRAPH_HEADING2: "style_p_p--heading-2",
        COMMAND_PARAGRAPH_HEADING3: "style_p_p--heading-3",
        COMMAND_PARAGRAPH_HEADING4: "style_p_p--heading-4",
        COMMAND_PARAGRAPH_HEADING5: "style_p_p--heading-5",
        COMMAND_PARAGRAPH_HEADING6: "style_p_p--heading-6",
        COMMAND_PARAGRAPH_REMOVE: "style_p__remove",
        COMMAND_BOLD: "bold",
        COMMAND_ITALIC: "italic",
        COMMAND_BLOCKQUOTE: "blockquote",
        COMMAND_UNDERLINE: "underline",
        COMMAND_STRIKE: "strike",
        COMMAND_SUPERSCRIPT: "sup",
        COMMAND_SUBSCRIPT: "sub",
        COMMAND_FIND: "find",
        COMMAND_REPLACE: "replace",
        COMMAND_UNLINK: "unlink",
        COMMAND_ALIGN_LEFT: "style_align_align--left",
        COMMAND_ALIGN_CENTER: "style_align_align--center",
        COMMAND_ALIGN_RIGHT: "style_align_align--right",
        COMMAND_ALIGN_JUSTIFIED: "style_align_align--justify",
        COMMAND_ALIGN_REMOVE: "style_align__remove",
        COMMAND_TABLE_ROW_INSERT_BEFORE: "rowInsertBefore",
        COMMAND_TABLE_ROW_INSERT_AFTER: "rowInsertAfter",
        COMMAND_TABLE_ROW_DELETE: "rowDelete",
        COMMAND_TABLE_COLUMN_INSERT_BEFORE: "columnInsertBefore",
        COMMAND_TABLE_COLUMN_INSERT_AFTER: "columnInsertAfter",
        COMMAND_TABLE_COLUMN_DELETE: "columnDelete",
        COMMAND_TABLE_DELETE: "tableDelete",
        COMMAND_CELL_MERGE: "cellMerge",
        COMMAND_CELL_MERGE_RIGHT: "cellMergeRight",
        COMMAND_CELL_MERGE_DOWN: "cellMergeDown",
        COMMAND_CELL_VERTICAL_SPLIT: "cellVerticalSplit",
        COMMAND_CELL_HORIZONTAL_SPLIT: "cellHorizontalSplit",
        COMMAND_NUMBERED_LIST: "numberedlist",
        COMMAND_BULLETED_LIST: "bulletedlist",
        COMMAND_OUTDENT: "outdent",
        COMMAND_INDENT: "indent"
      },
      requires: [
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.RichTextActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
