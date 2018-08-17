Ext.define("com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyField", function(RichTextPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import ext.panel.Panel;
import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
import com.coremedia.ui.plugins.WriteBeforeFlushPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.BindBlobPropertyPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.ui.plugins.ResizablePlugin;
import com.coremedia.ui.components.StatefulResizer;
import com.coremedia.ui.components.FloatingToolbar;
import com.coremedia.ui.ckeditor.RichTextActionToggleButton;
import ext.toolbar.Separator;
import com.coremedia.ui.components.MenuIconButton;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin;
import ext.menu.Menu;
import com.coremedia.ui.ckeditor.RichTextMenuCheckItem;
import com.coremedia.ui.ckeditor.RichTextAction;
import ext.menu.Separator;
import ext.menu.Item;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction;
import com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction;
import com.coremedia.ui.ckeditor.TableAction;
import com.coremedia.ui.ckeditor.PasteTextAction;
import com.coremedia.ui.ckeditor.PasteFromWordAction;
import com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction;
import com.coremedia.ui.ckeditor.PropertiesAction;
import ext.layout.container.VBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A rich text field that binds to an XML property being edited inside
 of a document form. Specify the propertyName property for selecting
 the XML property.
 The buttons of the toolbar can be accessed via the item ids.
 * /
public class RichTextPropertyField extends RichTextPropertyFieldBase{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
    import com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.richTextPropertyField";

    /**
     * The itemId of the undo button.
     * /
    public static const UNDO_BUTTON_ITEM_ID:String = "undo";

    /**
     * The itemId of the redo button.
     * /
    public static const REDO_BUTTON_ITEM_ID:String = "redo";

    /**
     * The itemId of the rich text area.
     * /
    public static const RICH_TEXT_AREA_ITEM_ID:String = "richTextArea";

    /**
     * The itemId of the paragraph format group button. Currently the group consists of heading format menus.
     * /
    public static const PARAGRAPH_FORMAT_GROUP_ITEM_ID:String = "paragraphFormatGroup";

    /**
     * The itemId of the heading 1 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING1_ITEM_ID:String = "paragraphFormatHeading1";

    /**
     * The itemId of the heading 2 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING2_ITEM_ID:String = "paragraphFormatHeading2";

    /**
     * The itemId of the heading 3 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING3_ITEM_ID:String = "paragraphFormatHeading3";

    /**
     * The itemId of the heading 4 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING4_ITEM_ID:String = "paragraphFormatHeading4";

    /**
     * The itemId of the heading 5 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING5_ITEM_ID:String = "paragraphFormatHeading5";

    /**
     * The itemId of the heading 6 paragraph format menu.
     * /
    public static const PARAGRAPH_HEADING6_ITEM_ID:String = "paragraphFormatHeading6";

    /**
     * The itemId of the remove paragraph format menu.
     * /
    public static const PARAGRAPH_FORMAT_REMOVE_ITEM_ID:String = "paragraphFormatRemove";

    /**
     * The itemId of the bold button.
     * /
    public static const BOLD_BUTTON_ITEM_ID:String = "bold";

    /**
     * The itemId of the italic button.
     * /
    public static const ITALIC_BUTTON_ITEM_ID:String = "italic";

    /**
     * The itemId of the blockquote button.
     * /
    public static const BLOCKQUOTE_BUTTON_ITEM_ID:String = "blockquote";

    /**
     * The itemId of the inline format group button. Currently the group consists of underline, strike through, superscript and subscripts format menus.
     * /
    public static const INLINE_FORMAT_GROUP_ITEM_ID:String = "inlineFormatGroup";

    /**
     * The itemId of the underline inline format menu.
     * /
    public static const INLINE_UNDERLINE_ITEM_ID:String = "inlineFormatUnderline";

    /**
     * The itemId of the strike through inline format menu.
     * /
    public static const INLINE_STRIKETHROUGH_ITEM_ID:String = "inlineFormatStrikeThrough";

    /**
     * The itemId of the superscript inline format menu.
     * /
    public static const INLINE_SUPERSCRIPT_ITEM_ID:String = "inlineFormatSuperscript";

    /**
     * The itemId of the subscript inline format menu.
     * /
    public static const INLINE_SUBSCRIPT_ITEM_ID:String = "inlineFormatSubscript";

    /**
     * The itemId of the internal link button.
     * /
    public static const INTERNAL_LINK_BUTTON_ITEM_ID:String = "internalLinkButton";

    /**
     * The itemId of the external link button.
     * /
    public static const EXTERNAL_LINK_BUTTON_ITEM_ID:String = "externalLinkButton";

    /**
     * The itemId of the remove link button.
     * /
    public static const REMOVE_LINK_BUTTON_ITEM_ID:String = "removeLinkButton";

    /**
     * The itemId of the show pictures button.
     * /
    public static const SHOW_PICTURES_BUTTON_ITEM_ID:String = "showPicturesButton";

    /**
     * The itemId of the text align group button.
     * /
    public static const TEXT_ALIGN_GROUP_ITEM_ID:String = "textAlignGroup";

    /**
     * The itemId of the left text align menu.
     * /
    public static const TEXT_ALIGN_LEFT_ITEM_ID:String = "textAlignLeft";

    /**
     * The itemId of the center text align menu.
     * /
    public static const TEXT_ALIGN_CENTER_ITEM_ID:String = "textAlignCenter";

    /**
     * The itemId of the right text align menu.
     * /
    public static const TEXT_ALIGN_RIGHT_ITEM_ID:String = "textAlignRight";

    /**
     * The itemId of the justified text align menu.
     * /
    public static const TEXT_ALIGN_JUSTIFIED_ITEM_ID:String = "textAlignJustified";

    /**
     * The itemId of the remove text align menu.
     * /
    public static const TEXT_ALIGN_REMOVE_ITEM_ID:String = "textAlignRemove";

    /**
     * The itemId of the table group button.
     * /
    public static const TABLE_GROUP_ITEM_ID:String = "tableGroup";

    /**
     * The itemId of the add table menu.
     * /
    public static const TABLE_ADD_ITEM_ID:String = "tableAdd";

    /**
     * The itemId of the insert row above menu.
     * /
    public static const TABLE_INSERT_ROW_ABOVE_ITEM_ID:String = "tableInsertRowAbove";

    /**
     * The itemId of the insert row below menu.
     * /
    public static const TABLE_INSERT_ROW_BELOW_ITEM_ID:String = "tableInsertRowBelow";

    /**
     * The itemId of the delete rows menu.
     * /
    public static const TABLE_DELETE_ROWS_ITEM_ID:String = "tableDeleteRows";

    /**
     * The itemId of the insert column left menu.
     * /
    public static const TABLE_INSERT_COLUMN_LEFT_ITEM_ID:String = "tableInsertColumnLeft";

    /**
     * The itemId of the insert column right menu.
     * /
    public static const TABLE_INSERT_COLUMN_RIGHT_ITEM_ID:String = "tableInsertColumnRight";

    /**
     * The itemId of the delete columns menu.
     * /
    public static const TABLE_DELETE_COLUMNS_ITEM_ID:String = "tableDeleteColumns";

    /**
     * The itemId of the remove table menu.
     * /
    public static const TABLE_REMOVE_ITEM_ID:String = "tableRemove";

    /**
     * The itemId of the merge cell menu.
     * /
    public static const CELL_MERGE_ITEM_ID:String = "cellMerge";

    /**
     * The itemId of the merge cell right menu.
     * /
    public static const CELL_MERGE_RIGHT_ITEM_ID:String = "cellMergeRight";

    /**
     * The itemId of the merge cell down menu.
     * /
    public static const CELL_MERGE_DOWN_ITEM_ID:String = "cellMergeDown";

    /**
     * The itemId of the split cell vertical menu.
     * /
    public static const CELL_VERTICAL_SPLIT_ITEM_ID:String = "cellVerticalSplit";

    /**
     * The itemId of the split cell horizontal menu.
     * /
    public static const CELL_HORIZONTAL_SPLIT_ITEM_ID:String = "cellHorizontalSplit";

    /**
     * The itemId of the paste text button.
     * /
    public static const PASTE_TEXT_ITEM_ID:String = "pasteText";

    /**
     * The itemId of the paste from word button.
     * /
    public static const PASTE_FROM_WORD_ITEM_ID:String = "pasteFromWord";

    /**
     * The itemId of the paste content button.
     * /
    public static const PASTE_CONTENT_ITEM_ID:String = "pasteContent";

    /**
     * The itemId of the numbered list button.
     * /
    public static const NUMBERED_LIST_ITEM_ID:String = "numberedList";

    /**
     * The itemId of the bulleted list button.
     * /
    public static const BULLETED_LIST_ITEM_ID:String = "bulletedList";

    /**
     * The itemId of the outdent button.
     * /
    public static const OUTDENT_ITEM_ID:String = "outdent";

    /**
     * The itemId of the indent button.
     * /
    public static const INDENT_ITEM_ID:String = "indent";

    /**
     * The itemId of the image properties button.
     * /
    public static const IMAGE_PROPERTIES_ITEM_ID:String = "imageProperties";

    /**
     * The itemId of the first toolbar separator.
     * /
    public static const RTE_SEP_FIRST_ITEM_ID:String = "sepFirst";

    /**
     * The itemId of the second toolbar separator.
     * /
    public static const RTE_SEP_SECOND_ITEM_ID:String = "sepSecond";

    /**
     * The itemId of the third toolbar separator.
     * /
    public static const RTE_SEP_THIRD_ITEM_ID:String = "sepThird";

    /**
     * The itemId of the fourth toolbar separator.
     * /
    public static const RTE_SEP_FOURTH_ITEM_ID:String = "sepFourth";

    /**
     * The itemId of the fifth toolbar separator.
     * /
    public static const RTE_SEP_FIFTH_ITEM_ID:String = "sepFifth";

    /**
     * The itemId of the sixth toolbar separator.
     * /
    public static const RTE_SEP_SIXTH_ITEM_ID:String = "sepSixth";

    /**
     * The itemId of the seventh toolbar separator.
     * /
    public static const RTE_SEP_SEVENTH_ITEM_ID:String = "sepSeventh";

    /**
     * The itemId of the eighth toolbar separator.
     * /
    public static const RTE_SEP_EIGHTH_ITEM_ID:String = "sepEighth";

    /**
     * The itemId of the ninth toolbar separator.
     * /
    public static const RTE_SEP_NINTH_ITEM_ID:String = "sepNinth";

    /**
     * A function to be used as "applyTo" of an addItemsPlugin that wants to tweak the toolbar of this RichTextPropertyField.
     * /
    public static const FIND_TOOLBAR:Function =*/function FIND_TOOLBAR$static_(){RichTextPropertyField.FIND_TOOLBAR=( com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.getRichTextAreaToolbar);}/*;

    public*/function RichTextPropertyField$(config/*:RichTextPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase,{});
    var defaults_$1/*:RichTextPropertyField*/ =AS3.cast(RichTextPropertyField,{});
    AS3.setBindable(defaults_$1,"embeddedImageMaxWidth" , com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea.EMBEDDED_IMAGE_DEFAULT_WIDTH);
    AS3.setBindable(defaults_$1,"changeBuffer" , 1000);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_SetPropertyLabelPlugin_354_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_354_5_$1.bindTo = config.bindTo;
    editor_SetPropertyLabelPlugin_354_5_$1.propertyName =net.jangaroo.ext.Exml.asString( config.propertyName);
    var editor_ShowIssuesPlugin_356_5_$1/*:com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin,{});
    editor_ShowIssuesPlugin_356_5_$1.bindTo = config.bindTo;
    AS3.setBindable(editor_ShowIssuesPlugin_356_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    AS3.setBindable(editor_ShowIssuesPlugin_356_5_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    var editor_BindReadOnlyPlugin_359_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    editor_BindReadOnlyPlugin_359_5_$1.bindTo = config.bindTo;
    AS3.setBindable(editor_BindReadOnlyPlugin_359_5_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    config_$1.plugins = [editor_SetPropertyLabelPlugin_354_5_$1, editor_ShowIssuesPlugin_356_5_$1, editor_BindReadOnlyPlugin_359_5_$1];
    var panel_363_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_363_5_$1.manageHeight = false;
    panel_363_5_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().itemId(RichTextPropertyField.RICH_TEXT_AREA_ITEM_ID).build());
    var editor_CoreMediaRichTextArea_366_9_$1/*:com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea,{});
    editor_CoreMediaRichTextArea_366_9_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RICH_TEXT_AREA_ITEM_ID);
    AS3.setBindable(editor_CoreMediaRichTextArea_366_9_$1,"listeners" , {'keydown': com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.handleKeys});
    AS3.setBindable(editor_CoreMediaRichTextArea_366_9_$1,"height" , AS3.getBindable(config,"initialHeight"));
    editor_CoreMediaRichTextArea_366_9_$1.ariaLabelledBy =AS3.bind( this,"getLabelId");
    AS3.setBindable(editor_CoreMediaRichTextArea_366_9_$1,"embeddedImageMaxWidth" , AS3.getBindable(config,"embeddedImageMaxWidth"));
    editor_CoreMediaRichTextArea_366_9_$1.focusCls = "x-form-focus";
    AS3.setBindable(editor_CoreMediaRichTextArea_366_9_$1,"changeBuffer" , AS3.getBindable(config,"changeBuffer"));
    var editor_BindReadOnlyPlugin_374_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_374_13_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindReadOnlyPlugin_374_13_$1.bindTo = config.bindTo;
    var ui_WriteBeforeFlushPlugin_376_13_$1/*:com.coremedia.ui.plugins.WriteBeforeFlushPlugin*/ =AS3.cast(com.coremedia.ui.plugins.WriteBeforeFlushPlugin,{});
    AS3.setBindable(ui_WriteBeforeFlushPlugin_376_13_$1,"valueExpression" , config.bindTo);
    var editor_PropertyFieldPlugin_377_13_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_377_13_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( config.propertyName));
    var ui_BindBlobPropertyPlugin_379_13_$1/*:com.coremedia.ui.plugins.BindBlobPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindBlobPropertyPlugin,{});
    ui_BindBlobPropertyPlugin_379_13_$1.bindTo = this.getRichTextValueExpression();
    var ui_ContextMenuPlugin_380_13_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_RichTextPropertyFieldContextMenu_382_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldContextMenu,{});
    AS3.setBindable(editor_RichTextPropertyFieldContextMenu_382_17_$1,"internalLinkContentValueExpression" , this.getInternalLinkContentValueExpression());
    AS3.setBindable(editor_RichTextPropertyFieldContextMenu_382_17_$1,"externalLinkUrlValueExpression" , this.getExternalLinkUrlValueExpression());
    AS3.setBindable(ui_ContextMenuPlugin_380_13_$1,"contextMenu" , editor_RichTextPropertyFieldContextMenu_382_17_$1);
    var ui_ResizablePlugin_387_13_$1/*:com.coremedia.ui.plugins.ResizablePlugin*/ =AS3.cast(com.coremedia.ui.plugins.ResizablePlugin,{});
    AS3.setBindable(ui_ResizablePlugin_387_13_$1,"fitComponent" , true);
    var ui_StatefulResizer_389_17_$1/*:com.coremedia.ui.components.StatefulResizer*/ =AS3.cast(com.coremedia.ui.components.StatefulResizer,{});
    ui_StatefulResizer_389_17_$1.minHeight = 30;
    ui_StatefulResizer_389_17_$1.handles = "s";
    ui_StatefulResizer_389_17_$1.pinned = true;
    ui_StatefulResizer_389_17_$1.dynamic = false;
    AS3.setBindable(ui_StatefulResizer_389_17_$1,"embed" , false);
    AS3.setBindable(ui_StatefulResizer_389_17_$1,"horizontalResize" , false);
    ui_ResizablePlugin_387_13_$1.resizableConfig = ui_StatefulResizer_389_17_$1;
    editor_CoreMediaRichTextArea_366_9_$1.plugins = [editor_BindReadOnlyPlugin_374_13_$1, ui_WriteBeforeFlushPlugin_376_13_$1, editor_PropertyFieldPlugin_377_13_$1, ui_BindBlobPropertyPlugin_379_13_$1, ui_ContextMenuPlugin_380_13_$1, ui_ResizablePlugin_387_13_$1];
    editor_CoreMediaRichTextArea_366_9_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    panel_363_5_$1.items = [editor_CoreMediaRichTextArea_366_9_$1];
    var ui_FloatingToolbar_402_9_$1/*:com.coremedia.ui.components.FloatingToolbar*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbar,{});
    ui_FloatingToolbar_402_9_$1.enableOverflow = true;
    ui_FloatingToolbar_402_9_$1.defaultButtonUI =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR.getSkin());
    var ui_RichTextActionToggleButton_405_13_$1/*:com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_405_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.UNDO_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_405_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_UNDO));
    var ui_RichTextActionToggleButton_406_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_406_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.REDO_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_406_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_REDO));
    var tbSeparator_407_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_407_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_FIRST_ITEM_ID);
    AS3.setBindable(tbSeparator_407_13_$1,"width" , "3px");
    var ui_MenuIconButton_409_13_$1/*:com.coremedia.ui.components.MenuIconButton*/ =AS3.cast(com.coremedia.ui.components.MenuIconButton,{});
    ui_MenuIconButton_409_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PARAGRAPH_FORMAT_GROUP_ITEM_ID);
    AS3.setBindable(ui_MenuIconButton_409_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'paragraph_style')));
    AS3.setBindable(ui_MenuIconButton_409_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'format_group_tooltip'));
    AS3.setBindable(ui_MenuIconButton_409_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'format_group_text')));
    var editor_BindDisablePlugin_414_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_414_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindDisablePlugin_414_17_$1.bindTo = config.bindTo;
    ui_MenuIconButton_409_13_$1.plugins = [editor_BindDisablePlugin_414_17_$1];
    var menu_418_17_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_RichTextMenuCheckItem_421_21_$1/*:com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_421_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PARAGRAPH_HEADING1_ITEM_ID);
    ui_RichTextMenuCheckItem_421_21_$1.group = "p";
    var ui_RichTextAction_424_25_$1/*:com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_424_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING1));
    ui_RichTextMenuCheckItem_421_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_424_25_$1);
    var ui_RichTextMenuCheckItem_427_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_427_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PARAGRAPH_HEADING2_ITEM_ID);
    ui_RichTextMenuCheckItem_427_21_$1.group = "p";
    var ui_RichTextAction_430_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_430_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING2));
    ui_RichTextMenuCheckItem_427_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_430_25_$1);
    var ui_RichTextMenuCheckItem_433_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_433_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PARAGRAPH_HEADING3_ITEM_ID);
    ui_RichTextMenuCheckItem_433_21_$1.group = "p";
    var ui_RichTextAction_436_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_436_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_HEADING3));
    ui_RichTextMenuCheckItem_433_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_436_25_$1);
    var menuSeparator_439_21_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_440_21_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_440_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PARAGRAPH_FORMAT_REMOVE_ITEM_ID);
    var ui_RichTextAction_442_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_442_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_PARAGRAPH_REMOVE));
    menuItem_440_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_442_25_$1);
    menu_418_17_$1.items = [ui_RichTextMenuCheckItem_421_21_$1, ui_RichTextMenuCheckItem_427_21_$1, ui_RichTextMenuCheckItem_433_21_$1, menuSeparator_439_21_$1, menuItem_440_21_$1];
    ui_MenuIconButton_409_13_$1.menu = menu_418_17_$1;
    var tbSeparator_449_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_449_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_SECOND_ITEM_ID);
    var ui_RichTextActionToggleButton_450_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_450_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.BOLD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_450_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_BOLD));
    var ui_RichTextActionToggleButton_451_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_451_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.ITALIC_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_451_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ITALIC));
    var ui_RichTextActionToggleButton_453_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_453_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.BLOCKQUOTE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_453_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_BLOCKQUOTE));
    var ui_IconButton_456_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_456_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INLINE_FORMAT_GROUP_ITEM_ID);
    AS3.setBindable(ui_IconButton_456_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'format_text_inline')));
    AS3.setBindable(ui_IconButton_456_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'inlineformat_group_tooltip'));
    AS3.setBindable(ui_IconButton_456_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'inlineformat_group_text')));
    var editor_BindDisablePlugin_461_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_461_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindDisablePlugin_461_17_$1.bindTo = config.bindTo;
    ui_IconButton_456_13_$1.plugins = [editor_BindDisablePlugin_461_17_$1];
    var menu_465_17_$1/*: ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_RichTextMenuCheckItem_467_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_467_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INLINE_UNDERLINE_ITEM_ID);
    var ui_RichTextAction_469_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_469_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_UNDERLINE));
    ui_RichTextMenuCheckItem_467_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_469_25_$1);
    var ui_RichTextMenuCheckItem_472_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_472_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INLINE_STRIKETHROUGH_ITEM_ID);
    var ui_RichTextAction_474_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_474_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_STRIKE));
    ui_RichTextMenuCheckItem_472_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_474_25_$1);
    var ui_RichTextMenuCheckItem_477_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_477_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INLINE_SUPERSCRIPT_ITEM_ID);
    var ui_RichTextAction_479_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_479_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_SUPERSCRIPT));
    ui_RichTextMenuCheckItem_477_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_479_25_$1);
    var ui_RichTextMenuCheckItem_482_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_482_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INLINE_SUBSCRIPT_ITEM_ID);
    var ui_RichTextAction_484_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_484_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_SUBSCRIPT));
    ui_RichTextMenuCheckItem_482_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_484_25_$1);
    menu_465_17_$1.items = [ui_RichTextMenuCheckItem_467_21_$1, ui_RichTextMenuCheckItem_472_21_$1, ui_RichTextMenuCheckItem_477_21_$1, ui_RichTextMenuCheckItem_482_21_$1];
    ui_IconButton_456_13_$1.menu = menu_465_17_$1;
    var tbSeparator_491_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_491_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_THIRD_ITEM_ID);
    var editor_InternalLinkButton_492_13_$1/*: com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButton,{});
    editor_InternalLinkButton_492_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INTERNAL_LINK_BUTTON_ITEM_ID);
    AS3.setBindable(editor_InternalLinkButton_492_13_$1,"bindTo" , config.bindTo);
    AS3.setBindable(editor_InternalLinkButton_492_13_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    var ui_IconButton_495_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_495_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.EXTERNAL_LINK_BUTTON_ITEM_ID);
    var editor_LinkAction_497_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction,{});
    AS3.setBindable(editor_LinkAction_497_17_$1,"bindTo" , config.bindTo);
    AS3.setBindable(editor_LinkAction_497_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    AS3.setBindable(editor_LinkAction_497_17_$1,"externalLinkTargetTypeValueExpression" , this.getExternalLinkTargetTypeValueExpression());
    ui_IconButton_495_13_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction(editor_LinkAction_497_17_$1);
    var ui_RichTextActionToggleButton_502_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_502_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.REMOVE_LINK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_502_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_UNLINK));
    var ui_IconButton_504_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_504_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.SHOW_PICTURES_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_504_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmimage_text')));
    AS3.setBindable(ui_IconButton_504_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmimage_tooltip'));
    AS3.setBindable(ui_IconButton_504_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'type_picture')));
    var editor_ShowCollectionViewInCurrentSiteAction_509_17_$1/*:com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction,{});
    AS3.setBindable(editor_ShowCollectionViewInCurrentSiteAction_509_17_$1,"view" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW));
    AS3.setBindable(editor_ShowCollectionViewInCurrentSiteAction_509_17_$1,"contentType" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.editorContext.getDefaultRichTextImageDocumentType()));
    AS3.setBindable(editor_ShowCollectionViewInCurrentSiteAction_509_17_$1,"bindTo" , config.bindTo);
    ui_IconButton_504_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction(editor_ShowCollectionViewInCurrentSiteAction_509_17_$1);
    var editor_BindDisablePlugin_514_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_514_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindDisablePlugin_514_17_$1.bindTo = config.bindTo;
    ui_IconButton_504_13_$1.plugins = [editor_BindDisablePlugin_514_17_$1];
    var tbSeparator_518_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_518_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_FOURTH_ITEM_ID);
    var ui_IconButton_519_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_519_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_GROUP_ITEM_ID);
    AS3.setBindable(ui_IconButton_519_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'text_alignment')));
    AS3.setBindable(ui_IconButton_519_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'alignment_group_tooltip'));
    AS3.setBindable(ui_IconButton_519_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'alignment_group_text')));
    var editor_BindDisablePlugin_524_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_524_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindDisablePlugin_524_17_$1.bindTo = config.bindTo;
    ui_IconButton_519_13_$1.plugins = [editor_BindDisablePlugin_524_17_$1];
    var menu_528_17_$1/*: ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var ui_RichTextMenuCheckItem_531_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_531_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_LEFT_ITEM_ID);
    ui_RichTextMenuCheckItem_531_21_$1.group = "align";
    var ui_RichTextAction_534_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_534_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_LEFT));
    ui_RichTextMenuCheckItem_531_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_534_25_$1);
    var ui_RichTextMenuCheckItem_537_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_537_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_CENTER_ITEM_ID);
    ui_RichTextMenuCheckItem_537_21_$1.group = "align";
    var ui_RichTextAction_540_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_540_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_CENTER));
    ui_RichTextMenuCheckItem_537_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_540_25_$1);
    var ui_RichTextMenuCheckItem_543_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_543_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_RIGHT_ITEM_ID);
    ui_RichTextMenuCheckItem_543_21_$1.group = "align";
    var ui_RichTextAction_546_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_546_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_RIGHT));
    ui_RichTextMenuCheckItem_543_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_546_25_$1);
    var ui_RichTextMenuCheckItem_549_21_$1/*: com.coremedia.ui.ckeditor.RichTextMenuCheckItem*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextMenuCheckItem,{});
    ui_RichTextMenuCheckItem_549_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_JUSTIFIED_ITEM_ID);
    ui_RichTextMenuCheckItem_549_21_$1.group = "align";
    var ui_RichTextAction_552_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_552_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_JUSTIFIED));
    ui_RichTextMenuCheckItem_549_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_552_25_$1);
    var menuSeparator_555_21_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_556_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_556_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TEXT_ALIGN_REMOVE_ITEM_ID);
    var ui_RichTextAction_558_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_558_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_ALIGN_REMOVE));
    menuItem_556_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_558_25_$1);
    menu_528_17_$1.items = [ui_RichTextMenuCheckItem_531_21_$1, ui_RichTextMenuCheckItem_537_21_$1, ui_RichTextMenuCheckItem_543_21_$1, ui_RichTextMenuCheckItem_549_21_$1, menuSeparator_555_21_$1, menuItem_556_21_$1];
    ui_IconButton_519_13_$1.menu = menu_528_17_$1;
    var tbSeparator_565_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_565_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_FIFTH_ITEM_ID);
    var ui_IconButton_566_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_566_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_GROUP_ITEM_ID);
    AS3.setBindable(ui_IconButton_566_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'table')));
    AS3.setBindable(ui_IconButton_566_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmtable_group_tooltip'));
    AS3.setBindable(ui_IconButton_566_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'cmtable_group_text')));
    var editor_BindDisablePlugin_571_17_$1/*: com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin,{});
    AS3.setBindable(editor_BindDisablePlugin_571_17_$1,"forceReadOnlyValueExpression" , config.forceReadOnlyValueExpression);
    editor_BindDisablePlugin_571_17_$1.bindTo = config.bindTo;
    ui_IconButton_566_13_$1.plugins = [editor_BindDisablePlugin_571_17_$1];
    var menu_575_17_$1/*: ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_577_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_577_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_ADD_ITEM_ID);
    var ui_TableAction_579_25_$1/*:com.coremedia.ui.ckeditor.TableAction*/ =AS3.cast(com.coremedia.ui.ckeditor.TableAction,{});
    menuItem_577_21_$1.baseAction = new com.coremedia.ui.ckeditor.TableAction(ui_TableAction_579_25_$1);
    var menuSeparator_582_21_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_583_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_583_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_INSERT_ROW_ABOVE_ITEM_ID);
    var ui_RichTextAction_585_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_585_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_ROW_INSERT_BEFORE));
    menuItem_583_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_585_25_$1);
    var menuItem_588_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_588_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_INSERT_ROW_BELOW_ITEM_ID);
    var ui_RichTextAction_590_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_590_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_ROW_INSERT_AFTER));
    menuItem_588_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_590_25_$1);
    var menuItem_593_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_593_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_DELETE_ROWS_ITEM_ID);
    var ui_RichTextAction_595_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_595_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_ROW_DELETE));
    menuItem_593_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_595_25_$1);
    var menuSeparator_598_21_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_599_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_599_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_INSERT_COLUMN_LEFT_ITEM_ID);
    var ui_RichTextAction_601_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_601_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_COLUMN_INSERT_BEFORE));
    menuItem_599_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_601_25_$1);
    var menuItem_604_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_604_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_INSERT_COLUMN_RIGHT_ITEM_ID);
    var ui_RichTextAction_606_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_606_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_COLUMN_INSERT_AFTER));
    menuItem_604_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_606_25_$1);
    var menuItem_609_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_609_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_DELETE_COLUMNS_ITEM_ID);
    var ui_RichTextAction_611_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_611_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_COLUMN_DELETE));
    menuItem_609_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_611_25_$1);
    var menuSeparator_614_21_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_615_21_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_615_21_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.TABLE_REMOVE_ITEM_ID);
    var ui_RichTextAction_617_25_$1/*: com.coremedia.ui.ckeditor.RichTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextAction,{});
    AS3.setBindable(ui_RichTextAction_617_25_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_TABLE_DELETE));
    menuItem_615_21_$1.baseAction = new com.coremedia.ui.ckeditor.RichTextAction(ui_RichTextAction_617_25_$1);
    menu_575_17_$1.items = [menuItem_577_21_$1, menuSeparator_582_21_$1, menuItem_583_21_$1, menuItem_588_21_$1, menuItem_593_21_$1, menuSeparator_598_21_$1, menuItem_599_21_$1, menuItem_604_21_$1, menuItem_609_21_$1, menuSeparator_614_21_$1, menuItem_615_21_$1];
    ui_IconButton_566_13_$1.menu = menu_575_17_$1;
    var tbSeparator_624_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_624_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_SIXTH_ITEM_ID);
    var ui_IconButton_625_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_625_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PASTE_TEXT_ITEM_ID);
    var ui_PasteTextAction_627_17_$1/*:com.coremedia.ui.ckeditor.PasteTextAction*/ =AS3.cast(com.coremedia.ui.ckeditor.PasteTextAction,{});
    ui_IconButton_625_13_$1.baseAction = new com.coremedia.ui.ckeditor.PasteTextAction(ui_PasteTextAction_627_17_$1);
    var ui_IconButton_630_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_630_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PASTE_FROM_WORD_ITEM_ID);
    var ui_PasteFromWordAction_632_17_$1/*:com.coremedia.ui.ckeditor.PasteFromWordAction*/ =AS3.cast(com.coremedia.ui.ckeditor.PasteFromWordAction,{});
    ui_IconButton_630_13_$1.baseAction = new com.coremedia.ui.ckeditor.PasteFromWordAction(ui_PasteFromWordAction_632_17_$1);
    var ui_IconButton_635_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_635_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.PASTE_CONTENT_ITEM_ID);
    var editor_PasteContentAction_637_17_$1/*:com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction,{});
    ui_IconButton_635_13_$1.baseAction = new com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction(editor_PasteContentAction_637_17_$1);
    var tbSeparator_640_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_640_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_SEVENTH_ITEM_ID);
    var ui_RichTextActionToggleButton_641_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_641_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.NUMBERED_LIST_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_641_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_NUMBERED_LIST));
    var ui_RichTextActionToggleButton_643_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_643_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.BULLETED_LIST_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_643_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_BULLETED_LIST));
    var tbSeparator_645_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_645_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_EIGHTH_ITEM_ID);
    var ui_RichTextActionToggleButton_646_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_646_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.OUTDENT_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_646_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_OUTDENT));
    var ui_RichTextActionToggleButton_647_13_$1/*: com.coremedia.ui.ckeditor.RichTextActionToggleButton*/ =AS3.cast(com.coremedia.ui.ckeditor.RichTextActionToggleButton,{});
    ui_RichTextActionToggleButton_647_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.INDENT_ITEM_ID);
    AS3.setBindable(ui_RichTextActionToggleButton_647_13_$1,"commandName" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.ckeditor.RichTextAction.COMMAND_INDENT));
    var tbSeparator_648_13_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_648_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.RTE_SEP_NINTH_ITEM_ID);
    var ui_IconButton_649_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_649_13_$1.itemId =net.jangaroo.ext.Exml.asString( RichTextPropertyField.IMAGE_PROPERTIES_ITEM_ID);
    var ui_PropertiesAction_651_17_$1/*:com.coremedia.ui.ckeditor.PropertiesAction*/ =AS3.cast(com.coremedia.ui.ckeditor.PropertiesAction,{});
    ui_IconButton_649_13_$1.baseAction = new com.coremedia.ui.ckeditor.PropertiesAction(ui_PropertiesAction_651_17_$1);
    ui_FloatingToolbar_402_9_$1.items = [ui_RichTextActionToggleButton_405_13_$1, ui_RichTextActionToggleButton_406_13_$1, tbSeparator_407_13_$1, ui_MenuIconButton_409_13_$1, tbSeparator_449_13_$1, ui_RichTextActionToggleButton_450_13_$1, ui_RichTextActionToggleButton_451_13_$1, ui_RichTextActionToggleButton_453_13_$1, ui_IconButton_456_13_$1, tbSeparator_491_13_$1, editor_InternalLinkButton_492_13_$1, ui_IconButton_495_13_$1, ui_RichTextActionToggleButton_502_13_$1, ui_IconButton_504_13_$1, tbSeparator_518_13_$1, ui_IconButton_519_13_$1, tbSeparator_565_13_$1, ui_IconButton_566_13_$1, tbSeparator_624_13_$1, ui_IconButton_625_13_$1, ui_IconButton_630_13_$1, ui_IconButton_635_13_$1, tbSeparator_640_13_$1, ui_RichTextActionToggleButton_641_13_$1, ui_RichTextActionToggleButton_643_13_$1, tbSeparator_645_13_$1, ui_RichTextActionToggleButton_646_13_$1, ui_RichTextActionToggleButton_647_13_$1, tbSeparator_648_13_$1, ui_IconButton_649_13_$1];
    panel_363_5_$1.tbar = ui_FloatingToolbar_402_9_$1;
    config_$1.items = [panel_363_5_$1];
    var layout_VBox_660_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_660_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_660_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ccFf(config_$1);
  }/*

    /** The maximumWidth an embedded image will be scaled down to in the property field, in pixels. No transformation
   will be applied to the original image itself (ie the transformation will not be visible on the delivery side). The image
   will never be scaled up. Defaults to 240.  * /
    [Bindable]
    public var embeddedImageMaxWidth:int;


    /** The initial height of the rich text editor textfield in pixels * /
    [Bindable]
    public var initialHeight:int;


    /** Don't show any validation issues on this property field. * /
    [Bindable]
    public var hideIssues:Boolean;


    /** The number of milliseconds to wait for more changes to the field's value before sending the change event. * /
    [Bindable]
    public var changeBuffer:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.richTextPropertyField",
      constructor: RichTextPropertyField$,
      super$ccFf: function() {
        com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        embeddedImageMaxWidth: 0,
        initialHeight: 0,
        hideIssues: false,
        changeBuffer: 0
      },
      statics: {
        UNDO_BUTTON_ITEM_ID: "undo",
        REDO_BUTTON_ITEM_ID: "redo",
        RICH_TEXT_AREA_ITEM_ID: "richTextArea",
        PARAGRAPH_FORMAT_GROUP_ITEM_ID: "paragraphFormatGroup",
        PARAGRAPH_HEADING1_ITEM_ID: "paragraphFormatHeading1",
        PARAGRAPH_HEADING2_ITEM_ID: "paragraphFormatHeading2",
        PARAGRAPH_HEADING3_ITEM_ID: "paragraphFormatHeading3",
        PARAGRAPH_HEADING4_ITEM_ID: "paragraphFormatHeading4",
        PARAGRAPH_HEADING5_ITEM_ID: "paragraphFormatHeading5",
        PARAGRAPH_HEADING6_ITEM_ID: "paragraphFormatHeading6",
        PARAGRAPH_FORMAT_REMOVE_ITEM_ID: "paragraphFormatRemove",
        BOLD_BUTTON_ITEM_ID: "bold",
        ITALIC_BUTTON_ITEM_ID: "italic",
        BLOCKQUOTE_BUTTON_ITEM_ID: "blockquote",
        INLINE_FORMAT_GROUP_ITEM_ID: "inlineFormatGroup",
        INLINE_UNDERLINE_ITEM_ID: "inlineFormatUnderline",
        INLINE_STRIKETHROUGH_ITEM_ID: "inlineFormatStrikeThrough",
        INLINE_SUPERSCRIPT_ITEM_ID: "inlineFormatSuperscript",
        INLINE_SUBSCRIPT_ITEM_ID: "inlineFormatSubscript",
        INTERNAL_LINK_BUTTON_ITEM_ID: "internalLinkButton",
        EXTERNAL_LINK_BUTTON_ITEM_ID: "externalLinkButton",
        REMOVE_LINK_BUTTON_ITEM_ID: "removeLinkButton",
        SHOW_PICTURES_BUTTON_ITEM_ID: "showPicturesButton",
        TEXT_ALIGN_GROUP_ITEM_ID: "textAlignGroup",
        TEXT_ALIGN_LEFT_ITEM_ID: "textAlignLeft",
        TEXT_ALIGN_CENTER_ITEM_ID: "textAlignCenter",
        TEXT_ALIGN_RIGHT_ITEM_ID: "textAlignRight",
        TEXT_ALIGN_JUSTIFIED_ITEM_ID: "textAlignJustified",
        TEXT_ALIGN_REMOVE_ITEM_ID: "textAlignRemove",
        TABLE_GROUP_ITEM_ID: "tableGroup",
        TABLE_ADD_ITEM_ID: "tableAdd",
        TABLE_INSERT_ROW_ABOVE_ITEM_ID: "tableInsertRowAbove",
        TABLE_INSERT_ROW_BELOW_ITEM_ID: "tableInsertRowBelow",
        TABLE_DELETE_ROWS_ITEM_ID: "tableDeleteRows",
        TABLE_INSERT_COLUMN_LEFT_ITEM_ID: "tableInsertColumnLeft",
        TABLE_INSERT_COLUMN_RIGHT_ITEM_ID: "tableInsertColumnRight",
        TABLE_DELETE_COLUMNS_ITEM_ID: "tableDeleteColumns",
        TABLE_REMOVE_ITEM_ID: "tableRemove",
        CELL_MERGE_ITEM_ID: "cellMerge",
        CELL_MERGE_RIGHT_ITEM_ID: "cellMergeRight",
        CELL_MERGE_DOWN_ITEM_ID: "cellMergeDown",
        CELL_VERTICAL_SPLIT_ITEM_ID: "cellVerticalSplit",
        CELL_HORIZONTAL_SPLIT_ITEM_ID: "cellHorizontalSplit",
        PASTE_TEXT_ITEM_ID: "pasteText",
        PASTE_FROM_WORD_ITEM_ID: "pasteFromWord",
        PASTE_CONTENT_ITEM_ID: "pasteContent",
        NUMBERED_LIST_ITEM_ID: "numberedList",
        BULLETED_LIST_ITEM_ID: "bulletedList",
        OUTDENT_ITEM_ID: "outdent",
        INDENT_ITEM_ID: "indent",
        IMAGE_PROPERTIES_ITEM_ID: "imageProperties",
        RTE_SEP_FIRST_ITEM_ID: "sepFirst",
        RTE_SEP_SECOND_ITEM_ID: "sepSecond",
        RTE_SEP_THIRD_ITEM_ID: "sepThird",
        RTE_SEP_FOURTH_ITEM_ID: "sepFourth",
        RTE_SEP_FIFTH_ITEM_ID: "sepFifth",
        RTE_SEP_SIXTH_ITEM_ID: "sepSixth",
        RTE_SEP_SEVENTH_ITEM_ID: "sepSeventh",
        RTE_SEP_EIGHTH_ITEM_ID: "sepEighth",
        RTE_SEP_NINTH_ITEM_ID: "sepNinth",
        FIND_TOOLBAR: undefined,
        __initStatics__: function() {
          FIND_TOOLBAR$static_();
        }
      },
      requires: [
        "Ext.layout.container.VBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "Ext.panel.Panel",
        "Ext.toolbar.Separator",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.ckeditor.PasteFromWordAction",
        "com.coremedia.ui.ckeditor.PasteTextAction",
        "com.coremedia.ui.ckeditor.PropertiesAction",
        "com.coremedia.ui.ckeditor.RichTextAction",
        "com.coremedia.ui.ckeditor.RichTextActionToggleButton",
        "com.coremedia.ui.ckeditor.RichTextMenuCheckItem",
        "com.coremedia.ui.ckeditor.TableAction",
        "com.coremedia.ui.components.FloatingToolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.MenuIconButton",
        "com.coremedia.ui.components.StatefulResizer",
        "com.coremedia.ui.plugins.BindBlobPropertyPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.plugins.ResizablePlugin",
        "com.coremedia.ui.plugins.WriteBeforeFlushPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInCurrentSiteAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.components.CoreMediaRichTextArea",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.InternalLinkButton",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldContextMenu",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindDisablePlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkAction",
        "com.coremedia.cms.editor.sdk.premular.fields.richtext.PasteContentAction",
        "com.coremedia.cms.editor.sdk.validation.ShowIssuesPlugin"
      ]
    };
});
