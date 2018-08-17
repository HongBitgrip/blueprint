Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.BlackListWindowBase", function(BlackListWindowBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
import com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.Ext;
import ext.MessageBox;
import ext.button.Button;
import ext.form.field.TextField;

[ResourceBundle('com.coremedia.icons.CoreIcons')]
[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class BlackListWindowBase extends StudioDialog {
  public static const EDITOR_TEXT_FIELD_ID:String = "cm-moderation-blacklist-editor-text-field";
  public static const UPDATE_BUTTON_ID:String = "cm-moderation-blacklist-editor-update-button";

  [Bindable]
  public var blacklistAdministration:BlacklistAdministration;

  private var blacklistValueExpression:ValueExpression;
  private var editorTextField:TextField;
  private var updateButton:Button;
  private var commentRichTextArea:RichTextArea;
  private var richtextAreaId:String;

  public*/ function BlackListWindowBase$(config/*:BlacklistWindow = null*/) {if(arguments.length<=0)config=null;
    this.richtextAreaId$vmoK = AS3.getBindable(config,"richtextAreaId");
    this.blacklistValueExpression$vmoK = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST, AS3.getBindable(config,"blacklistAdministration"));
    this.super$vmoK(config);
  }/*

  override protected*/ function onShow(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onShow.call(this,animateTarget, callback, scope);
    var selectedText/*:String*/ = this.getSelectedCommentText$vmoK();
    this.getEditorTextField$vmoK().setDisabled(false);
    this.getEditorTextField$vmoK().setValue(selectedText);
    this.toggleUpdateButton$vmoK(selectedText);
    this.blacklistValueExpression$vmoK.addChangeListener(AS3.bind(this,"blacklistChanged$vmoK"));
  }/*

  override protected*/ function onHide(animateTarget/*:* = undefined*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:callback=null;case 2:scope=null;}
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onHide.call(this,animateTarget, callback, scope);
    this.blacklistValueExpression$vmoK.removeChangeListener(AS3.bind(this,"blacklistChanged$vmoK"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
    this.getEditorTextField$vmoK().setDisabled(true);
    this.blacklistValueExpression$vmoK.removeChangeListener(AS3.bind(this,"blacklistChanged$vmoK"));
    this.blacklistValueExpression$vmoK = null;
  }/*

  private*/ function blacklistChanged()/*:void*/ {
    this.toggleUpdateButton$vmoK(this.getEditorTextField$vmoK().getValue());
  }/*

  private*/ function getEditorTextField()/*:TextField*/ {var this$=this;
    if (!this.editorTextField$vmoK) {
      this.editorTextField$vmoK =AS3.as( this.queryById(BlackListWindowBase.EDITOR_TEXT_FIELD_ID),  Ext.form.field.Text);
      // Do not forget to enableKeyEvents within the exml
      this.editorTextField$vmoK.addListener('keyup',AS3.bind( this,"blacklistEditorTextFieldChanged$vmoK"));
      this.editorTextField$vmoK.addListener('enable', function (cmp/*:Component*/)/*:void*/ {
        this$.editorTextField$vmoK.focus(false);
      });
    }

    return this.editorTextField$vmoK;
  }/*

  private*/ function blacklistEditorTextFieldChanged()/*:void*/ {
    this.toggleUpdateButton$vmoK(this.getEditorTextField$vmoK().getValue());
  }/*

  protected*/ function updateBlacklistEntry()/*:void*/ {
    var toBeUpdated/*:**/ = this.getEditorTextField$vmoK().getValue().toLowerCase();
    if (toBeUpdated) {
      if (AS3.getBindable(this,"blacklistAdministration").isInBlacklist(toBeUpdated.toString().trim())) {
        this.removeBlacklistEntry(toBeUpdated.toString().trim());
        this.getEditorUpdateButton$vmoK().ariaLabel = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_add_button_tooltip');
      } else {
        this.addBlacklistEntry(toBeUpdated.toString().trim());
        this.getEditorUpdateButton$vmoK().ariaLabel = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_remove_button_tooltip');
      }
    }
    this.hide();
  }/*

  protected*/ function addBlacklistEntry(entry/*:String*/)/*:void*/ {
    if (entry && entry.length < 3) {
      Ext.MessageBox.alert("Error", this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_small_word_error'));
      return;
    }
    AS3.getBindable(this,"blacklistAdministration").addBlacklistedWord(entry);
  }/*

  public*/ function removeBlacklistEntry(entry/*:String*/)/*:void*/ {
    AS3.getBindable(this,"blacklistAdministration").removeBlacklistedWord(entry);
  }/*

  private*/ function toggleUpdateButton(toBeUpdated/*:**/)/*:void*/ {
    var updateButton/*:Button*/ = this.getEditorUpdateButton$vmoK();
    if (toBeUpdated && AS3.getBindable(this,"blacklistAdministration").isInBlacklist(toBeUpdated.toString().trim())) {
      updateButton.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'minus'));
      updateButton.setTooltip(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_remove_button_tooltip'));
    } else {
      updateButton.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'plus'));
      updateButton.setTooltip(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'blacklist_add_button_tooltip'));
    }
  }/*

  private*/ function getEditorUpdateButton()/*:Button*/ {
    if (!this.updateButton$vmoK) {
      this.updateButton$vmoK =AS3.as( this.queryById(BlackListWindowBase.UPDATE_BUTTON_ID),  Ext.button.Button);
    }

    return this.updateButton$vmoK;
  }/*

  /**
   * The RichTextArea that contains the comment.
   * @return
   * /
  private*/ function getCommentRichTextArea()/*:RichTextArea*/ {
    if (!this.commentRichTextArea$vmoK) {
      this.commentRichTextArea$vmoK =AS3.as( Ext.getCmp(this.richtextAreaId$vmoK),  com.coremedia.ui.ckeditor.RichTextArea);
    }
    return this.commentRichTextArea$vmoK;
  }/*

  /**
   * Copied function from ui workspace (InternalLinkWindowBase.as):
   * Returns the selected text of the RTE.
   * @return
   * /
  private*/ function getSelectedCommentText()/*:String*/ {
    var selection/*:**/ = this.getCommentRichTextArea$vmoK().getCKEditor().getSelection();
    var text/*:String*/ = null;

    if (selection === null) {
      return null;
    }

    //get the selected text, don't know why it must be that complicate, maybe getNative alone works too.
    if (CKEDITOR['env'].ie) {
      selection['unlock'](true);
      text = "" + selection['getNative']().createRange().text;
    } else {
      text = "" + selection.getSelectedText();
    }

    if (text.length > 0) {
      return text;
    }

    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      blacklistValueExpression$vmoK: null,
      editorTextField$vmoK: null,
      updateButton$vmoK: null,
      commentRichTextArea$vmoK: null,
      richtextAreaId$vmoK: null,
      constructor: BlackListWindowBase$,
      super$vmoK: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      onShow: onShow,
      onHide: onHide,
      onDestroy: onDestroy,
      blacklistChanged$vmoK: blacklistChanged,
      getEditorTextField$vmoK: getEditorTextField,
      blacklistEditorTextFieldChanged$vmoK: blacklistEditorTextFieldChanged,
      updateBlacklistEntry: updateBlacklistEntry,
      addBlacklistEntry: addBlacklistEntry,
      removeBlacklistEntry: removeBlacklistEntry,
      toggleUpdateButton$vmoK: toggleUpdateButton,
      getEditorUpdateButton$vmoK: getEditorUpdateButton,
      getCommentRichTextArea$vmoK: getCommentRichTextArea,
      getSelectedCommentText$vmoK: getSelectedCommentText,
      config: {blacklistAdministration: null},
      statics: {
        EDITOR_TEXT_FIELD_ID: "cm-moderation-blacklist-editor-text-field",
        UPDATE_BUTTON_ID: "cm-moderation-blacklist-editor-update-button"
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.form.field.Text",
        "Ext.window.MessageBox",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames"]
    };
});
