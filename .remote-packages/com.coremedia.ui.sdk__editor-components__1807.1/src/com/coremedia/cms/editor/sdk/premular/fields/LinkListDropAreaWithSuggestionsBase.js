Ext.define("com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaWithSuggestionsBase", function(LinkListDropAreaWithSuggestionsBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.ILinkSuggester;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.store.BeanRecord;

import ext.button.Button;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.ComboBox;
import ext.view.BoundListView;

import mx.resources.ResourceManager;

/**
 * The application logic for editor that edits link lists.
 * Links can be limited to documents of a given type.
 * /
public class LinkListDropAreaWithSuggestionsBase extends LinkListDropAreaBase {

  /**
   * An interface that provides functionality to return an {@link Array} of links that can be added to the list.
   *
   * <p>Returned links should be {@link com.coremedia.cms.editor.sdk.util.ILinkListWrapper#acceptsLinks acceptable} by
   * the configured {@link com.coremedia.cms.editor.sdk.util.ILinkListWrapper}.
   * /
  [Bindable]
  public var linkSuggester:ILinkSuggester;

  /**
   * The height of the suggestion list. Defaults to {@link #DEFAULT_SUGGESTIONS_COMBOBOX_PICKER_MAX_HEIGHT}
   * /
  [Bindable]
  public var suggestionsComboBoxPickerMaxHeight:Number;

  public static const SUGGESTING_DROP_AREA_CONTAINER_ID:String = "suggestingDropAreaContainer";
  public static const INLINE_SEARCH_COMBOBOX_ID:String = "inlineSearchComboBox";
  public static const INLINE_SEARCH_LIBRARY_BUTTON_ID:String = "inlineSearchLibraryButton";

  public static const LINK_LIST_DROP_AREA_BLOCK:BEMBlock =*/function LINK_LIST_DROP_AREA_BLOCK$static_(){LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-link-list-drop-area--with-suggestions"));}/*;
  public static const LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT:BEMElement =*/function LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT$static_(){LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT=( LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BLOCK.createElement("empty"));}/*;
  public static const BUTTON_ELEMENT:BEMElement =*/function BUTTON_ELEMENT$static_(){LinkListDropAreaWithSuggestionsBase.BUTTON_ELEMENT=( LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BLOCK.createElement("button"));}/*;

  private static const*/var LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT$static/*:String*/;/* =*/function LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT$static_(){LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'LinkListPropertyField_boundlist_empty_text'));};/*

  private var _previousNumberOfHits = 0;

  internal static const DEFAULT_SUGGESTIONS_COMBOBOX_PICKER_MAX_HEIGHT:Number = 111;

  /**
   * The Array of links to suggest in the {@link #getInlineComboBox}.
   * /
  private var suggestedLinksValueExpression:ValueExpression;

  public*/ function LinkListDropAreaWithSuggestionsBase$(config/*:LinkListDropAreaWithSuggestionsBase = null*/) {if(arguments.length<=0)config=null;
    this.super$9dBJ(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase.prototype.afterRender.call(this);
    this.setupInlineComboBox$9dBJ();
  }/*

  override protected*/ function attachHandler()/*:void*/ {
    var inlineSearchLibraryButton/*:Button*/ =AS3.as( this.queryById(LinkListDropAreaWithSuggestionsBase.INLINE_SEARCH_LIBRARY_BUTTON_ID),  Ext.button.Button);
    if (inlineSearchLibraryButton) {
      inlineSearchLibraryButton.setHandler(AS3.bind(this,"invokeHandler"));
    }
  }/*

  override protected*/ function invokeHandler()/*:void*/ {
    if (!this.disabled) {
      var box/*:ComboBox*/ = this.getInlineComboBox$9dBJ();
      var searchTerm/*:String*/ = box && box.getRawValue();
      AS3.getBindable(this,"handler") && AS3.getBindable(this,"handler")(searchTerm);
    }
  }/*

  internal*/ function getSuggestedLinksValueExpressions()/*:ValueExpression*/ {
    if (!this.suggestedLinksValueExpression$9dBJ) {
      this.suggestedLinksValueExpression$9dBJ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.suggestedLinksValueExpression$9dBJ;
  }/*

  protected*/ function focusSuggestionField()/*:void*/ {
    this.getInlineComboBox$9dBJ().focus();
  }/*

  protected*/ function triggerSuggestionSearch(c/*:ComboBox*/, e/*:Event*/)/*:void*/ {var this$=this;
    AS3.getBindable(this,"linkSuggester").suggestLinks(AS3.getBindable(this,"linkListWrapper"), c.getRawValue(), function (hits/*:Array*/)/*:void*/ {
      if (!this$.getInlineComboBox$9dBJ().containsFocus) {
        // If the computation of suggested links takes some time and a different UI element has been focused
        // in the meantime, then let's ignore the callback.
        // This avoids a problem when the user focuses a different LinkListDropAreaWithSuggestionsBase (B) before the
        // callback for this one (A) arrives. If we wouldn't ignore the callback for non-focused (A), showing its
        // results would lead to focusing (A) again, and the focus event would trigger a new suggestion search for (A).
        // But focusing (B) by the user also triggered a suggestion search before and if the callback for that search
        // arrives after (A) has been refocused, then it would cause focusing (B) again, which leads to another
        // suggestion search for (B). This would go on and on and could easily lead to an endless loop of search calls
        // and focus switches.
        return;
      }

      this$.getSuggestedLinksValueExpressions().setValue(hits);

      // We need to make sure we don't set the height if the bindListPlugin does not call dataUpdated()
      if (hits.length > this$._previousNumberOfHits$9dBJ) {
        var pickerElement/*:Element*/ = this$.getInlineComboBoxBoundList$9dBJ().getEl();
        if (pickerElement) {
          var _height = AS3.getBindable(this$,"suggestionsComboBoxPickerMaxHeight") || LinkListDropAreaWithSuggestionsBase.DEFAULT_SUGGESTIONS_COMBOBOX_PICKER_MAX_HEIGHT;
          pickerElement.setHeight(_height+"px");
        }
      }
      this$._previousNumberOfHits$9dBJ = hits.length;

      this$.expandInlineComboBox$9dBJ();
    });
  }/*

  private*/ function expandInlineComboBox()/*:void*/ {
    this.getInlineComboBox$9dBJ().expand();
  }/*

  private*/ function getInlineComboBox()/*:ComboBox*/ {
    return AS3.as( this.queryById(LinkListDropAreaWithSuggestionsBase.INLINE_SEARCH_COMBOBOX_ID),  Ext.form.field.ComboBox);
  }/*

  private*/ function getInlineComboBoxBoundList()/*:BoundListView*/ {
    return AS3.as( this.getInlineComboBox$9dBJ().getPicker(),  Ext.view.BoundList);
  }/*

  private*/ function setupInlineComboBox()/*:void*/ {
    var box/*:ComboBox*/ = this.getInlineComboBox$9dBJ();
    if (box) {
      AS3.setBindable(this.getInlineComboBoxBoundList$9dBJ(),"emptyText" , '<div class="' + LinkListDropAreaWithSuggestionsBase.LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT + '">' + LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT$static + '</div>');
      this.mon(box, "focusenter",AS3.bind( this,"triggerSuggestionSearch"));
      this.mon(box.el, "click",AS3.bind( this,"triggerSuggestionSearchIfBoundlistIsClosed$9dBJ"));
      this.mon(box, "select",AS3.bind( this,"fillGridPanel$9dBJ"));
    }
  }/*

  public*/ function getDetailedLifecycleStatus(content/*:Content*/)/*:String*/ {
    var status/*:String*/ = content.getLifecycleStatus();
    var editor/*:String*/ = "";
    if (status === com.coremedia.cap.content.LifecycleStatus.IN_PRODUCTION) {
      if (content.isCheckedOutByOther()) {
        status = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.CHECKED_OUT_BY_OTHER_LIFECYCLE_STATUS;
        if (content.getEditor()) {
          editor = content.getEditor().getName();
        }
      }
      if (content.isCheckedOutByCurrentSession()) {
        status = com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.CHECKED_OUT_LIFECYCLE_STATUS;
      }
    }
    return com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.localizeDetailedLifecycleStatus(status, editor);
  }/*

  public*/ function getDetailedLifecycleStatusCls(content/*:Content*/)/*:String*/ {
    var status/*:String*/ = content.getLifecycleStatus();
    if (status === com.coremedia.cap.content.LifecycleStatus.IN_PRODUCTION) {
      if (content.isCheckedOutByOther()) {
        status=com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.CHECKED_OUT_BY_OTHER_LIFECYCLE_STATUS;
      }
      if (content.isCheckedOutByCurrentSession()) {
        status=com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil.CHECKED_OUT_LIFECYCLE_STATUS;
      }
    }
    return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForStatus(status);
  }/*

  private*/ function triggerSuggestionSearchIfBoundlistIsClosed()/*:void*/ {
    if (this.getInlineComboBox$9dBJ().getRawValue() !== "") {
      return;
    }

    if (!this.getInlineComboBox$9dBJ().isExpanded) {
      this.triggerSuggestionSearch(this.getInlineComboBox$9dBJ(), null);
    }
  }/*

  private*/ function fillGridPanel(inlineComboBoxBoundList/*:BoundListView*/, record/*:BeanRecord*/)/*:void*/ {
    if (record) {
      var bean/*:Bean*/ = record.getBean();
      var linksToAdd/*:Array*/ = [bean];

      if (AS3.getBindable(this,"linkListWrapper").acceptsLinks(linksToAdd)) {
        AS3.getBindable(this,"linkListWrapper").addLinks(linksToAdd);
      }
      this.getInlineComboBox$9dBJ().selectText();

      // Forget about previous selection.
      // Otherwise we would not be able to select the same element again after removing it from the linklist (see CMS-10687)
      this.getInlineComboBox$9dBJ().setSelection(null);
    }
  }/*

  /** Returns the concatenation of configured default and extra fields * /
  protected static*/ function makeFields$static(config/*:LinkListDropAreaWithSuggestions*/)/*:Array*/ {
    var result/*:Array*/ = [];
    if (AS3.getBindable(config,"defaultFields")) {
      result = result.concat(AS3.getBindable(config,"defaultFields"));
    }
    if (AS3.getBindable(config,"extraFields")) {
      result = result.concat(AS3.getBindable(config,"extraFields"));
    }
    return result;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase",
      _previousNumberOfHits$9dBJ: 0,
      suggestedLinksValueExpression$9dBJ: null,
      constructor: LinkListDropAreaWithSuggestionsBase$,
      super$9dBJ: function() {
        com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      attachHandler: attachHandler,
      invokeHandler: invokeHandler,
      getSuggestedLinksValueExpressions: getSuggestedLinksValueExpressions,
      focusSuggestionField: focusSuggestionField,
      triggerSuggestionSearch: triggerSuggestionSearch,
      expandInlineComboBox$9dBJ: expandInlineComboBox,
      getInlineComboBox$9dBJ: getInlineComboBox,
      getInlineComboBoxBoundList$9dBJ: getInlineComboBoxBoundList,
      setupInlineComboBox$9dBJ: setupInlineComboBox,
      getDetailedLifecycleStatus: getDetailedLifecycleStatus,
      getDetailedLifecycleStatusCls: getDetailedLifecycleStatusCls,
      triggerSuggestionSearchIfBoundlistIsClosed$9dBJ: triggerSuggestionSearchIfBoundlistIsClosed,
      fillGridPanel$9dBJ: fillGridPanel,
      config: {
        linkSuggester: null,
        suggestionsComboBoxPickerMaxHeight: NaN
      },
      statics: {
        SUGGESTING_DROP_AREA_CONTAINER_ID: "suggestingDropAreaContainer",
        INLINE_SEARCH_COMBOBOX_ID: "inlineSearchComboBox",
        INLINE_SEARCH_LIBRARY_BUTTON_ID: "inlineSearchLibraryButton",
        LINK_LIST_DROP_AREA_BLOCK: undefined,
        LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT: undefined,
        BUTTON_ELEMENT: undefined,
        LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT: undefined,
        DEFAULT_SUGGESTIONS_COMBOBOX_PICKER_MAX_HEIGHT: 111,
        makeFields: makeFields$static,
        __initStatics__: function() {
          LINK_LIST_DROP_AREA_BLOCK$static_();
          LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_ELEMENT$static_();
          BUTTON_ELEMENT$static_();
          LINK_LIST_DROP_AREA_BOUNDLIST_EMPTY_TEXT$static_();
        }
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.ComboBox",
        "Ext.view.BoundList",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListDropAreaBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
