Ext.define("com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyField", function(SynchronizationPropertyField) {/*package com.coremedia.cms.editor.sdk.synchronization{
import com.coremedia.cms.editor.sdk.synchronization.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin;
import com.coremedia.ui.components.StatefulCheckbox;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SynchronizationPropertyField extends SynchronizationPropertyFieldBase{

    import com.coremedia.ui.data.ValueExpression;

    internal static const KEEP_SITE_IN_SYNC_WITH_MASTER_FIELD:String = 'keepSiteInSyncWithMaster';

    [Bindable]
    public var propertyName:String;

    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    public*/function SynchronizationPropertyField$(config/*:SynchronizationPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase,{});
    var defaults_$1/*:SynchronizationPropertyField*/ =AS3.cast(SynchronizationPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_BindVisibilityPlugin_29_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_29_5_$1.bindTo = this.getVisibilityVE(config);
    var editor_SetPropertyLabelPlugin_30_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin,{});
    editor_SetPropertyLabelPlugin_30_5_$1.bindTo = AS3.getBindable(config,"bindTo");
    editor_SetPropertyLabelPlugin_30_5_$1.propertyName =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName"));
    config_$1.plugins = [ui_BindVisibilityPlugin_29_5_$1, editor_SetPropertyLabelPlugin_30_5_$1];
    var ui_StatefulCheckbox_35_5_$1/*:com.coremedia.ui.components.StatefulCheckbox*/ =AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    ui_StatefulCheckbox_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( SynchronizationPropertyField.KEEP_SITE_IN_SYNC_WITH_MASTER_FIELD);
    AS3.setBindable(ui_StatefulCheckbox_35_5_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'SynchronizationPropertyField_ignoreUpdates_boxLabel')));
    var editor_BindReadOnlyPlugin_38_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin,{});
    AS3.setBindable(editor_BindReadOnlyPlugin_38_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));
    editor_BindReadOnlyPlugin_38_9_$1.bindTo = AS3.getBindable(config,"bindTo");
    var editor_PropertyFieldPlugin_40_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_40_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    var ui_BindPropertyPlugin_41_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_41_9_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    ui_BindPropertyPlugin_41_9_$1.transformer = com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase.toBoolean;
    ui_BindPropertyPlugin_41_9_$1.reverseTransformer = com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase.toInt;
    ui_BindPropertyPlugin_41_9_$1.bidirectional = true;
    ui_StatefulCheckbox_35_5_$1.plugins = [editor_BindReadOnlyPlugin_38_9_$1, editor_PropertyFieldPlugin_40_9_$1, ui_BindPropertyPlugin_41_9_$1];
    config_$1.items = [ui_StatefulCheckbox_35_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EDiD(config_$1);
  }/*

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.synchronizationPropertyField";}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase",
      constructor: SynchronizationPropertyField$,
      super$EDiD: function() {
        com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      alias: "widget.com.coremedia.cms.editor.sdk.config.synchronizationPropertyField",
      config: {
        propertyName: null,
        forceReadOnlyValueExpression: null
      },
      statics: {KEEP_SITE_IN_SYNC_WITH_MASTER_FIELD: 'keepSiteInSyncWithMaster'},
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.synchronization.SynchronizationPropertyFieldBase",
        "com.coremedia.ui.components.StatefulCheckbox",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.BindReadOnlyPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPlugin"
      ]
    };
});
