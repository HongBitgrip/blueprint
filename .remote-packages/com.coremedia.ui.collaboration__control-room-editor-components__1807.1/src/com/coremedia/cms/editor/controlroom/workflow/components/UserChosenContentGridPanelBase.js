Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentGridPanelBase", function(UserChosenContentGridPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.clipboard.Clipboard;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class UserChosenContentGridPanelBase extends ContentGridPanel {
  private var selectedValuesValueExpression:ValueExpression;
  private var dropZone:UserChosenContentsGridDropZone;
  private var forceReadOnlyValueExpression:ValueExpression;
  private var premularConfigurationsValueExpression:ValueExpression;

  public*/ function UserChosenContentGridPanelBase$(config/*:UserChosenContentGridPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.forceReadOnlyValueExpression$Wr9O = AS3.getBindable(config,"forceReadOnlyValueExpression");

    this.super$Wr9O(config);

    this.on('afterrender',AS3.bind( this,"setupUserChosenContentsGridDropZone$Wr9O"));
    this.on('beforedestroy', function ()/*:void*/ {
      if (this$.dropZone$Wr9O) {
        this$.dropZone$Wr9O.unreg();
      }
    });

    this.forceReadOnlyValueExpression$Wr9O && this.forceReadOnlyValueExpression$Wr9O.addChangeListener(AS3.bind(this,"checkDropZoneDisabling$Wr9O"));
  }/*

  /**
   * Whether folders are allowed to be added to the content grid panel or not.
   * /
  [Bindable]
  public var allowFolders:Boolean = true;

  /**
   * Whether to expand folders (recursively) to documents. Implies that folders are allowed to be added
   * to grid panel.
   * /
  [Bindable]
  public var expandFolders:Boolean;

  [Bindable]
  public var contentEditable:Boolean = true;

  private*/ function setupUserChosenContentsGridDropZone()/*:void*/ {
    var dropZoneConfig/*:UserChosenContentsGridDropZone*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentsGridDropZone,{
      ddGroup: "ContentLinkDD",
      allowFolders: AS3.getBindable(this,"allowFolders"),
      expandFolders: AS3.getBindable(this,"expandFolders")
    });
    this.dropZone$Wr9O = new com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentsGridDropZone(this.body, dropZoneConfig, AS3.getBindable(this,"bindTo","DUMMY"));
    this.dropZone$Wr9O.addToGroup("ContentDD");

    this.checkDropZoneDisabling$Wr9O();
  }/*

  private*/ function checkDropZoneDisabling()/*:void*/ {
    if ((this.forceReadOnlyValueExpression$Wr9O && this.forceReadOnlyValueExpression$Wr9O.getValue()) || AS3.getBindable(this,"contentEditable") === false) {
      this.dropZone$Wr9O && this.dropZone$Wr9O.lock();
    } else {
      this.dropZone$Wr9O && this.dropZone$Wr9O.unlock();
    }
  }/*

  protected*/ function getSelectedValuesValueExpression()/*:ValueExpression*/ {
    if (!this.selectedValuesValueExpression$Wr9O) {
      this.selectedValuesValueExpression$Wr9O = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }

    return this.selectedValuesValueExpression$Wr9O;
  }/*

  protected*/ function getPremularConfigurationsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.premularConfigurationsValueExpression$Wr9O) {
      this.premularConfigurationsValueExpression$Wr9O = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Array*/ {
        var selectedValues/*:Array*/ = this$.getSelectedValuesValueExpression().getValue();
        var initialPremularConfigurationsValueExpression/*:ValueExpression*/ = this$.initialConfig.premularConfigurationsValueExpression;

        var result/*:Array*/ = [];

        if (initialPremularConfigurationsValueExpression) {
          var initialPremularConfigurationArray/*:Array*/ = initialPremularConfigurationsValueExpression.getValue() || [];
          result = initialPremularConfigurationArray.filter(function (premularConfiguration/*:PremularConfiguration*/)/*:Boolean*/ {
            return selectedValues.indexOf(premularConfiguration.content) !== -1;
          });
        } else {
          result = selectedValues.map(function (content/*:Content*/)/*:PremularConfiguration*/ {
            return new com.coremedia.cms.editor.sdk.premular.PremularConfiguration(content);
          });
        }

        return result;
      });
    }

    return this.premularConfigurationsValueExpression$Wr9O;
  }/*

  protected*/ function pasteContents()/*:void*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var contentsToPaste/*:Array*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().getContents();
    if (contentsToPaste) {
      var newContentsToPaste/*:Array*/ = [];
      var userChosenContents/*:Array*/ = AS3.getBindable(this,"bindTo","DUMMY").getValue();
      contentsToPaste.forEach(function (content/*:Content*/)/*:void*/ {
        if (userChosenContents.indexOf(content) === -1) {
          newContentsToPaste.push(content);
        }
      });
      AS3.getBindable(this,"bindTo","DUMMY").setValue(userChosenContents.concat(newContentsToPaste));
    }
  }/*

  protected*/ function deleteContents()/*:void*/ {
    var selectedContents/*:Array*/ = this.getSelectedValuesValueExpression().getValue();
    var userChosenContents/*:Array*/ = AS3.getBindable(this,"bindTo","DUMMY").getValue();
    var newUserChosenContents/*:Array*/ = [];

    if (selectedContents) {
      for (var i/*:Number*/ = 0; i <= userChosenContents.length - 1; i++) {
        if (selectedContents.indexOf(userChosenContents[i]) === -1) {
          newUserChosenContents.push(userChosenContents[i]);
        }
      }
      AS3.getBindable(this,"bindTo","DUMMY").setValue(newUserChosenContents);
    }
  }/*

  protected*/ function getDeleteButtonDisabledValueExpression(forceReadOnlyValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var selectedItems/*:Array*/ = this$.getSelectedValuesValueExpression().getValue();
      return forceReadOnlyValueExpression && forceReadOnlyValueExpression.getValue() || !selectedItems || selectedItems.length === 0;
    });
  }/*

  protected*/ function getPasteButtonDisabledValueExpression(forceReadOnlyValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      //noinspection JSMismatchedCollectionQueryUpdate
      var contents/*:Array*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance().getContents();
      return forceReadOnlyValueExpression && forceReadOnlyValueExpression.getValue() || !contents || contents.length === 0;
    });
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.forceReadOnlyValueExpression$Wr9O && this.forceReadOnlyValueExpression$Wr9O.removeChangeListener(AS3.bind(this,"checkDropZoneDisabling$Wr9O"));

    com.coremedia.cms.editor.sdk.components.ContentGridPanel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
      selectedValuesValueExpression$Wr9O: null,
      dropZone$Wr9O: null,
      forceReadOnlyValueExpression$Wr9O: null,
      premularConfigurationsValueExpression$Wr9O: null,
      constructor: UserChosenContentGridPanelBase$,
      super$Wr9O: function() {
        com.coremedia.cms.editor.sdk.components.ContentGridPanel.prototype.constructor.apply(this, arguments);
      },
      setupUserChosenContentsGridDropZone$Wr9O: setupUserChosenContentsGridDropZone,
      checkDropZoneDisabling$Wr9O: checkDropZoneDisabling,
      getSelectedValuesValueExpression: getSelectedValuesValueExpression,
      getPremularConfigurationsValueExpression: getPremularConfigurationsValueExpression,
      pasteContents: pasteContents,
      deleteContents: deleteContents,
      getDeleteButtonDisabledValueExpression: getDeleteButtonDisabledValueExpression,
      getPasteButtonDisabledValueExpression: getPasteButtonDisabledValueExpression,
      beforeDestroy: beforeDestroy,
      config: {
        allowFolders: true,
        expandFolders: false,
        contentEditable: true
      },
      requires: [
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.components.UserChosenContentsGridDropZone"]
    };
});
