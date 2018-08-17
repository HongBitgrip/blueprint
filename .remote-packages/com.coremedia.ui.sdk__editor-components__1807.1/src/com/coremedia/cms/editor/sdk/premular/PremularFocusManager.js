Ext.define("com.coremedia.cms.editor.sdk.premular.PremularFocusManager", function(PremularFocusManager) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;

/**
 * <p>The premular focus forwarder takes care of synchronizing focus and blur events
 * and position changes of properties in the three panel of the premular:
 * read-only document panel, document panel, and preview panel.
 * To this end, it provides three focus forwarder objects through which
 * the panel communicate with this manager. For historic reasons, the forwarders
 * are passed to the panels in the form of value expression.</p>
 * <p>The methods onXXX() are callbacks from the focus forwarders, providing
 * information about the reported change to the manager. The manager reacts
 * to such callbacks by requesting a state change in other panels as needed.</p>
 * <p>When focus forwarders are notified of a new state, the content that should
 * be shown in the associated panel is passed to the forwarders. This helps the
 * panels to detect the correct document type and consequently the correct
 * target of the request.</p>
 * <p>When both the read-only document panel and the central document panel are
 * to be update, the manager updates the central document panel first and
 * expects to receive a callback with the current position that can then be used
 * to update the read-only document panel.</p>
 * <p>The methods focusProperty() and showTab() can be called to trigger
 * view changes programmatically.</p>
 * /
public class PremularFocusManager {
  // premular state
  private var readOnlyContentBeanValueExpression:ValueExpression;
  private var contentBeanValueExpression:ValueExpression;

  // forwarders
  private var readOnlyDocumentFormFocusForwarder:FocusForwarder;
  private var documentFormFocusForwarder:FocusForwarder;
  private var previewFocusForwarder:FocusForwarder;

  /**
   * Create a new PremularFocusManager. Two value expressions must be given,
   * so that the contents to be displayed in the panels can be computed
   * at any time.
   *
   * @param readOnlyContentBeanValueExpression a value expression returning the content shown in the read-only document panel
   * @param contentBeanValueExpression a value expression returning the content shown in the document panel
   * /
  public*/ function PremularFocusManager$(readOnlyContentBeanValueExpression/*:ValueExpression*/, contentBeanValueExpression/*:ValueExpression*/) {
    this.readOnlyContentBeanValueExpression$Y_Gf = readOnlyContentBeanValueExpression;
    this.contentBeanValueExpression$Y_Gf = contentBeanValueExpression;

    this.readOnlyDocumentFormFocusForwarder$Y_Gf = new com.coremedia.cms.editor.sdk.premular.FocusForwarder(AS3.bind(this,"onReadOnlyDocumentFormShow$Y_Gf"),AS3.bind( this,"onReadOnlyDocumentFormBlur$Y_Gf"),AS3.bind( this,"onReadOnlyCollapsibleChange$Y_Gf"));
    this.documentFormFocusForwarder$Y_Gf = new com.coremedia.cms.editor.sdk.premular.FocusForwarder(AS3.bind(this,"onDocumentFormShow$Y_Gf"),AS3.bind( this,"onDocumentFormBlur$Y_Gf"),AS3.bind( this,"onDocumentFormCollapsibleChange$Y_Gf"));
    this.previewFocusForwarder$Y_Gf = new com.coremedia.cms.editor.sdk.premular.FocusForwarder(AS3.bind(this,"onPreviewShow$Y_Gf"));
  }/*

  /**
   * Return the focus forwarder for the read-only document panel.
   *
   * @return the focus forwarder
   * /
  public*/ function getReadOnlyDocumentFormFocusForwarder()/*:FocusForwarder*/ {
    return this.readOnlyDocumentFormFocusForwarder$Y_Gf;
  }/*

  /**
   * Return the focus forwarder for the central document panel.
   *
   * @return the focus forwarder
   * /
  public*/ function getDocumentFormFocusForwarder()/*:FocusForwarder*/ {
    return this.documentFormFocusForwarder$Y_Gf;
  }/*

  /**
   * Return the focus forwarder for the preview panel.
   *
   * @return the focus forwarder
   * /
  public*/ function getPreviewFocusForwarder()/*:FocusForwarder*/ {
    return this.previewFocusForwarder$Y_Gf;
  }/*

  // ------------------ property field selection callbacks ------------------

  private*/ function onReadOnlyDocumentFormShow(content/*:Content*/, tabTitle/*:String*/, property/*:String*/, isFocus/*:Boolean*/, userOperation/*:Boolean*/, position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    this.documentFormFocusForwarder$Y_Gf.fireShow(this.contentBeanValueExpression$Y_Gf.getValue(), tabTitle, property, false, isFocus, false, position, distance, scrollOnly);
    if (isFocus && userOperation) {
      // We assume that we want to focus on the matching property
      // of the content shown in the document form even if the selection
      // was made in the read-only form.
      this.previewFocusForwarder$Y_Gf.fireShow(this.contentBeanValueExpression$Y_Gf.getValue(), tabTitle, property, false, false, false, position, distance, scrollOnly);
    }
  }/*

  private*/ function onReadOnlyDocumentFormBlur()/*:void*/ {
    this.documentFormFocusForwarder$Y_Gf.fireBlur();
    this.previewFocusForwarder$Y_Gf.fireBlur();
  }/*

  private*/ function onDocumentFormShow(content/*:Content*/, tabTitle/*:String*/, property/*:String*/, isFocus/*:Boolean*/, userOperation/*:Boolean*/, position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    // While the read-only content has not been determined, send the edited content as a substitute.

    // We should rather send the content type, which would be more stable and sufficient.
    // However, that makes little sense while the focus forwarder is used
    // to build the contentInfoValueExpression. Once that is gone, we can
    // refactor the focus forwarders, too.
    this.readOnlyDocumentFormFocusForwarder$Y_Gf.fireShow(this.readOnlyContentBeanValueExpression$Y_Gf.getValue() || this.contentBeanValueExpression$Y_Gf.getValue(), tabTitle, property, false, isFocus, false, position, distance, scrollOnly);
    if (isFocus && userOperation) {
      this.previewFocusForwarder$Y_Gf.fireShow(this.contentBeanValueExpression$Y_Gf.getValue(), tabTitle, property, false, false, false, position, distance, scrollOnly);
    }
  }/*

  private*/ function onDocumentFormBlur()/*:void*/ {
    this.readOnlyDocumentFormFocusForwarder$Y_Gf.fireBlur();
    this.previewFocusForwarder$Y_Gf.fireBlur();
  }/*

  private*/ function onPreviewShow(content/*:Content*/, tabTitle/*:String*/, property/*:String*/)/*:void*/ {
    if (content === this.contentBeanValueExpression$Y_Gf.getValue()) {
      this.focusProperty(content, property);
    }
  }/*

  private*/ function onReadOnlyCollapsibleChange(itemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    this.documentFormFocusForwarder$Y_Gf.fireCollapsibleChange(itemId, expanded);
  }/*

  private*/ function onDocumentFormCollapsibleChange(itemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    this.readOnlyDocumentFormFocusForwarder$Y_Gf.fireCollapsibleChange(itemId, expanded);
  }/*


  // ------------------ programmatic property field selection ------------------

  /**
   * Focus the property field for the property with the given name.
   *
   * @param content ignored; present for compatibility; pass the content shown in the premular
   * @param property the property to focus
   * /
  public*/ function focusProperty(content/*:Content*/, property/*:String*/)/*:void*/ {
    // This will trigger a callback with the new position of the focus field.
    this.documentFormFocusForwarder$Y_Gf.fireShow(this.contentBeanValueExpression$Y_Gf.getValue(), null, property, true, true, true, NaN, NaN, false);

  }/*

  /**
   * Show the indicated tab.
   *
   * @param tabTitle the title of the tab
   * /
  public*/ function showTab(tabTitle/*:String*/)/*:void*/ {
    this.documentFormFocusForwarder$Y_Gf.fireShow(this.contentBeanValueExpression$Y_Gf.getValue(), tabTitle, null, false, false, true, NaN, NaN, false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      readOnlyContentBeanValueExpression$Y_Gf: null,
      contentBeanValueExpression$Y_Gf: null,
      readOnlyDocumentFormFocusForwarder$Y_Gf: null,
      documentFormFocusForwarder$Y_Gf: null,
      previewFocusForwarder$Y_Gf: null,
      constructor: PremularFocusManager$,
      getReadOnlyDocumentFormFocusForwarder: getReadOnlyDocumentFormFocusForwarder,
      getDocumentFormFocusForwarder: getDocumentFormFocusForwarder,
      getPreviewFocusForwarder: getPreviewFocusForwarder,
      onReadOnlyDocumentFormShow$Y_Gf: onReadOnlyDocumentFormShow,
      onReadOnlyDocumentFormBlur$Y_Gf: onReadOnlyDocumentFormBlur,
      onDocumentFormShow$Y_Gf: onDocumentFormShow,
      onDocumentFormBlur$Y_Gf: onDocumentFormBlur,
      onPreviewShow$Y_Gf: onPreviewShow,
      onReadOnlyCollapsibleChange$Y_Gf: onReadOnlyCollapsibleChange,
      onDocumentFormCollapsibleChange$Y_Gf: onDocumentFormCollapsibleChange,
      focusProperty: focusProperty,
      showTab: showTab,
      uses: ["com.coremedia.cms.editor.sdk.premular.FocusForwarder"]
    };
});
