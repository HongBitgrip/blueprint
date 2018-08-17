Ext.define("com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel", function(PublicationBulkResultPanel) {/*package com.coremedia.cms.editor.sdk.publication{
import com.coremedia.cms.editor.sdk.premular.*;
import com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.sdk.publication.Publisher')]
public class PublicationBulkResultPanel extends BulkResultPanel{

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.publicationBulkResultPanel";

    public*/function PublicationBulkResultPanel$(config/*:PublicationBulkResultPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel,{});
    var defaults_$1/*:PublicationBulkResultPanel*/ =AS3.cast(PublicationBulkResultPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"resourceBundle" , this.resourceManager.getResourceBundle(null, 'com.coremedia.cms.editor.sdk.publication.Publisher').content);
    AS3.setBindable(config_$1,"resourcePrefix" , "publicationResult");
    var premular_CollapsiblePanel_27_5_$1/*: com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    premular_CollapsiblePanel_27_5_$1.collapsible = false;
    premular_CollapsiblePanel_27_5_$1.header = false;
    AS3.setBindable(premular_CollapsiblePanel_27_5_$1,"html" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher',
                                                                    Ext.String.format('publicationResult_{0}_{1}_emptyMessage',
                                                                    AS3.getBindable(config,"publishOperation"), AS3.getBindable(config,"itemId","DUMMY"))));
    AS3.setBindable(config_$1,"emptyListPanel" , premular_CollapsiblePanel_27_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dLJ5(config_$1);
  }/*

    /** Whether the operation was a publication ('publish') or a withdrawal ('withdraw'). * /
    [Bindable]
    public var publishOperation:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel",
      alias: "widget.com.coremedia.cms.editor.sdk.config.publicationBulkResultPanel",
      constructor: PublicationBulkResultPanel$,
      super$dLJ5: function() {
        com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel.prototype.constructor.apply(this, arguments);
      },
      config: {publishOperation: null},
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.bulkOperation.BulkResultPanel",
        "com.coremedia.cms.editor.sdk.publication.Publisher_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.CollapsiblePanel"]
    };
});
