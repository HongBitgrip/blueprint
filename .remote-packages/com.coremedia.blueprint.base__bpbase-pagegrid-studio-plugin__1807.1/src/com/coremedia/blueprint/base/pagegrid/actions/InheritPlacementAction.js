Ext.define("com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementAction", function(InheritPlacementAction) {/*package com.coremedia.blueprint.base.pagegrid.actions{
import com.coremedia.blueprint.base.pagegrid.actions.*;
import net.jangaroo.ext.Exml;
/**
 An action to toggle the inherit state of the placement.
 * /
public class InheritPlacementAction extends InheritPlacementActionBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.ui.data.TreeRelation;
    import com.coremedia.ui.data.ValueExpression;

    public*/function InheritPlacementAction$(config/*:InheritPlacementAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase*/ =AS3.cast(com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase,{});
    var defaults_$1/*:InheritPlacementAction*/ =AS3.cast(InheritPlacementAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tUv_(config_$1);
  }/*

    /**
     * Document form content.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * The page tree relation to use for inheritance of section from parent pages
     * and locking of child pages.
     * /
    [Bindable]
    public var pageTreeRelation:TreeRelation;

    /**
     * Content that is actually defining the placement struct.
     * /
    [Bindable]
    public var storingContentValueExpression:ValueExpression;

    /**
     * An optional ValueExpression which makes the action read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    /**
     * The placement section
     * /
    [Bindable]
    public var section:Content;

    /**
     the property name of the placement struct.
     * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase",
      constructor: InheritPlacementAction$,
      super$tUv_: function() {
        com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        pageTreeRelation: null,
        storingContentValueExpression: null,
        forceReadOnlyValueExpression: null,
        section: null,
        propertyName: null
      },
      requires: [
        "com.coremedia.blueprint.base.pagegrid.actions.InheritPlacementActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
