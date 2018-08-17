Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainer", function(AttachmentItemContainer) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.components.ExtendedDisplayField;
public class AttachmentItemContainer extends AttachmentItemContainerBase{

    import com.coremedia.ui.data.Blob;
    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.attachmentItemContainer";

    public*/function AttachmentItemContainer$(config/*:AttachmentItemContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase,{});
    var defaults_$1/*:AttachmentItemContainer*/ =AS3.cast(AttachmentItemContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"width" , 120);
    AS3.setBindable(config_$1,"height" , 105);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_100.getSkin());
    var layout_VBox_30_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_30_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_VBox_30_5_$1);
    var ui_Image_33_5_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    AS3.setBindable(ui_Image_33_5_$1,"src" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"blob").getUri()));
    AS3.setBindable(ui_Image_33_5_$1,"maxWidth" , 100.0);
    AS3.setBindable(ui_Image_33_5_$1,"maxHeight" , 70.0);
    AS3.setBindable(ui_Image_33_5_$1,"style" , "cursor:pointer");
    AS3.setBindable(ui_Image_33_5_$1,"handler" ,AS3.bind( this,"clickOnAttachmentThumbnail"));
    ui_Image_33_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase.IMAGE_ITEM_ID);
    var ui_ExtendedDisplayField_39_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    AS3.setBindable(ui_ExtendedDisplayField_39_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.ELLIPSIS);
    ui_ExtendedDisplayField_39_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase.FILE_NAME_FIELD_ITEM_ID);
    AS3.setBindable(ui_ExtendedDisplayField_39_5_$1,"maxWidth" , 100.0);
    config_$1.items = [ui_Image_33_5_$1, ui_ExtendedDisplayField_39_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$t5fd(config_$1);
  }/*

    [Bindable]
    public var blob:Blob;

    [Bindable]
    public var attachmentHandler:Function;

    [Bindable]
    public var highlightedInWindow:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.attachmentItemContainer",
      constructor: AttachmentItemContainer$,
      super$t5fd: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        blob: null,
        attachmentHandler: null,
        highlightedInWindow: false
      },
      requires: [
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentItemContainerBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
