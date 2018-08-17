Ext.define("com.coremedia.cms.editor.sdk.member.SelectMembersContainerBase", function(SelectMembersContainerBase) {/*package com.coremedia.cms.editor.sdk.member {
import com.coremedia.cap.user.Member;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;

import ext.Component;
import ext.container.Container;
import ext.data.Model;
import ext.data.Store;
import ext.form.field.ComboBox;

public class SelectMembersContainerBase extends Container {

  /**
   * Optional callback to call after the set of selected members has changed.
   * /
  public var afterUpdateCallback:Function;

  private var selectedMembersValueExpression:ValueExpression;
  private var selectedMembersContainerBody:Container;
  private var sessionUserUriPath:String;

  public*/ function SelectMembersContainerBase$(config/*:SelectMembersContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$eV4l(config);

    this.selectedMembersValueExpression$eV4l = AS3.getBindable(config,"membersValueExpression");

    var selectedMembersContainer/*:MembersContainer*/ =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.member.SelectMembersContainer.SELECTED_MEMBERS_CT_ITEM_ID),  com.coremedia.cms.editor.sdk.member.MembersContainer);
    this.selectedMembersContainerBody$eV4l =AS3.as( selectedMembersContainer.queryById(com.coremedia.cms.editor.sdk.member.MembersContainer.MEMBERS_CT_BODY_ITEM_ID),  Ext.container.Container);

    this.sessionUserUriPath$eV4l = com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().getUriPath();

    var selectMemberCombo/*:ComboBox*/ =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.member.SelectMembersContainer.SELECT_MEMBERS_COMBO_ITEM_ID),  Ext.form.field.ComboBox);
    this.mon(selectMemberCombo, "select",AS3.bind( this,"memberSelected$eV4l"));
    this.mon(selectMemberCombo.getStore(), "load",AS3.bind( this,"filterMembers$eV4l"));
  }/*

  private*/ function scrollLastMemberIntoView()/*:void*/ {
    var lastMemberElement/*:Component*/ = this.selectedMembersContainerBody$eV4l.getComponent(this.selectedMembersContainerBody$eV4l.itemCollection.getCount() - 1);
    lastMemberElement && lastMemberElement.getEl() && lastMemberElement.getEl().dom.scrollIntoView(false);
  }/*

  private*/ function memberSelected(combo/*:ComboBox*/, record/*:Model*/)/*:void*/ {
    // Create clone via concat([])
    var newSelectedMembers/*:Array*/ = this.selectedMembersValueExpression$eV4l.getValue().concat([]);

    var uriPath/*:String*/ =AS3.as( record.get("uriPath"),  String);
    var newMember/*:Member*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath),  com.coremedia.cap.user.Member);
    var index/*:int*/ = newSelectedMembers.indexOf(newMember);
    if (index === -1) {
      newSelectedMembers.push(newMember);
    } else if (index < newSelectedMembers.length) {
      // move already selected member to the bottom of the selection list
      newSelectedMembers.splice(index, 1);
      newSelectedMembers.push(newMember);
    }

    if (newSelectedMembers.length >= (AS3.as(this.selectedMembersValueExpression$eV4l.getValue(),  Array)).length) {
      this.scrollLastMemberIntoView$eV4l();
    }

    this.selectedMembersValueExpression$eV4l.setValue(newSelectedMembers);
    combo.setValue(null);
  }/*

  private*/ function filterMembers(store/*:Store*/)/*:void*/ {var this$=this;
    //noinspection JSMismatchedCollectionQueryUpdate
    store.filterBy(function (record/*:Model*/)/*:Boolean*/ {
      var removeRecord/*:Boolean*/ = false;
      var uriPath/*:String*/ =AS3.as( record.get("uriPath"),  String);
      // filter out oneself
      if (this$.sessionUserUriPath$eV4l === uriPath) {
        removeRecord = true;
      }
      return !removeRecord;
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      afterUpdateCallback: null,
      selectedMembersValueExpression$eV4l: null,
      selectedMembersContainerBody$eV4l: null,
      sessionUserUriPath$eV4l: null,
      constructor: SelectMembersContainerBase$,
      super$eV4l: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      scrollLastMemberIntoView$eV4l: scrollLastMemberIntoView,
      memberSelected$eV4l: memberSelected,
      filterMembers$eV4l: filterMembers,
      requires: [
        "Ext.container.Container",
        "Ext.form.field.ComboBox",
        "com.coremedia.cap.user.Member",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.member.MembersContainer",
        "com.coremedia.cms.editor.sdk.member.SelectMembersContainer"
      ]
    };
});
