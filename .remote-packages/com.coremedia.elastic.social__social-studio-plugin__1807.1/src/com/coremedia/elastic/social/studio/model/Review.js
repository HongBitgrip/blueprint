Ext.define("com.coremedia.elastic.social.studio.model.Review", function(Review) {/*package com.coremedia.elastic.social.studio.model {
public interface Review extends Comment {
  function getTitle():String;
  function getRating():int;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.elastic.social.studio.model.Comment"],
      requires: ["com.coremedia.elastic.social.studio.model.Comment"]
    };
});
