Ext.define("com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase", function(ActionsToolbarBase) {/*package com.coremedia.cms.editor.sdk.desktop {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.toolbar.Toolbar;

[PublicApi]
public class ActionsToolbarBase extends Toolbar {

  private var content:Content;
  private var entity:Object;

  public*/ function ActionsToolbarBase$(config/*:ActionsToolbar = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$5vtR(config);
    //the provided content is injected in old-fashioned way
    //TODO: we should use IoC but currently action toolbar is not a child of workarea
    com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.addChangeListener(function()/*:void*/ {
      this$.setContent(com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.getValue());
    });

    com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION.addChangeListener(function()/*:void*/ {
      this$.setEntitiy(com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION.getValue());
    });
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getContent()/*:Content*/ {
    return this.content$5vtR;
  }/*

  /** @private * /
  public*/ function setContent(content/*:Content*/)/*:void*/ {
    var oldValue/*:**/ = this.content$5vtR;
    this.content$5vtR = content;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.CONTENT_VARIABLE_NAME, oldValue, content);
  }/*

  /** @private * /
  [ProvideToExtChildren]
  public*/ function getEntity()/*:Object*/ {
    return this.entity$5vtR;
  }/*

  /** @private * /
  public*/ function setEntitiy(entity/*:Object*/)/*:void*/ {
    var oldValue/*:**/ = this.entity$5vtR;
    this.entity$5vtR = entity;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.ENTITY_VARIABLE_NAME, oldValue, entity);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {
        "": ["PublicApi"],
        getContent: ["ProvideToExtChildren"],
        getEntity: ["ProvideToExtChildren"]
      },
      content$5vtR: null,
      entity$5vtR: null,
      constructor: ActionsToolbarBase$,
      super$5vtR: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      getContent: getContent,
      setContent: setContent,
      getEntity: getEntity,
      setEntitiy: setEntitiy,
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea"
      ]
    };
});
