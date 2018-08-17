Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase", function(PreviewPanelToolbarBase) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry;
import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.ComponentManager;
import ext.Ext;
import ext.StringUtil;
import ext.button.SplitButton;
import ext.toolbar.Toolbar;

/**
 * The component super class for the preview that contains the
 * URL text field and the mail-to button.
 * /
[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class PreviewPanelToolbarBase extends Toolbar {

  /**
   * The itemId for the 'open in browser' button.
   * /
  public static const OPEN_IN_BROWSER_BUTTON_ITEM_ID:String = "openInBrowserPreviewToolbarButton";

  private var currentPreviewContent:Content;
  private var currentPreviewContentValueExpression:ValueExpression;

  private var emailButtonDisabledValueExpression:ValueExpression;
  private var openInBrowserDisabledValueExpression:ValueExpression;
  private var openInBrowserButton:SplitButton;


  /**
   * Create an instance.
   * /
  public*/ function PreviewPanelToolbarBase$(config/*:PreviewPanelToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$lMam(config);
    this.openInBrowserButton$lMam = AS3.cast(Ext.button.Split,this.getComponent(PreviewPanelToolbarBase.OPEN_IN_BROWSER_BUTTON_ITEM_ID));
  }/*

  /**
   * The value expression for the preview URL.
   * /
  [Bindable]
  public var urlValueExpression:ValueExpression;

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCurrentPreviewContent(content/*:Content*/)/*:void*/{
    this.currentPreviewContent$lMam = content;
    this.getCurrentPreviewContentValueExpression().setValue(this.currentPreviewContent$lMam);
  }/*

  internal*/ function getCurrentPreviewContentValueExpression()/*:ValueExpression*/ {
    if (!this.currentPreviewContentValueExpression$lMam) {
      this.currentPreviewContentValueExpression$lMam = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.currentPreviewContent$lMam);
    }
    return this.currentPreviewContentValueExpression$lMam;
  }/*

  internal*/ function getOpenInBrowserDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.openInBrowserDisabledValueExpression$lMam) {
      this.openInBrowserDisabledValueExpression$lMam = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
        return !AS3.getBindable(this$,"urlValueExpression").getValue();
      });
    }
    return this.openInBrowserDisabledValueExpression$lMam;
  }/*

  internal*/ function getEmailButtonDisabledValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.emailButtonDisabledValueExpression$lMam) {
      this.emailButtonDisabledValueExpression$lMam = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return (!(AS3.is(this$.getCurrentPreviewContentValueExpression().getValue(),  com.coremedia.cap.content.Content)));
      });
    }
    return this.emailButtonDisabledValueExpression$lMam;
  }/*

  internal*/ function openMetadataTree()/*:void*/ {
    var metadataTreeExpression/*:ValueExpression*/ =
            com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this,
                    com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_TREE_VARIABLE_NAME);
    var currentPreviewMetadataSelectionVE/*:ValueExpression*/ =
            com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this,
                    com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME);
    var metadataWindowCfg/*:MetadataWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.preview.MetadataWindow,{});
    AS3.setBindable(metadataWindowCfg,"treeVE" , metadataTreeExpression);
    AS3.setBindable(metadataWindowCfg,"selectionVE" , currentPreviewMetadataSelectionVE);
    Ext.ComponentManager.create(metadataWindowCfg).show();
  }/*

  /**
   * Generates the email content, including subject and body.
   * The body contains two links: preview and editing.
   * /
  internal*/ function handleEmail()/*:void*/ {var this$=this;
    //create the subject
    var subject/*:String*/ = Ext.String.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Mail_SendDocumentLink_subject'), this.currentPreviewContent$lMam.getName());

    //generate 2x url values
    var previewUrl/*:String*/ = AS3.getBindable(this,"urlValueExpression").getValue();
    var editUrl/*:String*/ = com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry.createRemoteControlUrl(this.currentPreviewContent$lMam);
    var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();

    user.load(function()/*:void*/ {
      //format body template
      var body/*:String*/;
      if (previewUrl) {
        body = Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Mail_SendDocumentLink_template'), user.get('name'), this$.currentPreviewContent$lMam.getName(), editUrl, previewUrl);
      } else {
        body = Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Mail_SendDocumentLinkWithoutPreview_template'), user.get('name'), this$.currentPreviewContent$lMam.getName(), editUrl);
      }
      //encode whole url
      var params/*:String*/ = Ext.urlEncode({subject: subject, body: body});
      var url/*:String*/ = Ext.urlAppend("mailto:", params);

      //regular javascript mail to link.
      window.open(url, 'emailWindow');
    });
  }/*

  /**
   * Opens the preview URL in a separate browser or opens
   * the menu containing "send link", etc. if there is no preview available.
   * /
  internal*/ function handleOpenInBrowser()/*:void*/ {
    var previewUrl/*:String*/ = AS3.getBindable(this,"urlValueExpression").getValue();
    if (previewUrl) {
      window.open(previewUrl);
    } else {
      // TODO Ext6 API
      this.openInBrowserButton$lMam['showMenu']();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {
        "": ["PublicApi"],
        setCurrentPreviewContent: ["InjectFromExtParent"]
      },
      currentPreviewContent$lMam: null,
      currentPreviewContentValueExpression$lMam: null,
      emailButtonDisabledValueExpression$lMam: null,
      openInBrowserDisabledValueExpression$lMam: null,
      openInBrowserButton$lMam: null,
      constructor: PreviewPanelToolbarBase$,
      super$lMam: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      setCurrentPreviewContent: setCurrentPreviewContent,
      getCurrentPreviewContentValueExpression: getCurrentPreviewContentValueExpression,
      getOpenInBrowserDisabledValueExpression: getOpenInBrowserDisabledValueExpression,
      getEmailButtonDisabledValueExpression: getEmailButtonDisabledValueExpression,
      openMetadataTree: openMetadataTree,
      handleEmail: handleEmail,
      handleOpenInBrowser: handleOpenInBrowser,
      config: {urlValueExpression: null},
      statics: {OPEN_IN_BROWSER_BUTTON_ITEM_ID: "openInBrowserPreviewToolbarButton"},
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.String",
        "Ext.button.Split",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.MetadataWindow",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.cms.editor.sdk.remotecontrol.remoteControlHandlerRegistry"
      ]
    };
});
