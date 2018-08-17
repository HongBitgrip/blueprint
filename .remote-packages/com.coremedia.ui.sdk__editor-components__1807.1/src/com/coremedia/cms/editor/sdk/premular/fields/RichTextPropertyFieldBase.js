Ext.define("com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase", function(RichTextPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.impl.Difference;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.DocumentPanel;
import com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase;
import com.coremedia.cms.editor.sdk.premular.differencing.DiffManager;
import com.coremedia.ui.ckeditor.RichTextArea;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.ValueExpressionValueHolder;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.BlobImpl;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.mixins.IReadOnlyStateMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.ComponentUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.WindowManager;
import ext.ZIndexManager;
import ext.container.Container;
import ext.event.Event;
import ext.toolbar.Toolbar;

[PublicApi]
public class RichTextPropertyFieldBase extends AdvancedFieldContainer implements IValidationStateMixin, IReadOnlyStateMixin {
  private var diffManager:DiffManager;
  private var myRichTextArea:RichTextArea;
  private var richTextWindowGroup:ZIndexManager;
  private var externalLinkTargetTypeValueExpression:ValueExpression;
  private var lifecycleStatusValueExpression:ValueExpression;
  private var checkedInValueExpression:ValueExpression;

  /**
   * A property path expression leading to the Bean whose property is edited.
   * This property editor assumes that this bean has a property 'properties'.
   * /
  public var bindTo:ValueExpression;

  /**
   * The property of the Bean to bind in this field.
   * /
  public var propertyName:String;

  /**
   * An optional ValueExpression which makes the component read-only if it is evaluated to true.
   * /
  public var forceReadOnlyValueExpression:ValueExpression;

  private var dataValueExpression:ValueExpression;
  private var delegatingDataValueExpression:ValueExpression;

  private static const*/var PREFERENCE_LINK_TYPE_TARGET$static/*:String*/ = "ckeditor.externalLinkDialog.targetType";/*
  private static const*/var AFTER_CONFIG_EVENT$static/*:String*/ = "afterConfigEvent";/*

  public*/ function RichTextPropertyFieldBase$(config/*:RichTextPropertyFieldBase = null*/) {if(arguments.length<=0)config=null;
    this.richTextWindowGroup$ey9Q = new Ext.ZIndexManager();
    // make sure that the new ZIndexManager will never be on top of any Window
    // TODO: private API access. consider adding ZIndexManager#setBase to "ext-as"
    this.richTextWindowGroup$ey9Q["setBase"](Ext.WindowManager["zseed"] - 10000);

    this.super$ey9Q(config);

    this.fireEvent(AFTER_CONFIG_EVENT$static);

    this.initValidationStateMixin();

    this.myRichTextArea$ey9Q =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.ui.ckeditor.RichTextArea.xtype).build()),  com.coremedia.ui.ckeditor.RichTextArea);
    this.mon(this.myRichTextArea$ey9Q, com.coremedia.ui.ckeditor.RichTextArea.CKREADY_EVENT,AS3.bind( this,"ckEditorAvailable$ey9Q"), null, {single: true});
    this.mon(this.myRichTextArea$ey9Q, com.coremedia.ui.ckeditor.RichTextArea.CKRESIZE_EVENT,AS3.bind( this,"ckEditorResized$ey9Q"));
    this.addListener("validationStateChanged",AS3.bind( this,"onValidationChanged$ey9Q"));
    this.addListener("validationMessageChanged",AS3.bind( this,"onValidationChanged$ey9Q"));
    this.onValidationChanged$ey9Q();
    com.coremedia.ui.util.ComponentUtil.findAsParentOf(this, com.coremedia.cms.editor.sdk.premular.DocumentPanel.xtype,AS3.bind( this,"initWithDocumentPanel$ey9Q"));

    this.lifecycleStatusValueExpression$ey9Q = config.bindTo.extendBy('lifecycleStatus');
    this.lifecycleStatusValueExpression$ey9Q.addChangeListener(AS3.bind(this.richTextWindowGroup$ey9Q,"hideAll"));

    this.checkedInValueExpression$ey9Q = this.bindTo.extendBy(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN);
    this.checkedInValueExpression$ey9Q.addChangeListener(AS3.bind(this,"onContentCheckIn$ey9Q"));

    this.forceReadOnlyValueExpression = config.forceReadOnlyValueExpression;
  }/*

  private*/ function onContentCheckIn()/*:void*/ {
    if (this.checkedInValueExpression$ey9Q.getValue()) {
      this.myRichTextArea$ey9Q.resetDirty(true);
    }
  }/*

  private*/ function ckEditorAvailable()/*:void*/ {
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "cKEditor", null, this.getCKEditor());
  }/*

  private*/ function initWithDocumentPanel(theDocumentPanel/*:DocumentPanel*/)/*:void*/ {
    // check if the richtext field is inside a DocumentPanel (a DocumentPanel is a parent element of the richtext field only
    // for premular. If the richtext field is placed into a formular outside the premular the theDocumentPanel
    // is here undefined)
    if (theDocumentPanel) {
      this.diffManager$ey9Q = AS3.getBindable(theDocumentPanel,"diffManager");
      if (this.diffManager$ey9Q) {
        this.myRichTextArea$ey9Q.customizeCKEditorConfig({'com.coremedia.richtext.diff': true});
      }
    }
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getCKEditor()/*:**/ {
    return this.myRichTextArea$ey9Q && this.myRichTextArea$ey9Q.getCKEditor();
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getRichTextWindowGroup()/*:ZIndexManager*/ {
    return this.richTextWindowGroup$ey9Q;
  }/*

  internal*/ function getExternalLinkUrlValueExpression()/*:ValueExpression*/ {var this$=this;
    var me/*:RichTextPropertyFieldBase*/ = this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      if (!this$.myRichTextArea$ey9Q) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, AFTER_CONFIG_EVENT$static);
        return undefined;
      }
      var xlinkHref/*:String*/ = this$.myRichTextArea$ey9Q.getXlinkHref();
      return getInternalLinkUrl$static(xlinkHref) ? null : xlinkHref;
    });
  }/*

  internal*/ function getInternalLinkContentValueExpression()/*:ValueExpression*/ {var this$=this;
    var me/*:RichTextPropertyFieldBase*/ = this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Content*/ {
      if (!this$.myRichTextArea$ey9Q) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(me, AFTER_CONFIG_EVENT$static);
        return undefined;
      }
      var xlinkHref/*:String*/ = getInternalLinkUrl$static(this$.myRichTextArea$ey9Q.getXlinkHref());
      return xlinkHref ? com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContent(xlinkHref) : null;
    });
  }/*

  private static*/ function getInternalLinkUrl$static(xlinkHref/*:String*/)/*:String*/ {
    if (xlinkHref && xlinkHref.indexOf(':') === -1) {
      var hashIndex/*:int*/ = xlinkHref.indexOf('#');
      return hashIndex === 0
              ? null
              : hashIndex === -1
              ? xlinkHref
              : xlinkHref.substr(0, hashIndex);
    }
    return null;
  }/*

  /**
   * Retrieve the toolbar of the richtext area.
   *
   * @param container the richtext area which contains a toolbar
   * @return RichTextToolbar if found.
   * @private
   * /
  public static*/ function getRichTextAreaToolbar$static(container/*:Container*/)/*:Toolbar*/ {
    return AS3.as( container.query(com.coremedia.ui.util.createComponentSelector()._xtype("toolbar").build())[0],  Ext.toolbar.Toolbar);
  }/*

  protected*/ function getRichTextValueExpression()/*:ValueExpression*/ {var this$=this;
    var thys/*:Component*/ = this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:**/ {
      if (!thys.rendered) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(thys, "afterrender");
        return undefined;
      }

      var blob/*:BlobImpl*/ = this$.bindTo.extendBy('properties', this$.propertyName).getValue();
      if (blob && !blob.isLoaded()) {
        // BlobImpl does not trigger dependency tracking, but throws a "data" event when loading is finished
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(blob, "data");
        blob.loadData();
        return undefined;
      }

      var diff/*:Difference*/ = this$.getDiffForProperty$ey9Q();
      if (diff) {
        var markupDiff/*:Blob*/ = this$.diffManager$ey9Q.getMarkupDiff(thys, this$.propertyName);
        return markupDiff == null ? this$.bindTo.extendBy('properties', this$.propertyName).getValue() : markupDiff;
      } else {
        return new com.coremedia.ui.data.ValueExpressionValueHolder(this$.getDelegatingDataValueExpression$ey9Q());
      }
    });
  }/*

  private*/ function getDelegatingDataValueExpression()/*:ValueExpression*/ {
    if (!this.delegatingDataValueExpression$ey9Q) {
      var blob/*:Blob*/ = this.getDataValueExpression$ey9Q().getValue() || com.coremedia.ui.data.impl.BlobImpl.create(null, "");
      this.delegatingDataValueExpression$ey9Q = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(blob);
      this.delegatingDataValueExpression$ey9Q.addChangeListener(AS3.bind(this,"writeToDataExpression$ey9Q"));
    }
    return this.delegatingDataValueExpression$ey9Q;
  }/*

  private*/ function getDataValueExpression()/*:ValueExpression*/ {
    if (!this.dataValueExpression$ey9Q) {
      this.dataValueExpression$ey9Q = this.bindTo.extendBy('properties', this.propertyName);
      this.dataValueExpression$ey9Q.addChangeListener(AS3.bind(this,"writeToDelegatingDataExpression$ey9Q"));
    }
    return this.dataValueExpression$ey9Q;
  }/*

  private*/ function writeToDataExpression(ve/*:ValueExpression*/)/*:void*/ {
    if (!AS3.getBindable(this.myRichTextArea$ey9Q,"delegating","DUMMY")) {
      this.getDataValueExpression$ey9Q().setValue(ve.getValue());
    }
  }/*

  private*/ function writeToDelegatingDataExpression(ve/*:ValueExpression*/)/*:void*/ {
    this.getDelegatingDataValueExpression$ey9Q().setValue(ve.getValue());
  }/*

  private*/ function getDiffForProperty()/*:Difference*/ {
    if (!this.diffManager$ey9Q) {
      // No differencing.
      return null;
    }
    return this.diffManager$ey9Q.isPropertyChanged(this.propertyName);
  }/*

  private*/ function ckEditorResized()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase.touched(this);
  }/*

  protected*/ function getLabelId()/*:String*/ {
    return this.labelEl.id;
  }/*

  protected static*/ function handleKeys$static(richTextArea/*:RichTextArea*/, event/*:Event*/)/*:void*/ {
      com.coremedia.cms.editor.sdk.editorContext.getKeyboardShortcutManager()['onKeyMapEvent'](event);
  }/*

  internal*/ function getExternalLinkTargetTypeValueExpression()/*:ValueExpression*/ {
    if (!this.externalLinkTargetTypeValueExpression$ey9Q) {
      var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
      this.externalLinkTargetTypeValueExpression$ey9Q = com.coremedia.ui.data.ValueExpressionFactory.create(PREFERENCE_LINK_TYPE_TARGET$static, preferences);
    }

    return this.externalLinkTargetTypeValueExpression$ey9Q;

  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;

  private*/ function onValidationChanged()/*:void*/ {
    AS3.setBindable(this.myRichTextArea$ey9Q,"validationState" , AS3.getBindable(this,"validationState"));
    AS3.setBindable(this.myRichTextArea$ey9Q,"validationMessage" , AS3.getBindable(this,"validationMessage"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.lifecycleStatusValueExpression$ey9Q && this.lifecycleStatusValueExpression$ey9Q.removeChangeListener(AS3.bind(this.richTextWindowGroup$ey9Q,"hideAll"));
    this.checkedInValueExpression$ey9Q && this.checkedInValueExpression$ey9Q.removeChangeListener(AS3.bind(this,"onContentCheckIn$ey9Q"));
    this.delegatingDataValueExpression$ey9Q && this.delegatingDataValueExpression$ey9Q.removeChangeListener(AS3.bind(this,"writeToDataExpression$ey9Q"));
    this.dataValueExpression$ey9Q && this.dataValueExpression$ey9Q.removeChangeListener(AS3.bind(this,"writeToDelegatingDataExpression$ey9Q"));
    com.coremedia.ui.components.AdvancedFieldContainer.prototype.onDestroy.call(this);
  }/*

  /** @private * /
  [Bindable]
  public native function set readOnly(newReadOnly:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get readOnly():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      mixins: [
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.mixins.ReadOnlyStateMixin"
      ],
      metadata: {
        "": ["PublicApi"],
        getCKEditor: ["ProvideToExtChildren"],
        getRichTextWindowGroup: ["ProvideToExtChildren"]
      },
      diffManager$ey9Q: null,
      myRichTextArea$ey9Q: null,
      richTextWindowGroup$ey9Q: null,
      externalLinkTargetTypeValueExpression$ey9Q: null,
      lifecycleStatusValueExpression$ey9Q: null,
      checkedInValueExpression$ey9Q: null,
      bindTo: null,
      propertyName: null,
      forceReadOnlyValueExpression: null,
      dataValueExpression$ey9Q: null,
      delegatingDataValueExpression$ey9Q: null,
      constructor: RichTextPropertyFieldBase$,
      super$ey9Q: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      onContentCheckIn$ey9Q: onContentCheckIn,
      ckEditorAvailable$ey9Q: ckEditorAvailable,
      initWithDocumentPanel$ey9Q: initWithDocumentPanel,
      getCKEditor: getCKEditor,
      getRichTextWindowGroup: getRichTextWindowGroup,
      getExternalLinkUrlValueExpression: getExternalLinkUrlValueExpression,
      getInternalLinkContentValueExpression: getInternalLinkContentValueExpression,
      getRichTextValueExpression: getRichTextValueExpression,
      getDelegatingDataValueExpression$ey9Q: getDelegatingDataValueExpression,
      getDataValueExpression$ey9Q: getDataValueExpression,
      writeToDataExpression$ey9Q: writeToDataExpression,
      writeToDelegatingDataExpression$ey9Q: writeToDelegatingDataExpression,
      getDiffForProperty$ey9Q: getDiffForProperty,
      ckEditorResized$ey9Q: ckEditorResized,
      getLabelId: getLabelId,
      getExternalLinkTargetTypeValueExpression: getExternalLinkTargetTypeValueExpression,
      onValidationChanged$ey9Q: onValidationChanged,
      onDestroy: onDestroy,
      statics: {
        getRichTextAreaToolbar: getRichTextAreaToolbar$static,
        handleKeys: handleKeys$static
      },
      requires: [
        "Ext.ZIndexManager",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.ui.ckeditor.RichTextArea",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.ValueExpressionValueHolder",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.mixins.ReadOnlyStateMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.util.ComponentUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.DocumentPanel",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase"
      ]
    };
});
