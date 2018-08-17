Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditor", function(LinkingTaxonomyConditionEditor) {/*package com.coremedia.blueprint.base.queryeditor.conditions{
import com.coremedia.blueprint.base.queryeditor.conditions.*;
import net.jangaroo.ext.Exml;
import ext.form.field.DisplayField;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class LinkingTaxonomyConditionEditor extends LinkingTaxonomyConditionEditorBase{

    public static const xtype:String = "com.coremedia.blueprint.base.queryeditor.config.linkingTaxonomyConditionEditor";

    public*/function LinkingTaxonomyConditionEditor$(config/*:LinkingTaxonomyConditionEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase*/ =AS3.cast(com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase,{});
    var defaults_$1/*:LinkingTaxonomyConditionEditor*/ =AS3.cast(LinkingTaxonomyConditionEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var displayField_24_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_24_5_$1.anchor = "100%";
    AS3.setBindable(displayField_24_5_$1,"value" , this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_text_linking_taxonomies_linked_by'));
    config_$1.items = [displayField_24_5_$1];
    var layout_Anchor_28_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_28_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9y50(config_$1);
  }/*

    /** The property name of the struct to write into. Note that not the full path
   is passed here but the relative substruct path that maybe does not exist yet.  * /
    [Bindable]
    public var propertyName:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase",
      alias: "widget.com.coremedia.blueprint.base.queryeditor.config.linkingTaxonomyConditionEditor",
      constructor: LinkingTaxonomyConditionEditor$,
      super$9y50: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase.prototype.constructor.apply(this, arguments);
      },
      config: {propertyName: null},
      requires: [
        "Ext.form.field.Display",
        "Ext.layout.container.Anchor",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
