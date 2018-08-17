Ext.define("com.coremedia.elastic.social.studio.plugins.AnonymousUserFilterPluginBase", function(AnonymousUserFilterPluginBase) {/*package com.coremedia.elastic.social.studio.plugins {

import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Plugin;
import ext.grid.GridPanel;

//noinspection JSUnusedGlobalSymbols
public class AnonymousUserFilterPluginBase implements Plugin {
  private var valueExpression:ValueExpression;

  //noinspection JSUnusedGlobalSymbols
  public*/ function AnonymousUserFilterPluginBase$(config/*:AnonymousUserFilterPlugin = null*/) {if(arguments.length<=0)config=null;
    this.valueExpression$Uzi0 = AS3.getBindable(config,"valueExpression");
    this.valueExpression$Uzi0.addChangeListener(AS3.bind(this,"filterUsers$Uzi0"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    if (AS3.is(component,  Ext.grid.Panel)) {
      var gridPanel/*:GridPanel*/ =AS3.as( component,  Ext.grid.Panel);
      gridPanel.addListener('afterrender',AS3.bind( this,"filterUsers$Uzi0"));
      gridPanel.addListener('beforedestroy', function ()/*:void*/ {
        this$.valueExpression$Uzi0.removeChangeListener(AS3.bind(this$,"filterUsers$Uzi0"));
        gridPanel.removeListener('afterrender',AS3.bind( this$,"filterUsers$Uzi0"));
      });
    }
  }/*

  private*/ function filterUsers()/*:void*/ {
    var users/*:Array*/ =AS3.as( this.valueExpression$Uzi0.getValue(),  Array);
    if (users) {
      var filtered/*:Array*/ = users.filter(function (user/*:User*/)/*:Boolean*/ {
        return user && !user.isAnonymous();
      });
      this.valueExpression$Uzi0.removeChangeListener(AS3.bind(this,"filterUsers$Uzi0"));
      this.valueExpression$Uzi0.setValue(filtered);
      this.valueExpression$Uzi0.addChangeListener(AS3.bind(this,"filterUsers$Uzi0"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      valueExpression$Uzi0: null,
      constructor: AnonymousUserFilterPluginBase$,
      init: init,
      filterUsers$Uzi0: filterUsers,
      requires: [
        "Ext.grid.Panel",
        "ext.Plugin"
      ]
    };
});
