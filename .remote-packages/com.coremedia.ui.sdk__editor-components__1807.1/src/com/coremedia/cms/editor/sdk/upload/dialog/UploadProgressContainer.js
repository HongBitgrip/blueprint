Ext.define("com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainer", function(UploadProgressContainer) {/*package com.coremedia.cms.editor.sdk.upload.dialog{
import com.coremedia.cms.editor.sdk.upload.dialog.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.components.StatefulProgressBar;
import ext.container.Container;
public class UploadProgressContainer extends UploadProgressContainerBase{

    import com.coremedia.ui.mixins.OverflowBehaviour;

    public static const xtype:String = "com.coremedia.blueprint.studio.config.upload.uploadProgressContainer";

    public static const PROGRESS_BAR:String = "upload-progress-bar";
    public static const PROGRESS_STATUS_TEXT:String = "progress-status-text";

    public*/function UploadProgressContainer$(config/*:UploadProgressContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase,{});
    var defaults_$1/*:UploadProgressContainer*/ =AS3.cast(UploadProgressContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_HBox_22_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_22_5_$1,"align" , "center");
    AS3.setBindable(config_$1,"layout" , layout_HBox_22_5_$1);
    var ui_ExtendedDisplayField_25_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_25_5_$1.itemId =net.jangaroo.ext.Exml.asString( UploadProgressContainer.PROGRESS_STATUS_TEXT);
    AS3.setBindable(ui_ExtendedDisplayField_25_5_$1,"value" , AS3.getBindable(config,"file").getFile().name);
    ui_ExtendedDisplayField_25_5_$1.flex = 3.0;
    AS3.setBindable(ui_ExtendedDisplayField_25_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    var ui_StatefulProgressBar_29_5_$1/*:com.coremedia.ui.components.StatefulProgressBar*/ =AS3.cast(com.coremedia.ui.components.StatefulProgressBar,{});
    ui_StatefulProgressBar_29_5_$1.itemId =net.jangaroo.ext.Exml.asString( UploadProgressContainer.PROGRESS_BAR);
    ui_StatefulProgressBar_29_5_$1.flex = 3.0;
    var container_31_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_31_5_$1,"width" , 6);
    config_$1.items = [ui_ExtendedDisplayField_25_5_$1, ui_StatefulProgressBar_29_5_$1, container_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hoXW(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase",
      alias: "widget.com.coremedia.blueprint.studio.config.upload.uploadProgressContainer",
      constructor: UploadProgressContainer$,
      super$hoXW: function() {
        com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROGRESS_BAR: "upload-progress-bar",
        PROGRESS_STATUS_TEXT: "progress-status-text"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.sdk.upload.dialog.UploadProgressContainerBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.components.StatefulProgressBar",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "net.jangaroo.ext.Exml"
      ]
    };
});
