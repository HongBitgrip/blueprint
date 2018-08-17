Ext.define("com.coremedia.ui.util.DequeNode", function(DequeNode) {/* /**
 * Created by mwe on 8/22/16.
 * /
package com.coremedia.ui.util {
internal class DequeNode {
  internal var previous:DequeNode;
  internal var next:DequeNode;
  internal var value:*;*/

  function DequeNode$(value/*:**/) {
    this.value = value;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      previous: null,
      next: null,
      value: undefined,
      constructor: DequeNode$
    };
});
