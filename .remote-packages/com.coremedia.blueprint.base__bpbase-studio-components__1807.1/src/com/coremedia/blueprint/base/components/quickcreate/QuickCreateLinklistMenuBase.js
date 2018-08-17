Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreateLinklistMenuBase", function(QuickCreateLinklistMenuBase) {/*package com.coremedia.blueprint.base.components.quickcreate {

import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;

/**
 * The case class of the quick create menu.
 * The menu is build dynamically with the items passed with the 'contentTypes' property.
 * /
[ResourceBundle('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings')]
public class QuickCreateLinklistMenuBase extends IconButton {

  /**
   * Contains the active content.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * Default properties to be used, allows to overwrite the name and folder properties (CSV format).
   * /
  [Bindable]
  public var defaultProperties:String;

  /**
   * An optional callback that the Dialog will invoke when content creation was successfully completed.
   * Signature: function(createdContent:Content, data:ProcessingData, callback:Function):void
   * /
  [Bindable]
  public var onSuccess:Function;

  /**
   * The allowed type of links is usually derived from the link property descriptor found through bindTo and propertyName,
   * but to override this or provide an initial value for link properties in Structs that are created by this
   * property field, you may specify a custom link type.
   * /
  [Bindable]
  public var linkType:String;

  /**
   * The content property name of the list to bind the newly created content to.
   * /
  [Bindable]
  public var propertyName:String;

  /**
   * The content type names of the items to create with this menu.
   * /
  [Bindable]
  public var contentTypes:String;

  /**
   * Optional function for creating a custom model for each menu item. The method can be used to apply
   * default for some quick create properties without displaying a component for it.
   * Method signature: function(contentType:String, bindTo:ValueExpression)
   * /
  [Bindable]
  public var processingDataFactory:Function;

  /**
   * If true, the new content will be opened in a new tab. Default is true.
   * /
  [Bindable]
  public var openInTab:Boolean = true;

  /**
   * If true the default initializers are skipped after content creation. Default is false.
   * /
  [Bindable]
  public var skipInitializers:Boolean;

  /**
   * Optional: if set to false the property editors will not be inherited from the super document types.
   * Default is true, i.e. the property editors are inherited.
   * /
  [Bindable]
  public var inheritEditors:Boolean;

  /**
   * Optional ValueExpression of the original link list,
   * needed when the original link list is not a plain content array.
   * When passed, the configs for bindTo, linkType and propertyName are not needed.
   * /
  [Bindable]
  public var sourceLinkListVE:ValueExpression;

  private var contentTypesArr:Array;

  public*/ function QuickCreateLinklistMenuBase$(config/*:QuickCreateLinklistMenuBase = null*/) {if(arguments.length<=0)config=null;
    this.super$65YW(config);

    var contentTypesString/*:String*/ = AS3.getBindable(config,"contentTypes") || this.resourceManager.getString('com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings', 'default_link_list_contentTypes');
    this.contentTypesArr$65YW = contentTypesString.split(',');
  }/*

  /**
   * Dynamically adds the quick create items to the menu.
   * /
  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.IconButton.prototype.afterRender.call(this);
    for(var i/*:int*/ = 0 ; i<this.contentTypesArr$65YW.length; i++) {
      var name/*:String*/ = this.contentTypesArr$65YW[i];
      var item/*:QuickCreateMenuItem*/ = new com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItem(AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItem,{
        contentType:name,
        bindTo:AS3.getBindable(this,"bindTo"),
        propertyName:AS3.getBindable(this,"propertyName"),
        defaultProperties:AS3.getBindable(this,"defaultProperties"),
        processingDataFactory:AS3.getBindable(this,"processingDataFactory"),
        skipInitializers:AS3.getBindable(this,"skipInitializers"),
        openInTab:AS3.getBindable(this,"openInTab"),
        inheritEditors:AS3.getBindable(this,"inheritEditors"),
        linkType:AS3.getBindable(this,"linkType"),
        onSuccess:AS3.getBindable(this,"onSuccess"),
        sourceLinkListVE:AS3.getBindable(this,"sourceLinkListVE")}));
      AS3.getBindable(this,"menu","DUMMY").add(item);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IconButton",
      contentTypesArr$65YW: null,
      constructor: QuickCreateLinklistMenuBase$,
      super$65YW: function() {
        com.coremedia.ui.components.IconButton.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      config: {
        bindTo: null,
        defaultProperties: null,
        onSuccess: null,
        linkType: null,
        propertyName: null,
        contentTypes: null,
        processingDataFactory: null,
        openInTab: true,
        skipInitializers: false,
        inheritEditors: false,
        sourceLinkListVE: null
      },
      requires: [
        "com.coremedia.blueprint.base.components.quickcreate.QuickCreateSettings_properties",
        "com.coremedia.ui.components.IconButton"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.QuickCreateMenuItem"]
    };
});
