Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContentInformationContainerBase", function(ContentInformationContainerBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.util.AriaUtils;

import ext.StringUtil;
import ext.button.Button;
import ext.container.Container;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ContentInformationContainerBase extends Container {
  protected static const TARGET_BUTTON_ID:String = "cm-elastic-social-target-button";

  private var moderationContributionAdministrationImpl:AbstractContributionAdministration;
  private var targetButton:Button;
  private var displayedContributionValueExpression:ValueExpression;
  private var targetTextValueExpression:ValueExpression;
  private var targetAriaLabelValueExpression:ValueExpression;
  private var targetContentNotReadableVE:ValueExpression;
  private var targetIconClsValueExpression:ValueExpression;

  public*/ function ContentInformationContainerBase$(config/*:ContentInformationContainer = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministrationImpl$yGfL =AS3.as( AS3.getBindable(config,"contributionAdministration"),  com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration);

    this.displayedContributionValueExpression$yGfL = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.moderationContributionAdministrationImpl$yGfL);
    this.displayedContributionValueExpression$yGfL.addChangeListener(AS3.bind(this,"toggleTargetLink$yGfL"));
    this.getIconClassValueExpression$yGfL().addChangeListener(AS3.bind(this,"setContentTypeIconClass$yGfL"));

    this.super$yGfL(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.displayedContributionValueExpression$yGfL.addChangeListener(AS3.bind(this,"toggleTargetLink$yGfL"));
    this.displayedContributionValueExpression$yGfL.addChangeListener(AS3.bind(this,"setContentTypeIconClass$yGfL"));
    this.setContentTypeIconClass$yGfL();
    this.toggleTargetLink$yGfL();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.displayedContributionValueExpression$yGfL.removeChangeListener(AS3.bind(this,"toggleTargetLink$yGfL"));
    this.getIconClassValueExpression$yGfL().removeChangeListener(AS3.bind(this,"setContentTypeIconClass$yGfL"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*

  protected*/ function openTarget()/*:void*/ {
    var displayed/*:Contribution*/ = this.moderationContributionAdministrationImpl$yGfL.getDisplayed();
    if (AS3.is(displayed.getTarget(),  com.coremedia.cap.content.Content)) {
      var content/*:Content*/ = displayed.getTarget();
      if (content && content.getState().readable) {
        com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
      }
    }
  }/*

  protected*/ function getTargetTextValueExpression()/*:ValueExpression*/ {
    if (!this.targetTextValueExpression$yGfL) {
      this.targetTextValueExpression$yGfL = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getTargetText$yGfL"));
    }

    return this.targetTextValueExpression$yGfL;
  }/*

  protected*/ function getTargetAriaLabelValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.targetAriaLabelValueExpression$yGfL) {
      this.targetAriaLabelValueExpression$yGfL = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:String*/ {
        var text/*:ValueExpression*/ = this$.getTargetTextValueExpression().getValue();
        if (text) {
          return Ext.String.format(this$.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_target_ariaLabel'), text);
        }
        return com.coremedia.ui.util.AriaUtils.DUMMY_TEXT;
      });
    }
    return this.targetAriaLabelValueExpression$yGfL;
  }/*
  
  private*/ function getTargetText()/*:String*/ {
    var comment/*:Comment*/ = this.displayedContributionValueExpression$yGfL.getValue();
    if (comment) {
      var target/*:RemoteBeanImpl*/ = comment.getTarget();
      if (target) {
        var content/*:Content*/ =AS3.as( target,  com.coremedia.cap.content.Content);
        if (content) {
          return getContentName$static(content);
        } else {
          return comment.getSubject();
        }
      }
    }

    return undefined;
  }/*

  protected*/ function getTargetContentNotReadableVE()/*:ValueExpression*/ {
    if (!this.targetContentNotReadableVE$yGfL) {
      this.targetContentNotReadableVE$yGfL = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isTargetContentNotReadable$yGfL"));
    }

    return this.targetContentNotReadableVE$yGfL;
  }/*

  private*/ function isTargetContentNotReadable()/*:Boolean*/ {
    var comment/*:Comment*/ = this.displayedContributionValueExpression$yGfL.getValue();
    if (comment) {
      var content/*:Content*/ =AS3.as( comment.getTarget(),  com.coremedia.cap.content.Content);
      if (content) {
        // Trigger load, this is not done by getState()
        content.load();
        var contentReadable/*:Boolean*/ = content.getState().readable;
        return !contentReadable;
      }
    }

    return true;
  }/*

  private*/ function getIconClassValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.targetIconClsValueExpression$yGfL) {
      this.targetIconClsValueExpression$yGfL = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        var targetIconCls/*:String*/ = "";

        var displayed/*:Contribution*/ = this$.moderationContributionAdministrationImpl$yGfL.getDisplayed();
        if (displayed &&AS3.bind( displayed,"getTarget")) {
          var target/*:Object*/ = displayed.getTarget();
          if (AS3.is(target,  com.coremedia.cap.content.Content)) {
            targetIconCls = getIconClass$static(AS3.as(target,  com.coremedia.cap.content.Content));
          }
        }
        return targetIconCls;
      });
    }

    return this.targetIconClsValueExpression$yGfL;
  }/*

  private*/ function toggleTargetLink()/*:void*/ {
    var contribution/*:Contribution*/ = this.moderationContributionAdministrationImpl$yGfL.getDisplayed();
    if(this.getTargetButton$yGfL()) {
      if (contribution && contribution.getTarget()) {
        this.getTargetButton$yGfL().show();
      } else {
        this.getTargetButton$yGfL().hide();
      }
    }
  }/*

  private*/ function setContentTypeIconClass()/*:void*/ {
    var btn/*:Button*/ = this.getTargetButton$yGfL();
    if (btn && btn.rendered) {
      AS3.setBindable(btn,"iconCls" , this.getIconClassValueExpression$yGfL().getValue());
    }
  }/*

  private*/ function getTargetButton()/*:Button*/ {
    if (!this.targetButton$yGfL && this.rendered) {
      this.targetButton$yGfL =AS3.as( this.queryById(ContentInformationContainerBase.TARGET_BUTTON_ID),  Ext.button.Button);
      this.targetButton$yGfL.setTooltip(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_content_information_textlink_text'));
    }

    return this.targetButton$yGfL;
  }/*

  private static*/ function getIconClass$static(content/*:Content*/)/*:String*/ {
    // Trigger load, this is not done by getState()
    content.load();
    var contentReadable/*:Boolean*/ = content.getState().readable;
    return contentReadable
            ? (com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(content.getType()))
            : mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'no_rights');
  }/*

  private static*/ function getContentName$static(content/*:Content*/)/*:String*/ {
    // Trigger load, this is not done by getState()
    content.load();
    var contentReadable/*:Boolean*/ = content.getState().readable;
    return contentReadable
            ? content.getName()
            : com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.formatNotReadableName(content);

  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      moderationContributionAdministrationImpl$yGfL: null,
      targetButton$yGfL: null,
      displayedContributionValueExpression$yGfL: null,
      targetTextValueExpression$yGfL: null,
      targetAriaLabelValueExpression$yGfL: null,
      targetContentNotReadableVE$yGfL: null,
      targetIconClsValueExpression$yGfL: null,
      constructor: ContentInformationContainerBase$,
      super$yGfL: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      openTarget: openTarget,
      getTargetTextValueExpression: getTargetTextValueExpression,
      getTargetAriaLabelValueExpression: getTargetAriaLabelValueExpression,
      getTargetText$yGfL: getTargetText,
      getTargetContentNotReadableVE: getTargetContentNotReadableVE,
      isTargetContentNotReadable$yGfL: isTargetContentNotReadable,
      getIconClassValueExpression$yGfL: getIconClassValueExpression,
      toggleTargetLink$yGfL: toggleTargetLink,
      setContentTypeIconClass$yGfL: setContentTypeIconClass,
      getTargetButton$yGfL: getTargetButton,
      statics: {TARGET_BUTTON_ID: "cm-elastic-social-target-button"},
      requires: [
        "Ext.String",
        "Ext.button.Button",
        "Ext.container.Container",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.AriaUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration"
      ]
    };
});
