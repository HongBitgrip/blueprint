Ext.define("com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn", function(NameTranslationStatusColumn) {/*package com.coremedia.cms.editor.sdk.sites{
import ext.grid.column.TemplateColumn;
import net.jangaroo.ext.Exml;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.columns.grid.GridColumns')]
/**
 A column object that displays the name and translation status.
 This column expects that a translationStatus field is defined, providing
 the content's translation status.
 * /
public class NameTranslationStatusColumn extends TemplateColumn{

    import com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil;

    import ext.XTemplate;

    /**
     * Localize the translation status of a derived content
     * from the perspective of a translator who expects
     * that the content needs translation.
     * /
    public static const STATUS_ROLE_TRANSLATOR:String =*/function STATUS_ROLE_TRANSLATOR$static_(){NameTranslationStatusColumn.STATUS_ROLE_TRANSLATOR=( com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.STATUS_ROLE_TRANSLATOR);}/*;

    /**
     * Localize the translation status of a derived content
     * from the perspective of the provider of the master content
     * who expects that the content is already translated.
     * /
    public static const STATUS_ROLE_PROVIDER:String =*/function STATUS_ROLE_PROVIDER$static_(){NameTranslationStatusColumn.STATUS_ROLE_PROVIDER=( com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.STATUS_ROLE_PROVIDER);}/*;

    public*/function NameTranslationStatusColumn$(config/*:NameTranslationStatusColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.grid.column.TemplateColumn*/ =AS3.cast(Ext.grid.column.Template,{});
    var defaults_$1/*:NameTranslationStatusColumn*/ =AS3.cast(NameTranslationStatusColumn,{});
    AS3.setBindable(defaults_$1,"role" , com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.STATUS_ROLE_TRANSLATOR);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'name_header'));
    config_$1.stateId = "name";
    config_$1.tpl = 


    new Ext.XTemplate(
    '<span data-qtip="{[com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatusTooltip(values.translationStatus, this.role)]}">',
    '{name}',
    '<tpl if="!!com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatusText(values.translationStatus, this.role)">',
    ' <span class="name-status" data-qtip="{[com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatusTooltip(values.translationStatus, this.role)]}">({[com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatusText(values.translationStatus, this.role)]})</span>',
    '</tpl>',
    '</span>',
    {role:(config && AS3.getBindable(config,"role")) || com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.STATUS_ROLE_TRANSLATOR}
    );
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BGRo(config_$1);
  }/*

    /**
     The role in the localization process of the user viewing this column.
     Use one of the constants defined in this class. Defaults to the
     translator role.
     * /
    [Bindable]
    public var role:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Template",
      metadata: {"": ["PublicApi"]},
      constructor: NameTranslationStatusColumn$,
      super$BGRo: function() {
        Ext.grid.column.Template.prototype.constructor.apply(this, arguments);
      },
      config: {role: null},
      statics: {
        STATUS_ROLE_TRANSLATOR: undefined,
        STATUS_ROLE_PROVIDER: undefined,
        __initStatics__: function() {
          STATUS_ROLE_TRANSLATOR$static_();
          STATUS_ROLE_PROVIDER$static_();
        }
      },
      requires: [
        "Ext.XTemplate",
        "Ext.grid.column.Template",
        "com.coremedia.cms.editor.sdk.columns.grid.GridColumns_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"]
    };
});
