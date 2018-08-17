Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.ReusabilityComponentStatePlugin", function(ReusabilityComponentStatePlugin) {/*package com.coremedia.cms.editor.sdk.desktop.reusability{
import ext.plugin.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class ReusabilityComponentStatePlugin extends AbstractPlugin{

    import com.coremedia.ui.data.ValueExpression;

    import ext.Component;
    import ext.EventManager;
    import ext.state.StateManager;

    public*/function ReusabilityComponentStatePlugin$(config/*:ReusabilityComponentStatePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: ext.plugin.AbstractPlugin*/ =AS3.cast(Ext.plugin.Abstract,{});
    var defaults_$1/*:ReusabilityComponentStatePlugin*/ =AS3.cast(ReusabilityComponentStatePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_O3V(config_$1);
  }/*


    /**
     * The ValueExpression holding the current content context.
     * /
    [ExtConfig]
    public var bindTo:ValueExpression;

    /**
     *A state ID that together with the bindTo's content's URI path needs to be unique system-wide.
     * /
    [ExtConfig]
    public var stateId:String;

    /**
     * An array of events that trigger the saveStasteFn function.
     * /
    [ExtConfig]
    public var events:Array;

    /**
     * The function to save the component state for current content context.
     * /
    [ExtConfig]
    public var saveStateFn:Function;

    /**
     *The function to restore the previously saved component state for current content context.
     * /
    [ExtConfig]
    public var applyStateFn:Object;

    private var comp:Component;

    private static*/ var stateIds$static/*:Array*/;/* =*/function stateIds$static_(){stateIds$static=( []);};/*
    private static*/ var statesCleared$static/*:Boolean*/ = false;/*

    override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
      if (!this.stateId || !this.bindTo) {
        return;
      }

      this.comp$_O3V = component;

      this.bindTo.addChangeListener(AS3.bind(this,"applyReusabilityState$_O3V"));

      this.events.forEach(function (event/*:String*/)/*:void*/ {
        component.on(event,AS3.bind( this$,"saveReusabilityState$_O3V"));
      });

      component.on("beforedestroy", function ()/*:void*/ {
        this$.bindTo.removeChangeListener(AS3.bind(this$,"applyReusabilityState$_O3V"));
      });

      Ext.EventManager.on(window, 'beforeunload', function ()/*:void*/ {
        if (!statesCleared$static) {
          stateIds$static.forEach(function (stateId/*:String*/)/*:void*/ {
            Ext.state.Manager.clear(stateId);
          });
          statesCleared$static = true;
        }
      });
    }/*

    private*/ function applyReusabilityState()/*:void*/ {
      var reusabilityStateId/*:String*/ = this.getReusabilityStateId$_O3V();
      if (!reusabilityStateId) {
        return;
      }
      var state/*:Object*/ = Ext.state.Manager.get(reusabilityStateId, {});
      this.applyStateFn.call(this.comp$_O3V, state);
    }/*

    private*/ function saveReusabilityState()/*:void*/ {
      var reusabilityStateId/*:String*/ = this.getReusabilityStateId$_O3V();
      if (!reusabilityStateId) {
        return;
      }
      var state/*:Object*/ = this.saveStateFn.call(this.comp$_O3V);
      Ext.state.Manager.set(reusabilityStateId, state);
    }/*

    private*/ function getReusabilityStateId()/*:String*/ {
      var entity/*:Object*/ = this.bindTo.getValue();
      if (!entity) {
        return null;
      }
      var id/*:String*/ = "tabReusability_" + entity.getUriPath() + "_" + "_" + this.stateId;
      stateIds$static.push(id);
      return id;
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      constructor: ReusabilityComponentStatePlugin$,
      super$_O3V: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      bindTo: null,
      stateId: null,
      events: null,
      saveStateFn: null,
      applyStateFn: null,
      comp$_O3V: null,
      init: init,
      applyReusabilityState$_O3V: applyReusabilityState,
      saveReusabilityState$_O3V: saveReusabilityState,
      getReusabilityStateId$_O3V: getReusabilityStateId,
      statics: {
        stateIds: undefined,
        __initStatics__: function() {
          stateIds$static_();
        }
      },
      requires: [
        "Ext.EventManager",
        "Ext.plugin.Abstract",
        "Ext.state.Manager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
