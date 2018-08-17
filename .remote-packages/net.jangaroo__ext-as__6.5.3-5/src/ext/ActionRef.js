Ext.define("ext.ActionRef", function(ActionRef) {/*package ext {

[ExtConfig]
/**
 * A placeholder to perform an action lookup by actionId in the container hierarchy.
 * The <code>actionId</code> config is required and no other configs must be used.
 * @see ext.container.Container#getAction()
 * /
public class ActionRef extends Action {

  public*/ function ActionRef$(config/*:ActionRef = null*/) {if(arguments.length<=0)config=null;
    this.super$3XRG(config);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      constructor: ActionRef$,
      super$3XRG: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.Action"]
    };
});
