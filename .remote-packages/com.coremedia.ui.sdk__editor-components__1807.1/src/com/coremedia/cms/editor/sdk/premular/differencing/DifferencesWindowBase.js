Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.DifferencesWindowBase", function(DifferencesWindowBase) {/*package com.coremedia.cms.editor.sdk.premular.differencing {

import com.coremedia.cap.content.Version;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.premular.PremularBase;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.StringUtil;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DifferencesWindowBase extends StudioDialog {
  private var inVersionComparisonMode:Boolean;
  private var differencingPausedValueExpression:ValueExpression;

  public*/ function DifferencesWindowBase$(config/*:DifferencesWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$Pk_5(config);

    this.inVersionComparisonMode$Pk_5 = AS3.getBindable(this,"premular").isInVersionComparisonMode();

    AS3.getBindable(this,"premular").addListener(com.coremedia.cms.editor.sdk.premular.PremularBase.STATE_EVENT_NAME,AS3.bind( this,"premularStateChanged$Pk_5"));
    AS3.getBindable(this,"premular").addListener(com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME,AS3.bind( this,"premularReadOnlyContentChanged$Pk_5"));

    this.differencingPausedValueExpression$Pk_5 = AS3.getBindable(config,"diffManager").getPausedValueExpression();
    this.differencingPausedValueExpression$Pk_5.addChangeListener(AS3.bind(this,"onDifferencingPaused$Pk_5"));
  }/*

  /**
   * The diff manager.
   * /
  [Bindable]
  public var diffManager:DiffManager;

  /**
   * The premular.
   * /
  [Bindable]
  public var premular:PremularBase;

  private*/ function getHeaderData()/*:Object*/ {
    var version/*:Version*/ = AS3.getBindable(this,"diffManager").getVersion();
    var versionNumber/*:uint*/ = version ? version.getVersionNumber() : 0;

    var pattern/*:String*/ = AS3.getBindable(this,"premular").isInVersionComparisonMode() ?
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DifferencesWindow_headerVersion_text') :
            this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DifferencesWindow_headerMaster_text');

    return {
      message: Ext.String.format(pattern,
            versionNumber)
    };
  }/*

  protected*/ function getHeaderDataValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getHeaderData$Pk_5"));
  }/*

  private*/ function premularStateChanged()/*:void*/ {
    if (!AS3.getBindable(this,"premular").isReadOnlyDocumentPanelVisible()) {
      this.close();
    }
  }/*

  private*/ function premularReadOnlyContentChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    if (this.inVersionComparisonMode$Pk_5 !== AS3.getBindable(this,"premular").isInVersionComparisonMode()) {
      this.close();
    }
  }/*

  private*/ function onDifferencingPaused(pausedExpression/*:ValueExpression*/)/*:void*/ {
    var paused/*:Boolean*/ = pausedExpression.getValue();
    if (paused) {
      this.close();
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"premular").removeListener(com.coremedia.cms.editor.sdk.premular.PremularBase.STATE_EVENT_NAME,AS3.bind( this,"premularStateChanged$Pk_5"));
    AS3.getBindable(this,"premular").removeListener(com.coremedia.cms.editor.sdk.premular.PremularBase.READ_ONLY_CONTENT_PROPERTY_NAME,AS3.bind( this,"premularReadOnlyContentChanged$Pk_5"));

    if (this.differencingPausedValueExpression$Pk_5) {
      this.differencingPausedValueExpression$Pk_5.removeChangeListener(AS3.bind(this,"onDifferencingPaused$Pk_5"));
    }

    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      inVersionComparisonMode$Pk_5: false,
      differencingPausedValueExpression$Pk_5: null,
      constructor: DifferencesWindowBase$,
      super$Pk_5: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      getHeaderData$Pk_5: getHeaderData,
      getHeaderDataValueExpression: getHeaderDataValueExpression,
      premularStateChanged$Pk_5: premularStateChanged,
      premularReadOnlyContentChanged$Pk_5: premularReadOnlyContentChanged,
      onDifferencingPaused$Pk_5: onDifferencingPaused,
      beforeDestroy: beforeDestroy,
      config: {
        diffManager: null,
        premular: null
      },
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PremularBase"]
    };
});
