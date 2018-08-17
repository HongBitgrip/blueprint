Ext.define("com.coremedia.cms.editor.sdk.components.BeanListChooserDataView", function(BeanListChooserDataView) {/*package com.coremedia.cms.editor.sdk.components{
import com.coremedia.cms.editor.sdk.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindSelectionPlugin;
public class BeanListChooserDataView extends BeanListChooserDataViewBase{

    import com.coremedia.ui.data.ValueExpression;

    import ext.LoadMask;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.beanListChooserDataView";

    public*/function BeanListChooserDataView$(config/*:BeanListChooserDataView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase,{});
    var defaults_$1/*:BeanListChooserDataView*/ =AS3.cast(BeanListChooserDataView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.singleSelect = true;
    config_$1.deferEmptyText = false;
    config_$1.loadingText =net.jangaroo.ext.Exml.asString( Ext.LoadMask['prototype']['msg']);
    var editor_BeanListChooserBindListPlugin_48_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin,{});
    AS3.setBindable(editor_BeanListChooserBindListPlugin_48_5_$1,"bindTo" , this.completeListByMissingSelectedElements(AS3.getBindable(config,"beanList"), AS3.getBindable(config,"selectedBeans")));
    AS3.setBindable(editor_BeanListChooserBindListPlugin_48_5_$1,"additionalFields" , AS3.getBindable(config,"dataFields"));
    var ui_DataField_52_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_52_9_$1.name = "mergedItemClass";
    ui_DataField_52_9_$1.mapping = "name";
    ui_DataField_52_9_$1["convert"] =AS3.bind( this,"getMergedItemClass");
    AS3.setBindable(editor_BeanListChooserBindListPlugin_48_5_$1,"fields" , [ui_DataField_52_9_$1]);
    var ui_BindSelectionPlugin_57_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_57_5_$1,"selectedValues" , AS3.getBindable(config,"selectedBeans"));
    config_$1.plugins = [editor_BeanListChooserBindListPlugin_48_5_$1, ui_BindSelectionPlugin_57_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vGT_(config_$1);
  }/*

    /**
     * Value expression evaluating to a list of beans to choose from.
     *
     * The expression is expected to evaluate to undefined until the list of beans is complete.
     * /
    [Bindable]
    public var beanList:ValueExpression;

    /**
     * A value expression that evaluates to a list of selected bean items.
     * /
    [Bindable]
    public var selectedBeans:ValueExpression;

    /**
     List of data fields. The dataview always provides the field 'mergedItemClass'.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var dataFields:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.beanListChooserDataView",
      constructor: BeanListChooserDataView$,
      super$vGT_: function() {
        com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        beanList: null,
        selectedBeans: null,
        dataFields: null
      },
      requires: [
        "Ext.LoadMask",
        "com.coremedia.cms.editor.sdk.components.BeanListChooserDataViewBase",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.fields.BeanListChooserBindListPlugin"]
    };
});
