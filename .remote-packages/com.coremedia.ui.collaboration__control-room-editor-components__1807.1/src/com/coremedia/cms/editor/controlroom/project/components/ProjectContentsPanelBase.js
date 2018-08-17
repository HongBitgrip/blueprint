Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase", function(ProjectContentsPanelBase) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class ProjectContentsPanelBase extends ProjectSubPanel {
  private var listOrThumbViewVE:ValueExpression;
  private var selectedItemsVE:ValueExpression;

  public*/ function ProjectContentsPanelBase$(config/*:ProjectContentsPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$Z1T9(config);
  }/*

  protected*/ function getListOrThumbViewVE()/*:ValueExpression*/ {
    if (!this.listOrThumbViewVE$Z1T9) {
      this.listOrThumbViewVE$Z1T9 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer.LIST_VIEW_ITEM_ID);
    }

    return this.listOrThumbViewVE$Z1T9;
  }/*

  protected*/ function getSelectedItemsVE()/*:ValueExpression*/ {
    if (!this.selectedItemsVE$Z1T9) {
      this.selectedItemsVE$Z1T9 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.selectedItemsVE$Z1T9;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
      listOrThumbViewVE$Z1T9: null,
      selectedItemsVE$Z1T9: null,
      constructor: ProjectContentsPanelBase$,
      super$Z1T9: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.constructor.apply(this, arguments);
      },
      getListOrThumbViewVE: getListOrThumbViewVE,
      getSelectedItemsVE: getSelectedItemsVE,
      requires: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer"]
    };
});
