Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeader", function(ArchiveDetailStatusHeader) {/*package com.coremedia.elastic.social.studio.moderation.archive{
import com.coremedia.elastic.social.studio.moderation.archive.*;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
/** This panel indicates the status of the selected item (e.g. 'needs moderation', or 'approved and online') * /
public class ArchiveDetailStatusHeader extends ArchiveDetailStatusHeaderBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.archiveDetailStatusHeader";

    public*/function ArchiveDetailStatusHeader$(config/*:ArchiveDetailStatusHeader = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase,{});
    var defaults_$1/*:ArchiveDetailStatusHeader*/ =AS3.cast(ArchiveDetailStatusHeader,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"height" , 26);
    config_$1.cls =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase.BLOCK.getCSSClass());
    var displayField_23_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_23_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase.STATUS_FIELD_ITEM_ID);
    var container_24_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_24_5_$1.flex = 1.0;
    var displayField_25_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_25_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase.CREATION_DATE_ID);
    AS3.setBindable(displayField_25_5_$1,"margin" , "0 12 0 0");
    config_$1.items = [displayField_23_5_$1, container_24_5_$1, displayField_25_5_$1];
    var layout_HBox_29_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_29_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_29_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$S65a(config_$1);
  }/*

    [Bindable]
    public var contributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.archiveDetailStatusHeader",
      constructor: ArchiveDetailStatusHeader$,
      super$S65a: function() {
        com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase.prototype.constructor.apply(this, arguments);
      },
      config: {contributionAdministration: null},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.HBox",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
