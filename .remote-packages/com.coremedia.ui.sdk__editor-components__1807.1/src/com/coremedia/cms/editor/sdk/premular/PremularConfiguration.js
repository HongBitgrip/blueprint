Ext.define("com.coremedia.cms.editor.sdk.premular.PremularConfiguration", function(PremularConfiguration) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.RichTextUtil;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Issues;

/**
 * Holds configuration for a premular tab to be opened.
 * /
[PublicApi]
public class PremularConfiguration {
  //just to provide a hook for excluding the preload for some properties
  private static*/ var excludedDocTypeProperties$static/*:Array*/;/* =*/function excludedDocTypeProperties$static_(){excludedDocTypeProperties$static=( []);};/*

  private var _content:Content;
  private var _readOnlyContentObject:ContentObject;
  private var _showPreview:Boolean;
  private var _showForm:Boolean;
  private var _activeTabIndex:int;
  private var issues:Issues;

  private var premularGroups:PremularFieldGroups;

  public*/ function PremularConfiguration$(document/*:Content*/,
                                        readOnlyContentObject/*:ContentObject = null*/,
                                        showPreview/*:Boolean = true*/,
                                        showForm/*:Boolean = true*/,
                                        activeTabIndex/*:int = 0*/) {switch(Math.max(arguments.length,1)){case 1:readOnlyContentObject=null;case 2:showPreview=true;case 3:showForm=true;case 4:activeTabIndex=0;}
    this._content$zSy2 = document;
    this._readOnlyContentObject$zSy2 = readOnlyContentObject;
    this._showPreview$zSy2 = showPreview;
    this._showForm$zSy2 = showForm;
    this._activeTabIndex$zSy2 = activeTabIndex;

    if(this._showPreview$zSy2 === undefined) {
      this._showPreview$zSy2 = true;
    }
    if(this._showForm$zSy2 === undefined) {
      this._showForm$zSy2 = true;
    }
  }/*

  /**
   * Loads all values that are required to initialize components synchronously.
   * E.g. the collapse state of all PropertyFieldGroups of a form.
   * Additionally, we load content information like type and path so that less rendering issues occur.
   * @param callback called when all calculations are done. The premular is opened afterwards.
   * /
  public*/ function load(callback/*:Function*/)/*:void*/ {var this$=this;
    this.premularGroups$zSy2 = new com.coremedia.cms.editor.sdk.premular.PremularFieldGroups();

    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var c/*:Content*/ = this$._content$zSy2;
      if (!c) {
        return undefined;
      }
      if (!c.isLoaded()) {
        c.load();
        return undefined;
      }

      //load type information
      if (!c.getType().getName()) {
        return undefined;
      }

      //load full path information (this is not part of the content bean alone)
      if (c.getPath() === undefined) {
        return undefined;
      }

      // TODO: re-consider idea of preloading things (especially blobs)
      // Was introduced for: CMS-7856
      // Causes: CMS-10738
//      //pre-load blob properties, required to determine if a blob is empty or not
//      var descriptors:Array = c.getType().getDescriptors();
//      for each(var desc:CapPropertyDescriptor in descriptors) {
//        if (isPreloadExcluded(c.getType().getName(), desc.name)) {
//          continue;
//        }
//        if (desc.type === CapPropertyDescriptorType.MARKUP || desc.type === CapPropertyDescriptorType.BLOB) {
//          var markupBlob:BlobImpl = c.getProperties().get(desc.name);
//          if (markupBlob) {//maybe null when no data has ever been set
//            if (markupBlob && !markupBlob.isLoaded()) {
//              DependencyTracker.dependOnObservable(markupBlob, "data");
//              markupBlob.loadData();
//              return undefined;
//            }
//          }
//        }
//
//        if (desc.type == CapPropertyDescriptorType.STRUCT) {
//          var struct:Struct = c.getProperties().get(desc.name);
//          if (struct as StructRemoteBeanImpl) {
//            var s:StructRemoteBeanImpl = struct as StructRemoteBeanImpl;
//            if (!s.isLoaded()) {
//              s.load();
//              return undefined;
//            }
//
//            if (ContentExport.preloadStruct(struct) === undefined) {
//              return undefined;
//            }
//          }
//        }
//      }

      //ensure that preferences are loaded to resolve all itemId => propertyNames mapping
      if (!(AS3.as(com.coremedia.cms.editor.sdk.editorContext.getPreferences(),  com.coremedia.cap.common.impl.StructRemoteBeanImpl)).isLoaded()) {
        return undefined;
      }

      //load issues to ensure expand state when there are invalid fields
      var issuesVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create("issues", this$._content$zSy2);
      this$.issues$zSy2 = issuesVE.getValue();
      if (this$.issues$zSy2 === undefined) {
        return undefined;
      }

      if (!this$.issues$zSy2.isLoaded()) {
        this$.issues$zSy2.load();
        return undefined;
      }

      //pre-load existing expand state.
      this$.premularGroups$zSy2.loadStatesFor(this$._content$zSy2.getType().getName());

      return true;
    }).loadValue(callback);
  }/*

  public*/ function updatePremularFieldGroup(contentTypeName/*:String*/, itemId/*:String*/, isCollapsed/*:Boolean*/)/*:PremularFieldGroup*/ {
    return this.premularGroups$zSy2.updatePremularFieldGroup(contentTypeName, itemId, isCollapsed);
  }/*

  /**
   * Returns a boolean flag that indicates if a PropertyFieldGroup is collapsed or not.
   * All asynchronous calls should have been already made inside the 'load' method of this object.
   *
   * @param itemId the itemId of the PropertyFieldGroup, may be undefined
   * @param propertyNames A list of comma separated property names, used if more than one referrer property should be evaluated.
   * @param expandOnValuesNames expand of one these fields have a value
   * @param collapsed apply this default state if no other state is available.
   * @param collapsible if not a collapsible, we can skip the calculation.
   * @return true if the PropertyFieldGroup state is initially collapsed
   * /
  public*/ function getCollapsedState(itemId/*:String*/,
                                    propertyNames/*:Array*/,
                                    expandOnValuesNames/*:Array*/,
                                    collapsed/*:Boolean = false*/,
                                    collapsible/*:Boolean = true*/)/*:Boolean*/ {switch(Math.max(arguments.length,3)){case 3:collapsed=false;case 4:collapsible=true;}
    // If no itemId, then nothing to do here.
    if (!itemId) {
      return false;
    }
    // If not collapsible at all, then do not collapse.
    if (collapsible === false) {
      return false;
    }

    // Only leave collapsed, if no issues for property fields of the Premular field group exist.
    var isExpandForIssueNeeded/*:Boolean*/ = this.checkPropertyIssues$zSy2(propertyNames);
    if (isExpandForIssueNeeded) {
      return false;
    }

    // Only leave collapsed if no explicit 'expand on value' for property fields of the Premular field group are set.
    var isExpandForValueNeeded/*:Boolean*/ = this.checkPropertyValues$zSy2(expandOnValuesNames);
    if (isExpandForValueNeeded) {
      return false;
    }

    // Apply the 'collapsed' value that has either (1) is stored in the user preferences
    // or (2) results form the user explicitly expanding / collapsing the Premular field group.
    var contentTypeName/*:String*/ = this._content$zSy2.getType().getName();
    var premularGroup/*:PremularFieldGroup*/ = this.premularGroups$zSy2.getGroup(contentTypeName, itemId);
    if (premularGroup) {
      return premularGroup.isCollapsed();
    }

    // Apply given fallback.
    return collapsed;
  }/*

  /**
   * Adds the given property of the give doctype to the list of preload exclusions.
   * Note that the doctype will not be checked for it's subtypes.
   * @param docType the doctype for which the property loading should be excluded for
   * @param propertyName the property name that should not be preloaded
   * /
  public static*/ function addExcludedPreloadProperty$static(docType/*:String*/, propertyName/*:String*/)/*:void*/ {
    excludedDocTypeProperties$static.push(docType + ":" + propertyName);
  }/*


  /**
   * Returns true if the given property should be preloaded or is in the list of excluded properties
   * /
  private static*/ function isPreloadExcluded$static(docTypeName/*:String*/, propertyName/*:String*/)/*:Boolean*/ {
    for/* each*/(var $1=0;$1</* in*/ excludedDocTypeProperties$static.length;++$1) {var excludedProperty/*:String*/ =excludedDocTypeProperties$static[$1];
      var excludedType/*:String*/ = null;
      excludedType = excludedProperty.split(":")[0];
      excludedProperty = excludedProperty.split(":")[1];

      if (excludedType === docTypeName && excludedProperty === propertyName) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Checks if one of the given content properties is invalid.
   * If one of the given fields is invalid, the expand state calculation is finished with state 'expanded'.
   * @param propertyNames An array with content property names.
   * @return True if on of the fields is invalid.
   * /
  private*/ function checkPropertyIssues(propertyNames/*:Array*/)/*:Boolean*/ {
    var pNames/*:Array*/ = propertyNames || [];
    if (!(AS3.as(this._content$zSy2,  com.coremedia.cms.editor.sdk.premular.HistoricContent))) {
      //check issues for each property field
      for (var i/*:int*/ = 0; i < pNames.length; i++) {
        var propertyName/*:String*/ = pNames[i];
        //some struct path can not be validated or simply return no result, so we skip them
        if (!propertyCanBeValidated$static(propertyName)) {
          continue;
        }

        //noinspection JSMismatchedCollectionQueryUpdate
        var issueResult/*:Array*/ = this.issues$zSy2.getByProperty().get(propertyName);
        //there is a field with an issue
        if (issueResult && issueResult.length > 0) {
          return true;
        }
      }
    }

    return false;
  }/*

  /**
   * Validates the properties that have been passed through the 'expandOnValuesNames' field.
   * All property values are checked if they have a corresponding value that is 'not empty'.
   * If one of the given fields has a value, the expand state calculation is finished with state 'expanded'.
   * @param expandOnValuesNames An array with content property names.
   * @return True if one of the fields has a value.
   * /
  private*/ function checkPropertyValues(expandOnValuesNames/*:Array*/)/*:Boolean*/ {
    for/* each*/ (var $1=0;$1</* in*/ expandOnValuesNames.length;++$1) {var field/*:String*/ =expandOnValuesNames[$1];
      var fieldValue/*:**/ = this._content$zSy2.getProperties().get(field);

      //expand if there is a string value
      if (!com.coremedia.cms.editor.sdk.util.RichTextUtil.isEmpty(AS3.as(fieldValue,  String))) {
        return true;
      }

      //expand if there is a date set
      if (AS3.as(fieldValue,  com.coremedia.ui.data.Calendar)) {
        return true;
      }

      //check if there is a (link) list with values
      if (AS3.as(fieldValue,  Array) && fieldValue.length > 0) {
        return true;
      }

      //check if there is a blob
      if (AS3.as(fieldValue,  com.coremedia.ui.data.Blob)) {
        var blobValue/*:String*/ =AS3.as( (AS3.as(fieldValue,  com.coremedia.ui.data.Blob)).getData(),  String);
        return !com.coremedia.cms.editor.sdk.util.RichTextUtil.isEmpty(blobValue);
      }

      if (AS3.as(fieldValue,  Boolean) || !isNaN(parseInt(fieldValue))) {
        return true;
      }
    }

    return false;
  }/*

  /**
   * Returns true if the given property can be validated using the validation service.
   * @param propertyName the property name to validate.
   * /
  private static*/ function propertyCanBeValidated$static(propertyName/*:String*/)/*:Boolean*/ {
    return propertyName.indexOf("placement") === -1;
  }/*

  /**
   * @return the document to be opened in the document form
   * /
  public*/ function  get$content()/*:Content*/ {
    return this._content$zSy2;
  }/*

  public*/ function  set$content(value/*:Content*/)/*:void*/ {
    this._content$zSy2 = value;
  }/*

  /**
   * @return a read only content object to be opened in the read-only document form (optional)
   * /
  public*/ function  get$readOnlyContentObject()/*:ContentObject*/ {
    return this._readOnlyContentObject$zSy2;
  }/*

  /**
   * @return whether the preview should be opened or not; undefined means the preview should be left as is
   * /
  public*/ function  get$showPreview()/*:Boolean*/ {
    return this._showPreview$zSy2;
  }/*

  /**
   * @return whether the form should be opened or not; undefined means the form should be left as is
   * /
  public*/ function  get$showForm()/*:Boolean*/ {
    return this._showForm$zSy2;
  }/*

  public*/ function  set$readOnlyContentObject(value/*:ContentObject*/)/*:void*/ {
    this._readOnlyContentObject$zSy2 = value;
  }/*

  public*/ function  set$showPreview(value/*:Boolean*/)/*:void*/ {
    this._showPreview$zSy2 = value;
  }/*

  public*/ function  set$showForm(value/*:Boolean*/)/*:void*/ {
    this._showForm$zSy2 = value;
  }/*

  public*/ function  get$activeTabIndex()/*:int*/ {
    return this._activeTabIndex$zSy2;
  }/*

  public*/ function  set$activeTabIndex(value/*:int*/)/*:void*/ {
    this._activeTabIndex$zSy2 = value;
  }/*

  public*/ function applyState(state/*:Object*/)/*:void*/ {
    if (state.readOnlyContentObject !== undefined) {
      this.readOnlyContentObject = state.readOnlyContentObject;
    }
    if (state.showForm !== undefined) {
      this.showForm = state.showForm;
    }
    if (state.showPreview !== undefined) {
      this.showPreview = state.showPreview;
    }
    if (state.content !== undefined) {
      this.content = state.content;
    }
    if (state.activeTabIndex !== undefined) {
      this.activeTabIndex = state.activeTabIndex;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      _content$zSy2: null,
      _readOnlyContentObject$zSy2: null,
      _showPreview$zSy2: false,
      _showForm$zSy2: false,
      _activeTabIndex$zSy2: 0,
      issues$zSy2: null,
      premularGroups$zSy2: null,
      constructor: PremularConfiguration$,
      load: load,
      updatePremularFieldGroup: updatePremularFieldGroup,
      getCollapsedState: getCollapsedState,
      checkPropertyIssues$zSy2: checkPropertyIssues,
      checkPropertyValues$zSy2: checkPropertyValues,
      applyState: applyState,
      statics: {
        excludedDocTypeProperties: undefined,
        addExcludedPreloadProperty: addExcludedPreloadProperty$static,
        __initStatics__: function() {
          excludedDocTypeProperties$static_();
        }
      },
      __accessors__: {
        content: {
          get: get$content,
          set: set$content
        },
        readOnlyContentObject: {
          get: get$readOnlyContentObject,
          set: set$readOnlyContentObject
        },
        showPreview: {
          get: get$showPreview,
          set: set$showPreview
        },
        showForm: {
          get: get$showForm,
          set: set$showForm
        },
        activeTabIndex: {
          get: get$activeTabIndex,
          set: set$activeTabIndex
        }
      },
      requires: [
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.HistoricContent",
        "com.coremedia.cms.editor.sdk.premular.PremularFieldGroups",
        "com.coremedia.cms.editor.sdk.util.RichTextUtil"
      ]
    };
});
