Ext.define("com.coremedia.cms.editor.sdk.upload.OpenUploadDialogActionBase", function(OpenUploadDialogActionBase) {/*package com.coremedia.cms.editor.sdk.upload {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog;
import com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil;
import com.coremedia.ui.data.ValueExpressionFactory;

public class OpenUploadDialogActionBase extends ContentAction {

  private var uploadSettings:UploadSettings;

  /**
   * @param config
   * /
  public*/ function OpenUploadDialogActionBase$(config/*:OpenUploadDialogAction = null*/) {if(arguments.length<=0)config=null;
    this.super$bxYD(config);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    if (!com.coremedia.cms.editor.sdk.upload.UploadHelper.isHTML5()) {
      return true;
    }
    var contents/*:Array*/ = this.getContents();
    if (contents === undefined) {
      return undefined;
    }
    /*always enable uploadAction in create content menu from favorites toolbar*/
    if (contents.length === 0) {
      return false;
    }
    if (contents.length !== 1) {
      return true;
    }
    var theFolder/*:Content*/ =AS3.as( contents[0],  com.coremedia.cap.content.Content);
    if (!theFolder || theFolder.isDocument()) {
      return true;
    }
    var mimeTypeMappings/*:Object*/ = this.getUploadSettings$bxYD().ensureLoaded().getMimeTypeMappings();
    if (mimeTypeMappings === undefined) {
      return undefined;
    }

    var repository/*:ContentRepository*/ = theFolder.getRepository();
    for (var mimeType/*:String*/ in mimeTypeMappings) {
      if (mimeTypeMappings.hasOwnProperty(mimeType)) {
        var contentType/*:ContentType*/ = repository.getContentType(mimeTypeMappings[mimeType]);
        if (repository.getAccessControl().mayCreate(theFolder, contentType)) {
          return false;
        }
      }
    }
    var defaultContentType/*:ContentType*/ = repository.getContentType(this.getUploadSettings$bxYD().getDefaultContentType());
    return !repository.getAccessControl().mayCreate(theFolder, defaultContentType);
  }/*

  override protected*/ function handle()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    if(contents.length > 0) {
      var content/*:Content*/ = contents[0];
      if (content.isDocument()) {
        content = content.getParent();
      }
      this.openUploadDialog$bxYD(content);
    }
    else {
      this.openUploadDialog$bxYD(null);
    }
  }/*

  private*/ function getUploadSettings()/*:UploadSettings*/ {
    if (!this.uploadSettings$bxYD) {
      this.uploadSettings$bxYD = new com.coremedia.cms.editor.sdk.upload.UploadSettings();
    }
    return this.uploadSettings$bxYD;
  }/*

  private*/ function openUploadDialog(content/*:Content*/)/*:void*/ {var this$=this;
    this.getUploadSettings$bxYD().load(function()/*:void*/ {
      if (!content) {
        var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
        if (preferredSite) {
          com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(getEditorialPathFromStudioConfiguration$static).loadValue(function(folder/*:Content*/)/*:void*/ {
            if (folder) {
              this$.createDialog$bxYD(folder);
            } else {
              var root/*:Content*/ = preferredSite.getSiteRootFolder();
              root.getChild(root.getPath(), function (folder/*:Content*/)/*:void*/ {
                if (folder) {
                  this$.createDialog$bxYD(folder);
                } else {
                  this$.createDialog$bxYD(null);
                }
              });
            }
          });
        } else {
          this$.createDialog$bxYD(com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot());
        }
      } else {
        this$.createDialog$bxYD(content);
      }
    });

  }/*

  private static*/ function getEditorialPathFromStudioConfiguration$static()/*:Content*/ {
    return com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil.getConfiguration("Content Creation", "paths.editorial");
  }/*

  private*/ function createDialog(content/*:Content*/)/*:void*/ {var this$=this;
    com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.content.ContentPropertyNames.PATH, content).loadValue(function ()/*:void*/ {
      var dialog/*:UploadDialog*/ = new com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog(AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog,{
        content: content,
        settings: this$.getUploadSettings$bxYD()
      }));
      dialog.show();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      uploadSettings$bxYD: null,
      constructor: OpenUploadDialogActionBase$,
      super$bxYD: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      calculateDisabled: calculateDisabled,
      handle: handle,
      getUploadSettings$bxYD: getUploadSettings,
      openUploadDialog$bxYD: openUploadDialog,
      createDialog$bxYD: createDialog,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.upload.UploadHelper",
        "com.coremedia.cms.editor.sdk.upload.UploadSettings",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadDialog",
        "com.coremedia.cms.editor.sdk.util.StudioConfigurationUtil"
      ]
    };
});
