Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewContainerBase", function(CollectionViewContainerBase) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.ui.components.SwitchingContainer;

import ext.Ext;

[ResourceBundle('com.coremedia.cms.editor.Editor')]

public class CollectionViewContainerBase extends SwitchingContainer {

  private var collectionView:CollectionView;

  public*/ function CollectionViewContainerBase$(config/*:CollectionViewContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$HhR_(config);
    this.collectionView$HhR_ =AS3.as( Ext.getCmp(com.coremedia.cms.editor.sdk.collectionview.CollectionView.COLLECTION_VIEW_ID),  com.coremedia.cms.editor.sdk.collectionview.CollectionView);
    this.on('afterrender',AS3.bind( this,"setContainerTitle"));
  }/*

  public native function get title():String;

  public*/ function setContainerTitle(containerCmp/*:CollectionViewContainer*/)/*:void*/ {
    var title/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_title');
      containerCmp['title'] = title;
      containerCmp.fireEvent('titlechange', containerCmp, title);
  }/*

  override public*/ function show(animateTarget/*:* = null*/, callback/*:Function = null*/, scope/*:Object = null*/)/*:void*/ {switch(arguments.length){case 0:animateTarget=null;case 1:callback=null;case 2:scope=null;}
    com.coremedia.ui.components.SwitchingContainer.prototype.show.call(this,animateTarget, callback, scope);
    this.collectionView$HhR_.focus();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      collectionView$HhR_: null,
      constructor: CollectionViewContainerBase$,
      super$HhR_: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      setContainerTitle: setContainerTitle,
      show: show,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.SwitchingContainer"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionView"]
    };
});
