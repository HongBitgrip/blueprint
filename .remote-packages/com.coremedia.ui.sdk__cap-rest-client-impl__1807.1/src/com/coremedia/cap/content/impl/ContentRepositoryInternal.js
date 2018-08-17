Ext.define("com.coremedia.cap.content.impl.ContentRepositoryInternal", function(ContentRepositoryInternal) {/*package com.coremedia.cap.content.impl {
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.ui.data.impl.URITemplate;

public interface ContentRepositoryInternal extends ContentRepository {
  function getReferrersUriTemplate():URITemplate;

  function getReferrersWithDescriptorUriTemplate():URITemplate;

  /**
   * Return an URI template for the preview controller. Insert the content ID as parameter 0.
   * @return an URI template for the preview controller.
   *
   * @see ext.StringUtil#format()
   * /
  function getPreviewControllerUriPattern():String;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.ContentRepository"],
      requires: ["com.coremedia.cap.content.ContentRepository"]
    };
});
