Ext.define("com.coremedia.cms.editor.sdk.sites.ContentSiteUtil", function(ContentSiteUtil) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.BeanState;

import mx.resources.ResourceManager;

public class ContentSiteUtil {

  private static const*/var SPINNER_ANIMATION_CLS$static/*:String*/ = "cm-spin";/*

  private static*/ function computeUnsortedDerivedContents$static(content/*:Content*/)/*:Array*/ {
    // Find most generic master property. The ActionScript API does not support
    // some of the convenience methods of CapPropertyDescriptor, so that we
    // have to loop through the types explicitly.
    var currentType/*:ContentType*/ = content.getType();
    if (currentType === undefined) {
      return undefined;
    }
    var masterProperty/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel().getMasterProperty();
    var ctype/*:ContentType*/ = null;
    var descriptor/*:CapPropertyDescriptor*/ = null;
    while (currentType) {
      var candidateDescriptor/*:CapPropertyDescriptor*/ = currentType.getDescriptor(masterProperty);
      if (!(candidateDescriptor && candidateDescriptor.type === com.coremedia.cap.common.CapPropertyDescriptorType.LINK)) {
        break;
      }
      ctype = currentType;
      descriptor = candidateDescriptor;

      currentType = AS3.cast(com.coremedia.cap.content.ContentType,currentType.getParent());
    }

    // If no master property was found, there are no derived contents unless the
    // master relation links unrelated types. We do not support that.
    if (!descriptor) {
      return [];
    }

    return content.getReferrersWithDescriptor(ctype, descriptor);
  }/*

  /**
   * returns the given content's derived contents together with their site, or undefined if information is not
   * completely available (value expression style).
   * @param content the content of the master site
   * @return an array of objects with a 'site' and 'content' property
   * /
  public static*/ function getDerivedContentsAndSites$static(content/*:Content*/)/*:Array*/ {
    if (content === null) {
      return [];
    }

    var referrers/*:Array*/ = computeUnsortedDerivedContents$static(content);
    if (referrers === undefined) {
      return undefined;
    }

    var siteContents/*:Array*/ = [];
    var returnUndefined/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < referrers.length; i++) {
      var referrer/*:Content*/ = referrers[i];
      var referrerState/*:BeanState*/ = referrer.getState();
      if (referrerState === com.coremedia.ui.data.BeanState.UNKNOWN) {
        returnUndefined = true;
        referrer.load();
      } else {
        if (referrerState.readable && !referrer.isDeleted()) {
          var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(referrer);
          if (site === undefined) {
            returnUndefined = true;
          }
          siteContents.push({
            site: site,
            content: referrer
          });
        }
      }
    }

    if (returnUndefined) {
      return undefined;
    }

    return siteContents;
  }/*

  public static*/ function getSiteIconCls$static(site/*:Site*/)/*:String*/ {
    if (site.isUnderConstruction()) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'tree_view_spinner') + " "  + SPINNER_ANIMATION_CLS$static;
    }
    if (site.getMasterSite() === null) {  // root site
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_siteRootFolder_icon');
    }
    if (site.isSynchronizationTargetSite()) { // synchronized site
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_synchronizedSite_icon');
    } else { // translated site
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_translatedSite_icon');
    }
  }/*
}*/function ContentSiteUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentSiteUtil$,
      statics: {
        getDerivedContentsAndSites: getDerivedContentsAndSites$static,
        getSiteIconCls: getSiteIconCls$static
      },
      requires: [
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.ui.data.BeanState",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
