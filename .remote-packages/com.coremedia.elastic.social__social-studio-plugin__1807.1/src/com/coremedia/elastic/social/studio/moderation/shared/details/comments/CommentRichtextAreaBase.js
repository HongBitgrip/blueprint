Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase", function(CommentRichtextAreaBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
import com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistWindow;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.createComponentSelector;

public class CommentRichtextAreaBase extends RichTextArea {
  private var moderationContributionAdministration:AbstractContributionAdministration;
  private var blacklistValueExpression:ValueExpression;
  private var blackListWindow:BlacklistWindow;

  [Bindable]
  public var blacklistAdministration:BlacklistAdministration;

  public*/ function CommentRichtextAreaBase$(config/*:CommentRichtextArea = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministration$nrhV = AS3.getBindable(config,"abstractContribution");
    AS3.setBindable(this,"blacklistAdministration" , AS3.getBindable(config,"blacklistAdministration"));
    this.blacklistValueExpression$nrhV = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST,
            AS3.getBindable(config,"blacklistAdministration"));
    this.super$nrhV(config);
    this.blacklistValueExpression$nrhV.addChangeListener(AS3.bind(this,"blacklistChanged$nrhV"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.blacklistValueExpression$nrhV.removeChangeListener(AS3.bind(this,"blacklistChanged$nrhV"));
    com.coremedia.ui.ckeditor.RichTextArea.prototype.onDestroy.call(this);
  }/*

  protected*/ function highlightBlacklisted(text/*:String*/, blacklistStartTag/*:String*/, blacklistEndTag/*:String*/)/*:String*/ {
    return AS3.getBindable(this,"blacklistAdministration").highlightBlacklisted(text, blacklistStartTag, blacklistEndTag);
  }/*

  protected*/ function focused()/*:void*/ {
    if (this.getBlacklistWindow$nrhV()) {
      this.getBlacklistWindow$nrhV().hide();
    }
    this.moderationContributionAdministration$nrhV.pausePolling();
  }/*

  protected*/ function blured()/*:void*/ {
    this.moderationContributionAdministration$nrhV.startPolling(false);
  }/*

  private*/ function blacklistChanged()/*:void*/ {
    var ckEditor/*:**/ = this.getCKEditor();
    ckEditor && ckEditor.setData(this.getValue());
  }/*

  private*/ function getBlacklistWindow()/*:BlacklistWindow*/ {
    if (!this.blackListWindow$nrhV) {
      var parentCommentView/*:CommentView*/ =AS3.as( this.findParentByType(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView.xtype),  com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView);
      if (parentCommentView) {
        var blacklistToolbarBtn/*:BlacklistToolbarButton*/ =AS3.as( parentCommentView.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton.xtype).build()),  com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton);
        if (blacklistToolbarBtn) {
          this.blackListWindow$nrhV = blacklistToolbarBtn.getBlackListWindow();
        }
      }
    }
    return this.blackListWindow$nrhV;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.RichTextArea",
      moderationContributionAdministration$nrhV: null,
      blacklistValueExpression$nrhV: null,
      blackListWindow$nrhV: null,
      constructor: CommentRichtextAreaBase$,
      super$nrhV: function() {
        com.coremedia.ui.ckeditor.RichTextArea.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      highlightBlacklisted: highlightBlacklisted,
      focused: focused,
      blured: blured,
      blacklistChanged$nrhV: blacklistChanged,
      getBlacklistWindow$nrhV: getBlacklistWindow,
      config: {blacklistAdministration: null},
      requires: [
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.BlacklistToolbarButton",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView"
      ]
    };
});
