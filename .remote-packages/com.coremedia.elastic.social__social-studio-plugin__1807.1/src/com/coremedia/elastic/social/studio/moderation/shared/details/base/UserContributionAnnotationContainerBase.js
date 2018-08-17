Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase", function(UserContributionAnnotationContainerBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.form.field.TextArea;
import ext.panel.Panel;

public class UserContributionAnnotationContainerBase extends Panel {

  protected static const ANNOTATION_TEXTAREA_ITEM_ID:String = "textarea";

  private var annotationContentTextArea:TextArea;
  private var notesVE:ValueExpression;

  public*/ function UserContributionAnnotationContainerBase$(config/*:UserContributionAnnotationContainer = null*/) {if(arguments.length<=0)config=null;
    this.notesVE$lO_U = com.coremedia.ui.data.ValueExpressionFactory.create("notes", AS3.getBindable(config,"moderationContributionAdministration"));
    this.notesVE$lO_U.addChangeListener(AS3.bind(this,"disableTextArea$lO_U"));

    this.super$lO_U(config);
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    if (this.getAnnotationContentTextArea$lO_U()) {
      this.getAnnotationContentTextArea$lO_U().addListener("afterrender", updateTextAreaSizeOnInit$static);
    }
    this.addListener("activate", updateTextAreaSizeOnInit$static);
  }/*

  override protected*/ function onRemoved(destroying/*:Boolean*/)/*:void*/ {
    this.notesVE$lO_U.removeChangeListener(AS3.bind(this,"disableTextArea$lO_U"));
    if (this.getAnnotationContentTextArea$lO_U()) {
      this.getAnnotationContentTextArea$lO_U().removeListener("afterrender", updateTextAreaSizeOnInit$static);
    }
    this.removeListener("activate", updateTextAreaSizeOnInit$static);
    Ext.panel.Panel.prototype.onRemoved.call(this,destroying);
  }/*

  /**
   * It seems that there is a bug on the textarea when "growing" is enabled and an empty text is set.
   * Therefore we need to sync the size after rendering manually.
   * @param textArea
   * /
  private static*/ function updateTextAreaSizeOnInit$static(textArea/*:TextArea*/)/*:void*/ {
    textArea.setHeight(textArea.growMin);
  }/*

  private*/ function disableTextArea(source/*:ValueExpression*/)/*:void*/ {
    if (source.getValue()) {
      this.getAnnotationContentTextArea$lO_U().setDisabled(false);
    }
    else {
      this.getAnnotationContentTextArea$lO_U().setDisabled(true);
    }
  }/*

  private*/ function getAnnotationContentTextArea()/*:TextArea*/ {
    if (!this.annotationContentTextArea$lO_U) {
      this.annotationContentTextArea$lO_U =AS3.as( this.queryById(UserContributionAnnotationContainerBase.ANNOTATION_TEXTAREA_ITEM_ID),  Ext.form.field.TextArea);
    }
    return this.annotationContentTextArea$lO_U;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      annotationContentTextArea$lO_U: null,
      notesVE$lO_U: null,
      constructor: UserContributionAnnotationContainerBase$,
      super$lO_U: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onRemoved: onRemoved,
      disableTextArea$lO_U: disableTextArea,
      getAnnotationContentTextArea$lO_U: getAnnotationContentTextArea,
      statics: {ANNOTATION_TEXTAREA_ITEM_ID: "textarea"},
      requires: [
        "Ext.form.field.TextArea",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
