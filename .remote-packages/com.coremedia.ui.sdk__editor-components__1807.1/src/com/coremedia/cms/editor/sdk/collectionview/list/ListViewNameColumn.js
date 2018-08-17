Ext.define("com.coremedia.cms.editor.sdk.collectionview.list.ListViewNameColumn", function(ListViewNameColumn) {/*package com.coremedia.cms.editor.sdk.collectionview.list{
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import net.jangaroo.ext.Exml;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.StopEventPropagationPlugin;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**

 A column object that displays the name of a content in the context of a collection list view.
 This column expects that a field with the name <code>name</code> is defined.
 When this column is used in the search list it can be configured to be sortable.
 The necessary <code>sortField</code> is already configured to <code>name</code>.
 @see configureListViewPlugin

 * /
public class ListViewNameColumn extends NameColumn{

    public*/function ListViewNameColumn$(config/*:ListViewNameColumn = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.columns.grid.NameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.NameColumn,{});
    var defaults_$1/*:ListViewNameColumn*/ =AS3.cast(ListViewNameColumn,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.flex = 1.0;
    config_$1.header =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ListView_columnHeader_name') || this.resourceManager.getString('com.coremedia.cms.editor.sdk.columns.grid.GridColumns', 'name_header'));
    var textField_30_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_30_5_$1.selectOnFocus = true;
    var ui_StopEventPropagationPlugin_32_9_$1/*:com.coremedia.ui.plugins.StopEventPropagationPlugin*/ =AS3.cast(com.coremedia.ui.plugins.StopEventPropagationPlugin,{});
    textField_30_5_$1.plugins = [ui_StopEventPropagationPlugin_32_9_$1];
    textField_30_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    AS3.setBindable(config_$1,"editor" , textField_30_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$x1D3(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
      metadata: {"": ["PublicApi"]},
      constructor: ListViewNameColumn$,
      super$x1D3: function() {
        com.coremedia.cms.editor.sdk.columns.grid.NameColumn.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.form.field.Text",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.ui.plugins.StopEventPropagationPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
