Ext.define("com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPlugin", function(ConfigureListViewPlugin) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A plugin for configuring the list views of the library window. You can individually
 configure the columns for the repository and search grid by setting additional data fields
 and columns. This plugin is typically used in a plugin rules component like this:
 <pre><code>
 &lt;local:rules>
 &lt;editor:Startup>
 &lt;editor:plugins>
 &lt;editor:ConfigureListViewPlugin>
 &lt;editor:listViewDataFields>
 &lt;ui:DataField name="creator" mapping="creator.name"/>
 &lt;/editor:listViewDataFields>
 &lt;editor:searchListViewColumns>
 &lt;editor:ListViewTypeIconColumn width="120" showTypeName="true" sortable="true", u:sortField="type"
                                   u:extendOrderBy="name asc"/>
 &lt;editor:ListViewNameColumn sortable="true"/>
 &lt;GridColumn id="creator" header="Creator" sortable="true" dataIndex="creator" u:sortField="creator"/>
 &lt;/editor:searchListViewColumns>
 &lt;editor:repositoryListViewColumns>
 &lt;editor:ListViewTypeIconColumn width="75" showTypeName="true" sortable="true", u:sortField="type"
                                   u:extendOrderBy="name asc"/>
 &lt;editor:ListViewNameColumn sortable="true" u:defaultSortColumn="true" u:defaultSortDirection="desc"/>
 &lt;GridColumn id="creator" header="Creator" sortable="false" dataIndex="creator"/>
 &lt;editor:ListViewCreationDateColumn/>
 &lt;/editor:repositoryListViewColumns>
 &lt;/editor:ConfigureListViewPlugin>
 &lt;/editor:plugins>
 &lt;/editor:Startup>
 &lt;/local:rules>
 </code></pre>
 Make sure that the name of the data field(s) and the dataIndex of the column(s) match.

 * /
public class ConfigureListViewPlugin extends ConfigureListViewPluginBase{

    public*/function ConfigureListViewPlugin$(config/*:ConfigureListViewPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase,{});
    var defaults_$1/*:ConfigureListViewPlugin*/ =AS3.cast(ConfigureListViewPlugin,{});
    AS3.setBindable(defaults_$1,"instanceName" , "defaultCollectionViewList");
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$skBK(config_$1);
  }/*

    /**

     The data fields to be added to the store underlying the list view of the library window.
     Elements of the array are instances of &lt;code>datafield&lt;/code>.

     @see ext.config.datafield
     @see com.coremedia.cms.editor.sdk.IEditorContext#addListViewDataField

     * /
    [Bindable]
    public var listViewDataFields:Array;


    /**

     DEPRECATED. Use the config options &lt;code>repositoryListViewColumns&lt;/code>
     or &lt;code>searchListViewColumns&lt;/code> instead.
     Default value for the more specific list view column configurations &lt;code>repositoryListViewColumns&lt;/code>
     and &lt;code>searchListViewColumns&lt;/code>. Elements of the array are instances of &lt;code>Column&lt;/code>.

     @see ext.grid.Column
     @see com.coremedia.cms.editor.sdk.IEditorContext#setRepositoryListViewColumns
     @see com.coremedia.cms.editor.sdk.IEditorContext#setSearchListViewColumns

     * /
    [Bindable]
    public var listViewColumns:Array;


    /**

     The columns shown in the repository list view of the library window. Elements of the
     array are instances of &lt;code>Column&lt;/code>.

     @see ext.grid.Column
     @see com.coremedia.cms.editor.sdk.IEditorContext#setRepositoryListViewColumns

     * /
    [Bindable]
    public var repositoryListViewColumns:Array;


    /**

     The name of the instances of the repository and search list which has to be configured by the plugin.

     * /
    [Bindable]
    public var instanceName:String;


    /**

     The columns shown in the search list view of the library window. Elements of the
     array are instances of &lt;code>Column&lt;/code>.
     The columns can be configured to be sortable.
     If so the necessary config parameter &lt;code>sortField&lt;/code> of the column must be configured to the solr sort field.
     The optional config parameter &lt;code>extendOrderBy&lt;/code> of the column can be used to define additional sort criteria:
     It specifies a function with the primary search field and the primary search direction as arguments.
     It should return a additional search criterion as String in form of [search field][space][search direction].

     @see ext.grid.Column
     @see com.coremedia.cms.editor.sdk.config.listViewNameColumn
     @see com.coremedia.cms.editor.sdk.config.listViewCreationDateColumn
     @see com.coremedia.cms.editor.sdk.config.freshnessColumn
     @see com.coremedia.cms.editor.sdk.IEditorContext#setSearchListViewColumns


     * /
    [Bindable]
    public var searchListViewColumns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: ConfigureListViewPlugin$,
      super$skBK: function() {
        com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        listViewDataFields: null,
        listViewColumns: null,
        repositoryListViewColumns: null,
        instanceName: null,
        searchListViewColumns: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.ConfigureListViewPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
