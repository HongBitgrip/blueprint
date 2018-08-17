Ext.define("com.coremedia.blueprint.base.components.timeline.TimelineEditorBase", function(TimelineEditorBase) {/*package com.coremedia.blueprint.base.components.timeline {
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentTypeNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.components.DraggableItem;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;

/**
 * Reads the struct from the configured document property and builds the sequence models from it
 * to create SequencePanel instances using the bind components plugins.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.timeline.Timeline')]
public class TimelineEditorBase extends AdvancedFieldContainer implements IValidationStateMixin {

  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * An optional ValueExpression which makes the component read-only if it is evaluated to true.
   * /
  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  /**
   * The property of the Bean to bind to this field.
   * This property field assumes that this bean has a property 'properties' that contains all properties.
   * In other words, the propertyPath is calculated by 'properties.' + propertyName.
   * /
  public var propertyName:String;

  /**
   * The link type of the linklist, defaults to CMTeasable
   * /
  [Bindable]
  public var linkType:String;

  /**
   * The link type of the link list search, defaults to CMTeasable
   * /
  [Bindable]
  public var searchType:String;

  private var reorderEnabledVE:ValueExpression;

  public*/ function TimelineEditorBase$(config/*:TimelineEditorBase = null*/) {if(arguments.length<=0)config=null;
    this.super$Wl80(config);
    this.initValidationStateMixin();
  }/*

  /**
   * Removed the given sequence from the struct list and updates
   * the position of the following structs.
   * /
  public*/ function removeSequence(sequence/*:Sequence*/)/*:void*/ {
    var position/*:Number*/ = sequence.getPositionExpression().getValue();

    //remove from struct
    var settingsStruct/*:Struct*/ = sequence.getSettingsStruct();
    settingsStruct.removeAt(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME, sequence.getIdExpression().getValue());

    //update the following positions
    var sequences/*:Array*/ = this.getSequencesVE(AS3.getBindable(this,"bindTo"), this.propertyName).getValue();
    for/* each*/(var $1=0;$1</* in*/ sequences.length;++$1) {var s/*:Sequence*/ =sequences[$1];
      if (s.getPositionExpression().getValue() > position) {
        var seqPos/*:Number*/ = s.getPositionExpression().getValue();
        seqPos--;
        s.getPositionExpression().setValue(seqPos);
      }
    }
  }/*


  /**
   * Returns an array of sequence objects to build the SequencePanels.
   * /
  protected*/ function getSequencesVE(bindTo/*:ValueExpression*/, propertyName/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var sequences/*:Array*/ = [];

      var propertyVE/*:ValueExpression*/ = bindTo.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + '.' + propertyName);
      var settingsStruct/*:Struct*/ = propertyVE.getValue();
      if (settingsStruct === undefined) {
        return undefined;
      }

      //noinspection JSMismatchedCollectionQueryUpdate
      var timelines/*:Array*/ = settingsStruct.get(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME);
      if (timelines === undefined) {
        return undefined;
      }

      if (timelines) {
        for (var i/*:int*/ = 0; i < timelines.length; i++) {
          var sequence/*:Sequence*/ = new com.coremedia.blueprint.base.components.timeline.Sequence(i, bindTo, propertyName);
          sequences.push(sequence);
        }
      }

      sequences.sort(function (s1/*:Sequence*/, s2/*:Sequence*/)/*:Number*/ {
        return s1.getPositionExpression().getValue() - s2.getPositionExpression().getValue();
      });
      return sequences;
    });
  }/*

  /**
   * Adds a new sequence panel
   * /
  protected*/ function addSequence()/*:void*/ {
    var propertyVE/*:ValueExpression*/ = AS3.getBindable(this,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + '.' + this.propertyName);
    var settingsStruct/*:Struct*/ = propertyVE.getValue();
    //noinspection JSMismatchedCollectionQueryUpdate
    var timelines/*:Array*/ = settingsStruct.get(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME);
    if (!timelines) {
      timelines = [];
      settingsStruct.getType().addStructListProperty(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME);
    }

    var sequence/*:Object*/ = {};
    sequence[com.coremedia.blueprint.base.components.timeline.Sequence.START_TIME_PROPERTY] = 0;
    sequence[com.coremedia.blueprint.base.components.timeline.Sequence.POSITION_PROPERTY] = timelines.length;
    sequence[com.coremedia.blueprint.base.components.timeline.Sequence.LINK_PROPERTY_NAME] = null;
    //noinspection ReservedWordAsName
    sequence['$Struct'] = [
      com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil.create({
        name: com.coremedia.blueprint.base.components.timeline.Sequence.LINK_PROPERTY_NAME,
        atomic: true,
        collection: false,
        minCardinality: 1,
        maxCardinality: 1,
        type: com.coremedia.cap.common.CapPropertyDescriptorType.LINK,
        linkType: com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(AS3.getBindable(this,"linkType"))
      })
    ];
    settingsStruct.addAt(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME, timelines.length, sequence);
  }/*

  protected*/ function getReorderEnabledVE(config/*:TimelineEditorBase*/)/*:ValueExpression*/ {
    if (!this.reorderEnabledVE$Wl80) {
      var readOnlyValueExpression/*:ValueExpression*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression"));
      this.reorderEnabledVE$Wl80 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return readOnlyValueExpression.getValue() === false;
      });
    }
    return this.reorderEnabledVE$Wl80;
  }/*

  protected*/ function dropHandler(dropIndex/*:Number*/, dragItem/*:Component*/)/*:Boolean*/ {
    var draggableItem/*:DraggableItem*/ =AS3.as( dragItem,  com.coremedia.ui.components.DraggableItem);
    var sequencePanel/*:SequencePanel*/ =AS3.as( draggableItem.getInnerCt(),  com.coremedia.blueprint.base.components.timeline.SequencePanel);
    var droppedSequence/*:Sequence*/ = AS3.getBindable(sequencePanel,"sequence");
    var dragIndex/*:Number*/ = droppedSequence.getPositionExpression().getValue();

    //updated the positions
    var sequences/*:Array*/ = this.getSequencesVE(AS3.getBindable(this,"bindTo"), this.propertyName).getValue();
    sequences.sort(function (s1/*:Sequence*/, s2/*:Sequence*/)/*:Number*/ {
      return s1.getPositionExpression().getValue() - s2.getPositionExpression().getValue();
    });

    sequences.splice(dragIndex, 1);
    sequences.splice(dropIndex, 0, droppedSequence);

    for (var i/*:int*/ = 0; i < sequences.length; i++) {
      sequences[i].getPositionExpression().setValue(i);
    }
    return true;
  }/*

  /**
   * Returns the key to be used for the template.
   * Each model key must be unique.
   * /
  protected static*/ function getTemplateKey$static(mt/*:Sequence*/)/*:String*/ {
    return mt.getIdExpression().getValue();
  }/*

  protected static*/ function getShowEmptyTextExpression$static(bindTo/*:ValueExpression*/, propertyName/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var propertyVE/*:ValueExpression*/ = bindTo.extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES + '.' + propertyName);
      var settingsStruct/*:Struct*/ = propertyVE.getValue();
      if (settingsStruct === undefined) {
        return undefined;
      }

      //noinspection JSMismatchedCollectionQueryUpdate
      var timelines/*:Array*/ = settingsStruct.get(com.coremedia.blueprint.base.components.timeline.Sequence.SEQUENCES_PROPERTY_NAME);
      return !(timelines && timelines.length > 0);

    });
  }/*

  public*/ function openTimelineSearch()/*:void*/ {
    if (!AS3.getBindable(this,"searchType")) {
      AS3.setBindable(this,"searchType" , this.resourceManager.getString('com.coremedia.blueprint.base.components.timeline.Timeline', 'timeline_editor_default_linktype'));
    } else if (AS3.getBindable(this,"searchType") === 'CMLinkable') {
      AS3.setBindable(this,"searchType" , com.coremedia.cap.content.ContentTypeNames.DOCUMENT);
    }

    TimelineEditorBase.openSearch(AS3.getBindable(this,"searchType"));
  }/*

  public static*/ function openSearch$static(sType/*:String*/)/*:void*/ {
    var searchFolder/*:Content*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (site) {
      searchFolder = site.getSiteRootFolder();
    }

    var collectionViewModel/*:CollectionViewModel*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel();
    var state/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    state.contentType = sType;
    state.folder = searchFolder;
    collectionViewModel.setSearchState(true, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW, state, searchFolder);
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(state, false, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      propertyName: null,
      reorderEnabledVE$Wl80: null,
      constructor: TimelineEditorBase$,
      super$Wl80: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      removeSequence: removeSequence,
      getSequencesVE: getSequencesVE,
      addSequence: addSequence,
      getReorderEnabledVE: getReorderEnabledVE,
      dropHandler: dropHandler,
      openTimelineSearch: openTimelineSearch,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null,
        linkType: null,
        searchType: null
      },
      statics: {
        getTemplateKey: getTemplateKey$static,
        getShowEmptyTextExpression: getShowEmptyTextExpression$static,
        openSearch: openSearch$static
      },
      requires: [
        "com.coremedia.blueprint.base.components.timeline.Timeline_properties",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.descriptors.impl.CapPropertyDescriptorUtil",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.content.ContentTypeNames",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.DraggableItem",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: [
        "com.coremedia.blueprint.base.components.timeline.Sequence",
        "com.coremedia.blueprint.base.components.timeline.SequencePanel"
      ]
    };
});
