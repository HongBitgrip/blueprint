Ext.define("com.coremedia.cms.editor.sdk.plugins.TabReuseAwarePlugin", function(TabReuseAwarePlugin) {/*package com.coremedia.cms.editor.sdk.plugins {
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaBase;
import com.coremedia.cms.editor.sdk.desktop.WorkAreaTab;
import com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.plugin.AbstractPlugin;

/**
 * A plugin base class that enables awareness of tab reuse. It the component has a
 * parent container that is a WorkArea tab and this tab is subject to tab reusability,
 * the plugin offers the two hooks onBeforeTabReuse() and onAfterTabReuse().
 *
 * @See WorkArea
 * /
[PublicApi]
public class TabReuseAwarePlugin extends AbstractPlugin {

  private var component:Component;
  protected var reusableParentTab:WorkAreaTab;

  public*/ function TabReuseAwarePlugin$(config/*:TabReuseAwarePlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$6SQg(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$6SQg = component;

    if (component.ownerCt) {
      this.listenToWorkAreaTab$6SQg();
    } else {
      component.on("added",AS3.bind( this,"listenToWorkAreaTab$6SQg"));
    }
  }/*

  private*/ function listenToWorkAreaTab()/*:void*/ {
    var workArea/*:WorkArea*/ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.WorkAreaBase.COMPONENT_ID),  com.coremedia.cms.editor.sdk.desktop.WorkArea);
    if (!workArea) {
      return;
    }

    this.reusableParentTab =AS3.as( this.component$6SQg.findParentBy(function (cont/*:Container*/)/*:Boolean*/ {
      return cont.ownerCt && cont.ownerCt === workArea &&AS3.is( cont,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab) &&AS3.is( (AS3.as(cont,  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab)).getWorkAreaTabType(),  com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType);
    }),  com.coremedia.cms.editor.sdk.desktop.WorkAreaTab);
    if (!this.reusableParentTab) {
      return;
    }

    this.component$6SQg.mon(this.reusableParentTab, com.coremedia.cms.editor.sdk.desktop.WorkArea.BEFORE_TAB_REUSE_EVENT,AS3.bind( this,"onBeforeTabReuse"));
    this.component$6SQg.mon(this.reusableParentTab, com.coremedia.cms.editor.sdk.desktop.WorkArea.AFTER_TAB_REUSE_EVENT,AS3.bind( this,"onAfterTabReuse"));
  }/*

  /**
   * Hook method to react to the WorkArea.BEFORE_TAB_REUSE_EVENT event.
   * /
  //noinspection JSMethodCanBeStatic
  protected*/ function onBeforeTabReuse()/*:void*/ {
    throw AS3.cast(AS3.Error,"Needs to implemented in subclass.");
  }/*

  /**
   * Hook method to react to the WorkArea.AFTER_TAB_REUSE_EVENT event.
   * /
  //noinspection JSMethodCanBeStatic
  protected*/ function onAfterTabReuse()/*:void*/ {
    throw AS3.cast(AS3.Error,"Needs to implemented in subclass.");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      component$6SQg: null,
      reusableParentTab: null,
      constructor: TabReuseAwarePlugin$,
      super$6SQg: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      listenToWorkAreaTab$6SQg: listenToWorkAreaTab,
      onBeforeTabReuse: onBeforeTabReuse,
      onAfterTabReuse: onAfterTabReuse,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.plugin.Abstract"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTab",
        "com.coremedia.cms.editor.sdk.desktop.reusability.ReusableTabType"
      ]
    };
});
