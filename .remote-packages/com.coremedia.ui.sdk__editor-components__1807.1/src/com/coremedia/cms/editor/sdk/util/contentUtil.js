Ext.define("com.coremedia.cms.editor.sdk.util.contentUtil", function(contentUtil) {/*package com.coremedia.cms.editor.sdk.util {

/**
 * The global contentUtil singleton.
 * @see IContentUtil
 * /
public const contentUtil:IContentUtil =*/function contentUtil_(){return( new com.coremedia.cms.editor.sdk.util.ContentUtilImpl());}/*;

}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: contentUtil_,
      requires: ["com.coremedia.cms.editor.sdk.util.ContentUtilImpl"]
    };
});
