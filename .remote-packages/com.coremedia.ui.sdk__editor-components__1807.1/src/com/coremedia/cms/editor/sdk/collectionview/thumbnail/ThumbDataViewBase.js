Ext.define("com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbDataViewBase", function(ThumbDataViewBase) {/*package com.coremedia.cms.editor.sdk.collectionview.thumbnail {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.CanEditContentName;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer;
import com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.cms.editor.sdk.util.ImageUtil;
import com.coremedia.ui.DispatchingXTemplate;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.skins.TextfieldSkin;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ThumbnailImage;

import ext.Editor;
import ext.XTemplate;
import ext.container.Container;
import ext.data.Model;
import ext.data.Store;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.TextField;
import ext.view.DataView;

import js.HTMLElement;

public class ThumbDataViewBase extends DataView implements CanEditContentName {
  public static const LIST_BLOCK:BEMBlock =*/function LIST_BLOCK$static_(){ThumbDataViewBase.LIST_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-thumb-data-view"));}/*;

  public static const LIST_ELEMENT_ITEM:BEMElement =*/function LIST_ELEMENT_ITEM$static_(){ThumbDataViewBase.LIST_ELEMENT_ITEM=( ThumbDataViewBase.LIST_BLOCK.createElement("item"));}/*;
  public static const LIST_MODIFIER_EMPTY:BEMModifier =*/function LIST_MODIFIER_EMPTY$static_(){ThumbDataViewBase.LIST_MODIFIER_EMPTY=( ThumbDataViewBase.LIST_BLOCK.createModifier("empty"));}/*;
  public static const LIST_MODIFIER_FRAME:BEMModifier =*/function LIST_MODIFIER_FRAME$static_(){ThumbDataViewBase.LIST_MODIFIER_FRAME=( ThumbDataViewBase.LIST_BLOCK.createModifier("frame"));}/*;

  public static const THUMBNAIL_BLOCK:BEMBlock =*/function THUMBNAIL_BLOCK$static_(){ThumbDataViewBase.THUMBNAIL_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-thumbnail"));}/*;
  public static const THUMBNAIL_ELEMENT_ICON:BEMElement =*/function THUMBNAIL_ELEMENT_ICON$static_(){ThumbDataViewBase.THUMBNAIL_ELEMENT_ICON=( ThumbDataViewBase.THUMBNAIL_BLOCK.createElement("icon"));}/*;
  public static const THUMBNAIL_ELEMENT_TEXT:BEMElement =*/function THUMBNAIL_ELEMENT_TEXT$static_(){ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT=( ThumbDataViewBase.THUMBNAIL_BLOCK.createElement("text"));}/*;
  public static const THUMBNAIL_MODIFIER_LOADING:BEMModifier =*/function THUMBNAIL_MODIFIER_LOADING$static_(){ThumbDataViewBase.THUMBNAIL_MODIFIER_LOADING=( ThumbDataViewBase.THUMBNAIL_BLOCK.createModifier("loading"));}/*;
  public static const THUMBNAIL_MODIFIER_NO_SELECTION:BEMModifier =*/function THUMBNAIL_MODIFIER_NO_SELECTION$static_(){ThumbDataViewBase.THUMBNAIL_MODIFIER_NO_SELECTION=( ThumbDataViewBase.THUMBNAIL_BLOCK.createModifier("no-selection"));}/*;
  public static const THUMBNAIL_MODIFIER_READ_ONLY:BEMModifier =*/function THUMBNAIL_MODIFIER_READ_ONLY$static_(){ThumbDataViewBase.THUMBNAIL_MODIFIER_READ_ONLY=( ThumbDataViewBase.THUMBNAIL_BLOCK.createModifier("read-only"));}/*;

  public static const THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW:BEMModifier =*/function THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW$static_(){ThumbDataViewBase.THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW=( com.coremedia.ui.util.ThumbnailImage.BLOCK.createModifier("collection-view"));}/*;

  public static const NAME_FIELD:String = "name";

  private static const*/var THUMBNAIL_IMG_SIZE$static/*:int*/ = 64;/*

  /**
   * Value expression describing the bound data source.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * A model for informing the list view of a newly created content object.
   * /
  [Bindable]
  public var createdContentValueExpression:ValueExpression;

  /**
   * A value expression that specifies where to set the multiply selected items
   * /
  [Bindable]
  public var selectedItemsValueExpression:ValueExpression;
  private var nameEditor:Editor;

  private var collectionViewModel:CollectionViewModel;

  // Remember beans that wait for editing or selecting
  private var waitEditingCreated:Bean;

  /**
   * The drag dd group for this ThumbDataView.
   * /
  [ExtConfig]
  public var dragDDGroup:String;

  /**
   * The function to create the html of drag ghost. Default is <code>DragDropVisualFeedback.getHtmlFeedback</code>.
   * /
  [ExtConfig]
  public var ddHtmlFeedbackFunction:Function;
  private var editable:Boolean;

  /**
   * the record being currently edited
   * /
  private var recordBeingEdited:BeanRecord;

  private var modifierVE:ValueExpression;

  /**
   * @param config the config object
   * /
  public*/ function ThumbDataViewBase$(config/*:ThumbDataViewBase = null*/) {if(arguments.length<=0)config=null;
    /**
     * Template for rendering the thumbnails
     *
     * regarding the if-else construct:
     * if branch can never be reached for undefined fields (even if "!field" is the expression), so else branch needs to
     * be used...
     */
    var thumbnailViewXTemplate/*:DispatchingXTemplate*/ = new com.coremedia.ui.DispatchingXTemplate({
              "default":new Ext.XTemplate('<div tabindex=0 role="option" aria-label="{typeName} {shortName}" class="' + ThumbDataViewBase.LIST_ELEMENT_ITEM + ' ' + ThumbDataViewBase.THUMBNAIL_BLOCK +  '<tpl if="loaded"><tpl else> ' + ThumbDataViewBase.THUMBNAIL_MODIFIER_LOADING + '</tpl> {readOnlyModifierCls}" data-content-id="{contentId}">',
                      '<div role="presentation" class="' + ThumbDataViewBase.THUMBNAIL_ELEMENT_ICON + ' {docTypeClass}"></div>',
                      '<p role="presentation" class="' + ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT + '" data-qtip="{shortName}">{shortName}</p>',
                      '</div>'),
              "image":new Ext.XTemplate('<div tabindex=0 role="option" aria-label="{typeName} {shortName}" class="' +
                        ThumbDataViewBase.LIST_ELEMENT_ITEM + ' ' + ThumbDataViewBase.THUMBNAIL_BLOCK +
                        '<tpl if="loaded"><tpl else> ' + ThumbDataViewBase.THUMBNAIL_MODIFIER_LOADING +
                        '</tpl> {readOnlyModifierCls}" data-content-id="{contentId}"data-content-id="{contentId}">',

                      '{[values.thumbnailImage.render("' + ThumbDataViewBase.THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW.getCSSClass() + '")]}',

                      '<p role="presentation" class="' + ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT + '" data-qtip="{shortName}"><span class="{docTypeClass}"></span> {shortName}</p>',
                      '</div>')
            },
            dispatchXTemplate$static
            );

    config.tpl = thumbnailViewXTemplate;
    this.super$Y4y3(config);
    this.on('afterrender',AS3.bind( this,"afterFirstRender$Y4y3"), null, {single:true});
    this.mon(this.getStore(), "update",AS3.bind( this,"handleStoreUpdate$Y4y3"));
    if (AS3.getBindable(config,"createdContentValueExpression")) {
      AS3.getBindable(config,"createdContentValueExpression").addChangeListener(AS3.bind(this,"contentCreated$Y4y3"));
    }

    this.editable$Y4y3 = config.editable$Y4y3 === undefined ? true : config.editable$Y4y3;

    if (this.editable$Y4y3) {
      this.initializeNameEditor$Y4y3();
    }
    this.on("itemmousedown",AS3.bind( this,"onItemMouseDown$Y4y3"));
    com.coremedia.ui.util.ThumbnailImage.registerDataViewAnimationHandlers(this);
  }/*

  private*/ function initializeNameEditor()/*:void*/ {
   //configure the text field for the name editor
    var textfieldConfig/*:TextField*/ = AS3.cast(Ext.form.field.Text,{});
    textfieldConfig.allowBlank = false;
    textfieldConfig.selectOnFocus = true;
    textfieldConfig.ui = com.coremedia.ui.skins.TextfieldSkin.CENTERED.getSkin();

    //initialize the name editor
    var editorConfig/*:Editor*/ = AS3.cast(Ext.Editor,{});
    var textField/*:TextField*/ = new Ext.form.field.Text(textfieldConfig);
    editorConfig.field = textField;
    editorConfig.ignoreNoChange = true;
    this.nameEditor$Y4y3 = new Ext.Editor(editorConfig);
    //handling of the edit mask
    this.mon(this.nameEditor$Y4y3, 'complete',AS3.bind( this,"nameEditCompleted$Y4y3"));
  }/*

  private*/ function afterFirstRender()/*:void*/ {
    this.setupDragDropZones$Y4y3();
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onItemMouseDown(dataView/*:DataView*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, e/*:Event*/, eOpts/*:Object*/)/*:void*/ {
    if (this.editable$Y4y3) {
      var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
      var target/*:Element*/ =AS3.as( e.getTarget(ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT.getCSSSelector(), 10, true),  Ext.dom.Element);
      if (beanRecord && target) {
        this.editName$Y4y3(beanRecord);
      }
    }
  }/*

  private*/ function setupDragDropZones()/*:void*/ {
    new com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbnailDragZone(this, this.dragDDGroup, this.ddHtmlFeedbackFunction);
  }/*

  public*/ function getCollectionViewModel()/*:CollectionViewModel*/ {
    return this.collectionViewModel$Y4y3;
  }/*

  [InjectFromExtParent]
  public*/ function setCollectionViewModel(collectionViewModel/*:CollectionViewModel*/)/*:void*/ {
    this.collectionViewModel$Y4y3 = collectionViewModel;
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Necessary for the test
   * @param field
   * @return
   * /
  public*/ function getEditor(field/*:String*/)/*:Editor*/ {
    if (field === ThumbDataViewBase.NAME_FIELD) {
      return this.nameEditor$Y4y3;
    } else {
      return null;
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function nameEditCompleted(editor/*:Editor*/, value/*:String*/)/*:void*/ {
    var content/*:Content*/ =AS3.as( this.recordBeingEdited$Y4y3.getBean(),  com.coremedia.cap.content.Content);

    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(content, function(extension/*:CollectionViewExtension*/)/*:void*/ {
      extension && extension.getContentTreeRelation().rename(content, value);
    });
  }/*

  private*/ function contentCreated()/*:void*/ {var this$=this;
    if (this.isActiveView$Y4y3()) {
      var createdContent/*:Content*/ = AS3.getBindable(this,"createdContentValueExpression").getValue();
      if (createdContent) {
        com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/{
          // Variable 'content' might hold a single Content item or an array of contents.
          AS3.getBindable(this$,"selectedItemsValueExpression").setValue([].concat(createdContent));
          AS3.getBindable(this$,"createdContentValueExpression").setValue(null);
          this$.recordBeingEdited$Y4y3 = findBeanRecord$static(AS3.cast(Ext.data.Store,this$.getStore()), createdContent);
          //start editing immediately when the record has been initialized
          if (this$.recordBeingEdited$Y4y3 && this$.recordBeingEdited$Y4y3.get(ThumbDataViewBase.NAME_FIELD)) {
            this$.editName$Y4y3(this$.recordBeingEdited$Y4y3);
          } else {
            this$.waitEditingCreated$Y4y3 = createdContent;
          }
        });
      }
    }
  }/*

  private*/ function isActiveView()/*:Boolean*/ {
    var myParent/*:Container*/ = this.findParentByType(com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer.xtype);
    var parent/*:FolderContentSwitchingContainer*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer.xtype),  com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer);
    return parent.isActiveView(myParent, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.THUMBNAILS_VIEW);
  }/*

  /**
   * Function that is used by DispatchingXTemplate to determine
   * which xtemplate to use. (see #thumbnailViewXTemplate)
   *
   * @param data the map of data objects that the templates receive
   * @return the name of the xtemplate to use.
   * /
  private static*/ function dispatchXTemplate$static(data/*:Object*/)/*:String*/ {
    //when no image uri has been set, fall back to the default template:
    return data['thumbnailImage'] ? "image" : "default";
  }/*

  public static*/ function computeThumbnailImage$static(model/*:Object*/, docType/*:String = null*/)/*:ThumbnailImage*/ {if(arguments.length<=1)docType=null;
    return com.coremedia.cms.editor.sdk.editorContext.getThumbnailImage(model,
            com.coremedia.cms.editor.sdk.util.ImageUtil.getCroppingOperation(THUMBNAIL_IMG_SIZE$static, THUMBNAIL_IMG_SIZE$static),
            docType);
  }/*

  public static*/ function isLoaded$static()/*:Boolean*/ {
    // only important if BindListPlugin has lazy set to "true"
    // this function is never reached for lazy loaded items (but for the loaded items), so it can always return true
    return true;
  }/*

  public static*/ function getReadOnlyModifierCls$static(name/*:String*/, content/*:Content*/)/*:String*/ {
    return name &&AS3.is( content,  com.coremedia.cap.content.Content) && com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(content) ? ThumbDataViewBase.THUMBNAIL_MODIFIER_READ_ONLY.getCSSClass() : "";
  }/*

  protected*/ function getModifierVE(config/*:ThumbDataViewBase*/)/*:ValueExpression*/ {
    if (!this.modifierVE$Y4y3) {
      this.modifierVE$Y4y3 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var modifiers/*:Array*/ = [];

        //noinspection JSMismatchedCollectionQueryUpdate
        var value/*:Array*/ = AS3.getBindable(config,"bindTo").getValue();
        if (value !== undefined && value.length === 0) {
          modifiers.push(ThumbDataViewBase.LIST_MODIFIER_EMPTY);
        }

        return modifiers;
      });
    }
    return this.modifierVE$Y4y3;
  }/*

  public*/ function editContentName(content/*:Content*/)/*:void*/ {
    this.editName$Y4y3(findBeanRecord$static(AS3.cast(Ext.data.Store,this.getStore()), content));
  }/*

  private*/ function editName(node/*:BeanRecord*/)/*:void*/ {
    this.waitEditingCreated$Y4y3 = null;
    
    // explicitly finish editing before starting a new edit as the old item is not released when the same editor is used
    if (this.nameEditor$Y4y3.editing) {
      this.nameEditor$Y4y3.completeEdit(false);
    }
    
    this.recordBeingEdited$Y4y3 = findBeanRecord$static(AS3.cast(Ext.data.Store,this.getStore()), node.getBean());
    this.startNameEdit$Y4y3(node);
  }/*

  private*/ function startNameEdit(node/*:BeanRecord*/)/*:void*/ {
    var nodeElement/*:Element*/ = Ext.dom.Element.get(this.getNode(node));
    var textElement/*:Element*/ = nodeElement.query(ThumbDataViewBase.THUMBNAIL_ELEMENT_TEXT.getCSSSelector(), false)[0];
    this.nameEditor$Y4y3.startEdit(textElement, node.getBean().get(ThumbDataViewBase.NAME_FIELD));
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function handleStoreUpdate(store/*:Store*/, record/*:BeanRecord*/)/*:void*/ {
    // Check if the bean of the updated record is waiting for editing
    if (this.waitEditingCreated$Y4y3 && this.waitEditingCreated$Y4y3 === record.getBean() && record.get(ThumbDataViewBase.NAME_FIELD)) {
      // Record initialized completely
      this.editName$Y4y3(record);
    }
  }/*

  /**
   * Ensures that the hover layer is destroyed too.
   * /
  override protected*/ function onDestroy()/*:void*/ {
    Ext.view.View.prototype.onDestroy.call(this);
    if (AS3.getBindable(this,"createdContentValueExpression")){
      AS3.getBindable(this,"createdContentValueExpression").removeChangeListener(AS3.bind(this,"contentCreated$Y4y3"));
    }
  }/*

  /**
   * Find the BeanRecord with given bean in store:
   * /
  private static*/ function findBeanRecord$static(store/*:Store*/, bean/*:Bean*/)/*:BeanRecord*/ {
    if (bean) {
      var number/*:Number*/ = store.findBy(function (record/*:BeanRecord*/)/*:Boolean*/ {
        return record.getBean() === bean;
      });
      return AS3.as( store.getAt(number),  com.coremedia.ui.store.BeanRecord);
    }
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.View",
      mixins: ["com.coremedia.cms.editor.sdk.actions.CanEditContentName"],
      metadata: {setCollectionViewModel: ["InjectFromExtParent"]},
      nameEditor$Y4y3: null,
      collectionViewModel$Y4y3: null,
      waitEditingCreated$Y4y3: null,
      dragDDGroup: null,
      ddHtmlFeedbackFunction: null,
      editable$Y4y3: false,
      recordBeingEdited$Y4y3: null,
      modifierVE$Y4y3: null,
      constructor: ThumbDataViewBase$,
      super$Y4y3: function() {
        Ext.view.View.prototype.constructor.apply(this, arguments);
      },
      initializeNameEditor$Y4y3: initializeNameEditor,
      afterFirstRender$Y4y3: afterFirstRender,
      onItemMouseDown$Y4y3: onItemMouseDown,
      setupDragDropZones$Y4y3: setupDragDropZones,
      getCollectionViewModel: getCollectionViewModel,
      setCollectionViewModel: setCollectionViewModel,
      getEditor: getEditor,
      nameEditCompleted$Y4y3: nameEditCompleted,
      contentCreated$Y4y3: contentCreated,
      isActiveView$Y4y3: isActiveView,
      getModifierVE: getModifierVE,
      editContentName: editContentName,
      editName$Y4y3: editName,
      startNameEdit$Y4y3: startNameEdit,
      handleStoreUpdate$Y4y3: handleStoreUpdate,
      onDestroy: onDestroy,
      config: {
        bindTo: null,
        createdContentValueExpression: null,
        selectedItemsValueExpression: null
      },
      statics: {
        LIST_BLOCK: undefined,
        LIST_ELEMENT_ITEM: undefined,
        LIST_MODIFIER_EMPTY: undefined,
        LIST_MODIFIER_FRAME: undefined,
        THUMBNAIL_BLOCK: undefined,
        THUMBNAIL_ELEMENT_ICON: undefined,
        THUMBNAIL_ELEMENT_TEXT: undefined,
        THUMBNAIL_MODIFIER_LOADING: undefined,
        THUMBNAIL_MODIFIER_NO_SELECTION: undefined,
        THUMBNAIL_MODIFIER_READ_ONLY: undefined,
        THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW: undefined,
        NAME_FIELD: "name",
        computeThumbnailImage: computeThumbnailImage$static,
        isLoaded: isLoaded$static,
        getReadOnlyModifierCls: getReadOnlyModifierCls$static,
        __initStatics__: function() {
          LIST_BLOCK$static_();
          LIST_ELEMENT_ITEM$static_();
          LIST_MODIFIER_EMPTY$static_();
          LIST_MODIFIER_FRAME$static_();
          THUMBNAIL_BLOCK$static_();
          THUMBNAIL_ELEMENT_ICON$static_();
          THUMBNAIL_ELEMENT_TEXT$static_();
          THUMBNAIL_MODIFIER_LOADING$static_();
          THUMBNAIL_MODIFIER_NO_SELECTION$static_();
          THUMBNAIL_MODIFIER_READ_ONLY$static_();
          THUMBNAIL_IMAGE_MODIFIER_COLLECTION_VIEW$static_();
        }
      },
      requires: [
        "Ext.Editor",
        "Ext.XTemplate",
        "Ext.data.Store",
        "Ext.dom.Element",
        "Ext.form.field.Text",
        "Ext.view.View",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.CanEditContentName",
        "com.coremedia.ui.DispatchingXTemplate",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.skins.TextfieldSkin",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ThumbnailImage"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentContainer",
        "com.coremedia.cms.editor.sdk.collectionview.FolderContentSwitchingContainer",
        "com.coremedia.cms.editor.sdk.collectionview.thumbnail.ThumbnailDragZone",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ImageUtil"
      ]
    };
});
