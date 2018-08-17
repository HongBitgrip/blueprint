Ext.define("com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase", function(GlobalShowStartPublicationWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {

import com.coremedia.collaboration.controlroom.rest.CapListRepository;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class GlobalShowStartPublicationWorkflowWindowActionBase extends ShowStartPublicationWorkflowWindowAction {

  private var myEditedContentsValueExpression:ValueExpression;

  public*/ function GlobalShowStartPublicationWorkflowWindowActionBase$(config/*:GlobalShowStartPublicationWorkflowWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$1oDj(config);
  }/*

  override protected*/ function onFirstComponentAdded()/*:void*/ {
    com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction.prototype.onFirstComponentAdded.call(this);
    this.myEditedContentsValueExpression$1oDj = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var capListRepository/*:CapListRepository*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance();
      return capListRepository ? capListRepository.getEditedContents().getItems() : [];
    });
    this.updateContents$1oDj();
    this.myEditedContentsValueExpression$1oDj.addChangeListener(AS3.bind(this,"updateContents$1oDj"));
  }/*

  override protected*/ function onLastComponentRemoved()/*:void*/ {
    com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction.prototype.onLastComponentRemoved.call(this);
    this.myEditedContentsValueExpression$1oDj.removeChangeListener(AS3.bind(this,"updateContents$1oDj"));
    this.myEditedContentsValueExpression$1oDj = null;
  }/*

  private*/ function updateContents()/*:void*/ {
    this.setContents(this.myEditedContentsValueExpression$1oDj.getValue());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
      myEditedContentsValueExpression$1oDj: null,
      constructor: GlobalShowStartPublicationWorkflowWindowActionBase$,
      super$1oDj: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction.prototype.constructor.apply(this, arguments);
      },
      onFirstComponentAdded: onFirstComponentAdded,
      onLastComponentRemoved: onLastComponentRemoved,
      updateContents$1oDj: updateContents,
      requires: [
        "com.coremedia.cms.editor.controlroom.actions.ShowStartPublicationWorkflowWindowAction",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
