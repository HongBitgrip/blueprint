Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextArea", function(CommentRichtextArea) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.WriteBeforeFlushPlugin;
import com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin;
import com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin;
import com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin;
public class CommentRichtextArea extends CommentRichtextAreaBase{

    import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.commentRichtextArea";

    public*/function CommentRichtextArea$(config/*:CommentRichtextArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase,{});
    var defaults_$1/*:CommentRichtextArea*/ =AS3.cast(CommentRichtextArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"listeners" , {'focus':AS3.bind(this,"focused"),
                                            'blur':AS3.bind(this,"blured")});
    var ui_BindPropertyPlugin_31_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_31_5_$1.bidirectional = true;
    var ui_ValueExpression_33_9_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_33_9_$1,"context" , AS3.getBindable(config,"abstractContribution"));
    AS3.setBindable(ui_ValueExpression_33_9_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                                             com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                             com.coremedia.elastic.social.studio.model.CommentPropertyNames.TEXT])));
    ui_BindPropertyPlugin_31_5_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_33_9_$1);
    var ui_WriteBeforeFlushPlugin_39_5_$1/*:com.coremedia.ui.plugins.WriteBeforeFlushPlugin*/ =AS3.cast(com.coremedia.ui.plugins.WriteBeforeFlushPlugin,{});
    AS3.setBindable(ui_WriteBeforeFlushPlugin_39_5_$1,"valueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                                        AS3.getBindable(config,"selectedProperty")]),
                                        AS3.getBindable(config,"abstractContribution")));
    var ui_RemoveCKEditorPluginsPlugin_42_5_$1/*:com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin,{});
    AS3.setBindable(ui_RemoveCKEditorPluginsPlugin_42_5_$1,"plugins" , ["cmrichtextdataprocessor,cmstyles,classstyles,bbcode"]);
    var ui_AddCKEditorPluginsPlugin_43_5_$1/*:com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin,{});
    AS3.setBindable(ui_AddCKEditorPluginsPlugin_43_5_$1,"plugins" , ["htmlwriter,elasticbbcode,entities"]);
    var ui_CustomizeCKEditorPlugin_44_5_$1/*:com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin,{});
    var object_46_9_$1/*:Object*/ = {};
    object_46_9_$1.blacklistFn =AS3.bind( this,"highlightBlacklisted");
    object_46_9_$1.forcePasteAsPlainText = true;
    ui_CustomizeCKEditorPlugin_44_5_$1.ckConfig = object_46_9_$1;
    config_$1.plugins = [ui_BindPropertyPlugin_31_5_$1, ui_WriteBeforeFlushPlugin_39_5_$1, ui_RemoveCKEditorPluginsPlugin_42_5_$1, ui_AddCKEditorPluginsPlugin_43_5_$1, ui_CustomizeCKEditorPlugin_44_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WGRk(config_$1);
  }/*

    [Bindable]
    public var abstractContribution:AbstractContributionAdministration;

    [Bindable]
    public var selectedProperty:String;

    [Bindable]
    public var fix:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.commentRichtextArea",
      constructor: CommentRichtextArea$,
      super$WGRk: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        abstractContribution: null,
        selectedProperty: null,
        fix: false
      },
      requires: [
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextAreaBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.WriteBeforeFlushPlugin",
        "com.coremedia.ui.plugins.ckeditor.AddCKEditorPluginsPlugin",
        "com.coremedia.ui.plugins.ckeditor.CustomizeCKEditorPlugin",
        "com.coremedia.ui.plugins.ckeditor.RemoveCKEditorPluginsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
