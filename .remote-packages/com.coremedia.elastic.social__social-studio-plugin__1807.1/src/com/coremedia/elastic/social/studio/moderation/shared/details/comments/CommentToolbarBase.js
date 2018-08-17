Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbarBase", function(CommentToolbarBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments {

import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.toolbar.Toolbar;

public class CommentToolbarBase extends Toolbar {
  protected static const RICHTEXT_TOOLBAR_ITEMID:String = "richtextToolbar";

  private var displayedValueExpression:ValueExpression;

  public*/ function CommentToolbarBase$(config/*:CommentToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$_miq(config);

    this.displayedValueExpression$_miq = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
            AS3.getBindable(config,"abstractContribution"));
    this.displayedValueExpression$_miq.addChangeListener(AS3.bind(this,"resetToolbarButtonsPressedState$_miq"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.displayedValueExpression$_miq.removeChangeListener(AS3.bind(this,"resetToolbarButtonsPressedState$_miq"));
    Ext.toolbar.Toolbar.prototype.onDestroy.call(this);
  }/*

  private*/ function resetToolbarButtonsPressedState()/*:void*/ {
    this.itemCollection.each(function (item/*:**/)/*:void*/ {
      if (item instanceof com.coremedia.ui.components.IconButton) {
        (AS3.as(item,  com.coremedia.ui.components.IconButton)).toggle(false);
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      displayedValueExpression$_miq: null,
      constructor: CommentToolbarBase$,
      super$_miq: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      resetToolbarButtonsPressedState$_miq: resetToolbarButtonsPressedState,
      statics: {RICHTEXT_TOOLBAR_ITEMID: "richtextToolbar"},
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames"]
    };
});
