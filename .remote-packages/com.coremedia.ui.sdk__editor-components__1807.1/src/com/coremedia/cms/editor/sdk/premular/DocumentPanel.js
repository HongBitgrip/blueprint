Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentPanel", function(DocumentPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
/**
 A panel containing document tab panels, either the read-only panel or the document panel.
 * /
public class DocumentPanel extends DocumentPanelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentPanel";

    public*/function DocumentPanel$(config/*:DocumentPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.DocumentPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentPanelBase,{});
    var defaults_$1/*:DocumentPanel*/ =AS3.cast(DocumentPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "fit");
    var editor_TabbedDocumentFormDispatcher_46_7_$1/*: com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher,{});
    editor_TabbedDocumentFormDispatcher_46_7_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.DocumentPanelBase.DISPATCHER_ITEM_ID);
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_46_7_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_46_7_$1,"premularConfigurationVE" , AS3.getBindable(config,"premularConfigurationVE"));
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_46_7_$1,"propertyFieldRegistry" , AS3.getBindable(config,"propertyFieldRegistry"));
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_46_7_$1,"focusForwarder" , AS3.getBindable(config,"focusForwarder"));
    AS3.setBindable(editor_TabbedDocumentFormDispatcher_46_7_$1,"forceReadOnlyValueExpression" , this.getForceReadOnlyValueExpression(config));
    config_$1.items = [editor_TabbedDocumentFormDispatcher_46_7_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WnR7(config_$1);
  }/*

    /**
     * The focus forwarder to use for this panel.
     * /
    [Bindable]
    public var focusForwarder:FocusForwarder;

    /**
     * the property field registry for locating fields
     * /
    [Bindable]
    public var propertyFieldRegistry:PropertyFieldRegistry;

    /**
     * The premular configuration VE that holds all prefetched data.
     * /
    [Bindable]
    public var premularConfigurationVE:ValueExpression;

    /** The function that will be called on collapse * /
    [Bindable]
    public var collapseHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentPanel",
      constructor: DocumentPanel$,
      super$WnR7: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        focusForwarder: null,
        propertyFieldRegistry: null,
        premularConfigurationVE: null,
        collapseHandler: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.DocumentPanelBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.TabbedDocumentFormDispatcher"]
    };
});
