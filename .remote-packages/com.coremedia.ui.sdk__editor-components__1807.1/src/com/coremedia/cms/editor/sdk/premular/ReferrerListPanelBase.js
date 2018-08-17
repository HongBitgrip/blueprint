Ext.define("com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase", function(ReferrerListPanelBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.Editor_properties;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

/**
 * The application logic for a property field editor that edits
 * link lists. Links can be limited to documents of a given type.
 *
 * @see com.coremedia.cms.editor.sdk.config.linkListPropertyFieldGridPanelBase
 * @see com.coremedia.cms.editor.sdk.premular.fields.LinkListPropertyField
 * /
[PublicApi]
public class ReferrerListPanelBase extends PropertyFieldGroup {

  private static const*/var DEFAULT_MAX_LIST_LENGTH$static/*:int*/ = 500;/*

  /**
   * If set, this field shows only content items linking to the given content
   * through the indicated property.
   * If this option is set, the option contentType must also be set.
   * The indicated content type must define the indicated property.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * Text to be displayed if the referrer list is empty.
   * /
  [Bindable]
  public var emptyText:String;

  /**
   * If set, this field shows only content items of the indicated content type.
   * If this option is set, the option propertyName must also be set.
   * The indicated content type must define the indicated property.
   * /
  [Bindable]
  public var contentType:String;

  [Bindable]
  /**
   * Whether the toolbar should be displayed for an empty referrer list (default: false).
   * /
  [Bindable]
  public var displayToolbarWhenEmpty:Boolean;


  /**
   * Max number of rows that would be visible in the list. If some elements are deleted contents or
   * their of doctypes are not allowed to be shown in the list of referrers, they will be filtered out from the list
   * Due to performance reasons the 'maxListLength' limits the number of unfiltered elements and if after filtering the
   * final list length is smaller than the configured 'maxListLength' additional unfiltered items will not be picked up
   * from the server to fill the list up to 'maxListLength'.
   * /
  public var maxListLength:int =*/function maxListLength_(){this.maxListLength=( DEFAULT_MAX_LIST_LENGTH$static);}/*;

  private var selectedValuesExpression:ValueExpression;
  private var referrerListValueExpression:ValueExpression;
  private var activeItemValueExpression:ValueExpression;
  private var listLimitLabelVisibilityValueExpression:ValueExpression;
  private var listLimitLabelTextValueExpression:ValueExpression;

  private var includeDeletedValueExpression:ValueExpression;

  protected const REFERRER_LIST_ITEM_ID:String = 'referrerList';
  protected const INCLUDE_DELETED_ITEM_ID:String = 'includeDeleted';
  protected const EMPTY_REFERRER_LIST_LABEL_ITEM_ID:String = 'emptyReferrerListLabel';
  protected const LIST_LIMIT_LABEL_ITEM_ID:String = 'listLimitLabel';

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.cms.editor.sdk.config.linkListPropertyFieldGridPanelBase
   * /
  public*/ function ReferrerListPanelBase$(config/*:ReferrerListPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$vnas(config);maxListLength_.call(this);;
  }/*

  internal*/ function getIncludeDeletedValueExpression()/*:ValueExpression*/ {
    if (!this.includeDeletedValueExpression$vnas) {
      this.includeDeletedValueExpression$vnas = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.includeDeletedValueExpression$vnas;
  }/*

  internal*/ function getReferrerListValueExpression(config/*:ReferrerListPanelBase*/)/*:ValueExpression*/ {
    if (!this.referrerListValueExpression$vnas) {
      this.referrerListValueExpression$vnas = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeReferrers$vnas"), config);
    }
    return this.referrerListValueExpression$vnas;
  }/*

  internal*/ function getActiveItemValueExpression(config/*:ReferrerListPanelBase*/)/*:ValueExpression*/ {var this$=this;
    if (!this.activeItemValueExpression$vnas) {
      this.activeItemValueExpression$vnas = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:String*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var referrers/*:Array*/ = this$.getReferrerListValueExpression(config).getValue();
        if(referrers === undefined) {
          return undefined;
        }

        if (referrers) {
          if(referrers.length > 0) {
            return this$.REFERRER_LIST_ITEM_ID;
          }
        }
        return this$.EMPTY_REFERRER_LIST_LABEL_ITEM_ID;
      });
    }
    return this.activeItemValueExpression$vnas;
  }/*

  private*/ function computeReferrers(config/*:ReferrerListPanelBase*/)/*:Array*/ {var this$=this;
    var content/*:Content*/ = AS3.getBindable(config,"bindTo").getValue();
    if (!content) {
      return undefined;
    }

    var returnUndefined/*:Boolean*/ = false;
    var unfilteredReferrers/*:Array*/;
    if (AS3.getBindable(config,"contentType") && (AS3.getBindable(config,"propertyName") || AS3.getBindable(config,"propertyNames"))) {
      if (AS3.getBindable(config,"propertyName")) {
        unfilteredReferrers = content.getReferrersWithNamedDescriptor(AS3.getBindable(config,"contentType"), AS3.getBindable(config,"propertyName"));
      }
      else {
        unfilteredReferrers = [];
        for/* each*/(var $1=0;$1</* in*/ AS3.getBindable(config,"propertyNames").length;++$1) {var prop/*:String*/ =AS3.getBindable(config,"propertyNames")[$1];
          var refs/*:Array*/ = content.getReferrersWithNamedDescriptor(AS3.getBindable(config,"contentType"), prop);
          if(!refs) {
            return undefined;
          }
          unfilteredReferrers = unfilteredReferrers.concat(refs);
        }
      }
    } else {
      unfilteredReferrers = content.getReferrers();
    }
    if (!unfilteredReferrers) {
      return undefined;
    }

    var maxListLength/*:int*/ = config.maxListLength || DEFAULT_MAX_LIST_LENGTH$static;
    if (unfilteredReferrers.length > maxListLength) {
      unfilteredReferrers.splice(maxListLength, unfilteredReferrers.length - maxListLength);
      this.getListLimitLabelVisibility().setValue(true);
    }

    var referrers/*:Array*/ = unfilteredReferrers.filter(function(referrer/*:Content*/)/*:Boolean*/ {
      var documentTypesHiddenInReferrers/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getDocumentTypesHiddenInReferrers();

      if(referrer.getState() === com.coremedia.ui.data.BeanState.UNREADABLE){
        return false;
      }
      var contentType/*:ContentType*/ = referrer.getType();
      if (!contentType) {
        returnUndefined = true;
        return false;
      }

      if (!this$.getIncludeDeletedValueExpression().getValue() && referrer.isDeleted()) {
        return false;
      }

      return documentTypesHiddenInReferrers.indexOf(contentType.getName()) === -1;
    });

    this.getListLimitLabelText(config).setValue(com.coremedia.cms.editor.sdk.util.FormatUtil.format(com.coremedia.cms.editor.Editor_properties.INSTANCE.ReferrerListPanel_listLimitLabel, referrers.length));
    return returnUndefined ? undefined : referrers;
  }/*

  internal*/ function getSelectedValuesExpression()/*:ValueExpression*/ {
    if (!this.selectedValuesExpression$vnas) {
      var selectedValuesBean/*:Bean*/ = com.coremedia.ui.data.beanFactory.createLocalBean({ values:[] });
      this.selectedValuesExpression$vnas = com.coremedia.ui.data.ValueExpressionFactory.create("values", selectedValuesBean);
    }
    return this.selectedValuesExpression$vnas;
  }/*

  internal*/ function toolbarVisibilityTransformer(values/*:Array*/)/*:Boolean*/ {
    return AS3.getBindable(this,"displayToolbarWhenEmpty") || values.length !== 0;
  }/*

  internal*/ function hidePreview(config/*:ReferrerListPanel*/)/*:Boolean*/ {
    if(AS3.getBindable(config,"showThumbnail") == undefined || AS3.getBindable(config,"showThumbnail") === null) {
      return true;
    }
    return !AS3.getBindable(config,"showThumbnail");
  }/*

  protected*/ function getListLimitLabelVisibility()/*:ValueExpression*/ {
    if (!this.listLimitLabelVisibilityValueExpression$vnas) {
      this.listLimitLabelVisibilityValueExpression$vnas = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.listLimitLabelVisibilityValueExpression$vnas;
  }/*

  protected*/ function getListLimitLabelText(config/*:ReferrerListPanelBase*/)/*:ValueExpression*/ {
    if (!this.listLimitLabelTextValueExpression$vnas) {
      this.listLimitLabelTextValueExpression$vnas =  com.coremedia.ui.data.ValueExpressionFactory.createFromValue(
              com.coremedia.cms.editor.sdk.util.FormatUtil.format(com.coremedia.cms.editor.Editor_properties.INSTANCE.ReferrerListPanel_listLimitLabel, config.maxListLength || DEFAULT_MAX_LIST_LENGTH$static));
    }
    return this.listLimitLabelTextValueExpression$vnas;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      metadata: {"": ["PublicApi"]},
      selectedValuesExpression$vnas: null,
      referrerListValueExpression$vnas: null,
      activeItemValueExpression$vnas: null,
      listLimitLabelVisibilityValueExpression$vnas: null,
      listLimitLabelTextValueExpression$vnas: null,
      includeDeletedValueExpression$vnas: null,
      REFERRER_LIST_ITEM_ID: 'referrerList',
      INCLUDE_DELETED_ITEM_ID: 'includeDeleted',
      EMPTY_REFERRER_LIST_LABEL_ITEM_ID: 'emptyReferrerListLabel',
      LIST_LIMIT_LABEL_ITEM_ID: 'listLimitLabel',
      constructor: ReferrerListPanelBase$,
      super$vnas: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      getIncludeDeletedValueExpression: getIncludeDeletedValueExpression,
      getReferrerListValueExpression: getReferrerListValueExpression,
      getActiveItemValueExpression: getActiveItemValueExpression,
      computeReferrers$vnas: computeReferrers,
      getSelectedValuesExpression: getSelectedValuesExpression,
      toolbarVisibilityTransformer: toolbarVisibilityTransformer,
      hidePreview: hidePreview,
      getListLimitLabelVisibility: getListLimitLabelVisibility,
      getListLimitLabelText: getListLimitLabelText,
      config: {
        propertyName: null,
        emptyText: null,
        contentType: null,
        displayToolbarWhenEmpty: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.FormatUtil"
      ]
    };
});
