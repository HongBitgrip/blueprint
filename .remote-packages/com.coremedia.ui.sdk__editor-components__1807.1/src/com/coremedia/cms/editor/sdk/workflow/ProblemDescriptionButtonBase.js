Ext.define("com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButtonBase", function(ProblemDescriptionButtonBase) {/*package com.coremedia.cms.editor.sdk.workflow {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.collectionview.RepositoryState;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ProblemDescription;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EncodingUtil;

import ext.StringUtil;
import ext.dom.Element;
import ext.event.Event;
import ext.view.DataView;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.ErrorCodes')]
[ResourceBundle('com.coremedia.cms.editor.ContentTypes')]
public class ProblemDescriptionButtonBase extends DataView {
  private static const*/var CONTENT_ATTRIBUTE$static/*:String*/ = 'data-content';/*
  private static const*/var CONTENT_LINK_PATTERN$static/*:String*/;/* =*/function CONTENT_LINK_PATTERN$static_(){CONTENT_LINK_PATTERN$static=( '<a href="#" ' + CONTENT_ATTRIBUTE$static + '="{0}">{1}</a>');};/*

  private var problemDescriptionValueExpression:ValueExpression;
  private var listenerAttached:Boolean = false;

  public*/ function ProblemDescriptionButtonBase$(config/*:ProblemDescriptionButton = null*/) {if(arguments.length<=0)config=null;
    this.super$NgsL(config);

    this.problemDescriptionValueExpression$NgsL = AS3.getBindable(config,"problemDescriptionValueExpression");
    this.problemDescriptionValueExpression$NgsL.addChangeListener(AS3.bind(this,"updateLinkText$NgsL"));
    this.on('afterrender',AS3.bind( this,"updateLinkText$NgsL"));
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.problemDescriptionValueExpression$NgsL.removeChangeListener(AS3.bind(this,"updateLinkText$NgsL"));
    Ext.view.View.prototype.beforeDestroy.call(this);
  }/*

  private*/ function handleClick(e/*:Event*/, t, eOpts)/*:void*/ {
    var contentUriPath/*:String*/ =AS3.as( e.getTarget().getAttribute(CONTENT_ATTRIBUTE$static),  String);
    if (contentUriPath) {
      var content/*:Content*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContent(contentUriPath);
      if (content) {
        if (content.isFolder()) {
          var state/*:RepositoryState*/ = new com.coremedia.cms.editor.sdk.collectionview.RepositoryState();
          state.folder = content;
          com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openRepository(state);
        } else {
          com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
        }
      }
    }
  }/*

  private*/ function updateLinkText()/*:void*/ {var this$=this;
    if (!this.rendered) {
      return;
    }

    if (!this.problemDescriptionValueExpression$NgsL) {
      this.updateButtonText$NgsL('');
      return;
    }

    var problemDescription/*:ProblemDescription*/ =AS3.as( this.problemDescriptionValueExpression$NgsL.getValue(),  com.coremedia.ui.data.ProblemDescription);
    if (!problemDescription) {
      this.updateButtonText$NgsL('');
      return;
    }

    var pattern/*:String*/ = getErrorCodeLocalization$static(problemDescription.code, 'text');

    this.convertArguments$NgsL(problemDescription.arguments,
            function (patternValues/*:Array*/)/*:void*/ {
              // this is how to pass array values to varargs parameter: function.apply(this, argArray)
              var argArray/*:Array*/ = [pattern].concat(patternValues);
              this$.updateButtonText$NgsL(Ext.String.format.apply(this, argArray));
            });
  }/*

  private*/ function updateButtonText(text/*:String*/)/*:void*/ {
    var data/*:Object*/ = {
      'text': text
    };

    this.tpl.overwrite(this.getEl(), data);

    if (!this.listenerAttached$NgsL) {
      var linkEl/*:Element*/ = this.getEl().selectNode('a', false);
      if (linkEl) {
        linkEl.on('click',AS3.bind( this,"handleClick$NgsL"));
        this.listenerAttached$NgsL = true;
      }
    }

    this.updateLayout();
  }/*

  private static*/ function getErrorCodeLocalization$static(errorCode/*:String*/, suffix/*:String*/)/*:**/ {
    var escapedErrorCode/*:String*/ = errorCode.replace(/-/g, '_');
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ErrorCodes', 'ErrorCode_' + escapedErrorCode + '_' + suffix) || errorCode;
  }/*

  private*/ function convertArguments(args/*:Array*/, callback/*:Function*/)/*:void*/ {
    var contents/*:Array*/ = args.filter(
            function (o/*:Object*/)/*:Boolean*/ {
              return AS3.is( o,  com.coremedia.ui.data.RemoteBean);
            });

    com.coremedia.ui.data.RemoteBeanUtil.loadAll(
            function ()/*:void*/ {
              callback(args.map(convertArgument$static));
            },
            contents);
  }/*

  private static*/ function convertArgument$static(o/*:Object*/)/*:String*/ {
    if (AS3.is(o,  String)) {
      return String(o);
    } else if (AS3.is(o,  Number)) {
      return String(o);
    } else if (AS3.is(o,  com.coremedia.cap.content.Content)) {
      var contentLink/*:String*/ = createContentLink$static(AS3.cast(com.coremedia.cap.content.Content,o));
      return contentLink;
    } else if (AS3.is(o,  com.coremedia.cap.content.ContentType)) {
      var contentTypeName/*:String*/ = AS3.cast(com.coremedia.cap.content.ContentType,o).getName();
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', contentTypeName + '_text') || contentTypeName;
    } else if (AS3.is(o,  com.coremedia.ui.data.RemoteBean)) {
      return AS3.cast(com.coremedia.ui.data.RemoteBean,o).getUriPath();
    } else {
      return null;
    }
  }/*

  private static*/ function createContentLink$static(content/*:Content*/)/*:String*/ {
    var contentLink/*:String*/ = Ext.String.format(CONTENT_LINK_PATTERN$static,
            content.getUriPath(),
            com.coremedia.ui.util.EncodingUtil.encodeForHTML(content.getName()));

    return contentLink;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.View",
      problemDescriptionValueExpression$NgsL: null,
      listenerAttached$NgsL: false,
      constructor: ProblemDescriptionButtonBase$,
      super$NgsL: function() {
        Ext.view.View.prototype.constructor.apply(this, arguments);
      },
      beforeDestroy: beforeDestroy,
      handleClick$NgsL: handleClick,
      updateLinkText$NgsL: updateLinkText,
      updateButtonText$NgsL: updateButtonText,
      convertArguments$NgsL: convertArguments,
      statics: {
        CONTENT_LINK_PATTERN: undefined,
        __initStatics__: function() {
          CONTENT_LINK_PATTERN$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.view.View",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cms.editor.ContentTypes_properties",
        "com.coremedia.cms.editor.ErrorCodes_properties",
        "com.coremedia.ui.data.ProblemDescription",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryState",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
