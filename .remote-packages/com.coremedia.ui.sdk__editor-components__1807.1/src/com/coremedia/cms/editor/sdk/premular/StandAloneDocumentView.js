Ext.define("com.coremedia.cms.editor.sdk.premular.StandAloneDocumentView", function(StandAloneDocumentView) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.FitLayout;
/**
 A container that shows the document indicated by a given value expression.
 The view is not coupled to a preview.
 * /
public class StandAloneDocumentView extends StandAloneDocumentViewBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.standAloneDocumentView";

    public*/function StandAloneDocumentView$(config/*:StandAloneDocumentView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase,{});
    var defaults_$1/*:StandAloneDocumentView*/ =AS3.cast(StandAloneDocumentView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var editor_TabbedDocumentFormDispatcher_29_5_$1/*: com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher,{});
    editor_TabbedDocumentFormDispatcher_29_5_$1.itemId = "documentFormDispatcher";
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_29_5_$1,"focusForwarder" , this.getFocusForwarder());
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_29_5_$1,"propertyFieldRegistry" , this.getPropertyFieldRegistry());
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_29_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    config_$1.items = [editor_TabbedDocumentFormDispatcher_29_5_$1];
    var layout_Fit_35_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_35_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dJl7(config_$1);
  }/*

    /**
     * a property path to the Content to show
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.standAloneDocumentView",
      constructor: StandAloneDocumentView$,
      super$dJl7: function() {
        com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.sdk.premular.StandAloneDocumentViewBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher"]
    };
});
